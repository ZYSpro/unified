import { Injectable } from '@nestjs/common'
import { fetch } from '../../utils/fetch'

type TableDetails = {
  id: string
}

@Injectable()
export class TableService {
  async details(id: string): Promise<TableDetails> {
    const details = await fetch(global.API_CONTENT, '/table/details', { id })
    return details
  }
}
