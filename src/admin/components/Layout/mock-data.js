
import React from 'react';
import { ROUTES_ADMIN } from '../../routes/constants';

import { ReactComponent as Home } from 'assets/images/icons/icon-home.svg';
import { ReactComponent as Work } from 'assets/images/icons/icon-workCenter.svg';
import { ReactComponent as Module } from 'assets/images/icons/icon-module.svg';
import { ReactComponent as Order } from 'assets/images/icons/icon-order.svg';

import Avatar from 'assets/images/avatar.png';

export const user = {
  avatar: Avatar,
  email: 'hungblue.ads',
  emailType: '@gmail.com',
};

export const data = [
    {
        id: 1,
        path: ROUTES_ADMIN.DASHBOARD,
        icon: Home,
        title:'Trang chủ'
    },
    {
        id: 2,
        path: ROUTES_ADMIN.CUSTOMER_MANAGEMENT,
        icon: Work,
        title:'Quản lý khách hàng'
    },
    {
        id: 3,
        path: ROUTES_ADMIN.PRODUCT_MANAGEMENT,
        icon: Module,
        title:'Quản lý sản phẩm'
    },
    {
        id: 4,
        path: ROUTES_ADMIN.ORDER,
        icon: Order,
        title:'Đơn đặt hàng'
    },
]