const express = require('express')
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express()
app.use(cors())
const port = 3000
// create reusable transporter object using the default SMTP transport
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "andrewshapoval88@gmail.com", // generated ethereal user
        pass: "Travels2020", // generated ethereal password
    },
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/sendMessage', async function (req, res) {
    res.send('Hello Andrew!')

    let {name, email, message} = req.body.data

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "job", // sender address
        to: "andrewshapoval88@gmail.com", // list of receivers
        subject: "Есть работенка ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>Сообщение с портфолио</b><hr/>
        <div>Name: ${name}</div>
        <div>Contacts: ${email}</div>
        <div>Message: ${message}</div>`
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})