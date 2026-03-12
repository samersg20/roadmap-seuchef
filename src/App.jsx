import { useState, useEffect } from "react";

const initialPhases = [
  {
    id: 1,
    name: "CATEGORIA 1",
    subtitle: "Onboarding sem Dor",
    timeline: "",
    color: "#FF4D00",
    accent: "#FF8C5A",
    icon: "🚀",
    features: [
      {
        id: "f1-1",
        title: "Cadastro por Áudio, Vídeo ou Ícones",
        emoji: "🎙️",
        persona: "Candidato",
        wow: "Zero digitação obrigatória",
        description: "Candidato escolhe como se cadastrar: grava vídeo de 30s respondendo 3 perguntas fixas, manda áudio pelo WhatsApp ('Procuro vaga de garçom zona oeste'), ou monta perfil clicando em ícones de habilidade. IA transcreve, extrai skills e cria o perfil automaticamente.",
        impact: "🔥 Alta",
        tag: "IA + Acessibilidade",
        status: null,
      },
      {
        id: "f1-2",
        title: "Perfil por Badges de Habilidade",
        emoji: "🏅",
        persona: "Candidato",
        wow: "Currículo visual — sem precisar escrever nada",
        description: "Candidato seleciona o que sabe fazer clicando em ícones: 🔥 Chapa, 🍟 Fritura, 🍺 Bar, 🍽 Atendimento, 💰 Caixa, 🧼 Higiene, 🛵 Delivery, ☕ Barista. Cada skill vira um badge no perfil. Restaurante filtra diretamente por badge. Simples como um perfil de jogo.",
        impact: "🔥 Alta",
        tag: "UX",
        status: null,
      },
      {
        id: "f1-3",
        title: "Vaga em 3 Perguntas de Voz",
        emoji: "👆",
        persona: "Restaurante",
        wow: "Publicar vaga sem saber digitar",
        description: "Dono responde 3 perguntas faladas ('Qual cargo?', 'Qual horário?', 'Qual salário?') e a plataforma gera e publica a vaga automaticamente, já rankeando candidatos compatíveis por score de match.",
        impact: "🔥 Alta",
        tag: "Simplicidade",
        status: null,
      },
      {
        id: "f1-4",
        title: "Match Automático com Termômetro Visual",
        emoji: "🌡️",
        persona: "Ambos",
        wow: "Sem precisar ler currículo — só olhar a cor",
        description: "Cada candidato aparece com termômetro colorido: verde (>85% match), amarelo (ok), vermelho (distante). Critérios: skills, distância, disponibilidade, experiência. Cards estilo swipe — desliza para chamar ou descartar.",
        impact: "🔥 Alta",
        tag: "UX",
        status: null,
      },
      {
        id: "f1-5",
        title: "Disponibilidade Semanal Simples",
        emoji: "📅",
        persona: "Candidato",
        wow: "3 toques e o restaurante já sabe quando você pode",
        description: "Candidato marca com um toque: ☑ Manhã ☑ Tarde ☑ Noite ☑ Fins de semana. Restaurante filtra por turno exato. Elimina o vai-e-vem de 'você pode vir terça de manhã?'",
        impact: "⚡ Média-Alta",
        tag: "Operacional",
        status: null,
      },
      {
        id: "f1-6",
        title: "Mapa de Vagas com Tempo Real de Deslocamento",
        emoji: "🗺️",
        persona: "Ambos",
        wow: "Principal causa de falta resolvida na raiz",
        description: "Candidato vê vagas no mapa com deslocamento real: 🚶 18 min · 🚌 32 min · 🚗 9 min. Restaurante filtra 'somente até 30 minutos'. Uma das maiores causas de abandono no setor é transporte — essa função elimina o problema antes da contratação.",
        impact: "🔥 Alta",
        tag: "UX",
        status: null,
      },
      {
        id: "f1-7",
        title: "Validação Antifraude por Selfie + Telefone",
        emoji: "🛡️",
        persona: "Candidato",
        wow: "Perfil verificado desde o dia 1",
        description: "Validação em 3 passos ao se cadastrar: 📸 selfie (reconhecimento facial básico), 📱 código SMS, 📍 confirmação de localização. Perfis verificados ganham selo e aparecem primeiro nos resultados. Elimina perfis fake logo no início.",
        impact: "🔥 Alta",
        tag: "Confiança",
        status: null,
      },
    ],
  },
  {
    id: 2,
    name: "CATEGORIA 2",
    subtitle: "Seleção Turbinada",
    timeline: "",
    color: "#6C2BD9",
    accent: "#A67EF5",
    icon: "⚡",
    features: [
      {
        id: "f2-1",
        title: "Score de Confiabilidade — O Filtro Mais Poderoso",
        emoji: "📊",
        persona: "Ambos",
        wow: "Restaurante vê quem vai aparecer, não só quem parece bom",
        description: "Score 0–100 baseado em: avaliações de ex-empregadores (40%), presença e pontualidade (25%), tempo médio em empregos (20%), cancelamentos de entrevista (15%). Visual e claro no perfil. Vira o principal filtro do restaurante — mais importante que experiência no papel.",
        impact: "🔥 Alta",
        tag: "Confiança",
        status: null,
      },
      {
        id: "f2-2",
        title: "Testes Gamificados de Habilidade",
        emoji: "🎮",
        persona: "Candidato",
        wow: "Mini-game de 5 minutos substitui prova escrita chata",
        description: "Mini-jogos que testam habilidades reais: Teste do Garçom (atende mesa virtual), Simulador de Troco, Teste de Higiene, Memória de Pedidos. Resultado vira score no perfil: 'Cozinha: 78 · Atendimento: 92 · Higiene: 84'. Badge de competência verificada.",
        impact: "🔥 Alta",
        tag: "Gamification",
        status: null,
      },
      {
        id: "f2-3",
        title: "Entrevista Assíncrona por Vídeo",
        emoji: "🎬",
        persona: "Ambos",
        wow: "Restaurante assiste quando quiser — candidato grava quando puder",
        description: "Dono envia 3 perguntas em vídeo. Candidato responde no próprio ritmo, de casa. IA analisa tom, confiança e coerência das respostas. Restaurante assiste em 3 minutos e já tem 80% da decisão. Elimina entrevistas presenciais desnecessárias.",
        impact: "🔥 Alta",
        tag: "IA + Async",
        status: null,
      },
      {
        id: "f2-4",
        title: "IA que Sugere Vagas e Candidatos",
        emoji: "🤖",
        persona: "Ambos",
        wow: "Tipo Netflix — mostra o que tem 94% de chance de dar certo",
        description: "Para o candidato: 'Você tem 94% de chance de ser contratado nessa vaga.' Para o restaurante: 'Temos 3 candidatos ideais perto de você — enviar convite?' Sistema pró-ativo que não espera o usuário procurar.",
        impact: "🔥 Alta",
        tag: "IA",
        status: null,
      },
      {
        id: "f2-5",
        title: "Bot de Pré-Triagem via WhatsApp",
        emoji: "💬",
        persona: "Restaurante",
        wow: "Só passa quem é aderente — dono não vê candidato ruim",
        description: "Bot faz 3 perguntas técnicas de múltipla escolha antes do restaurante ver o perfil ('Como você limpa uma chapa?'). Candidatos que não passam ficam ocultos. Funciona 24h sem trabalho do dono.",
        impact: "⚡ Média-Alta",
        tag: "Automação",
        status: null,
      },
      {
        id: "f2-6",
        title: "Alerta de Candidato Quente",
        emoji: "🚨",
        persona: "Restaurante",
        wow: "Não perder talento para o concorrente do lado",
        description: "Quando candidato com score >80% aplica na vaga, dono recebe push imediato: 'João tem 92% de match e já recebeu 2 outros contatos hoje.' Cria urgência real e competição saudável entre restaurantes por bons candidatos.",
        impact: "⚡ Média-Alta",
        tag: "Retenção",
        status: null,
      },
    ],
  },
  {
    id: 3,
    name: "CATEGORIA 3",
    subtitle: "Contratação Rápida",
    timeline: "",
    color: "#00875A",
    accent: "#4ECBA0",
    icon: "✅",
    features: [
      {
        id: "f3-1",
        title: "Contratação Express — 1 Clique para Teste",
        emoji: "⚡",
        persona: "Restaurante",
        wow: "De 10 entrevistas para 1 teste direto",
        description: "Dono clica em 'CONVIDAR PARA TESTE'. Sistema gera e envia ao candidato: data, horário, endereço, contato. Candidato confirma no app. Reduz o fluxo de 10 entrevistas para 1 teste prático — contratação no mesmo dia.",
        impact: "🔥 Alta",
        tag: "Conversão",
        status: null,
      },
      {
        id: "f3-2",
        title: "Modo Urgente — Turno Agora",
        emoji: "🔥",
        persona: "Ambos",
        wow: "O Uber dos trabalhadores gastronômicos",
        description: "Restaurante abre vaga urgente: '🔥 Chapeiro · Hoje 18h · R$150 turno'. Push para disponíveis em 3km. Primeiro que confirmar vai. Candidato ativa 'DISPONÍVEL HOJE' e fica visível para restaurantes da região. Para emergências reais: cozinheiro faltou, evento lotou.",
        impact: "🔥 Alta",
        tag: "Urgência",
        status: null,
      },
      {
        id: "f3-3",
        title: "Teste Pago Padronizado",
        emoji: "💰",
        persona: "Ambos",
        wow: "Elimina exploração — restaurante confiável paga o teste",
        description: "Padrão da plataforma: Teste de 3h = R$80, pago via app antes do candidato ir. Restaurantes que pagam teste recebem selo 'Empregador Confiável' e atraem candidatos melhores. Acaba com o teste fake e a exploração velada.",
        impact: "🔥 Alta",
        tag: "Confiança",
        status: null,
      },
      {
        id: "f3-4",
        title: "Agenda de Entrevistas Automática",
        emoji: "🗓️",
        persona: "Restaurante",
        wow: "Sem fila, sem confusão, sem ghosting",
        description: "Sistema organiza: '14h João · 14h15 Pedro · 14h30 Lucas'. Candidato escolhe horário pelo app. Lembretes automáticos 1h antes. Candidato que não comparecer perde pontos de confiabilidade — elimina ghosting sistematicamente.",
        impact: "⚡ Média-Alta",
        tag: "Operacional",
        status: null,
      },
      {
        id: "f3-5",
        title: "Oferta Formal em 1 Clique + Checklist de Docs",
        emoji: "📩",
        persona: "Restaurante",
        wow: "Contratar sem ir ao RH ou ao cartório",
        description: "Dono define salário com slider, escolhe data no calendário, manda oferta. Candidato aceita ou contra-propõe em 2 toques. Checklist guia candidato a fotografar CPF e carteira de trabalho pelo celular. Todo fluxo registrado na plataforma.",
        impact: "🔥 Alta",
        tag: "Conversão",
        status: null,
      },
      {
        id: "f3-6",
        title: "Entrevista Relâmpago Semanal",
        emoji: "⚡",
        persona: "Ambos",
        wow: "Contratar no mesmo dia — sem idas e vindas de mensagens",
        description: "Uma vez por semana: Feira Virtual de 1 hora. Restaurante entra em sala de vídeo. Candidatos entram em conversas de exatos 2 minutos. Se der match, oferta é enviada ali mesmo. Restaurantes participantes ganham badge 'Dono Ativo' e maior visibilidade.",
        impact: "⚡ Média-Alta",
        tag: "Gamification",
        status: null,
      },
    ],
  },
  {
    id: 4,
    name: "CATEGORIA 4",
    subtitle: "Engajamento e Retenção",
    timeline: "",
    color: "#C17900",
    accent: "#F0B429",
    icon: "🏆",
    features: [
      {
        id: "f4-1",
        title: "Passaporte Profissional Digital",
        emoji: "📋",
        persona: "Candidato",
        wow: "Histórico de carreira portátil — sem currículo nunca mais",
        description: "Perfil vira carteira de trabalho digital: 'Low BBQ · Aux. Cozinha · 9 meses · ⭐4.8'. Cada emprego, avaliação e conquista fica registrado e verificado. Restaurante confia muito mais em quem tem histórico visível. Passaporte completo = aparecer primeiro nos resultados.",
        impact: "🔥 Alta",
        tag: "Reputação",
        status: null,
      },
      {
        id: "f4-2",
        title: "Avaliação Mútua — Candidato Avalia o Restaurante",
        emoji: "⭐",
        persona: "Ambos",
        wow: "Feature que nenhum concorrente tem — cria mercado mais justo",
        description: "Após entrevista ou contratação, candidato avalia: ⭐ Pagamento em dia ⭐ Ambiente ⭐ Gestão ⭐ Clareza na vaga. Restaurantes com nota baixa perdem visibilidade. Cria accountability e cultura de respeito — o perfil de restaurante que o mercado precisa.",
        impact: "🔥 Alta",
        tag: "Reputação",
        status: null,
      },
      {
        id: "f4-3",
        title: "Sistema de Carreira Gamificado",
        emoji: "🎮",
        persona: "Candidato",
        wow: "Candidato vê onde quer chegar — e como chegar",
        description: "Níveis desbloqueados por avaliações + cursos + experiência: Nível 1 Auxiliar → Nível 2 Cozinheiro → Nível 3 Chapeiro → Nível 4 Cozinheiro Sênior → Nível 5 Chef de Turno. Subir de nível = vagas melhores + salário maior sugerido automaticamente.",
        impact: "🔥 Alta",
        tag: "Gamification",
        status: null,
      },
      {
        id: "f4-4",
        title: "Micro Cursos de 5 Minutos + Badges",
        emoji: "📚",
        persona: "Candidato",
        wow: "Candidato se qualifica no ônibus — restaurante exige o badge",
        description: "Cursos rápidos no celular: 📚 Higiene básica · 📚 Como atender mesa · 📚 Como usar fritadeira. Completar curso libera badge verificado no perfil. Restaurante pode filtrar 'somente quem fez curso de higiene'. Caminho claro de qualificação para baixa escolaridade.",
        impact: "🔥 Alta",
        tag: "Educação",
        status: null,
      },
      {
        id: "f4-5",
        title: "GastroCoins — Moeda de Fidelidade",
        emoji: "🪙",
        persona: "Ambos",
        wow: "Fidelização gamificada dos dois lados da plataforma",
        description: "Candidatos ganham coins por: completar perfil, passar em simulações, ser bem avaliado, aceitar urgências. Donos ganham por: vagas bem descritas, resposta rápida, contratações bem-sucedidas. Coins trocam por: destaque de perfil, relatórios premium, cursos avançados.",
        impact: "🔥 Alta",
        tag: "Gamification",
        status: null,
      },
      {
        id: "f4-6",
        title: "Ranking Local de Talentos",
        emoji: "🏆",
        persona: "Ambos",
        wow: "Reputação pública que incentiva melhora constante",
        description: "Ranking por bairro/região: 'Top Chapeiros de Pinheiros · Top Garçons da Zona Sul'. Candidato com alto ranking recebe propostas sem precisar se candidatar. Restaurante pode recrutar diretamente do ranking. Cria competição saudável.",
        impact: "⚡ Média-Alta",
        tag: "Gamification",
        status: null,
      },
      {
        id: "f4-7",
        title: "Indicação com Bônus — Me Indica",
        emoji: "🤝",
        persona: "Candidato",
        wow: "Rede de confiança verificada que cresce sozinha",
        description: "Candidato indica amigo para vaga. Se contratado, ambos recebem bônus em GastroCoins (equivalente a R$50). Candidato pede referência de ex-chefe via WhatsApp — chefe responde 3 perguntas rápidas e a resposta vira badge verificado no perfil.",
        impact: "🔥 Alta",
        tag: "Social",
        status: null,
      },
      {
        id: "f4-8",
        title: "Transparência Salarial por Função e Região",
        emoji: "💵",
        persona: "Ambos",
        wow: "Dono descobre se está perdendo candidato por R$50",
        description: "Sistema mostra média: 'Garçom em Pinheiros: R$1.800–R$2.400'. Dashboard para restaurante: 'Sua vaga perde para o bar vizinho por R$50 — sugerimos ajuste.' Candidato sabe se a oferta é justa antes de aceitar. Reduz abandono por frustração salarial.",
        impact: "⚡ Média-Alta",
        tag: "Insights IA",
        status: null,
      },
      {
        id: "f4-9",
        title: "Score de Fit Cultural",
        emoji: "🎭",
        persona: "Ambos",
        wow: "Match além das skills — vaga que combina com o jeito da pessoa",
        description: "Restaurante marca seu ambiente: 🚀 Ritmo acelerado · 👨‍👩‍👧 Clima familiar · 🍸 Bar agitado · 🍽 Gourmet refinado. Candidato responde 5 perguntas de personalidade. IA cruza os perfis. Reduz demissões por 'não se encaixou na equipe'.",
        impact: "⚡ Média-Alta",
        tag: "IA",
        status: null,
      },
    ],
  },
  {
    id: 5,
    name: "CATEGORIA 5",
    subtitle: "Outros",
    timeline: "",
    color: "#6B7280",
    accent: "#9CA3AF",
    icon: "📌",
    features: [],
  },
];

const personaColors = {
  Candidato: { bg: "rgba(0,119,182,0.12)", text: "#4DB8FF", border: "rgba(77,184,255,0.25)" },
  Restaurante: { bg: "rgba(230,81,0,0.12)", text: "#FF8C5A", border: "rgba(255,140,90,0.25)" },
  Ambos: { bg: "rgba(147,51,234,0.12)", text: "#C084FC", border: "rgba(192,132,252,0.25)" },
};

const tagColors = {
  "IA + Acessibilidade": "#7C3AED", UX: "#DB2777", Simplicidade: "#D97706",
  Confiança: "#0891B2", Operacional: "#0891B2", Gamification: "#7C3AED",
  "IA + Async": "#2563EB", Automação: "#16A34A", Retenção: "#DC2626",
  Conversão: "#16A34A", Reputação: "#B45309", Urgência: "#EA580C",
  "Insights IA": "#6D28D9", Social: "#0D9488", Educação: "#0369A1", IA: "#4F46E5",
};

function ApprovalButtons({ status, onApprove, onReject, onUndo }) {
  if (status === "approved") {
    return (
      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "14px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "6px", flex: 1, justifyContent: "center",
          background: "rgba(0,135,90,0.2)", border: "1px solid rgba(78,203,160,0.5)",
          borderRadius: "8px", padding: "9px", color: "#4ECBA0", fontSize: "13px", fontWeight: "700", fontFamily: "system-ui",
        }}>✓ Aprovada</div>
        <button onClick={onUndo} style={{
          background: "transparent", border: "1px solid #2A2A35", borderRadius: "8px",
          padding: "9px 14px", color: "#555", fontSize: "12px", cursor: "pointer", fontFamily: "monospace",
        }}>Desfazer</button>
      </div>
    );
  }
  if (status === "rejected") {
    return (
      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "14px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "6px", flex: 1, justifyContent: "center",
          background: "rgba(220,38,38,0.15)", border: "1px solid rgba(248,113,113,0.4)",
          borderRadius: "8px", padding: "9px", color: "#F87171", fontSize: "13px", fontWeight: "700", fontFamily: "system-ui",
        }}>✕ Recusada</div>
        <button onClick={onUndo} style={{
          background: "transparent", border: "1px solid #2A2A35", borderRadius: "8px",
          padding: "9px 14px", color: "#555", fontSize: "12px", cursor: "pointer", fontFamily: "monospace",
        }}>Desfazer</button>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
      <button onClick={onApprove} style={{
        flex: 1, background: "rgba(0,135,90,0.12)", border: "1px solid rgba(0,135,90,0.35)",
        borderRadius: "8px", padding: "10px", color: "#4ECBA0", fontSize: "13px",
        fontWeight: "700", cursor: "pointer", fontFamily: "system-ui",
      }}>✓ Aprovar</button>
      <button onClick={onReject} style={{
        flex: 1, background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)",
        borderRadius: "8px", padding: "10px", color: "#F87171", fontSize: "13px",
        fontWeight: "700", cursor: "pointer", fontFamily: "system-ui",
      }}>✕ Recusar</button>
    </div>
  );
}

const EMOJIS = ["💡","🔧","🎯","🚀","⚡","🔥","🌟","🎮","📊","🤝","💬","🗺️","🎬","📱","🛡️","🏅","💰","🎭","📚","🪙","🏆","🤖","💵","📋","⭐","🎙️","🧠","🔔","📲","🌐"];
const TAGS_OPTS = ["IA","UX","Gamification","Conversão","Confiança","Reputação","Social","Urgência","Automação","Operacional","Educação","Simplicidade","Acessibilidade"];
const PERSONAS = ["Candidato","Restaurante","Ambos"];
const PHASES_OPTS = ["Categoria 1 — Onboarding sem Dor","Categoria 2 — Seleção Turbinada","Categoria 3 — Contratação Rápida","Categoria 4 — Engajamento e Retenção","Categoria 5 — Outros"];
const EMPTY_FORM = { title: "", emoji: "💡", persona: "Ambos", tag: "UX", phase: "Categoria 1 — Onboarding sem Dor", wow: "", description: "" };

function NewCardForm({ onAdd, onCancel }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [step, setStep] = useState(1);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const canNext = form.title.trim().length > 2 && form.wow.trim().length > 2;
  const canSubmit = canNext && form.description.trim().length > 5;

  const labelStyle = { fontSize: "11px", color: "#5A5A7A", fontFamily: "monospace", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px", display: "block" };
  const inputStyle = { width: "100%", background: "#0A0A12", border: "1px solid #252535", borderRadius: "8px", padding: "10px 14px", color: "#E0DDD8", fontSize: "14px", fontFamily: "system-ui", outline: "none", boxSizing: "border-box" };
  const selectStyle = { ...inputStyle, cursor: "pointer" };

  return (
    <div style={{ background: "#0E0E1A", border: "1px solid #2A2A40", borderRadius: "18px", padding: "32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #6C2BD9, transparent)" }} />
      {/* Steps */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "28px" }}>
        {[1,2].map(s => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: step >= s ? "#6C2BD9" : "#1A1A28", border: `1px solid ${step >= s ? "#6C2BD9" : "#2A2A3A"}`, fontSize: "12px", fontWeight: "700", color: step >= s ? "#fff" : "#444", fontFamily: "monospace" }}>{s}</div>
            {s === 1 && <div style={{ width: "40px", height: "1px", background: step >= 2 ? "#6C2BD9" : "#252535" }} />}
          </div>
        ))}
        <span style={{ fontSize: "11px", color: "#555", fontFamily: "monospace", marginLeft: "4px" }}>{step === 1 ? "INFORMAÇÕES BÁSICAS" : "DETALHES DA IDEIA"}</span>
      </div>

      {step === 1 && (
        <div style={{ display: "grid", gap: "18px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0 }}>
              <label style={labelStyle}>Ícone</label>
              <div style={{ position: "relative" }}>
                <button onClick={() => setEmojiOpen(o => !o)} style={{ width: "52px", height: "44px", background: "#0A0A12", border: "1px solid #252535", borderRadius: "8px", fontSize: "22px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{form.emoji}</button>
                {emojiOpen && (
                  <div style={{ position: "absolute", top: "50px", left: 0, zIndex: 99, background: "#12121E", border: "1px solid #252535", borderRadius: "12px", padding: "12px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px", width: "220px", boxShadow: "0 16px 40px rgba(0,0,0,0.6)" }}>
                    {EMOJIS.map(e => (
                      <button key={e} onClick={() => { set("emoji", e); setEmojiOpen(false); }} style={{ background: form.emoji === e ? "#6C2BD930" : "transparent", border: form.emoji === e ? "1px solid #6C2BD9" : "1px solid transparent", borderRadius: "6px", padding: "6px", fontSize: "18px", cursor: "pointer" }}>{e}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Título da ideia *</label>
              <input value={form.title} onChange={e => set("title", e.target.value)} placeholder="Ex: Notificação de Candidato Ideal" style={inputStyle} maxLength={80} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Para quem?</label>
              <select value={form.persona} onChange={e => set("persona", e.target.value)} style={selectStyle}>
                {PERSONAS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Tag</label>
              <select value={form.tag} onChange={e => set("tag", e.target.value)} style={selectStyle}>
                {TAGS_OPTS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Categoria</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
              {PHASES_OPTS.map((p, i) => {
                const colors = ["#FF4D00","#6C2BD9","#00875A","#C17900","#6B7280"];
                const accents = ["#FF8C5A","#A67EF5","#4ECBA0","#F0B429","#9CA3AF"];
                const icons = ["🚀","⚡","✅","🏆","📌"];
                return (
                  <button key={p} onClick={() => set("phase", p)} style={{ padding: "9px 12px", borderRadius: "8px", cursor: "pointer", textAlign: "left", background: form.phase === p ? `${colors[i]}18` : "#0A0A12", border: `1px solid ${form.phase === p ? colors[i] + "50" : "#252535"}`, color: form.phase === p ? accents[i] : "#555", fontSize: "12px", fontFamily: "monospace" }}>{icons[i]} {p}</button>
                );
              })}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Fator Wow — uma linha *</label>
            <input value={form.wow} onChange={e => set("wow", e.target.value)} placeholder="Ex: Candidato contratado sem sair de casa" style={inputStyle} maxLength={100} />
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
            <button onClick={onCancel} style={{ flex: 1, background: "transparent", border: "1px solid #252535", borderRadius: "8px", padding: "11px", color: "#555", fontSize: "13px", cursor: "pointer", fontFamily: "system-ui" }}>Cancelar</button>
            <button onClick={() => canNext && setStep(2)} style={{ flex: 2, background: canNext ? "#6C2BD9" : "#1A1A28", border: "none", borderRadius: "8px", padding: "11px", color: canNext ? "#fff" : "#333", fontSize: "13px", fontWeight: "700", cursor: canNext ? "pointer" : "not-allowed", fontFamily: "system-ui" }}>Próximo →</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ display: "grid", gap: "18px" }}>
          <div style={{ background: "#0A0A12", border: "1px solid #1C1C28", borderRadius: "10px", padding: "14px", display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontSize: "26px" }}>{form.emoji}</span>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "700", color: "#E0DDD8", marginBottom: "2px" }}>{form.title}</div>
              <div style={{ fontSize: "11px", color: "#555", fontFamily: "monospace" }}>{form.persona} · {form.tag} · {form.phase}</div>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Descrição detalhada *</label>
            <textarea value={form.description} onChange={e => set("description", e.target.value)} placeholder="Descreva como essa função funcionaria na prática, qual problema resolve e como o usuário vai interagir com ela..." style={{ ...inputStyle, minHeight: "120px", resize: "vertical", lineHeight: 1.6 }} maxLength={600} />
            <div style={{ fontSize: "10px", color: "#333", fontFamily: "monospace", textAlign: "right", marginTop: "4px" }}>{form.description.length}/600</div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setStep(1)} style={{ flex: 1, background: "transparent", border: "1px solid #252535", borderRadius: "8px", padding: "11px", color: "#555", fontSize: "13px", cursor: "pointer", fontFamily: "system-ui" }}>← Voltar</button>
            <button onClick={() => canSubmit && onAdd(form)} style={{ flex: 2, background: canSubmit ? "linear-gradient(135deg, #6C2BD9, #A67EF5)" : "#1A1A28", border: "none", borderRadius: "8px", padding: "11px", color: canSubmit ? "#fff" : "#333", fontSize: "13px", fontWeight: "700", cursor: canSubmit ? "pointer" : "not-allowed", fontFamily: "system-ui" }}>✦ Adicionar ao Roadmap</button>
          </div>
        </div>
      )}
    </div>
  );
}

function EditCardModal({ card, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: card.title,
    emoji: card.emoji,
    wow: card.wow,
    description: card.description,
    persona: card.persona,
    tag: card.tag,
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const canSave = form.title.trim().length > 2 && form.wow.trim().length > 2 && form.description.trim().length > 5;

  const labelStyle = { fontSize: "11px", color: "#5A5A7A", fontFamily: "monospace", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px", display: "block" };
  const inputStyle = { width: "100%", background: "#0A0A12", border: "1px solid #252535", borderRadius: "8px", padding: "10px 14px", color: "#E0DDD8", fontSize: "14px", fontFamily: "system-ui", outline: "none", boxSizing: "border-box" };
  const selectStyle = { ...inputStyle, cursor: "pointer" };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onCancel}>
      <div style={{ background: "#0E0E1A", border: "1px solid #2A2A40", borderRadius: "18px", padding: "32px", maxWidth: "500px", width: "100%", position: "relative", maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#A67EF5", textTransform: "uppercase", marginBottom: "20px", fontFamily: "monospace" }}>EDITAR CARD</div>

        <div style={{ display: "grid", gap: "16px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0 }}>
              <label style={labelStyle}>Emoji</label>
              <input value={form.emoji} onChange={e => set("emoji", e.target.value)} style={{ ...inputStyle, width: "52px", textAlign: "center", fontSize: "22px", padding: "6px" }} maxLength={4} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Título</label>
              <input value={form.title} onChange={e => set("title", e.target.value)} style={inputStyle} maxLength={80} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Persona</label>
              <select value={form.persona} onChange={e => set("persona", e.target.value)} style={selectStyle}>
                {PERSONAS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Tag</label>
              <select value={form.tag} onChange={e => set("tag", e.target.value)} style={selectStyle}>
                {TAGS_OPTS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Fator Wow</label>
            <input value={form.wow} onChange={e => set("wow", e.target.value)} style={inputStyle} maxLength={100} />
          </div>

          <div>
            <label style={labelStyle}>Descrição</label>
            <textarea value={form.description} onChange={e => set("description", e.target.value)} style={{ ...inputStyle, minHeight: "120px", resize: "vertical", lineHeight: 1.6 }} maxLength={600} />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={onCancel} style={{ flex: 1, background: "transparent", border: "1px solid #252535", borderRadius: "8px", padding: "11px", color: "#555", fontSize: "13px", cursor: "pointer", fontFamily: "system-ui" }}>Cancelar</button>
            <button onClick={() => canSave && onSave(form)} style={{ flex: 2, background: canSave ? "#6C2BD9" : "#1A1A28", border: "none", borderRadius: "8px", padding: "11px", color: canSave ? "#fff" : "#333", fontSize: "13px", fontWeight: "700", cursor: canSave ? "pointer" : "not-allowed", fontFamily: "system-ui" }}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── API helpers ──
async function apiGet(path) {
  const res = await fetch(path);
  return res.json();
}

async function apiCall(path, method, body) {
  fetch(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export default function Roadmap() {
  const [phases, setPhases] = useState(initialPhases);
  const [activeFeature, setActiveFeature] = useState(null);
  const [customCards, setCustomCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [customActiveFeature, setCustomActiveFeature] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingCard, setEditingCard] = useState(null); // { id, isCustom }

  // Load from database on mount
  useEffect(() => {
    Promise.all([apiGet("/api/statuses"), apiGet("/api/custom-cards"), apiGet("/api/edits")])
      .then(([statusMap, cards, editsMap]) => {
        setPhases(initialPhases.map(phase => ({
          ...phase,
          features: phase.features.map(f => ({
            ...f,
            status: statusMap[f.id] || null,
            ...(editsMap[f.id] || {}),
          })),
        })));
        setCustomCards(cards || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const setFeatureStatus = (featureId, status) => {
    setPhases(prev => prev.map(phase => ({
      ...phase,
      features: phase.features.map(f => f.id === featureId ? { ...f, status } : f),
    })));
    apiCall("/api/statuses", "PUT", { featureId, status });
  };

  const clearFeatureStatus = (featureId) => {
    setPhases(prev => prev.map(phase => ({
      ...phase,
      features: phase.features.map(f => f.id === featureId ? { ...f, status: null } : f),
    })));
    apiCall("/api/statuses", "DELETE", { featureId });
  };

  const updateStatus = (featureId, status) => setFeatureStatus(featureId, status);
  const archiveFeature = (featureId) => setFeatureStatus(featureId, "archived");
  const unarchiveFeature = (featureId) => clearFeatureStatus(featureId);

  const updateCustomStatus = (id, status) => {
    setCustomCards(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, status } : c);
      const card = updated.find(c => c.id === id);
      if (card) apiCall("/api/custom-cards", "POST", card);
      return updated;
    });
  };

  const undoCustomStatus = (id) => {
    setCustomCards(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, status: null } : c);
      const card = updated.find(c => c.id === id);
      if (card) apiCall("/api/custom-cards", "POST", card);
      return updated;
    });
  };

  const archiveCustomCard = (id) => updateCustomStatus(id, "archived");

  const unarchiveCustomCard = (id) => {
    setCustomCards(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, status: null } : c);
      const card = updated.find(c => c.id === id);
      if (card) apiCall("/api/custom-cards", "POST", card);
      return updated;
    });
  };

  const addCard = (form) => {
    const phaseIndex = PHASES_OPTS.indexOf(form.phase);
    const phaseColors = ["#FF4D00","#6C2BD9","#00875A","#C17900","#6B7280"];
    const newCard = {
      id: `custom-${Date.now()}`,
      title: form.title,
      emoji: form.emoji,
      persona: form.persona,
      wow: form.wow,
      description: form.description,
      tag: form.tag,
      status: null,
      phaseLabel: form.phase,
      phaseColor: phaseColors[phaseIndex] || "#6B7280",
      phaseIndex,
      createdAt: Date.now(),
    };
    setCustomCards(prev => [...prev, newCard]);
    apiCall("/api/custom-cards", "POST", newCard);
    setShowForm(false);
  };

  const removeCustomCard = (id) => {
    setCustomCards(prev => prev.filter(c => c.id !== id));
    apiCall("/api/custom-cards", "DELETE", { id });
  };

  const editFeature = (featureId, changes) => {
    setPhases(prev => prev.map(phase => ({
      ...phase,
      features: phase.features.map(f => f.id === featureId ? { ...f, ...changes } : f),
    })));
    apiCall("/api/edits", "PUT", { featureId, data: changes });
    setEditingCard(null);
  };

  const editCustomCard = (id, changes) => {
    setCustomCards(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, ...changes } : c);
      const card = updated.find(c => c.id === id);
      if (card) apiCall("/api/custom-cards", "POST", card);
      return updated;
    });
    setEditingCard(null);
  };

  const allFeatures = phases.flatMap(p => p.features);
  const visibleFeatures = allFeatures.filter(f => f.status !== "archived");
  const visibleCustom = customCards.filter(c => c.status !== "archived");
  const archivedFeatures = allFeatures.filter(f => f.status === "archived");
  const archivedCustom = customCards.filter(c => c.status === "archived");
  const totalArchived = archivedFeatures.length + archivedCustom.length;
  const approved = [...visibleFeatures, ...visibleCustom].filter(f => f.status === "approved").length;
  const rejected = [...visibleFeatures, ...visibleCustom].filter(f => f.status === "rejected").length;
  const pending = [...visibleFeatures, ...visibleCustom].filter(f => !f.status).length;
  const decidedFeatures = visibleFeatures.filter(f => f.status === "approved" || f.status === "rejected");

  const isNewCard = (card) => card.createdAt && (Date.now() - card.createdAt < 7 * 24 * 60 * 60 * 1000);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0A0A0F", minHeight: "100vh", color: "#F0EDE6" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #1A0A2E 50%, #0A1628 100%)",
        padding: "56px 40px 40px", textAlign: "center", borderBottom: "1px solid #1A1A22",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,77,0,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(108,43,217,0.09) 0%, transparent 50%)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#FF4D00", textTransform: "uppercase", marginBottom: "14px", fontFamily: "monospace" }}>
            PRODUTO · ROADMAP 2026
          </div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", fontWeight: "900", margin: "0 0 10px", lineHeight: 1.0, letterSpacing: "-3px" }}>
            SeuChef<span style={{ color: "#FF4D00" }}>.</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#7070A0", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.7, fontFamily: "system-ui" }}>
            Funcionalidades para conectar talentos da gastronomia com quem precisa deles — sem fricção, sem burocracia. Aprove ou recuse cada ideia.
          </p>
          {/* Score bar */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ padding: "9px 18px", borderRadius: "100px", background: "rgba(255,255,255,0.04)", border: "1px solid #252530", fontFamily: "monospace", fontSize: "12px", color: "#666" }}>
              {pending} pendentes
            </div>
            <div style={{ padding: "9px 18px", borderRadius: "100px", background: "rgba(0,135,90,0.1)", border: "1px solid rgba(78,203,160,0.3)", fontFamily: "monospace", fontSize: "12px", color: "#4ECBA0" }}>
              {approved} aprovadas
            </div>
            <div style={{ padding: "9px 18px", borderRadius: "100px", background: "rgba(220,38,38,0.08)", border: "1px solid rgba(248,113,113,0.25)", fontFamily: "monospace", fontSize: "12px", color: "#F87171" }}>
              {rejected} recusadas
            </div>
            {totalArchived > 0 && (
              <button onClick={() => setShowArchived(v => !v)} style={{ padding: "9px 18px", borderRadius: "100px", background: "rgba(255,255,255,0.03)", border: "1px solid #252530", fontFamily: "monospace", fontSize: "12px", color: "#555", cursor: "pointer" }}>
                {showArchived ? "Ocultar" : "Ver"} {totalArchived} arquivada{totalArchived > 1 ? "s" : ""}
              </button>
            )}
          </div>
          {loading && (
            <div style={{ marginTop: "20px", fontSize: "12px", color: "#555", fontFamily: "monospace" }}>
              Carregando decisões...
            </div>
          )}
          {!loading && (
            <div style={{ marginTop: "16px", fontSize: "10px", color: "#3A3A48", fontFamily: "monospace" }}>
              Decisões salvas automaticamente no banco de dados
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div style={{ background: "#0C0C14", borderBottom: "1px solid #151520", padding: "14px 40px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { label: "Candidato", color: "#4DB8FF", bg: "rgba(0,119,182,0.1)" },
          { label: "Restaurante", color: "#FF8C5A", bg: "rgba(230,81,0,0.1)" },
          { label: "Ambos", color: "#C084FC", bg: "rgba(147,51,234,0.1)" },
        ].map(p => (
          <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "5px 12px", borderRadius: "100px", background: p.bg }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: p.color }} />
            <span style={{ color: p.color, fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>{p.label}</span>
          </div>
        ))}
      </div>

      {/* Phases */}
      <div style={{ padding: "56px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        {phases.map((phase, phaseIdx) => {
          const phaseCustomCards = visibleCustom.filter(c => c.phaseIndex === phaseIdx);
          const totalPhaseCards = phase.features.filter(f => f.status !== "archived").length + phaseCustomCards.length;
          const phaseApproved = phase.features.filter(f => f.status === "approved").length + phaseCustomCards.filter(c => c.status === "approved").length;
          const totalForProgress = phase.features.length + phaseCustomCards.length;
          const phaseProgress = totalForProgress > 0 ? (phaseApproved / totalForProgress) * 100 : 0;
          return (
            <div key={phase.id} style={{ marginBottom: "72px" }}>
              {/* Phase title */}
              <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "20px" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "14px", flexShrink: 0,
                  background: `linear-gradient(135deg, ${phase.color}, ${phase.accent})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px", boxShadow: `0 6px 28px ${phase.color}35`,
                }}>{phase.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "10px", color: phase.color, fontFamily: "monospace", letterSpacing: "3px", textTransform: "uppercase" }}>{phase.name}</span>
                    <span style={{ fontSize: "10px", color: "#3A3A48", fontFamily: "monospace" }}>{phaseApproved}/{totalForProgress} aprovadas</span>
                  </div>
                  <h2 style={{ fontSize: "24px", fontWeight: "900", margin: 0, letterSpacing: "-0.5px" }}>{phase.subtitle}</h2>
                </div>
              </div>
              {/* Progress */}
              <div style={{ height: "2px", background: "#151520", borderRadius: "100px", marginBottom: "24px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${phaseProgress}%`, background: `linear-gradient(90deg, ${phase.color}, ${phase.accent})`, borderRadius: "100px", transition: "width 0.4s ease" }} />
              </div>
              {/* Cards */}
              <div style={{ paddingLeft: "12px", borderLeft: `2px solid ${phase.color}25` }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "14px" }}>
                  {/* Phase features */}
                  {phase.features.filter(f => f.status !== "archived").map((feat) => {
                    const isOpen = activeFeature === feat.id;
                    const pc = personaColors[feat.persona];
                    const tc = tagColors[feat.tag] || "#666";
                    const isApproved = feat.status === "approved";
                    const isRejected = feat.status === "rejected";
                    return (
                      <div key={feat.id} style={{
                        background: isApproved ? "#0A110D" : isRejected ? "#0D0A0A" : "#111118",
                        border: `1px solid ${isApproved ? "rgba(78,203,160,0.3)" : isRejected ? "rgba(220,38,38,0.15)" : isOpen ? phase.color + "45" : "#1C1C26"}`,
                        borderRadius: "14px", padding: "20px",
                        opacity: isRejected ? 0.5 : 1,
                        transition: "all 0.2s ease",
                        position: "relative", overflow: "hidden",
                      }}>
                        {isApproved && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, #4ECBA0, transparent)` }} />}
                        {/* Header */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                          <div onClick={() => setActiveFeature(isOpen ? null : feat.id)} style={{ fontSize: "28px", cursor: "pointer" }}>{feat.emoji}</div>
                          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                            <span style={{ fontSize: "9px", padding: "2px 7px", borderRadius: "100px", background: pc.bg, color: pc.text, border: `1px solid ${pc.border}`, fontFamily: "monospace" }}>{feat.persona}</span>
                            <span style={{ fontSize: "9px", padding: "2px 7px", borderRadius: "100px", background: tc + "15", color: tc, border: `1px solid ${tc}28`, fontFamily: "monospace" }}>{feat.tag}</span>
                          </div>
                        </div>
                        <h3 onClick={() => setActiveFeature(isOpen ? null : feat.id)} style={{ fontSize: "14px", fontWeight: "700", margin: "0 0 8px", lineHeight: 1.35, color: isRejected ? "#555" : "#EEEAE2", cursor: "pointer" }}>
                          {feat.title}
                        </h3>
                        <div style={{ fontSize: "11px", color: isRejected ? "#444" : phase.accent, fontFamily: "monospace", padding: "5px 9px", background: phase.color + "0C", borderRadius: "5px", borderLeft: `2px solid ${isRejected ? "#252525" : phase.color}`, marginBottom: "10px" }}>
                          ✦ {feat.wow}
                        </div>
                        {isOpen && (
                          <p style={{ fontSize: "13px", color: "#7070A0", lineHeight: 1.75, margin: "0 0 4px", fontFamily: "system-ui" }}>{feat.description}</p>
                        )}
                        {!isOpen && (
                          <div onClick={() => setActiveFeature(feat.id)} style={{ fontSize: "10px", color: "#2E2E3A", fontFamily: "monospace", cursor: "pointer", textAlign: "right" }}>ver detalhes →</div>
                        )}
                        <ApprovalButtons
                          status={feat.status}
                          onApprove={() => updateStatus(feat.id, "approved")}
                          onReject={() => updateStatus(feat.id, "rejected")}
                          onUndo={() => clearFeatureStatus(feat.id)}
                        />
                        <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                          <button onClick={() => setEditingCard({ ...feat, isCustom: false })} style={{
                            flex: 1, background: "transparent", border: "1px solid #1C1C26",
                            borderRadius: "6px", color: "#3A3A48", fontSize: "11px", cursor: "pointer",
                            fontFamily: "monospace", padding: "6px", textAlign: "center",
                          }}>Editar</button>
                          <button onClick={() => archiveFeature(feat.id)} style={{
                            flex: 1, background: "transparent", border: "1px solid #1C1C26",
                            borderRadius: "6px", color: "#3A3A48", fontSize: "11px", cursor: "pointer",
                            fontFamily: "monospace", padding: "6px", textAlign: "center",
                          }}>Arquivar</button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Custom cards for this phase */}
                  {phaseCustomCards.map((feat) => {
                    const isOpen = customActiveFeature === feat.id;
                    const pc = personaColors[feat.persona] || personaColors["Ambos"];
                    const tc = tagColors[feat.tag] || "#6C2BD9";
                    const isApproved = feat.status === "approved";
                    const isRejected = feat.status === "rejected";
                    const isNew = isNewCard(feat);
                    return (
                      <div key={feat.id} style={{ background: isApproved ? "#0A110D" : isRejected ? "#0D0A0A" : "#111118", border: `1px solid ${isApproved ? "rgba(78,203,160,0.3)" : isRejected ? "rgba(220,38,38,0.15)" : isOpen ? phase.color + "45" : "#1C1C26"}`, borderRadius: "14px", padding: "20px", opacity: isRejected ? 0.5 : 1, transition: "all 0.2s ease", position: "relative", overflow: "hidden" }}>
                        {isApproved && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #4ECBA0, transparent)" }} />}
                        {/* NEW badge */}
                        {isNew && (
                          <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "9px", padding: "2px 6px", borderRadius: "4px", background: "rgba(16,185,129,0.2)", color: "#10B981", fontFamily: "monospace", border: "1px solid rgba(16,185,129,0.3)" }}>NEW</div>
                        )}

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                          <div onClick={() => setCustomActiveFeature(isOpen ? null : feat.id)} style={{ fontSize: "28px", cursor: "pointer" }}>{feat.emoji}</div>
                          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "flex-end", paddingTop: isNew ? "20px" : "0px" }}>
                            <span style={{ fontSize: "9px", padding: "2px 7px", borderRadius: "100px", background: pc.bg, color: pc.text, border: `1px solid ${pc.border}`, fontFamily: "monospace" }}>{feat.persona}</span>
                            <span style={{ fontSize: "9px", padding: "2px 7px", borderRadius: "100px", background: tc + "15", color: tc, border: `1px solid ${tc}28`, fontFamily: "monospace" }}>{feat.tag}</span>
                          </div>
                        </div>

                        <h3 onClick={() => setCustomActiveFeature(isOpen ? null : feat.id)} style={{ fontSize: "14px", fontWeight: "700", margin: "0 0 8px", lineHeight: 1.35, color: isRejected ? "#555" : "#EEEAE2", cursor: "pointer" }}>{feat.title}</h3>

                        <div style={{ fontSize: "11px", color: isRejected ? "#444" : phase.accent, fontFamily: "monospace", padding: "5px 9px", background: phase.color + "0C", borderRadius: "5px", borderLeft: `2px solid ${isRejected ? "#252525" : phase.color}`, marginBottom: "10px" }}>✦ {feat.wow}</div>

                        {isOpen && <p style={{ fontSize: "13px", color: "#7070A0", lineHeight: 1.75, margin: "0 0 4px", fontFamily: "system-ui" }}>{feat.description}</p>}
                        {!isOpen && <div onClick={() => setCustomActiveFeature(feat.id)} style={{ fontSize: "10px", color: "#2E2E3A", fontFamily: "monospace", cursor: "pointer", textAlign: "right" }}>ver detalhes →</div>}

                        <ApprovalButtons status={feat.status} onApprove={() => updateCustomStatus(feat.id, "approved")} onReject={() => updateCustomStatus(feat.id, "rejected")} onUndo={() => undoCustomStatus(feat.id)} />

                        <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                          <button onClick={() => setEditingCard({ ...feat, isCustom: true })} style={{
                            flex: 1, background: "transparent", border: "1px solid #1C1C26",
                            borderRadius: "6px", color: "#3A3A48", fontSize: "11px", cursor: "pointer",
                            fontFamily: "monospace", padding: "6px", textAlign: "center",
                          }}>Editar</button>
                          <button onClick={() => archiveCustomCard(feat.id)} style={{
                            flex: 1, background: "transparent", border: "1px solid #1C1C26",
                            borderRadius: "6px", color: "#3A3A48", fontSize: "11px", cursor: "pointer",
                            fontFamily: "monospace", padding: "6px", textAlign: "center",
                          }}>Arquivar</button>
                          <button onClick={() => removeCustomCard(feat.id)} style={{
                            flex: 1, background: "transparent", border: "1px solid #1C1C26",
                            borderRadius: "6px", color: "#2A2A3A", fontSize: "11px", cursor: "pointer",
                            fontFamily: "monospace", padding: "6px", textAlign: "center",
                          }}>Remover</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Summary panel */}
        {decidedFeatures.length > 0 && (
          <div style={{ background: "#0C0C14", border: "1px solid #1C1C26", borderRadius: "20px", padding: "32px", marginBottom: "48px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#444", textTransform: "uppercase", marginBottom: "18px", fontFamily: "monospace" }}>
              RESUMO DAS DECISÕES — {decidedFeatures.length} de {allFeatures.length} avaliadas
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
              {decidedFeatures.map(f => (
                <div key={f.id} style={{
                  display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "9px",
                  background: f.status === "approved" ? "rgba(0,135,90,0.08)" : "rgba(220,38,38,0.06)",
                  border: `1px solid ${f.status === "approved" ? "rgba(78,203,160,0.18)" : "rgba(248,113,113,0.15)"}`,
                }}>
                  <span style={{ fontSize: "16px", flexShrink: 0 }}>{f.emoji}</span>
                  <span style={{ fontSize: "11px", color: f.status === "approved" ? "#4ECBA0" : "#F87171", fontFamily: "system-ui", lineHeight: 1.3 }}>{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ADD NEW IDEA BUTTON / FORM ── */}
        <div style={{ marginBottom: "48px" }}>
          {!showForm ? (
            <button onClick={() => setShowForm(true)} style={{
              width: "100%", background: "transparent",
              border: "2px dashed #252535", borderRadius: "14px", padding: "28px",
              cursor: "pointer", transition: "all 0.2s",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#6C2BD9"; e.currentTarget.style.background = "#6C2BD908"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#252535"; e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#6C2BD918", border: "1px solid #6C2BD940", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>+</div>
              <div>
                <div style={{ color: "#A67EF5", fontSize: "14px", fontWeight: "700", fontFamily: "system-ui", marginBottom: "4px" }}>Adicionar nova ideia ao roadmap</div>
                <div style={{ color: "#3A3A4A", fontSize: "12px", fontFamily: "monospace" }}>Preencha título, categoria, persona e descrição</div>
              </div>
            </button>
          ) : (
            <NewCardForm onAdd={addCard} onCancel={() => setShowForm(false)} />
          )}
        </div>


        {/* ── ARCHIVED SECTION ── */}
        {showArchived && totalArchived > 0 && (
          <div style={{ marginBottom: "72px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "20px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", flexShrink: 0, background: "linear-gradient(135deg, #333, #555)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>📦</div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: "10px", color: "#555", fontFamily: "monospace", letterSpacing: "3px", textTransform: "uppercase" }}>ARQUIVADAS</span>
                <h2 style={{ fontSize: "24px", fontWeight: "900", margin: 0, letterSpacing: "-0.5px", color: "#555" }}>{totalArchived} card{totalArchived > 1 ? "s" : ""} arquivado{totalArchived > 1 ? "s" : ""}</h2>
              </div>
            </div>
            <div style={{ paddingLeft: "12px", borderLeft: "2px solid #25253525" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "14px" }}>
                {[...archivedFeatures, ...archivedCustom].map(feat => (
                  <div key={feat.id} style={{ background: "#0C0C12", border: "1px solid #1A1A22", borderRadius: "14px", padding: "20px", opacity: 0.6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ fontSize: "22px" }}>{feat.emoji}</span>
                      <h3 style={{ fontSize: "13px", fontWeight: "700", color: "#777", margin: 0 }}>{feat.title}</h3>
                    </div>
                    <div style={{ fontSize: "11px", color: "#444", fontFamily: "monospace", marginBottom: "10px" }}>✦ {feat.wow}</div>
                    <button onClick={() => feat.id.toString().startsWith("custom") ? unarchiveCustomCard(feat.id) : unarchiveFeature(feat.id)} style={{
                      width: "100%", background: "rgba(108,43,217,0.08)", border: "1px solid rgba(108,43,217,0.25)",
                      borderRadius: "6px", color: "#A67EF5", fontSize: "11px", cursor: "pointer",
                      fontFamily: "monospace", padding: "8px", textAlign: "center",
                    }}>Desarquivar</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div style={{ background: "linear-gradient(135deg, #14060A, #060A18)", border: "1px solid #1C1522", borderRadius: "22px", padding: "48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,77,0,0.04) 0%, transparent 65%)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "34px", marginBottom: "12px" }}>🌟</div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#FF4D00", textTransform: "uppercase", marginBottom: "10px", fontFamily: "monospace" }}>NORTH STAR</div>
            <h3 style={{ fontSize: "26px", fontWeight: "900", margin: "0 0 12px", letterSpacing: "-1px" }}>
              "Candidato contratado<br />em 1 entrevista ou menos"
            </h3>
            <p style={{ color: "#444", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75, fontFamily: "system-ui", fontSize: "13px" }}>
              LinkedIn + Uber + Tinder — um sistema de match profissional para food service que transforma a contratação gastronômica no Brasil.
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "28px", borderTop: "1px solid #141420", color: "#252535", fontSize: "10px", fontFamily: "monospace" }}>
        SeuChef Roadmap · {allFeatures.length + customCards.length} funções · 5 categorias
      </div>

      {/* Edit modal */}
      {editingCard && (
        <EditCardModal
          card={editingCard}
          onCancel={() => setEditingCard(null)}
          onSave={(changes) => {
            if (editingCard.isCustom) {
              editCustomCard(editingCard.id, changes);
            } else {
              editFeature(editingCard.id, changes);
            }
          }}
        />
      )}
    </div>
  );
}
