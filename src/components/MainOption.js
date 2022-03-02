import React, { useState } from 'react';
import { Button, Row, Col, Steps } from 'antd';
import _ from 'lodash'
import '../App.css'
import { useStore, actions } from '../store';
import { Save } from '../constans/FormItem';
import { CollectionCreateForm } from '../constans/CollectionCreateForm'

// ======================Define========================================================

const { Step } = Steps;

// const initialSelectData = [
//     { name: "Apple", value: "apple" },
//     { name: "Banana", value: "banana" }
// ];

// ======================End-Define=======================================================
const MainOption = (props) => {

    const { listOptions } = props

    let newArray = [...listOptions];

    const [state, dispatch] = useStore()

    const activeFormId = state.activeFormId

    const newListOptions = _.filter(newArray, { formId: activeFormId })

    const [collectionCreateForm, setCollectionCreateForm] = useState(null)

    const [submitData, setSubmitData] = useState([])

    const [btnTitle, setBtnTitle] = useState(null)


    const onCreate = (values) => {

        let newArray = _.cloneDeep(submitData)

        if (_.isEmpty(newArray)) {
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
        } else {
            _.remove(newArray, { btnid: collectionCreateForm.id })
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
        }
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
                {submitData.length !== 0 && <Save submitData={submitData} dispatch={dispatch} actions={actions} />}
            </Row>

            {!_.isEmpty(collectionCreateForm) && <CollectionCreateForm
                collectionCreateForm={collectionCreateForm}

                state={state}
                dispatch={dispatch}
                actions={actions}

                onChangeBtn={onChangeBtn}
                submitData={submitData}
                typeOfProperty={state.typeOfProperty}
                // initialSelectData={initialSelectData}
                onCreate={onCreate}
                onCancel={() => {

                    setCollectionCreateForm(null);
                }}
            />}

        </div>
    )

}

export default MainOption;