import React from "react";
import styles from "./CreateUserStyle.module.scss";
import Form from "../../../components/UltilsForm/UserForm";
import { Row, Col, notification, Spin } from "antd";

import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";

import userAPI from "../../../Api/userAPI/userAPI";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

function CreateUser(props) {
  const t = useSelector(getLanguage);

  const history = useHistory();

  const openNotificationSuccess = () => {
    notification["success"]({
      message: "Saved!",
    });
  };

  const mutation = useMutation(
    "createUSer",
    (body) => {
      return userAPI.createUser(body);
    },
    {
      onSuccess: () => {
        history.push("/dash-board");
      },
    }
  );

  const createUser = async (values) => {
    try {
      await mutation.mutateAsync(values);
    } catch (error) {}
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
              <Spin size="large" spinning={mutation.isLoading}>
                <Form onFinish={createUser} />
              </Spin>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CreateUser;
