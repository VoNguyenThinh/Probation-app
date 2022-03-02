import React, { useState } from 'react';
import { Tabs, Row, Col, Button, Space, Form, Input, Select, Pagination, Radio, DatePicker } from "antd"
import { useStore, actions } from '../../store'
import _ from 'lodash'

import { InputConfig, DatePickerConfig, RadioConfig, SelectConfig } from '../../constans/FormItem';

const { TabPane } = Tabs;

function SumitForm(props) {
    const testData = [
        {
            btnid: '95b57d08-fcb0-439e-9b40-58fe4176e0ae', formId: 'fd1b4a26-ed59-4b15-a5e2-545bc17f6007', formTitle: 'Form 1',
            data: { type: 'TEXT', label: 'Input 1', name: 'Name 1', errormessage: 'Error 1', required: 'yes' }
        },
        {
            btnid: '6fb4d98d-8a5c-4ee7-a7bf-7411bae78057', formId: 'fd1b4a26-ed59-4b15-a5e2-545bc17f6007', formTitle: 'Form 1',
            data: { type: 'TEXT', label: 'Input 2', name: 'Name 2', errormessage: 'Error 2', required: 'no' }
        },
        {
            btnid: '94dcb756-4b2c-4772-afba-0797c954200a', formId: '94ff205b-812c-4c21-b0a5-019dfb6a5cf7', formTitle: 'Form 2',
            data: { type: 'SELECT', label: 'Select 1', name: 'sname 1', errormessage: 's-error 1', selected: '{"name":"Cam","value":"cam23"}' }
        },
        {
            btnid: '7c3c1091-bed0-4d8a-b6eb-1fc6c813b01a', formId: '94ff205b-812c-4c21-b0a5-019dfb6a5cf7', formTitle: 'Form 2',
            data: { type: 'SELECT', label: 'Select 2', name: 'sname 2', errormessage: 's-error 2', selected: '{"name":"Banana","value":"banana123"}' }
        },
    ]

    const [state, dispatch] = useStore()

    const data = state.allData

    const dataTabTitle = _.uniqBy(data, 'formId')//============||||

    const [precess, setProcess] = useState(0)

    const [visible, setVisible] = useState(checkInitData)

    const [current, setCurrent] = useState(1)

    const [form] = Form.useForm()

    // ===================================Function====================================================

    const checkInitData = () => dataTabTitle.length === 1

    const filterData = (formId) => {
        return _.filter(data, { formId: formId })
    }

    function callback(key) {
        setProcess(key)
        setCurrent(parseInt(key) + 1)

        if (parseInt(key) === dataTabTitle.length - 1) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const onFinish = (fieldsValue) => {
        console.log(fieldsValue)
    }

    const pageChage = (page) => {
        setProcess(page - 1)
        setVisible(true)
        setCurrent(page)
        if (page === dataTabTitle.length) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    // ===================================End_Function====================================================

    const typeOfProperty = {
        'TEXT': props => <InputConfig {...props} />,
        'SELECT': props => <SelectConfig {...props} />,
        'RADIO': props => <RadioConfig {...props} />,
        'DATE PICKER': props => <DatePickerConfig {...props} />,
    }

    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={12}>
                    <Form
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                    >
                        <Tabs defaultActiveKey="1" onChange={callback} activeKey={`${precess}`} >

                            {_.map(dataTabTitle, (item, index) => {
                                return (
                                    <TabPane tab={` ${item.formTitle}`} key={index} style={{ background: '#f0f2f5', padding: '10px' }}>
                                        {_.map(filterData(item.formId), (item) => {
                                            return (
                                                typeOfProperty[item.data.type]({
                                                    label: item.data.label,
                                                    name: item.data.name,
                                                    required: item.data.required,
                                                    errormessage: item.data.errormessage,
                                                    selected: item.data.selected,
                                                    selectedMultiple: item.data.selectedMultiple,
                                                })
                                            )
                                        })}
                                    </TabPane>
                                )
                            })}
                        </Tabs>

                        <Space>
                            <Pagination hideOnSinglePage={_.isEmpty(data) ? true : false} defaultCurrent={1} current={current} pageSize={1} onChange={pageChage} total={dataTabTitle.length} />
                            <Form.Item >
                                {visible && <Button
                                    type='primary'
                                    htmlType='submit'
                                    style={{ width: '10em', top: '0.85em' }}
                                >
                                    Submit
                                </Button>}
                            </Form.Item>
                        </Space>
                    </Form>
                </Col>
                <Col span={8}>
                </Col>
            </Row>
        </div >
    );
}

export default SumitForm;