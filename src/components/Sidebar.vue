<template lang="html">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h1 class="text-center">已有时长</h1>
        </div>
        <div class="panel-body">
            <h1 class="text-center">{{ time }}小时</h1>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar',
        data () {
            return {
//        time: 6
            }
        },
        components: {},
        computed: {
            time(){
                // vue.user(vuex)   之后，this.$store可以访问全局store对象
                //可获取全局state某个状态，不能直接修改
                return this.$store.state.totalTime;
            }
        }
    }
</script>
<style lang="css">
</style>
