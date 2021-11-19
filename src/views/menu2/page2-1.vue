<template>
  菜单二/页面2-1
  <el-button @click='toPage2_2'>跳转到菜单二/页面2-1-1（在菜单中不显示）</el-button>
</template>

<script>
export default {
    methods: {
        toPage2_2() {
            this.$router.push('/menu2/page2-1-1')
        }
    }
}
</script>

<style>

</style>