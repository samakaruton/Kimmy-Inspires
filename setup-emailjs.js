// EmailJS Quick Setup Script
// Run this in your browser console after setting up EmailJS

console.log(`
🎯 EMAILJS SETUP INSTRUCTIONS:

1. Go to https://www.emailjs.com/ and create a free account
2. Add your Gmail service (carlbucknor2021@gmail.com)
3. Create an email template
4. Get your credentials and update the ContactPage.tsx file

📧 EMAIL TEMPLATE SUGGESTION:

Subject: {{form_type}} - {{subject}}

Body:
New contact form submission from Kimmy Inspires website:

**Contact Information:**
Name: {{from_name}}
Email: {{from_email}}
Form Type: {{form_type}}

**Message Details:**
Subject: {{subject}}
Message: {{message}}

**Event Details (if speaking invitation):**
Event Type: {{event_type}}
Event Date: {{event_date}}
Audience Size: {{audience_size}}
Budget Range: {{budget}}

---
This email was sent from the Kimmy Inspires contact form.

🔧 UPDATE THESE VALUES IN src/pages/ContactPage.tsx:

Replace:
- 'service_abc123' with your Service ID
- 'template_xyz789' with your Template ID  
- 'your_public_key' with your Public Key

✅ Once updated, emails will be sent automatically to carlbucknor2021@gmail.com!
`); 