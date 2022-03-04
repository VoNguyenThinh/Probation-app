import styles from "./SignUpStyle.module.scss";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Divider, Row, Col, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined,
  KeyOutlined,
  CheckOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";
import * as rxActions from "../../store/ReduxStore/Slice/UserSlice";
import { getUserState } from "../../store/ReduxStore/Slice/UserSlice";

function SignUpPage(props) {
  const rxDispath = useDispatch();

  const rxState = useSelector(getUserState);

  const [isConfirm, setIsConfirm] = useState(false);

  const history = useHistory();

  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      setIsConfirm(true);
    } else {
      const omitValues = _.omit(values, ["confirmPassword"]);

      omitValues.userId = uuidv4();

      rxDispath(rxActions.createUser(omitValues));

      setIsConfirm(false);

      console.log(rxState);

      history.push("/");
    }
  };

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
              <h3>SIGN UP</h3>
            </Divider>

            <Form onFinish={onFinish}>
              {isConfirm && (
                <Alert
                  style={{ marginBottom: "24px" }}
                  message="Please make sure the passwords match!"
                  type="error"
                  showIcon
                />
              )}

              <Form.Item
                name="email"
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
                className={styles.antdFormItem}
                name="password"
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

              <Form.Item
                name="confirmPassword"
                className={styles.antdFormItem}
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Confirm Password"
                  prefix={<CheckOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="username"
                className={styles.antdFormItem}
                rules={[
                  {
                    required: true,
                    message: "Enter your full name!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Username"
                  prefix={<FormOutlined />}
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
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={2} sm={4} md={6} lg={8} xl={9} span={9} />
        </Row>
      </div>
    </div>
  );
}

export default SignUpPage;
