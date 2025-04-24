import { Button } from 'antd'
import { useState } from 'react'
import './about.less'
import MyChart from '@/components/echarts/echarts.jsx'

export default function About() {
  const [color, setColor] = useState('red')

  const changeColor = () => {
    setColor('green')
    document.documentElement.style.setProperty('--primary-color', 'green')
  }

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }

  return (
    <>
      <div>About</div>
      <div className="bg">{color}</div>
      <Button onClick={changeColor}>点击</Button>
      <div className="line-chart">
        <MyChart option={option} />
      </div>
    </>
  )
}
