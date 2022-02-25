import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Form, Input, Radio, Select, Divider, Typography, Space, Row, Col, Steps } from 'antd';

import _ from 'lodash'
import '../App.css'
import { useStore, actions } from '../store';
// ======================Define========================================================
const { Option } = Select;
const { Step } = Steps;

// let activeOption = localStorage.getItem('activeOption');

const typeOfProperty = {
    'TEXT': ['type', 'label', 'name', 'erorr', 'required'],
    'SELECT': ['type', 'label', 'name', 'erorr', 'select']
}

// ======================Define=======================================================

// ====================================================================================

const Label = (props) => {
    return (
        <Form.Item
            name="label"
            label="Label"
            rules={[
                {
                    required: true,
                    message: 'This field do not emty',
                },
            ]}

        >
            <Input />
        </Form.Item>
    )
}
const Name = () => {
    return (
        <Form.Item
            name="name"
            label="Name"
            rules={[
                {
                    required: true,
                    message: 'This field do not emty',
                },
            ]}

        >
            <Input />
        </Form.Item>
    )
}
const Required = (props) => {
    {
        return (
            <Form.Item
                name="required"
                className="collection-create-form_last-form-item"
                label="Required"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Radio.Group>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                </Radio.Group>
            </Form.Item>
        )
    }
}
const Type = (props) => {
    const { active, form, onChanged } = props
    const [state, dispatch] = useStore()

    form.setFieldsValue({
        type: active
    })

    return (

        <Form.Item
            name="type"
            label="Type"
            rules={[
                {
                    required: true,
                    message: 'This field do not emty',
                },
            ]}
        >
            <Select style={{ width: 120 }} onChange={(value) => {
                dispatch(actions.setActiveOption(value))
                onChanged(value)
            }}>
                <Option value="TEXT">TEXT</Option>
                <Option value="SELECT">SELECT</Option>
            </Select>

        </Form.Item>

    )
}
const ErrorMessage = (props) => {

    return (
        <Form.Item
            name="errormessage"
            label="Error Message"
            rules={[
                {
                    required: true,
                    message: 'This field do not emty',
                },
            ]}
        >
            <Input />
        </Form.Item>
    )

}
const Selected = (props) => {
    const [items, setItems] = useState([{ name: "Apple", value: "Apple" }, { name: "Banana", value: "Banana" }]);
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const onNameChange = event => {
        setName(event.target.value);
    };
    const onValueChange = event => {
        setValue(event.target.value);
    };

    const addItem = e => {
        e.preventDefault();

        setItems([...items, { name: name, value: value } || { name: `New item ${index++}}`, value: `New item ${index++}}` }]);
        setName('');
        setValue('');

    };

    let index = 0;


    return (
        <Form.Item
            name="selected"
            label="Select options"
            rules={[
                {
                    required: true,
                    message: 'This field do not emty',
                },
            ]}
        >
            <Select
                style={{ width: 300 }}
                placeholder="Select one"
                dropdownRender={menu => (
                    <>
                        {menu}
                        <Divider style={{ margin: '8px 0' }} />
                        <Space align="center" style={{ padding: '0 8px 4px' }}>
                            <Input placeholder="Name" value={name} onChange={onNameChange} />
                            <Input placeholder="Value" value={value} onChange={onValueChange} />

                            <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                <PlusOutlined /> Add item
                            </Typography.Link>
                        </Space>
                    </>
                )}
            >
                {items.map(item => (
                    <Option key={item.value} value={JSON.stringify({ name: item.name, value: item.value })}>{item.name}</Option>
                ))}
            </Select>

        </Form.Item>

    )
}
const Save = (props) => {
    const { submitData, dispatch } = props

    return (
        <Col span={4}>
            <Button danger type='dashed' onClick={() => {
                let newSubmit = _.uniqBy(submitData, (e) => {
                    return e.btnid
                })
                dispatch(actions.setProcess(4))
                dispatch(actions.setAllData(newSubmit))
                console.log(newSubmit)
            }} block>
                SAVE
            </Button>
        </Col>
    )
}
// ====================================================================================

const typeFormItem = {
    'label': props => <Label {...props} />,
    'name': props => <Name {...props} />,
    'required': props => <Required {...props} />,
    'type': props => <Type {...props} />,
    'erorr': props => <ErrorMessage {...props} />,
    'select': props => <Selected {...props} />,
}

const CollectionCreateForm = ({ onCreate, onCancel, submitData, collectionCreateForm, setCollectionCreateForm }) => {

    const [form] = Form.useForm();
    const { type } = collectionCreateForm

    const initialValues = _.find(submitData, ['btnid', collectionCreateForm.id])


    const onChanged = (value) => {
        setCollectionCreateForm({ ...collectionCreateForm, type: value })
    }

    return (
        <Modal
            visible
            title="This is title"
            okText="Done"
            getContainer={false}
            cancelText="Cancel"
            onCancel={onCancel}

            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                name="form_in_modal"
                layout="vertical"
                initialValues={initialValues?.data ?? {}}
            >
                {_.map(typeOfProperty[collectionCreateForm.type], (items) => {
                    return (
                        typeFormItem[items]({ data: submitData, form: form, onChanged: onChanged, active: type })
                    )
                })}

            </Form>

        </Modal >
    )
};
const MainOption = (props) => {
    const [collectionCreateForm, setCollectionCreateForm] = useState(null)
    const [submitData, setSubmitData] = useState([])

    const { listOptions } = props
    const [state, dispatch] = useStore()
    // ===============================================================================
    const activeFormId = state.activeFormId

    let newArray = [...listOptions]
    const newListOptions = _.filter(newArray, { formId: activeFormId })

    // ===============================================================================



    const onCreate = (values) => {
        let newArray = _.cloneDeep(submitData)
        newArray.push(
            {
                btnid: collectionCreateForm.id,
                formId: activeFormId,
                formTitle: collectionCreateForm.formTitle,
                data: values,
            }
        )
        setSubmitData(newArray);
        setCollectionCreateForm(null);

    };


    return (
        <div style={{}}>
            <Row gutter={[8, 16]} align='middle'>
                <Steps current={state.process} style={{ marginBottom: '8px' }}>
                    <Step title="Add new form" />
                    <Step title="Add options" />
                    <Step title="Fill form" />
                    <Step title="Done" />
                </Steps>
                {_.map(newListOptions, (item) => {
                    return (
                        <Col
                            key={item.id}
                            span={4}>

                            <Button
                                type="primary"
                                onClick={() => {
                                    setCollectionCreateForm(item)
                                }}
                                block
                                className={item.type}
                            >
                                {item.type}
                            </Button>
                        </Col>
                    )
                })}
                {submitData.length !== 0 && <Save submitData={submitData} dispatch={dispatch} />}
            </Row>
            {!_.isEmpty(collectionCreateForm) && <CollectionCreateForm
                collectionCreateForm={collectionCreateForm}
                setCollectionCreateForm={setCollectionCreateForm}
                submitData={submitData}
                onCreate={onCreate}
                onCancel={() => {
                    setCollectionCreateForm(null);
                }}
            />}

        </div>
    )

}
export default MainOption;