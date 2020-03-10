<template>

  <li class='nav-item'>
    <a class='nav-link dark-gray hk-focus-ring hover-bg-light-silver'
       :href='href'>
      {{ text }}
    </a> 
  </li>

</template>

<style scoped>


.nav-item {

}

.nav-link {
  display: block;
  text-decoration: none;
  line-height: 1.5;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

a {
  background-color: transparent;
  font-size: 13px;
}

</style>

<script>

export default {
  name: 'navigation-item',

  data: () => ({
    text: 'Hello',
    href: '#hello'
  }),

  computed: {
  },

}

</script>
