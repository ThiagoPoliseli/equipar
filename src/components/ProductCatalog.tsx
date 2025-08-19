import React, { useState, useEffect } from "react";
import { Search, Info } from "lucide-react";

const products = [ 
  //Amalgamador:

  {
    id: 1,
    name: "Yg-100",
    image: "assets/id_32-removebg-preview.png",
    description:
      "Painel digital de fácil comando; Tampa protetora transparente para melhor visualização; Mistura homogênea com rotação de 4.200 rpm (+/-10%); Ajuste de tempo com memória; Design moderno e silencioso; Fácil limpeza; Indicado para cápsulas de amálgama pré-dosificadas; ",
    category: "Amalgamador",
    featured: true,
    specs: ["Modelo: Yg-100", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Analisador

  {
    id: 2,
    name: "Analisador Bioquímico Automático MaxBio Auto 300 Plus",
    image: "assets/id_33-removebg-preview.png",
    description:
      "Analisador químico de bancada compacto e potente; Automação completa com alta precisão nos resultados; Resultados rápidos em poucos segundos; Ideal para laboratórios de pequeno e médio porte; Desempenho robusto com excelente custo-benefício;Combinação perfeita entre tamanho e eficiência;",
    category: "Analisador",
    featured: false,
    specs: ["Modelo: 300 Plus", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 3,
    name: "Analisador Bioquímico Automático MaxBio 300",
    image: "assets/id_34-removebg-preview.png",
    description:
      "Analisador bioquímico semiautomático com sistema aberto; Compatível com reagentes de diversas marcas; Tela touch com interface intuitiva e fácil de programar; Armazena métodos analíticos e resultados de controle de qualidade (CQ); Ideal para laboratórios que buscam versatilidade e praticidade; Desempenho confiável com ótimo custo-benefício; ",
    category: "Analisador",
    featured: false,
    specs: ["Modelo: MaxBio 300", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 4,
    name: "Analisador Bioquímico Automático MaxBio Touch",
    image: "assets/id_35-removebg-preview.png",
    description:
      "Analisador bioquímico semiautomático com sistema aberto;  Tela touch screen com interface moderna e intuitiva; Incubadora interna acoplada ao equipamento; Compatível com reagentes de diversas marcas; Armazena métodos analíticos e resultados de CQ; Fácil programação e uso prático no dia a dia; Ideal para laboratórios que buscam eficiência e versatilidade; ",
    category: "Analisador",
    featured: false,
    specs: ["Modelo: Touch", "Marca: MedMax"],
    price: "Sob consulta",
  },


  //Aparelho:

  {
    id: 5,
    name: "Bpap-YH 730 ",
    image: "assets/id_36-removebg-preview.png",
    description:
      "O dispositivo que fornece dois níveis de pressão positiva de ventilação; Permite a manutenção do fluxo aéreo, expansão pulmonar, melhora o desconforto respiratório e promove trocas gasosas efetivas garantindo melhor oxigenação e eliminação adequada de gás carbônico (CO2); Possui 5 modos ventilatórios CPAP (Somente pressão fica) S (Espontâneo), ST(espontâneo/a tempo), T(tempo), e VGPS (Ventilação Híbrida - volume garantindo por pressão de suporte); ",
    category: "Aparelho",
    featured: false,
    specs: ["Modelo: YH 730", "Marca: Gaslive"],
    price: "Sob consulta",
  },

  {
    id: 6,
    name: "Cpap - YH 560 ",
    image: "assets/id_37-removebg-preview.png",
    description:
      "O dispositivo conta com funções clássicas de conforto como rampa, graduada de 0 a 45 minutos; Nível de pressão até que atinja o valor prescrito; Possui alívio expiratório denominado de FPS; Graduado de 0 a 3 cmH20 que fornece conforto e alívio no momento de expiração;; ",
    category: "Aparelho",
    featured: false,
    specs: ["Modelo: YH 560", "Marca: Gaslive"],
    price: "Sob consulta",
  },

  {
    id: 7,
    name: " kit Cpap Portátil ",
    image: "assets/id_38-removebg-preview.png",
    description:
      "O airMini é o menor CPAP disponível no mercado brasileiro, ideal para usar em casa ou em viagens, oferecendo conforto e a conveniência de ser portátil; Pequeno, pesando apenas 300 gramas, possui umidificação eficiente sem água, alta qualidade e controle com terapia no aplicativo AirMini; Análise dos últimos 30 dias; Horas de uso; Eventos de apneias por hora; Índice de fuga de ar na máscara; ",
    category: "Aparelho",
    featured: true,
    specs: ["Modelo: AirMini", "Marca: Resmed"],
    price: "Sob consulta",
  },

  //Autoclave:

  {
    id: 8,
    name: "Autoclave 21L",
    image: "assets/id_39-removebg-preview.png",
    description:
      "Bivolt automático; Programa único de esterilização; Temperatura e pressão exibidos por LEDs; Desaeração e despressurização automática; Capacidade 21 litros;  Teclado de controle na cor azul; Tampa e câmara em aço inox, que facilita a limpeza; 3 bandejas em alumínio anodizado; Secagem eficiente com porta entreaberta; ",
    category: "Autoclave",
    featured: true,
    specs: ["Modelo: Vitale 21L", "Marca: Critófoli"],
    price: "Sob consulta",
  },

  {
    id: 9,
    name: "Autoclave 21L",
    image: "assets/id_40-removebg-preview.png",
    description:
      "Design moderno; Tampa e câmara em aço inox; Secagem eficiente; Sistema eletrônico de cruzamento; Sistema eletrônico de controle de potência; Sistema de ajuste de altitude; Tecla cancela no painel; Função auto diagnóstico; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: Digitale 21L", "Marca: Bs"],
    price: "Sob consulta",
  },

  {
    id: 10,
    name: "Autoclave 54L",
    image: "assets/id_41-removebg-preview.png",
    description:
      "Capacidade 54 L; 11 Sistemas de Segurança;Sistema de pré-aquecimento para otimizar o tempo; Secagem automática com a porta fechada; Tampa e câmara horizontal em aço inoxidável AISI 304; Abertura e travamento da porta motorizado; Abastecimento automático com reservatório externo de água destilada; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: Vitale 254L", "Marca: Critófoli"],
    price: "Sob consulta",
  },

  {
    id: 11,
    name: "Autoclave 7L",
    image: "assets/id_42-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 7Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },
  {
    id: 12,
    name: "Autoclave 12L",
    image: "assets/id_43-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 12Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },
  {
    id: 13,
    name: "Autoclave 21L",
    image: "assets/id_44-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 21Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  {
    id: 14,
    name: "Autoclave 25L",
    image: "assets/id_45-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 25Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  {
    id: 15,
    name: "Autoclave 30L",
    image: "assets/id_46-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 30Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },
  {
    id: 16,
    name: "Autoclave 40L",
    image: "assets/id_47-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 40Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  {
    id: 17,
    name: "Autoclave 42L",
    image: "assets/id_48-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 42Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  {
    id: 18,
    name: "Autoclave 50L",
    image: "assets/id_49-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 50Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  {
    id: 19,
    name: "Autoclave 54L",
    image: "assets/id_50-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 54Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },
  {
    id: 20,
    name: "Autoclave 60L",
    image: "assets/id_51-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 60Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  {
    id: 21,
    name: "Autoclave 75L",
    image: "assets/id_52-removebg-preview.png",
    description:
      "Esterilização Profissional; Segurança Total; Alta performance; Ciclo rápido de esterilização; Painel digital intuitivo e fácil de usar; Certificação Anvisa; Design compacto; ",
    category: "Autoclave",
    featured: false,
    specs: ["Modelo: 75Litros", "Marca: Digitale"],
    price: "Sob consulta",
  },

  //Balança:

  {
    id: 22,
    name: "Balança Infantil",
    image: "assets/id_53-removebg-preview.png",
    description: "Modelo: Baby; Marca: Ramuza;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: Baby", "Marca: Ramuza"],
    price: "Sob consulta",
  },

  {
    id: 23,
    name: "Balança Infantil",
    image: "assets/id_54-removebg-preview.png",
    description: "Modelo: BabyCare; Marca: Balmak;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: BabyCare", "Marca: Balmak"],
    price: "Sob consulta",
  },

  {
    id: 24,
    name: "Balança Infantil",
    image: "assets/id_55-removebg-preview.png",
    description: "Modelo: 109; Marca: Balmak;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: 109", "Marca: Balmak"],
    price: "Sob consulta",
  },

  {
    id: 25,
    name: "Balança Adulto",
    image: "assets/id_56-removebg-preview.png",
    description: "Modelo: Glass 10; Marca: G-Tech;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: Glass 10", "Marca: G-Tech"],
    price: "Sob consulta",
  },

  {
    id: 26,
    name: "Balança Adulto",
    image: "assets/id_57-removebg-preview.png",
    description: "Modelo: Myfit+; Marca: Balmak;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: Myfit+", "Marca: Balmak"],
    price: "Sob consulta",
  },

  {
    id: 27,
    name: "Balança Adulto",
    image: "assets/id_58-removebg-preview.png",
    description: "Modelo: EB-9010; Marca: Bioland;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: EB-9010", "Marca: Bioland"],
    price: "Sob consulta",
  },

  {
    id: 28,
    name: "Balança Digital",
    image: "assets/id_59-removebg-preview.png",
    description: "Balança Digital com Régua Antropométrica; Marca: Balmak;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: BK-F/FA", "Marca: Balmax"],
    price: "Sob consulta",
  },

  {
    id: 29,
    name: "Balança Digital",
    image: "assets/id_60-removebg-preview.png",
    description: "Modelo: Balança Farmácia; Marca: Balmak;",
    category: "Balança",
    featured: false,
    specs: ["Modelo: Balança Farmácia", "Marca: Balmak"],
    price: "Sob consulta",
  },

  {
    id: 30,
    name: "Balança Antropométrica",
    image: "assets/id_61-removebg-preview.png",
    description:
      "Balança mecânica de plataforma com régua antropométrica; Capacidade de até 200 kg ",
    category: "Balança",
    featured: false,
    specs: ["Modelo:104-A", "Marca: Balmak"],
    price: "Sob consulta",
  },

  {
    id: 31,
    name: "Balança Digital Premium",
    image: "assets/id_64-removebg-preview.png",
    description:
      "Balança digital para pesar e medir pessoas com estadiômetro opcional;Capacidade de 150 kg, 200 kg ou 300 kg com divisões de 50 g ou 100 g;  Régua antropométrica retrátil em alumínio anodizado (até 2 m com graduação de 0,5 cm); Gancho para bolsas; Display LED vermelho com 6 dígitos de fácil leitura; Fonte automática “Full Range” ; Estrutura robusta em aço carbono com plataforma 40 × 40 cm; ",
    category: "Balança",
    featured: true,
    specs: ["Modelo: Premium BK-FA", "Marca: Balmak"],
    price: "Sob consulta",
  },

  //Berço:

  {
    id: 32,
    name: "Berço Aquecido GRN® Neosolution ",
    image: "assets/id_65-removebg-preview.png",
    description:
      " Painel frontal com teclas de simples toque; Leito tipo mesa rádio transparente para colocação do chassi de raios x com abas laterais rebatíveis; Sistema de autoteste; Relógio de Apgar incorporado; Ampla linha de acessórios opcionais; ",
    category: "Berço",
    featured: true,
    specs: ["Modelo: GRN® Neosolution", "Marca: Gigante Produtos Médicos"],
    price: "Sob consulta",
  },

  {
    id: 33,
    name: "Berço Pediátrico Esmaltado",
    image: "assets/id_66-removebg-preview.png",
    description:
      "Estrutura em tubo de aço carbono redondo de ¾ x 1.20mm; Com prateleira em aço carbono; Cesto removível em acrílico transparente; Permite movimento trendelemburg e proclive; Rodízios de 2” de diâmetro; Acabamento pintura epóxi, com tratamento anti-ferruginoso; Dimensão aproximada: 750 x 400 x 800 mm; Dimensão aproximada Cuna Acrílica: 730 x 340 x 190 mm;   ",
    category: "Berço",
    featured: false,
    specs: ["Modelo: Pediátrico", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  //Bioimpedância:

  {
    id: 34,
    name: "Bioimpedância Tetrapolar com Ângulo de Fase ",
    image: "assets/id_67-removebg-preview.png",
    description: "Modelo: Bia1011af; Marca: Sanny;",
    category: "Bioimpedância",
    featured: true,
    specs: ["Modelo: Bia1011af", "Marca: Sanny"],
    price: "Sob consulta",
  },

  //Bisturi:

  {
    id: 35,
    name: "Bisturi Elétrico Precision TC3 / 300W Deltronix",
    image: "assets/id_68-removebg-preview.png",
    description:
      " Microprocessado de última geração;  Projetado para cirurgias de baixa, média e alta complexidade; Painel moderno à prova d’água com design intuitivo; Memória para até 120 procedimentos distintos; Seleção automática de placa de retorno e sistema de alarme MRPGRAPH®; Tensão de entrada universal (100–240 Vac, 50/60 Hz); ",
    category: "Bisturi",
    featured: true,
    specs: ["Modelo: Precision TC3-300W", "Marca: Deltronix"],
    price: "Sob consulta",
  },

  //Bomba:

  {
    id: 36,
    name: "Bomba De Vácuo",
    image: "assets/id_69-removebg-preview.png",
    description:
      "Fabricada em aço inox resistente; Atende até 4 consultórios ao mesmo tempo; Motor de 1HP com protetor térmico (130 °C); abinete metálico para proteção do motor; Alta vazão de ar e potência de sucção; Ajuste externo de fluxo de água;  Conexões para mangueiras de ¾; Kit sucção com pintura eletrostática; ",
    category: "Bomba",
    featured: true,
    specs: ["Modelo: Konden-Pump", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 37,
    name: " Bomba de Infusão",
    image: "assets/id_70-removebg-preview.png",
    description:
      " Display LCD de 2,8 polegadas; Sistema: Peristáltico Linear; Alarme por oclusão perto do fim, bolhas de ar, porta aberta, falha do motor, finalizando perfusão, aviso de infusão, estado KVO, bateria fraca, falta de energia, falha de pressão, falha na porta e falta de comunicação; Compatível com equipos universaris própios para bomba de infusão a base de silicone; Bateria: Lítio recarregável autonomia de aproximadamente 4 horas;",
    category: "Bomba",
    featured: false,
    specs: ["Modelo: SP750", "Marca: MedMax"],
    price: "Sob consulta",
  },

  //Broca:

  {
    id: 38,
    name: "Brocas Carbide",
    image: "assets/id_71-removebg-preview.png",
    description:
      "Indicadas para uso em contra-ângulo, as Brocas CA são essenciais para procedimentos odontológicos de alta precisão e desempenho; Marca: Fava e Microdont;",
    category: "Broca",
    featured: false,
    specs: ["Marca: Fava e Microdont"],
    price: "Sob consulta",
  },

  {
    id: 39,
    name: "Brocas Gates e Largos",
    image: "assets/id_72-removebg-preview.png",
    description:
      "São essenciais para procedimentos edodôntico, proporcionando acesso e modelagem dos canais radiculares com ediciência e segurança; Marca: Microdont;",
    category: "Broca",
    featured: true,
    specs: ["Marca: Microdont"],
    price: "Sob consulta",
  },

  //Cadeira:

  {
    id: 40,
    name: "Poltrona Para Coleta de Sangue",
    image: "assets/id_73-removebg-preview.png",
    description:
      "Reclinável em até 04 posições; Indicada para hemodiálise, quimioterapia e coleta de sangue; Estrutura em tubo de aço redondo de 1” x 1.20mm e 1” ¼ x 1.20mm; Encosto, assento e descansa pés estofados em espuma D26R com 70mm de espessura, revestidos em Courvim; Movimentos simultâneos do encosto e descansa pés comandados por meio de alavanca lateral; Apoios dos braços em chapa de aço inox com altura ajustável por meio manípulos laterais; Com suporte de soro altura regulável; Acabamento em pintura epóxi com tratamento antiferruginoso; Dimensão aprox.: 1600(C) x 750(L) x 550(A) mm; Capacidade Aprox.: Até 150Kg; Largura Assento (Interno): 530 mm; ",
    category: "Cadeira",
    featured: true,
    specs: ["Modelo: Coleta de Sangue", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  {
    id: 41,
    name: "Cadeira Para coleta de Sangue",
    image: "assets/id_74-removebg-preview.png",
    description:
      "Apoio para o braço estofado e com altura regulável; Estrutura tubular em aço pintada com tinta epoxi; Pés com ponteira de borracha; Assento e encosto estofados com espuma densidade 23 espessura 4cm;  ",
    category: "Cadeira",
    featured: false,
    specs: ["Modelo: Com Braço Estofado", "Marca: Salutem"],
    price: "Sob consulta",
  },

  {
    id: 42,
    name: "Poltrona Reclinável De Descanso",
    image: "assets/id_75-removebg-preview.png",
    description:
      "Estrutura em tubo de aço redondo de 1” x 1.20mm e 1” ¼ x 1.20mm; Encosto, assento, descansa pés e braços estofados com espuma D26 revestido em Courvim; Movimentos simultâneos do encosto, descansa pés e braços comandados por meio de alavanca lateral; Reclinável em até 04 posições; Acabamento em pintura epóxi com tratamento antiferruginoso; Dimensão aprox.: 1600(C) x 750(L) x 550(A) mm – Capacidade Aprox.: Até 150Kg; Largura Assento (Interno): 530 mm;  ",
    category: "Cadeira",
    featured: false,
    specs: ["Modelo: Reclinável", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  //Cama:

  {
    id: 43,
    name: "Cama Fowler",
    image: "assets/id_76-removebg-preview.png",
    description:
      'Elevação Cabeceira; Peseira; Grades Injetadas; Estrado articulado em chapa de aço; Leito construído com longarinas de aço perfilados em U;Acompanha rodízios de 5", com freio de dupla ação em diagonal.; Cama Fowler com cabeceira e peseira removíveis em polietileno injetado ABS termoplástico de alta resistência; ',
    category: "Cama",
    featured: true,
    specs: ["Modelo: S-8800 C Com Cabeceira Móvel", "Marca: Salutem"],
    price: "Sob consulta",
  },

  //Caneta:

  {
    id: 44,
    name: "Caneta De Alta Rotação",
    image: "assets/id_77-removebg-preview.png",
    description:
      "Rolamentos em cerâmica com anéis de borracha para baixo ruído; Conexão tipo Borden (2 furos) – ISO 9168; Consumo de ar: 40 ± 2 l/min; Consumo de água: 0,02 l/min; Autoclavável a 135 °C por até 1000 ciclos; ",
    category: "Caneta",
    featured: true,
    specs: ["Modelo: 1500 Led", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 45,
    name: "Caneta De Baixa Rotação",
    image: "assets/id_78-removebg-preview.png",
    description:
      "Micromotor de baixa rotação; Acoplamento INTRA (universal); Spray externo; Giro de 360°; Encaixe Borden (2 furos); Rotação de até 20.000 rpm; Regulagem de velocidade por anel (horário e anti-horário); Autoclavável a 135 °C por até 1000 ciclos; ",
    category: "Caneta",
    featured: false,
    specs: ["Modelo: 1000", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Cardiologia

   {
    id: 46,
    name: "Eletrocardiógrafo Cardiotouch",
    image: "assets/ELETROCARDIÓGRAFO CARDIOTOUCH.png",
    description:
      "Impressão em formato A4 permite fácil visualização; Aquisição de 12 canais simultâneos; Touch Screen para fácil operação; Interpretação do ECG baseado no avançado código Minnesota;",
    category: "Cardiologia",
    featured: true,
    specs: [
      "Tela de LCD colorida 4,3",
      "Modelo: CARDIOTOUCH 3000",
      "Marca: BIONET",
      "Visualização do ECG",
    ],
    price: "Sob consulta",
  },

    {
    id: 47,
    name: "Eletrocardiógrafo Digital",
    image: "assets/ELETROCARDÓGRAFO DIGITAL.png",
    description:
      'Tela colorida LCD de 7"; 3 canais / 12 derivações; Impressão em formato A4 através de software; Bateria de litio com autonomia de 18h;',
    category: "Cardiologia",
    featured: false,
    specs: [
      "Bateria de litio",
      "Modelo: 5503B",
      "Marca: 3RAY",
      "Tela colorida LCD",
    ],
    price: "Sob consulta",
  },

   {
    id: 48,
    name: "Eletrocardiógrafo Digital",
    image: "assets/ELETROCARDÓGRAFO DIGITAL 2.png",
    description:
      'Uso adulto e pediátrico; Tela colorida LCD de 7"; 3/6/12 canais / 12 derivações; Impressão formato A4 integrada ao equipamento; Bateria de litio com autonomia de 18h;',
    category: "Cardiologia",
    featured: false,
    specs: [
      'Bateria de litio"',
      "Modelo: 5512B",
      "Marca: 3RAY",
      "Impressão formato A4",
    ],
    price: "Sob consulta",
  },

  {
    id: 49,
    name: "Eletrocardiógrafo Digital",
    image: "assets/ELETROCARDÓGRAFO DIGITAL 3.png",
    description:
      "Tela touch Screen 10,1” colorida, removível; exibição de forma de onda de 9/12/15/18 derivações; 4 modos de amostragem; Congelamento de forma de onda de ECG na tela; Suporta transmissão sem fio via Wi-Fi e redes móveis; Base com impressora térmica embutida e conexão para impressora a laser externa; Carrinho para transporte com suporte para cabos e cesto para acessórios;",
    category: "Cardiologia",
    featured: false,
    specs: [
      "Base com impressora térmica embutida",
      "Modelo: T180",
      "Marca: LEPU MEDICAL",
      "Alça para transporte",
    ],
    price: "Sob consulta",
  },

  {
    id: 50,
    name: "Eletrocardiógrafo 300G",
    image: "assets/ELETROCARDÓGRAFO 300G.png",
    description:
      "12 Derivações simultâneas; Impressão térmica, modo manual/automático; Funções opcionais de FCG, HFECG, QTd, análise VFC; Conexão em PC para visualização da monitorização; Tensão bivolt 90/240V com bateria recarregável; Marca: CONTEC; Modelo: 300G;",
    category: "Cardiologia",
    featured: false,
    specs: [
      "Marca: CONTEC",
      "Modelo: 300G",
      "12 Derivações",
      "Impressão térmica",
      "Modo manual/automático",
      "Bateria recarregável",
    ],
    price: "Sob consulta",
  },

  //Carro de Emergência:

  {
    id: 51,
    name: "Carro de Emergência Esmaltado",
    image: "assets/id_79-removebg-preview.png",
    description:
      "Com Suporte p/ Monitor; Estrutura reforçada em tubo de aço quadrado 25x25 x 1.20mm; Tampo em chapa de aço carbono de 0.80mm de espessura; 04 gavetas em chapa de aço sendo a 1ª com divisórias em acrílico; Sistema de lacre único para as 04 gavetas; Suporte giratório no tampo para acomodação de desfibrilador; Suporte para cilindro de O2; Filtro de linha com 5 tomadas; Suporte de soro 02 ganchos com regulagem de altura (T); Dimensão aproximada: 700 x 500 x 800 mm;   ",
    category: "Carro de Emergência",
    featured: true,
    specs: ["Modelo: Emergência", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  //Centrífuga:

  {
    id: 52,
    name: "Centrífuga Tdl-24C",
    image: "assets/id_80-removebg-preview.png",
    description:
      "Centrífuga compacta, leve e de alta resistência; Motor brushless DC: mais durável e silencioso; Baixo ruído com alta eficiência operacional; Ideal para análises de sangue e plasma; Uso em hospitais e laboratórios biológicos; Design moderno com grande capacidade e fácil manuseio; ",
    category: "Centrífuga",
    featured: true,
    specs: ["Modelo: TDL-24C", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 53,
    name: "Centrífuga SpinMax",
    image: "assets/id_81-removebg-preview.png",
    description:
      " Centrífuga prática e eficiente para uso laboratorial;  Ideal para preparo e processamento de amostras IN VITRO; Separa diferentes fases da amostra com precisão; Aplicável em diversos tipos de exames clínicos; Funcionamento simples e de alta performance; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: SpinMax 4000 BR", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 54,
    name: "Centrífuga Refrigerada De Alta Velocidade TGL-16M",
    image: "assets/id_82-removebg-preview.png",
    description:
      "Centrífuga de bancada de médio porte; Motor brushless (sem escova) silencioso e durável; Sistema de amortecimento com baixa vibração; Velocidade ajustável com controle eletrônico preciso; Ideal para procedimentos que exigem controle de temperatura; Preserva a qualidade técnica das amostras; Operação fácil e segura para uso clínico e laboratorial; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: TGL-16M", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 55,
    name: "Centrífuga TDL-5",
    image: "assets/id_83-removebg-preview.png",
    description:
      "Centrífuga robusta com estrutura completa e moderna; Motor brushless DC com acionamento direto; Baixa vibração e ruído, graças ao sistema de amortecimento especial; Alta precisão no controle de velocidade e tempo; Ideal para aplicações que exigem estabilidade e desempenho; Uso em laboratórios clínicos, hospitalares e de pesquisa;",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: TDL-5", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 56,
    name: "Centrífuga SH-120III",
    image: "assets/id_84-removebg-preview.png",
    description:
      "Centrífuga microematócrita de alta velocidade;  Indicada para separação e análise de pequenas amostras de sangue; Alta precisão na determinação de células sanguíneas; Eficiência elevada e peças de alta qualidade; Ideal para laboratórios clínicos e análises hematológicas; Compacta, confiável e com excelente desempenho; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: SH-120III", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 57,
    name: "Centrífuga SH-120",
    image: "assets/id_85-removebg-preview.png",
    description:
      "Centrifuga microematócrita de alta velocidade; Rotor do tipo disco; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: SH-120", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 58,
    name: "Centrífuga 80-2B",
    image: "assets/id_86-removebg-preview.png",
    description:
      "Centrífuga com baixa velocidade; Bancada de médio porte; Motor em carvão; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: 80-2B", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 59,
    name: "Centrífuga 80-2C",
    image: "assets/id_87-removebg-preview.png",
    description:
      "Centrífuga com baixa velocidade; Médio porte; Motor de indução; motor de indução; Modelo moderno; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: 80-2C", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 60,
    name: "Centrífuga 90-2",
    image: "assets/id_88-removebg-preview.png",
    description:
      " Centrífuga compacta, leve e resistente; Motor de escova fina com alta eficiência; Baixo ruído e design moderno; Indicada para análise qualitativa de sangue e plasma; Uso em hospitais e laboratórios biológicos; Tamanho pequeno, mas com grande capacidade; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: 90-2", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 61,
    name: "Banho Maria de Duas Bocas",
    image: "assets/id_89-removebg-preview.png",
    description:
      " Controle eletrônico de temperatura com alta precisão; Ajuste gradual da temperatura até 100 °C; Display digital de fácil visualização; Operação simples e eficiente;  Ideal para manter amostras em ambiente térmico controlado; Uso laboratorial em procedimentos que exigem estabilidade térmica; ",
    category: "Centrífuga",
    featured: false,
    specs: ["Modelo: Duas Bocas", "Marca: MedMax"],
    price: "Sob consulta",
  },

  //Cilindro de Alumínio:

  {
    id: 62,
    name: "Cilindro 1.0L",
    image: "assets/id_90-removebg-preview.png",
    description:
      " Capacidade hidráulica: 1.0L; Pressão de serviço: 153bar; Altura: 299mm; Diâmetro: 81.4mm; Rosca de entrada: 3/4”-16UNF-2B; Peso: 1.0kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA6", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 63,
    name: "Cilindro 1.7L",
    image: "assets/id_91-removebg-preview.png",
    description:
      " Capacidade hidráulica: 1.7L; Pressão de serviço: 139bar; Altura: 269.9mm; Diâmetro: 111.1mm; Rosca de entrada: 3/4”-16UNF-2B; Peso: 1.7kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA9", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 64,
    name: "Cilindro 2.8L",
    image: "assets/id_92-removebg-preview.png",
    description:
      " Capacidade hidráulica: 2.8L; Pressão de serviço: 139bar; Altura: 412.8mm; Diâmetro: 111.1mm; Rosca de entrada: 3/4”-16UNF-2B; Peso: 2.3kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA15", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 65,
    name: "Cilindro 4.1L",
    image: "assets/id_93-removebg-preview.png",
    description:
      " Capacidade hidráulica: 4,1L; Pressão de serviço: 207bar; Altura: 648mm; Diâmetro: 111.3mm; Rosca de entrada: 3/4”-16UNF-2B; Peso: 4.9kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: true,
    specs: ["Modelo: GWA32", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 66,
    name: "Cilindro 4.6L",
    image: "assets/id_94-removebg-preview.png",
    description:
      " Capacidade hidráulica: 4.6L; Pressão de serviço: 139bar; Altura: 641.4mm; Diâmetro: 111.1mm; Rosca de entrada: 3/4”-16UNF-2B; Peso: 3.4kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA24", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 67,
    name: "Cilindro 10.7L",
    image: "assets/id_95-removebg-preview.png",
    description:
      " Capacidade hidráulica: 10.7L; Pressão de serviço: 153bar; Altura: 596.9mm; Diâmetro: 184.2mm; Rosca de entrada: 1 1/8”-12UNF-2B; Peso: 10.3kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA60", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 68,
    name: "Cilindro 15.7L",
    image: "assets/id_96-removebg-preview.png",
    description:
      " Capacidade hidráulica: 15.7L; Pressão de serviço: 153bar; Altura: 835mm; Diâmetro: 184.2mm; Rosca de entrada: 1 1/8”-12UNF-2B; Peso: 13.7kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA90", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 69,
    name: "Cilindro 21.3L",
    image: "assets/id_97-removebg-preview.png",
    description:
      " Capacidade hidráulica: 21.3L; Pressão de serviço: 153bar; Altura: 922.3mm; Diâmetro: 203.2mm; Rosca de entrada: 1 1/8”-12UNF-2B; Peso: 17.9kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWAM", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 70,
    name: "Cilindro 26.1L",
    image: "assets/id_98-removebg-preview.png",
    description:
      " Capacidade hidráulica: 26.1L; Pressão de serviço: 207bar; Altura: 1057.9mm; Diâmetro: 218mm; Rosca de entrada: 1 1/8”-12UNF-2B; Peso: 29.3kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA200", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 71,
    name: "Cilindro 29.5L",
    image: "assets/id_99-removebg-preview.png",
    description:
      " Capacidade hidráulica: 29.5L; Pressão de serviço: 139bar; Altura: 1216mm; Diâmetro: 203.2mm; Rosca de entrada: 1 1/8”-12UNF-2B; Peso: 22kg; Norma: DOT-3AL / TC-3ALM; ",
    category: "Cilindro Alumínio",
    featured: false,
    specs: ["Modelo: GWA150", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  //Cilindro Aço:

  {
    id: 72,
    name: "Cilindro 5.0L",
    image: "assets/id_100-removebg-preview.png",
    description:
      " Capacidade hidráulica: 5L; Pressão de serviço: 200bar; Altura: 460mm; Diâmetro: 140mm; Rosca de entrada: 3/4”-14NGT ou 25E;Peso: 8.3kg;Norma: ISO9809-1; ",
    category: "Cilindro Aço",
    featured: false,
    specs: ["Modelo: GWM5", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 73,
    name: "Cilindro 7.0L",
    image: "assets/id_101-removebg-preview.png",
    description:
      " Capacidade hidráulica: 7L; Pressão de serviço: 166.7bar; Altura: 490mm; Diâmetro: 165mm; Rosca de entrada: 3/4”-14NGT; Peso: 12kg; Norma: ISO9809-1;  ",
    category: "Cilindro Aço",
    featured: false,
    specs: ["Modelo: GWM7", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 74,
    name: "Cilindro 10.0L",
    image: "assets/id_102-removebg-preview.png",
    description:
      " Capacidade hidráulica: 10L; Pressão de serviço: 200bar; Altura: 640mm; Diâmetro: 165mm; Rosca de entrada: 3/4”-14NGT; Peso: 15kg; Norma: ISO9809-1; ",
    category: "Cilindro Aço",
    featured: false,
    specs: ["Modelo: GWM10", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 75,
    name: "Cilindro 15.0L",
    image: "assets/id_103-removebg-preview.png",
    description:
      " Capacidade hidráulica: 15L; Pressão de serviço: 166,7bar; Altura: 915mm; Diâmetro: 165mm; Rosca de entrada: 3/4”-14NGT; Peso: 20.5kg; Norma: ISO9809-1;  ",
    category: "Cilindro Aço",
    featured: true,
    specs: ["Modelo: GWM15", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 76,
    name: "Cilindro 20.0L",
    image: "assets/id_104-removebg-preview.png",
    description:
      " Capacidade hidráulica: 20L; Pressão de serviço: 200bar; Altura: 670mm; Diâmetro: 229mm; Rosca de entrada: 3/4”-14NGT; Peso: 27kg; ;Norma: ISO9809-1;  ",
    category: "Cilindro Aço",
    featured: false,
    specs: ["Modelo: GWM20", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 77,
    name: "Cilindro 40.0L",
    image: "assets/id_105-removebg-preview.png",
    description:
      " Capacidade hidráulica: 40L; Pressão de serviço: 150bar; Altura: 1315mm; Diâmetro: 219mm; Rosca de entrada: 3/4”-14NGT; Peso: 48kg; Norma: ISO9809-1;  ",
    category: "Cilindro Aço",
    featured: false,
    specs: ["Modelo: GWM40", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  {
    id: 78,
    name: "Cilindro 50.0L",
    image: "assets/id_106-removebg-preview.png",
    description:
      " Capacidade hidráulica: 50L; Pressão de serviço: 200bar; Altura: 1450mm; Diâmetro externo: 232mm; Rosca de entrada: 3/4”-14NGT; Peso: 55kg; Norma: ISO9809-1; ",
    category: "Cilindro Aço",
    featured: false,
    specs: ["Modelo: GWM50", "Marca: Gaswide"],
    price: "Sob consulta",
  },

  //Cirurgia

    {
    id: 79,
    name: "Foco Cirúrgico LED Omni",
    image: "assets/FOTÓFORO LED OMNI.png",
    description:
      "Iluminação uniforme com estrutura multi-lentes que garante alto nível de luminância homogênea no campo luminoso; Design Coaxial para iluminação livre de sombras; Ângulo de luminância móvel; Indicador LED para status da bateria; Intensidade luminosa do LED ajustável entre 15.000 - 30.000 Lux; Iluminação LED com temperatura de cor de 6.000K; Tamanho do campo luminoso: 70mm (a 3 m); LED de alta potência com vida útil aproximada de 50.000 horas; Bateria Lítio-íon recarregável; Autonomia da bateria aproximada de 4 horas; Marca: MD;",
    category: "Cirurgia",
    featured: true,
    specs: [
      "Marca: MD",
      "Intensidade luminosa 30.000 Lux",
      "LED vida útil 50.000h",
      "Campo luminoso 70mm",
      "Bateria recarregável",
    ],
    price: "Sob consulta",
  },

  //Concentrador:

  {
    id: 80,
    name: "Concentrador de Oxigênio ",
    image: "assets/id_107-removebg-preview.png",
    description:
      "Mais leve e prático - 14,5 kg (5lpm); Realização de macronebulização e micronebulização; Silencioso; Qualidade garantida com sistema de monitoramento e alarme; Pureza e obstrução; Circuito de Proteção contra picos de alta tensão; Conforto devido a sua alta pressão; Possui rodízios para o transporte; ",
    category: "Concentrador",
    featured: false,
    specs: ["Modelo: 5 LPM", "Marca: Lumiar"],
    price: "Sob consulta",
  },

  {
    id: 81,
    name: "Concentrador de Oxigênio ",
    image: "assets/id_108-removebg-preview.png",
    description:
      " Dispositivo que oferece nebulização integrada; Design elegante e moderno; Tela em LCD de 3 Polegadas em alta definição; Compreensor de alta eficiência(850W); Sistema de alarmes com botão de silenciador;",
    category: "Concentrador",
    featured: false,
    specs: ["Modelo: AirLive 8F Pro", "Marca: Gaslive"],
    price: "Sob consulta",
  },

  {
    id: 82,
    name: "Concentrador de Oxigênio ",
    image: "assets/id_109-removebg-preview.png",
    description:
      " Design compacto e portátil; Autonomia prolongada de bateria. as opções de alimentação CA/CC; Fornecimento de oxigênio mais ampla em dose contínua e por impulso;",
    category: "Concentrador",
    featured: false,
    specs: ["Modelo: Eclipse 5", "Marca: Caire"],
    price: "Sob consulta",
  },

  {
    id: 83,
    name: "Concentrador de Oxigênio Mini",
    image: "assets/id_110-removebg-preview.png",
    description:
      'Concentrador de oxigênio portátil, compacto e leve; Funciona com bateria recarregável; Modo de fluxo pulsado com 5 níveis; Tela LCD colorida de 2,8" para monitoramento; Baixo ruído de operação;  Bivolt automático, registro ANVISA incluído; Inclui bolsa/mochila, pré‑filtro, filtro de ar e acessórios; ',
    category: "Concentrador",
    featured: true,
    specs: ["Modelo: Premium BK-FA", "Marca: Balmak"],
    price: "Sob consulta",
  },

  //Destilador:

  {
    id: 84,
    name: "Aqua-Tech",
    image: "assets/id_112-removebg-preview.png",
    description:
      "Destilador de água portátil e compacto; Fácil transporte e manuseio; Cuba interna em aço inoxidável (4 L de capacidade); Produção: 1 litro de água destilada por hora; Tensão: 127/220 V (bivolt manual); ",
    category: "Destilador",
    featured: true,
    specs: ["Modelo: 4 Litros", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Dermatologia:

 {
    id: 85,
    name: "Dermatoscópio Mark II",
    image: "assets/DERMATOSCÓPIO MARK II.png",
    description:
      "Iluminação de Xenon Halógena 2.5V proporciona luz mais branca; Ajuste de foco e campo de visão com aumento de 10 vezes; Lente de contato com escala e sem escala; Iluminação branca e de alto brilho, com excelente nitidez da imagem; Cabo em metal com superfície recartilhada;",
    category: "Dermatologia",
    featured: true,
    specs: [
      "Reostato para controle de intensidade da luz",
      " Modelo MARK II",
      "Marca: MD",
      "Lente de contato",
    ],
    price: "Sob consulta",
  },
  {
    id: 86,
    name: "Dermatoscópio Omni LED",
    image: "assets/DERMATOSCÓPIO OMNI LED.png",
    description:
      "Iluminação LED de alta intensidade de 5.600 Lux, com durabilidade de 10.000 horas; Lente de contato graduada; Cabeça em aço inox e latão cromado, proporciona melhor durabilidade, resistente a impactos e corrosões; Cabo em aço inox com revestimento termoplástico reforçado; Clip de bolso com acionamento on/off e desligamento automático;",
    category: "Dermatologia",
    featured: false,
    specs: [
      "Leve, compacto e ergonômico",
      "Modelo: OMNI",
      "Marca: MD",
      "Cabo em aço inox",
    ],
    price: "Sob consulta",
  },
  {
    id: 87,
    name: "Dermatoscópio DL4W",
    image: "assets/DERMATOSCÓPIO DL4W.png",
    description:
      "Corpo resistente em aço inox; Iluminação polarizada e não polarizada; 24 LEDs (18 polarizados + 6 não polarizados); Lente com 30mm de diâmetro; Entrada para carregador Micro USB;",
    category: "Dermatologia",
    featured: false,
    specs: [
      "Régua escala de 10mm",
      "Modelo: DL4W",
      " Marca: DERMLITE",
      "Bateria recarregável de Lithium",
    ],
    price: "Sob consulta",
  },  

  //Diagnóstico:

{
    id: 88,
    name: "Oftalmoscópio LED",
    image: "assets/OFTALMOSCÓPIO LED.png",
    description:
      "Iluminação LED de alta intensidade de 7.500 Lux, com durabilidade de 50.000 horas; Lentes com dioptrias de -20D a +20D, com marcador iluminado; Óptica selada livre de poeira; Cabo em aço inox com revestimento termoplástico; Seleção de 5 aberturas, com filtro verde livre de vermelho; Marca: MD;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MD",
      "7.500 Lux",
      "Óptica selada",
      "Filtro verde",
      "Ajuste de lentes -20D a +20D",
    ],
    price: "Sob consulta",
  },
  {
    id: 89,
    name: "Oftalmoscópio Xenon",
    image: "assets/OFTALMOSCÓPIO XENON.png",
    description:
      "Iluminação Xenon com ótima intensidade luminosa de 7.000 Lux e Índice de Reprodução de Cor (CRI) >99; Lentes com dioptrias de -20D a +20D, com marcador iluminado; Óptica selada livre de poeira; Cabo em aço inox com revestimento termoplástico; Seleção de 5 aberturas, com filtro verde livre de vermelho; Marca: MD;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MD",
      "7.000 Lux",
      "CRI >99",
      "Óptica selada",
      "Filtro verde",
    ],
    price: "Sob consulta",
  },
  {
    id: 90,
    name: "Oftalmoscópio Visio",
    image: "assets/OFTALMOSCÓPIO VISIO.png",
    description:
      'Lâmpada 2.5V ou 3.5V, de Xenon Halógena ou LED; Ajuste para 28 lentes; Dioptria: - 25 a + 40; Marcador iluminado; Cabeça em ABS resistente à impactos; Cabo em aço inox; Reostato para controle de intensidade da luz; Alimentação através de 2 pilhas alcalinas tipo "C" ou bateria recarregável (opcional); Seleção de 6 aberturas, com filtro verde livre de vermelho; Não contém látex; Marca: MD;',
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MD",
      "28 lentes",
      "Reostato de luz",
      "Bateria opcional",
      "6 aberturas",
    ],
    price: "Sob consulta",
  },
  {
    id: 91,
    name: "Otoscópio Fibra Óptica",
    image: "assets/OTOSCÓPIO FIBRA ÓPTICA.png",
    description:
      "Iluminação LED de excelente intensidade luminosa de 50.000 Lux, com durabilidade de 50.000 horas; Transmissão da luz por fibra óptica, sem obstruções, sem reflexos e sem aquecimento; Cabeça em aço inox e ABS; Lente giratória, ampliação da imagem em 3 vezes; Cabo em aço inox com revestimento termoplástico reforçado, resistente a impactos e corrosões; Clip de bolso com acionamento on/off e desligamento automático ao ser fixado no bolso; Marca: MD;",
    category: "Diagnóstico",
    featured: true,
    specs: ["Marca: MD", "50.000 Lux", "Fibra óptica", "Lente giratória"],
    price: "Sob consulta",
  },
  {
    id: 92,
    name: "Otoscópio Xenon Halógena",
    image: "assets/OTOSCÓPIO XENON HALÓGENA.png",
    description:
      "Iluminação Xenon com ótima intensidade luminosa de 30.000 Lux e Índice de Reprodução de Cor (CRI) >99; Transmissão da luz por fibra óptica, sem obstruções, sem reflexos e aquecimento; Cabeça em aço inox e ABS; Lente giratória, ampliação da imagem em 3 vezes; Cabo em aço inox com revestimento termoplástico reforçado, resistente a impactos e corrosões; Clip de bolso com acionamento on/off e desligamento automático ao ser fixado no bolso; Marca: MD;",
    category: "Diagnóstico",
    featured: false,
    specs: ["Marca: MD", "30.000 Lux", "Fibra óptica", "Lente giratória"],
    price: "Sob consulta",
  },
  {
    id: 93,
    name: "Otoscópio Recarregável",
    image: "assets/OTOSCÓPIO RECARREGÁVEL.png",
    description:
      "Iluminação LED de excelente intensidade luminosa de 50.000 Lux, com durabilidade de 50.000 horas; Transmissão da luz por fibra óptica, sem obstruções, sem reflexos e sem aquecimento; Cabeça em aço inox e ABS; Lente giratória, ampliação da imagem em 3 vezes; Cabo em aço inox com revestimento termoplástico reforçado, resistente a impactos e corrosões; Clip de bolso com acionamento on/off e desligamento automático ao ser fixado no bolso; Marca: MD;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MD",
      "50.000 Lux",
      "Fibra óptica",
      "Lente giratória",
      "Bateria recarregável",
    ],
    price: "Sob consulta",
  },
  {
    id: 94,
    name: "Otoscópio Mini",
    image: "assets/OTOSCÓPIO MINI.png",
    description:
      "Iluminação (Incluso 02 Lâmpadas); Temperatura de Cor: 3.500 K (Kelvin) – Branco Quente; Vida útil: 20.000 h (horas-mínimas); Lentes com ampla Visão e Zoom com ampliação de 2,5 vezes; Alimentação através de 2 pilhas tamanho AA (Não Inclusas); Cabo com encaixes metálicos; Acompanha bolsa para armazenamento e transporte; Marca: MISSOURI;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MISSOURI",
      "Zoom de 2,5x",
      "Vida útil 20.000h",
      "Lâmpadas inclusas",
    ],
    price: "Sob consulta",
  },
  {
    id: 95,
    name: "Otoscópio Mini 2",
    image: "assets/OTOSCÓPIO MINI 2.png",
    description:
      "Leve e compacto; Iluminação (Incluso 02 Lâmpadas); Temperatura de Cor: 3.000 K (Kelvin) – Branco Quente; Vida útil: 20.000 h (horas-mínimas); Lentes com ampla Visão e Zoom com ampliação de 2,5 vezes; Alimentação através de 2 pilhas tamanho AA (Não Inclusas); Cabo com encaixes metálicos; Acompanha bolsa para armazenamento e transporte; Marca: MISSOURI;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MISSOURI",
      "Zoom de 2,5x",
      "Vida útil 20.000h",
      "Lâmpadas inclusas",
    ],
    price: "Sob consulta",
  },  

  {
    id: 96,
    name: "Estetoscópio Spirit",
    image: "assets/ESTETOSCÓPIO SPIRIT.png",
    description:
      "Composição das olivas em nano silicone; Olivas auriculares macias e resistentes, não possuem roscas; ou aparatos internos, ajustam-se anatomicamente ao canal auditivo; Sistema de anel não frio; Hastes com molas internas reforçadas e camada dupla em metal; Não contém látex; Tubo de PVC durável e resistente; Marca: MD; Modelo: III PRO adulto/pediátrico;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: MD",
      "Modelo: III PRO adulto/pediátrico",
      "Olivas anatômicas",
      "Anel não frio",
      "Sem látex",
      "Tubo de PVC resistente",
    ],
    price: "Sob consulta",
  }, 

    {
    id: 97,
    name: "Estetoscópio Duplo",
    image: "assets/ESTETOSCÓPIO DUPLO.png",
    description:
      "Baixo peso; Diafragmas de alta sensibilidade; Tubo moldado em PVC de peça única para melhor transmissão do som; Marca: Premium; Modelo: Duplo adulto;",
    category: "Diagnóstico",
    featured: false,
    specs: [
      "Marca: Premium",
      "Modelo: Duplo adulto",
      "Alta sensibilidade",
      "Leve",
      "Tubo peça única",
    ],
    price: "Sob consulta",
  },

  //Espirômetro:

  {
    id: 98,
    name: "Espirômetro SP80B",
    image: "assets/id_113-removebg-preview.png",
    description:
      "Modelo compacto e portátil;  Bateria recarregável; Conectividade via Bluetooth e USB; Mede CVF, VEF1 e PFE com precisão; Ideal para clínicas, consultórios e uso domiciliar; Fácil manuseio e operação intuitiva;",
    category: "Espirômetro",
    featured: true,
    specs: ["Modelo: SP80B", "Marca: Contec"],
    price: "Sob consulta",
  },

  //Fetal:
{
    id: 99,
    name: "Detector Fetal",
    image: "assets/DETECTOR FETAL.png",
    description:
      "Display LCD colorido; Projetado para caber no bolso; Design simples que facilita o uso; Alimentação por 2 pilhas alcalinas 1.5V;5 modos de operação; Modo Número de Frequência Cardíaca Fetal (FCF); Modo Gráfico de Frequência Cardíaca Fetal (FCF); Função de Estimulação Acústica; Modo de Índice de Massa Corporal (IMC); Modo Tendência IMC; Marca: MD; Modelo: BT - 220C;",
    category: "Fetal",
    featured: true,
    specs: [
      "Display LCD colorido",
      " 5 modos de operação",
      "Modelo: BT - 220C",
      "Marca: MD",
    ],
    price: "Sob consulta",
  },
  {
    id: 100,
    name: "Doppler Fetal Portátil",
    image: "assets/DOPPLER FETAL PORTÁTIL.png",
    description:
      "Transdutor de alta sensibilidade; Compacto, leve e fácil operação; Alto-falante de alta performance; Design ergonômico e compartimento para transdutor; Entrada para fone de ouvido ou gravador de som ou computador; Tela de LCD; Bateria interna recarregável e carregador integrado; Desligamento automático após 1 minuto sem utilização; Certificado pelo INMETRO; Marca: MD; Modelo: FD - 200C;",
    category: "Fetal",
    featured: false,
    specs: [
      "Tela de LCD",
      "Modelo: FD - 200C",
      "Marca: MD",
      "Transdutor de alta sensibilidade",
    ],
    price: "Sob consulta",
  },
  {
    id: 101,
    name: "Doppler Fetal de Mesa",
    image: "assets/DOPPLER FETAL DE MESA.png",
    description:
      'Transdutor de alta sensibilidade; Design ergonômico e compartimento para transdutor; Tela de LCD colorida; Porta USB para transmissão de dados; Display Touchscreen com curva da FHR; Visor 3,2" (65 x 50mm); Alarmes visuais/sonoros ajustáveis e programáveis; Alimentação bivolt automático; Certificado pelo INMETRO;',
    category: "Fetal",
    featured: false,
    specs: [
      "Software de gerenciamento de dados",
      "Modelo: FD - 300C",
      "Marca: MD",
      "Congelamento da imagem",
    ],
    price: "Sob consulta",
  },
  {
    id: 102,
    name: "Doppler Fetal de Mesa Digital",
    image: "assets/DOPPLER FETAL DE MESA DIGITAL.png",
    description:
      'Transdutor de alta sensibilidade; Alto-falante de alta performance; Design ergonômico e compartimento para transdutor; Entrada para fone de ouvido ou gravador de som ou omputador; Visor 3,2" (65 x 50mm); Alimentação bivolt automático e através de baterias recarregáveis; Certificado pelo INMETRO;',
    category: "Fetal",
    featured: false,
    specs: [
      "Tela de LCD",
      "Marca: MD",
      "Modelo: FD - 300D",
      "Desligamento automático",
    ],
    price: "Sob consulta",
  },
  {
    id: 103,
    name: "Detector Fetal",
    image: "assets/DETECTOR FETAL 2.png",
    description:
      "Exibição dos batimentos em formato numérico e curva; Grau de proteção IPX4; Alimentação com pilhas ou baterias recarregáveis;",
    category: "Fetal",
    featured: false,
    specs: [
      "Display TFT LCD colorido",
      "Modelo: JPD-100B",
      "Marca: Jumper",
      "Alimentação baterias recarregáveis",
    ],
    price: "Sob consulta",
  },
  {
    id: 104,
    name: "Detector Fetal Portátil e Mesa",
    image: "assets/DETECTOR FETAL PORTÁTIL E MESA.png",
    description:
      "Exibição dos batimentos em formato numérico e curva; Grau de proteção IPX4; Alimentação com bateria de litio recarregável e bivolt automático;",
    category: "Fetal",
    featured: false,
    specs: [
      "Display TFT LCD colorido",
      "Modelo:JPD100E",
      "Marca: Jumper",
      "Alimentação com bateria de litio recarregável",
    ],
    price: "Sob consulta",
  },


  //Fotopolimerizador:

  {
    id: 105,
    name: "Fotopolimerizador ",
    image: "assets/id_114-removebg-preview.png",
    description:
      "Display Digital; Porfundidade de polimerização de até 6mm; Temporizador para polimerização e clareamento: 05, 10, 15, 20, 30, 40 segundos; Com bip sonoro indicativo a cada 5 segundos e no final da Operação;",
    category: "Fotopolimerizador",
    featured: false,
    specs: ["Modelo: Emitter D", "Marca: Schuster"],
    price: "Sob consulta",
  },

  {
    id: 106,
    name: "Fotopolimerizador ",
    image: "assets/id_115-removebg-preview.png",
    description:
      "Ponteira de fibra óptica 100% autoclavável; Protetor de radiação luminosa em acrílico polarizado; Corpo e base carregadora injetados em ABS, com opção de descanso de aplicador; Sistema Auto Shut Off System; Permite ajuste do tempo de aplicação para cada modo de operação;",
    category: "Fotopolimerizador",
    featured: false,
    specs: ["Modelo: Bluestar+", "Marca: Microdont"],
    price: "Sob consulta",
  },

  {
    id: 107,
    name: "Fotopolimerizador Led5",
    image: "assets/id_117-removebg-preview.png",
    description:
      "Fácil assepsia; Alimentação com fio; 3 modos de operação: rápida, gradual e pulsante; Caneta portátil, leve e fácil de manusear; Caneta portátil, leve e fácil de manusear; Indicado para resinas compostas e materiais fotossensíveis; ",
    category: "Fotopolimerizador",
    featured: true,
    specs: ["Modelo: Com Fio Led5", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 108,
    name: "Fotopolimerizador Led6",
    image: "assets/id_118-removebg-preview.png",
    description:
      "Espectro: 440–480 nm; Formato caneta, leve e de fácil manuseio; Fácil assepsia; Bateria Li-Ion recarregável; 3 modos: rápida, gradual e pulsante; Bivolt automático; Timer digital;   ",
    category: "Fotopolimerizador",
    featured: false,
    specs: ["Modelo: Sem fio Led6", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Incubadora:

  {
    id: 109,
    name: "Incubadora Neonatal Estacionária",
    image: "assets/id_119-removebg-preview.png",
    description:
      " Controle de ar e pele do RN; Umidade servo controlada (opcional); Sistema de amortecimento da cúpula para fechamento; Dispositivo de sinalizador à distância; Dispositivo de contagem de tempo digital, integrado ao painel; Umidificador externo e removível para fácil assepsia; Alimentação por reversão automática de voltagem; Ampla linha de acessórios opcionais;  ",
    category: "Incubadora",
    featured: true,
    specs: ["Modelo: GRN® Millennium", "Marca: Gigante Produtos Médicos"],
    price: "Sob consulta",
  },

  //Jato:

  {
    id: 110,
    name: "Practical Jet",
    image: "assets/id_121-removebg-preview.png",
    description:
      "Jateamento com partículas de bicarbonato de sódio em suspensão; Adaptável ao encaixe Borden do equipo; Ponteira giratória 360º; Ponteira removível e autoclavável a 121 °C; Registro Anvisa nº 80022409016; ",
    category: "Jato",
    featured: true,
    specs: ["Modelo: Bicarbonato", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Laser:

  {
    id: 111,
    name: "K-Laser Red",
    image: "assets/id_123-removebg-preview.png",
    description:
      "Laser de baixa potência – 100 mW (vermelho); Comprimento de onda: 660 nm; Dosagem ajustável: 1 a 9 J/cm²; Bateria de lítio recarregável (Li-ion);  Bivolt automático; Fácil assepsia e higienização; Portátil, leve e de uso prático; ",
    category: "Laser",
    featured: true,
    specs: ["Modelo: Led", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 112,
    name: "K-Laser Infra",
    image: "assets/id_124-removebg-preview.png",
    description:
      "Laser de baixa potência – 100 mW; Comprimento de onda: 810 nm;  Dosagem ajustável: 1 a 9 J/cm²; Bateria de lítio recarregável; Bivolt automático; Fácil assepsia e higienização; Portátil, leve e fácil de usar;  ",
    category: "Laser",
    featured: false,
    specs: ["Modelo: Infra", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 113,
    name: "K-Laser Led Plus",
    image: "assets/id_125-removebg-preview.png",
    description:
      "Caneta portátil e sem fio; Bateria Li-ion recarregável; Leve, fácil de higienizar e manusear; Bivolt automático; Dosagem ajustável: 1 a 9 J/cm²; Laser terapêutico; Espectro de luz: 380 a 520 nm para fotopolimerização;  ",
    category: "Laser",
    featured: false,
    specs: ["Modelo: Led Plus", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 114,
    name: "K-Led Polywave",
    image: "assets/id_126-removebg-preview.png",
    description:
      "Bateria Li-ion recarregável; Fácil assepsia e manuseio; Bivolt automático; Formato caneta, portátil e sem fio; ndicado para resinas compostas e materiais fotossensíveis; Fotopolimerizador LED Polywave (azul + violeta); ",
    category: "Laser",
    featured: false,
    specs: ["Modelo: Polywave", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Lavadora:

  {
    id: 115,
    name: "Lava-Tech",
    image: "assets/id_127-removebg-preview.png",
    description:
      "Bivolt (127/220V); Capacidade de 2,6 litros; Limpeza segura e eficiente de instrumentais clínicos; Exclusivo dispositivo de aquecimento; Timer com 5 ciclos pré-programados; Reduz o consumo de água; Fácil operação e uso prolongado; ",
    category: "Lavadora",
    featured: true,
    specs: ["Modelo: Digital", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Mesa:

  {
    id: 116,
    name: "Mesa Ginecológica",
    image: "assets/id_128-removebg-preview.png",
    description:
      "Construída em MDF com revestimento BP (melaminico de baixa pressão); Leito acolchoado em espuma Densidade 28; Gabinete com 2 portas 3 gavetas; 1 par de porta coxas; Suporte para lençol descartável; Cuba em chapa de aço com pintura epóxi;  ",
    category: "Mesa",
    featured: false,
    specs: [
      "Modelo: Luxal com Gabinete 2 Portas e 3 Gavetas",
      "Marca: Salutem",
    ],
    price: "Sob consulta",
  },

  {
    id: 117,
    name: "Mesa Auxiliar Esmaltada",
    image: "assets/id_129-removebg-preview.png",
    description:
      "Tipo z; Armação em tubo de aço carbono quadrado de 25x25 x 1.20mm; Tampo e 2 prateleiras em chapa de aço carbono de 0.80mm de espessura; Pés com rodízios giratórios de 2 de diâmetro; Acabamento em pintura epóxi, com tratamento anti-ferruginoso; Dimensão aproximada: 400 x 600 x  800 mm;",
    category: "Mesa",
    featured: false,
    specs: ["Modelo: Auxiliar Tipo Z", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  {
    id: 118,
    name: "Mesa De Exame Ginecológico Luxo",
    image: "assets/id_130-removebg-preview.png",
    description:
      "Gabinete construído em MDF c/ revestimento em laminado decorativo (externo); Revestimento interno em chapa de MDF na cor branca; Possui 03 gavetas, 02 portas e 01 prateleira interna; Leito estofado com espuma D26 revestido em Courvim, dividido em três partes; Encosto e pés reguláveis através de cremalheiras, assento fixo; Gaveta para escoamento de líquidos em chapa de aço inoxidável – AISI430; Acompanha par de porta-coxas reguláveis em poliuretano injetado; Dimensão aproximada: 1850 x 600 x 850 mm;  ",
    category: "Mesa",
    featured: true,
    specs: ["Modelo: Ginecológico Luxo", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  //Microscópio:

  {
    id: 119,
    name: "Linha completa de Microscópios ",
    image: "assets/id_131-removebg-preview.png",
    description: "Linha completa de Microscópios",
    category: "Microscópios ",
    featured: true,
    specs: ["Marca: Craltech"],
    price: "Sob consulta",
  },

  {
    id: 120,
    name: "Microscópios Sdorf Cientific",
    image: "assets/id_132-removebg-preview.png",
    description: "Microscópios Sdorf Cientific",
    category: "Microscópios ",
    featured: false,
    specs: ["Marca: Craltech"],
    price: "Sob consulta",
  },
  //Misturador:
  {
    id: 121,
    name: "Kondormix",
    image: "assets/id_133-removebg-preview.png",
    description:
      "Bivolt automático; Misturador mecânico para alginatos e gessos; Ideal para preparação de moldes dentários; Duas velocidades com rotação constante; Mistura uniforme e sem bolhas de ar; Utiliza cuba misturadora flexível e espátula; Fácil de usar e limpar; ",
    category: "Misturador",
    featured: true,
    specs: ["Modelo: Yg-100", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Modelo:

  {
    id: 122,
    name: "Modelo Acupuntura Feminino",
    image: "assets/id_135-removebg-preview.png",
    description:
      "Resina plástica emborrachada; Modelo anatômico de acupuntura feminino de 50 cm; Pontos tradicionais da medicina chinesa; Condições de aprendizagem; As orientações estão presentes em todas as regiões do corpo sendo: Cabeça e Pescoço, Tronco e Membros; ",
    category: "Modelo",
    featured: true,
    specs: ["Modelo:SD-5099", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 123,
    name: "Modelo Acupuntura Masculino",
    image: "assets/id_136-removebg-preview.png",
    description:
      "Resina plástica emborrachada; Modelo anatômico de acupuntura masculino de 50 cm; Pontos tradicionais da medicina chinesa; Oferecendo condições de aprendizagem; Orientações estão presentes em todas as regiões do corpo sendo: Cabeça e Pescoço, Tronco e Membros; ",
    category: "Modelo",
    featured: true,
    specs: ["Modelo:SD-5098", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 124,
    name: "Modelo Articulação Da Mão",
    image: "assets/id_137-removebg-preview.png",
    description:
      "Confeccionado em PVC e polímero flexível; Ossos do carpo; Ossos dos Dedos da Mão; Parte da ulna; Parte do rádio; Processo estiloide da ulna; Processo Estiloide do rádio; Ligamentos articulares; Montado em base plástica; ",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5018", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 125,
    name: "Modelo Articulação Do Cotovelo",
    image: "assets/id_138-removebg-preview.png",
    description:
      "Confeccionado em PVC e polímero flexível; Coto do úmero; Fossa coronoide; Epicôndilo medial; Epicôndilo lateral; Cabeça do rádio; Coto do rádio; Coto do cúbito; Demonstra as estruturas anatômicas e os movimentos fisiológicos de uma articulação direita, com seus ligamentos, flexão, extensão e rotação interna e externa do rádio; Montado em base plástica;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5017", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 126,
    name: "Modelo Articulação Do Joelho",
    image: "assets/id_139-removebg-preview.png",
    description:
      "Confeccionado em PVC e polímero flexível; Coto do Fêmur (osso da coxa); Côndilo lateral do fêmur (superfície articular); Côndilo medial do fêmur (superfície articular); Fíbula (ossos do perônio); Ossos da tíbia (osso da perna); Ligamento cruzado posterior; Ligamento cruzado anterior; Ligamento do meniscofemoral posterior;  ",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5020", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 127,
    name: "Modelo Articulação Do Ombro",
    image: "assets/id_140-removebg-preview.png",
    description:
      "Confeccionado em PVC e polímero flexível; Omoplata; Clavícula; Úmero; Cápsula do ligamento articular; Tendão redondo menor; Ligamentos articulares; Escápula; Cápsula do ligamento articular; Tendão redondo menor; Ligamentos articulares; ",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5016", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 128,
    name: "Modelo Articulação Do Pé",
    image: "assets/id_141-removebg-preview.png",
    description:
      "Confeccionado em PVC e polímero flexível; Ossos do tarso; Cuneiforme Medial, Cuneiforme Médio e Cuneiforme Lateral; Ossos dos Dedos do Pé; Perônio; Parte inferior da Tíbia e da Fíbula; Articulação Tarso metatársica; Ossos do Metatarso 5 ossos longos demonstram uma epífise proximal que é a base, uma epífise distal (cabeça);  ",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5021", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 129,
    name: "Modelo Articulação Do Quadril",
    image: "assets/id_142-removebg-preview.png",
    description:
      "Confeccionado em PVC e polímero flexível; Osso Ilíaco; Osso Ílio; Ísquio; Púbis; Asa (ala) do ilíaco; Cavidade do Acetábulo; Forame Obturatório; Fossa Ilíaca; Eminência Ilíaca, Espinha isquiática; Linha Arqueada; Cabeça do Fêmur; Ligamento Iliofemoral;  ",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5019", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 130,
    name: "Modelo Cabeça Com Cérebro",
    image: "assets/id_143-removebg-preview.png",
    description:
      "Dividido em 9 partes; Confeccionado em PVC e resina plástica emborrachada; Córtex Cerebral; Telencéfalo; Núcleo Cerebral; Cerebelo; Bulbo; Ponte; Corpo Caloso; Tálamo; Mesencéfalo; Medula Espinhal; Artérias;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5037", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 131,
    name: "Modelo Coração Médio 5 Partes",
    image: "assets/id_144-removebg-preview.png",
    description:
      "Coração em tamanho médio; Confeccionado em PVC e resina plástica emborrachada; Face esternocostal; Faces pulmonares;  Face diafragmática; Miocárdio; Cordas tendíneas; Aurículas; Artéria aorta; Tronco pulmonar;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5048/B", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 132,
    name: "Modelo Coluna Torácica",
    image: "assets/id_145-removebg-preview.png",
    description:
      "confeccionada em PVC; Vértebras Torácicas (T1 a T12); Discos Intervertebrais; Plexos Nervosos; Montado em base plástica;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5011", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 133,
    name: "Modelo Torso Bissexual Muscular",
    image: "assets/id_146-removebg-preview.png",
    description:
      "Confeccionado em resina plástica emborrachada e PVC; Pintura feito à mão; Com órgãos em 27 partes; Glândulas: Lacrimal; submandibular; suprarrenal, tireoide; Sistema reprodutor masculino e feminino; Cérebro;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5022/D", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 134,
    name: "Modelo Olho Em Órbita 10 Partes",
    image: "assets/id_147-removebg-preview.png",
    description:
      "Confeccionado em PVC, acrílico e resina plástica emborrachada; Seios Paranasais (Frontal, Etmoidal, Maxilar); Músculo Elevador da Pálpebra Superior; Músculo Reto Superior; Músculo Reto Inferior; Músculo Reto Lateral; Músculo Reto Medial; Músculo Oblíquo Inferior",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5044", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 135,
    name: "Modelo Cavidade Nasal",
    image: "assets/id_148-removebg-preview.png",
    description:
      "Confeccionado em PVC; Seio Paranasal Maxilar; Processo Pterifóide Lateral do Osso Esfenóide; Fossa Pterigoidea; Fossa Pterigopalatina; Seio Paranasal Frontal; Seio Paranasal Esfenoidal; Palato Mole; Palato Duro; Úvula Palatina;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5042", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 136,
    name: "Modelo Muscular Assex. 1,70CM",
    image: "assets/id_149-removebg-preview.png",
    description:
      "Com órgãos internos removíveis com 29 partes; Confeccionado em PVC e Resina Plástica Emborrachada; Musculatura profunda, vasos e nervos; Possui 240 pontos identificados; ",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5026", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  {
    id: 137,
    name: "Modelo Arcada Dentária c/ Língua",
    image: "assets/id_150-removebg-preview.png",
    description:
      "Confeccionada em PVC e resina plástica emborrachada; Língua; Gengiva; 32 dentes sendo: Dentes Caninos, Dentes Molares, Dentes Pré-Molares e Dentes Incisivos; Possui duas hastes de sustentação da mandíbula e maxila; Grande flexibilidade nos movimentos;",
    category: "Modelo",
    featured: false,
    specs: ["Modelo:SD-5059", "Marca: Sdorf"],
    price: "Sob consulta",
  },

  //Monitor:

  {
    id: 138,
    name: "Monitor Multiparâmetro K10 ",
    image: "assets/id_151-removebg-preview.png",
    description:
      'Tela de "10" colorida com opção touch screen; Parâmetros: Dos básicos aos mais avançados; Uso adulto, pediátrico e neonatal',
    category: "Monitor",
    featured: false,
    specs: ["Marca: Creative"],
    price: "Sob consulta",
  },

  {
    id: 139,
    name: "Monitor Multiparâmetro K12 ",
    image: "assets/id_152-removebg-preview.png",
    description:
      'Tela de "12.1" colorida com opção touch screen; Parâmetros: Dos básicos aos mais avançados; Uso adulto, pediátrico e neonatal',
    category: "Monitor",
    featured: false,
    specs: ["Marca: Creative"],
    price: "Sob consulta",
  },

  {
    id: 140,
    name: "Monitor Multiparâmetro K15 ",
    image: "assets/id_153-removebg-preview.png",
    description:
      'Tela de "15" colorida com opção touch screen; Parâmetros: Dos básicos aos mais avançados; Uso adulto, pediátrico e neonatal',
    category: "Monitor",
    featured: false,
    specs: ["Marca: Creative"],
    price: "Sob consulta",
  },

  {
    id: 141,
    name: "Monitor Multiparâmetro PC 300 ",
    image: "assets/id_154-removebg-preview.png",
    description:
      'Tela de "7" colorida com opção touch screen; Parâmetros: Sp02/Pni/Ecg/Resp/Temp; Ultra leve, apenas 1,3 KG; Uso adulto, pediátrico e neonatal; ',
    category: "Monitor",
    featured: false,
    specs: ["Marca: Creative"],
    price: "Sob consulta",
  },

  {
    id: 142,
    name: "Monitor Multiparâmetro PC 900 ",
    image: "assets/id_155-removebg-preview.png",
    description:
      'Tela de "7" colorida com opção touch screen; Parâmetros: Sp02/Pni/Ecg/Resp/Temp; Impressora Térmica; Uso adulto, pediátrico e neonatal; ',
    category: "Monitor",
    featured: true,
    specs: ["Marca: Creative"],
    price: "Sob consulta",
  },

  {
    id: 143,
    name: "Monitor Multiparâmetro N1012 ",
    image: "assets/id_156-removebg-preview.png",
    description:
      'Tela de "12.1" de alta resolução; Monitora sinais vitais críticos com precisão; Ecg/Sp02/Respiração/Temperatura/pressão arterial invasiva e não invasiva/ Capnografia; Armazenamento de tendências de 168 Horas para análise contínua; ',
    category: "Monitor",
    featured: false,
    specs: ["Marca: 1000Medic"],
    price: "Sob consulta",
  },
  //Oxímetro:
  {
    id: 144,
    name: "Oxímetro de Pulso OxiMaster300",
    image: "assets/id_157-removebg-preview.png",
    description:
      "Oxímetro portátil, compacto e leve; Fácil manuseio e operação intuitiva; Indicado para adultos e crianças; Verificação pontual ou até 360h de monitoramento contínuo; Alta precisão, segurança e qualidade confiável; Ideal para clínicas, hospitais e uso domiciliar;",
    category: "Oxímetro",
    featured: true,
    specs: ["Modelo:OxiMaster300", "Marca: MedMax"],
    price: "Sob consulta",
  },

  {
    id: 145,
    name: "Oxímetro de Pulso",
    image: "assets/OXÍMETRO DE PULSO.PNG",
    description:
      "Sensores para uso adulto, pediátrico e neonatal; Tela colorida; Desligamento automático; Tecnologia MoveOxy SPO2 anti movimento; Com suporte de mesa; Bateria de Litio recarregável com carregador integrado; Marca: LEPU; Modelo: PC 66B;",
    category: "Oxímetro",
    featured: false,
    specs: [
      "Marca: LEPU",
      "Modelo: PC 66B",
      "Tela colorida",
      "Bateria recarregável",
      "Suporte de mesa",
      "Tecnologia MoveOxy",
    ],
    price: "Sob consulta",
  },
  {
    id: 146,
    name: "Oxímetro de Pulso Portátil e Mesa",
    image: "assets/OXÍMETRO DE PULSO POTÁTIL E MESA.PNG",
    description:
      "Sensores para uso adulto, pediátrico e neonatal; Tela colorida rotacional; Desligamento automático; Tecnologia MoveOxy SPO2 anti movimento; Capa de proteção; Dispositivo retrátil, acomodação em superfícies planas; Base de mesa; Entrada para termômetro; Transmissão de dados através de rede sem fio; Medição por infravermelho; Marca: CREATIVE; Modelo: SP 20;",
    category: "Oxímetro",
    featured: false,
    specs: [
      "Marca: CREATIVE",
      "Modelo: SP 20",
      "Tela rotacional",
      "Tecnologia MoveOxy",
      "Transmissão sem fio",
      "Medição infravermelha",
    ],
    price: "Sob consulta",
  },
  {
    id: 147,
    name: "Oxímetro de Dedo",
    image: "assets/OXÍMETRO DE DEDO.png",
    description:
      "Uso adulto; Pequeno, leve e fácil de transportar; Leitura de 2 parâmetros: SPO2 e frequência cardíaca; Desligamento automático para economizar bateria; Certificado Anvisa e Inmetro; Marca: YONKER; Modelo: YK 81 A;",
    category: "Oxímetro",
    featured: false,
    specs: [
      "Marca: YONKER",
      "Modelo: YK 81 A",
      "Leitura SPO2 e frequência cardíaca",
      "Leve e compacto",
      "Desligamento automático",
    ],
    price: "Sob consulta",
  },
  {
    id: 148,
    name: "Oxímetro de Mesa",
    image: "assets/OXÍMETRO DE MESA.PNG",
    description:
      "Visor LCD colorido de 7”; Alarmes sonoros ajustáveis e programáveis; Funcionamento por bateria e energia AC; Porta de rede para comunicação com computador; Opções de sensores adulto, pediátrico e neonatal; Marca: MD; Modelo: VS 2000E;",
    category: "Oxímetro",
    featured: false,
    specs: [
      "Marca: MD",
      "Modelo: VS 2000E",
      "Visor LCD 7”",
      "Alarmes sonoros",
      "Sensores adulto, pediátrico e neonatal",
      "Função AC e bateria",
    ],
    price: "Sob consulta",
  },
  {
    id: 149,
    name: "Oxímetro de Dedo",
    image: "assets/OXÍMETRO DE DEDO 2.png",
    description:
      "Tecnologia Artery Check; Leve, compacto e portátil; Capacidade para uso contínuo em aproximadamente 16 horas; Desligamento automático; Alerta visual e sonoro; Tela rotacional; Transferência dos dados de medição via Bluetooth; Marca: MD; Modelo: SB 210;",
    category: "Oxímetro",
    featured: false,
    specs: [
      "Marca: MD",
      "Modelo: SB 210",
      "Tecnologia Artery Check",
      "Uso contínuo por 16 horas",
      "Transferência via Bluetooth",
    ],
    price: "Sob consulta",
  },
  {
    id: 150,
    name: "Oxímetro de Dedo",
    image: "assets/OXÍMETRO DE DEDO 3.png",
    description:
      'Visor LED em 7 segmentos com alto nível de brilho; Leve, Compacto e Portátil; Capacidade para uso de até 16 horas; Alimentação através de 02 (duas) pilhas alcalinas "AAA"; Desligamento automático; Marca: MD; Modelo: SB 100;',
    category: "Oxímetro",
    featured: false,
    specs: [
      "Marca: MD",
      "Modelo: SB 100",
      "Visor LED 7 segmentos",
      "Uso contínuo por 16 horas",
      "Desligamento automático",
    ],
    price: "Sob consulta",
  },

  //Peça:

  {
    id: 151,
    name: "Pratical Scaler",
    image: "assets/id_158-removebg-preview.png",
    description:
      "Peça de mão para remoção de tártaro; Excelente acabamento superficial que facilita a assepsia; Baixo nível de ruído; Acoplável ao terminal de alta rotação; Movimento elíptico eficiente na remoção de tártaro; ",
    category: "Peça",
    featured: true,
    specs: ["Modelo: Removedor", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 152,
    name: "Peça Reta Odontológica",
    image: "assets/id_159-removebg-preview.png",
    description:
      "Spray externo; Giro de 360°; Acoplamento INTRA (universal); Fixação da broca por giro do anel; Spray único direcionado para a ponta da broca;",
    category: "Peça",
    featured: false,
    specs: ["Modelo: Kdt-0011", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  {
    id: 153,
    name: "Contra Ângulo Odontológico",
    image: "assets/id_160-removebg-preview.png",
    description:
      "Spray único externo; Acoplamento INTRA (universal); Remoção de brocas por chave lateral; Rotação de até 20.000 rpm;",
    category: "Peça",
    featured: false,
    specs: ["Modelo: Kdt-1011", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Ponta:

  {
    id: 154,
    name: "Pontas Diamantadas",
    image: "assets/id_161-removebg-preview.png",
    description:
      "Diversos formatos e granulações para diferentes aplicações odontológicas;",
    category: "Ponta",
    featured: true,
    specs: ["Marca: Fava e Microdont"],
    price: "Sob consulta",
  },

  //Seladora:

  {
    id: 155,
    name: "Sela-Tech",
    image: "assets/id_162-removebg-preview.png",
    description:
      "Seladora para papel grau cirúrgico até 25 cm de selagem; Suporte para diferentes tamanhos de rolo; Indicador luminoso (On/Off); Ajuste de temperatura para selagem perfeita; Braço de selagem manual com resistência isolada; Trilho de corte duplo (corte nos dois sentidos); Tensão: 127/220 V (bivolt manual); ",
    category: "Seladora",
    featured: true,
    specs: ["Modelo: Grau Cirúrgico", "Marca: Kondentech"],
    price: "Sob consulta",
  },

  //Suporte:

  {
    id: 156,
    name: "Suporte De Soro Inox",
    image: "assets/id_163-removebg-preview.png",
    description:
      "Base em tubo de aço inox redondo de 7/8 x 1.20mm, com 04 pés(H); Coluna fixada à base em tubo de aço inox redondo de 7/8 x 1.20mm; Haste em tubo de aço inox redondo de 5/8 x 1.00mm; 4 ganchos alternados; Altura regulável por meio de manípulo; Pés com rodízios giratórios de 2’’ de diâmetro; Dimensão aproximada: Mínimo: 1000 mm - Máximo: 2100 mm;  ",
    category: "Suporte",
    featured: true,
    specs: ["Modelo: Inox 4 Ganchos", "Marca: Prado Soluções"],
    price: "Sob consulta",
  },

  //Ultrassom:
  {
    id: 157,
    name: "Scaler Jr Pump Led",
    image: "assets/id_164-removebg-preview.png",
    description:
      "Bivolt automático; Sistema moderno para profilaxia odontológica; Fácil manuseio e excelente desempenho na remoção de tártaro; Reservatório para líquidos com bomba interna; Peça de mão com iluminação LED, removível e autoclavável; ",
    category: "Ultrassom",
    featured: true,
    specs: ["Modelo: Pump Led", "Marca: Kondentech"],
    price: "Sob consulta",
  },
];

const categories = [
"Todos",
"Amalgamador",
"Analisador",
"Aparelho",
"Autoclave",
"Balança",
"Berço",
"Bioimpedância",
"Bisturi",
"Bomba",
"Broca",
"Cadeira",
"Cama",
"Caneta",
"Cardiologia",
"Carro de Emergência",
"Centrífuga",
"Cilindro Alumínio",
"Cilindro Aço",
"Cirurgia",
"Concentrador",
"Destilador",
"Dermatologia",
"Diagnóstico",
"Espirômetro",
"Fetal",
"Fotopolimerizador",
"Incubadora",
"Jato",
"Laser",
"Lavadora",
"Mesa",
"Microscópios ",
"Misturador",
"Modelo",
"Monitor",
"Oxímetro",
"Peça",
"Ponta",
"Seladora",
"Suporte",
"Ultrassom",
];

function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const whatsappNumber = "+5543999674770";

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;
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
        setVisibleProducts((prev) =>
          Math.min(prev + 12, filteredProducts.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredProducts.length]);

  interface GetWhatsAppLink {
    (productName: string): string;
  }

  const getWhatsAppLink: GetWhatsAppLink = (productName) => {
    const message = encodeURIComponent(
      `Olá, gostaria de uma cotação para o produto: ${productName}`
    );
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
          <div className="flex gap-4 ">
            <select
              className="px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/5 text-white max-h-20 overflow-y-auto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-[#003F7E]"
                >
                  {category}
                </option>
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
          <div
            key={product.id}
            className="bg-white/10 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
          >
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
                <div className="text-sm text-blue-300 font-semibold mb-1">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-blue-100 line-clamp-3">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white/5 px-3 py-1 rounded-full text-sm text-blue-200"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="text-lg font-semibold text-white mt-4">
                  {product.price}
                </div>
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
          <p className="text-white">
            Nenhum produto encontrado com os filtros selecionados.
          </p>
        </div>
      )}

      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-8">
          <button
            onClick={() =>
              setVisibleProducts((prev) =>
                Math.min(prev + 9, filteredProducts.length)
              )
            }
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
