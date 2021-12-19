<script>
    import '../scss/main.scss'
    export default {
        render(createElement) {
            return createElement(
                'div',
                {
                    class: {
                        main: true,
                    },
                    id: 'ddd'
                },
                [
                    createElement(
                        'h1',
                        {
                           id: 'install'
                        },
                        '安装'
                    ),
                    createElement('h3', '兼容性',   ),
                    createElement(
                        'p',
                        `
                        Vue 不支持 IE8 及以下版本，
                        因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。
                        但它支持所有兼容 ECMAScript 5 的浏览器。  
                        `
                    ),
                    createElement('h3', 'CDN引入'),
                    createElement(
                        'pre',
                        [
                            createElement(
                                'code',
                                [
                                    '<script src=',
                                    createElement(
                                        'span',
                                        '"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"'
                                    ),
                                    '></',
                                    'script>',
                                ]
                            )
                        ]
                    ),
                    createElement('h3', 'NPM'),
                    createElement('pre', 'npm install vue'),
                    createElement('h1', '介绍'),
                    createElement('h3', 'Vue.js是什么'),
                    createElement(
                        'p', 
                        `Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
                        其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，
                        不仅易于上手，还便于与第三方库或既有项目整合。
                        另一方面，当与现代化的工具链以及各种支持类库结合使用时，
                        Vue 也完全能够为复杂的单页应用提供驱动。`
                    ),
                    createElement('h1', '渲染函数 & JSX'),
                    createElement('h3', '基础'),
                    createElement(
                        'p',
                        `Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。
                        然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。
                        这时你可以用渲染函数，它比模板更接近编译器`    
                    ),
                    createElement('h3', '虚拟DOM'),
                    createElement('p', 'Vue 通过建立一个虚拟 DOM 来追踪自己要如何改变真实 DOM。请仔细看这行代码：'),
                    createElement(
                        'pre',
                        [
                            createElement('code',`return createElement('h1', this.blogTitle)`)
                        ]
                    ),
                    createElement(
                        'p',
                        `createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。
                        它更准确的名字可能是 createNodeDescription，
                        因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，
                        包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，
                        也常简写它为“VNode”。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。`
                    )
                ],
            )
        }
    }
</script>