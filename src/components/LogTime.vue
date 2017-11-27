<template lang="html">
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label for="date">日期</label>
        <input id="date" type="date" v-model="date" placeholder="请输入日期" class="form-control"/>
      </div>
      <div class="col-sm-6">
        <label for="totalTime">时间</label>
        <input id="totalTime" type="number" class="form-control" v-model="totalTime" placeholder="Hours"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" v-model="comment" placeholder="备注">
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
  </div>
</template>
<script>
  export default {
    name: 'LogTime',
    data () {
      return {
        date: '',
        totalTime: '',
        comment: ''
      }
    },
    components: {},
    methods: {
      save(){
          //时间安排对象
        const plan = {
          name: 'mark',
          image: '@/assets/logo.png',
          date: this.date,
          totalTime: this.totalTime,
          comment: this.comment
        };
        //actions savePlan
        this.$store.dispatch('savePlan',plan);
        //actions addTotalTime
        this.$store.dispatch("addTotalTime",plan.totalTime);
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="css">
</style>
