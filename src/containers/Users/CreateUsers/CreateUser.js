import React from "react";
import styles from "./CreateUserStyle.module.scss";
import Form from "../../../components/UltilsForm/UserForm";
import { Row, Col, notification } from "antd";

import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";

import userAPI from "../../../Api/userAPI/userAPI";
import { useHistory } from "react-router-dom";

function CreateUser(props) {
  const t = useSelector(getLanguage);

  const history = useHistory();

  const openNotificationSuccess = () => {
    notification["success"]({
      message: "Saved!",
    });
  };

  const createUser = async (values) => {
    try {
      await userAPI.createUser(values);
      openNotificationSuccess();
      setTimeout(() => {
        history.push("/dash-board");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.mainCreateUser}>
        <Row justify="center">
          <Col xs={23} md={23} lg={18} className={styles.mainColContent}>
            <div className={styles.mainCreateUser_title}>
              <h1>{t.locale[t.currentLocale].messages.compo_create_user}</h1>
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
