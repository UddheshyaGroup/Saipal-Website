import emailjs from '@emailjs/browser';

const API_BASE_URL = "/api";

export const emailService = {
  /**
   * Sends form emails. Uses EmailJS if configured in environment variables,
   * otherwise falls back to the secure backend email router.
   * 
   * @param {Object} params
   * @param {string} params.type - 'school' or 'college'
   * @param {string} params.subject - Email subject line
   * @param {string} params.htmlContent - Form data formatted as HTML
   * @param {Object} params.replyTo - { email, name } of the sender
   * @param {Object} params.templateParams - Optional raw parameters for EmailJS templates
   */
  sendEmail: async ({ type, subject, htmlContent, replyTo, templateParams }) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = type === 'school' 
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SCHOOL 
      : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COLLEGE;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 1. If EmailJS configuration is present, use EmailJS directly
    if (serviceId && templateId && publicKey) {
      try {
        // Strip HTML tags to produce readable plain text for {{message_html}}
        const plainText = (htmlContent || "")
          .replace(/<br\s*\/?>/gi, "\n")
          .replace(/<\/p>/gi, "\n")
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .trim();

        // Always include message_html so the template variable is never blank.
        // Merge with any per-form templateParams so both approaches work.
        const finalParams = {
          subject,
          message_html: plainText,
          reply_to_email: replyTo?.email,
          reply_to_name: replyTo?.name,
          from_name: replyTo?.name || "Website Visitor",
          from_email: replyTo?.email || "no-reply@saipal.edu.np",
          ...(templateParams || {}),   // form-specific fields come last to allow overrides
          message_html: plainText,      // always force plain-text content visible in template
        };

        const response = await emailjs.send(serviceId, templateId, finalParams, publicKey);
        if (response.status === 200) {
          return { message: "Form submitted successfully via EmailJS!" };
        }
      } catch (error) {
        console.error("EmailJS send failed, falling back to backend router...", error);
      }
    }

    // 2. Fallback: Send via secure backend API router
    const response = await fetch(`${API_BASE_URL}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        subject,
        htmlContent,
        replyTo,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.message || "Failed to submit form.");
    }

    return response.json();
  }
};
