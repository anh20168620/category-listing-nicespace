<template>
  <div class="section-brand container">
    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/thinkpad-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/legion-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/ideapad-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/thinkpad-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/legion-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/ideapad-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/thinkpad-logo.png"
        alt="thinkpad logo"
      />
    </div>

    <div class="brand-item">
      <img
        class="brand-item-img"
        src="../../assets/image/legion-logo.png"
        alt="thinkpad logo"
      />
    </div>
  </div>
</template>
<script>
export default {};
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
  .section-brand {
    overflow-x: auto;
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
