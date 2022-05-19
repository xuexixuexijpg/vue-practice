const rules = {
  name: [
    { required: true, message: '用户名不为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '用户名必须3~10位以上字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码长度必须三位以上字母或数字',
      trigger: 'blur'
    }
  ]
}

export { rules }
