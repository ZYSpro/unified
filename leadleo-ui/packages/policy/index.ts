import { App } from 'vue'
import Policy from './src/index.vue'

Policy.install = (app: App): void => {
  app.component(Policy.name, Policy)
}

export default Policy
