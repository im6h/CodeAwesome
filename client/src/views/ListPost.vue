<template>
  <div class="">
    <navbar />
    <div class="container pt-20 pb-16 pl-6 pr-6 mx-auto">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    Navbar,
  },
})
export default class ListPost extends Vue {}
</script>
