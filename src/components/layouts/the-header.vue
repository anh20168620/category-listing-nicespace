<template>
  <div class="the-header">
    <div class="container flex align-items h-full">
      <router-link :to="{ name: 'category-page' }">
        <div class="logo">
          <img src="../../assets/image/Logo.png" alt="Logo nicespace" />
        </div>
      </router-link>
      <div class="category layout-padding" @click.stop="$emit('tonggleModal')">
        <img src="../../assets/image/dropdown.png" alt="dropdown" />
        <span class="font-semibold text-paragraph">Danh mục</span>
      </div>
      <div class="search layout-padding">
        <base-search></base-search>
      </div>
      <div class="contact layout-padding">
        <img src="../../assets/image/phone.png" alt="contact nicespace" />
        <span class="font-semibold text-paragraph">1900.63.3579</span>
      </div>
      <div class="cart">
        <img src="../../assets/image/cart.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import BaseSearch from "../ui/base-search.vue";
export default {
  components: {
    BaseSearch,
  },
};
</script>
<style>
.the-header {
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.06);
}

.category:hover {
  cursor: pointer;
}

.logo {
  margin-right: 15px;
}

.layout-padding {
  display: flex;
  align-items: flex-start;
  padding: 11px 16px 12px;
  gap: 10px;
  margin-right: 8px;
}

.search {
  width: 500px;
}

.contact {
  width: 150px;
}

.cart {
  width: 44px;
  height: 44px;
  margin-left: 217px;
  padding: 11px 16px 12px;
}

@media (max-width: 740px) {
  .the-header {
    height: 65px;
  }

  .logo img {
    width: 106px;
    height: 24px;
  }

  .search {
    display: none;
  }

  .contact {
    display: none;
  }

  .font-semibold.text-paragraph {
    display: none;
  }

  .container.flex.align-items.h-full {
    justify-content: space-between;
  }

  .cart {
    margin-left: 0;
    width: 24px;
    height: 24px;
    padding: 4px;
  }

  .category {
    margin-right: -160px;
    width: 24px;
    height: 24px;
    padding: 4px;
  }
}
</style>
