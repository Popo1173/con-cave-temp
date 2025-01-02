<template>
  <div>
    <div v-for="item in list" :key="item.label">
      <component :is="setTag(item.to)" :to="item.to" :target="item.target">
        <span>{{ item.label }}</span>
      </component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { SiteMapItem } from './Sitemap'

defineProps<{
  list: SiteMapItem[]
}>()

/**
 * リンクタグ（NuxtLink|div）の出しわけ
 * @param to string
 *
 * @description
 * nuxt3からNuxtLinkを文字列で渡せないので`defineNuxtLink({})`を利用する。
 * issue: https://github.com/nuxt/framework/issues/4098
 */
const setTag = (to?: string) => {
  return to ? defineNuxtLink({}) : 'div'
}

/**
 * Iconの出しわけ
 */
//  const setIcon = (item: SiteMapItem) => {
//   if (item.target === '_blank') return 'tdesign:jump'
//   if (item.to) return 'bxs:right-arrow-alt'
//   return ''
// }
</script>
<style lang="scss" scoped></style>
