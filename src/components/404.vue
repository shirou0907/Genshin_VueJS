<template>
  <div class="error-page">
    <div class="error-header">
      <img src="../img/404.png" alt="">
      <h1>Không tìm thấy giao diện này</h1>
      <div class="error-title">
        <p>Chắc là đi chơi với Venti rồi</p>
        <p>Không chừng bay lên Đảo Thiên Không...</p>
        <p>Hoặc là đi đến một nơi rất xa...</p>
      </div>
    </div>
    <div class="error-footer">
      <img src="../img/404_2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .error-page {
    background-color: #393b40;
    padding-top: 110px;
    border: 38px double #000;
    min-height: 100vh;
    border-image: url('../img/item/border.png') 38 round;
  } 

  .error-header {
    color: #fff;
    text-align: center;
  }

  .error-header img {
    width: 480px;
    margin-bottom: 40px;
  }

  .error-title {
    color: #8c93a3;
    margin-top: 20px;
  }

  .error-footer img {
    width: 360px;
  }

  img {
    display: block;
    margin: auto;
  }
</style>