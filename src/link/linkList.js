
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