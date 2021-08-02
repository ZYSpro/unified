import { App } from 'vue'
import News from './src/index.vue'

News.install = (app: App): void => {
  app.component(News.name, News)
}

export default News
