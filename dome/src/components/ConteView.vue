<template>
  <div class="conte">
    <draggable v-model="likeList" item-key="id" class="content" :group="{ name: 'component' }">
      <template #item="{ element }">
        <span :class="active==element.name?'item-content active':'item-content'" @click="active=element.name">
          <component :is="element.tag" v-bind="element.props" v-on="element.event" :style="{backgroundColor:element.color}">{{element.name}}</component>
        </span>
      </template>
    </draggable>
  </div>
</template>
<script setup lang='ts'>
import { defineComponent, ref } from 'vue'
import draggable from 'vuedraggable';
const active = ref('')
const likeList = ref([])
</script>
<style scoped>
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