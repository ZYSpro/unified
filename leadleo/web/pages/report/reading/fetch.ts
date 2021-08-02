import { ISSRContext } from 'ssr-types'

interface IApiReportService {
  index: () => Promise<any>
  reportDetail: () => Promise<any>
  getIndexData: () => Promise<any>
}

export default async (
  { store, router }: { store: any; router: any },
  ctx?: ISSRContext<{
    apiReportService?: IApiReportService
  }>
): Promise<void> => {
  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83

  // const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : await ctx?.apiService?.index()
  // await store.dispatch('indexStore/initialData', { payload: data })
  const report = __isBrowser__
    ? await (await window.fetch('/api/report')).json()
    : await ctx?.apiReportService?.reportDetail()
  await store.dispatch('indexStore/initialReport', { payload: report.data })
}
