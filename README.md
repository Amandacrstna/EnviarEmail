# EnviarEmail
Formulário de contato usando Javascript e Nodemailer
Primeiro instala o Node.js, se já estiver instalado, só instalar os módulos.
Estará rodando em Local Host, na porta 3000, caso queira trocar, só ir em server.js e trocar a porta.
Abrir o terminal e digitar o comando npm init -y
depois npm i express nodemailer
e por último npm i -D nodemon
No arquivo Package.json, trocar os "Scripts"... Colocar:
"dev": "nodemon server.js",
"start": "node server.js
pra rodar, usar NPM RUN DEV no terminal.
Em server.js, trocar o serviço que você quer usar (Gmail, hotmail, etc).
Em usuário, colocar seu email, e em Pass, colocar sua senha.
====>>> const transporter = nodemailer.createTransport({
        service: ' ',
        auth: {
            user: ' Seu email aqui',
            pass: 'Sua senha aqui' <<<====
Logo em baixo, em "const mailOptions", colocar no "TO" o email que receberá a mensagem.
