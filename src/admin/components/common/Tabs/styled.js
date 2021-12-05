import styled from 'styled-components';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export const TabsCustom = styled(Tabs)`
    .ant-tabs-tab{
        padding: 12px 20px;
    }

    .ant-tabs-nav-list{
        background: #ffffff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin: 0;

        .ant-tabs-tab + .ant-tabs-tab {
            margin: 0 0 0 10px;
        }
    }

    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
        color: ${({ theme }) => theme.colors.blue};
    }

    .ant-tabs-nav{
        margin: 0 0 3px 0;

        &::before{
            border: 0;
        }
    }

`

export const TabPaneCustom = styled(TabPane)`
    background: #ffffff;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 40px;
`