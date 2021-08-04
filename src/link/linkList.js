
import {FaFacebook } from 'react-icons/fa'
import {GrInstagram } from 'react-icons/gr'
import {FaTwitter } from 'react-icons/fa'

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
    content:'Chờ xác nhận'
  },
  {
    id: 1,
    content:'Đang giao'
  },
  {
    id: 2,
    content:'Đã giao'
  },
  {
    id: 3,
    content:'Đã hủy'
  }
]