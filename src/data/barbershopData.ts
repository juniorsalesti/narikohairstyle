import { ServiceItem, DifferentialItem, GalleryItem, ReviewItem } from '../types';

import heroImg from '../assets/images/barbershop_hero_1788479677612.jpg';
import craftImg from '../assets/images/barber_craft_1788479689610.jpg';
import chairImg from '../assets/images/barber_chair_1788479700870.jpg';
import fadeImg from '../assets/images/haircut_fade_1788479710574.jpg';
import beardImg from '../assets/images/beard_detail_1788479722646.jpg';

export const IMAGES = {
  hero: heroImg,
  craft: craftImg,
  chair: chairImg,
  fade: fadeImg,
  beard: beardImg,
};

export const BARBERSHOP_INFO = {
  name: 'NARIKO BARBEARIA',
  shortName: 'NARIKO',
  phoneFormatted: '(19) 98351-2056',
  phoneRaw: '5519983512056',
  address: 'R. Adolfo Guimarães Barros, 14 - Jardim Novo Campos Eliseos, Campinas - SP, 13060-414',
  city: 'Campinas - SP',
  instagram: '@barbearianariko',
  instagramUrl: 'https://instagram.com',
  workingHours: [
    { days: 'Segunda a Sexta', hours: '09:00 — 20:00' },
    { days: 'Sábado', hours: '08:30 — 19:30' },
    { days: 'Domingo', hours: 'Fechado' },
  ],
  defaultWhatsappMessage: 'Olá! Gostaria de agendar um horário na barbearia.',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BARBERSHOP_INFO.defaultWhatsappMessage;
  return `https://wa.me/${BARBERSHOP_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'corte-masculino',
    name: 'Corte masculino',
    category: 'corte-barba',
    categoryLabel: 'Corte & Barba',
    price: 'R$ 40,00',
    description: 'Corte personalizado alinhado ao seu formato de rosto e textura de cabelo com acabamento na navalha.',
    duration: '40 min',
  },
  {
    id: 'barba',
    name: 'Barba',
    category: 'corte-barba',
    categoryLabel: 'Corte & Barba',
    price: 'R$ 35,00',
    description: 'Desenho de barba com toalha quente, hidratação profunda, óleos essenciais e alinhamento milimétrico.',
    duration: '35 min',
  },
  {
    id: 'sobrancelha',
    name: 'Sobrancelha',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    price: 'R$ 20,00',
    description: 'Limpeza e alinhamento sutil preservando a masculinidade e naturalidade das linhas.',
    duration: '15 min',
  },
  {
    id: 'pezinho',
    name: 'Pezinho',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    price: 'R$ 20,00',
    description: 'Manutenção do contorno e acabamento da nuca e costeletas na lâmina para manter o visual em dia.',
    duration: '20 min',
  },
  {
    id: 'freestyle',
    name: 'Freestyle',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    price: 'R$ 10,00',
    description: 'Riscos, detalhes geométricos e desenhos com precisão cirúrgica.',
    duration: '15 min',
  },
  {
    id: 'pigmentacao',
    name: 'Pigmentação',
    category: 'quimica',
    categoryLabel: 'Química & Cor',
    price: 'R$ 30,00',
    description: 'Correção de falhas e realce de definição da barba ou fade com tonalizantes de alta durabilidade.',
    duration: '25 min',
  },
  {
    id: 'relaxamento',
    name: 'Relaxamento',
    category: 'quimica',
    categoryLabel: 'Química & Cor',
    price: 'R$ 40,00',
    description: 'Redução de volume e alinhamento dos fios mantendo textura natural e fácil penteabilidade.',
    duration: '45 min',
  },
  {
    id: 'progressiva',
    name: 'Progressiva',
    category: 'quimica',
    categoryLabel: 'Química & Cor',
    price: 'R$ 80,00',
    isStartingPrice: true,
    description: 'Alisamento duradouro com selagem térmica e tratamento dos fios com brilho natural.',
    duration: '1h 20 min',
  },
  {
    id: 'reflexo',
    name: 'Luzes / Reflexo',
    category: 'quimica',
    categoryLabel: 'Química & Cor',
    price: 'R$ 60,00',
    isStartingPrice: true,
    description: 'Mechas pontuais ou reflexo uniforme para um contraste moderno e sofisticado.',
    duration: '1h',
  },
  {
    id: 'platinado',
    name: 'Platinado',
    category: 'quimica',
    categoryLabel: 'Química & Cor',
    price: 'R$ 150,00',
    description: 'Descoloração global controlada até o tom branco/platinado com protetor capilar e matização.',
    duration: '2h',
  },
  {
    id: 'penteado',
    name: 'Penteado',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    price: 'R$ 20,00',
    description: 'Finalização profissional com pomadas foscas ou de brilho, secagem e texturização.',
    duration: '20 min',
  },
];

export const COMBO_NARIKO = {
  smallTitle: 'O COMBO COMPLETO',
  title: 'COMBO NARIKO',
  description: 'Corte + Barba + Sombra',
  price: 'R$ 80,00',
  complement: 'O visual completo em uma única experiência.',
  buttonText: 'QUERO AGENDAR →',
  items: [
    { title: 'Corte Masculino', desc: 'Fade, clássico ou moderno de acordo com seu estilo' },
    { title: 'Barba Terapêutica', desc: 'Toalha quente, navalha afiada e hidratação' },
    { title: 'Sobrancelha / Sombra', desc: 'Alinhamento e contorno preciso' },
    { title: 'Finalização Especial', desc: 'Lavagem com massagem e pomada premium' },
  ],
};

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    number: '01',
    title: 'CORTE PRECISO',
    description: 'Técnica e atenção aos detalhes para entregar um resultado impecável.',
  },
  {
    number: '02',
    title: 'ACABAMENTO',
    description: 'Porque os detalhes fazem toda a diferença no resultado final.',
  },
  {
    number: '03',
    title: 'ESTILO',
    description: 'Cortes alinhados ao seu estilo e personalidade.',
  },
  {
    number: '04',
    title: 'EXPERIÊNCIA',
    description: 'Um ambiente pensado para você desacelerar e sair renovado.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Low Fade com Barba Alinhada',
    subtitle: 'Precisão milimétrica e transição suave',
    imageUrl: fadeImg,
    tag: 'CORTE & BARBA',
  },
  {
    id: 'gal-2',
    title: 'Acabamento Navalha e Toalha Quente',
    subtitle: 'Cuidado artesanal clássico',
    imageUrl: craftImg,
    tag: 'RITUAL CLÁSSICO',
  },
  {
    id: 'gal-3',
    title: 'Texturização & Contorno',
    subtitle: 'Volume equilibrado e definição',
    imageUrl: beardImg,
    tag: 'ESTILO & CORTE',
  },
  {
    id: 'gal-4',
    title: 'Degradê Skin Fade Editorial',
    subtitle: 'Contraste limpo e acabamento nítido',
    imageUrl: heroImg,
    tag: 'DEGRADÊ PREMIUM',
  },
];

export const IMPACT_WORDS = [
  'CORTE',
  'BARBA',
  'ESTILO',
  'PRECISÃO',
  'PERSONALIDADE',
  'CONFIANÇA',
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Diogo Ferreira',
    rating: 5,
    timeAgo: 'há 1 ano',
    comment: 'Ótimo local e ótimos profissionais, melhor de Campinas.',
  },
  {
    id: 'rev-2',
    name: 'Karine Barbosa',
    rating: 5,
    timeAgo: 'há 8 meses',
    comment: 'Excelente atendimento.',
  },
  {
    id: 'rev-3',
    name: 'Gustavo SouzA',
    rating: 5,
    timeAgo: 'há 1 ano',
    comment: 'A melhor de Campinas.',
  },
  {
    id: 'rev-4',
    name: 'Fernanda Fer',
    rating: 5,
    timeAgo: 'há 2 anos',
    comment: 'Barbearia excelente, super recomendo! ☺️',
  },
  {
    id: 'rev-5',
    name: 'Duilio Mesquita',
    rating: 5,
    timeAgo: 'há 2 anos',
    comment: 'Estilo solicitado: Low fade personalizado. Especialidades: corte, barba, sobrancelha, afro e personalizado.',
  },
  {
    id: 'rev-6',
    name: 'Diego Almeida',
    rating: 5,
    timeAgo: 'há 1 ano',
    comment: 'Excelente experiência.',
  },
  {
    id: 'rev-7',
    name: 'Erinaldo Santos',
    rating: 5,
    timeAgo: 'há 2 anos',
    comment: '★★★★★',
  },
];
