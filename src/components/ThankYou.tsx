import React, { useEffect } from 'react';
import { CheckCircle, ArrowLeft, Clock, Shield, Download, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FacebookPixel } from '../utils/facebookPixel';

const ThankYou: React.FC = () => {
  const whatsappNumber = "+258844948189";
  const whatsappMessage = "Olá! Acabei de comprar o Curso de Microsoft Excel e gostaria de suporte. Obrigado!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    FacebookPixel.trackPurchase(497);
  }, []);
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
            <FileText className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Próximo Passo</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">
            Você receberá automaticamente um <strong>guia em PDF</strong> no seu email 
            contendo todos os links de acesso às videoaulas. Basta clicar nos links no PDF 
            para começar a assistir às aulas!
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-900 font-semibold text-sm mb-2">
              📧 O que fazer agora:
            </p>
            <ul className="text-blue-800 text-sm space-y-1 text-left">
              <li>• Verifique sua caixa de entrada (e spam)</li>
              <li>• Abra o guia PDF que você receberá</li>
              <li>• Clique nos links das aulas para assistir</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            O envio do PDF é automático e geralmente leva até 5 minutos
          </p>
        </motion.div>

        {/* Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="text-green-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Precisa de Ajuda?</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">
            Se tiver alguma dúvida ou precisar de suporte, entre em contacto connosco!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="mailto:suporte@excelmaster.com"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Nosso horário de atendimento: Segunda a Sexta, 8h às 18h
          </p>
        </motion.div>

        {/* What You'll Get */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gray-50 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            O que você vai receber:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={20} />
              <span className="text-gray-700">Guia PDF com links</span>
            </div>
            <div className="flex items-center gap-3">
              <Download className="text-green-600" size={20} />
              <span className="text-gray-700">150+ aulas para download</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" size={20} />
              <span className="text-gray-700">180+ horas de conteúdo</span>
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
          transition={{ duration: 0.8, delay: 1.1 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8"
        >
          <h4 className="font-semibold text-yellow-800 mb-2">📋 Informações Importantes:</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• O guia PDF será enviado para o email informado no pagamento</li>
            <li>• Verifique também a caixa de spam/promoções</li>
            <li>• Os links no PDF dão acesso a todas as 150+ aulas</li>
            <li>• Você pode baixar as aulas para assistir offline</li>
            <li>• Suporte disponível por email e WhatsApp</li>
            <li>• Lembre-se: você tem 30 dias de garantia total</li>
          </ul>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
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
