import { ISSRContext } from 'ssr-types'

interface ArticleService {
  details: (id: string) => Promise<any>
}

interface articleQuery {
  id: string
}

export default async (
  { store }: { store: any },
  ctx?: ISSRContext<{
    articleService?: ArticleService
    query: articleQuery
  }>
): Promise<void> => {
  // 请求文章详情
  // 测试链接 http://localhost:3000/article/details?id=60d4aae4b5090b1ed0dacb53
  const article = await ctx?.articleService?.details(ctx.query.id)
  await store.dispatch('detailStore/getArticleDetails', article)
}
