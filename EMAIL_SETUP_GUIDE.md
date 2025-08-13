# Email Setup Guide for Contact Form

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or your preferred email provider)
4. Connect your email account (carlbucknor2021@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
{{form_type}} - {{subject}}
```

**Email Body:**
```
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
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update the Code
Replace the placeholder values in `src/pages/ContactPage.tsx`:

```typescript
emailjs.send(
  'service_abc123', // Your Service ID
  'template_xyz789', // Your Template ID
  templateParams,
  'your_public_key_here' // Your Public Key
)
```

## Option 2: Simple Mailto Fallback (No Setup Required)

If you prefer a simpler solution without EmailJS setup, you can use a mailto link. Update the `handleSubmit` function in `src/pages/ContactPage.tsx`:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Create email content
  const emailSubject = encodeURIComponent(formData.subject || 'Contact Form Submission');
  const emailBody = encodeURIComponent(`
New contact form submission from Kimmy Inspires website:

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Form Type: ${activeTab === 'speaking' ? 'Speaking Invitation' : 'General Contact'}

Message Details:
Subject: ${formData.subject}
Message: ${formData.message}

Event Details (if speaking invitation):
Event Type: ${formData.eventType || 'N/A'}
Event Date: ${formData.eventDate || 'N/A'}
Audience Size: ${formData.audienceSize || 'N/A'}
Budget Range: ${formData.budget || 'N/A'}

---
This email was sent from the Kimmy Inspires contact form.
  `);
  
  // Open default email client
  window.open(`mailto:carlbucknor2021@gmail.com?subject=${emailSubject}&body=${emailBody}`);
  
  alert('Your default email client will open with a pre-filled message. Please send the email to complete your submission.');
  
  setFormData({
    name: '',
    email: '',
    subject: '',
    message: '',
    eventType: '',
    eventDate: '',
    audienceSize: '',
    budget: ''
  });
};
```

## Option 3: Formspree (Alternative Service)

If you prefer not to use EmailJS, you can use Formspree:

1. Go to [Formspree.io](https://formspree.io/) and create an account
2. Create a new form
3. Get your form endpoint URL
4. Update the form to use Formspree instead of EmailJS

## Testing

After setup:
1. Fill out the contact form
2. Submit the form
3. Check your email (carlbucknor2021@gmail.com) for the received message
4. Verify all form data is included correctly

## Troubleshooting

- **EmailJS errors**: Check that all IDs are correct and the service is properly connected
- **Gmail issues**: Make sure to enable "Less secure app access" or use App Passwords
- **Template variables**: Ensure all template variables match the ones in the code

## Security Notes

- EmailJS public key is safe to expose in frontend code
- Consider rate limiting to prevent spam
- Monitor your email service for any unusual activity 