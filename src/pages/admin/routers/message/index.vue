<template>
  <el-table :data="users" style="width: 100%" border>
    <el-table-column label="id" prop="id" width="180"></el-table-column>
    <el-table-column label="name" prop="userName" width="180"></el-table-column>
    <el-table-column label="password" prop="password" width="180"></el-table-column>
    <el-table-column label="头像" prop="headPicture" width="180">
        <template #default='scope'>
            <img :src="scope.row.headPicture"/>
        </template>
    </el-table-column>
    <el-table-column label="token" prop="token" width="180"></el-table-column>
    <el-table-column label="权限" width="120">
        <template #default='scope'>
            <el-switch :value="scope.row.aut" @change='change($event, scope.row.id)'></el-switch>
        </template>
    </el-table-column>
    <el-table-column label="个性签名" prop="ps"></el-table-column>
    <el-table-column label="操作">
        <template #default='scope'>
            <el-button type="primary" @click="removeUser(scope.row.id)">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapMutations } from "vuex";
  export default {
    computed: {
        ...mapState("userModule", ["users"]),
    },
    methods: {
      ...mapMutations('userModule',{SET_AUT: 'SET_AUT'}),
        change(e, id) {
            this.SET_AUT(id)
        },
        removeUser() {
            
        }
    }
  }
</script>