import React from 'react';
import { Modal, Form } from 'antd';
import _ from 'lodash'

import { Label, Name, Required, Selected, SelectMultiple, Type, } from '../constans/FormItem';


export const CollectionCreateForm = ({
    onCreate,
    onCancel,
    submitData,
    collectionCreateForm,
    setCollectionCreateForm,
    typeOfProperty,
    initialSelectData,
    dispatch,
    actions
}) => {

    const [form] = Form.useForm();

    const { type } = collectionCreateForm

    const initialValues = _.find(submitData, ['btnid', collectionCreateForm.id])

    const onChanged = (value) => {
        setCollectionCreateForm({ ...collectionCreateForm, type: value })
        dispatch(actions.setActiveOption(value))
    }

    const typeFormItem = {
        'label': props => <Label {...props} />,
        'name': props => <Name {...props} />,
        'required': props => <Required {...props} />,
        'type': props => <Type {...props} />,
        'select': props => <Selected {...props} />,
        'select-multiple': props => <SelectMultiple {...props} />
    }

    // console.log(initialValues)

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
                initialValues={initialValues?.data ?? { type: collectionCreateForm.type }}
            >
                {_.map(typeOfProperty[collectionCreateForm.type], (items) => {
                    return (
                        typeFormItem[items]({
                            data: submitData,
                            form: form,
                            onChanged: onChanged,
                            active: type,
                            typeOfProperty: typeOfProperty,
                            initialSelectData: initialSelectData
                        })
                    )
                })}

            </Form>

        </Modal >
    )
};