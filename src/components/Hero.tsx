import React from 'react';
import { PlayCircle, Users, Clock, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/obrigado');
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Domine o <span className="text-green-600">Microsoft Excel</span> do Zero ao Avançado
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Aprenda as técnicas mais avançadas do Excel com aulas pré-gravadas de alta qualidade. 
              Mais de 150 aulas práticas que você pode assistir online ou baixar.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Users className="text-green-600" size={20} />
                <span className="text-gray-700 font-semibold">+10.000 alunos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-green-600" size={20} />
                <span className="text-gray-700 font-semibold">40+ horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="text-green-600" size={20} />
                <span className="text-gray-700 font-semibold">Download liberado</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-2 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-yellow-500 fill-current" size={20} />
                <span className="text-red-600 font-bold text-lg">OFERTA ESPECIAL</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-l text-gray-500 line-through">3.500 MT</span>
                <span className="text-2xl font-bold text-green-600">497 MT</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                  -86%
                </span>
              </div>
              <p className="text-green-600 font-semibold mt-2">
                Pagamento único
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://wa.me/258844948189?text=Quero%20adquirir%20o%20curso%20completo%20de%20Microsoft%20Excel."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center"
              >
                Começar Agora
              </a>
              <div className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg bg-green-50">
                <PlayCircle size={24} />
                Aulas Pré-gravadas
              </div>
            </div>

            {/* Guarantee */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-semibold text-center">
                ✅ 30 dias de garantia ou seu dinheiro de volta
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/Excel.png"
              alt="Curso Completo de Microsoft Excel - Laptop com gráficos e planilhas"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Download className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Acesso Total</p>
                  <p className="text-gray-600 text-sm">Online + Download</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
