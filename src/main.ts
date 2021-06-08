import App from './App.svelte'
import { registerSW } from 'virtual:pwa-register'

registerSW()

const app = new App({
  target: document.getElementById('app')
})

export default app
