# 开发与来源

```text
themes/orange/              Orange 页面、天气、人物、场景
themes/island/              Island 页面、建筑、动物、镜头
components/ThemeEntry.js    共用的主题选择入口
components/StarterAbout.js  可配置的关于页
site.config.js             共用站点身份
lib/starter/demo.js         不依赖账户的本地示例
lib/db/                    Notion 内容接口
pages/api/                 可选服务器接口
docs/images/               README 实际效果图
```

基于 NotionNext 与作者演示站已发布的两套主题整理，保留底层引擎和兼容模块，默认注册表只开放 Orange 与 Island。源码基础与许可证见 `NOTICE` 和 `LICENSE`。

Node.js 22、Yarn 1.22.22。提交 `yarn.lock`，不要提交 `.env.local`、`.vercel`、缓存或 `node_modules`。CI 不需要作者的密钥，也不会替你部署到作者站点。

检查命令：`corepack yarn check:starter`、`corepack yarn test --runInBand`、`corepack yarn test:models`、`corepack yarn type-check`、`corepack yarn build`。

人物由程序化几何体构建，不是任意头像自动生成的 GLB；修改 `scene/createCharacter.js` 可调整造型。接入外部模型时请确认许可，保留资源清理、性能回退与减少动态效果支持。

Fork 后可以修改站点页脚，仓库中的原有开源许可和第三方许可应继续保留。
