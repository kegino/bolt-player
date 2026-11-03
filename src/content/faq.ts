export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o Bolt Player e como funciona?",
    a: "O Bolt Player é um reprodutor e plataforma de streaming IPTV de alta velocidade, projetado para carregar canais instantaneamente sem delay ou travamentos. Ao solicitar seu acesso via WhatsApp, você recebe as credenciais (Xtream Codes / M3U) com tutorial de instalação para começar a assistir em menos de 5 minutos.",
  },
  {
    q: "O Bolt Player realmente não trava em jogos de futebol?",
    a: "Sim. A tecnologia do Bolt Player utiliza servidores CDN distribuídos estrategicamente pelo Brasil aliados à compressão avançada H.265 (HEVC). Isso reduz a latência da transmissão ao mínimo e impede congelamentos mesmo em clássicos e finais de campeonatos de grande audiência.",
  },
  {
    q: "Em quais dispositivos posso usar o Bolt Player?",
    a: "O Bolt Player é compatível com os principais aparelhos do mercado: Smart TVs (Samsung Tizen, LG webOS, Roku TV e Android TV), TV Box, Amazon Fire TV Stick, smartphones e tablets Android e iOS, além de computadores Windows e Mac.",
  },
  {
    q: "Posso solicitar um teste grátis do Bolt Player?",
    a: "Com certeza! Oferecemos um teste grátis sem burocracia para que você comprove na prática a velocidade de carregamento dos canais, a qualidade em 4K e a estabilidade da grade antes de decidir assinar qualquer plano.",
  },
  {
    q: "Como recebo o acesso e suporte após a contratação?",
    a: "O atendimento e suporte do Bolt Player são realizados diretamente pelo WhatsApp. Assim que seu pedido é confirmado, você recebe login, senha, URL do servidor ou link M3U com tutorial ilustrado e acompanhamento humano para qualquer configuração.",
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Aceitamos Pix com liberação imediata em poucos segundos, cartões de crédito nas principais bandeiras e boleto bancário através de gateway 100% seguro.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Quantas telas posso assistir simultaneamente no Bolt Player?",
    a: "Cada assinatura do Bolt Player contempla 1 ponto de acesso em alta definição e 4K. Caso você queira adicionar mais telas para a família em outros cômodos, oferecemos pontos adicionais com valor promocional direto pelo WhatsApp.",
  },
  {
    q: "Qual a velocidade de internet recomendada para usar o Bolt Player?",
    a: "O mínimo recomendado é 10 Mbps para canais em qualidade HD e 30 Mbps para streaming fluido em 4K Ultra HD. Para garantir o melhor desempenho, sugerimos conectar o aparelho via cabo Ethernet ou rede Wi-Fi 5 GHz.",
  },
  {
    q: "O Bolt Player possui guia de programação (EPG) e favoritos?",
    a: "Sim. O Bolt Player conta com Guia Eletrônico de Programação (EPG) completo e atualizado em tempo real, busca rápida por títulos e atores, lista de canais favoritos e controle parental com senha para canais adultos.",
  },
  {
    q: "Como funciona a renovação do meu plano?",
    a: "A renovação é prática e sem renovação automática forçada no cartão. Próximo ao fim do período contratado, nossa equipe envia um lembrete no WhatsApp e você renova quando quiser mantendo todas as suas preferências.",
  },
];
