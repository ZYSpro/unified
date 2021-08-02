import { ISSRContext } from 'ssr-types'

interface SizeproService {
  details: (id: string) => Promise<any>
}

interface sizeproQuery {
  id: string
}

export default async (
  { store }: { store: any },
  ctx?: ISSRContext<{
    sizeproService?: SizeproService
    query: sizeproQuery
  }>
): Promise<void> => {
  // 请求数说详情
  // 测试链接 http://localhost:4000/sizepro/details?id=60ed172f9b8e8002cd9d5c25
  const sizepro = await ctx?.sizeproService?.details(ctx.query.id)
  await store.dispatch('detailStore/getSizeproDetails', sizepro)
}
