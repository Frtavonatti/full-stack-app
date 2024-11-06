const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =  `mongodb+srv://frtavonatti:${password}@atlascluster.mwbdd5d.mongodb.net/noteApp?retryWrites=true&w=majority&appName=AtlasCluster` 

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

Note.find({}).then(result => {  
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })