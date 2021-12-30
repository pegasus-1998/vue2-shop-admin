const ztNavList = [
    {
        icon: 'el-icon-orange',
        kinds: [
            {
                text: '轮播',
                path: '/bazaar/swiper',
            },
            {
                text: '图表',
                path: '/bazaar/echarts',
            },
            {
                text: '富文本',
                path: '/bazaar/editor'
            }
        ]
    },
    {
        icon: 'el-icon-share',
        kinds: [
            {
                text: '过渡',
                path: '/bazaar/transition'
            }
        ]
    }
]

const bars = [
    {
        index: '1',
        icon: 'el-icon-orange',
        text: 'home',
        childrens: ['welcome']
    },
    {
        index: '2',
        icon: 'el-icon-s-custom',
        text: 'user',
        childrens: ['message']
    },
    {
        index: '3',
        icon: 'el-icon-menu',
        text: '组件',
        childrens: []
    },
    {
        index: '4',
        icon: 'el-icon-warning',
        text: 'error',
        childrens: ['401','404']
    }
]

export {
    bars,
    ztNavList
}