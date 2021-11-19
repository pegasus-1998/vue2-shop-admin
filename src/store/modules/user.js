import Vue from 'vue'
const vm = new Vue()
const userModule = {
    namespaced: true,
    state: {
        token: '',      //当前登录用户的token
        userIdx: 0,      //当前登录的用户的在users中的索引
        users: [         //保存着所有的用户
            {
                userName: 'admin',
                password: 123456,
                ps: '生活不仅眼前的苟且，还有诗和远方！',    //个性签名 
                headPicture: require("@/images/tx.jpg"),    //头像
                token: '12345678910',
                isDA: 0,      //默认收获地址是哪一个
                address: [          //所有的收获地址
                    {
                        name: '潇洒哥',
                        pro: '广东省',
                        city: '广州市',
                        area: '海珠区',
                        phone: '11012013014',
                        detailAddress: '',   //详细地址
                    }
                ],
            }
        ],
    },
    mutations: {
        SET_USERS_INDEX(state, idx) {
            state.userIdx = idx
        },
        SET_TOKEN(state, token) {
            state.token = token
        }
    }
}

export default userModule