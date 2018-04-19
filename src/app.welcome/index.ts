import 'babel-polyfill'

import { App } from '@vert/core'
import RootComponent from './root-component.vue'

const app = new App({
  element: '#app-index',
  name: 'app-index',
  rootComponent: RootComponent
})

app.start()
