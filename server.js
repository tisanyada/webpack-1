const express = require('express')
const morgan = require('morgan')
const path = require('path');

const app = express()


app.use(express.static(path.join((__dirname, ''))))
app.use(morgan('dev'))


app.listen(3000, _=> console.log(`\n\tserver is connected on port: ${3000}\n`))