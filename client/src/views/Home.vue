<template>
  <div class="container mx-auto items-center home">
    <div
      class="flex flex-wrap"
      style="display: flex; flex-direction: column; justify-content: center;align-items: center"
    >
      <div
        class="home--image sm:w-full"
        style="width: 30%; display: flex;flex-direction: column; align-items: center"
      >
        <img class="mt-32" src="../assets/images/Avatar-crop.png" alt="" />
      </div>
      <div class="home--info p-10 sm:w-full" style="width: 70%">
        <p class="text-6xl">Xin chào.</p>
        <h3 class="text-3xl mt-6">Tên mình là Vũ Hải Đăng</h3>
        <p class="mt-6">
          Một sinh viên học code, thích code. Hiện tại mình đang là VueJS
          developer.
        </p>
        <p class="mt-4">
          CodeAwesome.me là sản phẩm cá nhân của mình để chia sẻ kinh nghiệm
          cũng như kiến thức của bản thân.
        </p>
      </div>

      <div class="home--handle pl-10 pr-10 w-full">
        <div
          class="bg-green-500 hover:bg-green-700 text-white font-bold mb-4  py-2 px-4 rounded home--handle--start"
          style="border: none; text-decoration: none"
        >
          <router-link :to="{ name: 'About' }">Bắt đầu</router-link>
        </div>
        <div class="home--handle--social p-1">
          <a href="">
            <i class="fab fa-facebook-messenger"></i>
          </a>
          <a href="" class="mr-8 ml-8">
            <i class="fab fa-github"></i>
          </a>
          <a href="">
            <i class="fab fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.home {
  /*display: flex;*/
  /*flex-direction: row;*/
  /*flex-wrap: wrap;*/
  max-width: 1024px;
  &--image {
    img {
      max-height: 190px;
      max-width: 190px;
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  &--handle {
    display: flex;
    width: 70%;
    flex-direction: column;
    &--start {
      width: 120px;
      display: flex;
      justify-content: center;
    }
    &--social {
      display: flex;
      flex-direction: row;
      a {
        i {
          height: 40px;
          width: 40px;
        }
      }
    }
  }
}
</style>
