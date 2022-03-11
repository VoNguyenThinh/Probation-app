import React from "react";
import styles from "./CreateUserStyle.module.scss";
import Form from "../Form/UserForm";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Row, Col, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import * as rxAction from "../../store/ReduxStore/Slice/UserSlice";
import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";

import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

function CreateUser(props) {
  const { title, userDetail, updateUser } = props;

  const rxState = useSelector(getLanguage);

  const rxDispath = useDispatch();

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Saved!",
    });
  };

  const CreateUser = (values) => {
    values.userId = uuidv4();
    rxDispath(rxAction.createUser(values));
    openNotificationWithIcon();
  };

  const size = useBreakpoint();

  const breakPoint = _.filter(Object.values(size), (i) => {
    return i === true;
  }).length;

  return (
    <>
      {/* ========================================For PC======================================== */}
      {breakPoint === 5 && (
        <div className={styles.CreateUser_PC}>
          <Row>
            <Col span={3} />
            <Col span={18} className={styles.mainColContent}>
              <div className={styles.mainCreateUser_title}>
                <h1>
                  {title
                    ? title
                    : `${
                        rxState.locale[rxState.currentLocale].messages
                          .compo_create_user
                      }`}
                </h1>
              </div>
              <div className={styles.mainCreateUser_content}>
                <Form CreateUser={CreateUser} />
              </div>
            </Col>
            <Col span={3} />
          </Row>
        </div>
      )}

      {/* ========================================For Tablet======================================== */}
      {breakPoint === 2 && (
        <div className={styles.CreateUser_Tablet}>
          <Row>
            <Col span={24} className={styles.mainColContent}>
              <div className={styles.mainCreateUser_title}>
                <h1>
                  {title
                    ? title
                    : `${
                        rxState.locale[rxState.currentLocale].messages
                          .compo_create_user
                      }`}
                </h1>
              </div>
              <div className={styles.mainCreateUser_content}>
                <Form
                  CreateUser={CreateUser}
                  userDetail={userDetail}
                  updateUser={updateUser}
                />
              </div>
            </Col>
          </Row>
        </div>
      )}

      {/* ========================================For Mobile======================================== */}
      {breakPoint === 1 && (
        <div className={styles.CreateUser_Mobile}>
          <Row>
            <Col span={24} className={styles.mainColContent}>
              <div className={styles.mainCreateUser_title}>
                <h1>
                  {title
                    ? title
                    : `${
                        rxState.locale[rxState.currentLocale].messages
                          .compo_create_user
                      }`}
                </h1>
              </div>
              <div className={styles.mainCreateUser_content}>
                <Form
                  CreateUser={CreateUser}
                  userDetail={userDetail}
                  updateUser={updateUser}
                />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default CreateUser;
