import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { Readable } from 'stream'
import { render } from 'ssr-core-vue3'

import { SizeproService } from './index.service'

@Controller('/sizepro')
export class AppController {
  constructor(private readonly sizeproService: SizeproService) {}

  @Get('/details')
  async sizeproDetails(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        sizeproService: this.sizeproService,
        query: req.query
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
  async sizeproSearch(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        sizeproService: this.sizeproService
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
