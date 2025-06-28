const questions = [
  {
    question: "Na guarda De La Riva, qual perna é usada para envolver a perna do adversário?",
    answers: ['Perna oposta da pegada na manga', 'Perna do mesmo lado da pegada no colar', 'Perna de fora', 'Perna de dentro'],
    correct: 3
  },
  {
    question: "O que caracteriza uma raspagem inválida segundo a IBJJF?",
    answers: ['O atleta não estabiliza por 3 segundos', 'O atleta usa pegada na calça', 'O atleta está com a guarda invertida', 'O atleta raspa e imediatamente cai fora do tatame'],
    correct: 3
  },
  {
    question: "Qual a pontuação por sair da montada para uma posição neutra?",
    answers: ['2 pontos', '0 pontos', '3 pontos', '1 vantagem'],
    correct: 1
  },
  {
    question: "Qual é a penalidade por puxar para guarda diretamente sem pegar na lapela ou manga?",
    answers: ['Nenhuma', 'Vantagem para o adversário', 'Advertência', 'Punição com ponto'],
    correct: 2
  },
  {
    question: "O que define uma pegada legal no quimono?",
    answers: ['Até 4 dedos dentro da manga', 'Qualquer número de dedos', 'Pegar na gola sem os dedos', 'Apenas pegada com as palmas'],
    correct: 0
  },
  {
    question: "Qual dessas posições pode resultar em desclassificação caso usada indevidamente por faixa azul?",
    answers: ['Leg lock reto', 'Toe hold', 'Heel hook', 'Chave de panturrilha'],
    correct: 2
  },
  {
    question: "Quem criou a guarda X?",
    answers: ['Rickson Gracie', 'Rafael Mendes', 'Marcelo Garcia', 'Leandro Lo'],
    correct: 2
  },
  {
    question: "A omoplata ataca qual articulação?",
    answers: ['Ombro', 'Cotovelo', 'Pulso', 'Cervical'],
    correct: 0
  },
  {
    question: "Qual é a principal diferença entre a kimura e a americana?",
    answers: ['O braço está posicionado para frente na kimura', 'A kimura envolve rotação externa do ombro', 'A americana ataca o cotovelo', 'A kimura é usada apenas por baixo'],
    correct: 1
  },
  {
    question: "Quantas vantagens são necessárias para vencer em caso de empate total em pontos e punições?",
    answers: ['1 vantagem', '2 vantagens', '3 vantagens', 'Nenhuma, o empate leva à decisão dos árbitros'],
    correct: 3
  },
  {
    question: "Em que situação um atleta pode receber 2 pontos mesmo sem raspar ou passar guarda?",
    answers: ['Ao defender uma queda e o adversário cair', 'Ao puxar para guarda e estabilizar', 'Ao forçar o adversário a se levantar', 'Ao iniciar de joelhos e levantar com pegada'],
    correct: 0
  },
  {
    question: "Qual foi o primeiro brasileiro campeão absoluto no ADCC?",
    answers: ['Ricardo Arona', 'André Galvão', 'Ronaldo Jacaré', 'Amaury Bitetti'],
    correct: 3
  },
  {
    question: "Quantos segundos são necessários para que um atleta receba pontos por estabilizar a montada?",
    answers: ['2', '3', '5', '4'],
    correct: 1
  },
  {
    question: "Na IBJJF, qual é o tempo mínimo de permanência na faixa marrom antes de ir pra preta?",
    answers: ['1 ano', '6 meses', '2 anos', 'Não há tempo definido'],
    correct: 0
  },
  {
    question: "Qual foi a primeira equipe campeã por pontos no Mundial da IBJJF?",
    answers: ['Gracie Barra', 'Carlson Gracie Team', 'Alliance', 'Nova União'],
    correct: 2
  },
  {
    question: "Em qual posição é mais comum aplicar o ataque chamado “Ezekiel”?",
    answers: ['De dentro da guarda', 'Montada', 'Cem quilos', 'Pegada de costas'],
    correct: 1
  },
  {
    question: "Qual dessas NÃO é uma transição natural da guarda borboleta?",
    answers: ['X-guard', 'De La Riva', 'Single leg X', 'Raspagem elevador'],
    correct: 1
  },
  {
    question: "Em que categoria de idade e faixa o atleta só pode usar estrangulamento e não pode usar chave de braço?",
    answers: ['Infantil B – faixa cinza', 'Juvenil – faixa azul', 'Adulto – faixa branca', 'Infantil A – faixa laranja'],
    correct: 3
  },
  {
    question: "O que é \"berimbolo\"?",
    answers: ['Um tipo de raspagem invertida com rotação', 'Um estrangulamento usando lapela', 'Um controle lateral', 'Uma defesa contra double leg'],
    correct: 0
  },
  {
    question: "Qual é a posição de origem para iniciar a guarda lapela spider?",
    answers: ['De La Riva invertida', 'Guarda X', 'Guarda aberta com pegada na lapela e pés nos bíceps', 'Meia-guarda profunda'],
    correct: 2
  },
  {
    question: "Quem foi o único atleta a vencer o absoluto faixa preta no Mundial IBJJF e no ADCC no mesmo ano?",
    answers: ['Marcus Buchecha', 'Roger Gracie', 'André Galvão', 'Ronaldo Jacaré'],
    correct: 3
  },
  {
    question: "Qual é o nome da técnica de estrangulamento com lapela executado do cem quilos, onde a lapela é passada por baixo da cabeça?",
    answers: ['Brabo choke', 'Paper cutter', 'Lapel choke invertido', 'Ezekiel lapela'],
    correct: 1
  },
  {
    question: "Em situações específicas, quantos pontos podem ser retirados por punições acumuladas (seguidas)?",
    answers: ['0', '1', '2', 'A luta é encerrada sem pontuação'],
    correct: 2
  },
  {
    question: "No sistema IBJJF, após quantos anos na faixa preta o atleta pode atingir o 7º grau?",
    answers: ['30', '31', '24', '27'],
    correct: 0
  },
  {
    question: "Qual técnica envolve o uso da lapela do adversário presa entre as pernas, criando um laço de controle?",
    answers: ['Worm guard', 'Lasso invertido', 'Panty choke', 'Snare guard'],
    correct: 0
  },
  {
    question: "Quem é o criador da “Guarda 50/50”?",
    answers: ['Rafael Mendes', 'João Miyao', 'Ryan Hall', 'Leonardo Vieira'],
    correct: 2
  },
  {
    question: "O que significa “pontuação técnica” no sistema ADCC?",
    answers: ['Pontos por vantagens', 'Pontos subjetivos atribuídos pelos juízes', 'Pontos atribuídos após o tempo inicial sem pontuação', 'Somente em finais absolutas'],
    correct: 2
  },
  {
    question: "Qual é a maior pontuação possível numa única sequência de ataque válida pela IBJJF?",
    answers: ['7 pontos (queda + passagem + montada)', '9 pontos (raspagem + passagem + pegada de costas)', '10 pontos (raspagem + montada + finalização)', '6 pontos (queda + pegada de costas)'],
    correct: 1
  },
  {
    question: "Qual é a diferença entre o estrangulamento “bow and arrow” e o “brabo choke”?",
    answers: ['O brabo é aplicado da meia-guarda ou cem quilos com lapela; o bow and arrow é das costas', 'O bow and arrow usa o braço; o brabo, as pernas', 'O brabo é legal apenas na faixa preta', 'O bow and arrow estrangula pelo pescoço frontal'],
    correct: 0
  },
  {
    question: "Qual foi o motivo da desclassificação histórica de Felipe Pena contra Gordon Ryan no ADCC 2022?",
    answers: ['Uso de substância proibida', 'Interferência de técnico', 'Saída voluntária do tatame sem lesão', 'Nenhuma, ele não foi desclassificado'],
    correct: 3
  }
];

let current = 0;
let selected = null;
let score = 0;

function startQuiz() {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("quiz").classList.add("active");
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const answers = document.getElementById("answers");
  answers.innerHTML = "";
  q.answers.forEach((a, i) => {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.textContent = a;
    div.onclick = () => selectAnswer(i);
    answers.appendChild(div);
  });
  selected = null;
}

function selectAnswer(index) {
  const options = document.querySelectorAll(".answer");
  options.forEach(el => el.classList.remove("selected"));
  options[index].classList.add("selected");
  selected = index;
}

function checkAnswer() {
  if (selected === null) return;
  document.getElementById("quiz").classList.remove("active");
  document.getElementById("feedback").classList.add("active");
  const correct = questions[current].correct;
  if (selected === correct) {
    document.getElementById("feedback-message").textContent = "Você acertou!";
    document.getElementById("feedback-message").style.color = "limegreen"; // muda a cor da fonte
    document.getElementById("feedback").style.background = "#004400";
    document.getElementById("feedback-button").textContent = "Próxima Pergunta";
    document.getElementById("feedback-button").style.background = "#228B22";
    score++;
  } else {
    document.getElementById("feedback-message").textContent = "Você errou!";
    document.getElementById("feedback-message").style.color = "red"; // mantém a cor de erro
    document.getElementById("feedback").style.background = "#440000";
    document.getElementById("feedback-button").textContent = "Tente novamente";
    document.getElementById("feedback-button").style.background = "#8B0000";
  }
}

function handleFeedbackAction() {
  document.getElementById("feedback").classList.remove("active");
  if (selected === questions[current].correct) {
    current++;
    if (current < questions.length) {
      document.getElementById("quiz").classList.add("active");
      showQuestion();
    } else {
      document.getElementById("final").classList.add("active");
      document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    }
  } else {
    document.getElementById("quiz").classList.add("active");
  }
}

function restartQuiz() {
  current = 0;
  score = 0;
  selected = null;
  document.getElementById("final").classList.remove("active");
  document.getElementById("quiz").classList.add("active");
  showQuestion();
}
