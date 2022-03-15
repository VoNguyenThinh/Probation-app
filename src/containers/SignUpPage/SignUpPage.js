import React from "react";
import styles from "./SignUpStyle.module.scss";

import { useHistory } from "react-router-dom";
import { Row, Col, Divider } from "antd";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import * as rxActions from "../../store/ReduxStore/Slice/UserSlice";
import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";
import UserForm from "../../components/UltilsForm/UserForm";

function SignUpPage(props) {
  const rxDispath = useDispatch();

  const t = useSelector(getLanguage);

  const history = useHistory();

  const onSignUp = (values) => {
    console.log(values);
    values.userId = uuidv4();

    rxDispath(rxActions.createUser(values));

    history.push("/dash-board");
  };
  return (
    <div className="container">
      <div className="login-fomrm">
        <Row align="middle" className={styles.mainRow}>
          <Col xs={1} sm={1} md={1} xl={5} span={5} />

          <Col
            xs={22}
            sm={22}
            md={22}
            xl={14}
            className={styles.mainColum}
            span={14}
          >
            <Row align="middle">
              <Col
                xs={0}
                sm={0}
                md={0}
                lg={0}
                xl={10}
                className={styles.leftImage}
                align="middle"
              >
                <h1>{t.locale[t.currentLocale].messages.signUp}</h1>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={14}
                className={styles.rightContent}
              >
                <Divider className={styles.mobileTitle}>SIGN UP</Divider>

                <UserForm onFinish={onSignUp} />
              </Col>
            </Row>
          </Col>

          <Col xs={1} sm={1} md={1} xl={5} span={5} />
        </Row>
      </div>
    </div>
  );
}

export default SignUpPage;
