import React from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import styles from "./UserFormStyle.module.scss";
const { Option } = Select;

function UserForm(props) {
  const { CreateUser, userDetail, updateUser } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    values.userId = userDetail?.userId;
    updateUser ? updateUser(values) : CreateUser(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      form={form}
      initialValues={userDetail}
    >
      {/* 2 Colums */}

      <Row>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>
      {/* 2 Colums */}

      <Row>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: `Invalid email format`,
              },
            ]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>
      {/* 2 Colums */}

      <Row>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: `Please Select one` }]}
          >
            <Select placeholder={"Gender"}>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} className={styles.FormCol12}>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>

      {/* 1Colum */}
      <Row>
        <Col span={24} className={styles.FormCol12}>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input.Password placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>

      {/* 2 Colums */}
      <Row>
        <Col span={24} className={styles.FormCol12}>
          <Form.Item
            name="bio"
            label="Bio"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input.TextArea placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>

      {!userDetail ? (
        <Row>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                SAVE
              </Button>
            </Form.Item>
          </Col>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="reset" type="danger" block>
                CANCEL
              </Button>
            </Form.Item>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                Edit
              </Button>
            </Form.Item>
          </Col>
          <Col span={12} className={styles.FormCol12}>
            <Form.Item>
              <Button htmlType="reset" type="danger" block>
                CANCEL
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </Form>
  );
}

export default UserForm;
