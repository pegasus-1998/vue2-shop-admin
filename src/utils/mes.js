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
        text: 'components',
        childrens: ['vuedraggable']
    },
    {
        index: '4',
        icon: 'el-icon-warning',
        text: 'error',
        childrens: ['401','404']
    },
    {
        index: '5',
        icon: 'el-icon-s-operation',
        text: 'jsx',
        childrens: []
    },
    {
        index: '6',
        icon: 'el-icon-s-order',
        text: 'excel',
        childrens: []
    }
]
export {
    bars,
    ztNavList
}