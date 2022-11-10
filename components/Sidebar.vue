<template lang="">
    <section class="">
        <div id="sidebg" class="float-left container h-screen bg-[#3D9CF3] w-24   justify-center py-4 fixed block duration-700 overflow-hidden">

            <div class="w-30 h-13  ml-7 pb-12">
                <a to="" class="side-item">
                    <img src="svg/interactive.svg" alt="" srcset="" class="">
                    <p class="desc ml-14">XCode Sistemas</p>
                </a>
                
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 ease-linear duration-700  hover:bg-[#fff]">
                <nuxt-link to="" class="side-item">
                    <img src="svg/home.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Painel</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff] ease-linear duration-400 ">
                <nuxt-link to="" class="side-item">
                    <img src="svg/user.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Clientes</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff] ease-linear duration-400">
                <nuxt-link to="" class="side-item">
                    <img src="svg/comment.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Mensagens</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff] ease-linear duration-400">
                <nuxt-link to="" class="side-item">
                    <img src="svg/interrogation.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Ajuda</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff] ease-linear duration-400">
                <nuxt-link to="" class="side-item">
                    <img src="svg/settings.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Configurações</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff] ease-linear duration-400">
                <nuxt-link to="" class="side-item">
                    <img src="svg/lock.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Senha</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff] ease-linear duration-400">
                <nuxt-link to="" class="side-item">
                    <img src="svg/sign-out-alt.svg" alt="" srcset="" class="w-6 h-6">
                    <p class="desc ml-14">Sair</p>
                </nuxt-link>
            </div>
        </div>
        <div class="clear-both"></div>        
        <button id="btn-sidebar" class="relative duration-700  ease-linear fixed " v-on:click="showMenu()">
            <img src="svg/burger.svg" alt="" srcset="" class="w-10 h-10 ml-28 my-3">
        </button>
</section>
   
</template>
<style>

.side-expanded {
    width: 400px;
}
.side-item {
    display: flex;
    flex-direction: row;    
    width: 100%;
}
.side-item p {
    color: #fff;
}
.side-expanded-button {

    left: 300px;
}
</style>
<script>
    export default {
    methods:{
        showMenu(el) {
            
            document.getElementById('sidebg').classList.toggle('side-expanded');
            document.getElementById('btn-sidebar').classList.toggle('side-expanded-button');
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
