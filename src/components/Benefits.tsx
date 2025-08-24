import React from 'react';
import { DollarSign, Clock, Trophy, Users, Download, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Aumente seu salário',
      description: 'Profissionais com Excel avançado ganham até 40% mais',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Economize tempo',
      description: 'Automatize tarefas e seja 10x mais produtivo',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'Destaque-se no mercado',
      description: 'Seja o profissional mais requisitado da sua área',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Impressione sua equipe',
      description: 'Crie relatórios e dashboards profissionais',
      color: 'purple'
    },
    {
      icon: Download,
      title: 'Acesso vitalício',
      description: 'Baixe as aulas e assista quando e onde quiser',
      color: 'red'
    },
    {
      icon: Play,
      title: 'Aulas pré-gravadas',
      description: 'Aprenda no seu ritmo, sem pressa ou pressão',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nosso curso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais que um curso, é um investimento no seu futuro profissional. 
            Aulas pré-gravadas de alta qualidade com total flexibilidade.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(benefit.color)}`}>
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-green-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Resultados comprovados</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">10.000+</p>
              <p className="text-green-100">Alunos formados</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-green-100">Taxa de satisfação</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">40%</p>
              <p className="text-green-100">Aumento médio salarial</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5★</p>
              <p className="text-green-100">Avaliação média</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
