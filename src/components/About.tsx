import React from 'react';
import { BookOpen, Target, TrendingUp, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Aulas Pré-gravadas',
      description: 'Mais de 150 aulas de alta qualidade que você assiste no seu ritmo'
    },
    {
      icon: Target,
      title: 'Foco na Prática',
      description: 'Exercícios práticos e cases reais do mercado de trabalho'
    },
    {
      icon: TrendingUp,
      title: 'Acelere sua Carreira',
      description: 'Habilidades que aumentam sua produtividade e valor profissional'
    },
    {
      icon: Download,
      title: 'Acesso Offline',
      description: 'Baixe as aulas e assista sem precisar de internet'
    }
  ];

  const modules = [
    'Excel Básico - Primeiros Passos',
    'Fórmulas e Funções Essenciais',
    'Formatação e Design de Planilhas',
    'Tabelas Dinâmicas Avançadas',
    'Gráficos Profissionais',
    'Macros e Automação (VBA)',
    'Análise de Dados Avançada',
    'Dashboard e Relatórios'
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Curso Mais Completo de Excel do Mercado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvido por especialistas com mais de 15 anos de experiência. 
            Aulas pré-gravadas que você pode assistir online ou baixar para seu dispositivo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Course Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              O que você vai aprender
            </h3>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <motion.div
                  key={module}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{module}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
              alt="Aprendendo Excel"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -top-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-2xl">40+</p>
              <p className="text-sm">Horas de conteúdo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
