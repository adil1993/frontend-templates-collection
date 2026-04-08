# 📧 Email Setup Guide (5 Minutes)

**⚠️ IMPORTANT: The forms currently show a Gmail API error because they're using demo credentials.**

**Make your contact and booking forms send real emails!** Follow these simple steps to fix the error and enable email functionality.

## 🎯 What This Does

After setup, your website will:
- ✅ Send contact form submissions to your email
- ✅ Send booking requests with all details
- ✅ Show professional success/error messages
- ✅ Work reliably with 200 free emails/month

## 🚨 Current Error Fix

The **"Gmail_API: Request had insufficient authentication scopes"** error happens because:
- The website is using demo EmailJS credentials
- These demo credentials don't have proper Gmail permissions
- You need to set up your own EmailJS account with proper authentication

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address
4. Login to your dashboard

## Step 2: Connect Your Email Service

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. **Choose Gmail** (most reliable)
4. **IMPORTANT**: Click **"Connect Account"** and sign in with your Gmail
5. **Grant all requested permissions** (this fixes the authentication error)
6. **📝 Copy your Service ID** (looks like `service_xxxxxxx`)

### 🔧 Gmail Permission Fix:
- When connecting Gmail, make sure to **allow all scopes**
- If you get permission errors, disconnect and reconnect Gmail
- Use the same Gmail account for both EmailJS and receiving emails

## Step 3: Create Email Templates

### Contact Form Template
1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Name it **"Contact Form Submission"**
4. **Copy this template exactly:**

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission from your website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📞 Phone: {{phone}}
✂️ Service Interest: {{service}}
📅 Preferred Date: {{date}}
⏰ Preferred Time: {{time}}

💬 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please respond to this inquiry promptly.

Best regards,
Your Website Contact Form
```

5. **📝 Copy the Template ID** (looks like `template_xxxxxxx`)

### Booking Form Template
1. Create another template named **"Appointment Booking Request"**
2. **Copy this template exactly:**

```
Subject: 🗓️ New Appointment Booking Request from {{client_name}}

Hello,

You have received a new appointment booking request:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Client: {{client_name}}
📧 Email: {{client_email}}
📞 Phone: {{client_phone}}

✂️ Service: {{service}}
📅 Preferred Date: {{preferred_date}}
⏰ Preferred Time: {{preferred_time}}
💇 Barber/Stylist: {{barber}}

💬 Special Requests:
{{notes}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ ACTION REQUIRED: Please contact the client to confirm this appointment.

Best regards,
Your Website Booking System
```

3. **📝 Copy this Template ID too** (looks like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** in EmailJS dashboard
2. Find your **"Public Key"** 
3. **📝 Copy this Public Key** (looks like `xxxxxxxxxxxxxxx`)

## Step 5: Update Your Website

1. Open the file: `src/config/email.ts`
2. Replace the demo values with your real credentials:

```typescript
export const emailConfig = {
  // Replace these with your actual EmailJS credentials:
  serviceID: 'service_xxxxxxx',           // From Step 2
  contactTemplateID: 'template_xxxxxxx',  // From Step 3 (Contact)
  bookingTemplateID: 'template_xxxxxxx',  // From Step 3 (Booking)
  userID: 'xxxxxxxxxxxxxxx',              // From Step 4
  
  // Your business email where you want to receive messages:
  businessEmail: 'your-email@gmail.com'   // Your actual email
};
```

## Step 6: Test Your Forms

1. **Save the file** and refresh your website
2. **Fill out the contact form** with test data
3. **Submit the form** - you should see a success message
4. **Check your email inbox** - you should receive the form submission
5. **Test the booking form** as well

## 🎉 Success! Your Forms Now Work

Your website now sends real emails! The free EmailJS plan includes:
- ✅ **200 emails per month** (perfect for most small businesses)
- ✅ **All major email providers** supported
- ✅ **Reliable delivery** with tracking
- ✅ **No server required** - works on any hosting

## 🔧 Troubleshooting

### ❌ Emails Not Sending?

**Check Your Credentials:**
- Verify all IDs are copied correctly (no extra spaces)
- Make sure Service ID starts with `service_`
- Template IDs should start with `template_`
- Public Key should be 15+ characters

**Check EmailJS Dashboard:**
- Go to "Logs" section to see error messages
- Verify your email service is connected and active
- Test templates directly in EmailJS dashboard

**Check Your Templates:**
- Use the exact variable names shown above: `{{from_name}}`, `{{client_email}}`, etc.
- Don't change the variable names or the forms won't work

### ⚠️ Common Mistakes

1. **Wrong variable names** - Must match exactly: `{{from_name}}` not `{{name}}`
2. **Missing service connection** - Email service must be connected and active
3. **Typos in credentials** - Double-check all IDs are copied correctly
4. **Blocked by email provider** - Check spam folder, whitelist EmailJS

### 📧 Need More Emails?

**Free Plan**: 200 emails/month
**Paid Plans**: Start at $15/month for 1,000 emails

**Alternative Services:**
- **Formspree** ($0-19/month) - Simple form handling
- **Netlify Forms** (Free tier available)
- **Custom backend** with Supabase/Firebase

## 🚀 Advanced Tips

### Custom Email Templates
You can customize the email templates with:
- Your business logo (as image URL)
- Custom styling with HTML
- Additional fields from your forms
- Automatic replies to customers

### Multiple Recipients
To send emails to multiple people:
```typescript
businessEmail: 'owner@salon.com,manager@salon.com'
```

### Auto-Reply Setup
Create additional templates to send confirmation emails to customers automatically.

## ⏱️ Total Setup Time: 5-10 Minutes

1. **Create EmailJS account** (2 minutes)
2. **Connect email service** (1 minute)  
3. **Create templates** (2 minutes)
4. **Update config file** (1 minute)
5. **Test forms** (1 minute)

## 📞 Need Help?

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **Test your setup** in EmailJS dashboard before going live
- **Check browser console** for JavaScript errors
- **Verify internet connection** when testing

---

**🎉 Congratulations!** Your professional salon website now has working contact and booking forms that send real emails to your business. Your clients can reach you instantly! ✨

**Next Steps:**
1. Customize your business information
2. Add your own images
3. Set up Google Maps (2-minute process)
4. Launch your website!