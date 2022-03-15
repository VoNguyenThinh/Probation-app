import React, { useEffect, useState } from "react";
import styles from "./EditUser.module.scss";
import Form from "../../../components/UltilsForm/UserForm";
import { Row, Col, notification, Spin } from "antd";

import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";

import { useParams } from "react-router-dom";
import userAPI from "../../../Api/userAPI/userAPI";
import { useHistory } from "react-router-dom";

import { useQuery, QueryCache, useMutation } from "react-query";

function EditUser(props) {
  const queryCache = new QueryCache();
  queryCache.clear();
  const [initialValues, setInitialValues] = useState({});

  const { id } = useParams();

  const {
    isLoading,
    data: fetchData,
    isSuccess,
  } = useQuery("getUserByID", async () => {
    return await userAPI.getByID(id);
  });

  // const mutation = useMutation(async (body) => {
  //   return await userAPI.editUser(body.id, body.values);
  // });

  const history = useHistory();

  const openNotifacationSuccess = () => {
    notification["success"]({
      message: "Saved!",
    });
  };
  const onEdit = async (values) => {
    await userAPI.editUser(id, values);
    openNotifacationSuccess();

    // setInitialValues(values);
    // await mutation.mutateAsync({ id, values });
    // openNotifacationSuccess();
  };

  const t = useSelector(getLanguage);

  return (
    <>
      <div className={styles.UpdateUser}>
        <Row justify="center">
          <Col xs={23} md={23} lg={18} className={styles.mainColContent}>
            <div className={styles.mainUpdateUser_title}>
              <h1>{t.locale[t.currentLocale].messages.compo_update_user}</h1>
            </div>
            <div className={styles.mainUpdateUser_content}>
              <Spin spinning={isLoading}>
                <Form onFinish={onEdit} initialValues={fetchData?.data} />
              </Spin>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EditUser;
