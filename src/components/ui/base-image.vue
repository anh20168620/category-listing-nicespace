<template>
  <img :src="baseUrlImage + urlImage" alt="" class="base-img" />
</template>

<script>
export default {
  props: {
    urlImage: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      baseUrlImage: "https://media-api-beta.thinkpro.vn/",
    };
  },
};
</script>

<style>
.base-img {
  width: 100%;
  height: 100%;
}
</style>
