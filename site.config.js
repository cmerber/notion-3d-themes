/** Shared identity for Orange and Island. Notion Config can override these keys. */
module.exports = {
  SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE || '我的小岛',
  SITE_AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '小岛主人',
  SITE_BIO: process.env.NEXT_PUBLIC_BIO || '记录灵感，分享生活。',
  SITE_ABOUT:
    process.env.NEXT_PUBLIC_ABOUT ||
    '我在这里记录学习、创作和日常，把想法慢慢变成可以分享的作品。',
  SITE_AVATAR:
    process.env.NEXT_PUBLIC_AVATAR || '/orange/avatar-reference.webp',
  SITE_FOOTER: process.env.NEXT_PUBLIC_FOOTER || '我的小岛 · 用心搭建'
}
