import React, { useState } from 'react';

import { Button, Row, Col, Steps } from 'antd';

import _ from 'lodash'

import '../App.css'

import { useStore, actions } from '../store';

import { Save } from '../constans/FormItem';

import { CollectionCreateForm } from '../constans/CollectionCreateForm'

// ======================Define========================================================

const { Step } = Steps;

const initialSelectData = [
    { name: "Apple", value: "apple" },
    { name: "Banana", value: "banana" }
];

// ======================End-Define=======================================================
const MainOption = (props) => {

    const { listOptions } = props

    const [collectionCreateForm, setCollectionCreateForm] = useState(null)

    const [submitData, setSubmitData] = useState([])

    const [state, dispatch] = useStore()

    // ===============================================================================
    const activeFormId = state.activeFormId

    let newArray = [...listOptions]

    const newListOptions = _.filter(newArray, { formId: activeFormId })

    // ===============================================================================

    const onCreate = (values) => {

        let newArray = _.cloneDeep(submitData)

        if (_.isEmpty(newArray)) {
            console.log('lan dau')
            newArray.push(
                {
                    btnid: collectionCreateForm.id,
                    formId: activeFormId,
                    formTitle: collectionCreateForm.formTitle,
                    data: values,
                }
            )
            setSubmitData(newArray);
        } else {

            // console.log('lan sau')
            // console.log('lan sau')

        }


        setSubmitData(newArray);

        setCollectionCreateForm(null);

    };

    return (
        <div style={{}}>
            <Row gutter={[8, 16]} align='middle'>

                {/* <Steps current={state.process} style={{ marginBottom: '8px' }}>
                    <Step title="Add new form" />
                    <Step title="Add options" />
                    <Step title="Fill form" />
                    <Step title="Done" />
                </Steps> */}

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
                {submitData.length !== 0 && <Save submitData={submitData} dispatch={dispatch} actions={actions} />}
            </Row>

            {!_.isEmpty(collectionCreateForm) && <CollectionCreateForm
                collectionCreateForm={collectionCreateForm}
                setCollectionCreateForm={setCollectionCreateForm}
                state={state}
                dispatch={dispatch}
                submitData={submitData}
                actions={actions}
                typeOfProperty={state.typeOfProperty}
                initialSelectData={initialSelectData}
                onCreate={onCreate}
                onCancel={() => {
                    setCollectionCreateForm(null);
                }}
            />}

        </div>
    )

}

export default MainOption;