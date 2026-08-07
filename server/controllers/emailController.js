import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (req, res) => {
  const { type, subject, htmlContent, replyTo } = req.body;
  const isSchool = type === 'school';
  
  // Route to the correct email depending on division
  const toEmail = isSchool 
    ? (process.env.SCHOOL_INQUIRY_EMAIL || 'pkram8848@gmail.com')
    : (process.env.COLLEGE_INQUIRY_EMAIL || 'pkram8848@gmail.com');

  const brevoApiKey = process.env.BREVO_API_KEY;
  const brevoFrom = process.env.BREVO_FROM || 'mail@saipal.edu.np';

  if (!brevoApiKey) {
    // If no API key is set yet, log the email content to console so development is unblocked
    console.log(`\n================== [Mock Email Send] ==================`);
    console.log(`To: ${toEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Reply-To: ${replyTo ? `${replyTo.name} <${replyTo.email}>` : 'N/A'}`);
    console.log(`Content:\n${htmlContent.replace(/<[^>]*>/g, ' ').trim()}`);
    console.log(`=======================================================\n`);
    
    return res.status(200).json({ 
      message: "Form submission saved! (Email details logged on the server. Configure BREVO_API_KEY in server .env to send live emails)." 
    });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: isSchool ? "Saipal School Website" : "Saipal Website", email: brevoFrom },
        to: [{ email: toEmail, name: isSchool ? "Saipal School Admissions Desk" : "Saipal Academy Admin" }],
        replyTo: replyTo ? { email: replyTo.email, name: replyTo.name } : undefined,
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: "Inquiry email sent successfully!" });
    } else {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({ 
        message: errorData.message || "Failed to send email via Brevo." 
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "An error occurred while sending the email." });
  }
};
