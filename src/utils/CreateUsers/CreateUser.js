import React from "react";
import styles from "./CreateUserStyle.module.scss";
import Form from "../Form/UserForm";
import { v4 as uuidv4 } from "uuid";

import { Row, Col, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { getUserState } from "../../store/ReduxStore/Slice/UserSlice";
import * as rxAction from "../../store/ReduxStore/Slice/UserSlice";

function CreateUser(props) {
  const { title, userDetail, updateUser } = props;

  const rxDispath = useDispatch();

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Saved!",
    });
  };

  const CreateUser = (values, form) => {
    values.userId = uuidv4();
    rxDispath(rxAction.createUser(values));
    openNotificationWithIcon();
  };

  return (
    <>
      <div className={styles.CreateUser_PC}>
        <Row>
          <Col span={3} />
          <Col span={18} className={styles.mainColContent}>
            <div className={styles.mainCreateUser_title}>
              <h1>{title ? title : "CREATE NEW USER"}</h1>
            </div>
            <div className={styles.mainCreateUser_content}>
              <Form CreateUser={CreateUser} />
            </div>
          </Col>
          <Col span={3} />
        </Row>
      </div>

      <div className={styles.CreateUser_Mobile}>
        <Row>
          <Col span={24} className={styles.mainColContent}>
            <div className={styles.mainCreateUser_title}>
              <h1>{title ? title : "CREATE NEW USER"}</h1>
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
    </>
  );
}

export default CreateUser;
