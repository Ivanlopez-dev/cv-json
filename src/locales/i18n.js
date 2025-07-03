import es from './es.json'
import en from './en.json'

const messages = { es, en }

export const getLangFromPath = path => (path.startsWith('/en') ? 'en' : 'es')

export const t = (key, path) => {
  const lang = getLangFromPath(path)
  const parts = key.split('.')
  let value = messages[lang]

  for (const part of parts) {
    if (value && typeof value === 'object') {
      value = value[part]
    } else {
      return key
    }
  }

  return value || key
}
