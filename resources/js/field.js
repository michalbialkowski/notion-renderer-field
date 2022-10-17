import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-notion-renderer-field', IndexField)
  app.component('detail-notion-renderer-field', DetailField)
  app.component('form-notion-renderer-field', FormField)
})
