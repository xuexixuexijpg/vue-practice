export interface IAccount {
  name: string
  password: string
}

//登录类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

//用户信息类型 对于复杂的可以json to ts来搞定
//对于超级复杂的前端大多还是直接any来搞定
// export interface Role {
//   id: number
//   name: string
//   intro: string
//   createAt: Date
//   updateAt: Date
// }

// export interface Department {
//   id: number
//   name: string
//   parentId: any
//   createAt: Date
//   updateAt: Date
//   leader: string
// }

// export interface IUserInfo {
//   id: number
//   name: string
//   realname: string
//   cellphone: number
//   enable: number
//   createAt: Date
//   updateAt: Date
//   role: Role
//   department: Department
// }

//基础请求类型
