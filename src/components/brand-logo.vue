<template>
  <div class="section-brand container">
    <div class="brand-item" v-for="brand in brandList" :key="brand.id">
      <img
        class="brand-item-img"
        :src="getImageUrl(brand.image)"
        :alt="brand.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandList: [
        {
          id: 1,
          image: "thinkpad-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 2,
          image: "legion-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 3,
          image: "ideapad-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 4,
          image: "thinkpad-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 5,
          image: "legion-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 6,
          image: "ideapad-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 7,
          image: "thinkpad-logo.png",
          alt: "thinkpad logo",
        },
        {
          id: 8,
          image: "legion-logo.png",
          alt: "thinkpad logo",
        },
      ],
    };
  },

  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/image/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
};
</script>
<style>
.section-brand {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.section-brand.container {
  margin-bottom: 24px;
}

.brand-item {
  background: #ffffff;
  border-radius: 8px;
  height: 42px;
  width: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-item:hover {
  cursor: pointer;
}

@media (max-width: 740px) {
  .section-brand.container {
    overflow-x: auto;
    width: 100%;
  }

  .section-brand::-webkit-scrollbar {
    display: none;
  }

  .brand-item {
    width: 102px;
    height: 34px;
    padding: 9px 27px;
  }
}
</style>
