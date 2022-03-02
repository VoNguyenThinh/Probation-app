import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Select, Divider, Typography, Space, Col, DatePicker } from 'antd';
import _ from 'lodash'
import * as rxActions from '../../store/ReduxStore/Slice/MainSlice'

const { Option } = Select;

export const Label = (props) => {
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

export const Name = (props) => {
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

export const Required = (props) => {

    const { initialRequired } = props

    const [isRequired, setIsRequired] = useState(initialRequired)

    const ErrorMessage = () => {
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

    function onChange(e) {
        setIsRequired(e.target.value)
    }

    {
        return (
            <>
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
                    <Radio.Group onChange={onChange}>
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </Radio.Group>
                </Form.Item>

                {isRequired === 'yes' && <ErrorMessage />}

            </>


        )
    }
}

export const Type = (props) => {
    const { form, active, onChanged, typeOfProperty } = props

    const renderData = Object.keys(typeOfProperty);

    // form.setFieldsValue({
    //     type: active
    // })

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
            <Select style={{ width: 200 }} onChange={onChanged}>
                {_.map(renderData, (item, index) => {
                    return (
                        <Option key={index} value={item}>{item}</Option>
                    )
                })}
            </Select>

        </Form.Item>

    )
}

export const Save = (props) => {

    const { submitData, rxDispatch } = props

    return (
        <Col span={4}>
            <Button danger type='dashed' onClick={() => {
                let newSubmit = _.uniqBy(submitData, (e) => {
                    return e.btnid
                })
                // dispatch(actions.setProcess(4))
                rxDispatch(rxActions.setAllData(newSubmit))
                console.log(newSubmit)
            }} block>
                SAVE
            </Button>
        </Col>
    )
}

export const Selected = (props) => {

    const { rxState, rxDispatch, } = props

    const items = rxState.initialSelectData

    const [selectState, setSelectState] = useState({ name: '', value: '' })

    const onChange = (event) => {

        const { name, value } = event.target
        setSelectState(currentState => ({ ...currentState, [name]: value })) //   name: value => name: 1  , [name]: 1  => thanh: 1
    }

    const addItem = e => {

        e.preventDefault();

        rxDispatch(rxActions.addInitSelectData(selectState))

        setSelectState({ name: '', value: '' });
    };

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
                            <Input name='name' placeholder="Name" value={selectState.name} onChange={onChange} />
                            <Input name='value' placeholder="Value" value={selectState.value} onChange={onChange} />

                            <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                <PlusOutlined /> Add item
                            </Typography.Link>
                        </Space>
                    </>
                )}
            >
                {items.map(item => (
                    <Option key={item.value} value={JSON.stringify({ 'name': item.name, 'value': item.value })}>{item.name}</Option>
                ))}
            </Select>

        </Form.Item>

    )
}

export const SelectMultiple = (props) => {

    const { rxState, rxDispatch } = props

    const items = rxState.initialSelectData

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
        if (name == '' || value == '') {
            return
        }
        rxDispatch(rxActions.addInitSelectData({ name: name, value: value }))
        setName('');
        setValue('');

    };

    return (
        <Form.Item
            name="selectedMultiple"
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
                mode='multiple'
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
                    <Option key={item.value} value={JSON.stringify({ 'name': item.name, 'value': item.value })}>{item.name}</Option>
                ))}
            </Select>

        </Form.Item>
    )
}

// ==============================================================================FormItemConfig====================================================================================

export const InputConfig = (props) => {
    const { label, name, required, errormessage } = props
    const checkReq = required === 'yes' ? true : false

    return (
        <Form.Item
            wrapperCol={{ offset: 0, span: 10 }}
            labelCol={{ offset: 0, span: 2 }}
            label={label}
            name={name}
            rules={[{ required: checkReq, message: `${errormessage}` }]}
        >
            <Input />
        </Form.Item>

    )
}

export const SelectConfig = (props) => {
    const { label, name, selected, errormessage } = props
    const selectedObj = JSON.parse(selected)

    return (
        <Form.Item
            wrapperCol={{ offset: 0, span: 10 }}
            labelCol={{ offset: 0, span: 2 }}
            label={label}
            name={name}
            rules={[{
                required: true,
                message: `${errormessage}`
            }]}
        >
            <Select  >
                <Option value={selectedObj.value}>{selectedObj.name}</Option>
            </Select>

        </Form.Item>

    )
}

export const RadioConfig = (props) => {
    const { selectedMultiple, label, name, required, errormessage, } = props
    const checkReq = required === 'yes' ? true : false

    let selectedArray = _.map(selectedMultiple, (item) => {
        return JSON.parse(item)
    })

    return (
        <Form.Item
            rules={[{ required: required === 'yes', message: `${errormessage}` }]}
            name={name}
            label={label}
            wrapperCol={{ offset: 0, span: 10 }}
            labelCol={{ offset: 0, span: 2 }}
        >
            <Radio.Group>
                {
                    _.map(selectedArray, (item, index) => {
                        return (
                            <Radio key={index} value={item.value}>{item.name}</Radio>
                        )
                    })
                }
            </Radio.Group>
        </Form.Item>
    )
}

export const DatePickerConfig = (props) => {
    const { label, name, required, errormessage, } = props
    const checkReq = required === 'yes' ? true : false

    return (
        <Form.Item
            name={name}
            label={label}
            style={{ marginLeft: '30px' }}
            rules={[
                {
                    type: 'object',
                    required: checkReq,
                    message: `${errormessage}`,
                },
            ]}
        >
            <DatePicker />
        </Form.Item>
    )
}
