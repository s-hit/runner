<template>
<el-main>
  <h2>迪士尼在逃小幸</h2>
  <el-row>
    <el-input v-model="input" placeholder="昵称" />
  </el-row>
  <el-row>
    <el-button type="primary" @click="play">点我冲鸭</el-button>
  </el-row>
  
  <el-divider />

  <h2>排行榜</h2>
  <el-space wrap>
      <el-input-number v-model="page" :min="1" @change="refresh" />
      <el-button type="primary" icon="el-icon-refresh" circle @click="refresh" />
      <el-button icon="el-icon-setting" circle @click="drawer = true;" />
  </el-space>
  <el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="rank" label="Rank" />
      <el-table-column prop="username" label="ID" />
      <el-table-column prop="score" label="Score" />
    </el-table>
  </el-row>
  <el-row>
    <el-input-number v-model="page" :min="1" @change="refresh" />
  </el-row>

  <el-drawer
    v-model="drawer"
    title="设置"
    direction="btt">
    <el-switch v-model="previous" @change="refresh" active-text="原排行榜" inactive-text="现排行榜" />
  </el-drawer>
</el-main>
</template>

<script>
import AV from 'leancloud-storage';

export default {
  name: 'App',
  data () {
    return {
      input: '',
      tableData: [],
      page: 1,
      previous: false,
      drawer: false,
    };
  },
  methods: {
    play () {
      location.href = 'games/runner.html?id=' + this.$data.input;
    },
    refresh () {
      const leaderboard = AV.Leaderboard.createWithoutData('score');
      leaderboard.getResults({
        limit: 50,
        skip: this.$data.page * 50 - 50,
        selectUserKeys: ['username', 'nickname'],
        version: this.$data.previous ? 4 : 5
      }).then(results => {
        this.$data.tableData = results.map(result => {
          return {
            rank: result.rank + 1,
            username: this.$data.previous ?
              result.user.attributes.nickname : 
              result.user.attributes.username,
            score: result.value
          };
        });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
    }
  },
  mounted () {
    const leaderboard = AV.Leaderboard.createWithoutData('score');
    leaderboard.getResults({
      limit: 50,
      selectUserKeys: ['username', 'nickname'],
    }).then(results => {
      this.$data.tableData = results.map(result => {
        return {
          rank: result.rank + 1,
          username: result.user.attributes.username,
          score: result.value
        };
      });
    });
  },
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-row + .el-row {
  padding-top: 20px;
}
</style>
