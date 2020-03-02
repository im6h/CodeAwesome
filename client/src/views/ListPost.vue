<template>
  <div class="">
    <navbar />
    <div class="container pt-20 pb-8 mx-auto">
      <div class="pr-6 pl-6">
        <div class="my-auto" v-for="(item, index) in totalNumber" :key="index">
          <post-card :post="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import PostCard from '@/components/Post__Card.vue';
@Component({
  components: {
    Navbar,
    PostCard,
  },
})
export default class ListPost extends Vue {
  private totalNumber: Number = 10;
}
</script>
<style lang="scss"></style>
