
<template>
  
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
   
    <div class="side-bar">
        
    <div class="menu">
       
          <div class="item" >
          <div><a  @click=" toggleDashboard"  class="sub-btn"><md-icons class="material-symbols-outlined">Dashboard</md-icons> Dashboard<span class="material-symbols-outlined">arrow_drop_down</span></a>
           <div class="sub-menu" v-if="enabledashboard" >
            <a>Sub Item 01</a>
            <a>Sub Item 02</a>
            <a>Sub Item 03</a>
            <a>Sub Item 04</a>
            
          </div>
          </div>
          <div ><a  @click=" toggleTable"  class="sub-btn"><md-icons class="material-symbols-outlined">Table</md-icons>Table<span class="material-symbols-outlined">arrow_drop_down</span></a>
           <div class="sub-menu" v-if="enabletable" >
            <a >Sub Item 01</a>
            <a>Sub Item 02</a>
            <a>Sub Item 03</a>
          </div>
          
        </div>
          <div ><a @click="toggleHome" class="sub-btn"><md-icons class="material-symbols-outlined">Home</md-icons>Home<span class="material-symbols-outlined">arrow_drop_down</span></a>
            <div class="sub-menu" v-if="enablehome" >
                <a >Sub Item 01</a>
              </div></div>
          <div ><a class="sub-btn" @click=" toggleSettings" ><md-icons class="material-symbols-outlined">Settings</md-icons>Settings<span class="material-symbols-outlined">arrow_drop_down</span></a>
            <div class="sub-menu" v-if="enablesettings">
                <a >Sub Item 01</a>
                <a >Sub Item 02</a>
              </div>
             </div>
             <div ><a class="sub-btn" @click=" toggleSearch" ><md-icons class="material-symbols-outlined">Search</md-icons>Search<span class="material-symbols-outlined">arrow_drop_down</span></a>
                <div class="sub-menu" v-if="enablesearch">
                    <a >Sub Item 01</a>
                    <a >Sub Item 02</a>
                    <a>Sub Item 03</a>
                    <a>Sub Item 04</a>
                    <a>Sub Item 05</a>
                    
                  </div>
                 </div>
          </div>
          </div>
      
</div>
</template>



<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
   }
   .side-bar{
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    position: fixed;
    display:flex;
    top: 0;
   }
   .side-bar.active{
    left: 0;
   }
   
   .side-bar .menu{
   
    margin-top: 80px;
   }
   .side-bar .menu .item{
    
    cursor: pointer;
   }
   
   .side-bar .menu .item a{
    font-size: 16px;
    display: flex;
    padding: 0px 5px;
    color:black;
    left:90px;
   }
    
   
   .side-bar .menu .item a:hover{
    background: #8621F8;
    transition: 0.3s ease;
   }
   
   
   .side-bar .menu .item a .dropdown{
    position:fixed;
    right: 0;
    margin: 10px;
    transition: 0.3s ease;
   }
   .side-bar .menu .item .sub-menu{
    background: rgba(255, 255, 255, 0.1);
   }
   .side-bar .menu .item .sub-menu a{
    padding-left: 70px;
   }
   .rotate{
    transform: rotate(90deg);
   }
   .close-btn{
    position: absolute;
    color: #fff;
    font-size: 20px;
    right: 0;
    margin: 25px;
    cursor: pointer;
   }
   
   .menu-btn{
    position: absolute;
    color: #fff;
    font-size: 20px;
    margin: 25px;
    cursor: pointer;
   }
   
   .main{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
   }
   
   .main h1{
    color: rgba(255, 255, 255, 0.8);
    font-size: 60px;
    text-align: center;
    line-height: 80px;
   }
   
   @media (max-width: 900px){
    .main h1{
      font-size: 40px;
      line-height: 60px;
    }
    
   }
   
</style>

<script>

export default {
  
  
    data (){
        return {
            enabledashboard:false,
            enabletable:false,
            enablehome:false,
            enablesettings:false,
            enablesearch:false
        }
    },
methods:{
    toggleDashboard(){
        this.enabledashboard=!this.enabledashboard;
    },
    toggleTable() {
        
this.enabletable=!this.enabletable;
    },
    toggleHome() {
this.enablehome=!this.enablehome;
 },
 toggleSettings() {
    this.enablesettings=!this.enablesettings;
 },
 toggleSearch() {
    this.enablesearch=!this.enablesearch;
 }
 }
}
</script>