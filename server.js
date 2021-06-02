const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const port = process.env.port || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
 res.sendFile(__dirname + './public/index.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'seu email aqui',
            pass: 'sua senha aqui'

        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'email que receberá a mensagem',
        subject: '{Mensagem de req.body.email}',
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email enviado: ' + info.response);
            res.send('sucesso')
        }
    })
})

app.listen(port, ()=>{
    console.log('rodando')

})


