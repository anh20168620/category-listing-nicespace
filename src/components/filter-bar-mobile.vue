<template>
  <div class="the-filter-mobile flex container">
    <div class="the-filter-mobile-item flex">
      <img
        src="../assets/image/faders.png"
        class="the-filter-mobile-img"
        alt=""
      />
      <div
        @click="$emit('toggleModalFilterMobile')"
        class="the-filter-mobile-text"
      >
        Bộ lọc
      </div>
    </div>

    <div class="the-filter-mobile-item flex">
      <img
        src="../assets/image/ArrowsDownUp.png"
        class="the-filter-mobile-img"
        alt=""
      />
      <div class="the-filter-mobile-text">Nổi bật nhất</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.the-filter-mobile {
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
}

.the-filter-mobile.flex.container {
  margin-top: 20px;
  margin-bottom: 16px;
}

.the-filter-mobile-item {
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.the-filter-mobile-text {
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #00adad;
}

@media (min-width: 1024px) {
  .the-filter-mobile.flex {
    display: none;
  }
}
</style>
