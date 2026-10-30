# 配置自己的站点

`/` 使用当前默认主题，初始为 Orange。`/?theme=orange` 与 `/?theme=island` 用于分别体验两套主题，不会改写 Notion 默认配置。

## 内容来源

`NOTION_PAGE_ID` 留空时使用 `lib/starter/demo.js` 中的本地文章与关于页，不请求作者的 Notion。填写自己的页面 ID 后，自动走原有 Notion 内容流程。请复制 NotionNext 的数据库模板，发布为可匿名访问的网页。普通空白页面不能替代内容数据库。

Notion Config 的 `THEME` 优先于 `NEXT_PUBLIC_THEME`，请设为 `orange` 或 `island`。主题选择器只展示这两套主题；底层兼容模块仍保留。

## 作者信息

共享设置在 `site.config.js`，也可用环境变量，或在 Notion Config 使用对应的 `SITE_*` 键。

| 共享配置 | 环境变量 |
| --- | --- |
| `SITE_TITLE` | `NEXT_PUBLIC_SITE_TITLE` |
| `SITE_AUTHOR` | `NEXT_PUBLIC_AUTHOR` |
| `SITE_BIO` | `NEXT_PUBLIC_BIO` |
| `SITE_ABOUT` | `NEXT_PUBLIC_ABOUT` |
| `SITE_AVATAR` | `NEXT_PUBLIC_AVATAR` |
| `SITE_FOOTER` | `NEXT_PUBLIC_FOOTER` |

头像可放在 `public/my-avatar.webp`，配置值写 `/my-avatar.webp`。它用于网页头像，不会自动改变 3D 人物模型。

正式部署时，`NEXT_PUBLIC_LINK` 填自己的完整域名，供 canonical、RSS 和站点地图使用。`NEXT_PUBLIC_*` 会进入浏览器，只放允许公开的设置，更改后需重新构建。

## 场景与发布

- Orange：`themes/orange/config.js`，支持晴天、雨天、雪天和沙漠。
- Island：`themes/island/config.js`，标题、配色、场景开关、夜间装饰。
- 造型：各主题 `scene/` 中的人物、建筑、地形、动物模块。
- 文章沿用 NotionNext 的 `type`、`status`、`slug`、日期、分类与标签字段。`Published` 的 `Post` 是公开文章，`Page` 是单页。

在 Vercel 导入 Fork，选择 Next.js、Node.js 22。安装用 `corepack yarn install --frozen-lockfile`，构建用 `corepack yarn build`。首次可直接部署本地演示版，再填写自己的内容和域名并重新部署。

若设备无法使用 WebGL2，或启动超时，页面会展示可点击的轻量场景，内容入口仍可使用。可点击重试；无需关闭浏览器安全保护。
