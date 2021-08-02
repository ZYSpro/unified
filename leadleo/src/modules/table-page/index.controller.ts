import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { Readable } from 'stream'
import { render } from 'ssr-core-vue3'

import { TableService } from './index.service'

@Controller('/table')
export class AppController {
  constructor(private readonly tableService: TableService) {}

  @Get('/details')
  async tableDetails(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        tableService: this.tableService,
        query: req.query
      }
      const stream = await render<Readable>(ctx, { stream: true })
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
  async tableSearch(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        tableService: this.tableService
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
