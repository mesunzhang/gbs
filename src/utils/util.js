export function getUrlParam(name) {
  //构造一个含有目标参数的正则表达式对象
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg) //匹配目标参数
  if (r != null) {
    return unescape(r[2])
  } else {
    return null //返回参数值
  }
}
