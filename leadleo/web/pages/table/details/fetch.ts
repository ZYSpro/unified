import { ISSRContext } from 'ssr-types'

interface TableService {
  details: (id: string) => Promise<any>
}

interface tableQuery {
  id: string
}

export default async (
  { store }: { store: any },
  ctx?: ISSRContext<{
    tableService?: TableService
    query: tableQuery
  }>
): Promise<void> => {
  // 请求文章详情
  // 测试链接 http://localhost:3000/article/details?id=60d4aae4b5090b1ed0dacb53
  const table = await ctx?.tableService?.details(ctx.query.id)
  await store.dispatch('detailStore/getTableDetails', table)
}
