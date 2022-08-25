<template>
  <img :src="base_url_image + url_image" alt="" class="base-img" />
</template>
<script>
export default {
  props: {
    url_image: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      base_url_image: "https://media-api-beta.thinkpro.vn/",
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
