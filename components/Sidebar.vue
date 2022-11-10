<template lang="">
    <section class="">
        <div id="sidebg" class="float-left container h-screen bg-[#3D9CF3] w-24   justify-center py-4 fixed block">

            <div class="w-30 h-13  ml-7 pb-12">
                <a to="" >
                    <img src="svg/interactive.svg" alt="" srcset="" class="">
                    <p class="desc">XCode Sistemas</p>
                </a>
                
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/home.svg" alt="" srcset="" class="">
                    <p class="desc">Painel</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/user.svg" alt="" srcset="" class="">
                    <p class="desc">Clientes</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/comment.svg" alt="" srcset="" class="">
                    <p class="desc">Mensagens</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/interrogation.svg" alt="" srcset="" class="">
                    <p class="desc">Ajuda</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/settings.svg" alt="" srcset="" class="">
                    <p class="desc">Configurações</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/lock.svg" alt="" srcset="" class="">
                    <p class="desc">Senha</p>
                </nuxt-link>
            </div>
            <div class="w-30 h-13  ml-2 p-4 my-4 hover:bg-[#fff]">
                <nuxt-link to="" class="w-6 h-6">
                    <img src="svg/sign-out-alt.svg" alt="" srcset="" class="">
                    <p class="desc">Sair</p>
                </nuxt-link>
            </div>
        </div>
        <div class="clear-both"></div>        
        <button class="relative" v-on:click="showMenu()">
            <img src="svg/burger.svg" alt="" srcset="" class="w-10 h-10 ml-28 my-3">
        </button>
</section>
   
</template>
<style>
.desc{
    display: none;
}
</style>
<script>
    export default {
    methods:{
        showMenu() {
            
            document.getElementById('sidebg').style.width = '400px';
            // document.getElementsByTagName('p').style.display = 'block';
        }

    },
    data(){

        return 
            {showMenu}
    }
    

}
</script>
