<template>
  <div class="home">
    <a-menu id="dddddd" v-model="openKeys" :selectedKeys="selectedKeys" mode="inline">
      <a-sub-menu key="sub1" title="按钮">
        <template #icon>
          <MailOutlined />
        </template>
        <draggable v-model="likeList" item-key="id" :group="{ name: 'component', pull: 'clone', put: false }">
          <template #item="{ element }">
            <div class="item">{{element.name}}</div>
          </template>
        </draggable>
      </a-sub-menu>
      <a-sub-menu key="sub2" title="盒子">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" title="输入框">
        <template #icon>
          <ie-outlined />
        </template>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4" title="进度条">
        <template #icon>
          <SettingOutlined />
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import draggable from 'vuedraggable'
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined, IeOutlined } from '@ant-design/icons-vue';
import { ref, watch } from 'vue'
export default defineComponent({
  name: 'home',
  components: {
    draggable,
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
    IeOutlined
  },
  setup() {
    const selectedKeys = ref<string[]>(['2']);
    const openKeys = ref<string[]>(['sub1']);
    const likeList = ref([
      { id: 1, name: '普通按钮', tag: 'a-button', color: '#fffff' },
      { id: 2, name: '危险按钮', tag: 'a-button', color: '#fc011a' },
      { id: 3, name: '提示按钮', tag: 'a-button', color: '#fbc21c' },
      { id: 4, name: '确定按钮', tag: 'a-button', color: '#0f84d3' }])
    const methods = {

    }
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,
      likeList,
      ...methods,
    };
  }
})
</script>
<style scoped>
.item {
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
}
</style>