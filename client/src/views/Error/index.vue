<template>
  <div style="height: 100%">
    <div class="error ">
      <div class="error-code text-center">
        <span class="text-6xl text-orange-500">404</span>
      </div>
      <div class="error-content text-center">Nothing was not found!</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Error extends Vue {}
</script>
<style lang="scss">
.error {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-code {
  }
  &-content {
  }
}
</style>
