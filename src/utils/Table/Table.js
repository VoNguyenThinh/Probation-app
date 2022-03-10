import React from "react";
import { Table, Row, Col, Button, Popconfirm, message, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./Table.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { getUserState } from "../../store/ReduxStore/Slice/UserSlice";

import { getLanguage } from "../../store/ReduxStore/Slice/TranlationsSlice";

import * as rxAction from "../../store/ReduxStore/Slice/UserSlice";

function TableContent(props) {
  const rxState = useSelector(getUserState);

  const rxStateLocale = useSelector(getLanguage);

  const data = rxState.listUser;

  const rxDispatch = useDispatch();

  const handleDelete = (key) => {
    rxDispatch(rxAction.deleteUser(key.userId));
  };

  const columns = [
    {
      title: `${
        rxStateLocale.locale[rxStateLocale.currentLocale].messages
          .compo_table_col_name
      }`,
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: `${
        rxStateLocale.locale[rxStateLocale.currentLocale].messages
          .compo_table_col_phone
      }`,
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: `${
        rxStateLocale.locale[rxStateLocale.currentLocale].messages
          .compo_table_col_gender
      }`,
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: `${
        rxStateLocale.locale[rxStateLocale.currentLocale].messages
          .compo_table_col_action
      }`,
      width: "20%",
      align: "center",
      key: "action",
      render: (record) => {
        return (
          <>
            <Space>
              <Link to={`/view-detail/${record.userId}`}>
                <Button icon={<EditOutlined />} type="primary">
                  {
                    rxStateLocale.locale[rxStateLocale.currentLocale].messages
                      .compo_table_btn_edit
                  }
                  &nbsp; &nbsp;
                </Button>
              </Link>

              <Popconfirm
                title={
                  rxStateLocale.locale[rxStateLocale.currentLocale].messages
                    .db_confirm_delete
                }
                onConfirm={() => {
                  handleDelete(record);
                }}
                okText={
                  rxStateLocale.locale[rxStateLocale.currentLocale].messages
                    .db_confirm_delete_okText
                }
                cancelText={
                  rxStateLocale.locale[rxStateLocale.currentLocale].messages
                    .db_confirm_delete_cancelText
                }
              >
                <Button icon={<DeleteOutlined />} type="danger">
                  {
                    rxStateLocale.locale[rxStateLocale.currentLocale].messages
                      .compo_table_btn_delete
                  }
                </Button>
              </Popconfirm>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <>
      {/* For PC */}
      <Row className={styles.TableContent_PC}>
        <Col span={1} />

        <Col span={22} className={styles.mainColContent}>
          <div className={styles.mainTable_title}>
            <h1>
              {
                rxStateLocale.locale[rxStateLocale.currentLocale].messages
                  .compo_table_listUser
              }
            </h1>
          </div>
          <div className={styles.mainTableContent}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              rowKey={"userId"}
            />
          </div>
        </Col>

        <Col span={1} />
      </Row>
      {/* For Mobile */}

      <Row className={styles.TableContent_Mobile}>
        <Col span={24} className={styles.mainColContent}>
          <div className={styles.mainTable_title}>
            <h1>
              {
                rxStateLocale.locale[rxStateLocale.currentLocale].messages
                  .compo_table_listUser
              }
            </h1>
          </div>

          <div className={styles.mainTableContent}>
            <div className={styles.tableContentReposive}>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size="small"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TableContent;
