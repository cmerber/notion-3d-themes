// Local, original example content. No Notion account, tokens or network requests.
export function createDemoSiteData(base, config) {
  const id = '00000000-0000-4000-8000-000000000001'
  const heading = '00000000-0000-4000-8000-000000000002'
  const text = '00000000-0000-4000-8000-000000000003'
  const aboutId = '00000000-0000-4000-8000-000000000004'
  const title = '欢迎来到你的小岛'
  const blockMap = {
    block: {
      [id]: {
        value: {
          id,
          type: 'page',
          alive: true,
          properties: { title: [[title]] },
          content: [heading, text],
          parent_table: 'space'
        }
      },
      [heading]: {
        value: {
          id: heading,
          type: 'header',
          alive: true,
          properties: { title: [['从这里开始']] },
          parent_id: id,
          parent_table: 'block'
        }
      },
      [text]: {
        value: {
          id: text,
          type: 'text',
          alive: true,
          properties: {
            title: [
              [
                '这是随项目提供的本地示例文章。你可以先拖动小岛、探索建筑、试用工具，再在 Vercel 或 .env.local 中设置自己的 NOTION_PAGE_ID。填写后，页面会自动改为读取你的 Notion 内容；示例文章不会写入你的数据库。'
              ]
            ]
          },
          parent_id: id,
          parent_table: 'block'
        }
      }
    },
    collection: {},
    collection_view: {},
    collection_query: {},
    notion_user: {},
    signed_urls: {}
  }
  const post = {
    id,
    type: 'Post',
    status: 'Published',
    title,
    slug: 'article/welcome',
    href: '/article/welcome',
    summary: '一座小岛，两套主题。从一篇本地示例笔记开始你的个人网站。',
    category: ['开始使用'],
    tags: ['示例'],
    tagItems: [{ name: '示例', color: 'green' }],
    publishDay: '2026-10-30',
    publishDate: 1793318400000,
    lastEditedDate: '2026-10-30',
    date: { start_date: '2026-10-30' },
    pageCover: null,
    pageCoverThumbnail: null,
    blockMap
  }
  const about = {
    ...post,
    id: aboutId,
    type: 'Page',
    title: '关于小岛',
    slug: 'about',
    href: '/about',
    blockMap: { ...blockMap, block: {} }
  }
  return {
    ...base,
    siteInfo: {
      ...base.siteInfo,
      title: config.SITE_TITLE,
      description: config.SITE_BIO,
      icon: config.SITE_AVATAR,
      pageCover: null
    },
    NOTION_CONFIG: {
      ...Object.fromEntries(
        Object.entries(config).filter(([key]) => key.startsWith('SITE_'))
      ),
      THEME: config.THEME,
      AUTHOR: config.SITE_AUTHOR,
      LINK: config.LINK,
      THEME_SWITCH: true,
      WIDGET_PET: false,
      ANALYTICS_BUSUANZI_ENABLE: false
    },
    allPages: [post, about],
    allNavPages: [about],
    allLinkPages: [post, about],
    latestPosts: [post],
    postCount: 1,
    categoryOptions: [{ name: '开始使用', count: 1 }],
    tagOptions: [{ name: '示例', count: 1, color: 'green' }],
    pageIds: [id, aboutId]
  }
}
