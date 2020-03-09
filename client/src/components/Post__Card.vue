<template>
  <router-link :to="{ name: 'DetailPost', params: { id: id } }">
    <div class="rounded overflow-hidden  md:w-full w-full">
      <div class="py-4">
        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
        <p v-if="post.content" class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#winter</span
        >
        <hr class="mt-6" />
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PostCard extends Vue {
  @Prop() post!: object;
  @Prop() id!: number;
  created() {}
}
</script>

<style scoped lang="scss"></style>
