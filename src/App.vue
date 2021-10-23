<template>
<el-main>
  <h2>小幸游戏大厅</h2>
  <el-row>
    <el-input v-model="input" placeholder="昵称（默认为章鱼哥）" />
  </el-row>
  <el-row>
    <el-button type="primary" @click="run">迪士尼在逃小幸</el-button>
    <el-button type="primary" @click="mel">合成小幸</el-button>
  </el-row>
  
  <el-divider />

  <h2>排行榜</h2>
  <el-space wrap>
      <el-dropdown @command="setboard">
        <el-button type="primary">
          排行榜<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item disabled>迪士尼在逃小幸</el-dropdown-item>
            <el-dropdown-item icon="el-icon-trophy"
              :command="['score', false]">最高得分榜</el-dropdown-item>
            <el-dropdown-item :command="['score_sum', false]">累计得分榜</el-dropdown-item>
            <el-dropdown-item :command="['score', true]">旧排行榜</el-dropdown-item>
            <el-dropdown-item divided disabled>合成小幸</el-dropdown-item>
            <el-dropdown-item icon="el-icon-trophy"
              :command="['melon_succ', false]">最高胜利得分榜</el-dropdown-item>
            <el-dropdown-item :command="['melon_fail', false]">最高失败得分榜</el-dropdown-item>
            <el-dropdown-item :command="['melon_sum', false]">累计得分榜</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button icon="el-icon-refresh" circle @click="refresh" />
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
      board: 'score',
      previous: false,
    };
  },
  methods: {
    run () {
      location.href = 'runner/index.html?id=' + this.$data.input;
    },
    mel () {
      location.href = 'melon/index.html?id=' + this.$data.input + "&p=";
    },
    refresh () {
      const leaderboard = AV.Leaderboard.createWithoutData(this.$data.board);
      leaderboard.getResults(this.$data.board == 'score' ? {
        limit: 50,
        skip: this.$data.page * 50 - 50,
        selectUserKeys: ['username', 'nickname'],
        version: this.$data.previous ? 4 : 5
      } : {
        limit: 50,
        skip: this.$data.page * 50 - 50,
        selectUserKeys: ['username'],
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
    },
    setboard (paras) {
      this.$data.board = paras[0];
      this.$data.previous = paras[1];
      this.refresh();
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
