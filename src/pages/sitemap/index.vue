<template>
  <div>
    <div>sitemap</div>
    <div>
      sitemap
      <SitemapList :list="siteMapList()" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { siteMapList } from './Sitemap'
import SitemapList from './SitemapList.vue'
</script>
<style lang="scss" scoped></style>
