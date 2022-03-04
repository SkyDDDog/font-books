<template>
  <div id="app">
   <template v-if="$route.meta.fullScreen">
    <header-mock-up></header-mock-up>
    <div class="warp-box">
      <router-view />
    </div>
   </template>
    <template v-else>
    <div class="warp-box">
      <router-view />
    </div>
   </template>
  </div>
</template>
<script>
export default {
  components: {
    HeaderMockUp: () => import('./components/Headermock'),
    navLeft: () => import('./views/Manage/Controller')
  },
}
</script>
<style lang="scss">
</style>
