// Facebook Conversions API (CAPI) Integration
// Para usar esta API, você precisará configurar um backend ou usar um serviço de terceiros

interface CAPIEvent {
  event_name: string;
  event_time: number;
  event_source_url: string;
  user_data: {
    email?: string;
    phone?: string;
    client_ip_address?: string;
    client_user_agent?: string;
    external_id?: string;
  };
  custom_data?: {
    value?: number;
    currency?: string;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    num_items?: number;
  };
  action_source: string;
}

class FacebookCAPI {
  private pixelId: string;
  private accessToken: string;
  private apiVersion: string = 'v19.0';

  constructor(pixelId: string, accessToken: string) {
    this.pixelId = pixelId;
    this.accessToken = accessToken;
  }

  async sendEvent(event: CAPIEvent): Promise<void> {
    try {
      const response = await fetch(
        `https://graph.facebook.com/${this.apiVersion}/${this.pixelId}/events`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: [event],
            access_token: this.accessToken,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`CAPI request failed: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('CAPI Event sent successfully:', result);
    } catch (error) {
      console.error('Error sending CAPI event:', error);
      // Não lançar erro para não quebrar a experiência do usuário
    }
  }

  async trackPurchase(
    email?: string,
    phone?: string,
    value: number = 497
  ): Promise<void> {
    const event: CAPIEvent = {
      event_name: 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      user_data: {
        email: email ? await this.hashData(email) : undefined,
        phone: phone ? await this.hashData(phone) : undefined,
        client_ip_address: '', // Será preenchido pelo backend
        client_user_agent: navigator.userAgent,
      },
      custom_data: {
        value: value,
        currency: 'MZN',
        content_name: 'Excel Course',
        content_category: 'course',
        content_ids: ['excel-course'],
        num_items: 1,
      },
      action_source: 'website',
    };

    await this.sendEvent(event);
  }

  async trackLead(
    email?: string,
    phone?: string
  ): Promise<void> {
    const event: CAPIEvent = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      user_data: {
        email: email ? await this.hashData(email) : undefined,
        phone: phone ? await this.hashData(phone) : undefined,
        client_ip_address: '', // Será preenchido pelo backend
        client_user_agent: navigator.userAgent,
      },
      custom_data: {
        content_name: 'Excel Course - Lead',
        content_category: 'course',
      },
      action_source: 'website',
    };

    await this.sendEvent(event);
  }

  // Função para hash de dados (SHA-256) - necessária para privacidade do Facebook
  private async hashData(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data.toLowerCase().trim());
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}

// Exportar uma instância configurada
export const facebookCAPI = new FacebookCAPI(
  '196238719934727', // Seu Pixel ID
  'EAAKCotH2yucBSu6PYcZANHwsVYSjsF1Kbb56wGX7nYMiO8DxUqLcnZCZA0aZAdTSaP1ggP6VF6hOBtZBn38UmT5JbBqKW0Ae3UxwutJUu0x7TuMfrCEp4vu3ggLRCXj3gIXKW25wnQzMUGBiErHPSdFeh8Rn0dr7rxnePz7VTVCpPUlj6AGTXUGsZCZBHYL3g7wpwZDZD' // Token de acesso do Facebook
);

// Exportar a classe para uso personalizado
export default FacebookCAPI;