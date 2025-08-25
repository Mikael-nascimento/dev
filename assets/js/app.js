// =========================
// Dados do Quiz (HTML, CSS, JS)
// =========================


function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}




// Perguntas de HTML
const Q_HTML = [
  {
    q: "Qual tag é usada para criar um link?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    q: "Qual atributo define o texto alternativo de uma imagem?",
    options: ["src", "alt", "title", "description"],
    answer: 1
  },
  {
    q: "Qual tag representa o maior título?",
    options: ["<title>", "<heading>", "<h1>", "<head>"],
    answer: 2
  },
  {
    q: "Qual tag cria uma lista não ordenada?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 0
  },
  {
    q: "Qual elemento é usado para criar uma tabela?",
    options: ["<td>", "<tr>", "<table>", "<th>"],
    answer: 2
  },
  {
    q: "Qual tag insere uma linha horizontal?",
    options: ["<line>", "<hr>", "<br>", "<border>"],
    answer: 1
  },
  {
    q: "Qual elemento define uma citação em bloco?",
    options: ["<blockquote>", "<quote>", "<cite>", "<q>"],
    answer: 0
  },
  {
    q: "Qual atributo abre um link em nova aba?",
    options: ["open", "target='_blank'", "new", "tab"],
    answer: 1
  },
  {
    q: "Qual tag é usada para listas ordenadas?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 1
  },
  {
    q: "Qual elemento define um formulário?",
    options: ["<input>", "<form>", "<fieldset>", "<label>"],
    answer: 1
  },
  // +10 perguntas extras
  {
    q: "Qual atributo de input cria uma senha oculta?",
    options: ["type='text'", "type='hidden'", "type='password'", "type='secure'"],
    answer: 2
  },
  {
    q: "Qual elemento é usado para agrupar opções em um select?",
    options: ["<option>", "<optgroup>", "<group>", "<fieldset>"],
    answer: 1
  },
  {
    q: "Qual elemento HTML semântico indica rodapé?",
    options: ["<bottom>", "<footer>", "<end>", "<section>"],
    answer: 1
  },
  {
    q: "Qual atributo torna um campo obrigatório?",
    options: ["validate", "required", "must", "need"],
    answer: 1
  },
  {
    q: "Qual elemento representa conteúdo principal?",
    options: ["<main>", "<body>", "<section>", "<article>"],
    answer: 0
  },
  {
    q: "Qual tag é usada para incorporar vídeo?",
    options: ["<video>", "<media>", "<movie>", "<embed>"],
    answer: 0
  },
  {
    q: "Qual elemento HTML5 define navegação?",
    options: ["<nav>", "<menu>", "<ul>", "<path>"],
    answer: 0
  },
  {
    q: "Qual tag é usada para cabeçalho de tabela?",
    options: ["<th>", "<thead>", "<header>", "<hcell>"],
    answer: 0
  },
  {
    q: "Qual elemento define texto importante?",
    options: ["<strong>", "<b>", "<important>", "<mark>"],
    answer: 0
  },
  {
    q: "Qual atributo especifica o idioma da página?",
    options: ["lang", "locale", "charset", "dir"],
    answer: 0
  }
];

// Perguntas de CSS
const Q_CSS = [
  {
    q: "Qual propriedade define a cor do texto?",
    options: ["background-color", "font-color", "color", "text-color"],
    answer: 2
  },
  {
    q: "Qual propriedade define a altura da linha?",
    options: ["font-size", "line-height", "height", "spacing"],
    answer: 1
  },
  {
    q: "Qual unidade relativa depende do elemento pai?",
    options: ["px", "em", "%", "rem"],
    answer: 1
  },
  {
    q: "Qual seletor aplica estilo a todos os parágrafos?",
    options: ["p{}", ".p{}", "#p{}", "*p{}"],
    answer: 0
  },
  {
    q: "Qual propriedade controla o espaçamento interno?",
    options: ["padding", "margin", "gap", "border"],
    answer: 0
  },
  {
    q: "Qual propriedade define cantos arredondados?",
    options: ["circle", "corner", "border-radius", "round"],
    answer: 2
  },
  {
    q: "Qual comando importa uma fonte externa?",
    options: ["@import-font", "@font", "@import", "@font-face"],
    answer: 2
  },
  {
    q: "Qual propriedade controla a ordem de camadas?",
    options: ["index", "z-order", "z-index", "layer"],
    answer: 2
  },
  {
    q: "Qual propriedade define uma sombra no texto?",
    options: ["shadow", "box-shadow", "text-shadow", "font-shadow"],
    answer: 2
  },
  {
    q: "Qual valor de position mantém o elemento fixo?",
    options: ["absolute", "fixed", "relative", "sticky"],
    answer: 1
  },
  // +10 perguntas extras
  {
    q: "Qual seletor aplica estilo apenas ao primeiro filho?",
    options: [":first-child", ":first", ":child(1)", ":nth(1)"],
    answer: 0
  },
  {
    q: "Qual propriedade muda a opacidade?",
    options: ["alpha", "visibility", "opacity", "filter"],
    answer: 2
  },
  {
    q: "Qual propriedade define transição suave?",
    options: ["transition", "animation", "ease", "smooth"],
    answer: 0
  },
  {
    q: "Qual função CSS repete uma imagem?",
    options: ["image-repeat", "repeat-img", "background-repeat", "bg-loop"],
    answer: 2
  },
  {
    q: "Qual pseudo-classe estiliza links visitados?",
    options: [":hover", ":visited", ":active", ":focus"],
    answer: 1
  },
  {
    q: "Qual unidade é relativa ao tamanho da viewport?",
    options: ["em", "px", "vh/vw", "%"],
    answer: 2
  },
  {
    q: "Qual propriedade controla layout flexível?",
    options: ["display: flex", "flex-box", "box-flex", "flex-grid"],
    answer: 0
  },
  {
    q: "Qual comando define uma variável CSS?",
    options: ["var()", "--nome", "$nome", "@nome"],
    answer: 1
  },
  {
    q: "Qual seletor aplica estilo a todos elementos?",
    options: ["*", "all", "root", "body"],
    answer: 0
  },
  {
    q: "Qual propriedade define espaçamento entre colunas?",
    options: ["gap", "column-gap", "spacing", "margin"],
    answer: 1
  }
];

// Perguntas de JavaScript
const Q_JS = [
  {
    q: "Qual palavra-chave declara uma constante?",
    options: ["let", "const", "var", "static"],
    answer: 1
  },
  {
    q: "Qual método converte JSON em objeto?",
    options: ["JSON.stringify", "JSON.parse", "toObject", "parseJSON"],
    answer: 1
  },
  {
    q: "Qual operador compara valor e tipo?",
    options: ["==", "=", "===", "!="],
    answer: 2
  },
  {
    q: "Qual função exibe no console?",
    options: ["print()", "console.log()", "log()", "alert()"],
    answer: 1
  },
  {
    q: "Qual método adiciona item ao final de array?",
    options: ["push()", "append()", "add()", "insert()"],
    answer: 0
  },
  {
    q: "Qual método remove o último elemento do array?",
    options: ["pop()", "shift()", "splice()", "remove()"],
    answer: 0
  },
  {
    q: "Qual evento dispara ao clicar?",
    options: ["onchange", "onclick", "oninput", "onsubmit"],
    answer: 1
  },
  {
    q: "Qual estrutura repete até condição ser falsa?",
    options: ["if", "while", "switch", "break"],
    answer: 1
  },
  {
    q: "Qual método converte string para inteiro?",
    options: ["parseInt()", "int()", "Number()", "toInt()"],
    answer: 0
  },
  {
    q: "Qual palavra-chave pausa uma função async?",
    options: ["stop", "pause", "await", "yield"],
    answer: 2
  },
  // +10 extras
  {
    q: "Qual método cria novo array filtrado?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    answer: 2
  },
  {
    q: "Qual símbolo indica template string?",
    options: ["\"", "'", "`", "#"],
    answer: 2
  },
  {
    q: "Qual objeto representa tempo atual?",
    options: ["Time", "Date", "Clock", "Moment"],
    answer: 1
  },
  {
    q: "Qual método adiciona item no início do array?",
    options: ["push()", "unshift()", "prepend()", "start()"],
    answer: 1
  },
  {
    q: "Qual função gera número aleatório entre 0 e 1?",
    options: ["Math.random()", "random()", "rand()", "number()"],
    answer: 0
  },
  {
    q: "Qual operador lógico significa 'e'?",
    options: ["||", "&&", "and", "&"],
    answer: 1
  },
  {
    q: "Qual estrutura cria funções anônimas?",
    options: ["function", "arrow function", "method", "class"],
    answer: 1
  },
  {
    q: "Qual método ordena array?",
    options: ["order()", "sort()", "arrange()", "sequence()"],
    answer: 1
  },
  {
    q: "Qual evento dispara ao enviar formulário?",
    options: ["onsubmit", "onclick", "onchange", "oninput"],
    answer: 0
  },
  {
    q: "Qual comando interrompe um laço?",
    options: ["exit", "break", "stop", "return"],
    answer: 1
  }
];

// =========================
// Funções utilitárias
// =========================
const sample = (arr, n) => arr.sort(() => Math.random() - 0.5).slice(0, n);
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// =========================
// Estado do jogo
// =========================
let currentQuestions = [];
let currentIndex = 0;
let points = parseInt(localStorage.getItem("points") || "0");
let streak = parseInt(localStorage.getItem("streak") || "0");
let bestStreak = parseInt(localStorage.getItem("bestStreak") || "0");
let quizzesDone = parseInt(localStorage.getItem("quizzes") || "0");
let timerInterval;
let timeLeft = 15;

// =========================
// DOM elements
// =========================
const screens = document.querySelectorAll(".screen");
const statPoints = document.getElementById("stat-points");
const statStreak = document.getElementById("stat-streak");
const statQuizzes = document.getElementById("stat-quizzes");
const btnBack = document.getElementById("btn-back");
const btnSkip = document.getElementById("btn-skip");
const btnNext = document.getElementById("btn-next");
const quizCategory = document.getElementById("quiz-category");
const quizProgress = document.getElementById("quiz-progress");
const timerEl = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const rankingList = document.getElementById("ranking-list");
document.getElementById("year").textContent = new Date().getFullYear();

// =========================
// Atualizar stats iniciais
// =========================
const updateStats = () => {
  statPoints.textContent = points;
  statStreak.textContent = bestStreak;
  statQuizzes.textContent = quizzesDone;
};
updateStats();

// =========================
// Navegação simples
// =========================
document.querySelectorAll(".nav__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const route = btn.dataset.route;
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(`screen-${route}`).classList.add("active");
  });
});

btnBack.addEventListener("click", () => {
  clearInterval(timerInterval);
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById("screen-home").classList.add("active");
  updateStats();
});

// =========================
// Iniciar quiz
// =========================
document.querySelectorAll(".start-quiz").forEach(btn => {
  btn.addEventListener("click", () => {
    let category = btn.dataset.category;
    if (category === "html") currentQuestions = sample(Q_HTML, 10);
    else if (category === "css") currentQuestions = sample(Q_CSS, 10);
    else if (category === "js") currentQuestions = sample(Q_JS, 10);
    else {
      currentQuestions = sample([...Q_HTML, ...Q_CSS, ...Q_JS], 10);
    }
    currentIndex = 0;
    quizCategory.textContent = category.toUpperCase();
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById("screen-quiz").classList.add("active");
    loadQuestion();
  });
});

// =========================
// Carregar pergunta
// =========================
function loadQuestion() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerEl.textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      selectAnswer(-1);
    }
  }, 1000);

  const q = currentQuestions[currentIndex];
  questionText.textContent = q.q;
  answersList.innerHTML = "";
  shuffle(q.options).forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.addEventListener("click", () => selectAnswer(q.options.indexOf(opt)));
    answersList.appendChild(li);
  });
  quizProgress.textContent = `${currentIndex + 1}/${currentQuestions.length}`;
  feedbackEl.textContent = "";
  btnNext.disabled = true;
}

// =========================
// Selecionar resposta
// =========================
function selectAnswer(selected) {
  clearInterval(timerInterval);
  const correct = currentQuestions[currentIndex].answer;
  const lis = answersList.querySelectorAll("li");
  lis.forEach((li, idx) => {
    if (currentQuestions[currentIndex].options[idx] === currentQuestions[currentIndex].options[correct]) {
      li.classList.add("correct");
    } else if (currentQuestions[currentIndex].options[idx] === currentQuestions[currentIndex].options[selected] && selected !== correct) {
      li.classList.add("wrong");
    }
    li.style.pointerEvents = "none";
  });

  if (selected === correct) {
    points += 10;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    feedbackEl.textContent = "Correto!";
  } else {
    streak = 0;
    feedbackEl.textContent = "Errado!";
  }
  localStorage.setItem("points", points);
  localStorage.setItem("streak", streak);
  localStorage.setItem("bestStreak", bestStreak);
  btnNext.disabled = false;
}

// =========================
// Próxima pergunta
// =========================
btnNext.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    quizzesDone++;
    localStorage.setItem("quizzes", quizzesDone);
    updateRanking();
    btnBack.click();
  }
});

btnSkip.addEventListener("click", () => selectAnswer(-1));

// =========================
// Ranking local
// =========================
function updateRanking() {
  const record = {
    date: new Date().toLocaleString(),
    points: points,
    streak: bestStreak
  };
  let history = JSON.parse(localStorage.getItem("history") || "[]");
  history.push(record);
  localStorage.setItem("history", JSON.stringify(history));
  renderRanking();
}

function renderRanking() {
  let history = JSON.parse(localStorage.getItem("history") || "[]");
  rankingList.innerHTML = "";
  history.slice(-10).reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "ranking-item";
    div.innerHTML = `<strong>${item.points} pts</strong> — Streak ${item.streak} <small>${item.date}</small>`;
    rankingList.appendChild(div);
  });
}
renderRanking();

document.getElementById("btn-clear").addEventListener("click", () => {
  localStorage.removeItem("history");
  renderRanking();
});




// Fechar menu ao navegar (para mobile)
document.querySelectorAll(".nav__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".nav").classList.remove("open");
  });
});
