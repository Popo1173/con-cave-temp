<template>
  <div>
    <p class="test">ヘッダー</p>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.test {
  font-size: 20px;
  color: var(color-black);

  // @include desktop {
  //   @include wrapper;
  //   font-size: 90px;
  // }

  @include mq-pc {
    font-size: 220px;
  }
}
</style>
