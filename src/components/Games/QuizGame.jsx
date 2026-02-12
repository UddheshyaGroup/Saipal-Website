import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions } from "../../data/quizQuestions";
import { FaArrowRight } from "react-icons/fa";

// Shuffle array function to randomize questions
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuizGame = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timedOut, setTimedOut] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const questionsPerGame = 15; // Number of questions per game session

  const handleAnswer = useCallback(
    (answerIndex) => {
      setSelectedAnswer(answerIndex);
      setShowResult(true);

      const isCorrect =
        answerIndex === selectedQuestions[currentQuestion]?.correctAnswer;
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      // Auto-advance to next question after 2 seconds
      setTimeout(() => {
        if (currentQuestion < selectedQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setShowResult(false);
          setTimeLeft(30);
        } else {
          setGameCompleted(true);
        }
      }, 2000);
    },
    [selectedQuestions, currentQuestion],
  );

  // Timer effect
  useEffect(() => {
    if (gameStarted && !gameCompleted && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult && gameStarted && !gameCompleted) {
      setTimedOut(true);
    }
  }, [timeLeft, gameStarted, gameCompleted, showResult]);

  // Handle timeout effect
  useEffect(() => {
    if (timedOut && !showResult) {
      handleAnswer(null);
      setTimedOut(false);
    }
  }, [timedOut, showResult, handleAnswer]);

  // Load quiz stats from localStorage
  const getQuizStats = () => {
    const stats = localStorage.getItem("quizStats");
    return stats
      ? JSON.parse(stats)
      : {
          totalGames: 0,
          totalScore: 0,
          highestScore: 0,
          averageScore: 0,
          lastPlayed: null,
        };
  };

  // Save quiz stats to localStorage
  const saveQuizStats = useCallback(
    (newScore) => {
      const stats = localStorage.getItem("quizStats");
      const parsedStats = stats
        ? JSON.parse(stats)
        : {
            totalGames: 0,
            totalScore: 0,
            highestScore: 0,
            averageScore: 0,
            lastPlayed: null,
          };

      const totalGames = parsedStats.totalGames + 1;
      const totalScore = parsedStats.totalScore + newScore;
      const highestScore = Math.max(parsedStats.highestScore, newScore);
      const averageScore = Math.round(totalScore / totalGames);

      const updatedStats = {
        totalGames,
        totalScore,
        highestScore,
        averageScore,
        lastPlayed: new Date().toISOString(),
      };

      localStorage.setItem("quizStats", JSON.stringify(updatedStats));

      // Save achievement if score is high
      if (newScore >= questionsPerGame * 0.8) {
        const achievements = localStorage.getItem("achievements");
        const achievementsList = achievements ? JSON.parse(achievements) : [];

        achievementsList.push({
          gameType: "quiz",
          title: "Expert Quiz Master",
          description: `Scored ${newScore}/${questionsPerGame}`,
          date: new Date().toISOString(),
        });

        localStorage.setItem("achievements", JSON.stringify(achievementsList));
      }
    },
    [questionsPerGame],
  );

  // Save stats when game is completed
  useEffect(() => {
    if (gameCompleted && score !== null) {
      saveQuizStats(score);
      // Clear session storage when game is completed
      sessionStorage.removeItem("quizGameState");
    }
  }, [gameCompleted, score, saveQuizStats]);

  // Save game state to sessionStorage whenever it changes
  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const gameState = {
        selectedQuestions,
        currentQuestion,
        score,
        selectedAnswer,
        showResult,
        timeLeft,
        showWelcome: false,
        gameStarted: true,
        gameCompleted: false,
      };
      sessionStorage.setItem("quizGameState", JSON.stringify(gameState));
    }
  }, [
    gameStarted,
    gameCompleted,
    selectedQuestions,
    currentQuestion,
    score,
    selectedAnswer,
    showResult,
    timeLeft,
  ]);

  // Restore game state from sessionStorage on mount
  useEffect(() => {
    const savedState = sessionStorage.getItem("quizGameState");
    if (savedState) {
      try {
        const gameState = JSON.parse(savedState);
        setSelectedQuestions(gameState.selectedQuestions || []);
        setCurrentQuestion(gameState.currentQuestion || 0);
        setScore(gameState.score || 0);
        setSelectedAnswer(gameState.selectedAnswer);
        setShowResult(gameState.showResult || false);
        setTimeLeft(gameState.timeLeft || 30);
        setShowWelcome(false);
        setGameStarted(true);
        setGameCompleted(false);
      } catch (error) {
        console.error("Error restoring game state:", error);
        sessionStorage.removeItem("quizGameState");
      }
    }
  }, []);

  const startGame = () => {
    // Select random questions from the pool
    const shuffled = shuffleArray(quizQuestions);
    const selected = shuffled.slice(0, questionsPerGame);
    setSelectedQuestions(selected);

    setShowWelcome(false);
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
    setTimeLeft(30);
    setTimedOut(false);
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setGameCompleted(true);
    }
  };

  const resetGame = () => {
    sessionStorage.removeItem("quizGameState");
    setShowWelcome(true);
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
    setTimeLeft(30);
    setTimedOut(false);
    setSelectedQuestions([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questionsPerGame) * 100;
    if (percentage >= 90)
      return {
        message: "Outstanding! You're a Quiz Master! 🌟",
        color: "text-green-600",
      };
    if (percentage >= 75)
      return {
        message: "Excellent! Great knowledge! 🎉",
        color: "text-blue-600",
      };
    if (percentage >= 60)
      return {
        message: "Good job! Keep learning! 💪",
        color: "text-yellow-600",
      };
    return {
      message: "Keep practicing! Knowledge grows with effort! 📚",
      color: "text-orange-600",
    };
  };

  return (
    <div className="min-h-screen m-auto bg-gradient-to-br from-purple-50 to-pink-100 flex justify-center px-4 py-6 md:py-8">
      <div className="w-full max-w-4xl my-4">
        {showWelcome ? (
          <div className="text-center bg-white rounded-2xl shadow-2xl p-6 md:p-10 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-accent mb-4 md:mb-6 animate-slide-down">
              Welcome to Quiz Challenge!
            </h2>

            <div className="text-left max-w-2xl mx-auto space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="bg-purple-50 p-4 md:p-6 rounded-xl transform hover:scale-105 transition-all duration-300 animate-slide-up">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 flex items-center gap-2">
                  <span className="animate-pulse">📋</span> How to Play:
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">1.</span>
                    <span>
                      Answer{" "}
                      <strong>
                        {quizQuestions.length} multiple-choice questions
                      </strong>{" "}
                      from various subjects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">2.</span>
                    <span>
                      You have <strong>30 seconds</strong> for each question
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">3.</span>
                    <span>
                      Get <strong>instant feedback</strong> on your answers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">4.</span>
                    <span>Track your progress and beat your high score!</span>
                  </li>
                </ul>
              </div>

              <div
                className="bg-blue-50 p-4 md:p-6 rounded-xl transform transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 flex items-center gap-2">
                  <span className="animate-pulse">📊</span> Your Stats:
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm md:text-base">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <p className="text-gray-600 text-xs">Games Played</p>
                    <p className="text-xl font-bold text-accent">
                      {getQuizStats().totalGames}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <p className="text-gray-600 text-xs">Highest Score</p>
                    <p className="text-xl font-bold text-accent">
                      {getQuizStats().highestScore}/{questionsPerGame}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3 md:gap-6 justify-center">
              <button
                onClick={() => navigate("/academicgame")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 md:px-6 rounded-lg  text-xs md:text-base transition-all duration-300"
              >
                Back
              </button>
              <button
                onClick={startGame}
                className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-4 md:px-6 rounded-lg text-xs md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Start Now!
              </button>
            </div>
          </div>
        ) : gameCompleted ? (
          <div className="text-center bg-white rounded-2xl shadow-2xl p-6 md:p-10 animate-fade-in">
            <div className="text-5xl md:text-7xl mb-4 md:mb-6 animate-bounce">
              🏆
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 animate-slide-down">
              Quiz Completed!
            </h2>
            <div className="mb-4 md:mb-6 animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-pulse">
                {score}/{questionsPerGame}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Correct Answers
              </div>
            </div>

            <div
              className={`text-lg md:text-xl font-semibold ${getScoreMessage().color}`}
            >
              {getScoreMessage().message}
            </div>

            <div className="rounded-xl p-4 md:p-6 max-w-2xl mx-auto transform transition-all duration-300 animate-slide-up">
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                Your Performance
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                <div
                  className="bg-accent h-3 rounded-full transition-all duration-500 animate-shimmer"
                  style={{ width: `${(score / questionsPerGame) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                {Math.round((score / questionsPerGame) * 100)}% Accuracy
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/academicgame")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 md:px-6 rounded-xl text-base md:text-lg transition-all duration-300"
              >
                Back
              </button>
              <button
                onClick={resetGame}
                className="bg-accent hover:bg-pink-600 text-white font-bold py-3 px-6 md:px-6 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-fade-in">
            <div className="mb-4 md:mb-6 animate-slide-down">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <span className="text-xs md:text-sm font-semibold text-gray-500">
                  Question {currentQuestion + 1} of {selectedQuestions.length}
                </span>
                <span
                  className={`text-xs md:text-sm font-semibold ${timeLeft <= 10 ? "text-red-600 animate-pulse" : "text-accent"}`}
                >
                  ⏱️ {timeLeft}s
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-accent h-2 rounded-full transition-all duration-500 ease-out animate-shimmer"
                  style={{
                    width: `${((currentQuestion + 1) / selectedQuestions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="mb-4 animate-bounce-in">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full transform hover:scale-110 transition-all duration-300">
                {selectedQuestions[currentQuestion]?.category}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 animate-slide-in">
              {selectedQuestions[currentQuestion]?.question}
            </h3>

            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              {selectedQuestions[currentQuestion]?.options.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-slide-in ${
                      showResult
                        ? index ===
                          selectedQuestions[currentQuestion]?.correctAnswer
                          ? "border-green-500 bg-green-50"
                          : selectedAnswer === index
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 bg-gray-50"
                        : "border-gray-200 hover:border-accent hover:bg-purple-50"
                    } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start">
                      <span className="font-semibold text-accent mr-2 md:mr-3 text-sm md:text-base">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="font-medium text-gray-800 text-sm md:text-base">
                        {option}
                      </span>
                      {showResult &&
                        index ===
                          selectedQuestions[currentQuestion]?.correctAnswer && (
                          <span className="ml-auto text-green-600">✓</span>
                        )}
                      {showResult &&
                        selectedAnswer === index &&
                        index !==
                          selectedQuestions[currentQuestion]?.correctAnswer && (
                          <span className="ml-auto text-red-600">✗</span>
                        )}
                    </div>
                  </button>
                ),
              )}
            </div>

            {showResult && (
              <div
                className={`${selectedAnswer === selectedQuestions[currentQuestion]?.correctAnswer ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"} border-l-4 p-4 md:p-6 rounded-r-xl mb-4 md:mb-6 animate-slide-in-left transform hover:scale-102 transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start flex-1">
                    <div className="flex-1">
                      <div className="flex flex-cols items-center text-center">
                        <span className="text-xl md:text-2xl mr-2 md:mr-3">
                          {selectedAnswer ===
                          selectedQuestions[currentQuestion]?.correctAnswer
                            ? "🎉"
                            : "📚"}
                        </span>
                        <h4 className="font-bold text-base md:text-lg mb-2">
                          {selectedAnswer ===
                          selectedQuestions[currentQuestion]?.correctAnswer
                            ? "Correct!"
                            : "Incorrect!"}
                        </h4>
                      </div>
                      {selectedAnswer !==
                        selectedQuestions[currentQuestion]?.correctAnswer && (
                        <p className="text-gray-700 text-sm md:text-base">
                          The correct answer is:{" "}
                          <strong>
                            {
                              selectedQuestions[currentQuestion]?.options[
                                selectedQuestions[currentQuestion]
                                  ?.correctAnswer
                              ]
                            }
                          </strong>
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className="bg-white hover:bg-gray-50 border-2 border-current text-current font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap transform hover:scale-110 hover:shadow-lg animate-pulse-subtle"
                  >
                    {currentQuestion < selectedQuestions.length - 1 ? (
                      <span className="flex items-center text-center gap-2">
                        Next <FaArrowRight size={12} />
                      </span>
                    ) : (
                      "Results 🎉"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
