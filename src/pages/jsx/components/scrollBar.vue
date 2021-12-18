<script>
import '../scss/scrollBar.scss'
export default {
  methods: {
    selectHandler() {
      console.log('调用了')
    }
  },
  render() {
    return (
      <div class='scroll-bar'>
        <el-menu unique-opened active-text-color='purple' onSelect={this.selectHandler}>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>基础</span>
            </template>
            <el-menu-item index='1-1'>
              <span>安装</span>
            </el-menu-item>
            <el-menu-item index='1-2'>
              <span>介绍</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>渲染函数 & JSX</span>
            </template>
            <el-menu-item index='2-1'>
              <span>基础</span>
            </el-menu-item>
            <el-menu-item index='2-2'>
              <span>节点、树以及虚拟DOM</span>
            </el-menu-item>
            <el-menu-item index='2-3'>
              <span>createElement参数</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index='3'>
            <template slot='title'>
              <i class='el-icon-s-platform'></i>
              <span>深入了解组件</span>
            </template>
          </el-submenu>
          <el-submenu index='4'>
            <template slot='title'>
              <i class='el-icon-camera-solid'></i>
              <span>过渡 & 动画</span>
            </template>
          </el-submenu>
        </el-menu>
      </div>
    );
  },
};
</script>
