<template>
  <div
    class="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"
  >
    <div class="w-full max-w-screen-xl relative mx-auto px-6">
      <div class="items-center flex -mx-6">
        <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
          <div class="flex items-center">
            <a href="/" class="block lg:mr-4">
              <div class="flex flex-wrap items-center">
                <img
                  style="height: 40px; width: 40px; border-radius: 50%"
                  src="../assets/images/Avatar-crop.png"
                  alt=""
                />
                <p class="ml-3 text-red-500">
                  Code<span class="text-green-500">Awesome</span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="flex flex-grow lg:w-3/4 xl:w-4/5 justify-end pr-6">
          <div class="flex items-center text-gray-500">
            <a
              class="block flex items-center hover:text-gray-700 md:mr-10 mr-4 text-xl"
              href="https://github.com/tjjone98"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class="block flex items-center hover:text-gray-700 md:mr-10 mr-4 text-xl"
              href="https://www.linkedin.com/in/vu-hai-dang-6157081a1/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/vkgsan"
              target="_blank"
              class="block flex items-center hover:text-gray-700 text-xl"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss"></style>
