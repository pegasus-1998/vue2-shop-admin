<template>
  <div class="short-video">
    <video-player ref="videoPlayer" :options="playerOptions" />
    <div class="btns">
      <el-button type="primary" @click.native="changeVideo(true)">UP</el-button>
      <el-button type="primary" @click.native="changeVideo(false)">DOWN</el-button>
    </div>
  </div>
</template>

<script>
import { getVideoApi } from "@/apis/mock";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  components: { videoPlayer },
  data() {
    return {
      srcArrs: [],
      nowIndex: 0,
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0, 3.0, 4.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 类型
            src: "http://pgs98.com/gog/m1.mp4", // url地址
          },
        ],
        poster: require('@/images/swiper/swiper02.jpg'), // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };
  },
  created() {
    this.getVideoMessage();
  },
  methods: {
    async getVideoMessage() {
      const res = (await getVideoApi()) || [];
      this.srcArrs = res
    },
    changeVideo(flag) {
      if(flag) {
        if(this.nowIndex > 0) {
          this.nowIndex--
          this.playerOptions['sources'][0]['src'] = this.srcArrs[this.nowIndex].src
          this.playerOptions['poster'] = require(`@/images/swiper/swiper0${this.nowIndex + 1}.jpg`)
        }
      }else {
        if(this.nowIndex < this.srcArrs.length - 1) {
          this.nowIndex++
          this.playerOptions['sources'][0]['src'] = this.srcArrs[this.nowIndex].src
           this.playerOptions['poster'] = require(`@/images/swiper/swiper0${this.nowIndex + 1}.jpg`)
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .short-video {
     position: relative;
     margin:  0 25px;
     .btns {
       position: absolute;
       top: 0;
       right: 0;
       color: #fff;
     }
     ::v-deep .video-js .vjs-big-play-button {
       left: 50%;
       top: 50%;
       transform: translateX(-50%) translateY(-505);
     }
  }
</style>
 