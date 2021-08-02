import { Injectable } from '@nestjs/common'
import { fetch } from '../../utils/fetch'

type ArticleDetails = {
  id: string
}

@Injectable()
export class ArticleService {
  async details(id: string): Promise<ArticleDetails> {
    const details = await fetch(global.API_CONTENT, '/article/details', { id })
    return details
  }
}
