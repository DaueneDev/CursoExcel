import React from 'react';
import { CheckCircle, MessageCircle, ArrowLeft, Clock, Shield, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  const whatsappNumber = "+258844948189";
  const whatsappMessage = "Olá! Acabei de comprar o Curso de Microsoft Excel e gostaria de receber o link de acesso. Obrigado!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={64} />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            🎉 Parabéns pela excelente decisão!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sua compra foi processada com sucesso. Você está a um passo de 
            transformar sua carreira com o curso mais completo de Microsoft Excel!
          </p>
        </motion.div>

        {/* Next Steps Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="text-green-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Próximo Passo</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">
            Para receber o <strong>link de acesso ao curso</strong>, entre em contacto 
            com nossa equipa pelo WhatsApp. Responderemos em poucos minutos!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={24} />
            Contactar via WhatsApp
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Nosso horário de atendimento: Segunda a Sexta, 8h às 18h
          </p>
        </motion.div>

        {/* What You'll Get */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            O que você vai receber:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Download className="text-green-600" size={20} />
              <span className="text-gray-700">150+ aulas para download</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" size={20} />
              <span className="text-gray-700">40+ horas de conteúdo</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-purple-600" size={20} />
              <span className="text-gray-700">Acesso vitalício</span>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8"
        >
          <h4 className="font-semibold text-yellow-800 mb-2">📋 Informações Importantes:</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Guarde este número de WhatsApp: <strong>+258 84 494 8189</strong></li>
            <li>• Enviaremos o acesso em até 2 horas úteis</li>
            <li>• Você receberá instruções completas de como baixar as aulas</li>
            <li>• Lembre-se: você tem 30 dias de garantia total</li>
          </ul>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar à página inicial
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
