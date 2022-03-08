import React from "react";
import { Table, Row, Col, Button, Popconfirm, message, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./Table.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { getUserState } from "../../store/ReduxStore/Slice/UserSlice";
import * as rxAction from "../../store/ReduxStore/Slice/UserSlice";

function TableContent(props) {
  const rxState = useSelector(getUserState);
  const data = rxState.listUser;
  const rxDispatch = useDispatch();

  const handleDelete = (key) => {
    rxDispatch(rxAction.deleteUser(key.userId));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      width: "20%",
      align: "center",
      key: "action",
      render: (record) => {
        return (
          <>
            <Space>
              <Link to={`/view-detail/${record.userId}`}>
                <Button icon={<EditOutlined />} type="primary">
                  Edit &nbsp; &nbsp;
                </Button>
              </Link>

              <Popconfirm
                title="Delete user?"
                onConfirm={() => {
                  handleDelete(record);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button icon={<DeleteOutlined />} type="danger">
                  Delete
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
            <h1>LIST OF USER</h1>
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
            <h1>LIST OF USER</h1>
          </div>

          <div className={styles.mainTableContent}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              size="small"
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TableContent;
