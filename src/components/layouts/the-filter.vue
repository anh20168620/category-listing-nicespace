<template>
  <div :class="{ 'section-filter': true }" ref="sectionFilter">
    <div class="filter-list">
      <div class="filter-item">
        <div class="filter-item-text font-semibold">Sắp xếp: Nổi bật nhất</div>
        <div class="filter-item-icon">
          <img src="../../assets/image/down-arrow.png" alt="" />
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-item-text font-semibold">3 bộ lọc áp dụng</div>
        <div class="filter-item-icon">
          <img src="../../assets/image/down-arrow.png" alt="" />
        </div>
      </div>

      <div class="filter-item-promotion border-radius">
        <div class="filter-item-input">
          <input type="checkbox" name="" id="" />
        </div>
        <div class="filter-item-text font-seminormal">
          Chỉ hiển thị Ưu đãi / Khuyến mại
        </div>
      </div>

      <div class="filter-item border-radius">
        <div class="filter-item-text font-seminormal">Khoảng giá</div>
        <div class="filter-item-icon">
          <img src="../../assets/image/down-arrow.png" alt="" />
        </div>
      </div>

      <div class="filter-item border-radius">
        <div class="filter-item-text font-seminormal">SiliconZ, CyberChair</div>
        <div class="filter-item-icon">
          <img src="../../assets/image/down-arrow.png" alt="" />
        </div>
      </div>

      <div class="filter-item border-radius">
        <div class="filter-item-text font-seminormal">Chất liệu lưng ghế</div>
        <div class="filter-item-icon">
          <img src="../../assets/image/down-arrow.png" alt="" />
        </div>
      </div>

      <div class="filter-item border-radius">
        <div class="filter-item-text font-seminormal">Thương hiệu</div>
        <div class="filter-item-icon">
          <img src="../../assets/image/down-arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.addEventListener("scroll", () => {
      let el = this.$refs.sectionFilter;
      if (el.getBoundingClientRect().top === 0) {
        el.classList.add("sticky");
      } else {
        el.classList.remove("sticky");
      }
    });
  },
};
</script>

<style>
.section-filter {
  position: sticky;
  left: 0px;
  right: 0px;
  top: 0px;
  padding: 24px 0 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.section-filter.sticky {
  background-color: #ffffff;
}

.filter-list {
  margin: 0 160px;
  display: flex;
}

.filter-item {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  width: fit-content;
  height: 42px;
  border-radius: 8px;
  font-size: 12px;
}

.filter-item:hover {
  cursor: pointer;
}

.border-radius {
  border-radius: 100px;
}

.filter-item-promotion {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 8px;
  height: 42px;
  background: #ffffff;
  font-size: 12px;
}

@media (max-width: 740px) {
  .section-filter {
    display: none;
  }
}
</style>
