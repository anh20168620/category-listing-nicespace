<template>
  <div
    class="category-listing"
    @click="isShowModal ? (isShowModal = false) : ''"
  >
    <the-header @tonggleModal="isShowModal = !isShowModal"></the-header>
    <div class="detail-category">
      <!-- <div class="container"> -->
      <the-banner></the-banner>

      <the-filter></the-filter>

      <the-filter-mobile
        @openModalFilterMobile="openModalFilterInMobile()"
      ></the-filter-mobile>

      <the-brand></the-brand>

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
    <!-- </div> -->
    <the-footer></the-footer>
    <the-slogan></the-slogan>
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
import TheHeader from "../components/layouts/the-header.vue";
import TheBanner from "../components/layouts/the-banner.vue";
import TheFilter from "../components/layouts/the-filter.vue";
import TheFilterMobile from "../components/layouts/the-filter-mobile.vue";
import ModalFilterMobile from "../components/articles/modal-filter-mobile.vue";
import TheBrand from "../components/layouts/the-brand.vue";
import ProductCard from "../components/articles/product-card.vue";
import TheFooter from "../components/layouts/the-footer.vue";
import ModalCategory from "../components/articles/modal-category.vue";
import TheSlogan from "../components/layouts/the-slogan.vue";

import { fetchProduct } from "../services";
export default {
  components: {
    TheHeader,
    TheBanner,
    TheFilter,
    TheFilterMobile,
    ModalFilterMobile,
    TheBrand,
    ProductCard,
    TheFooter,
    TheSlogan,
    ModalCategory,
  },
  data() {
    return {
      productList: [],
      cur_page: 1,
      category: 7,
      isShowModal: false,
      isShowModalFilterMobile: false,
    };
  },
  async created() {
    try {
      const result = await fetchProduct({
        keyword: "",
        cur_page: this.cur_page,
        per_page: 24,
        sort: 1,
        category: this.category,
      });
      this.productList = result.data;
      console.log(this.productList);
    } catch (error) {
      console.log(error.message);
    }
  },
  methods: {
    async fetchMoreProduct() {
      try {
        this.cur_page += 1;
        const result = await fetchProduct({
          keyword: "",
          cur_page: this.cur_page,
          per_page: 24,
          sort: 1,
          category: this.category,
        });
        this.productList = this.productList.concat(result.data);
      } catch (error) {
        console.log(error);
      }
    },

    updateCategory(newCategory) {
      this.category = newCategory;
    },

    openModalFilterInMobile() {
      this.isShowModalFilterMobile = !this.isShowModalFilterMobile;
    },

    closeModalFilterInMobile() {
      this.isShowModalFilterMobile = false;
    },
  },
  watch: {
    async category() {
      try {
        const result = await fetchProduct({
          keyword: "",
          cur_page: this.cur_page,
          per_page: 24,
          sort: 1,
          category: this.category,
        });
        this.productList = result.data;
        window.scrollTo(0, 500);
      } catch (error) {
        console.log(error);
      }
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
