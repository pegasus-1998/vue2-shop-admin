<script>
    import './scss/index.scss'
    import scrollBar from './components/scrollBar.vue'
    import sonMain from './components/main.vue'
    export default {
        components: { scrollBar, sonMain },
        render() {
            return (
                <div class='jsx bx'>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>系列</el-breadcrumb-item>
                        <el-breadcrumb-item>JSX</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class='cen'>
                        <scrollBar/>
                        <son-main></son-main>
                    </div>
                </div>
            )
        }
    }
</script>
