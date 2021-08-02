import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { Readable } from 'stream'
import { render } from 'ssr-core-vue3'

import { ArticleService } from './index.service'

@Controller('/article')
export class AppController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/details')
  async articleDetails(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        articleService: this.articleService,
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
  async articleSearch(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const ctx = {
        request: req,
        response: res,
        articleService: this.articleService
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
