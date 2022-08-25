<template>
  <div class="the-banner flex container">
    <swiper class="swiper" :slides-per-view="1" :space-between="0" :loop="true">
      <swiper-slide>
        <img
          class="swiper-image"
          src="../../assets/image/banner1.png"
          alt="banner nicespace1"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-image"
          src="../../assets/image/banner1.png"
          alt="banner nicespace1"
        />
      </swiper-slide>
    </swiper>
    <div class="sub-banner">
      <img class="sub-banner" src="../../assets/image/sub-banner1.png" alt="" />
      <img class="sub-banner" src="../../assets/image/sub-banner2.png" alt="" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.swiper {
  width: 894px;
  height: 376px;
  margin-left: 0;
  border-radius: 24px 0px;
  margin-right: 24px;
  cursor: pointer;
}

.sub-banner {
  border-radius: 16px 0px;
  width: 282px;
  height: 178px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.swiper-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 740px) {
  .the-banner {
    width: 100%;
    height: 182px;
  }

  .sub-banner {
    display: none;
  }

  .swiper {
    margin-right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
