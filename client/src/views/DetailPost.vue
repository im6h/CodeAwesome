<template>
  <div>
    <navbar />
    <div class="container pt-20 pb-8 mx-auto">
      <div class="post">
        <div class="post--title text-center text-3xl mt-8">
          Hello World - First program
        </div>
        <div class="post--content mt-10 md:pl-48 md:pr-48 pl-6 pr-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
          perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          Maiores et perferendis eaque, exercitationem praesentium nihil.
          <span>
            <img src="../assets/logo.png" alt="" />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
          perferendis eaque, exercitationem praesentium nihil.
        </div>
        <div class="post--comment">
          <post-comment />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import PostComment from '@/components/Post__Comment.vue';
@Component({
  components: {
    Navbar,
    PostComment,
  },
})
export default class DetailPost extends Vue {
  @Prop() item!: object;
}
</script>
<style lang="scss">
.post {
  &--title {
  }
  &--content {
  }
  &--comment {
  }
}
</style>
