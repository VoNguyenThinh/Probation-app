import styles from "./SignUpStyle.module.scss";

import React from "react";

import { useHistory } from "react-router-dom";

import "antd/dist/antd.css";

import { Row, Col, Divider } from "antd";

import { v4 as uuidv4 } from "uuid";

import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";

import * as rxActions from "../../store/ReduxStore/Slice/UserSlice";

import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";

import UserForm from "../../utils/Form/UserForm";

function SignUpPage(props) {
  const rxDispath = useDispatch();

  const rxState = useSelector(getLanguage);

  const history = useHistory();

  console.log(rxState.locale["en"].messages.signUp);

  const onSignUp = (values) => {
    values.userId = uuidv4();

    rxDispath(rxActions.createUser(values));

    history.push("/dash-board");
  };

  return (
    <div className="container">
      <div className="login-fomrm">
        <Row align="middle" className={styles.mainRow}>
          <Col xs={1} xl={5} span={5} />

          <Col xs={22} xl={14} className={styles.mainColum} span={14}>
            <Row>
              <Col xs={0} xl={10} span={10} className={styles.leftImage}>
                <h1>{rxState.locale[rxState.currentLocale].messages.signUp}</h1>
              </Col>
              <Col xs={24} xl={14} span={14} className={styles.rightContent}>
                <Divider className={styles.mobileTitle}>SIGN UP</Divider>

                <UserForm onSignUp={onSignUp} />
              </Col>
            </Row>
          </Col>

          <Col xs={1} xl={5} span={5} />
        </Row>
      </div>
    </div>
  );
}

export default SignUpPage;
