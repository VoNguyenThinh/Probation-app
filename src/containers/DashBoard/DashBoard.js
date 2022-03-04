import { Layout, Menu } from "antd";
import styles from "./DashBoardStyle.module.scss";

import "./index.css";
import Table from "../../utils/Table/Table";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function DashBoard(props) {
  console.log(styles);
  return (
    <>
      <Layout>
        <Sider
          breakpoint="xs"
          collapsedWidth="0"
          className={styles.dbSider}
          style={{
            height: "100vh",
            backgroundColor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 8px",
          }}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className={styles.dbMenu}
          >
            <Menu.Item
              className={styles.dbMenuItem}
              key="1"
              icon={<UserOutlined />}
            >
              nav 1
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              className={styles.dbMenuItem}
            >
              nav 2
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
              className={styles.dbMenuItem}
            >
              nav 3
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserOutlined />}
              className={styles.dbMenuItem}
            >
              nav 4
            </Menu.Item>

            <Menu.Item
              className={styles.dbMenuItem}
              key="5"
              icon={<UserOutlined />}
            >
              nav 1
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<VideoCameraOutlined />}
              className={styles.dbMenuItem}
            >
              nav 2
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<UploadOutlined />}
              className={styles.dbMenuItem}
            >
              nav 3
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<UserOutlined />}
              className={styles.dbMenuItem}
            >
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className={styles.heading} style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div className={styles.dbContent} style={{ background: "#fff" }}>
              <Table />
              <Table />
              <Table />
            </div>
          </Content>

          <Footer className={styles.dbFooter}></Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default DashBoard;
