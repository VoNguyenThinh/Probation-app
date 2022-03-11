import React from "react";
import styles from "./UserProfile_Style.module.scss";
import { Image, Row, Col } from "antd";
import _ from "lodash";

import UserForm from "../Form/UserForm";
import CreateUSer from "../CreateUsers/CreateUser";
import { useParams } from "react-router-dom";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import { getUserState } from "../../store/ReduxStore/Slice/UserSlice";
import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";
import { useSelector, useDispatch } from "react-redux";
import * as rxAction from "../../store/ReduxStore/Slice/UserSlice";

function UserProfile(props) {
  const { id } = useParams();

  const rxState = useSelector(getUserState);

  const rxStateLocale = useSelector(getLanguage);

  const userDetail = _.find(rxState.listUser, { userId: id });

  const rxDispatch = useDispatch();

  const updateUser = (values) => {
    values.userId = id;
    rxDispatch(rxAction.updateUser(values));
  };

  const size = useBreakpoint();
  const breakPoint = _.filter(Object.values(size), (i) => {
    return i === true;
  }).length;

  {
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  }

  return (
    <>
      {/* For PC */}
      {breakPoint === 5 && (
        <div className={styles.User_Profile_PC}>
          PC
          <Row gutter={[16, 16]}>
            <Col span={1} />
            <Col span={22} className={styles.mainContent}>
              <Row gutter={[16, 16]}>
                <Col className={styles.leftContent} span={6}>
                  <div className={styles.UserPro_avatar}>
                    <Image
                      width={170}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <div className={styles.UserPro_name}>
                      <h1>
                        {userDetail.lastName} {userDetail.firstName}
                      </h1>

                      <p className={styles.Bio}>{userDetail.bio}</p>
                    </div>
                  </div>
                </Col>
                <Col className={styles.rightContent} span={14}>
                  <div className={styles.detail}>
                    <UserForm userDetail={userDetail} updateUser={updateUser} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={1} />
          </Row>
        </div>
      )}

      {/* For Tablet */}
      {breakPoint === 2 && (
        <div className={styles.User_Profile_Tablet}>
          <CreateUSer
            title={
              rxStateLocale.locale[rxStateLocale.currentLocale].messages
                .compo_update_user
            }
            userDetail={userDetail}
            updateUser={updateUser}
          />
        </div>
      )}

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {breakPoint === 1 && (
        <div className={styles.User_Profile_Mobile}>
          <CreateUSer
            title={
              rxStateLocale.locale[rxStateLocale.currentLocale].messages
                .compo_update_user
            }
            userDetail={userDetail}
            updateUser={updateUser}
          />
        </div>
      )}
      {/* For Mobile */}
    </>
  );
}

export default UserProfile;
