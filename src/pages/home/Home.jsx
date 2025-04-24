import { Outlet } from 'react-router-dom'
import './home.less'

export default function Home() {
  return (
    <>
      <div className="home">HOME</div>
      <Outlet />
    </>
  )
}
