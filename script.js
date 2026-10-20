/* ==========================================================
   B2 ENGLISH CHALLENGE — QUIZ LOGIC
   All-in-one: data, quotes, quiz engine, results
   ========================================================== */

/* ---------- READING PASSAGE ---------- */
const READING_PASSAGE = `The Value of Learning New Skills

In today's rapidly changing world, learning new skills has become increasingly important. Many people believe that education ends when they leave school or university, but continuous learning can help individuals adapt to new challenges and opportunities.

Learning does not always require formal classes. Reading books, watching educational videos, practising a language, and learning from personal experiences can all contribute to personal development. Although learning something new may feel uncomfortable at first, persistence often leads to improvement and greater confidence.

However, people sometimes give up because they expect immediate results. Real progress usually takes time, patience, and consistent effort. Instead of focusing only on mistakes, learners should treat them as opportunities to improve.`;

/* ---------- QUESTIONS ---------- */
const QUESTIONS = [
  { section: "Section 1 · Grammar", q: "If I had known about the meeting, I _____ attended it.", options: ["would have", "will have", "would", "had"], correct: 0 },
  { section: "Section 1 · Grammar", q: "She suggested _____ a different approach to the problem.", options: ["to try", "trying", "try", "tried"], correct: 1 },
  { section: "Section 1 · Grammar", q: "By the time we arrived, the film _____.", options: ["has already started", "already starts", "had already started", "was already start"], correct: 2 },
  { section: "Section 1 · Grammar", q: "Hardly _____ the house when it started raining.", options: ["we had left", "had we left", "we left", "did we left"], correct: 1 },
  { section: "Section 1 · Grammar", q: "She asked me where _____.", options: ["did I live", "do I live", "I lived", "am I living"], correct: 2 },

  { section: "Section 2 · Vocabulary", q: "What does \"reluctant\" mean?", options: ["Unwilling or hesitant", "Extremely excited", "Completely certain", "Very generous"], correct: 0 },
  { section: "Section 2 · Vocabulary", q: "What does \"inevitable\" mean?", options: ["Easy to avoid", "Impossible to avoid", "Difficult to explain", "Unlikely to happen"], correct: 1 },
  { section: "Section 2 · Vocabulary", q: "What does \"ambiguous\" mean?", options: ["Very detailed", "Easy to understand", "Unclear or having more than one meaning", "Completely incorrect"], correct: 2 },
  { section: "Section 2 · Vocabulary", q: "What does \"resilient\" mean?", options: ["Easily frightened", "Able to recover from difficulties", "Unwilling to learn", "Extremely impatient"], correct: 1 },
  { section: "Section 2 · Vocabulary", q: "What does \"meticulous\" mean?", options: ["Careless and hurried", "Quiet and shy", "Very careful and attentive to detail", "Confused and uncertain"], correct: 2 },

  { section: "Section 3 · Idioms & Phrasal Verbs", q: "What does \"put off\" mean?\n\n\"They put off the meeting until Friday.\"", options: ["Cancel permanently", "Postpone", "Attend", "Organize"], correct: 1 },
  { section: "Section 3 · Idioms & Phrasal Verbs", q: "What does \"get along with someone\" mean?", options: ["Have a good relationship with someone", "Argue with someone", "Avoid someone", "Compete with someone"], correct: 0 },
  { section: "Section 3 · Idioms & Phrasal Verbs", q: "What does \"once in a blue moon\" mean?", options: ["Every day", "Very quickly", "Very rarely", "At night"], correct: 2 },
  { section: "Section 3 · Idioms & Phrasal Verbs", q: "What does \"look up to someone\" mean?", options: ["Search for someone", "Admire and respect someone", "Look at someone from above", "Ask someone for directions"], correct: 1 },
  { section: "Section 3 · Idioms & Phrasal Verbs", q: "What does \"run out of something\" mean?", options: ["Escape from a place", "Finish something before using it", "Have no more of something left", "Spend money carelessly"], correct: 2 },

  { section: "Section 4 · Reading Comprehension", q: "What is the main idea of the text?", options: ["Formal education is the only useful type of learning.", "Continuous learning helps people develop and adapt.", "Learning new skills is always easy.", "People should avoid making mistakes."], correct: 1, passage: true },
  { section: "Section 4 · Reading Comprehension", q: "According to the text, how can people learn outside formal classes?", options: ["Only by attending university.", "By avoiding unfamiliar situations.", "Through reading, practising, and personal experiences.", "By waiting for opportunities."], correct: 2, passage: true },
  { section: "Section 4 · Reading Comprehension", q: "Why do some people give up learning?", options: ["They expect immediate results.", "They have too many skills.", "They enjoy making mistakes.", "They prefer consistent effort."], correct: 0, passage: true },
  { section: "Section 4 · Reading Comprehension", q: "What does \"persistence\" most nearly mean in the text?", options: ["Giving up easily", "Continuing despite difficulties", "Avoiding responsibility", "Changing goals every day"], correct: 1, passage: true },
  { section: "Section 4 · Reading Comprehension", q: "What can be inferred from the text?", options: ["Mistakes always mean failure.", "Confidence develops without effort.", "Progress often requires patience and practice.", "Learning should stop after graduation."], correct: 2, passage: true },

  { section: "Section 5 · Error Correction & Word Formation", q: "Which sentence is grammatically correct?", options: ["She has been working here since five years.", "She is working here for five years.", "She has worked here since five years.", "She has been working here for five years."], correct: 3 },
  { section: "Section 5 · Error Correction & Word Formation", q: "Choose the correct word form:\n\n\"Her _____ to the project was extremely valuable.\"", options: ["contribute", "contribution", "contributing", "contributed"], correct: 1 },
  { section: "Section 5 · Error Correction & Word Formation", q: "Which sentence is correct?", options: ["Despite of the rain, we went outside.", "Although the rain, we went outside.", "Despite the rain, we went outside.", "In spite the rain, we went outside."], correct: 2 },
  { section: "Section 5 · Error Correction & Word Formation", q: "Choose the correct word form:\n\n\"The instructions were so _____ that everyone understood them.\"", options: ["clarity", "clearly", "clear", "clarify"], correct: 2 },
  { section: "Section 5 · Error Correction & Word Formation", q: "Which sentence is the most appropriate for a formal email?", options: ["Send me the documents ASAP.", "I want those files right now.", "Could you send me the documents at your earliest convenience?", "You must send the documents, okay?"], correct: 2 }
];

/* ---------- QUOTES ---------- */
const QUOTES = [
  { t: "The only true wisdom is in knowing you know nothing.", a: "Socrates" },
  { t: "An investment in knowledge pays the best interest.", a: "Benjamin Franklin" },
  { t: "Knowledge is power.", a: "Francis Bacon" },
  { t: "The beautiful thing about learning is that no one can take it away from you.", a: "B.B. King" },
  { t: "Live as if you were to die tomorrow. Learn as if you were to live forever.", a: "Mahatma Gandhi" },
  { t: "Education is the most powerful weapon which you can use to change the world.", a: "Nelson Mandela" },
  { t: "The mind is not a vessel to be filled, but a fire to be kindled.", a: "Plutarch" },
  { t: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", a: "Benjamin Franklin" }
];

/* ---------- STARFIELD ---------- */
(function makeStars() {
  const c = document.getElementById('stars-container');
  const n = 90;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.6;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = (Math.random() * 3) + 's';
    s.style.animationDuration = (2 + Math.random() * 3) + 's';
    c.appendChild(s);
  }
})();

/* ---------- STATE ---------- */
let order = [];              // shuffled indices
let current = 0;             // current question index in `order`
let answers = {};            // { orderIndex: { chosen, isCorrect } }

/* ---------- ELEMENTS ---------- */
const $ = (id) => document.getElementById(id);
const views = { start: $('view-start'), quiz: $('view-quiz'), results: $('view-results') };

/* ---------- VIEW SWITCH ---------- */
function showView(name) {
  Object.values(views).forEach(v => v.classList.remove('active'));
  views[name].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- QUOTES ROTATION ---------- */
let quoteIndex = 0;
function renderQuote(targetTextId, targetAuthorId) {
  const q = QUOTES[quoteIndex % QUOTES.length];
  const t = document.getElementById(targetTextId);
  const a = document.getElementById(targetAuthorId);
  if (!t) return;
  t.style.opacity = 0;
  if (a) a.style.opacity = 0;
  setTimeout(() => {
    t.textContent = '"' + q.t + '"';
    if (a) a.textContent = '— ' + q.a;
    t.style.opacity = 1;
    if (a) a.style.opacity = 1;
  }, 200);
  quoteIndex++;
}
document.getElementById('start-quote-text').style.transition = 'opacity .3s';
document.getElementById('start-quote-author').style.transition = 'opacity .3s';
document.getElementById('quiz-quote-text').style.transition = 'opacity .3s';
document.getElementById('quiz-quote-author').style.transition = 'opacity .3s';

function startQuoteRotation() {
  renderQuote('start-quote-text', 'start-quote-author');
  renderQuote('quiz-quote-text', 'quiz-quote-author');
  setInterval(() => {
    renderQuote('start-quote-text', 'start-quote-author');
    renderQuote('quiz-quote-text', 'quiz-quote-author');
  }, 10000);
}
startQuoteRotation();

/* ---------- QUIZ START ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  order = shuffle(QUESTIONS.map((_, i) => i));
  current = 0;
  answers = {};
  showView('quiz');
  renderQuestion();
  updateHUD();
}

/* ---------- RENDER QUESTION ---------- */
function renderQuestion() {
  const qIdx = order[current];
  const q = QUESTIONS[qIdx];

  $('section-label').textContent = q.section;
  $('question-text').textContent = q.q;

  const passageEl = $('passage');
  if (q.passage) {
    passageEl.style.display = 'block';
    passageEl.textContent = READING_PASSAGE;
  } else {
    passageEl.style.display = 'none';
    passageEl.textContent = '';
  }

  const optBox = $('options');
  optBox.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  const saved = answers[current];

  q.options.forEach((optText, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.type = 'button';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${optText}</span>`;

    if (saved) {
      btn.classList.add('disabled');
      if (i === q.correct) btn.classList.add('correct');
      else if (i === saved.chosen) btn.classList.add('wrong');
    } else {
      btn.addEventListener('click', () => selectAnswer(i));
    }

    optBox.appendChild(btn);
  });

  // Feedback
  const fb = $('feedback');
  fb.className = 'feedback';
  fb.textContent = '';
  if (saved) {
    fb.classList.add('show', saved.isCorrect ? 'ok' : 'no');
    fb.textContent = saved.isCorrect
      ? '✓ Correct! Well done.'
      : '✗ Incorrect. Correct answer: ' + letters[q.correct] + ') ' + q.options[q.correct];
  }

  // Nav buttons
  const prevBtn = $('btn-prev');
  const nextBtn = $('btn-next');
  prevBtn.disabled = current === 0;
  const isLast = current === order.length - 1;
  nextBtn.textContent = isLast ? '🎉 See Results' : 'Next →';
  nextBtn.classList.toggle('finish', isLast && !!saved);

  // Scroll question into view on small screens
  if (window.innerWidth < 600) {
    document.querySelector('.question-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ---------- SELECT ANSWER ---------- */
function selectAnswer(chosenIdx) {
  if (answers[current]) return; // already answered

  const qIdx = order[current];
  const q = QUESTIONS[qIdx];
  const isCorrect = chosenIdx === q.correct;

  answers[current] = { chosen: chosenIdx, isCorrect };

  // Visual feedback
  const opts = document.querySelectorAll('#options .option');
  opts.forEach((btn, i) => {
    btn.classList.add('disabled');
    btn.onclick = null;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === chosenIdx) btn.classList.add('wrong');
  });

  const fb = $('feedback');
  const letters = ['A', 'B', 'C', 'D'];
  fb.classList.add('show', isCorrect ? 'ok' : 'no');
  fb.textContent = isCorrect
    ? '✓ Correct! Well done.'
    : '✗ Incorrect. Correct answer: ' + letters[q.correct] + ') ' + q.options[q.correct];

  // Update next button state
  const nextBtn = $('btn-next');
  const isLast = current === order.length - 1;
  if (isLast) nextBtn.classList.add('finish');

  updateHUD();
}

/* ---------- HUD ---------- */
function updateHUD() {
  const total = order.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(a => a.isCorrect).length;
  const wrongCount = answeredCount - correctCount;
  const accuracy = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);

  $('current-q').textContent = current + 1;
  $('total-q').textContent = total;
  $('stat-accuracy').textContent = accuracy + '%';
  $('stat-correct').textContent = correctCount;
  $('stat-wrong').textContent = wrongCount;
  $('stat-left').textContent = total - answeredCount;
  $('stat-total').textContent = total;

  const pct = (answeredCount / total) * 100;
  $('progress-fill').style.width = pct + '%';
}

/* ---------- NAVIGATION ---------- */
function goNext() {
  if (!answers[current]) {
    // shake options to prompt answer
    const opts = $('options');
    opts.classList.add('shake');
    setTimeout(() => opts.classList.remove('shake'), 400);
    return;
  }
  if (current < order.length - 1) {
    current++;
    renderQuestion();
    updateHUD();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResults();
  }
}

function goPrev() {
  if (current > 0) {
    current--;
    renderQuestion();
    updateHUD();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ---------- RESULTS ---------- */
function showResults() {
  const total = order.length;
  const correctCount = Object.values(answers).filter(a => a.isCorrect).length;
  const wrongCount = total - correctCount;
  const percent = Math.round((correctCount / total) * 100);

  $('score-big').textContent = correctCount + '/' + total;
  $('score-percent').textContent = percent + '%';
  $('res-correct').textContent = correctCount;
  $('res-wrong').textContent = wrongCount;
  $('res-accuracy').textContent = percent + '%';

  // Feedback
  let title, text;
  if (correctCount >= 22) {
    title = '🌟 Excellent understanding!';
    text = 'Outstanding work! You demonstrate a strong command of B2-level English. Keep challenging yourself with advanced materials.';
  } else if (correctCount >= 18) {
    title = '✨ Good understanding!';
    text = 'Solid performance! You have a good grasp of most concepts. Review the items you missed and keep practising to reach the next level.';
  } else if (correctCount >= 13) {
    title = '📚 Developing understanding';
    text = 'You are on the right track. Focus on the areas you missed — grammar patterns, vocabulary, or reading strategies — and try again soon.';
  } else {
    title = '💪 More practice recommended';
    text = 'Don\'t be discouraged! Use this as a learning opportunity. Review the correct answers below, study the explanations, and try the quiz again.';
  }
  $('fb-title').textContent = title;
  $('fb-text').textContent = text;

  // Mistakes list
  const mistakes = $('mistakes-list');
  mistakes.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  const wrongEntries = [];
  order.forEach((qIdx, i) => {
    const ans = answers[i];
    if (ans && !ans.isCorrect) {
      wrongEntries.push({ qIdx, ans, qNumber: i + 1 });
    }
  });

  if (wrongEntries.length === 0) {
    mistakes.innerHTML = '<div class="mistakes-empty">🎉 Perfect score — no mistakes to review!</div>';
  } else {
    wrongEntries.forEach(({ qIdx, ans, qNumber }) => {
      const q = QUESTIONS[qIdx];
      const card = document.createElement('div');
      card.className = 'mistake-card';
      card.innerHTML = `
        <div class="mistake-num">Question ${qNumber} · ${q.section}</div>
        <div class="mistake-q">${escapeHtml(q.q)}</div>
        <div class="mistake-ans your">
          <b>Your answer:</b> <span>${letters[ans.chosen]}) ${escapeHtml(q.options[ans.chosen])}</span>
        </div>
        <div class="mistake-ans right">
          <b>Correct answer:</b> <span>${letters[q.correct]}) ${escapeHtml(q.options[q.correct])}</span>
        </div>
      `;
      mistakes.appendChild(card);
    });
  }

  showView('results');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ---------- EVENT LISTENERS ---------- */
$('start-btn').addEventListener('click', startQuiz);
$('btn-prev').addEventListener('click', goPrev);
$('btn-next').addEventListener('click', goNext);
$('btn-restart').addEventListener('click', () => {
  if (confirm('Restart the quiz? All current progress will be lost.')) startQuiz();
});
$('btn-restart-results').addEventListener('click', startQuiz);

/* ---------- KEYBOARD ---------- */
document.addEventListener('keydown', (e) => {
  if (!views.quiz.classList.contains('active')) return;

  if (e.key === 'Enter') {
    e.preventDefault();
    goNext();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    goPrev();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    goNext();
  } else if (['1', '2', '3', '4'].includes(e.key)) {
    const idx = parseInt(e.key) - 1;
    const opts = document.querySelectorAll('#options .option');
    if (opts[idx] && !opts[idx].classList.contains('disabled')) {
      selectAnswer(idx);
    }
  }
});

/* ---------- INIT ---------- */
// Ready — landing view is active by default.
