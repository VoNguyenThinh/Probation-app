import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Select, Divider, Typography, Space, Col, } from 'antd';
import _ from 'lodash'

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
    const [isRequired, setIsRequired] = useState(null)

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

export const ErrorMessage = () => {

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

export const Selected = (props) => {
    const { initialSelectData } = props
    const [items, setItems] = useState(initialSelectData);
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
        setItems([...items, { name: name, value: value }]);

        setName('');
        setValue('');

    };

    // let index = 0;


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

export const SelectMultiple = (props) => {
    const [items, setItems] = useState([{ name: "Apple", value: "Apple" }, { name: "Banana", value: "Banana" }]);

    // rutgon 
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

        //rutgon
        setName('');
        setValue('');

    };

    let index = 0;


    return (
        <Form.Item
            name="selected"
            label="Select multiple items"
            rules={[
                {
                    required: true,
                    message: 'This field do not emty',
                },
            ]}
        >
            <Select
                style={{ width: 300 }}
                placeholder="Select multiple"
                mode="multiple"
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

export const Type = (props) => {
    const { form, active, onChanged, typeOfProperty } = props

    const renderData = Object.keys(typeOfProperty);
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
            <Select style={{ width: 200 }} onChange={(value) => {
                onChanged(value)
            }}>
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
    const { submitData, dispatch, actions } = props

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