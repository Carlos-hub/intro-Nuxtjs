<template>
  <div class="block">
    <Sidebar/>
    <div class=" sm:justify-end sm:mt-[50px] md:flex md:space-x-4 md:my-10 md:ml-28 md:p-4  ">
      <Shortcut title="Acessos" number="50" image="/svg/vision.svg"/>
      <Shortcut title="Vendas" number="15" image="/svg/bag.svg"/>
      <Shortcut title="Acessos" number="60" image="/svg/manycomments.svg"/>
      <Shortcut title="Ganhos" number="1.154,54" image="/svg/charts.svg"/>
    </div>
  </div>
</template>

<script>
import Shortcut from '../components/Shortcut.vue';
import Sidebar from '../components/Sidebar.vue';


export default {
    name: "IndexPage",
    components: { Sidebar, Shortcut }
}
</script>