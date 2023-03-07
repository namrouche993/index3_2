const crypto = require('crypto');
const axios = require('axios');
const fs = require('fs');
const nodemailer = require('nodemailer');

async function checkWebsiteUpdate(url) {
  const response = await axios.get(url);
  const content = response.data;
  const currentHash = crypto
    .createHash('sha1')
    .update(content)
    .digest('hex');
  try {
    const lastHash = fs.readFileSync('lastHash.txt', 'utf8');
    if (currentHash !== lastHash) {
      console.log('Website updated!');
      fs.writeFileSync('lastHash.txt', currentHash);
      sendEmail();
    } else {
      console.log('Website not updated.');
    }
  } catch (error) {
    console.log('Website updated for the first time!');
    fs.writeFileSync('lastHash.txt', currentHash);
  }
}

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  });

  const mailOptions = {
    from: 'namrouche993@gmail.com',
    to: 'nadjiblocatelli@gmail.com',
    subject: 'Website updated',
    text: 'The website https://tadkirati.chan2022.dz has been updated.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

setInterval(() => {
  checkWebsiteUpdate('https://tadkirati.chan2022.dz');
}, 2 * 60 * 1000); // check every hour
