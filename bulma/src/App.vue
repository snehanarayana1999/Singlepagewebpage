<template>
  <div id="app">
    <div id="menu-tree">
      <NavBar/>
  <SideBar/>
  
   </div>
  
  <router-view/>
  </div>
  </template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'


export default {
  
  name: 'app',
  data: () => ({
    
  }),
  components: {
    NavBar,
    SideBar
  }
}

</script>
<style lang="scss">
.search{
  top:10px;
}
</style>
