import React from 'react';
import { Building2, MapPin, Phone, Mail, Stethoscope, ShieldPlus, Award, Clock, Users, CheckCircle } from 'lucide-react';
import ProductCatalog from './components/ProductCatalog';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003F7E' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-16 px-4">
        <div className="absolute inset-0">
          <img
            src="assets\fundo.png"
            alt="Equipamentos médicos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003F7E]/90 to-[#003F7E]/80"></div>
        </div>

        <div className="relative text-center text-white z-10 max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            EQUIPAR
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-light">
            Produtos Médicos Hospitalares LTDA
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-6">
            Fundada em 2019, se destaca pela excelência no fornecimento de equipamentos médicos, hospitalares e odontológicos, além de serviços de assistência técnica especializada. A empresa tem como objetivo ser referência em qualidade e inovação, priorizando sempre a segurança e um atendimento personalizado aos seus clientes. O portfólio inclui produtos de alto desempenho, oferecendo soluções completas para hospitais, clínicas e consultórios odontológicos. Com uma equipe altamente capacitada e comprometida, a Equipar garante não apenas a entrega dos melhores produtos, mas também suporte técnico de confiança, assegurando o perfeito funcionamento dos equipamentos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#catalogo"
              className="bg-white text-[#003F7E] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Ver Catálogo
            </a>
            <a href="#contato" className="bg-white text-[#003F7E] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">    
              Fale Conosco</a>
          </div>
        </div>
      </section>


      {/* Diferenciais */}
      <section className="bg-gradient-to-b from-[#003F7E] to-[#002c5a] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 group bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Produtos Certificados</h3>
                <p className="text-blue-100 text-sm">Aprovados pela ANVISA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-blue-100 text-sm">Todo o Brasil</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Suporte Técnico</h3>
                <p className="text-blue-100 text-sm">24 horas por dia</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <ShieldPlus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Garantia Estendida</h3>
                <p className="text-blue-100 text-sm">Em todos os produtos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-24 px-4" style={{ backgroundColor: '#003F7E' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Nossa História</h2>
            <p className="text-blue-100 leading-relaxed">
              Desde 2019, a EQUIPAR tem se destacado no mercado de equipamentos médicos e hospitalares, 
              construindo uma reputação sólida baseada na qualidade dos produtos e excelência no atendimento. 
              Nossa missão é fornecer soluções que contribuam para o avanço da saúde no Brasil.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Qualidade Garantida</h3>
              <p className="text-blue-100">
                Trabalhamos apenas com marcas reconhecidas mundialmente, garantindo a procedência 
                e confiabilidade de todos os nossos produtos.
              </p>
            </div>
            <div className="text-center group bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                <ShieldPlus className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Suporte Especializado</h3>
              <p className="text-blue-100">
                Nossa equipe técnica altamente qualificada está disponível todos os momentos para 
                garantir o funcionamento adequado dos equipamentos.
              </p>
            </div>
            <div className="text-center group bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Experiência Comprovada</h3>
              <p className="text-blue-100">
                Mais de 1000 instituições de saúde atendidas em todo o Brasil, 
                com índice de satisfação superior a 98%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-24 px-4" style={{ backgroundColor: '#003F7E' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Nosso Catálogo</h2>
            <p className="text-blue-100">
              Oferecemos uma ampla gama de equipamentos médicos e hospitalares das melhores marcas do mercado. 
              Todos os produtos possuem certificação ANVISA e garantia estendida.
            </p>
          </div>
          <ProductCatalog />
        </div>
      </section>

      {/* Contato e Localização */}
      <section id="contato" className="py-24 px-4" style={{ backgroundColor: '#003F7E' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Entre em Contato</h2>
            <p className="text-blue-100">
              Estamos à disposição para esclarecer suas dúvidas, realizar orçamentos 
              e oferecer o melhor atendimento para suas necessidades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-8 text-white">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <Building2 className="w-6 h-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-100">EQUIPAR Produtos Médicos Hospitalares LTDA</span>
                </div>
                <div className="flex items-center group">
                  <MapPin className="w-6 h-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-100">Avenida Duque de Caxias, 179, no centro de Lunardelli</span>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-6 h-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <a href="tel:+551112345678" className="text-blue-100 hover:text-white transition-colors">+55 43 99967-4770</a>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-6 h-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <a href="mailto: equiparpr@hotmail.com" className="text-blue-100 hover:text-white transition-colors"> equiparpr@hotmail.com</a>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-blue-100">
                  <strong>Horário de Atendimento:</strong><br />
                  Segunda a Sexta: 08h às 18h<br />
                  Plantão 24h para suporte técnico
                </p>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.66217122405334!2d-51.74340064480203!3d-24.080571859897624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec4399146d6cb5%3A0x2a33c8e5ff94ec33!2sEQUIPAR%20PRODUTOS%20M%C3%89DICOS%20HOSPITALARES%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1745409055924!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                className="rounded-2xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#002c5a] to-[#001f40] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Sobre a EQUIPAR</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Referência no mercado de equipamentos médicos e hospitalares, 
                fornecendo soluções completas com qualidade e excelência.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-blue-100">
            <p>&copy; 2025 EQUIPAR Produtos Médicos Hospitalares LTDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
