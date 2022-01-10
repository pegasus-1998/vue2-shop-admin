import Mock from 'mockjs'

Mock.setup({
    timeout: '200-600'
})

const obj = [
    {name: '张三', age: 50},
    {name: '李四', age: 60}
]

Mock.mock('/mock/objs', obj)