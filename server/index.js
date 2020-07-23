const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
})
const Note = mongoose.model('Note', new mongoose.Schema({
    title: { type: String },
    body: { type: String },
}))

app.get('/', async(req, res) => {
        res.send('index')
    })
    //新建内容
app.post('/api/notes', async(req, res) => {
        const note = await Note.create(req.body)
        res.send(note)
    })
    //列表
app.get('/api/notes', async(req, res) => {
        const notes = await Note.find()
        res.send(notes)
    })
    //删除
app.delete('/api/notes/:id', async(req, res) => {
        await Note.findByIdAndDelete(req.params.id)
        res.send({
            status: true
        })
    })
    //内容详情
app.get('/api/notes/:id', async(req, res) => {
        const note = await Note.findById(req.params.id)
        res.send(note)
    })
    //修改
app.put('/api/notes/:id', async(req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body)
    res.send(note)
})

app.listen(3001, () => {
    console.log('http://localhost:3001/')
})