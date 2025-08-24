import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      role: 'Analista Financeira',
      content: 'As aulas pré-gravadas me permitiram estudar no meu ritmo. Consegui uma promoção em 3 meses após terminar o curso!',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      role: 'Controller',
      content: 'Poder baixar as aulas foi fundamental. Estudei no transporte e em casa. As técnicas de automação me poupam 4 horas por dia!',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      role: 'Gestora de Projetos',
      content: 'Metodologia excepcional! Os dashboards que aprendi a criar impressionaram toda a diretoria.',
      rating: 5
    },
    {
      name: 'Carlos Eduardo',
      role: 'Coordenador Comercial',
      content: 'Saí do básico para o expert em 2 meses estudando nas horas vagas. Agora sou referência em Excel na minha empresa.',
      rating: 5
    },
    {
      name: 'Juliana Oliveira',
      role: 'Analista de Marketing',
      content: 'A qualidade das aulas é impressionante! Explicações claras e exemplos práticos que uso no dia a dia.',
      rating: 5
    },
    {
      name: 'Fernando Lima',
      role: 'Gerente de Operações',
      content: 'Curso completo e didático. A flexibilidade de assistir offline foi perfeita para minha rotina. Recomendo!',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 10.000 profissionais já transformaram suas carreiras. 
            Veja alguns depoimentos reais de quem já fez o curso.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl relative"
            >
              {/* Quote Icon */}
              <Quote className="text-green-600 mb-4" size={32} />
              
              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
