/**
 * 随机排列数组
 * @param arr
 */
function shuffle([...arr]) {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

export default shuffle
