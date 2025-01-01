<template>
  <div>
    <NuxtLayout>
      <!-- 404 -->
      <template v-if="error && error.statusCode === 404">
        <h1>{{ error.message }}</h1>
        <h2>音速で探しましたがページが見つかりません😱</h2>
        <p>
          申し訳ありませんが、お客さまがお探しのページが見つかりませんでした。
          <br />ページが移動したか、もしくは掲載期間が終了した可能性がございます。
          <br />お手数ですが、「<a @click="toTop">トップページに戻る</a
          >」を押して、ご覧になりたいページをお探しください。
        </p>
        <!-- 開発環境のみで表示 -->
        <pre v-if="isDev">{{ error }}</pre>
      </template>

      <!-- 404以外 -->
      <template v-else>
        <h1 v-if="error">{{ error.message }}</h1>
        <h2>ページが表示できません😱</h2>
        <p>
          ご不便をおかけし申し訳ありません。
          <br />正常にご覧いただけるよう、解決に取り組んでおります。
          <br />しばらく時間をおいて再度ご覧ください。
        </p>
        <small v-if="error">{{ error?.statusCode }} error</small>
        <!-- 開発環境のみで表示 -->
        <pre v-if="isDev">{{ error }}</pre>
      </template>

      <br />

      <!-- トップへ戻る -->
      <button @click="toTop">トップページに戻る</button>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
})

/**
 * 開発環境かどうかのチェック
 */
const isDev = import.meta.dev

/**
 * エラーを削除してトップへ遷移
 */
function toTop() {
  clearError({ redirect: '/' })
}
</script>
