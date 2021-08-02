import { Controller, Req, Res, Get } from '@nestjs/common'
import { Request, Response } from 'express'
import { Readable } from 'stream'
import { render } from 'ssr-core-vue3'

import { ApiReportService } from './report.service'

@Controller('/report')
export class ReportController {
  constructor(private readonly apiReportService: ApiReportService) {}

  @Get('/reading')
  async handlerDetail(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const ctx = {
        request: req,
        response: res,
        apiReportService: this.apiReportService
      }
      const stream = await render<Readable>(ctx, {
        stream: true
      })
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.end()
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}
