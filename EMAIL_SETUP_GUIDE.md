# Email Setup Guide - Simple Steps

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Fill out the template form:

**Template Name:** Contact Form Template

**Subject:** New message from {{name}} - Portfolio Contact

**Content (HTML or Text):**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

**Important:** The variables {{name}}, {{email}}, and {{message}} must match exactly with your form field names in the code.

4. Click "Save"
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to "Account" in your dashboard
2. Find "API Keys" section
3. **Copy your Public Key**

## Step 5: Update Your Code
In `src/components/Contact.jsx`, replace these lines:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test Your Form
1. Save the file
2. Start your development server: `npm start`
3. Fill out the contact form and submit
4. Check your email inbox!

## That's it! 🎉
Your contact form will now send emails directly to your inbox when visitors submit the form.

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites
- No credit card required