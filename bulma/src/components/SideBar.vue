<template>
<div class="menu-items">
    
   <div class="menu" :class="{ 'small-menu': smallMenu }">
    

    <MenuItem
    
         v-for="(item, index) in menuTree"
         :key="index"
         :data="item.children"
         :label="item.label"
         :icon="item.icon"
         :depth="0"
         :smallMenu="smallMenu"
         />
         
        <i @click="smallMenu = !smallMenu" class="material-symbols-outlined">menu </i>
    <!-- <div class="menuTree">
      <ul>
        <li>
          <router-link to="/search">Search</router-link>
        </li>
    
       <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li> 
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
   
 </div>  
  -->
     </div>
</div>
</template>

<script>
import MenuItem from './MenuItem.vue';


export default {
  name: 'recursive-menu',
  data: () => ({
    smallMenu: false,
    menuTree: [
      { 
        
       label: "Search",
       icon:"search",
       children: [
          {
            label: "Login",
          },
          {
           label:"Sign in",
          }
        ]
      },
        {
        label: "Home",
        icon : "home",
        children: [
          {
            label: "Login Page",
            children: [
              {
                label: "Username",
                
              }
            ]
          },
          {
            label: "Sign in"
          }
        ]
      },
      {
        label: "Dashboard",
        icon:"dashboard",
        
        children: [
          {
            label: "Team settings",
          },
          {
            label: "Group settings"
          },
          {
            label: "Cloud settings"
          }
        ]
      },
      {
        label: "Settings",
        icon:"settings",
       
         children:[
          {
            label:"payments"
          },
          {
            label:"Transfers"
          },
          {
            label:"Balance"
          }
        ]
      },
    ]
  }),
  
  components: {
    MenuItem,
  },
};
    
</script>

<style lang="scss" scoped>
.menu {

  position: fixed;
  height: 40vh;
  width: 240px;
  left: 0;
  top:70px;
  border-right: 1px solid #ececec;
  transition: all .3s ease;
  overflow: auto;
  i {
    position: fixed;
    left: 250px;
    font-size: 20px;
    top: 60px;
    user-select: none;
    cursor: pointer;
    transition: all .3s ease;
  }
  &.small-menu {
    
    overflow: inherit;
    width: 60px;
    padding-top: 0px;
    i {
      left: 20px;
    }
  }
}
</style>