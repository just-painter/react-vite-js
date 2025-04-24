const baseSize = 16
// 设置 rem 函数
function setRem() {
  const docEl = document.documentElement
  const clientWidth = docEl.clientWidth
  const clientHeight = docEl.clientHeight
  const designWidth = 1920
  // const designHeight = 920
  const widthRatio = clientWidth / designWidth
  // const heightRatio = clientHeight / designHeight
  // 选择较小的比例，这样可以确保整个设计在可视区域内
  // const rem = Math.min(widthRatio, heightRatio) * 16
  const rem = Math.min(widthRatio) * 16
  docEl.style.fontSize = rem + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

export default setRem
