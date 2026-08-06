import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { gameScenarios } from "../../data/decisionScenarios.js";
import { FaArrowRight } from "react-icons/fa";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const DecisionMakingGame = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timedOut, setTimedOut] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [decisions, setDecisions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [isRestoringState, setIsRestoringState] = useState(true);
  const questionsPerGame = 15;

  // Save game state to sessionStorage whenever it changes
  useEffect(() => {
    if (gameStarted && !gameCompleted && selectedQuestions.length > 0) {
      const gameState = {
        currentScenario,
        score,
        showFeedback,
        selectedOption,
        decisions,
        selectedQuestions,
        timeLeft,
        showWelcome: false,
        gameStarted: true,
        gameCompleted: false,
      };
      sessionStorage.setItem("decisionGameState", JSON.stringify(gameState));
    }
  }, [
    gameStarted,
    gameCompleted,
    currentScenario,
    score,
    showFeedback,
    selectedOption,
    decisions,
    selectedQuestions,
    timeLeft,
  ]);

  const handleAnswer = useCallback(
    (answerIndex) => {
      setSelectedOption(answerIndex);
      setShowFeedback(true);

      const isCorrect =
        answerIndex === selectedQuestions[currentScenario]?.correctAnswer;
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      // Auto-advance to next question after 10 seconds
      setTimeout(() => {
        if (currentScenario < selectedQuestions.length - 1) {
          setCurrentScenario(currentScenario + 1);
          setSelectedOption(null);
          setShowFeedback(false);
          setTimeLeft(30);
        } else {
          setGameCompleted(true);
        }
      }, 10000);
    },
    [selectedQuestions, currentScenario],
  );

  // Timer effect
  useEffect(() => {
    if (gameStarted && !gameCompleted && !showFeedback && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (
      timeLeft === 0 &&
      !showFeedback &&
      gameStarted &&
      !gameCompleted
    ) {
      setTimedOut(true);
    }
  }, [timeLeft, gameStarted, gameCompleted, showFeedback]);

  // Handle timeout effect - auto-advance to next question
  useEffect(() => {
    if (timedOut && !showFeedback && gameStarted && !gameCompleted) {
      // Auto-advance to next question after timeout
      if (currentScenario < selectedQuestions.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedOption(null);
        setShowFeedback(false);
        setTimeLeft(30);
      } else {
        setGameCompleted(true);
        saveDecisionStats(score);
        sessionStorage.removeItem("decisionGameState");
      }
      setTimedOut(false);
    }
  }, [
    timedOut,
    showFeedback,
    gameStarted,
    gameCompleted,
    currentScenario,
    selectedQuestions.length,
    score,
  ]);

  // Restore game state from sessionStorage on mount
  useEffect(() => {
    const savedState = sessionStorage.getItem("decisionGameState");
    if (savedState) {
      try {
        const gameState = JSON.parse(savedState);
        if (
          gameState.selectedQuestions &&
          gameState.selectedQuestions.length > 0
        ) {
          setCurrentScenario(gameState.currentScenario || 0);
          setScore(gameState.score || 0);
          setShowFeedback(gameState.showFeedback || false);
          setSelectedOption(gameState.selectedOption);
          setDecisions(gameState.decisions || []);
          setSelectedQuestions(gameState.selectedQuestions);
          setTimeLeft(gameState.timeLeft || 30);
          setShowWelcome(false);
          setGameStarted(true);
          setGameCompleted(false);
        } else {
          // If no questions were saved, clear the state and show welcome
          sessionStorage.removeItem("decisionGameState");
          setShowWelcome(true);
          setGameStarted(false);
        }
      } catch (error) {
        console.error("Error restoring game state:", error);
        sessionStorage.removeItem("decisionGameState");
        setShowWelcome(true);
        setGameStarted(false);
      }
    }
    setIsRestoringState(false);
  }, []);

  // Load decision stats from localStorage
  const getDecisionStats = () => {
    const stats = localStorage.getItem("decisionStats");
    return stats
      ? JSON.parse(stats)
      : {
          totalGames: 0,
          totalScore: 0,
          highestScore: 0,
          averageScore: 0,
          perfectDecisions: 0,
          lastPlayed: null,
        };
  };

  // Save decision stats to localStorage
  const saveDecisionStats = (newScore) => {
    const stats = getDecisionStats();
    const totalGames = stats.totalGames + 1;
    const totalScore = stats.totalScore + newScore;
    const highestScore = Math.max(stats.highestScore, newScore);
    const averageScore = Math.round(totalScore / totalGames);
    const maxScore = gameScenarios.length * 10;
    const perfectDecisions =
      stats.perfectDecisions + (newScore === maxScore ? 1 : 0);

    const updatedStats = {
      totalGames,
      totalScore,
      highestScore,
      averageScore,
      perfectDecisions,
      lastPlayed: new Date().toISOString(),
    };

    localStorage.setItem("decisionStats", JSON.stringify(updatedStats));

    // Save achievements
    if (newScore === maxScore) {
      saveAchievement(
        "decision",
        "Perfect Decision Maker",
        "Made all perfect decisions!",
      );
    } else if (newScore >= maxScore * 0.8) {
      saveAchievement(
        "decision",
        "Wise Decision Maker",
        `Scored ${newScore}/${maxScore}`,
      );
    }
  };

  // Save achievement
  const saveAchievement = (gameType, title, description) => {
    const achievements = localStorage.getItem("achievements");
    const achievementsList = achievements ? JSON.parse(achievements) : [];

    achievementsList.push({
      gameType,
      title,
      description,
      date: new Date().toISOString(),
    });

    localStorage.setItem("achievements", JSON.stringify(achievementsList));
  };

  const showWelcomeNote = () => {
    setShowWelcome(true);
  };

  const startGame = () => {
    const shuffled = shuffleArray(gameScenarios);
    const selected = shuffled.slice(0, questionsPerGame).map((scenario) => {
      return {
        ...scenario,
        options: shuffleArray(scenario.options),
      };
    });
    setSelectedQuestions(selected);
    setShowWelcome(false);
    setGameStarted(true);
    setCurrentScenario(0);
    setScore(0);
    setGameCompleted(false);
    setShowFeedback(false);
    setSelectedOption(null);
    setDecisions([]);
    setTimeLeft(false);
    setTimedOut(30);
  };

  const resetGame = () => {
    sessionStorage.removeItem("decisionGameState");
    setShowWelcome(true);
    setGameStarted(false);
    setCurrentScenario(0);
    setScore(0);
    setGameCompleted(false);
    setShowFeedback(false);
    setSelectedOption(null);
    setTimeLeft(false);
    setTimedOut(30);
    setDecisions([]);
  };

  const handleOptionClick = (option, index) => {
    setSelectedOption({ ...option, index });
    setShowFeedback(true);
  };

  const handleNext = () => {
    const newScore = score + selectedOption.points;
    setScore(newScore);

    setDecisions([
      ...decisions,
      {
        scenarioId: selectedQuestions[currentScenario].id,
        selectedOption: selectedOption.index,
        points: selectedOption.points,
      },
    ]);

    if (currentScenario < selectedQuestions.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setShowFeedback(false);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      setGameCompleted(true);
      saveDecisionStats(newScore);
      sessionStorage.removeItem("decisionGameState");
    }
  };

  const getScoreMessage = () => {
    const maxScore = questionsPerGame * 10;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 80)
      return {
        message:
          "Outstanding! You demonstrate excellent decision-making skills! 🌟",
        color: "text-green-600",
      };
    if (percentage >= 60)
      return {
        message: "Great job! You're making good choices! 👍",
        color: "text-blue-600",
      };
    if (percentage >= 40)
      return {
        message: "Good effort! Keep practicing your decision-making skills! 💪",
        color: "text-yellow-600",
      };
    return {
      message: "Keep learning! Every choice is a learning opportunity! 📚",
      color: "text-orange-600",
    };
  };

  return (
    <div className="min-h-screen m-auto bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center px-4 py-6 md:py-8 lg:py-12">
      <div className="w-full max-w-4xl my-4">
        {isRestoringState ? (
          <div className="text-center bg-white rounded-2xl shadow-2xl p-6 md:p-10">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-gray-600 text-lg">Loading game...</p>
          </div>
        ) : showWelcome ? (
          <div className="text-center bg-white rounded-2xl shadow-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
              Welcome to Decision Making Game!
            </h2>

            <div className="text-left max-w-2xl mx-auto space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="bg-indigo-50 p-4 md:p-6 rounded-xl">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 flex items-center gap-2">
                  <span>📋</span> How to Play:
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">1.</span>
                    <span>
                      You'll face{" "}
                      <strong>{questionsPerGame} real-life scenarios</strong>{" "}
                      that test your decision-making skills
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">2.</span>
                    <span>
                      Each scenario has <strong>3 different choices</strong>:
                      Good, Balanced, or Bad - choose wisely!
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">3.</span>
                    <span>
                      You'll receive <strong>instant feedback</strong> and
                      points for each choice
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">4.</span>
                    <span>
                      Your total score will determine your decision-making
                      mastery level
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 md:p-6 rounded-xl">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 flex items-center gap-2">
                  <span>🎯</span> Scoring System:
                </h3>
                <div className="grid grid-cols-1 gap-3 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌟</span>
                    <span>
                      <strong className="text-green-600">
                        Good Decision: +10 points
                      </strong>{" "}
                      - Excellent choice!
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    <span>
                      <strong className="text-blue-600">
                        Balanced Decision: +5 points
                      </strong>{" "}
                      - Reasonable approach!
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    <span>
                      <strong className="text-red-600">
                        Bad Decision: -5 points
                      </strong>{" "}
                      - This will deduct from your score!
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 flex items-center gap-2">
                  <span>📊</span> Your Stats:
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm md:text-base">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600 text-xs">Games Played</p>
                    <p className="text-xl font-bold text-primary">
                      {getDecisionStats().totalGames}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600 text-xs">Highest Score</p>
                    <p className="text-xl font-bold text-primary">
                      {getDecisionStats().highestScore}/{questionsPerGame * 10}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3 md:gap-6 justify-center">
              <button
                onClick={() => navigate("/academicgame")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 md:px-10 rounded-xl text-xs md:text-base transition-all duration-300"
              >
                Back
              </button>
              <button
                onClick={startGame}
                className="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-4 md:px-6 rounded-lg text-xs md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Now!
              </button>
            </div>
          </div>
        ) : gameCompleted ? (
          <div className="text-center bg-white rounded-2xl shadow-2xl p-6 md:p-10">
            <div className="text-5xl md:text-7xl mb-4 md:mb-6">🏆</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
              Game Complete!
            </h2>
            <div className="mb-4 md:mb-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {score}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                out of {questionsPerGame * 10} points
              </div>
            </div>

            <div
              className={`text-lg md:text-xl font-semibold ${getScoreMessage().color}`}
            >
              {getScoreMessage().message}
            </div>

            <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-2 max-w-2xl mx-auto">
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                Your Performance
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-primary h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${(score / (questionsPerGame * 10)) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                {Math.round((score / (questionsPerGame * 10)) * 100)}% Perfect
                Decisions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/academicgame")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 md:px-6 rounded-xl text-base md:text-lg transition-all duration-300"
              >
                Back
              </button>
              <button
                onClick={resetGame}
                className="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-4 md:px-6 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Play Again
              </button>
            </div>
          </div>
        ) : selectedQuestions.length === 0 ? (
          <div className="text-center bg-white rounded-2xl shadow-2xl p-6 md:p-10">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-gray-600 text-lg mb-4">
              Game data could not be restored
            </p>
            <button
              onClick={() => {
                sessionStorage.removeItem("decisionGameState");
                setShowWelcome(true);
                setGameStarted(false);
              }}
              className="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Start Fresh
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8">
            <div className="mb-4 md:mb-6">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <span className="text-xs md:text-sm font-semibold text-gray-500">
                  Scenario {currentScenario + 1} of {questionsPerGame}
                </span>
                <span
                  className={`text-xs md:text-sm font-semibold ${timeLeft <= 10 ? "text-red-600 animate-pulse" : "text-accent"}`}
                >
                  ⏱️ {timeLeft}s
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentScenario + 1) / questionsPerGame) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
              {selectedQuestions[currentScenario]?.question}
            </h3>

            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              {selectedQuestions[currentScenario]?.options?.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      !showFeedback && handleOptionClick(option, index)
                    }
                    disabled={showFeedback}
                    className={`w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${
                      showFeedback && selectedOption?.index === index
                        ? option.points === 15
                          ? "border-green-500 bg-green-50"
                          : option.points >= 10
                            ? "border-blue-500 bg-blue-50"
                            : option.points >= 5
                              ? "border-yellow-500 bg-yellow-50"
                              : "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-primary hover:bg-indigo-50"
                    } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start">
                      <span className="font-semibold text-primary mr-2 md:mr-3 text-sm md:text-base">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="font-medium text-gray-800 text-sm md:text-base">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ),
              )}
            </div>

            {showFeedback && (
              <div className="bg-indigo-50 border-l-4 flex justify-between items-center border-primary p-4 md:p-6 rounded-r-xl mb-4 md:mb-6 animate-fade-in transition-all duration-300">
                <div className="flex items-start">
                  <div>
                    <div className="flex flex-cols text-center items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">
                        {selectedOption.points === 15
                          ? "🌟"
                          : selectedOption.points >= 10
                            ? "👍"
                            : selectedOption.points >= 5
                              ? "💡"
                              : "📚"}
                      </span>
                      <h4 className="font-bold text-base md:text-lg">
                        {selectedOption.points === 15
                          ? "Excellent Choice!"
                          : selectedOption.points >= 10
                            ? "Good Choice!"
                            : selectedOption.points >= 5
                              ? "Not Bad!"
                              : "Think Again!"}
                      </h4>
                    </div>
                    <p className="text-gray-700 mb-2 text-sm md:text-base">
                      {selectedOption.feedback}
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-primary">
                      {selectedOption.points} points
                    </p>
                  </div>
                </div>
                {showFeedback && (
                  <div className="">
                    <button
                      onClick={handleNext}
                      className="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-4 md:px-6 rounded-xl transition-all duration-300 text-sm md:text-base"
                    >
                      {currentScenario < questionsPerGame - 1 ? (
                        <span className="flex items-center text-center gap-2">
                          Next <FaArrowRight size={12} />
                        </span>
                      ) : (
                        "See Results"
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionMakingGame;
