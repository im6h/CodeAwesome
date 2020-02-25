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
        <img class="mt-24" src="../assets/images/Avatar-crop.png" alt="" />
        <p class="text-2xl text-red-500 mt-4">
          Code<span class="text-green-500">Awesome</span>
        </p>
      </div>
      <div class="home--info md:p-10 p-2 sm:w-full" style="width: 70%">
        <p class="md:text-6xl text-4xl">Xin chào!</p>
        <h3 class="md:text-3xl mt-6 text-2xl">Tên mình là Vũ Hải Đăng.</h3>
        <p class="mt-6">
          Một sinh viên học code, thích code. Hiện tại mình đang là
          <span
            ><a
              class="hover:underline hover:text-green-500"
              href="https://vuejs.org/"
              target="_blank"
              >VueJS</a
            ></span
          >
          developer.
        </p>
        <p class="mt-4">
          <span><a href="" class="hover:underline">CodeAwesome.me</a></span> là
          sản phẩm cá nhân của mình để chia sẻ kinh nghiệm cũng như kiến thức
          của bản thân.
        </p>
      </div>

      <div class="home--handle pl-2 pr-2 md:pl-10 md:pr-10 w-full">
        <div
          class="bg-green-500 hover:bg-green-700 text-white font-bold mb-4  py-2 px-4 rounded-full home--handle--start"
          style="border: none; text-decoration: none"
        >
          <router-link :to="{ name: 'ListPost.vue' }">Bắt đầu</router-link>
        </div>
        <div class="home--handle--social p-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal';
export default {
  name: 'Home',
  data() {
    return {
      show: false,
    };
  },
  components: { Modal },
  methods: {
    showModal() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
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
