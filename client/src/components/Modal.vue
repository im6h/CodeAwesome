<template>
  <div class="modal" :data-modal="name" v-if="visible">
    <div class="modal__mask" style="z-index: 999">
      <div
        class="modal__container"
        :class="{ align_items_center: center }"
        v-if="center && !right"
        style="display: flex; justify-content: center; align-items: center"
      >
        <div class="modal__box" :style="styleCustom">
          <div class="modal__content modal__content--normal">
            <div class="modal__body">
              <slot :payload="payload" />
            </div>
          </div>
          <i class="icon modal__close" v-if="!hiddenClose" @click="close"
            ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M557.3 513l226.3-226.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 467.7 285.7 241.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 513 240.5 739.3c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L512 558.3l226.3 226.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L557.3 513z"
              ></path></svg
          ></i>
        </div>
      </div>
      <div class="modal__container--right" v-if="right">
        <div
          class="modal__box"
          :style="{ width: styleCustom.width, height: '100%' }"
        >
          <div class="modal__content modal__content--normal">
            <div class="modal__body">
              <i
                class="icon modal__close--right"
                v-if="!hiddenClose"
                @click="close"
                ><svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M557.3 513l226.3-226.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 467.7 285.7 241.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 513 240.5 739.3c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L512 558.3l226.3 226.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L557.3 513z"
                  ></path></svg
              ></i>
              <slot :payload="payload" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Modal extends Vue {
  @Prop({ default: true }) center!: Boolean;
  @Prop({ default: false }) right!: Boolean;
  @Prop({ default: false }) hiddenClose!: Boolean;
  @Prop() onHideCallback!: Function;
  @Prop() name!: String;
  @Prop({
    default: () => ({
      width: '480px',
      height: '480px',
    }),
  })
  styleCustom!: Object;

  public onCallback: Function | undefined;
  public payload: Object = {};
  public visible: Boolean = true;

  listenOnCallback() {
    if (typeof this.onCallback === 'function') {
      this.onCallback();
    }
  }
  close() {
    if (this.onHideCallback) {
      this.onHideCallback();
    }
    this.visible = false;
  }
  hide(params: any) {
    this.visible = false;
    this.payload = {};
    this.onCallback = params.onCallback;
  }
  show(params: any) {
    this.visible = true;
    if (params) {
      this.payload = params.payload;
      this.onCallback = params.onCallback;
    }
  }
}
</script>

<style lang="scss" scoped>
.modal__box {
  position: relative;
  display: inline-block;
  padding: 48px 32px;
  background: white;
  animation-name: scale;
  animation-duration: 0.8s;
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
.modal__close.icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  color: #fff;
  cursor: pointer;
}
.modal__close--right.icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  color: #fff;
  cursor: pointer;
}
.modal__header {
  margin: 16px 14px;
  width: 100%;
}
.modal__container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  &--right {
    position: absolute;
    top: 0;
    background: white;
    bottom: 0;
    right: 0;
    animation-name: move;
    animation-duration: 0.8s;
    @keyframes move {
      from {
        right: -100%;
      }
      to {
        right: 0;
      }
    }
  }
}
.modal__content {
  color: #555;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05), 0 16px 16px 0 rgba(0, 0, 0, 0.09);
}
.modal__mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
