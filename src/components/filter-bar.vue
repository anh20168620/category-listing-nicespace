<template>
  <div :class="{ 'section-filter': true }" ref="sectionFilter">
    <div class="filter-list">
      <div
        class="filter-item"
        v-for="filterOption in filterOptions"
        :key="filterOption.id"
      >
        <div class="filter-item-text font-semibold">
          {{ filterOption.nameFilterOption }}
        </div>
        <div class="filter-item-icon">
          <img src="../assets/image/down-arrow.png" alt="" />
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

      <div
        v-for="filter in filterList"
        :key="filter.id"
        class="filter-item border-radius"
      >
        <div class="filter-item-text font-seminormal">
          {{ filter.nameFilter }}
        </div>
        <div class="filter-item-icon">
          <img src="../assets/image/down-arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterOptions: [
        { id: 1, nameFilterOption: "Sắp xếp: Nổi bật nhất" },
        { id: 2, nameFilterOption: "3 bộ lọc áp dụng" },
      ],

      filterList: [
        { id: 1, nameFilter: "Khoảng giá" },
        { id: 2, nameFilter: "SiliconZ, CyberChair" },
        { id: 3, nameFilter: "Chất liệu lưng ghế" },
        { id: 4, nameFilter: "Thương hiệu" },
      ],
    };
  },

  methods: {
    addClassSticky() {
      let el = this.$refs.sectionFilter;
      if (el.getBoundingClientRect().top === 0) {
        el.classList.add("sticky");
      } else {
        el.classList.remove("sticky");
      }
    },
  },

  mounted() {
    document.addEventListener("scroll", () => this.addClassSticky());
  },

  unmounted() {
    document.removeEventListener("scroll", () => this.addClassSticky());
  },
};
</script>

<style>
.section-filter {
  position: sticky;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 2;
}

.section-filter.sticky {
  background-color: #ffffff;
}

.filter-list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 24px 0 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
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
