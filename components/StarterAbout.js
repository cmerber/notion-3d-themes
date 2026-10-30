import SmartLink from './SmartLink'
import LazyImage from './LazyImage'
import { siteConfig } from '@/lib/config'

export default function StarterAbout() {
  const author = siteConfig('SITE_AUTHOR', '小岛主人')
  return (
    <section className='starter-about'>
      <p className='starter-kicker'>A LITTLE CORNER OF THE INTERNET</p>
      <h1>关于我，也关于这座小岛</h1>
      <div className='starter-about-grid'>
        <div className='starter-portrait'>
          <LazyImage
            src={siteConfig('SITE_AVATAR', '/orange/avatar-reference.webp')}
            alt={author}
          />
          <small>{author}</small>
        </div>
        <div>
          <h2>你好，我是{author}。</h2>
          <p>{siteConfig('SITE_BIO', '记录灵感，分享生活。')}</p>
          <p>
            {siteConfig(
              'SITE_ABOUT',
              '我在这里记录学习、创作和日常，把想法慢慢变成可以分享的作品。'
            )}
          </p>
          <h2>给好奇心，留一座小岛。</h2>
          <p>
            书屋收藏文字，工坊放着工具，档案记录成长。内容通过 Notion
            管理，你可以随时发布新的文章，让这座小岛慢慢长大。
          </p>
          <p>图片压缩、格式转换、子网计算和课堂小工具，也可以从工坊找到。</p>
          <nav aria-label='继续探索'>
            <SmartLink href='/archive'>文字与灵感 ↗</SmartLink>
            <SmartLink href='/tools'>实用工具 ↗</SmartLink>
            <SmartLink href='/profile'>冒险档案 ↗</SmartLink>
            <SmartLink href='/'>回到小岛 ↗</SmartLink>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .starter-about {
          width: min(1100px, 88%);
          margin: 0 auto;
          padding: 90px 0 110px;
          color: inherit;
        }
        .starter-kicker {
          font-size: 10px;
          letter-spacing: 0.2em;
          opacity: 0.6;
        }
        .starter-about h1 {
          font:
            40px/1.6 Georgia,
            'Songti SC',
            SimSun,
            serif;
          margin: 20px 0 65px;
        }
        .starter-about-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 75px;
        }
        .starter-portrait {
          border-radius: 48% 48% 18px 18px;
          overflow: hidden;
          background: #d8ddc9;
          align-self: start;
        }
        .starter-portrait :global(img) {
          display: block;
          width: 100%;
          height: auto;
        }
        .starter-portrait small {
          display: block;
          text-align: center;
          font-size: 12px;
          color: #3f5749;
          padding: 20px;
        }
        .starter-about h2 {
          font:
            28px/1.7 Georgia,
            'Songti SC',
            SimSun,
            serif;
          margin: 0 0 20px;
        }
        .starter-about p:not(.starter-kicker) {
          font-size: 15px;
          line-height: 2.2;
          margin: 0 0 25px;
        }
        .starter-about nav {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 35px;
        }
        .starter-about nav :global(a) {
          border-bottom: 1px solid #8b997755;
          padding-bottom: 8px;
          font-size: 13px;
        }
        @media (max-width: 700px) {
          .starter-about {
            padding: 55px 0 70px;
          }
          .starter-about h1 {
            font-size: 30px;
            margin-bottom: 35px;
          }
          .starter-about-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .starter-portrait {
            width: min(300px, 100%);
            margin: auto;
          }
          .starter-about h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  )
}
