<template>
  <div class="modal-category flex">
    <div class="modal-category-list">
      <div
        class="modal-category-item"
        :class="selectedIndex === category.id ? 'active' : null"
        v-for="category in categoryList"
        :key="category.id"
        @click="
          handleSelectd(category.id), $emit('updateCategory', category.category)
        "
      >
        {{ category.text }}
      </div>
    </div>
    <div class="modal-category-phone">
      <img src="../../assets/image/phone.png" alt="contact nicespace" />
      <span class="font-semibold text-paragraph">1900.63.3579</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryList: [
        {
          id: 1,
          text: "Ghế công thái học",
          category: 21,
        },
        {
          id: 2,
          text: "Bàn nâng hạ",
          category: 22,
        },
        {
          id: 3,
          text: "Bàn phím",
          category: 7,
        },
        {
          id: 4,
          text: "Màn hình",
          category: 19,
        },
        {
          id: 5,
          text: "Trang trí bàn làm việc",
          category: 20,
        },
      ],
      selectedIndex: 3,
    };
  },

  methods: {
    handleSelectd(id) {
      this.selectedIndex = id;
    },
  },
};
</script>
<style>
.modal-category {
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;
  position: absolute;
  width: 244px;
  left: 258px;
  top: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 1;
}

.modal-category-list {
  width: 100%;
  border-bottom: 1px solid #f0f2f4;
}

.modal-category-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

.active {
  background: #eaf5ff;
  border-radius: 4px;
}

.modal-category-item:hover {
  cursor: pointer;
}

.modal-category-phone {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

@media (max-width: 740px) {
  .modal-category {
    top: 50px;
    left: 145px;
  }
}
</style>
