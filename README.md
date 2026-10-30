# Notion 3D Themes

把个人网站做成可以逛的 3D 小世界。**一个项目，两套完整主题：Orange 工作室与 Island 云间小岛。**

基于 [NotionNext](https://github.com/notionnext-org/NotionNext)、Next.js 和 Three.js，文章在 Notion 中维护，网站通过 Vercel 发布。默认主题为 Orange，也可以随时切换 Island。

[Orange 在线体验](https://qcode.im/?theme=orange) · [Island 在线体验](https://qcode.im/?theme=island) · [使用模板](https://github.com/cmerber/notion-3d-themes/generate) · [English](./README_EN.md)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcmerber%2Fnotion-3d-themes)

## 看看效果

### Orange · 橙子工作室

![Orange 工作室：人物、微缩房间与雪天场景](./docs/images/orange.webp)

微缩房间、可行走的小主人、室外街景，以及晴天、雨天、雪天和沙漠场景。

### Island · 云间小岛

![Island 云间小岛：书屋、玻璃工坊、观测站、居所与动物](./docs/images/island.webp)

四座建筑串起文章、工具、档案和关于页；猫咪、小羊、飞鸟、果园、桥梁与瀑布一起组成可以探索的小岛。

> 效果图来自作者演示站。Fork 后可以替换为自己的站点名称、作者、头像与 Notion 内容；不需要使用演示站的账户或接口。

## 有什么

- 可拖动旋转、缩放、切换镜头、昼夜变化和人物行走。
- 启动加载画面、手机适配、低画质预算和 WebGL 兼容回退。
- 配套文章阅读、归档、分类、标签、搜索、工具和关于页。
- 两套主题都在页头的主题面板中标为「推荐」，地址分别为 `/?theme=orange` 和 `/?theme=island`。
- **不填 Notion 或任何密钥也能运行**：自动使用本地示例文章；填写 `NOTION_PAGE_ID` 后接入自己的内容。

## 快速开始

需要 Node.js 22 与 Yarn（项目锁定为 1.22.22）。先 Fork 本仓库，或点击上方模板按钮创建副本，再运行：

```bash
git clone https://github.com/你的用户名/notion-3d-themes.git
cd notion-3d-themes
corepack enable
corepack yarn install --frozen-lockfile
corepack yarn dev
```

打开 [localhost:3000](http://localhost:3000)。生产检查使用 `corepack yarn build`，构建后用 `corepack yarn start` 启动。

## 换成自己的内容

复制 `.env.example` 为 `.env.local`，或在 Vercel 项目中填写环境变量。修改后重启开发服务或重新部署。

| 配置 | 用途 |
| --- | --- |
| `NOTION_PAGE_ID` | 自己的公开 NotionNext 数据库页面 ID；留空使用本地示例 |
| `NEXT_PUBLIC_SITE_TITLE` | 网站名称 |
| `NEXT_PUBLIC_AUTHOR` / `NEXT_PUBLIC_BIO` | 作者与简介 |
| `NEXT_PUBLIC_LINK` | 发布后的完整域名，用于 SEO、RSS 和站点链接 |
| `NEXT_PUBLIC_THEME` | `orange` 或 `island` |
| `NEXT_PUBLIC_AVATAR` | 示例头像的替换地址 |

Notion 内容表请复制 [NotionNext 官方模板](https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5)，发布为可访问的网页后填写页面 ID。若 Config 表设置了 `THEME`，它会优先于环境变量，请同时改成 `orange` 或 `island`。

站点介绍和页脚集中在 [`site.config.js`](./site.config.js)；主题文字、颜色与场景设置分别在 [`themes/orange/config.js`](./themes/orange/config.js)、[`themes/island/config.js`](./themes/island/config.js)。[完整配置说明](./docs/configuration.md)

## 部署与扩展

在 Vercel 中导入自己 Fork 的仓库，选择 Next.js、Node.js 22。首次不配置 Notion 也可以部署演示版，再填写自己的内容和域名。

本地工具不需要登录或服务器密钥。Notion 评论、成长档案、缓存刷新和其他可选服务均保留配置入口，默认不绑定作者的服务。[接口与扩展说明](./docs/integrations.md)

人物为程序化模型，换网页头像不会自动重建人物；可编辑各主题 `scene/createCharacter.js` 调整造型和材质。[开发与项目来源](./docs/development.md)

## 检查与许可

```bash
corepack yarn check:starter
corepack yarn test --runInBand
corepack yarn test:models
corepack yarn type-check
```

MIT 许可。保留 NotionNext 原始许可和作者信息。详见 [LICENSE](./LICENSE) 与 [NOTICE](./NOTICE)。
