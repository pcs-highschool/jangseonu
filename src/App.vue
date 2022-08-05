<template>
  <div class="main">
    <h1>My page</h1>
    <p>선우 Amuz Page의 오신것을 환영합니당~</p>    
    <hr />
      <ListItem :Title="'UserName'" :userName="'장선우'" />
  </div>
</template>

<script>
import ListItem from './components/list-item.vue'
export default {
  components : {
    ListItem
  }
}
</script>

<style>

</style>