import React from "react";
import styles from "./UserProfile_Style.module.scss";
import { Image, Card, Row, Col, Form, Input, Select, Button } from "antd";
import {
  UserOutlined,
  SyncOutlined,
  PushpinOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

import UserForm from "../Form/UserForm";
function UserProfile(props) {
  return (
    <>
      {/* For PC */}
      <div className={styles.User_Profile_PC}>
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
                  {/* Username */}
                  <div className={styles.UserPro_name}>
                    <h1>VO NGUYEN THINH</h1>

                    <p className={styles.Bio}>
                      Survived not only five centuries, but also the leap into
                      electronic typesetting.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className={styles.rightContent} span={14}>
                <div className={styles.detail}>
                  <UserForm />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={1} />
        </Row>
      </div>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* For Mobile */}
      <div className={styles.User_Profile_Mobile}>
        {/* avatar */}

        <div className={styles.UserPro_avatar}>
          <Image
            width={120}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          {/* Username */}
          <div className={styles.UserPro_name}>
            <h3>This is name</h3>
            <p>---Some thing---</p>
          </div>
        </div>
        {/* More items */}
        <div className={styles.UserPro_items}>
          <Card
            size="small"
            type="inner"
            title={
              <h4>
                <UserOutlined />
                &nbsp; Username:
              </h4>
            }
            headStyle={{ background: "#fff" }}
          >
            Nguyen Thinh
          </Card>
        </div>
        <div className={styles.UserPro_items}>
          <Card
            size="small"
            type="inner"
            title={
              <h4>
                <PushpinOutlined />
                &nbsp; Address:
              </h4>
            }
            headStyle={{ background: "#fff" }}
          >
            New York No. 1 Lake Park
          </Card>
        </div>
        <div className={styles.UserPro_items}>
          <Card
            size="small"
            type="inner"
            title={
              <h4>
                <SyncOutlined />
                &nbsp; Age:
              </h4>
            }
            headStyle={{ background: "#fff" }}
          >
            20
          </Card>
        </div>
        <div className={styles.UserPro_items}>
          <Card
            size="small"
            type="inner"
            title={
              <h4>
                <PhoneOutlined />
                &nbsp; Phone:
              </h4>
            }
            headStyle={{ background: "#fff" }}
          >
            0777-058-0669
          </Card>
        </div>
        <div className={styles.UserPro_items}>
          <Card
            size="small"
            type="inner"
            title={
              <h4>
                <MailOutlined />
                &nbsp; Email:
              </h4>
            }
            headStyle={{ background: "#fff" }}
          >
            admin@gmail.com
          </Card>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
