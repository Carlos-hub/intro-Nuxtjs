<template lang="">
    <div class="p-4 changebg rounded-xl hover:bg-[#3D9CF3]">
    <div>
        <div class="float-left bg-gray-400 rounded-full p-4">
            <img src="/svg/userBlack.svg" alt="">
        </div>
        <div class="float-right pl-4">
            <h4 class="justify-center">
                {{name}}
            </h4>
            <p class="text-normal">
                {{number}}
            </p>
        </div>
    </div>
    <div class="clear-both"></div>
</div>
</template>
<style>
.changebg:hover{
    background-color: #3D9CF3;
}
.changebg:hover p{
    color: #FFF;
}
</style>
<script>
export default {
    props:{
        name:String,
        number:String
    }
}
</script>
