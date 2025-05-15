import React, { useState, useEffect } from 'react';
import { Search, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Detector Fetal',
    image: 'assets/DETECTOR FETAL.png',
    description: 'Display LCD colorido; Projetado para caber no bolso; Design simples que facilita o uso; Alimentação por 2 pilhas alcalinas 1.5V;5 modos de operação; Modo Número de Frequência Cardíaca Fetal (FCF); Modo Gráfico de Frequência Cardíaca Fetal (FCF); Função de Estimulação Acústica; Modo de Índice de Massa Corporal (IMC); Modo Tendência IMC; Marca: MD; Modelo: BT - 220C;',
    category: 'Fetal',
    featured: true,
    specs: ['Display LCD colorido', ' 5 modos de operação', 'Modelo: BT - 220C', 'Marca: MD'],
    price: 'Sob consulta'
  },
  {
    id: 2,
    name: 'Doppler Fetal Portátil',
    image: 'assets/DOPPLER FETAL PORTÁTIL.png',
    description: 'Transdutor de alta sensibilidade; Compacto, leve e fácil operação; Alto-falante de alta performance; Design ergonômico e compartimento para transdutor; Entrada para fone de ouvido ou gravador de som ou computador; Tela de LCD; Bateria interna recarregável e carregador integrado; Desligamento automático após 1 minuto sem utilização; Certificado pelo INMETRO; Marca: MD; Modelo: FD - 200C;',
    category: 'Fetal',
    featured: true,
    specs: ['Tela de LCD', 'Modelo: FD - 200C', 'Marca: MD', 'Transdutor de alta sensibilidade'],
    price: 'Sob consulta'
  },
  {
    id: 3,
    name: 'Doppler Fetal de Mesa',
    image: 'assets/DOPPLER FETAL DE MESA.png',
    description: 'Transdutor de alta sensibilidade; Design ergonômico e compartimento para transdutor; Tela de LCD colorida; Porta USB para transmissão de dados; Display Touchscreen com curva da FHR; Visor 3,2" (65 x 50mm); Alarmes visuais/sonoros ajustáveis e programáveis; Alimentação bivolt automático; Certificado pelo INMETRO;',
    category: 'Fetal',
    featured: true,
    specs: ['Software de gerenciamento de dados', 'Modelo: FD - 300C', 'Marca: MD', 'Congelamento da imagem'],
    price: 'Sob consulta'
  },
  {
    id: 4,
    name: 'Doppler Fetal de Mesa Digital',
    image: 'assets/DOPPLER FETAL DE MESA DIGITAL.png',
    description: 'Transdutor de alta sensibilidade; Alto-falante de alta performance; Design ergonômico e compartimento para transdutor; Entrada para fone de ouvido ou gravador de som ou omputador; Visor 3,2" (65 x 50mm); Alimentação bivolt automático e através de baterias recarregáveis; Certificado pelo INMETRO;',
    category: 'Fetal',
    featured: false,
    specs: ['Tela de LCD', 'Marca: MD', 'Modelo: FD - 300D', 'Desligamento automático'],
    price: 'Sob consulta'
  },
  {
    id: 5,
    name: 'Detector Fetal',
    image: 'assets/DETECTOR FETAL 2.png',
    description: 'Exibição dos batimentos em formato numérico e curva; Grau de proteção IPX4; Alimentação com pilhas ou baterias recarregáveis;',
    category: 'Fetal',
    featured: false,
    specs: ['Display TFT LCD colorido', 'Modelo: JPD-100B', 'Marca: Jumper', 'Alimentação baterias recarregáveis'],
    price: 'Sob consulta'
  },
  {
    id: 6,
    name: 'Detector Fetal Portátil e Mesa',
    image: 'assets/DETECTOR FETAL PORTÁTIL E MESA.png',
    description: 'Exibição dos batimentos em formato numérico e curva; Grau de proteção IPX4; Alimentação com bateria de litio recarregável e bivolt automático;',
    category: 'Fetal',
    featured: true,
    specs: ['Display TFT LCD colorido', 'Modelo:JPD100E', 'Marca: Jumper', 'Alimentação com bateria de litio recarregável'],
    price: 'Sob consulta'
  },
  {
    id: 7,
    name: 'Dermatoscópio Mark II',
    image: 'assets/DERMATOSCÓPIO MARK II.png',
    description: 'Iluminação de Xenon Halógena 2.5V proporciona luz mais branca; Ajuste de foco e campo de visão com aumento de 10 vezes; Lente de contato com escala e sem escala; Iluminação branca e de alto brilho, com excelente nitidez da imagem; Cabo em metal com superfície recartilhada;',
    category: 'Dermatologia',
    featured: true,
    specs: ['Reostato para controle de intensidade da luz', ' Modelo MARK II', 'Marca: MD', 'Lente de contato'],
    price: 'Sob consulta'
  },
  {
    id: 8,
    name: 'Dermatoscópio Omni LED',
    image: 'assets/DERMATOSCÓPIO OMNI LED.png',
    description: 'Iluminação LED de alta intensidade de 5.600 Lux, com durabilidade de 10.000 horas; Lente de contato graduada; Cabeça em aço inox e latão cromado, proporciona melhor durabilidade, resistente a impactos e corrosões; Cabo em aço inox com revestimento termoplástico reforçado; Clip de bolso com acionamento on/off e desligamento automático;',
    category: 'Dermatologia',
    featured: true,
    specs: ['Leve, compacto e ergonômico', 'Modelo: OMNI', 'Marca: MD', 'Cabo em aço inox'],
    price: 'Sob consulta'
  },
  {
    id: 9,
    name: 'Dermatoscópio DL4W',
    image: 'assets/DERMATOSCÓPIO DL4W.png',
    description: 'Corpo resistente em aço inox; Iluminação polarizada e não polarizada; 24 LEDs (18 polarizados + 6 não polarizados); Lente com 30mm de diâmetro; Entrada para carregador Micro USB;',
    category: 'Dermatologia',
    featured: false,
    specs: ['Régua escala de 10mm', 'Modelo: DL4W', ' Marca: DERMLITE', 'Bateria recarregável de Lithium'],
    price: 'Sob consulta'
  },
  {
    id: 10,
    name: 'Eletrocardiógrafo Cardiotouch',
    image: 'assets/ELETROCARDIÓGRAFO CARDIOTOUCH.png',
    description: 'Impressão em formato A4 permite fácil visualização; Aquisição de 12 canais simultâneos; Touch Screen para fácil operação; Interpretação do ECG baseado no avançado código Minnesota;',
    category: 'Cardiologia',
    featured: true,
    specs: ['Tela de LCD colorida 4,3', 'Modelo: CARDIOTOUCH 3000', 'Marca: BIONET', 'Visualização do ECG'],
    price: 'Sob consulta'
  },
  {
    id: 11,
    name: 'Eletrocardiógrafo Digital',
    image: 'assets/ELETROCARDÓGRAFO DIGITAL.png',
    description: 'Tela colorida LCD de 7"; 3 canais / 12 derivações; Impressão em formato A4 através de software; Bateria de litio com autonomia de 18h;',
    category: 'Cardiologia',
    featured: false,
    specs: ['Bateria de litio', 'Modelo: 5503B', 'Marca: 3RAY', 'Tela colorida LCD'],
    price: 'Sob consulta',
  },
  {
    id: 12,
    name: 'Eletrocardiógrafo Digital',
    image: 'assets/ELETROCARDÓGRAFO DIGITAL 2.png',
    description: 'Uso adulto e pediátrico; Tela colorida LCD de 7"; 3/6/12 canais / 12 derivações; Impressão formato A4 integrada ao equipamento; Bateria de litio com autonomia de 18h;',
    category: 'Cardiologia',
    featured: true,
    specs: ['Bateria de litio"', 'Modelo: 5512B', 'Marca: 3RAY', 'Impressão formato A4'],
    price: 'Sob consulta'
  },
  {
    id: 13,
    name: 'Eletrocardiógrafo Digital',
    image: 'assets/ELETROCARDÓGRAFO DIGITAL 3.png',
    description: 'Tela touch Screen 10,1” colorida, removível; exibição de forma de onda de 9/12/15/18 derivações; 4 modos de amostragem; Congelamento de forma de onda de ECG na tela; Suporta transmissão sem fio via Wi-Fi e redes móveis; Base com impressora térmica embutida e conexão para impressora a laser externa; Carrinho para transporte com suporte para cabos e cesto para acessórios;',
    category: 'Cardiologia',
    featured: false,
    specs: ['Base com impressora térmica embutida', 'Modelo: T180', 'Marca: LEPU MEDICAL', 'Alça para transporte'],
    price: 'Sob consulta'
  },
  {
    id: 14,
    name: 'Eletrocardiógrafo 300G',
    image: 'assets/ELETROCARDÓGRAFO 300G.png',
    description: '12 Derivações simultâneas; Impressão térmica, modo manual/automático; Funções opcionais de FCG, HFECG, QTd, análise VFC; Conexão em PC para visualização da monitorização; Tensão bivolt 90/240V com bateria recarregável; Marca: CONTEC; Modelo: 300G;',
    category: 'Cardiologia',
    featured: true,
    specs: ['Marca: CONTEC', 'Modelo: 300G', '12 Derivações', 'Impressão térmica', 'Modo manual/automático', 'Bateria recarregável'],
    price: 'Sob consulta'
  },
  {
    id: 15,
    name: 'Estetoscópio Spirit',
    image: 'assets/ESTETOSCÓPIO SPIRIT.png',
    description: 'Composição das olivas em nano silicone; Olivas auriculares macias e resistentes, não possuem roscas; ou aparatos internos, ajustam-se anatomicamente ao canal auditivo; Sistema de anel não frio; Hastes com molas internas reforçadas e camada dupla em metal; Não contém látex; Tubo de PVC durável e resistente; Marca: MD; Modelo: III PRO adulto/pediátrico;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', 'Modelo: III PRO adulto/pediátrico', 'Olivas anatômicas', 'Anel não frio', 'Sem látex', 'Tubo de PVC resistente'],
    price: 'Sob consulta'
  },
  {
    id: 16,
    name: 'Estetoscópio Duplo',
    image: 'assets/ESTETOSCÓPIO DUPLO.png',
    description: 'Baixo peso; Diafragmas de alta sensibilidade; Tubo moldado em PVC de peça única para melhor transmissão do som; Marca: Premium; Modelo: Duplo adulto;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: Premium', 'Modelo: Duplo adulto', 'Alta sensibilidade', 'Leve', 'Tubo peça única'],
    price: 'Sob consulta'
  },
  {
    id: 17,
    name: 'Foco Cirúrgico LED Omni',
    image: 'assets/FOTÓFORO LED OMNI.png',
    description: 'Iluminação uniforme com estrutura multi-lentes que garante alto nível de luminância homogênea no campo luminoso; Design Coaxial para iluminação livre de sombras; Ângulo de luminância móvel; Indicador LED para status da bateria; Intensidade luminosa do LED ajustável entre 15.000 - 30.000 Lux; Iluminação LED com temperatura de cor de 6.000K; Tamanho do campo luminoso: 70mm (a 3 m); LED de alta potência com vida útil aproximada de 50.000 horas; Bateria Lítio-íon recarregável; Autonomia da bateria aproximada de 4 horas; Marca: MD;',
    category: 'Cirurgia',
    featured: true,
    specs: ['Marca: MD', 'Intensidade luminosa 30.000 Lux', 'LED vida útil 50.000h', 'Campo luminoso 70mm', 'Bateria recarregável'],
    price: 'Sob consulta'
  },
  {
    id: 18,
    name: 'Oftalmoscópio LED',
    image: 'assets/OFTALMOSCÓPIO LED.png',
    description: 'Iluminação LED de alta intensidade de 7.500 Lux, com durabilidade de 50.000 horas; Lentes com dioptrias de -20D a +20D, com marcador iluminado; Óptica selada livre de poeira; Cabo em aço inox com revestimento termoplástico; Seleção de 5 aberturas, com filtro verde livre de vermelho; Marca: MD;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', '7.500 Lux', 'Óptica selada', 'Filtro verde', 'Ajuste de lentes -20D a +20D'],
    price: 'Sob consulta'
  },
  {
    id: 19,
    name: 'Oftalmoscópio Xenon',
    image: 'assets/OFTALMOSCÓPIO XENON.png',
    description: 'Iluminação Xenon com ótima intensidade luminosa de 7.000 Lux e Índice de Reprodução de Cor (CRI) >99; Lentes com dioptrias de -20D a +20D, com marcador iluminado; Óptica selada livre de poeira; Cabo em aço inox com revestimento termoplástico; Seleção de 5 aberturas, com filtro verde livre de vermelho; Marca: MD;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', '7.000 Lux', 'CRI >99', 'Óptica selada', 'Filtro verde'],
    price: 'Sob consulta'
  },
  {
    id: 20,
    name: 'Oftalmoscópio Visio',
    image: 'assets/OFTALMOSCÓPIO VISIO.png',
    description: 'Lâmpada 2.5V ou 3.5V, de Xenon Halógena ou LED; Ajuste para 28 lentes; Dioptria: - 25 a + 40; Marcador iluminado; Cabeça em ABS resistente à impactos; Cabo em aço inox; Reostato para controle de intensidade da luz; Alimentação através de 2 pilhas alcalinas tipo "C" ou bateria recarregável (opcional); Seleção de 6 aberturas, com filtro verde livre de vermelho; Não contém látex; Marca: MD;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', '28 lentes', 'Reostato de luz', 'Bateria opcional', '6 aberturas'],
    price: 'Sob consulta'
  },
  {
    id: 21,
    name: 'Otoscópio Fibra Óptica',
    image: 'assets/OTOSCÓPIO FIBRA ÓPTICA.png',
    description: 'Iluminação LED de excelente intensidade luminosa de 50.000 Lux, com durabilidade de 50.000 horas; Transmissão da luz por fibra óptica, sem obstruções, sem reflexos e sem aquecimento; Cabeça em aço inox e ABS; Lente giratória, ampliação da imagem em 3 vezes; Cabo em aço inox com revestimento termoplástico reforçado, resistente a impactos e corrosões; Clip de bolso com acionamento on/off e desligamento automático ao ser fixado no bolso; Marca: MD;',
    category: 'Diagnóstico',
    featured: true,
    specs: ['Marca: MD', '50.000 Lux', 'Fibra óptica', 'Lente giratória'],
    price: 'Sob consulta'
  },
  {
    id: 22,
    name: 'Otoscópio Xenon Halógena',
    image: 'assets/OTOSCÓPIO XENON HALÓGENA.png',
    description: 'Iluminação Xenon com ótima intensidade luminosa de 30.000 Lux e Índice de Reprodução de Cor (CRI) >99; Transmissão da luz por fibra óptica, sem obstruções, sem reflexos e aquecimento; Cabeça em aço inox e ABS; Lente giratória, ampliação da imagem em 3 vezes; Cabo em aço inox com revestimento termoplástico reforçado, resistente a impactos e corrosões; Clip de bolso com acionamento on/off e desligamento automático ao ser fixado no bolso; Marca: MD;',
    category: 'Diagnóstico',
    featured: true,
    specs: ['Marca: MD', '30.000 Lux', 'Fibra óptica', 'Lente giratória'],
    price: 'Sob consulta'
  },
  {
    id: 23,
    name: 'Otoscópio Recarregável',
    image: 'assets/OTOSCÓPIO RECARREGÁVEL.png',
    description: 'Iluminação LED de excelente intensidade luminosa de 50.000 Lux, com durabilidade de 50.000 horas; Transmissão da luz por fibra óptica, sem obstruções, sem reflexos e sem aquecimento; Cabeça em aço inox e ABS; Lente giratória, ampliação da imagem em 3 vezes; Cabo em aço inox com revestimento termoplástico reforçado, resistente a impactos e corrosões; Clip de bolso com acionamento on/off e desligamento automático ao ser fixado no bolso; Marca: MD;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', '50.000 Lux', 'Fibra óptica', 'Lente giratória', 'Bateria recarregável'],
    price: 'Sob consulta'
  },
  {
    id: 24,
    name: 'Otoscópio Mini',
    image: 'assets/OTOSCÓPIO MINI.png',
    description: 'Iluminação (Incluso 02 Lâmpadas); Temperatura de Cor: 3.500 K (Kelvin) – Branco Quente; Vida útil: 20.000 h (horas-mínimas); Lentes com ampla Visão e Zoom com ampliação de 2,5 vezes; Alimentação através de 2 pilhas tamanho AA (Não Inclusas); Cabo com encaixes metálicos; Acompanha bolsa para armazenamento e transporte; Marca: MISSOURI;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MISSOURI', 'Zoom de 2,5x', 'Vida útil 20.000h', 'Lâmpadas inclusas'],
    price: 'Sob consulta'
  },
  {
    id: 25,
    name: 'Otoscópio Mini 2',
    image: 'assets/OTOSCÓPIO MINI 2.png',
    description: 'Leve e compacto; Iluminação (Incluso 02 Lâmpadas); Temperatura de Cor: 3.000 K (Kelvin) – Branco Quente; Vida útil: 20.000 h (horas-mínimas); Lentes com ampla Visão e Zoom com ampliação de 2,5 vezes; Alimentação através de 2 pilhas tamanho AA (Não Inclusas); Cabo com encaixes metálicos; Acompanha bolsa para armazenamento e transporte; Marca: MISSOURI;',
    category: 'Diagnóstico',
    featured: true,
    specs: ['Marca: MISSOURI', 'Zoom de 2,5x', 'Vida útil 20.000h', 'Lâmpadas inclusas'],
    price: 'Sob consulta'
  },
  {
    id: 26,
    name: 'Oxímetro de Pulso',
    image: 'assets/OXÍMETRO DE PULSO.PNG',
    description: 'Sensores para uso adulto, pediátrico e neonatal; Tela colorida; Desligamento automático; Tecnologia MoveOxy SPO2 anti movimento; Com suporte de mesa; Bateria de Litio recarregável com carregador integrado; Marca: LEPU; Modelo: PC 66B;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: LEPU', 'Modelo: PC 66B', 'Tela colorida', 'Bateria recarregável', 'Suporte de mesa', 'Tecnologia MoveOxy'],
    price: 'Sob consulta'
  },
  {
    id: 27,
    name: 'Oxímetro de Pulso Portátil e Mesa',
    image: 'assets/OXÍMETRO DE PULSO POTÁTIL E MESA.PNG',
    description: 'Sensores para uso adulto, pediátrico e neonatal; Tela colorida rotacional; Desligamento automático; Tecnologia MoveOxy SPO2 anti movimento; Capa de proteção; Dispositivo retrátil, acomodação em superfícies planas; Base de mesa; Entrada para termômetro; Transmissão de dados através de rede sem fio; Medição por infravermelho; Marca: CREATIVE; Modelo: SP 20;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: CREATIVE', 'Modelo: SP 20', 'Tela rotacional', 'Tecnologia MoveOxy', 'Transmissão sem fio', 'Medição infravermelha'],
    price: 'Sob consulta'
  },
  {
    id: 28,
    name: 'Oxímetro de Dedo',
    image: 'assets/OXÍMETRO DE DEDO.png',
    description: 'Uso adulto; Pequeno, leve e fácil de transportar; Leitura de 2 parâmetros: SPO2 e frequência cardíaca; Desligamento automático para economizar bateria; Certificado Anvisa e Inmetro; Marca: YONKER; Modelo: YK 81 A;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: YONKER', 'Modelo: YK 81 A', 'Leitura SPO2 e frequência cardíaca', 'Leve e compacto', 'Desligamento automático'],
    price: 'Sob consulta'
  },
  {
    id: 29,
    name: 'Oxímetro de Mesa',
    image: 'assets/OXÍMETRO DE MESA.PNG',
    description: 'Visor LCD colorido de 7”; Alarmes sonoros ajustáveis e programáveis; Funcionamento por bateria e energia AC; Porta de rede para comunicação com computador; Opções de sensores adulto, pediátrico e neonatal; Marca: MD; Modelo: VS 2000E;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', 'Modelo: VS 2000E', 'Visor LCD 7”', 'Alarmes sonoros', 'Sensores adulto, pediátrico e neonatal', 'Função AC e bateria'],
    price: 'Sob consulta'
  },
  {
    id: 30,
    name: 'Oxímetro de Dedo',
    image: 'assets/OXÍMETRO DE DEDO 2.png',
    description: 'Tecnologia Artery Check; Leve, compacto e portátil; Capacidade para uso contínuo em aproximadamente 16 horas; Desligamento automático; Alerta visual e sonoro; Tela rotacional; Transferência dos dados de medição via Bluetooth; Marca: MD; Modelo: SB 210;',
    category: 'Diagnóstico',
    featured: true,
    specs: ['Marca: MD', 'Modelo: SB 210', 'Tecnologia Artery Check', 'Uso contínuo por 16 horas', 'Transferência via Bluetooth'],
    price: 'Sob consulta'
  },
  {
    id: 31,
    name: 'Oxímetro de Dedo',
    image: 'assets/OXÍMETRO DE DEDO 3.png',
    description: 'Visor LED em 7 segmentos com alto nível de brilho; Leve, Compacto e Portátil; Capacidade para uso de até 16 horas; Alimentação através de 02 (duas) pilhas alcalinas "AAA"; Desligamento automático; Marca: MD; Modelo: SB 100;',
    category: 'Diagnóstico',
    featured: false,
    specs: ['Marca: MD', 'Modelo: SB 100', 'Visor LED 7 segmentos', 'Uso contínuo por 16 horas', 'Desligamento automático'],
    price: 'Sob consulta'
  }
];

const categories = ['Todos', 'Fetal', 'Dermatologia', 'Cardiologia', 'Diagnóstico', 'Cirurgia'];

function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const whatsappNumber = '+5543999674770';

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesFeatured = !showFeaturedOnly || product.featured;
      return matchesSearch && matchesCategory && matchesFeatured;
    });
    setFilteredProducts(filtered);
    setVisibleProducts(12);
  }, [searchTerm, selectedCategory, showFeaturedOnly]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setVisibleProducts(prev => Math.min(prev + 12, filteredProducts.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProducts.length]);

  interface GetWhatsAppLink {
    (productName: string): string;
  }

  const getWhatsAppLink: GetWhatsAppLink = (productName) => {
    const message = encodeURIComponent(`Olá, gostaria de uma cotação para o produto: ${productName}`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div>
      <div className="mb-8 space-y-4 bg-white/10 p-6 rounded-2xl shadow-lg">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/5 text-white placeholder-white/60"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/5 text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-[#003F7E]">{category}</option>
              ))}
            </select>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500 bg-white/5 border-white/20"
              />
              <span className="text-white">Produtos em Destaque</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="bg-white/10 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
            <div className="relative w-full bg-[#003c75] ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-80 object-contain rounded-lg shadow-sm"
              />
              {product.featured && (
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Destaque
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <div className="text-sm text-blue-300 font-semibold mb-1">{product.category}</div>
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-blue-100 line-clamp-3">{product.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="bg-white/5 px-3 py-1 rounded-full text-sm text-blue-200">
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="text-lg font-semibold text-white mt-4">{product.price}</div>
              </div>
              <div className="flex space-x-3 mt-6">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Info className="w-5 h-5" />
                  <span>Solicitar Cotação</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-white/10 rounded-2xl shadow-lg">
          <p className="text-white">Nenhum produto encontrado com os filtros selecionados.</p>
        </div>
      )}

      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleProducts(prev => Math.min(prev + 12, filteredProducts.length))}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Carregar Mais
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCatalog;