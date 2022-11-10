<template>
  <div class="flex">
    <Sidebar/>
    <div class="flex space-x-4 my-10 max-w-full ml-2 p-4">
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