<template>
  <div class='sidebar bg-light-gray'>
    <ul class='sidebar-content'>
      <navigation-item/>
    </ul>
  </div>

</template>

<style scoped>

.sidebar {
  position: relative;

  /* grow shrink basis */
  flex: 1 0 240px;
  flex-direction: column;
}

.sidebar-content {
  position: -webkit-sticky;
  position: sticky;
  top: 70px;
  margin: 0px;

  height: calc(100vh - 70px);
  overflow: scroll;

  list-style-type: none;
}

</style>

<script>

import NavigationItem from '@/components/NavigationItem'

export default {
  name: 'side-bar',

  data: () => ({
    taskData: 'Hello'
  }),

  computed: {
    headerStype() {
    }
  },

  components: {
    NavigationItem,
  }

}

</script>
