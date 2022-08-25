<template>
  <div class="category-listing" @click="$emit('closeModal')">
    <div class="detail-category">
      <slide-banner></slide-banner>

      <filter-bar></filter-bar>

      <filter-bar-mobile
        @toggleModalFilterMobile="toggleModalFilterMobile()"
      ></filter-bar-mobile>

      <brand-logo></brand-logo>

      <div class="product-list container">
        <product-card
          v-for="(product, index) in productList"
          :key="index"
          :product="product"
        >
        </product-card>
      </div>

      <button class="btn" @click="fetchMoreProduct">Xem thêm</button>
    </div>

    <modal-category
      v-show="isShowModal"
      @update-category="updateCategory"
    ></modal-category>

    <modal-filter-mobile
      @closeModalFilterMobile="closeModalFilterInMobile()"
      v-show="isShowModalFilterMobile"
    ></modal-filter-mobile>
  </div>
</template>

<script>
import SlideBanner from "../components/slide-banner.vue";
import FilterBar from "../components/filter-bar.vue";
import FilterBarMobile from "../components/filter-bar-mobile.vue";
import ModalFilterMobile from "../components/modal-filter-mobile.vue";
import BrandLogo from "../components/brand-logo.vue";
import ProductCard from "../components/product-card.vue";
import ModalCategory from "../components/modal-category.vue";

import { fetchProduct } from "../services";

export default {
  components: {
    SlideBanner,
    FilterBar,
    FilterBarMobile,
    ModalFilterMobile,
    BrandLogo,
    ProductCard,
    ModalCategory,
  },

  props: {
    isShowModal: {
      type: Boolean,
    },
  },
  data() {
    return {
      productList: [],
      curPage: 1,
      category: 7,
      isShowModalFilterMobile: false,
    };
  },

  async created() {
    this.productList = await this.fetchProductList();
  },

  methods: {
    async fetchProductList() {
      try {
        const result = await fetchProduct({
          keyword: "",
          cur_page: this.curPage,
          per_page: 24,
          sort: 1,
          category: this.category,
        });
        return result.data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMoreProduct() {
      this.cur_page += 1;
      this.productList = this.productList.concat(await this.fetchProductList());
    },

    updateCategory(newCategory) {
      this.category = newCategory;
    },

    toggleModalFilterMobile() {
      this.isShowModalFilterMobile = !this.isShowModalFilterMobile;
    },

    closeModalFilterInMobile() {
      this.isShowModalFilterMobile = false;
    },
  },

  watch: {
    async category() {
      this.productList = await this.fetchProductList();
      window.scrollTo(0, 500);
    },
  },
};
</script>

<style>
.detail-category {
  padding-top: 24px;
  padding-bottom: 40px;
  background-color: #f6f9fc;
}

.product-list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
}

.product-list.container {
  margin-bottom: 24px;
}

.btn {
  display: block;
  padding: 10px 12px;
  border-radius: 6px;
  width: 388px;
  margin: 0 auto;
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  color: #e91e63;
  font-weight: 700;
}

.btn:hover {
  cursor: pointer;
}

@media (max-width: 740px) {
  .product-list {
    gap: 7px;
    margin-bottom: 32px;
  }
}
</style>
