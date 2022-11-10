<template>
  <div class="flex">
    <Sidebar/>
    <Shortcut/>
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