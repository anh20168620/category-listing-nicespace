<template>
  <div class="base-search">
    <img src="../../assets/image/search.png" alt="search nicespace" />
    <input
      class="search-input"
      type="search"
      for="search"
      placeholder="Tên sản phẩm, hãng..."
    />
  </div>
</template>
<script>
export default {};
</script>
<style>
.base-search {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 11px 16px 12px;
  gap: 10px;
  width: 500px;
  background: #f6f9fc;
  border-radius: 32px;
  height: 44px;
}

.search-input {
  border: none;
  background-color: #f6f9fc;
  font-size: 14px;
  line-height: 21px;
}
</style>
