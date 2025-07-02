import es from './es.json'
import en from './en.json'

export const getMessages = lang => {
  switch (lang) {
    case 'en':
      return en
    case 'es':
    default:
      return es
  }
}
