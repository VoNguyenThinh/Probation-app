import React from 'react';
import { List } from 'antd';
import '../Assets/style.css'

function MainContentList(props) {

    let { data, handleClick, activeId } = props

    return (
        <div style={{ marginTop: '10px' }}>
            <List
                size="small"
                header={<div><b>List forms</b></div>}
                bordered
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => {
                            handleClick(item);
                        }}
                        style={{ cursor: "pointer" }}
                        className={activeId === item.id ? 'active' : ''}
                    >
                        {item.title}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default MainContentList;