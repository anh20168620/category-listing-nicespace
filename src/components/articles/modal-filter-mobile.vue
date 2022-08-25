<template>
  <div class="modal-mobile" @click="$emit('closeModalFilterMobile')">
    <div class="modal-mobile-overlay"></div>
    <div class="modal-mobile-content" @click.stop>
      <div class="modal-mobile-header">
        <div class="modal-close" @click="$emit('closeModalFilterMobile')">
          <img
            src="../../assets/image/close.png"
            class="modal-close-image"
            alt=""
          />
        </div>
        <div class="modal-mobile-title">Bộ lọc</div>
        <div class="modal-mobile-sub-title">Mặc định</div>
      </div>
      <div class="modal-mobile-list">
        <div class="modal-mobile-item">
          <div class="modal-mobile-text">
            Chỉ hiển thị sp có Ưu đãi / Khuyến mại
          </div>
          <div class="modal-mobile-checkbox">
            <input type="checkbox" name="" id="" />
          </div>
        </div>

        <div class="modal-mobile-item">
          <div class="modal-mobile-text">Khoảng giá</div>
          <div class="modal-mobile-sub-text">Tất cả</div>
        </div>

        <div class="modal-mobile-item">
          <div class="modal-mobile-text">Hãng</div>
          <div class="modal-mobile-sub-text">Tất cả</div>
        </div>

        <div class="modal-mobile-item">
          <div class="modal-mobile-text">Chất liệu lưng ghế</div>
          <div class="modal-mobile-sub-text">Tất cả</div>
        </div>

        <div class="modal-mobile-item">
          <div class="modal-mobile-text">Chất liệu mâm ghế</div>
          <div class="modal-mobile-sub-text">Tất cả</div>
        </div>
      </div>
      <div class="modal-mobile-button">
        <button class="modal-mobile-btn">Xem 200 kết quả</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.modal-mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}

.modal-mobile-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-mobile-content {
  left: calc(100% - 343px);
  width: 343px;
  height: 100%;
  background-color: #ffffff;
  position: relative;
  animation: modalFadeIn ease-out 0.3s;
}

.modal-mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f2f4;
  padding: 12px 16px;
}

.modal-close {
  padding: 1px 5px;
}

.modal-mobile-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.modal-mobile-sub-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #00adad;
}

.modal-mobile-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-left: 16px;
  margin-right: 16px;
}

.modal-mobile-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px solid #f0f2f4;
}

.modal-mobile-text {
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 21px;
}

.modal-mobile-sub-text {
  font-size: 12px;
  line-height: 18px;
  color: #00adad;
}

.modal-mobile-button {
  position: absolute;
  bottom: 0;
  padding: 10px 16px;
  width: 100%;
}

.modal-mobile-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c3c3;
  border-radius: 16px 0px;
  padding: 10px 12px;
  width: 100%;
  border: none;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
}

@keyframes modalFadeIn {
  from {
    transform: translateX(343px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes modalFadeOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(343px);
  }
}
</style>
