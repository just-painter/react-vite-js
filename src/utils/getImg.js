const images = import.meta.glob('../assets/images/**/*', { eager: true })

// 2. 获取动态图片
export const getImage = (path) => {
  return images[`../assets/images${path}`]?.default || ''
}
