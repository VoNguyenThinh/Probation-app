import React, { useState } from 'react';
import { Button, Row, Col, Steps } from 'antd';
import _ from 'lodash'
import '../App.css'

import { Save } from './constants/FormItem';
import { CollectionCreateForm } from './constants/CollectionCreateForm'

import { useDispatch, useSelector } from 'react-redux';
import { selectMainSlice } from '../store/ReduxStore/Slice/MainSlice';

// ======================Define========================================================

const MainOption = (props) => {

    const rxState = useSelector(selectMainSlice)

    const rxDispatch = useDispatch()

    const { listOptions } = props

    let newArray = [...listOptions];

    const activeFormId = rxState.activeFormId

    const newListOptions = _.filter(newArray, { formId: activeFormId })

    const [collectionCreateForm, setCollectionCreateForm] = useState(null)

    const [submitData, setSubmitData] = useState([])

    const [btnTitle, setBtnTitle] = useState(null)

    const onCreate = (values) => {

        let newArray = _.cloneDeep(submitData)

        if (!_.isEmpty(newArray))  _.remove(newArray, { btnid: collectionCreateForm.id })

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

    const onChangeBtn = (value, btnid) => {

        let index = _.findIndex(newListOptions, { id: btnid })

        newListOptions[index].type = value

    }

    return (
        <div style={{}}>
            <Row gutter={[8, 16]} align='middle'>

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
                                {btnTitle ?? item.type}
                            </Button>
                        </Col>
                    )
                })}
                {submitData.length !== 0 && <Save submitData={submitData} rxDispatch={rxDispatch} />}
            </Row>

            {!_.isEmpty(collectionCreateForm) && <CollectionCreateForm
                collectionCreateForm={collectionCreateForm}

                rxState={rxState}
                rxDispatch={rxDispatch}

                onChangeBtn={onChangeBtn}
                submitData={submitData}
                typeOfProperty={rxState.typeOfProperty}
                onCreate={onCreate}

                onCancel={() => {
                    setCollectionCreateForm(null);
                }}
            />}

        </div>
    )

}

export default MainOption;