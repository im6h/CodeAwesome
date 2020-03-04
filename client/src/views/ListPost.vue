<template>
  <div class="">
    <navbar />
    <div class="container pt-20 pb-8 mx-auto">
      <div class="pr-6 pl-6">
        <div class="my-auto" v-for="(item, index) in hotNews" :key="index">
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
  get hotNews() {
    return this.$store.getters['hotNews'];
  }
  get sportNews() {
    return this.$store.getters['sportNews'];
  }
  created() {
    this.getHotNews();
    this.getSportNews();
  }
  public getHotNews() {
    return this.$store.dispatch('getHotNews');
  }
  public getSportNews() {
    return this.$store.dispatch('getSportNews');
  }
}
</script>
<style lang="scss"></style>
