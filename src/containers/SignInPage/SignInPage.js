import React from "react";

import styles from "./SignInStyle.module.scss";
import { Form, Input, Button, Divider, Row, Col, Switch, Space } from "antd";
import { UserOutlined, LockOutlined, KeyOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";
import * as rxAction from "../../store/ReduxStore/Slice/TranlationsSlice";
import { useHistory } from "react-router-dom";

function SignInPage(props) {
  const history = useHistory();
  const rxDispatch = useDispatch();
  const t = useSelector(getLanguage);

  const changeLocale = (value) => {
    const locale = value ? "vn" : "en";

    rxDispatch(rxAction.changeLocale(locale));
    rxDispatch(rxAction.setSwitch(value));
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
              <h3>{t.locale[t.currentLocale].messages.login}</h3>
            </Divider>

            <Form
              onFinish={() => {
                history.push("/dash-board");
              }}
            >
              <Form.Item
                name="username"
                className={styles.antdFormItem}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: `${
                      t.locale[t.currentLocale].messages.form_error_email
                    }`,
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
                  {
                    required: true,
                    message: `${
                      t.locale[t.currentLocale].messages.form_error_password
                    }`,
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder={
                    t.locale[t.currentLocale].messages.form_holder_pasword
                  }
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
                  {t.locale[t.currentLocale].messages.login}
                </Button>
              </Form.Item>
            </Form>

            <Button block id={styles.btnCreatAccount} size="large" type="link">
              <Space>
                <Link to={"/sign-up"}>
                  {t.locale[t.currentLocale].messages.lk_create_acount}
                </Link>
                <Switch
                  checkedChildren="VN"
                  unCheckedChildren="VN"
                  onChange={changeLocale}
                  defaultChecked={t.currentSwitch}
                />
              </Space>
            </Button>
          </Col>

          <Col xs={2} sm={4} md={6} lg={8} xl={9} span={9} />
        </Row>
      </div>
    </div>
  );
}

export default SignInPage;
