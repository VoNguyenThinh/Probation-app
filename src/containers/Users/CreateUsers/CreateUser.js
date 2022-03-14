import React from "react";
import styles from "./CreateUserStyle.module.scss";
import Form from "../../../components/UltilsForm/UserForm";
import { v4 as uuidv4 } from "uuid";
import { filter } from "lodash";
import { Row, Col, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import * as rxAction from "../../../store/ReduxStore/Slice/UserSlice";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";

import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

function CreateUser(props) {
  const rxState = useSelector(getLanguage);

  const rxDispath = useDispatch();

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Saved!",
    });
  };

  const createUser = (values) => {
    values.userId = uuidv4();
    rxDispath(rxAction.createUser(values));
    openNotificationWithIcon();
  };

  const size = useBreakpoint();

  const breakPoint = filter(Object.values(size), (i) => {
    return i === true;
  }).length;

  return (
    <>
      <div className={styles.mainCreateUser}>
        <Row justify="center">
          <Col xs={23} md={23} lg={18} className={styles.mainColContent}>
            <div className={styles.mainCreateUser_title}>
              <h1>
                {
                  rxState.locale[rxState.currentLocale].messages
                    .compo_create_user
                }
              </h1>
            </div>
            <div className={styles.mainCreateUser_content}>
              <Form onFinish={createUser} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CreateUser;
