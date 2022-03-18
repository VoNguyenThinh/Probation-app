import React, { useEffect, useState } from "react";
import styles from "./EditUser.module.scss";
import Form from "../../../components/UltilsForm/UserForm";
import { Row, Col, notification, Spin } from "antd";

import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";

import { useParams } from "react-router-dom";
import userAPI from "../../../Api/userAPI/userAPI";
import { useHistory } from "react-router-dom";

import { useQuery, useMutation, useQueryClient } from "react-query";

function EditUser(props) {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { isLoading, data: fetchData } = useQuery(
    ["getUserByID", id],
    async () => {
      return await userAPI.getByID(id);
    },
    {
      refetchOnWindowFocus: true,
      initialData: () => {
        const hero = queryClient
          .getQueryData("getAll")
          ?.data?.data?.find((hero) => hero.id === id);
        if (hero) {
          return { data: hero };
        } else {
          return { data: undefined };
        }
      },
    }
  );

  const { isLoading: isLoadingUpdate, mutate } = useMutation(
    async (body) => {
      return await userAPI.editUser(body.id, body.values);
    },
    {
      onSuccess: (data) => {
        history.push("/dash-board");
      },
    }
  );

  const history = useHistory();

  const onEdit = async (values) => {
    mutate({ id, values });
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
              <Spin
                size="large"
                spinning={isLoadingUpdate}
                tip={"Please wait ..."}
              >
                <Spin spinning={isLoading}>
                  <Form onFinish={onEdit} initialValues={fetchData?.data} />
                </Spin>
              </Spin>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EditUser;
