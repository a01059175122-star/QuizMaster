// ===== 1. 일반 상식 객관식 문제 10개 데이터 =====
// 각 문제는 분야(category), 질문(question), 4개의 선택지(options),
// 정답 번호(answerIndex: 0부터 시작), 해설(explanation)로 구성됩니다.
const quizData = [
  {
    category: "우주 · 과학",
    question: "태양계에서 크기가 가장 큰 행성은 무엇인가요?",
    options: ["지구", "화성", "목성", "토성"],
    answerIndex: 2,
    explanation:
      "목성은 태양계에서 가장 큰 행성으로, 지름이 지구의 약 11배에 달하는 거대한 가스 행성입니다."
  },
  {
    category: "세계 지리",
    question: "세계에서 영토 면적이 가장 넓은 나라는 어디인가요?",
    options: ["캐나다", "러시아", "미국", "중국"],
    answerIndex: 1,
    explanation:
      "러시아는 아시아와 유럽에 걸쳐 있는 세계 최대 면적의 국가로, 국토 면적이 약 1,710만 km²에 달합니다."
  },
  {
    category: "기초 과학",
    question: "물의 화학식은 무엇인가요?",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    answerIndex: 1,
    explanation:
      "물은 수소(H) 원자 2개와 산소(O) 원자 1개가 결합해 만들어지므로 화학식으로 H₂O라고 표기합니다."
  },
  {
    category: "한국사",
    question: "백성을 위해 훈민정음을 창제한 조선의 왕은 누구인가요?",
    options: ["태종", "세종대왕", "성종", "정조"],
    answerIndex: 1,
    explanation:
      "훈민정음은 조선 제4대 왕인 세종대왕이 백성이 쉽게 글을 읽고 쓸 수 있도록 1443년에 창제하고 1446년에 반포했습니다."
  },
  {
    category: "인체 · 생물",
    question: "사람의 몸에서 혈액을 온몸으로 순환시키는 펌프 역할을 하는 기관은 무엇인가요?",
    options: ["폐", "간", "심장", "위"],
    answerIndex: 2,
    explanation:
      "심장은 규칙적으로 수축과 이완을 반복하며 혈관을 통해 혈액을 온몸으로 보내는 펌프 역할을 합니다."
  },
  {
    category: "문화 · 예술",
    question: "명화 〈모나리자〉를 그린 르네상스 시대의 화가는 누구인가요?",
    options: ["빈센트 반 고흐", "파블로 피카소", "레오나르도 다 빈치", "클로드 모네"],
    answerIndex: 2,
    explanation:
      "〈모나리자〉는 이탈리아 르네상스를 대표하는 예술가 레오나르도 다 빈치가 그린 작품으로, 현재 프랑스 루브르 박물관에 전시되어 있습니다."
  },
  {
    category: "자연 · 절기",
    question: "1년 중 낮의 길이가 가장 긴 날을 뜻하는 절기는 무엇인가요?",
    options: ["춘분", "하지", "추분", "동지"],
    answerIndex: 1,
    explanation:
      "하지는 북반구에서 태양이 가장 높이 뜨며 1년 중 낮의 길이가 가장 길고 밤이 가장 짧은 절기입니다."
  },
  {
    category: "경제 상식",
    question: "물가가 전반적으로 계속 오르고 화폐의 가치가 떨어지는 현상을 무엇이라고 하나요?",
    options: ["인플레이션", "디플레이션", "환율", "독점"],
    answerIndex: 0,
    explanation:
      "인플레이션(Inflation)은 상품과 서비스의 전반적인 물가 수준이 지속적으로 상승하여 돈의 구매력이 떨어지는 경제 현상입니다."
  },
  {
    category: "IT · 컴퓨터",
    question: "인터넷에서 웹페이지의 주소를 나타내는 표준 표기 방식을 뜻하는 약어는 무엇인가요?",
    options: ["CPU", "RAM", "URL", "USB"],
    answerIndex: 2,
    explanation:
      "URL(Uniform Resource Locator)은 인터넷상에서 웹페이지나 파일 등의 자원이 어디에 있는지 알려주는 표준 주소입니다."
  },
  {
    category: "스포츠",
    question: "고대 그리스에서 유래하여 4년마다 열리는 세계 최대의 종합 스포츠 대회는 무엇인가요?",
    options: ["월드컵", "올림픽", "아시안게임", "윔블던"],
    answerIndex: 1,
    explanation:
      "올림픽은 고대 그리스의 올림피아 제전에서 시작되었으며, 오늘날에도 하계와 동계로 나뉘어 각각 4년마다 열립니다."
  }
];

// ===== 2. HTML 요소 가져오기 =====
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");

const questionCategory = document.getElementById("question-category");
const progressText = document.getElementById("progress-text");
const progressBarContainer = document.getElementById("progress-bar-container");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const resultMessage = document.getElementById("result-message");
const correctCountEl = document.getElementById("correct-count");
const totalScoreEl = document.getElementById("total-score");
const reviewList = document.getElementById("review-list");
const filterAllBtn = document.getElementById("filter-all");
const filterWrongBtn = document.getElementById("filter-wrong");

// ===== 3. 퀴즈 상태 변수 =====
let currentQuestionIndex = 0; // 현재 풀고 있는 문제 번호 (0 ~ 9)
let userAnswers = []; // 사용자가 선택한 답의 번호를 저장하는 배열
let isTransitioning = false; // 다음 문제로 넘어가는 중 중복 클릭 방지
let currentFilter = "all"; // 해설 보기 필터 ('all' 또는 'wrong')

const POINTS_PER_QUESTION = 10; // 한 문제당 10점 (총 100점 만점)

// ===== 4. 화면 전환 함수 =====
function showScreen(targetScreen) {
  startScreen.hidden = targetScreen !== startScreen;
  quizScreen.hidden = targetScreen !== quizScreen;
  resultScreen.hidden = targetScreen !== resultScreen;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== 5. 퀴즈 시작 / 초기화 함수 =====
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  isTransitioning = false;
  currentFilter = "all";
  updateFilterButtons();
  showScreen(quizScreen);
  renderQuestion();
}

// ===== 6. 현재 문제 화면에 표시하기 =====
function renderQuestion() {
  const total = quizData.length;
  const current = quizData[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  questionCategory.textContent = current.category;
  progressText.textContent = `${questionNumber} / ${total}`;
  progressFill.style.width = `${(questionNumber / total) * 100}%`;
  progressBarContainer.setAttribute("aria-valuenow", String(questionNumber));

  questionText.textContent = `Q${questionNumber}. ${current.question}`;
  optionsContainer.innerHTML = "";

  // 4개의 선택지 버튼을 순서대로 생성
  current.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";

    const numberBadge = document.createElement("span");
    numberBadge.className = "option-number";
    numberBadge.textContent = String(index + 1);

    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = optionText;

    button.appendChild(numberBadge);
    button.appendChild(label);

    button.addEventListener("click", () => handleSelectOption(index, button));
    optionsContainer.appendChild(button);
  });
}

// ===== 7. 사용자가 답을 선택했을 때 처리 =====
function handleSelectOption(selectedIndex, selectedButton) {
  if (isTransitioning) return;
  isTransitioning = true;

  // 선택한 버튼 강조 및 다른 버튼 잠시 비활성화
  const allButtons = optionsContainer.querySelectorAll(".option-btn");
  allButtons.forEach((btn) => {
    btn.disabled = true;
  });
  selectedButton.classList.add("selected");

  // 선택한 답 저장
  userAnswers[currentQuestionIndex] = selectedIndex;

  // 사용자가 선택을 눈으로 확인할 수 있도록 잠깐(0.28초) 대기 후 다음 문제로 이동
  setTimeout(() => {
    currentQuestionIndex += 1;
    isTransitioning = false;

    if (currentQuestionIndex < quizData.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 280);
}

// ===== 8. 결과 점수 계산 및 화면 표시 =====
function showResult() {
  const totalQuestions = quizData.length;
  let correctCount = 0;

  quizData.forEach((item, index) => {
    if (userAnswers[index] === item.answerIndex) {
      correctCount += 1;
    }
  });

  const score = correctCount * POINTS_PER_QUESTION;

  correctCountEl.textContent = `${correctCount} / ${totalQuestions}개`;
  totalScoreEl.textContent = `${score}점`;
  resultMessage.textContent = getResultFeedback(score);

  renderReviewList();
  showScreen(resultScreen);
}

// 점수 구간별 응원 메시지 반환
function getResultFeedback(score) {
  if (score === 100) return "완벽해요! 진정한 상식 마스터입니다!";
  if (score >= 80) return "훌륭해요! 아주 폭넓은 상식을 가지고 있네요!";
  if (score >= 50) return "좋아요! 해설을 확인하면 상식이 더 탄탄해질 거예요!";
  return "아쉬워요! 아래 해설을 읽고 다시 한번 도전해 보세요!";
}

// ===== 9. 정답 및 해설 목록 그리기 =====
function renderReviewList() {
  reviewList.innerHTML = "";

  const itemsToRender = quizData
    .map((item, index) => ({
      item,
      index,
      userAnswer: userAnswers[index],
      isCorrect: userAnswers[index] === item.answerIndex
    }))
    .filter((entry) => (currentFilter === "wrong" ? !entry.isCorrect : true));

  if (itemsToRender.length === 0) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "empty-review";
    emptyBox.textContent = "틀린 문제가 없습니다. 모든 문제를 맞히셨어요!";
    reviewList.appendChild(emptyBox);
    return;
  }

  itemsToRender.forEach(({ item, index, userAnswer, isCorrect }) => {
    const card = document.createElement("article");
    card.className = `review-item ${isCorrect ? "is-correct" : "is-wrong"}`;

    const topRow = document.createElement("div");
    topRow.className = "review-item-top";

    const qNum = document.createElement("span");
    qNum.className = "review-q-num";
    qNum.textContent = `문제 ${index + 1} · ${item.category}`;

    const badge = document.createElement("span");
    badge.className = `status-badge ${isCorrect ? "correct" : "wrong"}`;
    badge.textContent = isCorrect ? "정답" : "오답";

    topRow.appendChild(qNum);
    topRow.appendChild(badge);

    const questionEl = document.createElement("p");
    questionEl.className = "review-question";
    questionEl.textContent = item.question;

    const comparison = document.createElement("div");
    comparison.className = "answer-comparison";

    const userAnswerLine = document.createElement("p");
    userAnswerLine.innerHTML = `내가 고른 답: <span class="user-answer-text ${
      isCorrect ? "correct" : "wrong"
    }"></span>`;
    userAnswerLine.querySelector("span").textContent = `${userAnswer + 1}. ${
      item.options[userAnswer]
    }`;

    comparison.appendChild(userAnswerLine);

    if (!isCorrect) {
      const correctAnswerLine = document.createElement("p");
      correctAnswerLine.innerHTML = `정답: <span class="correct-answer-text"></span>`;
      correctAnswerLine.querySelector("span").textContent = `${item.answerIndex + 1}. ${
        item.options[item.answerIndex]
      }`;
      comparison.appendChild(correctAnswerLine);
    }

    const explanationBox = document.createElement("div");
    explanationBox.className = "explanation-box";
    explanationBox.textContent = `해설: ${item.explanation}`;

    card.appendChild(topRow);
    card.appendChild(questionEl);
    card.appendChild(comparison);
    card.appendChild(explanationBox);

    reviewList.appendChild(card);
  });
}

// 필터 버튼 상태 업데이트
function updateFilterButtons() {
  const isAll = currentFilter === "all";
  filterAllBtn.classList.toggle("active", isAll);
  filterWrongBtn.classList.toggle("active", !isAll);
  filterAllBtn.setAttribute("aria-selected", String(isAll));
  filterWrongBtn.setAttribute("aria-selected", String(!isAll));
}

// ===== 10. 버튼 및 키보드 이벤트 연결 =====
startBtn.addEventListener("click", startQuiz);
retryBtn.addEventListener("click", startQuiz);
homeBtn.addEventListener("click", () => showScreen(startScreen));

filterAllBtn.addEventListener("click", () => {
  currentFilter = "all";
  updateFilterButtons();
  renderReviewList();
});

filterWrongBtn.addEventListener("click", () => {
  currentFilter = "wrong";
  updateFilterButtons();
  renderReviewList();
});

// 컴퓨터 키보드 숫자 1~4 키로도 선택지를 고를 수 있도록 지원
document.addEventListener("keydown", (event) => {
  if (quizScreen.hidden || isTransitioning) return;

  const keyNumber = Number(event.key);
  if (keyNumber >= 1 && keyNumber <= 4) {
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    const targetButton = buttons[keyNumber - 1];
    if (targetButton) {
      targetButton.click();
    }
  }
});
