import React, { useEffect, useState, } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Tabs, Row, Col, Button, Space, Form, Input, Select, Pagination, Radio, DatePicker } from "antd"

import { InputConfig, DatePickerConfig, RadioConfig, SelectConfig } from '../constants/FormItem';

import _ from 'lodash'

import { selectMainSlice } from '../../store/ReduxStore/Slice/MainSlice';

const { TabPane } = Tabs;

function SumitForm(props) {

    const rxState = useSelector(selectMainSlice) //==================================FROM REDUX=======================

    const data = rxState.allData

    const dataTabTitle = _.uniqBy(data, 'formId')

    const checkInitData = () => dataTabTitle.length === 1

    const [precess, setProcess] = useState(0)

    const [visible, setVisible] = useState(checkInitData)

    const [current, setCurrent] = useState(1)

    const [form] = Form.useForm()

    // ===================================Function====================================================

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
                            <Pagination hideOnSinglePage={_.isEmpty(data)} defaultCurrent={1} current={current} pageSize={1} onChange={pageChage} total={dataTabTitle.length} />
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