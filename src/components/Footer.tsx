import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Excel Master</h3>
            <p className="text-gray-300 mb-4">
              A maior escola online de Excel do Brasil. Mais de 10.000 alunos 
              já transformaram suas carreiras conosco.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Youtube className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white">Sobre o Curso</a></li>
              <li><a href="#beneficios" className="text-gray-300 hover:text-white">Benefícios</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-white">Depoimentos</a></li>
              <li><a href="#precos" className="text-gray-300 hover:text-white">Preços</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Política de Reembolso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-green-400" size={16} />
                <span className="text-gray-300">contato@excelmaster.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" size={16} />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" size={16} />
                <span className="text-gray-300">São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Excel Master Academy. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">CNPJ: 12.345.678/0001-90</span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-400 text-sm">Pagamentos seguros</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
