<template>
  <div class="block max-w-[100%]">
    <Sidebar class="z-10"/>
    <div class="absolute top-[3%] left-[25%] w-[70%] flex justify-between">
      <input class="p-2 w-2/3 bg-white-400 rounded-xl border-slate-400 border-2 border-solid border-slate-500 hover:ring-2 " placeholder="Hello everyone"/>
      <nuxt-link to="" class="right-2 w-12 h-12 bg-[#D9D9D9] rounded-full p-2 hover:bg-[#c9c9c9] items-center"><img src="svg/userBlack.svg" alt="" class=" w-9 h-9"></nuxt-link>
    </div>
    <div class="sm:ml-10 sm:justify-end sm:mt-[60px] md:flex md:space-x-4 md:my-10 md:ml-0 md:p-4">
      <Shortcut title="Acessos" :number=50 image="/svg/vision.svg"/>
      <Shortcut title="Vendas" :number=15 image="/svg/bag.svg"/>
      <Shortcut title="Acessos" :number=60 image="/svg/manycomments.svg"/>
      <Shortcut title="Ganhos" :number=115.4 image="/svg/charts.svg"/>
    </div>
    <div class="md:flex md:space-x-4 relative md:left-24 px-2 rounded-xl  z-[-2]">
      
      <div class="reportresponse relative space-x-4 max-w-[800px] w-[60%] h--auto shadow-md shadow-slate-400 px-8">
        <div class="title flex grid justify-between p-4 grid-cols-8 place-items-center gap-6">
            <p class="col-span-3">Nome</p>
            <p class="col-span-1">Valor</p>
            <p class="col-span-3">Pagamento</p>
            <p class="col-span-1">Status</p>
        </div>
        <ReportSingle name="Smart TV OLED 55 LG" :value=342.00 payment="pago" status="Entregue" class="hover:bg-[#3D9CF3]"/>
        <ReportSingle name="Mouse Gamer Óptico USB" :value=42.00 payment="pendente" status="Estornado" />
        <ReportSingle name="Cadeira gamer: ThunderX3 TGC12" :value=22.00 payment="concluído" status="Pendente" />
        <ReportSingle name="PC Dell XPS-8940 Intel Core i7 10700" :value=2.00 payment="Pago" status="Entregue" />
        <ReportSingle name="PC Dell XPS-8940 Intel Core i7 10700" :value=2.00 payment="Pago" status="Processando" />
      </div>
      <div class="flex responsiveclient">
        <div class="w-full rounded-xl shadow-md shadow-slate-400  p-4">
        <NewClient name="Carlos" number="(49) 99999-9999"/>
        <NewClient name="Teste" number="(49) 88888-9999"/>
        <NewClient name="ciclano" number="(49) 12399-9999"/>
      </div>
      </div>
    </div>

    
  </div>
</template>
<style>
@media screen and (max-width:700px) {
  .reportresponse{
    margin-left: 96px;
  }
  .title{
    justify-content: space-between;
    padding-left: 0;
    padding-right: 0;
  }
  .reportresponse{
    width:fit-content;
    padding-left: 2px;
    padding-right: 2px;
  }
  .responsiveclient{
    margin-left: 96px;
    width:fit-content;
  }
}


 .gg-search {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 16px;
 height: 16px;
 border: 2px solid;
 border-radius: 100%;
 margin-left: -4px;
 margin-top: -4px
}

.gg-search::after {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border-radius: 3px;
 width: 2px;
 height: 8px;
 background: currentColor;
 transform: rotate(-45deg);
 top: 10px;
 left: 12px
} 
</style>
<script>
import NewClient from '../components/newClient.vue';
import ReportSingle from '../components/reportSingle.vue';
import Shortcut from '../components/Shortcut.vue';
import Sidebar from '../components/Sidebar.vue';


export default {
    name: "IndexPage",
    components: { Sidebar, Shortcut, NewClient, ReportSingle }
}
</script>