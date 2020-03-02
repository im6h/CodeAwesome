<template>
  <div>
    <div class="comment container pl-6 pr-6 md:mt-10 mt-4 md:pl-48 md:pr-48">
      <div class="comment--image">
        <img src="../assets/images/Avatar-crop.png" alt="" />
      </div>
      <div class="comment--input w-full">
        <div class="comment--input__input w-3/4">
          <input
            class="w-full"
            type="text"
            v-model="contentComment"
            placeholder="Hello bro"
          />
        </div>
        <div class="comment--input__button w-1/4">
          <button @click="sendComment">
            <i class="far fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class PostComment extends Vue {
  public contentComment?: String = '';
  public sendComment(): void {
    this.contentComment = 'Tao vua comment roi day';
  }
}
</script>
<style lang="scss">
.comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  &--image {
    height: 45px;
    width: 45px;
    img {
      border-radius: 50%;
    }
  }
  &--input {
    margin-left: 10px;
    display: flex;
    align-items: center;
    height: 40px;
    border: 1px solid #e2e8f0;
    border-radius: 1em;
    &__input {
      padding: 4px;
      input {
        padding: 4px;
        outline: none;
      }
    }
    &__button {
      display: flex;
      justify-content: flex-end;
      padding-right: 18px;
      button {
        outline: none;
      }
    }
  }
}
</style>
