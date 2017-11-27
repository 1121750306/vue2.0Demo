<template lang="html">
  <div>
    <router-link v-if="$route.path!=='/time-entries/log-time'" class="btn btn-primary" to="/time-entries/log-time">创建
    </router-link>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>
    <hr>
    <router-view></router-view>
    <div class="time-entries">
      <p v-if="!plans.length">
        <strong>暂无任何计划</strong>
      </p>
      <div class="list-group">
        <a v-for="(plan,index) in plans" class="list-group-item">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.image" alt="" class="avatar">
              <p class="text-center">
                {{plan.name}}
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time">
                  {{plan.totalTime}}
                </i>
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar">
                  {{plan.date}}
                </i>
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{plan.comment}}</p>
            </div>
            <div class="col-sm-1">
              <button @click="deletePlan(index)" class="btn btn-xs btn-danger delete-button">x</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TimeEntries',
    data () {
      return {}
    },
    components: {},
    computed: {
      plans(){
        return this.$store.state.list;
      }
    },
    methods: {
      deletePlan(index){
        this.$store.dispatch('decTotalTime', this.plans[index].totalTime)
        this.$store.dispatch('deletePlan', index)
      }
    }
  }
</script>
<style lang="css">
  .avatar {
    height: 75px;
    margin: 10px auto;
  }

  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }

  .time-block {
    padding: 10px;
  }

  .comment-section {
    padding: 20px;
  }
</style>
