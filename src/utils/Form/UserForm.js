import React from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
const { Option } = Select;
function UserForm(props) {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form layout="vertical" onFinish={onFinish}>
      {/* 2 Colums */}

      <Row>
        <Col span={12} style={{ padding: "0px 10px 0px 10px" }}>
          <Form.Item
            name="FirstName"
            label="First name"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
        <Col span={12} style={{ padding: "0px 10px 0px 10px" }}>
          <Form.Item
            name="LastName"
            label="Last name"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>
      {/* 2 Colums */}

      <Row>
        <Col span={12} style={{ padding: "0px 15px 0px 10px" }}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input placeholder="Input placehoder" />
          </Form.Item>
        </Col>
        <Col span={12} style={{ padding: "0px 10px 0px 10px" }}>
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
        <Col span={12} style={{ padding: "0px 10px 0px 10px" }}>
          <Form.Item
            name="Gender"
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
        <Col span={12} style={{ padding: "0px 10px 0px 10px" }}>
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
        <Col span={24} style={{ padding: "0px 10px 0px 10px" }}>
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
        <Col span={24} style={{ padding: "0px 10px 0px 10px" }}>
          <Form.Item
            name="bio"
            label="Bio"
            rules={[{ required: true, message: `Please input` }]}
          >
            <Input.TextArea placeholder="Input placehoder" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12} style={{ padding: "0px 2px 0px 10px" }}>
          <Form.Item>
            <Button htmlType="submit" type="primary" block>
              SAVE
            </Button>
          </Form.Item>
        </Col>
        <Col span={12} style={{ padding: "0px 10px 0px 2px" }}>
          <Form.Item>
            <Button type="danger" block>
              CANCEL
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default UserForm;
