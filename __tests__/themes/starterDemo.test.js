import { createDemoSiteData } from '@/lib/starter/demo'
import { render, screen } from '@testing-library/react'
import StarterAbout from '@/components/StarterAbout'
jest.mock('styled-jsx/style',()=>()=>null)

jest.mock('@/components/LazyImage', () => ({
  __esModule: true,
  default: () => null
}))
jest.mock('@/components/SmartLink', () => ({
  __esModule: true,
  default: ({ href, children }) => <a href={href}>{children}</a>
}))
jest.mock('@/lib/config', () => ({
  siteConfig: (key, fallback) =>
    ({
      SITE_AUTHOR: '示例作者',
      SITE_BIO: '示例简介',
      SITE_ABOUT: '可替换的作者介绍'
    })[key] || fallback
}))
test('the account-free demo has complete article blocks, an about destination and shared identity', () => {
  const config = {
    THEME: 'orange',
    SITE_TITLE: '示例站点',
    SITE_AUTHOR: '示例作者',
    SITE_BIO: '示例简介',
    SITE_AVATAR: '/avatar.webp',
    LINK: 'https://example.com'
  }
  const demo = createDemoSiteData(
    { siteInfo: {}, allMembers: [], customMenu: [] },
    config
  )
  expect(demo.siteInfo.title).toBe('示例站点')
  expect(demo.NOTION_CONFIG.THEME).toBe('orange')
  expect(demo.NOTION_CONFIG.WIDGET_PET).toBe(false)
  const article = demo.allPages.find(p => p.type === 'Post')
  expect(article.href).toBe('/article/welcome')
  expect(article.blockMap.block[article.id].value.content).toHaveLength(2)
  for (const id of article.blockMap.block[article.id].value.content)
    expect(article.blockMap.block[id].value.parent_id).toBe(article.id)
  expect(demo.allPages.find(p => p.slug === 'about')).toBeTruthy()
  const next = createDemoSiteData({ siteInfo: {} }, config)
  demo.allPages[0].title = 'changed'
  expect(next.allPages[0].title).not.toBe('changed')
})
test('both themes can reuse a configurable about page without the demo owner biography', () => {
  render(<StarterAbout />)
  expect(screen.getByText('你好，我是示例作者。')).toBeInTheDocument()
  expect(screen.getByText('可替换的作者介绍')).toBeInTheDocument()
  expect(screen.queryByText(/我是成/)).not.toBeInTheDocument()
  expect(screen.getByRole('link', { name: '实用工具 ↗' })).toHaveAttribute(
    'href',
    '/tools'
  )
})
