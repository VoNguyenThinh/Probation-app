import { Layout, Menu, Dropdown, Switch, Space, Button } from "antd";
import { filter } from "lodash";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import styles from "./DashBoardStyle.module.scss";
import "./index.scss";
import {
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";
import { useSelector, useDispatch } from "react-redux";
import * as rxAction from "../../store/ReduxStore/Slice/TranlationsSlice";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function DashBoard({ children }) {
  const rxState = useSelector(getLanguage);

  const rxDispatch = useDispatch();

  const changeLocale = (value) => {
    const locale = value ? "vn" : "en";
    rxDispatch(rxAction.changeLocale(locale));
  };

  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
        key="1"
        icon={<UserOutlined />}
      >
        Sign out
      </Menu.Item>
    </Menu>
  );

  const responsiveMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
        key="1"
        icon={<UserOutlined />}
      >
        Sign out
      </Menu.Item>
      <Menu.Item key="1" icon={<SwapOutlined />}>
        <Switch
          checkedChildren="VN"
          unCheckedChildren="VN"
          onChange={changeLocale}
          defaultChecked={rxState.currentSwitch}
        />
      </Menu.Item>
    </Menu>
  );

  const size = useBreakpoint();

  const breakPoint = filter(Object.values(size), (i) => {
    return i === true;
  }).length;

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
          width="250"
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
              <Link to={"/dash-board"}>
                {rxState.locale[rxState.currentLocale].messages.db_list_users}
              </Link>
            </Menu.Item>

            <Menu.Item
              className={styles.dbMenuItem}
              key="2"
              icon={<VideoCameraOutlined />}
            >
              <Link to={"/create-user"}>
                {rxState.locale[rxState.currentLocale].messages.db_create_user}
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className={styles.heading}>
            {breakPoint !== 5 ? (
              <Dropdown overlay={responsiveMenu}>
                <Button icon={<SettingOutlined />}></Button>
              </Dropdown>
            ) : (
              <Space>
                <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
                  Dropdown
                </Dropdown.Button>
                <Switch
                  checkedChildren="VN"
                  unCheckedChildren="VN"
                  onChange={changeLocale}
                  defaultChecked={rxState.currentSwitch}
                />
              </Space>
            )}
          </Header>
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
