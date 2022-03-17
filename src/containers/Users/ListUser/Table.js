import { useState } from "react";
import { Table, Row, Col, Button, Popconfirm, Space, Spin } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./Table.module.scss";

import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import userAPI from "../../../Api/userAPI/userAPI";

import { filter } from "lodash";
import { useMutation, useQuery } from "react-query";
import Item from "antd/lib/list/Item";

function TableContent(props) {
  const {
    isLoading,
    data: fetchData,
    isFetching,
    refetch,
  } = useQuery(
    "getAll",
    async () => {
      return await userAPI.getAll();
    },
    {
      refetchOnWindowFocus: true,
    }
  );

  const { mutateAsync, isLoading: isDeleting } = useMutation(
    "deleteUser",
    (body) => {
      return userAPI.deleteUser(body.id);
    },
    {
      onSuccess: (data) => {
        refetch();
        // fetchData.data = fetchData.data.filter(
        //   (item) => item.id !== data.data.id
        // );
      },
    }
  );

  console.log(isFetching);
  const handleDelete = async (record) => {
    await mutateAsync({ id: record.id });
  };

  const t = useSelector(getLanguage);

  const localeState = t.locale[t.currentLocale].messages;

  const size = useBreakpoint();

  const breakPoint = filter(Object.values(size), (i) => {
    return i === true;
  }).length;

  const columns = [
    {
      title: `${localeState.compo_table_col_name}`,
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: `${localeState.compo_table_col_phone}`,
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: `${localeState.compo_table_col_gender}`,
      dataIndex: "gender",
      key: "gender",
      render: (text) => {
        return localeState[`form_select_${text.toLowerCase()}`];
      },
    },
    {
      title: `${localeState.compo_table_col_action}`,
      width: "20%",
      align: "center",
      key: "action",
      render: (record) => {
        return (
          <>
            <Space>
              <Link to={`/view-detail/${record.id}`}>
                <Button icon={<EditOutlined />} type="primary">
                  {localeState.compo_table_btn_edit}
                  &nbsp; &nbsp;
                </Button>
              </Link>

              <Popconfirm
                title={localeState.db_confirm_delete}
                onConfirm={() => {
                  handleDelete(record);
                }}
                okText={localeState.db_confirm_delete_okText}
                cancelText={localeState.db_confirm_delete_cancelText}
              >
                <Button icon={<DeleteOutlined />} type="danger">
                  {localeState.compo_table_btn_delete}
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
      <Row justify="center" className={styles.TableContent_PC}>
        <Col md={23} lg={24} className={styles.mainColContent}>
          <div className={styles.mainTable_title}>
            <h1>{localeState.compo_table_listUser}</h1>
          </div>
          <div className={styles.mainTableContent}>
            <div className={styles.tableContentReposive}>
              <Spin
                spinning={false}
                size="large"
                tip={"Deleting...Please wait"}
              >
                <Spin
                  size="large"
                  tip="Loading...Please wait"
                  spinning={isFetching}
                >
                  <Table
                    columns={columns}
                    dataSource={fetchData?.data}
                    pagination={false}
                    bordered
                    size={breakPoint === 1 ? "small" : "middle"}
                    rowKey={"userId"}
                  />
                </Spin>
              </Spin>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TableContent;
