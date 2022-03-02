import React, { useState } from 'react';
import { Modal, Form } from 'antd';
import _ from 'lodash'
import { Label, Name, Required, Selected, SelectMultiple, Type, } from '../constans/FormItem';

import * as rxActions from '../store/ReduxStore/Slice/MainSlice'

export const CollectionCreateForm = ({
    onCreate,
    onCancel,
    submitData,
    collectionCreateForm,
    onChangeBtn,
    typeOfProperty,
    state,
    dispatch,
    actions,

    rxState,
    rxDispatch,
    addInitSelectData,
}) => {


    const [form] = Form.useForm();

    const [initialValues, setInitialValues] = useState(() => {

        let initialValues = _.find(submitData, ['btnid', collectionCreateForm.id]);

        return initialValues?.data
    });



    const onChanged = (value) => {

        setInitialValues({ ...initialValues, type: value })

        form.setFieldsValue({
            label: null,
            name: null,
            required: null,
            selected: null,
            errormessage: null,
            selectedMultiple: undefined,
        })

        onChangeBtn(value, collectionCreateForm.id)

        rxDispatch(rxActions.setActiveOption(value))

    }

    const typeFormItem = {
        'label': props => <Label {...props} />,
        'name': props => <Name {...props} />,
        'required': props => <Required {...props} />,
        'select': props => <Selected {...props} />,
        'select-multiple': props => <SelectMultiple {...props} />
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
                initialValues={initialValues ?? { type: collectionCreateForm.type }}
            >
                <Type form={form} active={collectionCreateForm.type} onChanged={onChanged} typeOfProperty={typeOfProperty} />

                {_.map(typeOfProperty[initialValues?.type ?? collectionCreateForm.type], (items) => {
                    return (
                        typeFormItem[items]({

                            data: submitData,
                            form: form,
                            initialRequired: initialValues?.required,
                            typeOfProperty: typeOfProperty,
                            state: state,
                            dispatch: dispatch,
                            actions: actions,
                            rxState: rxState,
                            rxDispatch: rxDispatch,
                            addInitSelectData: addInitSelectData,
                        })
                    )
                })}

            </Form>

        </Modal >
    )
};