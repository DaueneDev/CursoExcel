import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();



  const faqs = [
    {
      question: 'Por quanto tempo tenho acesso ao curso?',
      answer: 'O acesso é vitalício! Uma vez que você compra o curso, pode assistir as aulas para sempre, quantas vezes quiser.'
    },
    {
      question: 'Posso baixar as aulas para assistir offline?',
      answer: 'Sim! Todas as aulas estão liberadas para download. Você pode baixar e assistir sem precisar de internet, no celular, tablet ou computador.'
    },
    {
      question: 'Preciso ter conhecimento prévio em Excel?',
      answer: 'Não! O curso foi desenvolvido para atender desde iniciantes até usuários avançados. Começamos do básico e avançamos gradualmente.'
    },
    {
      question: 'As aulas são ao vivo ou gravadas?',
      answer: 'Todas as aulas são pré-gravadas com alta qualidade de vídeo e áudio. Isso permite que você assista no seu ritmo, pause, volte e revise quantas vezes precisar.'
    },
    {
      question: 'O curso oferece certificado?',
      answer: 'Este curso não oferece certificado. O foco é no aprendizado prático e nas habilidades que você desenvolverá para usar no mercado de trabalho.'
    },
    {
      question: 'Como funciona a garantia?',
      answer: 'Oferecemos 30 dias de garantia incondicional. Se não ficar satisfeito com o curso, devolvemos 100% do seu dinheiro.'
    },
    {
      question: 'Posso pagar à prestações?',
      answer: 'Não oferecemos pagamento parcelado. O valor de 497 MT deve ser pago integralmente via M-Pesa, E-mola ou Ponto24.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte por Whatsapp. Nossa equipa responde em até 24 horas.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o curso. Se não encontrar sua pergunta, 
            entre em contacto connosco.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-green-600" size={24} />
                ) : (
                  <ChevronDown className="text-gray-600" size={24} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4">
              <Star className="fill-current" size={32} />
            </div>
            <div className="absolute top-8 right-8">
              <Zap size={28} />
            </div>
            <div className="absolute bottom-6 left-8">
              <Star className="fill-current" size={24} />
            </div>
            <div className="absolute bottom-4 right-4">
              <Zap size={36} />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">
              🚀 Última Chance!
            </h3>
            <p className="text-xl mb-2">
              Transforme sua carreira <strong>HOJE</strong> mesmo
            </p>
            <p className="text-lg mb-8 opacity-90">
              Mais de 10.000 profissionais já se tornaram experts em Excel
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">497 MT</p>
                <p className="text-sm opacity-90">ao invés de 3.500 MT</p>
              </div>
              <div className="bg-red-500 px-6 py-3 rounded-lg animate-pulse">
                <p className="font-bold">⚡ OFERTA LIMITADA</p>
                <p className="text-sm">Termina em breve!</p>
              </div>
            </div>

            <a
              href="https://wa.me/258844948189?text=Quero%20adquirir%20o%20curso%20completo%20de%20Microsoft%20Excel."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg mb-6 flex items-center justify-center"
            >
              💳 COMPRAR AGORA
            </a>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
              <span>✅ Acesso Vitalício</span>
              <span>✅ 30 Dias de Garantia</span>
              <span>✅ Download Liberado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
