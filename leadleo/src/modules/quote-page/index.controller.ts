import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { Readable } from 'stream'
import { render } from 'ssr-core-vue3'

import { ApiService } from './index.service'
import { ApiReportService } from '../report-page/report.service'

@Controller('/quote')
export class AppController {
  constructor(private readonly apiService: ApiService, private readonly apiReportService: ApiReportService) {}

  @Get('/details')
  async quoteDetails(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        apiService: this.apiService,
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

  @Get('/search')
  async quoteSearch(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        apiService: this.apiService,
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
