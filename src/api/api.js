import service from "@/utils/request";

/**
 * 登录
 */
export function Login(data){
    return service.request({
        method: "post",
        url: "/user/login",
        data: data, // 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
/**
 * 注册
 */
export function Register(data){
    return service.request({
        method: "post",
        url: "/user/register",
        data: data, // 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
// 首页
export function GetWordCloud(){
    return service.request({
        method: "get",
        url: "/novel/getNovelName",
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
export function GetRmale(){
    return service.request({
        method: "get",
        url: "/novel/rank",
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
export function GetBooksInfo(){
    return service.request({
        method: "get",
        url: "/static/booksListInfo.json",
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
export function GetBooksCategory(){
    return service.request({
        method: "get",
        url: "/static/category.json",
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
export function GetBooksHistory(){
    return service.request({
        method: "get",
        url: "/static/history.json",
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
export function AddConnection(){
    return service.request({
        method: "get",
        url: "/static/history.json",
        // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
// 收藏
export function AddNovelConnection(data){
    return service.request({
        method: "post",
        url: "/novel/addCollection",
        data: data, //左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}

//分類

export function CationBooks(data){
    return service.request({
        method: "post",
        url: "/novel/kind",
        data: data, //左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
// 推荐 第一步
export function recommendBooks(){
    return service.request({
        method: "get",
        url: "/novel/recommend",
        //左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}


export function Search(data){
    return service.request({
        method: "post",
        url: "/novel/search",
        data: data,//左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}

// 退出
export function Logout(){
    return service.request({
        method: "get",
        url: "/user/logout",
        //左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
// 退出
export function uploadFile(data){
    return service.request({
        method: "post",
        url: "/file/upload",
        data: data,//左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
    })
}
