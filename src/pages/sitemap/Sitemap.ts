/**
 * サイトマップ用のリストを返す
 */
export interface SiteMapDeepItem {
  label: string
  to?: string
  target?: '_blank' | '_self'
  icon?: 'pdf'
  deep?: SiteMapDeepItem[]
}

export interface SiteMapItem {
  label: string
  to?: string
  target?: '_blank' | '_self'
  deep?: SiteMapDeepItem[]
}

export const siteMapList = () => {
  const sitemap: SiteMapItem[] = [
    // トップページ
    {
      label: 'トップページ',
      to: '/',
    },
  ]

  return sitemap
}
