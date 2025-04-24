import React, { lazy } from 'react'

const AuthRoot = lazy(() => import('@/pages/AuthRoot.jsx'))
const Home = lazy(() => import('@/pages/home/Home.jsx'))
const About = lazy(() => import('@/pages/about/About.jsx'))
const NotFound = lazy(() => import('@/pages/NotFound.jsx'))

//登录
const Login = lazy(() => import('@/pages/login/Login.jsx'))

const Router = [
  {
    path: '/',
    element: React.createElement(AuthRoot, null, React.createElement(Home)),
    children: [
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: React.createElement(Login),
  },
  //设置 404 页面
  {
    path: '*',
    element: React.createElement(NotFound),
  },
]

export default Router
