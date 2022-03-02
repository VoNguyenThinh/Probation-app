
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'

import { useDispatch, useSelector } from 'react-redux';
import { selectMainSlice } from '../store/ReduxStore/Slice/MainSlice'
import * as rxActions from '../store/ReduxStore/Slice/MainSlice'




// ===========================Component====================================================
import MainContent from './MainContent';
// ===========================Component====================================================

const { Header, Footer, Sider, Content } = Layout;

function MainLayout(props) {

    const rxState = useSelector(selectMainSlice) /*============================REDUX==================================*/

    const rxDispatch = useDispatch() /*========================================REDUX==================================*/

    const [listOptions, setListOptions] = useState([])

    const data = Object.keys(rxState.typeOfProperty)

    const option = (op) => {
        let ops = _.indexOf(data, op);
        return `${ops}`
    }

    return (
        <div className='main'>
            <Layout>
                <Sider style={{ color: 'white', listStyle: "none" }}>
                    <Menu theme="dark" selectedKeys={[option(rxState.activeOption)]}>
                        {_.map(data, (item, index) => {
                            return (
                                <Menu.Item className='options'
                                    onClick={() => {
                                        if (rxState.clicked) {
                                            const formId = rxState.activeFormId;
                                            const formTitle = rxState.activeFormTitle
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
                                            rxDispatch(rxActions.setActiveOption(item))
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