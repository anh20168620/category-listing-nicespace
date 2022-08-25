<template>
  <the-header
    @closeModal="closeModal()"
    @toggleModal="toggleModal()"
  ></the-header>

  <router-view
    :isShowModal="isShowModal"
    @closeModal="closeModal()"
  ></router-view>

  <the-footer></the-footer>

  <the-slogan></the-slogan>
</template>

<script>
import TheHeader from "./components/layouts/the-header.vue";
import TheFooter from "./components/layouts/the-footer.vue";
import TheSlogan from "./components/layouts/the-slogan.vue";

export default {
  components: { TheHeader, TheFooter, TheSlogan },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },

    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: "Manrope", sans-serif;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.flex {
  display: flex;
}

.align-items {
  align-items: center;
}

.h-full {
  height: 100%;
}

.text-paragraph {
  font-size: 14px;
  line-height: 21px;
}

.font-seminormal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

::placeholder {
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  color: #6b7075;
}

@media (max-width: 740px) {
  body {
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    position: relative;
  }
}
</style>
