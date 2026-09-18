// Facebook Pixel Tracking Utility

declare global {
  interface Window {
    fbq: any;
  }
}

export const FacebookPixel = {
  // Track when user views specific content
  trackViewContent: (contentName: string, contentCategory: string = 'course') => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        content_category: contentCategory,
        content_ids: ['excel-course'],
        value: 497,
        currency: 'MZN'
      });
    }
  },

  // Track when user clicks on pricing section
  trackLead: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Excel Course - Pricing View',
        content_category: 'course'
      });
    }
  },

  // Track when user initiates checkout
  trackInitiateCheckout: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Excel Course',
        content_category: 'course',
        value: 497,
        currency: 'MZN',
        num_items: 1
      });
    }
  },

  // Track when user completes purchase
  trackPurchase: (value: number = 497) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: 'Excel Course',
        content_category: 'course',
        value: value,
        currency: 'MZN',
        num_items: 1,
        transaction_id: `TXN-${Date.now()}`
      });
    }
  },

  // Track when user clicks on CTA button
  trackCustomEvent: (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }
  }
};