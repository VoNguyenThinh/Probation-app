import React from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import styles from "./UserFormStyle.module.scss";

import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";
import { useSelector } from "react-redux";
const { Option } = Select;

function UserForm(props) {
  const { initialValues, onFinish } = props;

  const [form] = Form.useForm();

  initialValues &&
    form.setFieldsValue({
      firstName: initialValues.firstName,
      lastName: initialValues.lastName,
      email: initialValues.email,
      gender: initialValues.gender,
      address: initialValues.address,
      password: initialValues.password,
      bio: initialValues.bio,
      firstName: initialValues.firstName,
      phone: initialValues.phone,
    });

  const onFinished = (values) => {
    onFinish && onFinish(values);
  };

  const rxState = useSelector(getLanguage);

  return (
    <Form
      layout="vertical"
      onFinish={onFinished}
      form={form}
      initialValues={initialValues}
    >
      <Row>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="firstName"
            label={
              rxState.locale[rxState.currentLocale].messages.form_firstname
            }
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Input
              placeholder={
                rxState.locale[rxState.currentLocale].messages
                  .form_holder_firstname
              }
            />
          </Form.Item>
        </Col>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="lastName"
            label={rxState.locale[rxState.currentLocale].messages.form_lastname}
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Input
              placeholder={
                rxState.locale[rxState.currentLocale].messages
                  .form_holder_lastname
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: `${
                  rxState.locale[rxState.currentLocale].messages
                    .form_error_email
                }`,
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </Col>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="phone"
            label={rxState.locale[rxState.currentLocale].messages.form_phone}
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Input
              placeholder={
                rxState.locale[rxState.currentLocale].messages.form_holder_phone
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="gender"
            label={rxState.locale[rxState.currentLocale].messages.form_gender}
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Select
              placeholder={
                rxState.locale[rxState.currentLocale].messages
                  .form_holder_gender
              }
            >
              <Option value="Male">
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_select_male
                }
              </Option>
              <Option value="Female">
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_select_female
                }
              </Option>
              <Option value="Other">
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_select_other
                }
              </Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="address"
            label={rxState.locale[rxState.currentLocale].messages.form_address}
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Input
              placeholder={
                rxState.locale[rxState.currentLocale].messages
                  .form_holder_address
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} className={styles.FormCol12}>
          <Form.Item
            name="password"
            label={rxState.locale[rxState.currentLocale].messages.form_password}
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Input.Password
              placeholder={
                rxState.locale[rxState.currentLocale].messages
                  .form_holder_pasword
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} className={styles.FormCol12}>
          <Form.Item
            name="bio"
            label={rxState.locale[rxState.currentLocale].messages.form_bio}
            rules={[
              {
                required: true,
                message: `${
                  rxState.locale[rxState.currentLocale].messages.form_error
                }`,
              },
            ]}
          >
            <Input.TextArea
              placeholder={
                rxState.locale[rxState.currentLocale].messages.form_holder_bio
              }
            />
          </Form.Item>
        </Col>
      </Row>

      {!initialValues ? (
        <Row>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_button_save
                }
              </Button>
            </Form.Item>
          </Col>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="reset" type="danger" block>
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_button_cancel
                }
              </Button>
            </Form.Item>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_button_edit
                }
              </Button>
            </Form.Item>
          </Col>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="reset" type="danger" block>
                {
                  rxState.locale[rxState.currentLocale].messages
                    .form_button_cancel
                }
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </Form>
  );
}

export default UserForm;
