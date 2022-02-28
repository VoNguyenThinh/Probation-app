
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { v4 as uuidv4 } from 'uuid';
import { useStore, actions } from '../store';
import _ from 'lodash'

import MainContent from './MainContent';

const { Header, Footer, Sider, Content } = Layout;

function MainLayout(props) {
    const [listOptions, setListOptions] = useState([])

    const [state, dispatch] = useStore()

    const data = Object.keys(state.typeOfProperty)

    const option = (op) => {
        let ops = _.indexOf(data, op);
        return `${ops}`
    }

    return (
        <div className='main'>
            <Layout>
                <Sider style={{ color: 'white', listStyle: "none" }}>
                    <Menu theme="dark" selectedKeys={[option(state.activeOption)]}>
                        {_.map(data, (item, index) => {
                            return (
                                <Menu.Item className='options'
                                    onClick={() => {
                                        if (state.clicked) {
                                            const formId = state.activeFormId;
                                            const formTitle = state.activeFormTitle

                                            let newArray = [...listOptions]
                                            newArray.push(
                                                {
                                                    id: uuidv4(),
                                                    type: item,
                                                    formId: formId,
                                                    formTitle: formTitle
                                                }
                                            )
                                            setListOptions(newArray)
                                            dispatch(actions.setProcess(2))
                                        }
                                    }}
                                    key={index}>
                                    {item}
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#f0f2f5' }}>Header</Header>
                    <Content style={{ background: 'white' }}>
                        <MainContent listOptions={listOptions} />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default MainLayout;