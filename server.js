const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/', (req, res) => {
    console.log(req.body)
    const { weight, height } = req.body
    let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

    res.send('Your BMI is ' + bmi);
})

app.get('/about', (req, res) => {
    res.send('<h1>Emily Lu: </h1><ul><li>Swimming</li><li>Scuba Diving</li><li>Bouldering</li></ul> ')
})

// app.listen(3000)

app.listen(port, () => {
    console.log(`Hello app listening at http://localhost:${port}`)
})
