import React from "react";
import { Table } from "antd";
import styles from "./Table.module.scss";

// import Table from "ant-responsive-table";
const columns = [
  {
    title: "No.",
    dataIndex: "no",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone",
    dataIndex: "Phone",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Action",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function TableContent(props) {
  console.log(styles);

  return (
    <div className={styles.mainTableContent}>
      <>
        <h3>Simple Table</h3>
        <Table columns={columns} dataSource={data} pagination={false} />
      </>
    </div>
  );
}

export default TableContent;
