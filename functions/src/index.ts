/**
 * Firebase Cloud Functions for Landing Page
 *
 * Self-contained newsletter signup handlers using Brevo API with email notifications
 */

import { onRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions/v2';
import { defineString } from 'firebase-functions/params';
import * as brevo from '@getbrevo/brevo';
import { Resend } from 'resend';

// Define environment parameters (will be set during deployment)
const brevoApiKey = defineString('BREVO_API_KEY');
const brevoNotifyMeListId = defineString('BREVO_NOTIFY_ME_LIST_ID');
const brevoNewsletterListId = defineString('BREVO_NEWSLETTER_LIST_ID');
const resendApiKey = defineString('RESEND_API_KEY');
const emailFromAddress = defineString('EMAIL_FROM_ADDRESS');
const emailFromName = defineString('EMAIL_FROM_NAME');

/**
 * Create Resend client for sending emails
 *
 * @returns {Resend} Configured Resend client
 * @throws {Error} When RESEND_API_KEY is not configured
 */
function getResendClient(): Resend {
  const apiKey = resendApiKey.value();
  if (!apiKey) {
    throw new Error('RESEND_API_KEY not configured');
  }
  return new Resend(apiKey);
}

/**
 * Send confirmation email to user after signup
 *
 * @param {string} email - User's email address
 * @param {string} name - User's name
 * @param {string} type - Type of signup ('notify-me' or 'newsletter')
 * @returns {Promise<boolean>} Success status
 */
async function sendUserConfirmationEmail(email: string, name: string, type: string): Promise<boolean> {
  try {
    const resend = getResendClient();
    const fromAddress = emailFromAddress.value() || 'noreply@slimpim.ai';
    const fromName = emailFromName.value() || 'SlimPIM';

    const isNotifyMe = type === 'notify-me';
    const subject = isNotifyMe
      ? '✅ Welcome to the SlimPIM.ai Waiting List!'
      : '✅ Thank you for subscribing!';

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 30px;
            text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">SlimPIM.ai</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Product Management Made Simple</p>
          </div>

          <div style="padding: 30px; background-color: #f9fafb;">
            <h2 style="color: #1f2937;">Hi ${name}! 👋</h2>

            <p style="color: #4b5563; line-height: 1.6;">
              ${
                isNotifyMe
                  ? 'Thank you for joining our waiting list! We\'re excited to have you on board.'
                  : 'Thank you for subscribing to our newsletter! We\'re glad to have you with us.'
              }
            </p>

            ${
              isNotifyMe
                ? `
            <p style="color: #4b5563; line-height: 1.6;">
              SlimPIM.ai is currently under development, and we'll notify you as soon as we launch.
              You'll be among the first to:
            </p>

            <ul style="color: #4b5563; line-height: 1.8;">
              <li>Get early access to the platform</li>
              <li>Enjoy special launch pricing</li>
              <li>Receive exclusive updates on our progress</li>
            </ul>
            `
                : `
            <p style="color: #4b5563; line-height: 1.6;">
              You'll receive updates about:
            </p>

            <ul style="color: #4b5563; line-height: 1.8;">
              <li>Product updates and new features</li>
              <li>Best practices for product management</li>
              <li>Special offers and promotions</li>
            </ul>
            `
            }

            <div style="background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;">
                <strong>What's next?</strong><br>
                We'll keep you updated on our progress. Stay tuned for exciting news!
              </p>
            </div>

            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Questions? Just reply to this email.
            </p>

            <p style="color: #6b7280; font-size: 14px;">
              Best regards,<br>
              <strong>The SlimPIM.ai Team</strong>
            </p>
          </div>

          <div style="background-color: #1f2937; color: #9ca3af; padding: 20px;
            text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 SlimPIM.ai - Made with ❤️ in Germany</p>
          </div>
        </div>
      `;

    const textContent = `
Hi ${name}!

${
  isNotifyMe
    ? `Thank you for joining the SlimPIM.ai waiting list!

We're excited to have you on board. You'll be among the first to:
- Get early access to the platform
- Enjoy special launch pricing
- Receive exclusive updates on our progress`
    : `Thank you for subscribing to our newsletter!

You'll receive updates about:
- Product updates and new features
- Best practices for product management
- Special offers and promotions`
}

We'll keep you updated on our progress. Stay tuned for exciting news!

Questions? Just reply to this email.

Best regards,
The SlimPIM.ai Team

---
© 2025 SlimPIM.ai - Made with ❤️ in Germany
      `;

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromAddress}>`,
      to: email,
      subject,
      html: htmlContent,
      text: textContent
    });

    if (error) {
      logger.error('Failed to send confirmation email', {
        error: error.message,
        email,
        type
      });
      return false;
    }

    logger.info('Confirmation email sent', {
      messageId: data?.id,
      to: email,
      type
    });

    return true;
  } catch (error) {
    const err = error as Error;
    logger.error('Failed to send confirmation email', {
      error: err.message,
      email,
      type
    });
    return false;
  }
}

/**
 * Send notification email to admin when a new user signs up
 *
 * @param {string} userEmail - User's email address
 * @param {string} userName - User's name
 * @param {string} type - Type of signup ('notify-me' or 'newsletter')
 * @returns {Promise<boolean>} Success status
 */
async function sendAdminNotificationEmail(userEmail: string, userName: string, type: string): Promise<boolean> {
  const adminEmail = 'info@slimpim.ai';

  try {
    const resend = getResendClient();
    const fromAddress = emailFromAddress.value() || 'noreply@slimpim.ai';
    const fromName = emailFromName.value() || 'SlimPIM';

    const isNotifyMe = type === 'notify-me';
    const signupType = isNotifyMe ? 'Waiting List' : 'Newsletter';
    const subject = `🎉 New ${signupType} Signup: ${userName}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #10b981; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0;">New Signup!</h1>
        </div>

        <div style="padding: 30px; background-color: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">📬 ${signupType} Signup</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${userName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${userEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${signupType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151;">Time:</td>
              <td style="padding: 10px; color: #6b7280;">${new Date().toISOString()}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #1f2937; color: #9ca3af; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0;">SlimPIM.ai Admin Notification</p>
        </div>
      </div>
    `;

    const textContent = `
New ${signupType} Signup!

Name: ${userName}
Email: ${userEmail}
Type: ${signupType}
Time: ${new Date().toISOString()}

---
SlimPIM.ai Admin Notification
    `;

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromAddress}>`,
      to: adminEmail,
      subject,
      html: htmlContent,
      text: textContent
    });

    if (error) {
      logger.error('Failed to send admin notification email', {
        error: error.message,
        userEmail,
        type
      });
      return false;
    }

    logger.info('Admin notification email sent', {
      messageId: data?.id,
      userEmail,
      type
    });

    return true;
  } catch (error) {
    const err = error as Error;
    logger.error('Failed to send admin notification email', {
      error: err.message,
      userEmail,
      type
    });
    return false;
  }
}

/**
 * Handle "Notify Me" signup from landing page modal
 *
 * @route POST /api/v1/notify-signup
 */
export const notifySignup = onRequest(
  {
    region: 'us-central1',
    cors: true
  },
  async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
      res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
      return;
    }

    const { email, name } = req.body as { email?: string; name?: string };

    // Validation
    if (!email || !name) {
      res.status(400).json({
        success: false,
        message: 'Email and name are required'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
      return;
    }

    // Type narrowing: email and name are guaranteed to be strings after validation
    const validEmail: string = email;
    const validName: string = name;

    try {
      // Initialize Brevo API client
      const apiInstance = new brevo.ContactsApi();
      const apiKey = brevoApiKey.value();
      const listId = parseInt(brevoNotifyMeListId.value() || '0', 10);

      if (!apiKey || !listId) {
        throw new Error('Brevo configuration missing. Set BREVO_API_KEY and BREVO_NOTIFY_ME_LIST_ID environment variables.');
      }

      apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, apiKey);

      // Prepare contact data
      const createContact = new brevo.CreateContact();
      createContact.email = validEmail.toLowerCase().trim();
      createContact.listIds = [listId];
      createContact.updateEnabled = true; // Update if contact already exists

      // Split name into firstName and lastName
      const nameParts = validName.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      // Brevo SDK types require object values, but the API accepts strings
      // Using type assertion to bypass overly strict SDK types
      createContact.attributes = {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        SOURCE: 'notify-me'
      } as unknown as { [key: string]: object };

      // Subscribe to Brevo list
      await apiInstance.createContact(createContact);

      logger.info('Notify signup successful', {
        email: createContact.email,
        listId
      });

      // Send confirmation email to the user
      await sendUserConfirmationEmail(createContact.email, validName, 'notify-me');

      // Send notification to admin
      await sendAdminNotificationEmail(createContact.email, validName, 'notify-me');

      res.status(200).json({
        success: true,
        message: 'Thank you for signing up! Check your email for confirmation.'
      });
    } catch (error: unknown) {
      // Handle duplicate contact error gracefully
      const err = error as { status?: number; response?: { body?: { message?: string } }; message?: string };
      if (err.status === 400 && err.response?.body?.message?.includes('Contact already exist')) {
        logger.info('Contact already exists', { email: validEmail });
        // Still send confirmation email even if contact exists
        await sendUserConfirmationEmail(validEmail, validName, 'notify-me');
        // Still notify admin about the signup attempt
        await sendAdminNotificationEmail(validEmail, validName, 'notify-me');
        res.status(200).json({
          success: true,
          message: 'Thank you for signing up! Check your email for confirmation.'
        });
        return;
      }

      logger.error('Notify signup error', {
        error: err.message,
        status: err.status,
        email: validEmail
      });

      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    }
  }
);

/**
 * Handle newsletter subscription from landing page footer
 *
 * @route POST /api/v1/newsletter/subscribe
 */
export const newsletterSubscribe = onRequest(
  {
    region: 'us-central1',
    cors: true
  },
  async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
      res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
      return;
    }

    const { email, listType } = req.body as { email?: string; listType?: string };

    // Validation
    if (!email) {
      res.status(400).json({
        success: false,
        message: 'Email is required'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
      return;
    }

    // Type narrowing: email is guaranteed to be a string after validation
    const validEmail: string = email;
    const validListType: string = listType || 'newsletter';

    try {
      // Initialize Brevo API client
      const apiInstance = new brevo.ContactsApi();
      const apiKey = brevoApiKey.value();
      const listId = validListType === 'notify-me'
        ? parseInt(brevoNotifyMeListId.value() || '0', 10)
        : parseInt(brevoNewsletterListId.value() || '0', 10);

      if (!apiKey || !listId) {
        throw new Error('Brevo configuration missing. Set BREVO_API_KEY, BREVO_NOTIFY_ME_LIST_ID, and BREVO_NEWSLETTER_LIST_ID environment variables.');
      }

      apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, apiKey);

      // Prepare contact data
      const createContact = new brevo.CreateContact();
      createContact.email = validEmail.toLowerCase().trim();
      createContact.listIds = [listId];
      createContact.updateEnabled = true; // Update if contact already exists

      // Brevo SDK types require object values, but the API accepts strings
      // Using type assertion to bypass overly strict SDK types
      createContact.attributes = {
        SOURCE: validListType
      } as unknown as { [key: string]: object };

      // Subscribe to Brevo list
      await apiInstance.createContact(createContact);

      logger.info('Newsletter subscription successful', {
        email: createContact.email,
        listType: validListType,
        listId
      });

      // Send confirmation email to the user
      // Use email as name if name is not provided (newsletter signup doesn't always have name)
      const userName = validEmail.split('@')[0]; // Use part before @ as fallback name
      await sendUserConfirmationEmail(createContact.email, userName, validListType);

      // Send notification to admin
      await sendAdminNotificationEmail(createContact.email, userName, validListType);

      res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter!'
      });
    } catch (error: unknown) {
      // Handle duplicate contact error gracefully
      const err = error as { status?: number; response?: { body?: { message?: string } }; message?: string };
      if (err.status === 400 && err.response?.body?.message?.includes('Contact already exist')) {
        logger.info('Contact already exists', { email: validEmail });
        // Still send confirmation email even if contact exists
        const userName = validEmail.split('@')[0];
        await sendUserConfirmationEmail(validEmail, userName, validListType);
        // Still notify admin about the signup attempt
        await sendAdminNotificationEmail(validEmail, userName, validListType);
        res.status(200).json({
          success: true,
          message: 'Successfully subscribed to newsletter!'
        });
        return;
      }

      logger.error('Newsletter subscription error', {
        error: err.message,
        status: err.status,
        email: validEmail
      });

      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    }
  }
);
