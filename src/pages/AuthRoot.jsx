import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

export default function AuthRoot({ children }) {
  const isLogin = true
  const Navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      message.warning('未登录！')
      setTimeout(() => {
        Navigate('/login')
      }, 500)
    }
  }, [isLogin])

  return children
}
