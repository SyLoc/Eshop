
import {FaFacebook, FaTwitter } from 'react-icons/fa'
import {GrInstagram } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'

export const pageList = [
  { 
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about'
  },
  {
    id: 3,
    text: 'contacts',
    url: '/contacts'
  },
]

export const socialList = [
  {
    id:1,
    icon: <FaFacebook/>,
    url: '/facebook.com'
  },
  {
    id:2,
    icon: <FaTwitter/>,
    url: '/twitter.com'
  },
  {
    id:3,
    icon: <GrInstagram/>,
    url: '/instagram.com'
  }
]


export const category = [
  {
    id:1,
    text: 'Tất cả sản phẩm',
    url: '/tatca'
  },
  {
    id:2,
    text: 'Nước hoa',
    url: '/nuochoa'
  },
  {
    id:3,
    text: 'Tinh dầu & tinh chất',
    url: '/tinhchat'
  },
  {
    id:4,
    text: 'Mỹ phẩm',
    url: '/mypham'
  },
  {
    id:5,
    text: 'Dụng cụ trang điểm',
    url: '/dungcutrangdiem'
  },
  {
    id:6,
    text: 'Thực phẩm chức năng',
    url: '/dungcutrangdiem'
  }
]

export const btnStatus = [
  {
    id: 0,
    content:'Chờ xác nhận',
    status:'unconfirmed'
  },
  {
    id: 1,
    content:'Đang giao',
    status:'delivering'
  },
  {
    id: 2,
    content:'Đã giao',
    status:'delivered'
  },
  {
    id: 3,
    content:'Đã hủy',
    status:'canceled'
  }
]

export const sidebar = [
  {
    id:0,
    icon: <BsPerson />,
    text: 'tài khoản của tôi',
    url: 'profile'
  },
  {
    id:1,
    icon: <BiNotepad />,
    text: 'đơn mua',
    url: 'purchase'
  },
  {
    id:2,
    icon: <MdNotificationsNone />,
    text: 'thông báo',
    url: 'notifications'
  }
]

