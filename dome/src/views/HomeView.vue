<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible theme="light">
      <ListView />
    </a-layout-sider>
    <a-layout-content style="margin: 0 16px">
      <draggable v-model="likeList" item-key="id" class="content" :group="{ name: 'component' }">
        <template #item="{ element }">
          <span class='item-content' v-dialogDrag='true'>
            <component v-if="element.tag=='a-button'" :is="element.tag" :style="{backgroundColor:element.color}">{{element.name}}</component>
            <component v-if="element.value" :is="element.tag" v-model="element.value" :style="{width:element.width}" :placeholder="element.value"></component>
          </span>
        </template>
      </draggable>
    </a-layout-content>
  </a-layout>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import ListView from '@/components/ListView.vue'
import draggable from 'vuedraggable';
const collapsed = ref<boolean>(false)
const likeList = ref([])
const active = ref('')
</script>
<style>
.content {
  height: 100vh;
}

.item-content {
  margin: 10px;
}

.active {
  padding: 10px;
  border: springgreen 1px solid;
}
</style>