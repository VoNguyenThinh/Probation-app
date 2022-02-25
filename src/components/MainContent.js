import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col, Modal, Button, Form, Input, } from 'antd';
import "antd/dist/antd.css";
import MainContentList from './MainContentList';
import MainOption from './MainOption'
import { v4 as uuidv4 } from 'uuid';
import { useStore, actions } from '../store'
import dist from '@testing-library/user-event';

function MainContent(props) {
    const [listForms, setListForms] = useState([])
    const [activeForm, setActiveForm] = useState()
    const [visible, setVisible] = useState(false);
    const [state, dispatch] = useStore()

    const { activeOption, textNum, listOptions } = props

    // ------------All-function-----------------------------------------

    const handleClickFormItem = (item) => {
        dispatch(actions.setClicked(true))

        setActiveForm(item.id)
        dispatch(actions.setFormId(item.id))
        dispatch(actions.setFormTile(item.title))
    }

    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
            <Modal
                visible={visible}
                title="This is title"
                okText="Add new"
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
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{
                        modifier: 'public',
                    }}
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

    const onCreate = (values) => {
        setVisible(false);

        let newArray = [...listForms]
        newArray.push(
            {
                title: values.title,
                id: uuidv4()
            }
        )
        setListForms(newArray)
        dispatch(actions.setProcess(1))
    };

    // ------------function--------------------------------------------

    return (
        <div>
            <Row>
                <Col style={{ borderRight: 'solid black 1px', padding: '25px' }} span={8}>
                    <Button
                        type="primary"
                        onClick={() => {
                            setVisible(true);
                        }}
                    >
                        Add New
                    </Button>
                    <MainContentList
                        data={listForms}
                        handleClick={handleClickFormItem}
                        activeId={activeForm}
                    />
                </Col>

                <Col style={{ padding: '25px' }} span={16}>
                    <MainOption activeOption={activeOption} textNum={textNum} listOptions={listOptions} />
                    {/* <CreateOption /> */}
                </Col>

            </Row>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div >
    );
}

export default MainContent;