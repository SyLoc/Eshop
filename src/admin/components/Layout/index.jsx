import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from './Header';
import SubHeader from './SubHeader';

import 'antd/dist/antd.css';
import { Layout, Menu, Tooltip  } from 'antd';

import LogOut from "assets/images/icons/LogOut.svg";
import Arrow from "assets/images/icons/icon-arrowDown.svg";
import Logo from 'assets/images/logo.png';

import { Link } from 'react-router-dom';
// import { logOut } from '@/store/authSlide';
import { data } from './mock-data';

import {
  Wrap,
  HeaderMenu,
  SiderCustom,
  ButtonWrap,
  ButtonFake,
  HeaderWrap,
  DemoWrap,
  DemoContent
} from './styled';


import * as Theme from 'styles/theme';
import { useDispatch } from 'react-redux';

const { Content } = Layout;

const SiderDemo = ({ children, title }) => {
  const { colors } = Theme.default;
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    setCollapsed(!collapsed);
  };
 const handleLogOut = () => {
    // dispatch();
 };

  return (
    <Wrap>
      <SiderCustom
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={{ width: "100%", padding: "16px 16px" }}>
          <HeaderMenu>
            <img src={Logo} alt="" />
          </HeaderMenu>
          {
            !collapsed && (
              <DemoWrap>
                <DemoContent>
                  <h1>Demo Work Space</h1>
                  <p>2 Products</p>
                </DemoContent>
                <img src={Arrow} alt="" />
              </DemoWrap>
            )
          }
        </div>

        <Menu defaultSelectedKeys={['1']}>
          {
            data.map((item) => (
              <Menu.Item key={item?.id} icon={<item.icon />}>
                <Link to={item?.path} >{item?.title}</Link>
              </Menu.Item>
            ))
          }
        </Menu>

        <ButtonWrap>
          <ButtonFake onClick={handleLogOut}>
            <Tooltip title="Logout">
              <img src={LogOut} />
            </Tooltip>
            {!collapsed && <p>????NG XU???T</p>}
          </ButtonFake>
        </ButtonWrap>
      </SiderCustom>
      <Layout>
        <HeaderWrap>
          <HeaderContainer
            toggle={toggle}
            title={title}
            style={{ height: "12px !important" }}
          />
          {/* <SubHeader /> */}
        </HeaderWrap>
        <Content style={{ backgroundColor: `${colors.bgDrakGray}`, padding: '15px' }}>
          {children}
        </Content>
      </Layout>
    </Wrap>
  );
};

export default SiderDemo;

SiderDemo.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};
