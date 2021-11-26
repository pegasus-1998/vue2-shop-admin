<template>
  <div class="jw-caht">
    <JwChat
      :taleList="list"
      @enter="bindEnter"
      v-model="inputMsg"
      scrollType="scroll"
    >
        <template slot="tools">
            <div style="width: 20rem; text-align: right" @click="toolEvent('自定义')"></div>
      </template>
    </JwChat>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { list, ranOnTa, talkDate } from '@/utils/talk.js'
export default {
  data() {
    return {
      inputMsg: "",
      list
    }
  },
  computed: {
    ...mapState('userModule', ['users', 'token', 'userIdx']),
  },
  methods: {
    bindEnter(e) {
      const msg = this.inputMsg;
      if (!msg) return;
      const msgObj = {
        date: talkDate(),
        text: { text: msg },
        mine: true,
        name: this.users[this.userIdx].userName,
        img: this.users[this.userIdx].headPicture,
      };
      this.list.push(msgObj);
      setTimeout(() => this.list.push(ranOnTa()), 1200)
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .toolBox {
    background: #ccc;
  }
  ::v-deep .web__msg-input {
    height: 74px;
  }
  ::v-deep .scroller {
    border: 5px solid #999;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  ::v-deep .el-button  {
    padding: 10px 19px;
  }
  ::v-deep cite i {
    color: #666;
    font-size: 13px !important;
    font-style: italic !important;
  }
  ::v-deep cite {
    color: rgb(50, 148, 205) !important;
    font-size: 15px !important;
  }
  ::v-deep .web__main-user img {
    width: 50px !important;
    height: 50px !important;
  }
</style>