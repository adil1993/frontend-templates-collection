// EmailJS Configuration
// IMPORTANT: Replace these demo credentials with your real EmailJS credentials
// Follow the SETUP-GUIDE.md for step-by-step instructions

export const emailConfig = {
  // REPLACE WITH YOUR REAL EMAILJS CREDENTIALS:
  serviceID: 'YOUR_SERVICE_ID',           // From EmailJS Dashboard > Email Services
  contactTemplateID: 'YOUR_CONTACT_TEMPLATE_ID',  // From EmailJS Dashboard > Email Templates
  bookingTemplateID: 'YOUR_BOOKING_TEMPLATE_ID',  // From EmailJS Dashboard > Email Templates
  userID: 'YOUR_PUBLIC_KEY',              // From EmailJS Dashboard > Account > General
  
  // Your business email where you want to receive form submissions
  businessEmail: 'your-email@gmail.com'   // Replace with your actual email
};

// EmailJS Template Variables Reference:
// 
// CONTACT FORM TEMPLATE should include:
// - {{from_name}} - Customer's name
// - {{from_email}} - Customer's email  
// - {{phone}} - Customer's phone
// - {{service}} - Selected service
// - {{date}} - Preferred date
// - {{time}} - Preferred time
// - {{message}} - Customer's message
// - {{to_email}} - Your business email
//
// BOOKING FORM TEMPLATE should include:
// - {{client_name}} - Customer's name
// - {{client_email}} - Customer's email
// - {{client_phone}} - Customer's phone
// - {{service}} - Selected service
// - {{preferred_date}} - Booking date
// - {{preferred_time}} - Booking time
// - {{barber}} - Selected barber (or "No preference")
// - {{notes}} - Special requests
// - {{to_email}} - Your business email