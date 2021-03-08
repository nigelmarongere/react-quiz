const qBank = [
  {
    question:
      "What is the worst case runtime of Selection Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n2",
    questionId: "099099"
  },
  {
    question:
      "What is the best case runtime of Selection Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n2",
    questionId: "183452"
  },
  {
    question:
      "What is the worst case runtime of Bubble Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n2",
    questionId: "267908"
  },
  {
    question: "What is the best case runtime of Bubble Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n",
    questionId: "333247"
  },
  {
    question: "What is the worst case runtime of Insertion Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n2",
    questionId: "496293"
  },
  {
    question: "What is the best case runtime of Insertion Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n",
    questionId: "588909"
  },
  {
    question: "What is the worst case runtime of Merge Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n log n",
    questionId: "648452"
  },
  {
    question: "What is the best case runtime of Merge Sort?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n log n",
    questionId: "786649"
  },
  {
    question: "What is the worst case runtime of Linear Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n",
    questionId: "839754"
  },
  {
    question: "What is the best case runtime of Linear Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "1",
    questionId: "98390"
  },
  {
    question: "What is the worst case runtime of Binary Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n log n",
    questionId: "1071006"
  },
  {
    question: "What is the best case runtime of Binary Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "1",
    questionId: "1174154"
  },
  {
    question: "What is the worst case runtime for Fibonacci Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "n log n",
    questionId: "1226535"
  },
  {
    question: "What is the best case runtime for Fibonacci Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "1",
    questionId: "1310938"
  },
  {
    question: "What is the worst case runtime of Jump Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "Skin",
    questionId: "1436873"
  },
  {
    question: "What is the best case runtime of Jump Search?",
    answers: ["1", "n", "n2", "n log n"],
    correct: "Cancer",
    questionId: "1515110"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
