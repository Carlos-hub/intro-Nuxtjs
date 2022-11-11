<template lang="">
    <div class="shortcut bg-[#FAFAFA] hover:bg-[#3D9CF3] sm:w-full sm:h-auto sm:my-4 sm:p-4 md:w-72 md:h-40 shadow-md shadow-slate-300 rounded-lg md:px-4 top-10 text-[#3D9CF3] hover:text-[#FAFAFA] ease-linear duration-200">
        <div class="align-middle justify-center float-left mt-[20%] ">
            <h1 class="text-4xl mb-4">{{number}}</h1>
            <p class="text-base text-[#7D7D7D]">{{title}}</p>
        </div>
        <div class="float-right mt-[20%] ">
            <img :src="image" alt="" class="">
        </div>
        <div class="clear-both"></div>
    </div>
</template>
<script>
export default {
    props:{
        number: Number,
        title: String,
        image: String
    }
}
</script>
<style>
.shortcut:hover p{
    color:#fff;
}
</style>
