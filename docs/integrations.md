# 接口与扩展入口

所有可选服务默认不绑定作者账户。密钥由部署者自己在服务器环境变量配置。

| 功能 | 已有入口 | 配置 |
| --- | --- | --- |
| 公开 Notion 文章 | `lib/db/SiteDataApi.js` | `NOTION_PAGE_ID`，留空使用本地示例 |
| Notion 评论 | `GET/POST /api/notion-comments` | `NOTION_TOKEN`、`NOTION_COMMENT_DATABASE_ID` |
| 成长档案 | `lib/profile/notionProfile.js`、`/profile` | `NOTION_PROFILE_TOKEN`、`NOTION_PROFILE_DATABASE_ID` |
| 页面缓存刷新 | `POST /api/revalidate` | `REVALIDATION_TOKEN` |
| 数据缓存管理 | `/api/cache` | `CACHE_REVALIDATION_TOKEN`，具体动作见处理器 |
| 本地工具 | `/tools`、`components/tools/` | 大部分直接在浏览器运行 |
| 可选 AI / 聊天 / 统计 | `conf/ai.config.js`、`conf/analytics.config.js` | 自己服务的地址和参数 |

这些是实际保留的接入点，不包含作者的私有后端或令牌。数据库字段、请求参数和授权方式以对应的处理器代码为准。

## Notion 服务

创建自己的 Notion integration 与数据库，再将数据库授权给该 integration。评论属性名及校验见 `pages/api/notion-comments.js` 和 `lib/plugins/notionComments.js`；成长记录字段见 `lib/profile/notionProfile.js`。令牌为空时，成长档案显示明确标记的示例数据。评论不配置时不会写入任何数据库。

填写评论数据库和服务器 Token 后，将 `NEXT_PUBLIC_COMMENT_NOTION_ENABLE` 改为 `true` 来显示评论组件。`NOTION_COMMENT_REQUIRE_APPROVAL=true` 可要求评论审核，公共站点还需根据自己的部署方式配置防滥用和限流。

## 场景与内容

Island 的地点表是 `themes/island/places.js`；Orange 的入口在 `themes/orange/components/Studio.js`。默认连接 `/archive`、`/tools`、`/profile`、`/about`。修改地点与配套导航即可接入作品集或自己的详情页；`SmartLink` 会保留当前主题参数。

新服务可在 `pages/api/` 中实现服务器处理器，通过环境变量读取凭据，再让前端调用同源接口。不要把私钥写进主题源码或任何 `NEXT_PUBLIC_*` 设置。缓存刷新请求的令牌格式与参数见 `pages/api/revalidate.js`，未配置令牌时刷新接口不会默认开放。
