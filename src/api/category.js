import service from "@/utils/request";

/**
 * 登录
 */
export function dushi(){
  return service.request({
    method: "get",
    url: "/novel/kind/ds",
  })
}
export function gudian(){
  return service.request({
    method: "get",
    url: "/novel/kind/gd",
  })
}
export function xuanhuan(){
  return service.request({
    method: "get",
    url: "/novel/kind/xh",
  })
}
export function xuanyi(){
  return service.request({
    method: "get",
    url: "/novel/kind/xy",
  })
}
export function xiuzhen(){
  return service.request({
    method: "get",
    url: "/novel/kind/xz",
  })
}
export function youxi(){
  return service.request({
    method: "get",
    url: "/novel/kind/yx",
  })
}
export function shenhe(data){
  return service.request({
    method: "post",
    url: "/novel/pass",
    data:data,
  })
}
export function noshenhe(){
  return service.request({
    method: "get",
    url: "/novel/getUnPass",
  })
}
export function shoucang(data){
  return service.request({
    method: "get",
    url: `/novel/collection?username=${data.username}`,
  })
}


