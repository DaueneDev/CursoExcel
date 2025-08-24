import React from 'react';
import { Check, Star, Download, Play, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/obrigado');
  };

  const features = [
    'Acesso vitalício a todas as aulas',
    '150+ aulas pré-gravadas',
    '180+ horas de conteúdo',
    'Exercícios e projetos práticos',
    'Download liberado para todas as aulas',
    'Assista online ou offline',
    'Suporte por email',
    'Atualizações gratuitas',
    'Templates e planilhas prontas',
    'Comunidade de alunos'
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforme sua carreira hoje mesmo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Investimento único que se paga rapidamente. Mais de 180 horas de conteúdo 
            pré-gravado para você assistir no seu ritmo.
          </p>
          
          {/* Limited Time Offer */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full font-semibold">
            <Star className="fill-current" size={20} />
            Oferta especial por tempo limitado!
          </div>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-lg mx-auto relative"
        >
          {/* Popular Badge */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-8 py-3 rounded-b-lg font-semibold">
            🔥 Oferta Especial
          </div>

          <div className="p-10 pt-16">
            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Curso Completo de Excel</h3>
              <p className="text-gray-600">Acesso vitalício • Aulas pré-gravadas</p>
              
              {/* Pricing */}
              <div className="mt-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-500 line-through">
                    3.500 MT
                  </span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-lg font-semibold">
                    -86%
                  </span>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold text-green-600">497 MT</span>
                </div>
                <p className="text-green-600 font-semibold mt-2 text-lg">
                  Pagamento único
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Play className="text-green-600 mx-auto mb-2" size={24} />
                <p className="font-semibold text-gray-900">150+ aulas</p>
                <p className="text-sm text-gray-600">Pré-gravadas</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Download className="text-blue-600 mx-auto mb-2" size={24} />
                <p className="font-semibold text-gray-900">Download liberado</p>
                <p className="text-sm text-gray-600">Assista offline</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Clock className="text-purple-600 mx-auto mb-2" size={24} />
                <p className="font-semibold text-gray-900">180+ horas</p>
                <p className="text-sm text-gray-600">De conteúdo</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Users className="text-yellow-600 mx-auto mb-2" size={24} />
                <p className="font-semibold text-gray-900">Vitalício</p>
                <p className="text-sm text-gray-600">Acesso para sempre</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/258844948189?text=Quero%20adquirir%20o%20curso%20completo%20de%20Microsoft%20Excel."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-green-600 text-white rounded-lg font-semibold text-xl hover:bg-green-700 transition-colors mb-4 flex items-center justify-center"
            >
              Quero Começar Agora
            </a>

            {/* Guarantee */}
            <p className="text-center text-sm text-gray-600">
              ✅ 30 dias de garantia incondicional
            </p>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Formas de pagamento aceitas:</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img src="/M-pesa.png" alt="M-Pesa" className="h-20 w-auto bg-white rounded-lg shadow px-6 py-4 object-contain" />
            <img src="/Emola.png" alt="Emola" className="h-20 w-auto bg-white rounded-lg shadow px-6 py-4 object-contain" />
            <img src="/Ponto24.png" alt="Ponto 24" className="h-20 w-auto bg-white rounded-lg shadow px-6 py-4 object-contain" />
          </div>
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center bg-green-50 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mais de 10.000 alunos já investiram em si mesmos
          </h3>
          <p className="text-gray-600 text-lg">
            Não perca esta oportunidade de transformar sua carreira. 
            O mercado valoriza profissionais que dominam o Excel!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
