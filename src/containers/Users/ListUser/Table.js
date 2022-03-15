import { useEffect, useState } from "react";
import { Table, Row, Col, Button, Popconfirm, Space, Spin } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./Table.module.scss";

import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/ReduxStore/Slice/TranlationsSlice";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import userAPI from "../../../Api/userAPI/userAPI";

import { filter } from "lodash";
import { useQuery } from "react-query";

function TableContent(props) {
  const [data, setData] = useState([]);

  const { isLoading, data: fetchData } = useQuery("getAll", async () => {
    return await userAPI.getAll();
  });

  useEffect(() => {
    setData(fetchData?.data);
  }, [fetchData]);

  const handleDelete = async (record) => {
    try {
      await userAPI.deleteUser(record.id);
      setData(data.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete: ", error);
    }
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
      // render: (text) => {
      //   return localeState[`form_select_${text.toLowerCase()}`];
      // },
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
              <Spin size="large" tip="Please wait" spinning={isLoading}>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  bordered
                  size={breakPoint === 1 ? "small" : "middle"}
                  rowKey={"userId"}
                />
              </Spin>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TableContent;
