
import React, { lazy } from 'react';
import Loadable from '@components/Loader/Loadable';
import { route } from '../../../routes/constants';

import { ReactComponent as Home } from '@assets/icons/icon-home.svg';
import { ReactComponent as Work } from '@assets/icons/icon-workCenter.svg';
import { ReactComponent as Module } from '@assets/icons/icon-module.svg';
import { ReactComponent as Order } from '@assets/icons/icon-order.svg';
import { ReactComponent as Labor } from '@assets/icons/labor-center.svg';

import Avatar from '@assets/image/avatar.png';

const Dashboard = Loadable(lazy(() => import('@/pages/Dashboard')));
const Scheduler = Loadable(lazy(() => import('@/pages/Scheduler')));
const WorkCenter = Loadable(lazy(() => import('@/pages/WorkCenter')));
const ProductionOrder = Loadable(lazy(() => import('@/pages/ProductionOrder')));
const ProductionModule = Loadable(lazy(() => import('@/pages/ProductionModule')));
const LaborCenter = Loadable(lazy(() => import('@/pages/LaborCenter')));

export const user = {
  avatar: Avatar,
  email: 'hungblue.ads',
  emailType: '@gmail.com',
};

export const data = [
    {
        id: 1,
        path: route('home.index'),
        element: <Dashboard />,
        icon: Home,
        title:'Home'
    },
    {
        id: 2,
        path: route('production_order.index'),
        element: <ProductionOrder />,
        icon: Order,
        title:'Production Order'
    },
    {
        id: 3,
        path: route('production_module.index'),
        element: <ProductionModule />,
        icon: Module,
        title:'Production Module'
    },
    {
        id: 4,
        path: route('work_center.index'),
        element: <WorkCenter />,
        icon: Work,
        title:'Work Center'
    },
    {
        id: 5,
        path: route('labor_center.index'),
        element: <LaborCenter />,
        icon: Labor,
        title:'Labor Center'
    },
]