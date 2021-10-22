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
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="rank" label="Rank" />
    <el-table-column prop="nickname" label="ID" />
    <el-table-column prop="score" label="Score" />
  </el-table>
</el-main>
</template>

<script>
import AV from 'leancloud-storage';

export default {
  name: 'App',
  data () {
    return {
      input: '',
      tableData: []
    };
  },
  mounted () {
    const leaderboard = AV.Leaderboard.createWithoutData('score');
    leaderboard.getResults({
      limit: 100,
      selectUserKeys: ['nickname']
    }).then(results => {
      console.log(results);
      this.$data.tableData = results.map(result => {
        return {
          rank: result.rank + 1,
          nickname: result.user.attributes.nickname,
          score: result.value
        };
      });
      console.log(this.$data.tableData);
    });
  },
  methods: {
    play () {
      location.href = 'game.html?id=' + this.$data.input;
    },
  }
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
