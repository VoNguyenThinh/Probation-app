import { Layout, Menu, Avatar, Image } from "antd";
import styles from "./DashBoardStyle.module.scss";

import "./index.scss";
import Table from "../../utils/Table/Table";
import UserProfile from "../../utils/UserProfile/UserProfile";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function DashBoard({ children }) {
  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className={styles.dbSider}
          style={{
            height: "100vh",
            backgroundColor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 8px",
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className={styles.dbMenu}
          >
            <div className={styles.logo} />

            <Menu.Item
              className={styles.dbMenuItem}
              key="1"
              icon={<UserOutlined />}
            >
              <Link to={"/dash-board"}> LIST USERS</Link>
            </Menu.Item>

            <Menu.Item
              className={styles.dbMenuItem}
              key="2"
              icon={<VideoCameraOutlined />}
            >
              <Link to={"/create-user"}> CREATE USER</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className={styles.heading} style={{ padding: 0 }}></Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div className={styles.dbContent} style={{ background: "#fff" }}>
              {children}
            </div>
          </Content>
          <Footer className={styles.dbFooter}></Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default DashBoard;
