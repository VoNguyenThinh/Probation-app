import styles from "./SignInStyle.module.scss";

import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Divider, Row, Col } from "antd";
import { UserOutlined, LockOutlined, KeyOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

function SignInPage(props) {
  return (
    <div className="container">
      <div className="login-fomrm">
        <Row align="middle" className={styles.mainRow}>
          <Col xs={2} sm={4} md={6} lg={8} xl={9} span={9} />

          <Col
            className={styles.mainColum}
            xs={20}
            sm={16}
            md={12}
            lg={8}
            xl={6}
            span={6}
          >
            <Divider plain>
              <h3>LOGIN</h3>
            </Divider>

            <Form onFinish={() => {}}>
              <Form.Item
                name="username"
                className={styles.antdFormItem}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Invalid email format !",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Email"
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                className={styles.antdFormItem}
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  size="large"
                  type="primary"
                  htmlType="submit"
                  icon={<KeyOutlined />}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
            <Button block id={styles.btnCreatAccount} size="large" type="link">
              <Link to={"/sign-up"}>Create an account.</Link>
            </Button>
          </Col>

          <Col xs={2} sm={4} md={6} lg={8} xl={9} span={9} />
        </Row>
      </div>
    </div>
  );
}

export default SignInPage;
