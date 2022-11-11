<template lang="">
        <div class="report bg-[#FAFAFA] hover:bg-[#3D9CF3] justify-between grid space-x-5 grid-cols-8 place-items-center gap-4 p-2">
            <p class="col-span-3">{{name}}</p>
            <p class="col-span-1">{{value}}</p>
            <p class="col-span-3">{{payment}}</p>
            <p class="col-span-1">
                <span v-if="'Entregue' === status" class="bg-[#8DE02C] p-1 rounded-md text-white">{{status}}</span>
                <span v-else="'Pendente' === status" class="bg-[#F9CA3F] p-1 rounded-md text-white">{{status}}</span>
                <span v-else-if="'Estornado' === status" class="bg-[#FF0000] p-1 rounded-md text-white">{{status}}</span>
                <span v-else-if="'Processando' === status" class="bg-[#0000FF] p-1 rounded-md text-white">{{status}}</span>

            </p>
        </div>
</template>
<style>
.reportHover:hover{
    background-color: #3D9CF3;
    background-color: #FFF;
}
.report{
    max-width: fit-content;
    margin-left: 96px;
}

@media screen and (max-width: 700px;){
    .report{
        display: flex;
    }
}
</style>

<script>
export default {
    props:{
        name:String,
        value:Number,
        payment:String,
        status:String
    }
}
</script>