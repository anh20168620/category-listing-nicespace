<template>
  <div class="the-slogan">
    <div class="container">
      <div class="slogan-title">không gian tốt hơn, cho cuộc sống đẹp hơn</div>
      <div class="slogan-sub-title">cùng nicespace</div>
      <img src="../../assets/image/Group.png" alt="" class="slogan-img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.the-slogan {
  background-color: #b0f1ad;
  height: 140px;
  padding: 32px 0;
}

.slogan-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #377f46;
  margin-bottom: 7px;
}

.slogan-sub-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #67cb66;
}

.slogan-img {
  position: absolute;
  top: -26px;
  right: 0;
}

@media (max-width: 740px) {
  .slogan-img {
    width: 172px;
    height: 82px;
    top: 24px;
    right: 16px;
  }
}
</style>
