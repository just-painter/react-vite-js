import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { SVGRenderer } from 'echarts/renderers'

import React, { useEffect, useLayoutEffect, useRef } from 'react'

echarts.use([
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LineChart,
  BarChart,
  PieChart,
  UniversalTransition,
  SVGRenderer,
])

const MyChart = ({
  option,
  loading = false,
  width = '100%',
  height = '100%',
}) => {
  const cRef = useRef(null)
  const cInstance = useRef()

  useEffect(() => {
    if (cRef.current) {
      cInstance.current = echarts.getInstanceByDom(cRef.current)
      if (!cInstance.current) {
        cInstance.current = echarts.init(cRef.current, undefined, {
          renderer: 'svg',
        })
      }
    }

    if (option) cInstance.current?.setOption(option)
  }, [cRef, option])

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [option])

  useLayoutEffect(() => {
    resize()
  }, [width, height])

  const resize = () => {
    cInstance.current?.resize({
      animation: { duration: 300 },
    })
  }

  useEffect(() => {
    if (loading) cInstance.current?.showLoading()
    else cInstance.current?.hideLoading()
  }, [loading])

  return <div ref={cRef} style={{ height: height, width: width }}></div>
}

export default MyChart
