import { Injectable } from '@nestjs/common'
import { fetch } from '../../utils/fetch'

type SizeproDetails = {
  id: string
}

@Injectable()
export class SizeproService {
  async details(id: string): Promise<SizeproDetails> {
    const details = await fetch(global.API_CONTENT, '/sizepro/details', { id })
    return details
  }
}
