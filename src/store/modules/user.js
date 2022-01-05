import { interchangeArray } from '@/utils/arrayChange.js'
import vm from '@/main.js'
import { packMes } from '@/utils/pack.js'
const userModule = {
    namespaced: true,
    state: {
        token: '',      //当前登录用户的token
        userIdx: 0,      //修改收货地址组件显示的是哪一条数据
        addressIdx: 0,   //修改哪一个收货地址
        users: [         //保存着所有的用户
            {
                id: 10086,
                userName: 'admin',
                password: 123456,
                ps: '生活不仅眼前的苟且，还有诗和远方！',    //个性签名 
                headPicture: require("@/images/ava/ava01.png"),    //头像
                token: '',  // 登录的时候获取
                aut: false, // 是否具有权限
                address: [          //所有的收获地址
                    {
                        key: 100,
                        name: '比尔盖茨',
                        pro: '广东省',
                        city: '广州市',
                        area: '海珠区',
                        isDA: true,      //是否是默认地址
                        phone: '15121316001',
                        detailAddress: '华尔街10086号'  //详细地址
                    },
                    {
                        key: 101,
                        name: '爱迪生',
                        pro: '安徽省',
                        city: '合肥市',
                        area: '蜀山区',
                        isDA: false,
                        phone: '15225635921',
                        detailAddress: '幸福街123456号'
                    }
                ]
            }
        ]
    },
    getters: {
        address({ users, userIdx, addressIdx }) {
            return users[userIdx].address[addressIdx]
        }
    },
    mutations: {
        CLEAR_TOKEN(state) {
            state.token = ''
            sessionStorage.setItem('token', '')
        },
        SET_ADDRESS_IDX(state, idx) {
            state.addressIdx = idx
        },
        SET_ADDRESS({ users, userIdx, addressIdx }, obj) {
            if (obj.isDA) {
                interchangeArray(users[userIdx].address, 0, addressIdx)
            }
            Object.assign(users[userIdx].address[addressIdx], obj)
        },
        SET_AUT({ users }, id) {  // 修改用户权限
            users.some(item => {
                if (item.id == id) {
                    item.aut = !item.aut
                    return true
                }
            })
        },
        REGISTER_USER({ users }, obj) { // 注册账号
            for (let i = 0; i < users.length; i++) {
                if (users[i].userName === obj.account) {
                    console.log(users[i], obj.account)
                    packMes('warning', '此账号已经存在！')
                    return
                }
            }
            users.push({
                id: users[users.length - 1].id + 1,
                userName: obj.account,
                password: obj.password,
                ps: '',
                headPicture: obj.imgSrc,
                // token: vm.$nanoid(),
                aut: false,
                address: []
            })
            packMes('success', '注册成功，快去登陆吧')
        },
        LOGIN_USER({ users }, { account, password }) {  // 用户登录
            const userObj = users.find(item => {
                return item.userName == account && item.password == password
            })
            if (userObj) {
                const token = vm.$nanoid()
                userObj.token = token
                this.state.userModule.token = token
                packMes('success', '登录成功')
                vm.$router.push('/home')
                sessionStorage.setItem('token', token)
            } else {
                packMes('warning', '账号密码错误')
            }
        }
    }
}

export default userModule