import React from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  // Get all stats for dashboard
  const getQuizStats = () => {
    const stats = localStorage.getItem("quizStats");
    return stats ? JSON.parse(stats) : { totalGames: 0, highestScore: 0 };
  };

  const getDecisionStats = () => {
    const stats = localStorage.getItem("decisionStats");
    return stats ? JSON.parse(stats) : { totalGames: 0, highestScore: 0 };
  };

  const getAchievements = () => {
    const achievements = localStorage.getItem("achievements");
    return achievements ? JSON.parse(achievements) : [];
  };

  return (
    <div className="min-h-screen m-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex justify-center px-4 py-6 md:py-9 xl:py-16">
      <div className="text-center max-w-6xl w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4">
          Academic Games
        </h1>

        <p className="text-base md:text-lg xl:text-xl mb-4 max-w-3xl mx-auto text-gray-700">
          Sharpen your mind and have fun with our interactive quiz and
          decision-making games designed to boost your knowledge and critical
          thinking skills!
        </p>

        {/* Stats Overview */}
        <div className="mb-10 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <div className="text-2xl mb-2">🎮</div>
            <p className="text-gray-600 text-xs md:text-sm">
              Total Games Played
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              {getQuizStats().totalGames + getDecisionStats().totalGames}
            </p>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <div className="text-2xl mb-2">🏆</div>
            <p className="text-gray-600 text-xs md:text-sm">
              Achievements Earned
            </p>
            <p className="text-xl md:text-2xl font-bold text-accent">
              {getAchievements().length}
            </p>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <div className="text-2xl mb-2">⭐</div>
            <p className="text-gray-600 text-xs md:text-sm">
              Combined High Score
            </p>
            <p className="text-xl md:text-2xl font-bold text-green-600">
              {getQuizStats().highestScore + getDecisionStats().highestScore}
            </p>
          </div>
        </div>

        {/* Game Cards */}
        <div className="flex flex-col sm:flex-row gap-9 justify-center items-center">
          <div className="max-w-sm w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-pink-500/50">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
              Quiz Challenge
            </h2>
            <p className="text-base md:text-md text-white/90 mb-4">
              Test your knowledge and challenge yourself with our engaging quiz
              game covering multiple subjects!
            </p>
            <button
              onClick={() => navigate("/academicgame/quiz")}
              className="w-full bg-white text-accent font-semibold py-3 px-6 rounded-xl text-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Play Quiz →
            </button>
          </div>

          <div className="max-w-sm w-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/50">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white mb-2">
              Decision Making
            </h2>
            <p className="text-base md:text-md text-white/90 mb-4">
              Train your critical thinking and decision-making skills with
              real-life scenarios and choices!
            </p>

            <button
              onClick={() => navigate("/academicgame/decision")}
              className="w-full bg-white text-primary font-semibold py-3 px-6 rounded-xl text-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Play Game →
            </button>
          </div>
        </div>

        {/* Recent Achievements */}
        {getAchievements().length > 0 && (
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              🏆 Recent Achievements
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {getAchievements()
                  .slice(-3)
                  .reverse()
                  .map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg"
                    >
                      <div className="text-3xl">
                        {achievement.gameType === "quiz" ? "🧠" : "🎯"}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-gray-800">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-sm md:text-lg mb-2">
              Track Progress
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Monitor your scores and improvements over time
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-sm md:text-lg mb-2">
              Real Scenarios
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Practice with authentic life situations
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🏅</div>
            <h3 className="font-bold text-sm md:text-lg mb-2">Achievements</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Unlock rewards as you master skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
