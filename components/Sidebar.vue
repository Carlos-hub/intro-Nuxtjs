<template lang="">
    <section class="">
        <div id="sidebg" v-on:mousein="showMenu()" class="top-0 float-left h-screen bg-[#3D9CF3] w-20 py-4 fixed block duration-700 overflow-hidden items-center">

            <div class="w-30 h-13  ml-5 pb-12 ">
                <a to="" class="sside-item">
                    <img src="svg/interactive.svg" alt="" srcset="" class="">
                    <p class="ml-16">XCode Sistemas</p>
                </a>
                
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full">
                <nuxt-link to="" class="side-item">
                    <span class="gg-home"></span>
                    <p class="desc ml-16 ">Painel</p>
                </nuxt-link>
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full ">
                <nuxt-link to="" class="side-item">
                    <span class="gg-user"></span>
                    <p class="desc ml-16">Clientes</p>
                </nuxt-link>
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full ">
                <nuxt-link to="" class="side-item">
                    <span class="gg-comment"></span>
                    <p class="desc ml-16">Mensagens</p>
                </nuxt-link>
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full ">
                <nuxt-link to="" class="side-item">
                    <img src="svg/interrogation.svg" alt="" srcset="" class="w-6 h-6 ml-2">
                    <p class="desc ml-16">Ajuda</p>
                </nuxt-link>
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full ">
                <nuxt-link to="" class="side-item">
                    <img src="svg/settings.svg" alt="" srcset="" class="w-6 h-6 ml-2">
                    <p class="desc ml-16">Configura????es</p>
                </nuxt-link>
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full ">
                <nuxt-link to="" class="side-item">
                    <span class="gg-lock"></span>
                    <p class="desc ml-16">Senha</p>
                </nuxt-link>
            </div>
            <div class="hoverbtn w-30 h-13  p-4 my-4 ease-linear duration-500  hover:bg-[#fff] hover:rounded-l-full ">
                <nuxt-link to="" class="side-item">
                    <span class="gg-log-out"></span>
                    <p class="desc ml-16">Sair</p>
                </nuxt-link>
            </div>
        </div>
     
        <button id="btn-sidebar" class="relative duration-700  ease-linear fixed " v-on:click="">
            <img src="svg/burger.svg" alt="" srcset="" class="w-10 h-10 ml-28 my-3">
        </button>
</section>
   
</template>
<style>
#btn-sidebar{
    display: none;
}
#sidebg:hover {
    width: 20%;
}
.side-item {
    display: flex;
    flex-direction: row;    
    width: 100%;
}
.sside-item {
    display: flex;
    flex-direction: row;    
    width: 100%;
    color: #fff;
}
.side-item p {
    color: #fff;
}
.hoverbtn:hover p ,.side-item:hover p {
    color: #3D9CF3;
}

/* Icons CSS */

/* Icon Lock */
.gg-lock {
    margin-top:1px;
    margin-left: 15px;
    left:15px;
    box-sizing: border-box;
    position: absolute;
    display: block;
    transform: scale(var(--ggs,1));
    width: 12px;
    height: 11px;
    border: 2px solid;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom: transparent;
    color:#fff;
}
.gg-lock::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 10px;
    border-radius: 2px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    left: -4px;
    top: 10px;
}
.hoverbtn:hover .gg-lock{
    color: #3D9CF3;
}
/* Icon Lock End*/

/* Icon Home  */
.gg-home {
    margin-top: 8px;
    left:30px;
    background:
        linear-gradient(to left,
            currentColor 5px,transparent 0)
            no-repeat 0 bottom/4px 2px,
        linear-gradient(to left,
            currentColor 5px,transparent 0)
            no-repeat right bottom/4px 2px;
    box-sizing: border-box;
    position: absolute;
    display: block;
    transform: scale(var(--ggs,1));
    width: 18px;
    height: 14px;
    border: 2px solid;
    border-top: 0;
    border-bottom: 0;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: -2px;
    color:white;
  }
  .gg-home::after,
  .gg-home::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
  }
  .gg-home::before {
    border-top: 2px solid;
    border-left: 2px solid;
    border-top-left-radius: 4px;
    transform: rotate(45deg);
    top: -5px;
    border-radius: 3px;
    width: 14px;
    height: 14px;
    left: 0
  }
  .gg-home::after {
    width: 8px;
    height: 10px;
    border: 2px solid;
    border-radius: 100px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
    left: 3px;
    bottom: 0
  }
  .hoverbtn:hover .gg-home{
    color: #3D9CF3;
}

  /* Icon Home End */

/* Icon User  */
.gg-user {
    left:34px;
 display: block;
 transform: scale(var(--ggs,1));
 box-sizing: border-box;
 width: 15px;
 height: 21px;
 color:white;
}

.gg-user::after,
.gg-user::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border: 2px solid
}

.gg-user::before {
 width: 11px;
 height: 11px;
 border-radius: 30px;
 top: 0;
 left:15px;
}

.gg-user::after {
    left:13px;
 width: 15px;
 height: 12px;
 border-bottom: 0;
 border-top-left-radius: 3px;
 border-top-right-radius: 3px;
 top: 9px
} 
.hoverbtn:hover .gg-user{
    color:#3D9CF3;
}
/* Icon User End */

/* Icon Comment */

.gg-comment {
    left:27px;
 box-sizing: border-box;
 position: absolute;
 display: block;
 transform: scale(var(--ggs,1));
 width: 20px;
 height: 16px;
 border: 2px solid;
 border-bottom: 0;
 color: #fff;
 box-shadow:
 -6px 8px 0 -6px,
 6px 8px 0 -6px
}

.gg-comment::after,
.gg-comment::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 8px
}

.gg-comment::before {
 border: 2px solid;
 border-top-color: transparent;
 border-bottom-left-radius: 20px;
 right: 4px;
 bottom: -6px;
 height: 6px
}

.gg-comment::after {
 height: 2px;
 background: currentColor;
 box-shadow: 0 4px 0 0;
 left: 4px;
 top: 4px
} 

.hoverbtn:hover .gg-comment{
    color:#3D9CF3;
}
/* Icon Comment End */

/* Icon Log out  */

.gg-log-out {
    left:10px;
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 6px;
 height: 16px;
 border: 2px solid;
 transform: scale(var(--ggs,1));
 border-right: 0;
 border-top-left-radius: 2px;
 border-bottom-left-radius: 2px;
 margin-left: 5px;
 color: white;
}

.gg-log-out::after,
.gg-log-out::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute
}

.gg-log-out::after {
 border-top: 2px solid;
 border-left: 2px solid;
 transform: rotate(-45deg);
 width: 8px;
 height: 8px;
 left: 4px;
 bottom: 2px
}

.gg-log-out::before {
 border-radius: 3px;
 width: 10px;
 height: 2px;
 background: currentColor;
 left: 5px;
 bottom: 5px
}
.hoverbtn:hover .gg-log-out{
    color: #3D9CF3;
} 

/* Icon Log out End */

/* Icons CSS end */
</style>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<script>
    export default {
    methods:{
        showMenu(el) {
            
            document.getElementById('sidebg').classList.add('side-expanded');
            // document.getElementsByTagName('p').style.display = 'block';
        }

    },
    data(){

        return 
            {showMenu}
    }
    

}

</script>
<style>

</style>
