<template>
  <div class="product-item">
    <div class="product-item-img">
      <base-image :url_image="product.image"></base-image>
    </div>
    <div class="product-item-content">
      <div class="product-item-name">{{ product.name }}</div>
      <div class="product-item-price">
        <span class="sub-text">Từ</span>
        <span class="price">{{ formatPriceToVnd }}</span>
        <span class="discount" v-if="product.price_discount_percent"
          >{{ product.price_discount_percent }}%</span
        >
      </div>
      <div class="product-item-color">
        <span class="sub-text">Màu</span>
        <span v-for="(color, index) in product.colors" :key="index"
          ><div class="color" :style="{ backgroundColor: color.code }"></div>
        </span>
      </div>
    </div>
    <div class="product-item-gift">
      <div class="gifft-image">
        <img src="../../assets/image/gift.png" alt="" />
      </div>
      <span class="gift-text">Quà tặng</span>
    </div>
  </div>
</template>
<script>
import BaseImage from "../ui/base-image.vue";
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: {},
    },
  },
  components: {
    BaseImage,
  },
  computed: {
    formatPriceToVnd() {
      return this.product.price
        .toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })
        .slice(0, -3);
    },
  },
};
</script>
<style>
.product-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% / 6 - 6.67px);
  background: #ffffff;
  border-radius: 16px 0px;
}

.product-item-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 4px;
  border-bottom: 1px solid #f0f2f4;
}

.product-item-name {
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  height: 36px;
  width: 174px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: clip;
}

.product-item-price,
.product-item-color {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.price {
  color: #e91e63;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.discount {
  color: #e91e63;
  font-size: 10px;
  line-height: 13.66px;
  font-weight: 600;
  padding: 0px 2px;
  background: #fff3f5;
  border-radius: 2px;
}

.sub-text {
  color: #6b7075;
  font-size: 12px;
  line-height: 18px;
}

.color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid rgb(96, 123, 139);
}

.product-item-gift {
  padding: 8px;
  display: flex;
  gap: 8px;
}

.gifft-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #570cf6;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.gifft-image image {
  width: 12px;
  height: 12px;
}

.gift-text {
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  color: #570cf6;
}

@media (max-width: 740px) {
  .product-item {
    width: calc(100% / 2 - 7px / 2);
  }

  .product-item-img {
    width: 100%;
  }

  .product-item-content {
    width: 100%;
  }

  .product-item-name {
    width: 100%;
  }
}
</style>
