import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './router/index.js'

const app= express()

const __dirname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views'))
app.set('views', join(__dirname, 'views'))


// examencv_app/src/views

app.set('view engine', 'ejs')



app.listen(8085)
console.log("el servidor esta corriendo en el puerto: ",8085)