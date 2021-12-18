<script>
    import './scss/index.scss'
    import scrollBar from './components/scrollBar.vue'
    export default {
        components: { scrollBar },
        render() {
            return (
                <div class='jsx bx'>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>分页</el-breadcrumb-item>
                    </el-breadcrumb>
                    <scrollBar/>
                </div>
            )
        }
    }
</script>
