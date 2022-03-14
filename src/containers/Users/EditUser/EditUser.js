import React from "react";
import styles from "./EditUser.module.scss";
import Form from "../../../components/UltilsForm/UserForm";
import { filter, find } from "lodash";
import { Row, Col, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import * as rxAction from "../../../store/ReduxStore/Slice/UserSlice";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";
import { getUserState } from "../../../store/ReduxStore/Slice/UserSlice";

import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useParams } from "react-router-dom";

function EditUser(props) {
  const { id } = useParams();

  const rxState = useSelector(getUserState);

  const rxStateLocale = useSelector(getLanguage);

  const rxDispatch = useDispatch();

  const initialValues = find(rxState.listUser, { userId: id });

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Saved!",
    });
  };

  const onEdit = (values) => {
    // console.log(values);

    values.userId = id;
    rxDispatch(rxAction.updateUser(values));
    openNotificationWithIcon();
  };

  return (
    <>
      {/* ========================================For PC======================================== */}

      <div className={styles.UpdateUser}>
        <Row justify="center">
          <Col xs={23} md={23} lg={18} className={styles.mainColContent}>
            <div className={styles.mainUpdateUser_title}>
              <h1>
                {
                  rxStateLocale.locale[rxStateLocale.currentLocale].messages
                    .compo_update_user
                }
              </h1>
            </div>
            <div className={styles.mainUpdateUser_content}>
              <Form onFinish={onEdit} initialValues={initialValues} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EditUser;
