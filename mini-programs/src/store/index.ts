import { createStore } from 'vuex'
import { indexStore } from './modules/index'
import { detailStore } from './modules/detail'
import { searchStore } from './modules/search'

const store = createStore({
  modules: {
    indexStore,
    detailStore,
    searchStore
  }
})

export default store
