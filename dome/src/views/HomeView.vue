<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible theme="light">
      <ListView />
    </a-layout-sider>
    <a-layout-content style="margin: 0 16px">
      <ConteView />
    </a-layout-content>
  </a-layout>
</template>
<script lang='ts'>
import ListView from '@/components/ListView.vue'
import ConteView from '@/components/ConteView.vue'
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';
export default defineComponent({
  name: 'home',
  components: {
    ListView,
    draggable,
    ConteView
  },
  setup() {
    const collapsed = ref<boolean>(false)
    const likeList = ref([{ id: 1, name: 'Option' }, { id: 2, name: 'Option' }, { id: 3, name: 'Option' }, { id: 4, name: 'Option' }])
    return {
      collapsed,
      likeList
    }
  }
})
</script>