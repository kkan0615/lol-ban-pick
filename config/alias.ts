import { fileURLToPath, URL } from 'url'
import { AliasOptions } from 'vite'

const alias: AliasOptions = [{
  find: '@',
  replacement: fileURLToPath(new URL('../src', import.meta.url)),
}]

export default alias
