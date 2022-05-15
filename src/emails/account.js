const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email, // Change to your recipient
        from: 'juhnjg@gmail.com', // Change to your verified sender
        subject: 'Thanks for joining in!',
        text: 'Welcome to the app, '+name+'. Let me know how you get along with the app.',        
    })
}

const sendAskCalcelationEmail = (email, name) =>{
    sgMail.send({
        to: email, // Change to your recipient
        from: 'juhnjg@gmail.com', // Change to your verified sender
        subject: 'I am sorry that you leave here',
        text: 'Why do you calcel our service? '+name+'. I would be appreciated that you answer my quetion.',        
    })
}


module.exports = {
    sendWelcomeEmail,
    sendAskCalcelationEmail
}
