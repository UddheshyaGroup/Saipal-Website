export const gameScenarios = [
  {
    id: 1,
    question:
      "You have an important exam tomorrow, but your friend invites you to a movie tonight. What do you do?",
    options: [
      {
        text: "Decline politely and focus on studying",
        points: 10,
        type: "good",
        feedback:
          "Excellent choice! Prioritizing your academic goals shows maturity.",
      },
      {
        text: "Go to the movie but study before and after",
        points: 5,
        type: "balanced",
        feedback:
          "Balance is important, but make sure you have enough time to prepare!",
      },
      {
        text: "Go to the movie and skip studying",
        points: -5,
        type: "bad",
        feedback:
          "This might affect your exam performance. Time management is key!",
      },
    ],
  },
  {
    id: 2,
    question:
      "You notice a classmate struggling with homework. You've finished yours. What do you do?",
    options: [
      {
        text: "Explain the concepts and guide them",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Teaching others reinforces your own understanding.",
      },
      {
        text: "Share some hints without giving direct answers",
        points: 5,
        type: "balanced",
        feedback:
          "Good approach! Helping while encouraging independent thinking.",
      },
      {
        text: "Ignore and go home",
        points: -5,
        type: "bad",
        feedback: "Helping others is part of a supportive learning community.",
      },
    ],
  },
  {
    id: 3,
    question:
      "During a group project, one member isn't contributing. What's your approach?",
    options: [
      {
        text: "Talk to them privately to understand why",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Communication and understanding are key to teamwork.",
      },
      {
        text: "Redistribute tasks to help them participate",
        points: 5,
        type: "balanced",
        feedback: "Adapting to help the team work better is a good step.",
      },
      {
        text: "Exclude them from the project",
        points: -5,
        type: "bad",
        feedback: "This creates conflict. Finding the root cause is better.",
      },
    ],
  },
  {
    id: 4,
    question:
      "You're offered a chance to cheat on a difficult test. No one will know. What do you do?",
    options: [
      {
        text: "Refuse and do your best honestly",
        points: 10,
        type: "good",
        feedback:
          "Outstanding! Academic integrity builds character and genuine knowledge.",
      },
      {
        text: "Feel tempted but choose not to cheat",
        points: 5,
        type: "balanced",
        feedback:
          "Good choice! Recognizing temptation and resisting it shows strength.",
      },
      {
        text: "Cheat to get a good grade",
        points: -5,
        type: "bad",
        feedback:
          "Integrity matters more than grades. Learning honestly builds real skills.",
      },
    ],
  },
  {
    id: 5,
    question:
      "You have multiple deadlines this week. How do you manage your time?",
    options: [
      {
        text: "Create a schedule prioritizing by deadline",
        points: 10,
        type: "good",
        feedback:
          "Excellent planning! Organized time management is key to success.",
      },
      {
        text: "Start with the easiest task to build momentum",
        points: 5,
        type: "balanced",
        feedback:
          "Quick wins are good, but prioritize important deadlines first.",
      },
      {
        text: "Panic and work randomly",
        points: -5,
        type: "bad",
        feedback:
          "Take a breath! Planning reduces stress and improves results.",
      },
    ],
  },
  {
    id: 6,
    question:
      "Your teacher gives feedback that your essay needs improvement. How do you respond?",
    options: [
      {
        text: "Ask for specific examples and revise",
        points: 10,
        type: "good",
        feedback: "Perfect! Seeking clarity and improvement shows maturity.",
      },
      {
        text: "Accept the feedback and try to improve",
        points: 5,
        type: "balanced",
        feedback:
          "Good attitude! Seeking specific guidance would help even more.",
      },
      {
        text: "Argue that your essay was good enough",
        points: -5,
        type: "bad",
        feedback: "Defensive responses block learning opportunities.",
      },
    ],
  },
  {
    id: 7,
    question:
      "You're struggling to understand a topic in class. What should you do?",
    options: [
      {
        text: "Ask the teacher for extra help after class",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Seeking help shows initiative and responsibility.",
      },
      {
        text: "Study with classmates who understand it",
        points: 5,
        type: "balanced",
        feedback: "Good approach! Peer learning can be helpful.",
      },
      {
        text: "Pretend you understand",
        points: -5,
        type: "bad",
        feedback: "Asking for help is a strength, not a weakness!",
      },
    ],
  },
  {
    id: 8,
    question: "You see a student being bullied. What do you do?",
    options: [
      {
        text: "Stand up for them or report to a teacher",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Showing courage and compassion helps create a safe environment.",
      },
      {
        text: "Check on the victim privately later",
        points: 5,
        type: "balanced",
        feedback:
          "Showing support is good, but immediate action is even better.",
      },
      {
        text: "Ignore it and walk away",
        points: -5,
        type: "bad",
        feedback: "Bystanders can make a difference. Don't stay silent.",
      },
    ],
  },
  {
    id: 9,
    question:
      "You accidentally break school property. Nobody saw it happen. What do you do?",
    options: [
      {
        text: "Report it to a teacher and offer to help fix it",
        points: 10,
        type: "good",
        feedback: "Outstanding! Honesty and accountability are crucial values.",
      },
      {
        text: "Leave a note about what happened",
        points: 5,
        type: "balanced",
        feedback:
          "Taking some responsibility is good, but direct honesty is best.",
      },
      {
        text: "Walk away quickly",
        points: -5,
        type: "bad",
        feedback: "Taking responsibility builds character and trust.",
      },
    ],
  },
  {
    id: 10,
    question: "Your friend wants to copy your homework. What do you do?",
    options: [
      {
        text: "Offer to help them understand the material",
        points: 10,
        type: "good",
        feedback: "Perfect! Helping them learn is true friendship and support.",
      },
      {
        text: "Refuse politely and explain why",
        points: 5,
        type: "balanced",
        feedback: "Good! Standing by your principles is important.",
      },
      {
        text: "Let them copy to maintain friendship",
        points: -5,
        type: "bad",
        feedback: "True friends support each other's growth, not shortcuts.",
      },
    ],
  },
  {
    id: 11,
    question:
      "You're assigned to present in front of the class, but you're nervous. What do you do?",
    options: [
      {
        text: "Practice thoroughly and seek advice",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Preparation and seeking support are keys to success.",
      },
      {
        text: "Prepare but stay anxious about it",
        points: 5,
        type: "balanced",
        feedback: "Preparation is good! With practice, confidence will grow.",
      },
      {
        text: "Skip school that day",
        points: -5,
        type: "bad",
        feedback: "Avoiding challenges prevents growth. Face your fears!",
      },
    ],
  },
  {
    id: 12,
    question:
      "You disagree with your teacher's grading on your project. What should you do?",
    options: [
      {
        text: "Respectfully ask for clarification on the grading",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Professional communication and seeking understanding show maturity.",
      },
      {
        text: "Accept it but feel disappointed",
        points: 5,
        type: "balanced",
        feedback:
          "Acceptance is mature, but seeking clarification aids learning.",
      },
      {
        text: "Complain to other students",
        points: -5,
        type: "bad",
        feedback: "Gossip doesn't solve problems. Address issues directly.",
      },
    ],
  },
  {
    id: 13,
    question:
      "You find a wallet with money in the school hallway. What do you do?",
    options: [
      {
        text: "Turn it in to the office immediately",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Your integrity makes the school community better for everyone.",
      },
      {
        text: "Try to find the owner yourself",
        points: 5,
        type: "balanced",
        feedback:
          "Good intention, but the office has better resources to locate the owner.",
      },
      {
        text: "Keep the money",
        points: -5,
        type: "bad",
        feedback:
          "Honesty defines character, especially when no one is watching.",
      },
    ],
  },
  {
    id: 14,
    question: "You're part of a team losing a sports match. How do you react?",
    options: [
      {
        text: "Encourage teammates and keep trying",
        points: 10,
        type: "good",
        feedback:
          "Outstanding! Leadership and positivity inspire others and build character.",
      },
      {
        text: "Stay focused on your own performance",
        points: 5,
        type: "balanced",
        feedback: "Good effort! Encouraging others would make it even better.",
      },
      {
        text: "Blame teammates for mistakes",
        points: -5,
        type: "bad",
        feedback: "Blame destroys team spirit. Support builds stronger teams.",
      },
    ],
  },
  {
    id: 15,
    question:
      "Your best friend is making poor choices that could affect their future. What do you do?",
    options: [
      {
        text: "Talk to them privately about your concerns",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Caring enough to have difficult conversations shows true friendship.",
      },
      {
        text: "Express concern but respect their choices",
        points: 5,
        type: "balanced",
        feedback: "Showing concern is good! Being direct can help even more.",
      },
      {
        text: "Ignore it, it's their life",
        points: -5,
        type: "bad",
        feedback: "Real friends care enough to speak up with compassion.",
      },
    ],
  },
  {
    id: 16,
    question: "You find money on the ground in a public place. What do you do?",
    options: [
      {
        text: "Try to find the owner or turn it in",
        points: 10,
        type: "good",
        feedback: "Honesty and integrity are timeless values. Great choice!",
      },
      {
        text: "Look around briefly, then keep it if no one claims it",
        points: 5,
        type: "balanced",
        feedback:
          "Showing effort to find the owner is good, though keeping it is questionable.",
      },
      {
        text: "Keep it without looking for the owner",
        points: -5,
        type: "bad",
        feedback:
          "This belongs to someone. Doing the right thing matters even when no one is watching.",
      },
    ],
  },
  {
    id: 17,
    question:
      "You're offered a job that pays well but involves unethical practices. What do you do?",
    options: [
      {
        text: "Decline and look for ethical alternatives",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Your values are worth more than money. That's character.",
      },
      {
        text: "Take it but try to change practices from within",
        points: 5,
        type: "balanced",
        feedback:
          "Good intentions, but ensure you're not compromising yourself.",
      },
      {
        text: "Take the job for the money",
        points: -5,
        type: "bad",
        feedback:
          "Your integrity is your most valuable asset. Protect it carefully.",
      },
    ],
  },
  {
    id: 18,
    question:
      "A peer makes a prejudiced comment in your presence. How do you respond?",
    options: [
      {
        text: "Speak up respectfully and challenge the comment",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Standing against prejudice takes courage and wisdom.",
      },
      {
        text: "Change the subject to avoid conflict",
        points: 5,
        type: "balanced",
        feedback:
          "Avoiding the topic is safer, but speaking up would have more impact.",
      },
      {
        text: "Laugh along to fit in",
        points: -5,
        type: "bad",
        feedback:
          "Staying silent endorses harmful behavior. Use your voice for good.",
      },
    ],
  },
  {
    id: 19,
    question:
      "You accidentally break something valuable belonging to someone else. What do you do?",
    options: [
      {
        text: "Admit it immediately and offer to fix or replace it",
        points: 10,
        type: "good",
        feedback:
          "Outstanding! Taking responsibility and making it right shows maturity.",
      },
      {
        text: "Feel guilty and tell them after some time",
        points: 5,
        type: "balanced",
        feedback: "Honesty is good, but sooner is always better than later.",
      },
      {
        text: "Hide it and hope they don't notice",
        points: -5,
        type: "bad",
        feedback:
          "Deception always causes more harm. Honesty builds trust quickly.",
      },
    ],
  },
  {
    id: 20,
    question:
      "You're pressured to try something you know is wrong. What do you do?",
    options: [
      {
        text: "Firmly refuse and walk away",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Peer pressure is real, but your values come first.",
      },
      {
        text: "Make an excuse and leave",
        points: 5,
        type: "balanced",
        feedback:
          "Smart move! Though being honest about your values is even better.",
      },
      {
        text: "Go along with it to avoid being different",
        points: -5,
        type: "bad",
        feedback:
          "Your individuality is strength. Don't compromise for acceptance.",
      },
    ],
  },
  {
    id: 21,
    question: "A coworker takes credit for your work. What do you do?",
    options: [
      {
        text: "Address it professionally in a meeting",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Professional communication protects your reputation.",
      },
      {
        text: "Talk to them privately first",
        points: 5,
        type: "balanced",
        feedback: "Good approach, but public correction may be necessary.",
      },
      {
        text: "Say nothing and let them take credit",
        points: -5,
        type: "bad",
        feedback: "Your work deserves recognition. Speak up!",
      },
    ],
  },
  {
    id: 22,
    question:
      "You see someone being bullied and no one is helping. What do you do?",
    options: [
      {
        text: "Step in and support the person being bullied",
        points: 10,
        type: "good",
        feedback: "Brave and compassionate! You could change someone's day.",
      },
      {
        text: "Try to help but worry about getting involved",
        points: 5,
        type: "balanced",
        feedback: "Your concern is valid, but your impact matters more.",
      },
      {
        text: "Avoid getting involved",
        points: -5,
        type: "bad",
        feedback:
          "Silence enables bullying. Your presence can make all the difference.",
      },
    ],
  },
  {
    id: 23,
    question:
      "You realize your parents made a mistake in trusting you. What do you do?",
    options: [
      {
        text: "Come clean immediately and face consequences",
        points: 10,
        type: "good",
        feedback:
          "Honest and courageous! This builds deeper trust than avoiding it.",
      },
      {
        text: "Wait for them to discover it",
        points: 5,
        type: "balanced",
        feedback:
          "At least you weren't deceptive, but being proactive is better.",
      },
      {
        text: "Hide it at all costs",
        points: -5,
        type: "bad",
        feedback:
          "Trust once broken is hard to rebuild. Honesty mends it faster.",
      },
    ],
  },
  {
    id: 24,
    question:
      "You have a chance to succeed by taking credit for someone else's work. What do you do?",
    options: [
      {
        text: "Give credit where it's due",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Success built on honesty is truly yours to be proud of.",
      },
      {
        text: "Share credit reluctantly",
        points: 5,
        type: "balanced",
        feedback:
          "Doing the right thing, though you hesitated. Confidence helps!",
      },
      {
        text: "Take full credit for the work",
        points: -5,
        type: "bad",
        feedback:
          "False success doesn't last. Your real work is your true success.",
      },
    ],
  },
  {
    id: 25,
    question:
      "A family member asks you to lie to protect them. What do you do?",
    options: [
      {
        text: "Respectfully decline and suggest honesty",
        points: 10,
        type: "good",
        feedback: "Wise and loyal! True loyalty means helping them be better.",
      },
      {
        text: "Feel conflicted but decide against lying",
        points: 5,
        type: "balanced",
        feedback:
          "Good instinct! Your values matter even in family situations.",
      },
      {
        text: "Lie to protect them",
        points: -5,
        type: "bad",
        feedback: "This hurts them long-term. Love means encouraging truth.",
      },
    ],
  },
  {
    id: 26,
    question: "You overhear private information about someone. What do you do?",
    options: [
      {
        text: "Keep it confidential and don't share it",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Respecting privacy shows integrity and builds trust.",
      },
      {
        text: "Share it only with close friends",
        points: 5,
        type: "balanced",
        feedback:
          "At least you're not broadcasting it widely, but silence is better.",
      },
      {
        text: "Share it with whoever will listen",
        points: -5,
        type: "bad",
        feedback:
          "Gossip destroys reputations and relationships. Guard others' trust.",
      },
    ],
  },
  {
    id: 27,
    question:
      "You're asked to participate in something exclusive that excludes others. What do you do?",
    options: [
      {
        text: "Decline and suggest including more people",
        points: 10,
        type: "good",
        feedback:
          "Admirable! Inclusivity is a sign of true confidence and kindness.",
      },
      {
        text: "Participate but feel uncomfortable",
        points: 5,
        type: "balanced",
        feedback:
          "Your discomfort tells you something. Speaking up would help.",
      },
      {
        text: "Participate and enjoy the exclusivity",
        points: -5,
        type: "bad",
        feedback:
          "Cliques hurt communities. Real confidence doesn't need exclusivity.",
      },
    ],
  },
  {
    id: 28,
    question:
      "A teacher makes a mistake in grading that favors you. What do you do?",
    options: [
      {
        text: "Point out the mistake immediately",
        points: 10,
        type: "good",
        feedback:
          "Outstanding! Honesty even when it costs you shows true character.",
      },
      {
        text: "Consider pointing it out but hesitate",
        points: 5,
        type: "balanced",
        feedback: "Your conscience is working! Act on it next time.",
      },
      {
        text: "Say nothing and enjoy the better grade",
        points: -5,
        type: "bad",
        feedback: "Unearned success won't feel as good as earned success.",
      },
    ],
  },
  {
    id: 29,
    question: "You witness someone cheating in an exam. What do you do?",
    options: [
      {
        text: "Report it to the teacher or administrator",
        points: 10,
        type: "good",
        feedback:
          "Great choice! Maintaining academic integrity helps everyone.",
      },
      {
        text: "Say nothing but feel conflicted",
        points: 5,
        type: "balanced",
        feedback:
          "Your conflict shows you know what's right. Act on it next time.",
      },
      {
        text: "Say nothing and avoid getting involved",
        points: -5,
        type: "bad",
        feedback:
          "Silence enables dishonesty. Your voice matters in maintaining standards.",
      },
    ],
  },
  {
    id: 30,
    question:
      "Your friend confides a secret in you and asks you to keep it. Someone else asks you about it. What do you do?",
    options: [
      {
        text: "Respect the confidence and don't share it",
        points: 10,
        type: "good",
        feedback:
          "Perfect! Being trustworthy is one of the greatest gifts you can give.",
      },
      {
        text: "Hesitate but ultimately keep the secret",
        points: 5,
        type: "balanced",
        feedback: "You did the right thing! Be that person people can trust.",
      },
      {
        text: "Share it despite the request",
        points: -5,
        type: "bad",
        feedback:
          "Betraying confidence breaks friendships. Guard what's trusted to you.",
      },
    ],
  },
  {
    id: 31,
    question:
      "You're offered an unfair advantage in a competition. What do you do?",
    options: [
      {
        text: "Decline and compete fairly",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Fair competition builds real confidence and integrity.",
      },
      {
        text: "Consider it but choose fair play",
        points: 5,
        type: "balanced",
        feedback: "You made the right choice! Consistency is key.",
      },
      {
        text: "Take the advantage",
        points: -5,
        type: "bad",
        feedback: "Victory through cheating feels hollow. Earn your success.",
      },
    ],
  },
  {
    id: 32,
    question: "Someone hurts you and doesn't apologize. How do you respond?",
    options: [
      {
        text: "Address it calmly and express how you feel",
        points: 10,
        type: "good",
        feedback:
          "Mature communication! This opens doors to understanding and healing.",
      },
      {
        text: "Avoid them but stay hurt",
        points: 5,
        type: "balanced",
        feedback: "Avoidance protects you, but speaking up resolves more.",
      },
      {
        text: "Seek revenge or retaliate",
        points: -5,
        type: "bad",
        feedback:
          "Revenge perpetuates conflict. Communication breaks the cycle.",
      },
    ],
  },
  {
    id: 33,
    question:
      "You notice waste or harm in an organization you're part of. What do you do?",
    options: [
      {
        text: "Bring it up constructively with leadership",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Speaking up for positive change shows courage and care.",
      },
      {
        text: "Mention it to others but not leadership",
        points: 5,
        type: "balanced",
        feedback:
          "At least you're aware. Direct communication would be more effective.",
      },
      {
        text: "Say nothing",
        points: -5,
        type: "bad",
        feedback:
          "Your voice matters. Organizations improve when people speak up.",
      },
    ],
  },
  {
    id: 34,
    question: "You're given too much change at a store. What do you do?",
    options: [
      {
        text: "Return it to the cashier",
        points: 10,
        type: "good",
        feedback:
          "Great integrity! Small acts of honesty create a better world.",
      },
      {
        text: "Feel torn but keep it",
        points: 5,
        type: "balanced",
        feedback: "Your conscience was right. Next time, act on it.",
      },
      {
        text: "Keep it without a second thought",
        points: -5,
        type: "bad",
        feedback:
          "These small choices shape your character. Do what's right always.",
      },
    ],
  },
  {
    id: 35,
    question:
      "Someone asks for your help with something difficult. You're busy. What do you do?",
    options: [
      {
        text: "Make time to help or offer to help later",
        points: 10,
        type: "good",
        feedback:
          "Compassionate and generous! You're making a real difference.",
      },
      {
        text: "Help reluctantly",
        points: 5,
        type: "balanced",
        feedback:
          "You helped, which is good! Doing it willingly makes it better.",
      },
      {
        text: "Refuse and focus on your own tasks",
        points: -5,
        type: "bad",
        feedback: "We all need help sometimes. Being kind creates communities.",
      },
    ],
  },
  {
    id: 36,
    question:
      "You discover a mistake in your favor in a document or transaction. What do you do?",
    options: [
      {
        text: "Report it immediately",
        points: 10,
        type: "good",
        feedback:
          "Outstanding! Your honesty prevents bigger problems down the line.",
      },
      {
        text: "Wait a bit before deciding what to do",
        points: 5,
        type: "balanced",
        feedback:
          "At least you noticed! Making a decision soon would be better.",
      },
      {
        text: "Keep quiet and benefit from it",
        points: -5,
        type: "bad",
        feedback:
          "Hidden benefits often come with hidden costs to your integrity.",
      },
    ],
  },
  {
    id: 37,
    question:
      "A colleague takes credit for your idea in a meeting. What do you do?",
    options: [
      {
        text: "Speak up politely and clarify the idea's origin",
        points: 10,
        type: "good",
        feedback: "Perfect! Standing up for yourself respectfully is powerful.",
      },
      {
        text: "Feel upset but say nothing",
        points: 5,
        type: "balanced",
        feedback: "Your upset is valid. Speaking up would have been better.",
      },
      {
        text: "Get angry and confront them aggressively",
        points: -5,
        type: "bad",
        feedback: "Aggression backfires. Calm clarity is more effective.",
      },
    ],
  },
  {
    id: 38,
    question:
      "You're tempted to call in sick when you're not to have a day off. What do you do?",
    options: [
      {
        text: "Go to work as scheduled or request a day off properly",
        points: 10,
        type: "good",
        feedback:
          "Great integrity! Your reliability makes you valuable and trustworthy.",
      },
      {
        text: "Feel tempted but decide against it",
        points: 5,
        type: "balanced",
        feedback: "Good instinct! You know the right choice.",
      },
      {
        text: "Call in sick",
        points: -5,
        type: "bad",
        feedback:
          "Dishonesty damages your reputation. Just ask for the day off.",
      },
    ],
  },
  {
    id: 39,
    question: "You hear rumors about someone. What do you do?",
    options: [
      {
        text: "Don't spread them and suggest others don't either",
        points: 10,
        type: "good",
        feedback: "Wise and kind! You're protecting someone's reputation.",
      },
      {
        text: "Don't spread them personally but don't stop others",
        points: 5,
        type: "balanced",
        feedback: "You're being responsible, but speaking up would help more.",
      },
      {
        text: "Spread the rumors",
        points: -5,
        type: "bad",
        feedback: "Rumors can destroy lives. Use your words for good.",
      },
    ],
  },
  {
    id: 40,
    question:
      "You make a mistake that affects others negatively. What do you do?",
    options: [
      {
        text: "Admit it, apologize, and make amends",
        points: 10,
        type: "good",
        feedback: "Excellent! Taking responsibility builds respect and trust.",
      },
      {
        text: "Admit it but minimize your role",
        points: 5,
        type: "balanced",
        feedback:
          "At least you admitted it. Being fully accountable is better.",
      },
      {
        text: "Blame someone else or avoid responsibility",
        points: -5,
        type: "bad",
        feedback: "Accountability builds character. Own your mistakes.",
      },
    ],
  },
  {
    id: 41,
    question:
      "You're invited to join a group that gossips about others. What do you do?",
    options: [
      {
        text: "Politely decline and avoid the group",
        points: 10,
        type: "good",
        feedback:
          "Smart choice! You're protecting your integrity and character.",
      },
      {
        text: "Join but try to change the conversation",
        points: 5,
        type: "balanced",
        feedback: "Good intentions, but avoiding toxic groups is cleaner.",
      },
      {
        text: "Join and participate in gossiping",
        points: -5,
        type: "bad",
        feedback:
          "Gossip hurts others and corrupts your character. Choose better.",
      },
    ],
  },
  {
    id: 42,
    question:
      "Someone gives you a gift expecting something in return. What do you do?",
    options: [
      {
        text: "Clarify expectations and set boundaries",
        points: 10,
        type: "good",
        feedback:
          "Healthy! Clear communication prevents misunderstandings and resentment.",
      },
      {
        text: "Accept and feel obligated but unsure",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort matters. Addressing it would be better.",
      },
      {
        text: "Accept knowing you might owe them",
        points: -5,
        type: "bad",
        feedback: "Gifts with hidden strings aren't really gifts. Speak up.",
      },
    ],
  },
  {
    id: 43,
    question:
      "You notice someone struggling with their mental health. What do you do?",
    options: [
      {
        text: "Reach out with concern and suggest professional help",
        points: 10,
        type: "good",
        feedback:
          "Compassionate and helpful! You could be a turning point for them.",
      },
      {
        text: "Feel concerned but don't know what to do",
        points: 5,
        type: "balanced",
        feedback:
          "Your concern is beautiful. Seeking guidance on how to help is next.",
      },
      {
        text: "Avoid the topic",
        points: -5,
        type: "bad",
        feedback:
          "Mental health matters. Your acknowledgment could save a life.",
      },
    ],
  },
  {
    id: 44,
    question:
      "You're offered money to do something slightly unethical. What do you do?",
    options: [
      {
        text: "Refuse despite the financial temptation",
        points: 10,
        type: "good",
        feedback: "Excellent! Your integrity is worth more than any money.",
      },
      {
        text: "Feel tempted but decline",
        points: 5,
        type: "balanced",
        feedback:
          "Good choice! Temptation is normal; resisting it shows strength.",
      },
      {
        text: "Accept the money and do it",
        points: -5,
        type: "bad",
        feedback: "Money earned unethically always carries a hidden cost.",
      },
    ],
  },
  {
    id: 45,
    question: "Someone you don't like asks for help. What do you do?",
    options: [
      {
        text: "Help them anyway because they need it",
        points: 10,
        type: "good",
        feedback: "Powerful! Kindness without conditions shows true maturity.",
      },
      {
        text: "Help reluctantly",
        points: 5,
        type: "balanced",
        feedback: "You helped, which is good. Doing it gladly makes it better.",
      },
      {
        text: "Refuse to help",
        points: -5,
        type: "bad",
        feedback:
          "Kindness isn't reserved for people we like. Everyone deserves it.",
      },
    ],
  },
  {
    id: 46,
    question: "You see someone being treated unfairly at work. What do you do?",
    options: [
      {
        text: "Support them and address it with management",
        points: 10,
        type: "good",
        feedback:
          "Brave and just! You're creating a better workplace for everyone.",
      },
      {
        text: "Sympathize but stay out of it",
        points: 5,
        type: "balanced",
        feedback:
          "Your sympathy matters, but action would make a real difference.",
      },
      {
        text: "Do nothing",
        points: -5,
        type: "bad",
        feedback: "Injustice grows when good people stay silent. Speak up.",
      },
    ],
  },
  {
    id: 47,
    question:
      "You have a chance to succeed by violating your values. What do you do?",
    options: [
      {
        text: "Reject it and find another way",
        points: 10,
        type: "good",
        feedback: "Perfect! Real success aligns with your values.",
      },
      {
        text: "Consider it seriously",
        points: 5,
        type: "balanced",
        feedback:
          "Questioning is good. Staying true to your values is the answer.",
      },
      {
        text: "Compromise your values for success",
        points: -5,
        type: "bad",
        feedback:
          "Hollow success is no success at all. Your values are your compass.",
      },
    ],
  },
  {
    id: 48,
    question: "Someone falsely accuses you of something. What do you do?",
    options: [
      {
        text: "Calmly defend yourself with facts and evidence",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Staying calm and factual clears misunderstandings.",
      },
      {
        text: "Get defensive and angry",
        points: 5,
        type: "balanced",
        feedback:
          "Your anger is understandable, but calmness is more effective.",
      },
      {
        text: "Accuse them back",
        points: -5,
        type: "bad",
        feedback: "Revenge escalates conflict. Truth and calmness resolve it.",
      },
    ],
  },
  {
    id: 49,
    question:
      "You discover a friend is being dishonest with you. What do you do?",
    options: [
      {
        text: "Talk to them directly about your concerns",
        points: 10,
        type: "good",
        feedback:
          "Mature and caring! This is how real friendships handle conflict.",
      },
      {
        text: "Feel hurt and distance yourself",
        points: 5,
        type: "balanced",
        feedback:
          "Your hurt is valid, but dialogue heals better than distance.",
      },
      {
        text: "Tell others about their dishonesty",
        points: -5,
        type: "bad",
        feedback:
          "Going to others before them damages trust and relationships.",
      },
    ],
  },
  {
    id: 50,
    question:
      "You're offered a shortcut to your goal that feels ethically gray. What do you do?",
    options: [
      {
        text: "Take the longer ethical path",
        points: 10,
        type: "good",
        feedback: "Excellent! The path matters as much as the destination.",
      },
      {
        text: "Feel conflicted and hesitate",
        points: 5,
        type: "balanced",
        feedback: "Your conflict is telling you something. Listen to it.",
      },
      {
        text: "Take the shortcut",
        points: -5,
        type: "bad",
        feedback:
          "Gray areas often lead to darker places. Stay on the bright path.",
      },
    ],
  },
  {
    id: 51,
    question:
      "Someone needs help but helping inconveniences you significantly. What do you do?",
    options: [
      {
        text: "Help them despite the inconvenience",
        points: 10,
        type: "good",
        feedback: "Selfless and kind! This is when true character shows.",
      },
      {
        text: "Help partially or minimally",
        points: 5,
        type: "balanced",
        feedback:
          "You helped, which is good. Going the extra mile builds character.",
      },
      {
        text: "Prioritize your convenience and don't help",
        points: -5,
        type: "bad",
        feedback:
          "We all face inconvenience. Helping anyway defines who we are.",
      },
    ],
  },
  {
    id: 52,
    question:
      "You overhear something said about you that's false and hurtful. What do you do?",
    options: [
      {
        text: "Calmly talk to the person and clear it up",
        points: 10,
        type: "good",
        feedback:
          "Wise and brave! Direct communication dissolves misunderstanding.",
      },
      {
        text: "Feel hurt but say nothing",
        points: 5,
        type: "balanced",
        feedback: "Your pain is real, but speaking up could heal it.",
      },
      {
        text: "Retaliate with hurtful words about them",
        points: -5,
        type: "bad",
        feedback: "Retaliation only spreads hurt. Rise above it with grace.",
      },
    ],
  },
  {
    id: 53,
    question:
      "You notice a pattern of unfair treatment in your community. What do you do?",
    options: [
      {
        text: "Work to raise awareness and create change",
        points: 10,
        type: "good",
        feedback: "Powerful! You're advocating for justice and equality.",
      },
      {
        text: "Feel bothered but unsure how to help",
        points: 5,
        type: "balanced",
        feedback:
          "Your awareness is the first step. Learning how to help comes next.",
      },
      {
        text: "Accept it as the way things are",
        points: -5,
        type: "bad",
        feedback: "Change starts when people refuse to accept injustice.",
      },
    ],
  },
  {
    id: 54,
    question:
      "A teacher or leader seems to be making a poor decision. What do you do?",
    options: [
      {
        text: "Respectfully question and offer perspective",
        points: 10,
        type: "good",
        feedback: "Excellent! Constructive feedback improves leadership.",
      },
      {
        text: "Say nothing but express doubt privately",
        points: 5,
        type: "balanced",
        feedback: "Your concerns are valid. Voicing them could help.",
      },
      {
        text: "Complain to others without addressing it directly",
        points: -5,
        type: "bad",
        feedback:
          "Undermining leadership creates toxicity. Speak directly instead.",
      },
    ],
  },
  {
    id: 55,
    question: "You find out someone lied to you significantly. What do you do?",
    options: [
      {
        text: "Address it calmly and decide what trust means to you",
        points: 10,
        type: "good",
        feedback:
          "Mature and thoughtful! This is how broken trust can be rebuilt.",
      },
      {
        text: "Feel betrayed and cut them off",
        points: 5,
        type: "balanced",
        feedback: "Your betrayal is real. A conversation might resolve it.",
      },
      {
        text: "Lie to them in retaliation",
        points: -5,
        type: "bad",
        feedback: "Revenge through lies only creates more damage.",
      },
    ],
  },
  {
    id: 56,
    question:
      "You're placed in a group project with someone you don't get along with. What do you do?",
    options: [
      {
        text: "Set aside differences and work professionally",
        points: 10,
        type: "good",
        feedback: "Mature and practical! This is real-world teamwork.",
      },
      {
        text: "Try to avoid collaborating with them",
        points: 5,
        type: "balanced",
        feedback:
          "Avoidance is understandable, but professionalism serves better.",
      },
      {
        text: "Make it difficult for them",
        points: -5,
        type: "bad",
        feedback: "Sabotage hurts everyone, including the group's work.",
      },
    ],
  },
  {
    id: 57,
    question:
      "You realize you've been wrong about someone or something. What do you do?",
    options: [
      {
        text: "Admit it and apologize if needed",
        points: 10,
        type: "good",
        feedback:
          "Wonderful! Being wrong and admitting it shows real strength.",
      },
      {
        text: "Feel uncomfortable but don't mention it",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort suggests you should speak up.",
      },
      {
        text: "Continue defending your wrong position",
        points: -5,
        type: "bad",
        feedback: "Growth requires humility. Admit mistakes and learn.",
      },
    ],
  },
  {
    id: 58,
    question:
      "Someone asks you to keep a secret that might harm them. What do you do?",
    options: [
      {
        text: "Tell them you can't keep secrets that cause harm",
        points: 10,
        type: "good",
        feedback: "Perfect! Caring more about their safety than their secret.",
      },
      {
        text: "Keep it but feel guilty",
        points: 5,
        type: "balanced",
        feedback: "Your guilt is telling you to speak up. Listen to it.",
      },
      {
        text: "Keep it without hesitation",
        points: -5,
        type: "bad",
        feedback: "True care means speaking up even when they ask you not to.",
      },
    ],
  },
  {
    id: 59,
    question:
      "You have the opportunity to make a quick profit through a questionable deal. What do you do?",
    options: [
      {
        text: "Pass on it and seek legitimate opportunities",
        points: 10,
        type: "good",
        feedback: "Excellent! Integrity protects your long-term success.",
      },
      {
        text: "Consider it carefully before declining",
        points: 5,
        type: "balanced",
        feedback: "Your consideration is honest. Your decision is wise.",
      },
      {
        text: "Take the opportunity",
        points: -5,
        type: "bad",
        feedback: "Quick profits often come with hidden costs to character.",
      },
    ],
  },
  {
    id: 60,
    question:
      "Someone in your life is struggling with addiction. What do you do?",
    options: [
      {
        text: "Support them professionally and encourage treatment",
        points: 10,
        type: "good",
        feedback: "Compassionate and wise! Professional help is the way.",
      },
      {
        text: "Feel concerned but unsure how to help",
        points: 5,
        type: "balanced",
        feedback: "Your concern is good. Learning about helping is next.",
      },
      {
        text: "Enable their behavior to maintain the relationship",
        points: -5,
        type: "bad",
        feedback: "True love means helping them recover, not enabling.",
      },
    ],
  },
  {
    id: 61,
    question:
      "You're pressured to bend rules to help someone you care about. What do you do?",
    options: [
      {
        text: "Decline and offer legitimate alternatives",
        points: 10,
        type: "good",
        feedback: "Perfect! True loyalty doesn't involve dishonesty.",
      },
      {
        text: "Feel conflicted but lean toward refusing",
        points: 5,
        type: "balanced",
        feedback: "Your instinct is right. Following it fully is the answer.",
      },
      {
        text: "Bend the rules for them",
        points: -5,
        type: "bad",
        feedback:
          "Rules exist to protect everyone. Breaking them helps no one.",
      },
    ],
  },
  {
    id: 62,
    question:
      "You see a colleague being harassed and they seem to want to stay quiet. What do you do?",
    options: [
      {
        text: "Check in with them and let them know you're there to support",
        points: 10,
        type: "good",
        feedback: "Caring and thoughtful! You're offering safety and support.",
      },
      {
        text: "Respect their silence and say nothing",
        points: 5,
        type: "balanced",
        feedback:
          "Respecting their choice is good. Offering support is better.",
      },
      {
        text: "Report it without their permission",
        points: -5,
        type: "bad",
        feedback:
          "Their autonomy matters, but a conversation about reporting helps.",
      },
    ],
  },
  {
    id: 63,
    question:
      "You're given confidential information that could harm your competitor. What do you do?",
    options: [
      {
        text: "Respect the confidentiality regardless",
        points: 10,
        type: "good",
        feedback: "Excellent! Integrity is your competitive advantage.",
      },
      {
        text: "Feel tempted but don't use it",
        points: 5,
        type: "balanced",
        feedback:
          "Resisting temptation shows strength. You made the right choice.",
      },
      {
        text: "Use it to gain advantage",
        points: -5,
        type: "bad",
        feedback: "Shortcuts built on dishonesty crumble quickly.",
      },
    ],
  },
  {
    id: 64,
    question:
      "You notice someone copying your work or ideas without credit. What do you do?",
    options: [
      {
        text: "Address it directly and professionally",
        points: 10,
        type: "good",
        feedback: "Assertive and professional! This protects your work.",
      },
      {
        text: "Feel frustrated but stay silent",
        points: 5,
        type: "balanced",
        feedback: "Your frustration is valid. Speaking up would resolve it.",
      },
      {
        text: "Copy their work in retaliation",
        points: -5,
        type: "bad",
        feedback:
          "Retaliation only escalates. Direct communication works better.",
      },
    ],
  },
  {
    id: 65,
    question:
      "You're asked to participate in something you think is wrong. What do you do?",
    options: [
      {
        text: "Politely refuse and explain why",
        points: 10,
        type: "good",
        feedback:
          "Principled and courageous! Your stance could inspire others.",
      },
      {
        text: "Participate while expressing discomfort",
        points: 5,
        type: "balanced",
        feedback: "Expressing discomfort is good. Not participating is better.",
      },
      {
        text: "Participate without question",
        points: -5,
        type: "bad",
        feedback:
          "Your conscience is a compass. Follow it even under pressure.",
      },
    ],
  },
  {
    id: 66,
    question:
      "Someone's reputation is being destroyed by false rumors. What do you do?",
    options: [
      {
        text: "Stand up for them and counter the rumors",
        points: 10,
        type: "good",
        feedback: "Brave and loyal! You're protecting someone's reputation.",
      },
      {
        text: "Know it's false but stay silent",
        points: 5,
        type: "balanced",
        feedback: "Your knowledge matters. Sharing truth would help.",
      },
      {
        text: "Spread the rumors further",
        points: -5,
        type: "bad",
        feedback:
          "Spreading false rumors is deeply harmful. Don't participate.",
      },
    ],
  },
  {
    id: 67,
    question:
      "You're offered special treatment because of who you know. What do you do?",
    options: [
      {
        text: "Decline or request fair treatment for all",
        points: 10,
        type: "good",
        feedback: "Excellent! You're standing for fairness and equality.",
      },
      {
        text: "Accept it with some discomfort",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is telling you something. Decline it.",
      },
      {
        text: "Accept it happily",
        points: -5,
        type: "bad",
        feedback: "Privilege based on connections weakens merit and fairness.",
      },
    ],
  },
  {
    id: 68,
    question:
      "Someone confesses they did something wrong and asks for forgiveness. What do you do?",
    options: [
      {
        text: "Listen, consider, and forgive if genuine",
        points: 10,
        type: "good",
        feedback: "Gracious and wise! Forgiveness is powerful healing.",
      },
      {
        text: "Feel conflicted and struggle to forgive",
        points: 5,
        type: "balanced",
        feedback: "Your struggle is valid. Take time, but aim for forgiveness.",
      },
      {
        text: "Hold a grudge and refuse to forgive",
        points: -5,
        type: "bad",
        feedback: "Holding grudges only hurts you. Forgiveness frees you.",
      },
    ],
  },
  {
    id: 69,
    question:
      "You're given credit for something you didn't do and no one corrects it. What do you do?",
    options: [
      {
        text: "Clarify and give credit to the real creator",
        points: 10,
        type: "good",
        feedback: "Honest and fair! This builds real respect and trust.",
      },
      {
        text: "Feel uncomfortable but accept it",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. Acting on it would be better.",
      },
      {
        text: "Accept the credit without correction",
        points: -5,
        type: "bad",
        feedback: "False credit builds a false reputation. Correct it.",
      },
    ],
  },
  {
    id: 70,
    question:
      "You notice your organization is hurting vulnerable people. What do you do?",
    options: [
      {
        text: "Document, report, and work for change",
        points: 10,
        type: "good",
        feedback: "Brave advocate! You're protecting the vulnerable.",
      },
      {
        text: "Feel upset but unsure how to address it",
        points: 5,
        type: "balanced",
        feedback: "Your upset is right. Finding ways to report matters.",
      },
      {
        text: "Ignore it to avoid complications",
        points: -5,
        type: "bad",
        feedback: "Silence enables harm. Your voice could stop it.",
      },
    ],
  },
  {
    id: 71,
    question:
      "A friend's partner is cheating and they don't know. What do you do?",
    options: [
      {
        text: "Tell your friend what you know",
        points: 10,
        type: "good",
        feedback: "Difficult but right! True friendship means hard truths.",
      },
      {
        text: "Feel conflicted but don't want to get involved",
        points: 5,
        type: "balanced",
        feedback:
          "Your conflict is understandable. Your friend deserves to know.",
      },
      {
        text: "Say nothing to avoid drama",
        points: -5,
        type: "bad",
        feedback: "Your friend would want to know. Real friendship speaks up.",
      },
    ],
  },
  {
    id: 72,
    question:
      "You're competing against someone and realize you're winning unfairly. What do you do?",
    options: [
      {
        text: "Come clean and offer to restart fairly",
        points: 10,
        type: "good",
        feedback: "Honorable! True victory comes from fair competition.",
      },
      {
        text: "Feel uncomfortable but continue",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is telling you to act. Do the right thing.",
      },
      {
        text: "Continue without mentioning it",
        points: -5,
        type: "bad",
        feedback: "Winning unfairly doesn't feel like winning at all.",
      },
    ],
  },
  {
    id: 73,
    question:
      "Someone admits they did something hurtful and apologizes sincerely. What do you do?",
    options: [
      {
        text: "Accept the apology and work toward reconciliation",
        points: 10,
        type: "good",
        feedback:
          "Gracious and wise! Sincere apologies deserve genuine forgiveness.",
      },
      {
        text: "Accept but remain guarded",
        points: 5,
        type: "balanced",
        feedback: "Caution is wise. Complete forgiveness is even better.",
      },
      {
        text: "Refuse to forgive",
        points: -5,
        type: "bad",
        feedback:
          "Holding onto pain hurts you more. Genuine apologies deserve forgiveness.",
      },
    ],
  },
  {
    id: 74,
    question:
      "You're offered a significant promotion that involves unethical practices. What do you do?",
    options: [
      {
        text: "Decline and seek advancement through ethical means",
        points: 10,
        type: "good",
        feedback:
          "Principled! Your integrity is more valuable than advancement.",
      },
      {
        text: "Consider it seriously before declining",
        points: 5,
        type: "balanced",
        feedback: "Considering shows you're thoughtful. Declining was right.",
      },
      {
        text: "Accept it",
        points: -5,
        type: "bad",
        feedback: "Promotions built on dishonesty collapse quickly.",
      },
    ],
  },
  {
    id: 75,
    question: "You see someone deliberately hurting an animal. What do you do?",
    options: [
      {
        text: "Intervene and report it to authorities",
        points: 10,
        type: "good",
        feedback:
          "Protector! You're standing for those who can't defend themselves.",
      },
      {
        text: "Feel upset but don't know what to do",
        points: 5,
        type: "balanced",
        feedback: "Your upset is good. Learning how to report it is next.",
      },
      {
        text: "Do nothing",
        points: -5,
        type: "bad",
        feedback: "Cruelty continues when people stay silent. Report it.",
      },
    ],
  },
  {
    id: 76,
    question: "You discover your employer is committing fraud. What do you do?",
    options: [
      {
        text: "Report it through proper channels or authorities",
        points: 10,
        type: "good",
        feedback: "Courageous and ethical! You're doing the right thing.",
      },
      {
        text: "Feel concerned but afraid to report it",
        points: 5,
        type: "balanced",
        feedback: "Your fear is understandable. Reporting is the right choice.",
      },
      {
        text: "Keep quiet to protect your job",
        points: -5,
        type: "bad",
        feedback: "Your integrity is worth more than a job built on fraud.",
      },
    ],
  },
  {
    id: 77,
    question:
      "Someone you respect asks you to do something unethical. What do you do?",
    options: [
      {
        text: "Respectfully decline regardless of who's asking",
        points: 10,
        type: "good",
        feedback:
          "Strong and principled! True respect comes from shared values.",
      },
      {
        text: "Feel conflicted between respect and ethics",
        points: 5,
        type: "balanced",
        feedback: "Your conflict shows your conscience. Choose ethics.",
      },
      {
        text: "Do it because you respect them",
        points: -5,
        type: "bad",
        feedback: "Respect doesn't override ethics. Speak up respectfully.",
      },
    ],
  },
  {
    id: 78,
    question:
      "You witness someone being excluded because of their background. What do you do?",
    options: [
      {
        text: "Include them and challenge the exclusion",
        points: 10,
        type: "good",
        feedback: "Inclusive and brave! You're creating belonging.",
      },
      {
        text: "Feel uncomfortable but don't interfere",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is telling you to act. Speak up.",
      },
      {
        text: "Participate in the exclusion",
        points: -5,
        type: "bad",
        feedback: "Exclusion is discrimination. Your voice can stop it.",
      },
    ],
  },
  {
    id: 79,
    question:
      "You find a document with sensitive information about someone. What do you do?",
    options: [
      {
        text: "Return it or report it to the appropriate person",
        points: 10,
        type: "good",
        feedback: "Trustworthy and respectful! You're protecting privacy.",
      },
      {
        text: "Feel tempted to read it but don't",
        points: 5,
        type: "balanced",
        feedback: "Resisting temptation is good. Reporting it is better.",
      },
      {
        text: "Read it out of curiosity",
        points: -5,
        type: "bad",
        feedback: "Privacy violations are breaches of trust. Respect it.",
      },
    ],
  },
  {
    id: 80,
    question:
      "Someone admits they were wrong about judging you negatively. What do you do?",
    options: [
      {
        text: "Accept the admission gracefully and rebuild trust",
        points: 10,
        type: "good",
        feedback: "Gracious and forward-thinking! You're choosing growth.",
      },
      {
        text: "Accept it but remain cautious",
        points: 5,
        type: "balanced",
        feedback: "Caution is wise. Gradually rebuilding trust is healthy.",
      },
      {
        text: "Hold it against them",
        points: -5,
        type: "bad",
        feedback: "People can change their minds. Let go of the past.",
      },
    ],
  },
  {
    id: 81,
    question:
      "You're part of a group that's starting to become exclusionary. What do you do?",
    options: [
      {
        text: "Speak up and advocate for inclusion",
        points: 10,
        type: "good",
        feedback: "Inclusive leader! You're preventing group toxicity.",
      },
      {
        text: "Feel uncomfortable but say nothing",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort matters. Voicing it prevents exclusion.",
      },
      {
        text: "Go along with the exclusivity",
        points: -5,
        type: "bad",
        feedback: "Inclusion starts with you speaking up. Don't stay silent.",
      },
    ],
  },
  {
    id: 82,
    question:
      "Someone shares a vulnerability with you and asks you to keep it private. What do you do?",
    options: [
      {
        text: "Keep it confidential and honor their trust",
        points: 10,
        type: "good",
        feedback:
          "Trustworthy and compassionate! You're being their safe space.",
      },
      {
        text: "Keep it but feel like you might share it",
        points: 5,
        type: "balanced",
        feedback:
          "Resisting the urge shows restraint. Complete confidentiality is better.",
      },
      {
        text: "Share it with others",
        points: -5,
        type: "bad",
        feedback: "Breaking confidence destroys relationships and trust.",
      },
    ],
  },
  {
    id: 83,
    question:
      "You realize a system or process is deeply unjust. What do you do?",
    options: [
      {
        text: "Work to change or reform the system",
        points: 10,
        type: "good",
        feedback: "Reformer! You're making the world more just.",
      },
      {
        text: "Know it's unjust but feel powerless",
        points: 5,
        type: "balanced",
        feedback:
          "Your awareness is the first step. There's always something you can do.",
      },
      {
        text: "Accept it and move on",
        points: -5,
        type: "bad",
        feedback:
          "Systems change when people decide they're no longer acceptable.",
      },
    ],
  },
  {
    id: 84,
    question:
      "Someone needs help but admitting you also need help is scary. What do you do?",
    options: [
      {
        text: "Help them openly and be honest about your own struggles",
        points: 10,
        type: "good",
        feedback:
          "Vulnerable and strong! Authenticity creates real connection.",
      },
      {
        text: "Help them but hide your own struggles",
        points: 5,
        type: "balanced",
        feedback:
          "Helping is good. Sharing your truth would deepen connection.",
      },
      {
        text: "Can't help because you're struggling",
        points: -5,
        type: "bad",
        feedback: "We all struggle. Helping others helps us too.",
      },
    ],
  },
  {
    id: 85,
    question:
      "You're given a choice between comfort and what's right. What do you do?",
    options: [
      {
        text: "Choose what's right despite discomfort",
        points: 10,
        type: "good",
        feedback:
          "Principled! True character is defined by choices in hard moments.",
      },
      {
        text: "Feel torn between the two",
        points: 5,
        type: "balanced",
        feedback:
          "Your struggle shows conscience. Choosing right is always the answer.",
      },
      {
        text: "Choose comfort",
        points: -5,
        type: "bad",
        feedback: "Comfort now often costs peace later. Choose what's right.",
      },
    ],
  },
  {
    id: 86,
    question: "Someone is being treated unjustly by authority. What do you do?",
    options: [
      {
        text: "Stand with them and document the injustice",
        points: 10,
        type: "good",
        feedback: "Brave advocate! You're standing for justice and equality.",
      },
      {
        text: "Feel sympathetic but don't get involved",
        points: 5,
        type: "balanced",
        feedback: "Your sympathy is good. Your involvement would be better.",
      },
      {
        text: "Support the authority",
        points: -5,
        type: "bad",
        feedback: "Question authority when it's unjust. Justice matters more.",
      },
    ],
  },
  {
    id: 87,
    question: "You notice someone struggling silently. What do you do?",
    options: [
      {
        text: "Reach out with genuine concern and listen",
        points: 10,
        type: "good",
        feedback:
          "Compassionate and observant! You could be someone's lifeline.",
      },
      {
        text: "Notice but don't know what to say",
        points: 5,
        type: "balanced",
        feedback:
          "Your observation is good. Simply showing up means everything.",
      },
      {
        text: "Ignore it",
        points: -5,
        type: "bad",
        feedback: "Sometimes noticing and reaching out saves lives.",
      },
    ],
  },
  {
    id: 88,
    question:
      "You're asked to compromise your health or safety for a goal. What do you do?",
    options: [
      {
        text: "Prioritize your well-being and find another path",
        points: 10,
        type: "good",
        feedback: "Wise and self-respecting! Your health is your foundation.",
      },
      {
        text: "Feel tempted but lean toward protecting yourself",
        points: 5,
        type: "balanced",
        feedback: "Good instinct! Always protect your health and safety.",
      },
      {
        text: "Compromise your health",
        points: -5,
        type: "bad",
        feedback: "No goal is worth your health or safety. Protect yourself.",
      },
    ],
  },
  {
    id: 89,
    question:
      "Someone keeps crossing your boundaries despite being told. What do you do?",
    options: [
      {
        text: "Set firm consequences and enforce them",
        points: 10,
        type: "good",
        feedback:
          "Strong and clear! Boundaries are essential for healthy relationships.",
      },
      {
        text: "Repeat your boundaries with less firmness",
        points: 5,
        type: "balanced",
        feedback: "Boundaries matter. Being firmer would be more effective.",
      },
      {
        text: "Allow it and accept the violation",
        points: -5,
        type: "bad",
        feedback: "Boundaries aren't negotiable. Enforce them clearly.",
      },
    ],
  },
  {
    id: 90,
    question:
      "You're offered a chance to learn something valuable through unethical means. What do you do?",
    options: [
      {
        text: "Find ethical ways to learn the same thing",
        points: 10,
        type: "good",
        feedback:
          "Principled learner! Knowledge earned ethically lasts longer.",
      },
      {
        text: "Feel tempted but eventually decline",
        points: 5,
        type: "balanced",
        feedback: "Your resistance is right. Stick with ethical learning.",
      },
      {
        text: "Take the unethical path to learn",
        points: -5,
        type: "bad",
        feedback: "How you learn matters as much as what you learn.",
      },
    ],
  },
  {
    id: 91,
    question:
      "You see a leader making decisions that benefit themselves over others. What do you do?",
    options: [
      {
        text: "Question it constructively and advocate for fairness",
        points: 10,
        type: "good",
        feedback: "Principled voice! You're working for fair leadership.",
      },
      {
        text: "Feel upset but stay silent",
        points: 5,
        type: "balanced",
        feedback: "Your upset shows your values. Speaking up would matter.",
      },
      {
        text: "Support the biased decision",
        points: -5,
        type: "bad",
        feedback:
          "Question biased leadership. Fairness depends on voices like yours.",
      },
    ],
  },
  {
    id: 92,
    question:
      "Someone gives you false praise to manipulate you. What do you do?",
    options: [
      {
        text: "Recognize it and address it directly",
        points: 10,
        type: "good",
        feedback:
          "Insightful and strong! You're protecting yourself from manipulation.",
      },
      {
        text: "Feel something is off but accept it",
        points: 5,
        type: "balanced",
        feedback: "Your instinct is right. Trusting it sooner helps.",
      },
      {
        text: "Accept the praise and allow manipulation",
        points: -5,
        type: "bad",
        feedback: "Trust your gut. If something feels off, it probably is.",
      },
    ],
  },
  {
    id: 93,
    question:
      "You're aware of discrimination within your organization. What do you do?",
    options: [
      {
        text: "Report it and work to create change",
        points: 10,
        type: "good",
        feedback:
          "Courageous advocate! You're building a more inclusive space.",
      },
      {
        text: "Know it's wrong but feel afraid",
        points: 5,
        type: "balanced",
        feedback: "Your fear is valid. Taking action despite it takes courage.",
      },
      {
        text: "Ignore it or participate",
        points: -5,
        type: "bad",
        feedback: "Discrimination thrives when people stay silent. Speak up.",
      },
    ],
  },
  {
    id: 94,
    question:
      "You realize you've been wrong about someone continuously. What do you do?",
    options: [
      {
        text: "Apologize genuinely and change your behavior",
        points: 10,
        type: "good",
        feedback:
          "Mature and humble! Real growth requires acknowledging mistakes.",
      },
      {
        text: "Realize it but slowly change your behavior",
        points: 5,
        type: "balanced",
        feedback: "At least you're changing. Being quicker helps repair trust.",
      },
      {
        text: "Continue your wrong judgments",
        points: -5,
        type: "bad",
        feedback: "Growth requires changing your mind and admitting fault.",
      },
    ],
  },
  {
    id: 95,
    question:
      "Someone less fortunate asks for help you can provide. What do you do?",
    options: [
      {
        text: "Help generously without expectation of return",
        points: 10,
        type: "good",
        feedback: "Generous and kind! You're making a real difference.",
      },
      {
        text: "Help reluctantly or minimally",
        points: 5,
        type: "balanced",
        feedback:
          "You helped, which is good. Helping graciously is even better.",
      },
      {
        text: "Refuse to help",
        points: -5,
        type: "bad",
        feedback: "We all have the power to help. Use yours for good.",
      },
    ],
  },
  {
    id: 96,
    question:
      "You're offered a partnership that compromises your values. What do you do?",
    options: [
      {
        text: "Decline respectfully and find better partners",
        points: 10,
        type: "good",
        feedback: "Principled partner! Success with shared values is better.",
      },
      {
        text: "Consider it seriously",
        points: 5,
        type: "balanced",
        feedback: "Your consideration is honest. Declining keeps you aligned.",
      },
      {
        text: "Accept it",
        points: -5,
        type: "bad",
        feedback: "Partnerships built on misaligned values crumble.",
      },
    ],
  },
  {
    id: 97,
    question:
      "You notice a friend is developing a harmful habit. What do you do?",
    options: [
      {
        text: "Talk to them with care and concern",
        points: 10,
        type: "good",
        feedback:
          "Caring friend! True friendship means difficult conversations.",
      },
      {
        text: "Feel concerned but don't want to interfere",
        points: 5,
        type: "balanced",
        feedback: "Your concern is good. Speaking up matters more.",
      },
      {
        text: "Say nothing and watch it develop",
        points: -5,
        type: "bad",
        feedback: "Silence enables harm. Speaking up protects your friend.",
      },
    ],
  },
  {
    id: 98,
    question: "You have power to harm someone who's hurt you. What do you do?",
    options: [
      {
        text: "Choose not to harm them and move forward",
        points: 10,
        type: "good",
        feedback:
          "Powerful and wise! Taking the high road shows true strength.",
      },
      {
        text: "Feel tempted but resist",
        points: 5,
        type: "balanced",
        feedback:
          "Resisting temptation shows strength. You did the right thing.",
      },
      {
        text: "Harm them",
        points: -5,
        type: "bad",
        feedback: "Revenge creates cycles of harm. Break the cycle.",
      },
    ],
  },
  {
    id: 99,
    question:
      "You're told to keep quiet about something important for your safety. What do you do?",
    options: [
      {
        text: "Reach out to someone you trust or authorities",
        points: 10,
        type: "good",
        feedback: "Brave and wise! Your safety and truth matter.",
      },
      {
        text: "Feel conflicted about speaking up",
        points: 5,
        type: "balanced",
        feedback: "Your conflict is understandable. Your safety comes first.",
      },
      {
        text: "Stay silent out of fear",
        points: -5,
        type: "bad",
        feedback: "Your voice matters for your safety. Reach out for help.",
      },
    ],
  },
  {
    id: 100,
    question:
      "You realize your life philosophy has been wrong. What do you do?",
    options: [
      {
        text: "Reflect deeply and change your approach",
        points: 10,
        type: "good",
        feedback: "Wise and humble! Willingness to evolve is true growth.",
      },
      {
        text: "Recognize it but gradually change",
        points: 5,
        type: "balanced",
        feedback: "You're changing, which is good. Being intentional helps.",
      },
      {
        text: "Defend your old philosophy",
        points: -5,
        type: "bad",
        feedback: "Life is about learning and growing. Embrace change.",
      },
    ],
  },
  {
    id: 101,
    question:
      "You're considering which college to attend. One offers more prestige but higher debt, the other is affordable with good academics. What do you choose?",
    options: [
      {
        text: "Choose based on long-term financial security and fit",
        points: 10,
        type: "good",
        feedback:
          "Smart decision! Financial health is as important as prestige.",
      },
      {
        text: "Consider both factors carefully before deciding",
        points: 5,
        type: "balanced",
        feedback: "Weighing options thoughtfully is a good approach.",
      },
      {
        text: "Go for prestige regardless of cost",
        points: -5,
        type: "bad",
        feedback: "Debt burden can affect your future opportunities.",
      },
    ],
  },
  {
    id: 102,
    question:
      "During an online exam, you realize the proctor isn't paying attention. Do you cheat?",
    options: [
      {
        text: "Complete the exam honestly",
        points: 10,
        type: "good",
        feedback:
          "Excellent! Your integrity matters even when no one is watching.",
      },
      {
        text: "Feel tempted but resist",
        points: 5,
        type: "balanced",
        feedback: "Resistance under pressure shows strong character.",
      },
      {
        text: "Cheat since you won't get caught",
        points: -5,
        type: "bad",
        feedback: "Integrity is about who you are, not who's watching.",
      },
    ],
  },
  {
    id: 103,
    question:
      "You're offered an internship that pays well but involves unethical practices. What do you do?",
    options: [
      {
        text: "Decline and look for ethical opportunities",
        points: 10,
        type: "good",
        feedback: "Excellent! Building your career on ethics is invaluable.",
      },
      {
        text: "Take it but plan to leave if uncomfortable",
        points: 5,
        type: "balanced",
        feedback: "Having an exit plan shows you won't compromise long-term.",
      },
      {
        text: "Accept and follow their practices",
        points: -5,
        type: "bad",
        feedback: "Your ethical foundation matters for your future reputation.",
      },
    ],
  },
  {
    id: 104,
    question:
      "A lab partner doesn't show up for your final project presentation. What do you do?",
    options: [
      {
        text: "Present alone and explain the situation honestly to the teacher",
        points: 10,
        type: "good",
        feedback: "Professional and honest! Teachers appreciate transparency.",
      },
      {
        text: "Try to contact them before presenting",
        points: 5,
        type: "balanced",
        feedback:
          "Good effort! But present what you have if they're unreachable.",
      },
      {
        text: "Present their incomplete work and take credit",
        points: -5,
        type: "bad",
        feedback: "Dishonesty will catch up with you eventually.",
      },
    ],
  },
  {
    id: 105,
    question:
      "You discover your research data has a significant error that would change your conclusions. What do you do?",
    options: [
      {
        text: "Report the error and redo the analysis",
        points: 10,
        type: "good",
        feedback: "Integrity in research! This builds scientific credibility.",
      },
      {
        text: "Correct it quietly and mention it in a footnote",
        points: 5,
        type: "balanced",
        feedback: "Transparency is important. Make corrections clear.",
      },
      {
        text: "Ignore it to keep your conclusion intact",
        points: -5,
        type: "bad",
        feedback: "Scientific integrity is the foundation of knowledge.",
      },
    ],
  },
  {
    id: 106,
    question:
      "You're offered a scholarship but it requires you to change your major. What do you decide?",
    options: [
      {
        text: "Choose based on your passion and career goals",
        points: 10,
        type: "good",
        feedback:
          "Wise! Pursuing your passion leads to better career satisfaction.",
      },
      {
        text: "Look for alternative funding before deciding",
        points: 5,
        type: "balanced",
        feedback: "Exploring all options is smart financial planning.",
      },
      {
        text: "Take it and ignore your true interests",
        points: -5,
        type: "bad",
        feedback: "Financial help shouldn't cost you your purpose.",
      },
    ],
  },
  {
    id: 107,
    question:
      "A classmate plagiarizes your work for their assignment. You notice before submission. What do you do?",
    options: [
      {
        text: "Tell them to create their own work or report it",
        points: 10,
        type: "good",
        feedback: "Standing up against plagiarism protects academic integrity.",
      },
      {
        text: "Give them a warning privately first",
        points: 5,
        type: "balanced",
        feedback: "Giving a chance to fix it shows compassion.",
      },
      {
        text: "Say nothing to avoid conflict",
        points: -5,
        type: "bad",
        feedback: "Silence enables unethical behavior.",
      },
    ],
  },
  {
    id: 108,
    question:
      "Your friend wants to copy your code for a programming assignment. How do you respond?",
    options: [
      {
        text: "Explain the concepts but have them write their own code",
        points: 10,
        type: "good",
        feedback: "True friendship involves helping them learn properly.",
      },
      {
        text: "Let them copy but warn them about plagiarism detection",
        points: 5,
        type: "balanced",
        feedback:
          "You're worried about them, but they need to do their own work.",
      },
      {
        text: "Let them copy freely",
        points: -5,
        type: "bad",
        feedback: "You're both violating academic integrity.",
      },
    ],
  },
  {
    id: 109,
    question:
      "You notice a professor showing favoritism toward certain students. What do you do?",
    options: [
      {
        text: "Document examples and report to department head",
        points: 10,
        type: "good",
        feedback:
          "Advocacy for fairness benefits the entire academic community.",
      },
      {
        text: "Discuss it with classmates to confirm the pattern",
        points: 5,
        type: "balanced",
        feedback: "Gathering evidence is good, but also report it properly.",
      },
      {
        text: "Stay silent to avoid trouble",
        points: -5,
        type: "bad",
        feedback: "Speaking up protects everyone's educational rights.",
      },
    ],
  },
  {
    id: 110,
    question:
      "You're asked to help a struggling student, but it might lower your own grade if you take time away from studying. What do you do?",
    options: [
      {
        text: "Help them with what you know, then study efficiently",
        points: 10,
        type: "good",
        feedback: "Compassion and responsibility can coexist beautifully.",
      },
      {
        text: "Help but set a time limit",
        points: 5,
        type: "balanced",
        feedback: "Good balance! Helping others while protecting your goals.",
      },
      {
        text: "Focus only on your own grade",
        points: -5,
        type: "bad",
        feedback: "Community learning benefits everyone.",
      },
    ],
  },
  {
    id: 111,
    question:
      "Your family expects you to pursue medicine, but you're passionate about engineering. What do you choose?",
    options: [
      {
        text: "Follow your passion and discuss your reasoning with family",
        points: 10,
        type: "good",
        feedback:
          "Your career should reflect your dreams, not just expectations.",
      },
      {
        text: "Study both to see which suits you better",
        points: 5,
        type: "balanced",
        feedback: "Taking time to explore is reasonable.",
      },
      {
        text: "Study medicine to please your family",
        points: -5,
        type: "bad",
        feedback:
          "Career dissatisfaction affects everyone, including your family.",
      },
    ],
  },
  {
    id: 112,
    question:
      "You get a job offer with a company known for poor work-life balance. The pay is excellent. What do you decide?",
    options: [
      {
        text: "Negotiate work conditions or look for healthier options",
        points: 10,
        type: "good",
        feedback: "Your mental health is worth more than money.",
      },
      {
        text: "Take it temporarily while searching elsewhere",
        points: 5,
        type: "balanced",
        feedback: "Short-term strategy while protecting yourself long-term.",
      },
      {
        text: "Accept and work excessively for the money",
        points: -5,
        type: "bad",
        feedback: "Burnout will hurt both your health and productivity.",
      },
    ],
  },
  {
    id: 113,
    question:
      "A manager asks you to misrepresent project results to look better. What do you do?",
    options: [
      {
        text: "Refuse and suggest presenting accurate results",
        points: 10,
        type: "good",
        feedback:
          "Integrity in business builds long-term trust and reputation.",
      },
      {
        text: "Feel uncomfortable but comply reluctantly",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. You should have refused.",
      },
      {
        text: "Agree to misrepresent the results",
        points: -5,
        type: "bad",
        feedback: "Professional dishonesty has serious consequences.",
      },
    ],
  },
  {
    id: 114,
    question:
      "You discover your company is violating environmental regulations. What do you do?",
    options: [
      {
        text: "Report it to appropriate authorities",
        points: 10,
        type: "good",
        feedback:
          "Whistleblowing protects society and long-term business interests.",
      },
      {
        text: "Internally report and give them time to fix it",
        points: 5,
        type: "balanced",
        feedback: "Internal reporting first is often reasonable.",
      },
      {
        text: "Stay silent to keep your job",
        points: -5,
        type: "bad",
        feedback: "Environmental harm affects everyone's future.",
      },
    ],
  },
  {
    id: 115,
    question:
      "Your friend is applying for a scholarship and asks you to lie about their background. What do you say?",
    options: [
      {
        text: "Refuse and suggest they apply honestly",
        points: 10,
        type: "good",
        feedback:
          "True friendship means supporting honest effort, not deception.",
      },
      {
        text: "Feel hesitant but consider their desperation",
        points: 5,
        type: "balanced",
        feedback: "Empathy is good, but lying isn't the solution.",
      },
      {
        text: "Agree to help them lie",
        points: -5,
        type: "bad",
        feedback: "You'd both face serious consequences for fraud.",
      },
    ],
  },
  {
    id: 116,
    question:
      "You're struggling with anxiety and your grades are suffering. What do you do?",
    options: [
      {
        text: "Seek support from counseling and professors",
        points: 10,
        type: "good",
        feedback:
          "Mental health is academic success. Seeking help is strength.",
      },
      {
        text: "Try to manage it alone while studying harder",
        points: 5,
        type: "balanced",
        feedback: "Effort is good, but professional support helps more.",
      },
      {
        text: "Ignore it and push through",
        points: -5,
        type: "bad",
        feedback: "Mental health issues worsen without treatment.",
      },
    ],
  },
  {
    id: 117,
    question:
      "You realize you chose the wrong career path halfway through your degree. What do you do?",
    options: [
      {
        text: "Explore options and change if it's right for you",
        points: 10,
        type: "good",
        feedback: "Course correction now beats years of misery later.",
      },
      {
        text: "Finish your current degree then explore",
        points: 5,
        type: "balanced",
        feedback:
          "Having a degree gives you options, but don't delay too long.",
      },
      {
        text: "Continue despite knowing it's wrong",
        points: -5,
        type: "bad",
        feedback: "Your career satisfaction matters for your wellbeing.",
      },
    ],
  },
  {
    id: 118,
    question:
      "You're offered unpaid internship experience or paid retail work. Time is limited. Which do you choose?",
    options: [
      {
        text: "Consider both options based on your goals and financial needs",
        points: 10,
        type: "good",
        feedback:
          "Practical decision-making considers both career and reality.",
      },
      {
        text: "Choose the internship for career growth despite no pay",
        points: 5,
        type: "balanced",
        feedback: "Good for career, but ensure you can afford it.",
      },
      {
        text: "Take retail without thinking about career impact",
        points: -5,
        type: "bad",
        feedback: "Consider how your choices align with your goals.",
      },
    ],
  },
  {
    id: 119,
    question: "A teacher marks your correct answer as wrong. What do you do?",
    options: [
      {
        text: "Respectfully show your work and ask for reconsideration",
        points: 10,
        type: "good",
        feedback: "Assertively advocating for yourself is professional.",
      },
      {
        text: "Ask a peer if they think your answer is correct",
        points: 5,
        type: "balanced",
        feedback: "Gathering support helps, but address it directly.",
      },
      {
        text: "Accept it and move on without questioning",
        points: -5,
        type: "bad",
        feedback:
          "Speaking up for accuracy teaches teachers and helps everyone.",
      },
    ],
  },
  {
    id: 120,
    question:
      "Your research project will definitely succeed if you manipulate one small data point. What do you do?",
    options: [
      {
        text: "Report accurate results even if they're less impressive",
        points: 10,
        type: "good",
        feedback: "Scientific truth is more important than success appearance.",
      },
      {
        text: "Consider the impact before deciding",
        points: 5,
        type: "balanced",
        feedback: "Considering consequences is good, but don't cross the line.",
      },
      {
        text: "Manipulate the data for success",
        points: -5,
        type: "bad",
        feedback: "Data fabrication ends careers and damages trust in science.",
      },
    ],
  },
  {
    id: 121,
    question:
      "You see a coworker struggling to meet a deadline. Your deadline is flexible. Do you help?",
    options: [
      {
        text: "Offer to help and adjust your schedule",
        points: 10,
        type: "good",
        feedback: "Teamwork and compassion create productive workplaces.",
      },
      {
        text: "Help if it doesn't significantly impact you",
        points: 5,
        type: "balanced",
        feedback: "Being helpful within your limits is good.",
      },
      {
        text: "Ignore them to stay focused on your work",
        points: -5,
        type: "bad",
        feedback: "Workplace collaboration benefits everyone.",
      },
    ],
  },
  {
    id: 122,
    question:
      "Your study group is cheating collectively on a group assignment. What do you do?",
    options: [
      {
        text: "Leave the group and report or do honest work alone",
        points: 10,
        type: "good",
        feedback: "Courage to stand alone against group pressure is admirable.",
      },
      {
        text: "Don't participate but don't report them",
        points: 5,
        type: "balanced",
        feedback: "Not participating is good, but silence enables cheating.",
      },
      {
        text: "Participate to stay in the group",
        points: -5,
        type: "bad",
        feedback: "Your integrity matters more than group membership.",
      },
    ],
  },
  {
    id: 123,
    question:
      "You're interviewing for your dream job. An unfair question is asked. What do you do?",
    options: [
      {
        text: "Answer honestly but redirect to your qualifications",
        points: 10,
        type: "good",
        feedback: "Professional assertiveness shows maturity.",
      },
      {
        text: "Answer the question to be safe",
        points: 5,
        type: "balanced",
        feedback: "Playing it safe, but assertiveness is often rewarded.",
      },
      {
        text: "Get defensive or ignore the question",
        points: -5,
        type: "bad",
        feedback: "Emotional reactions hurt your chances.",
      },
    ],
  },
  {
    id: 124,
    question:
      "A professor gives you an extension out of favoritism, not merit. What do you do?",
    options: [
      {
        text: "Ask if you can also request an extension fairly",
        points: 10,
        type: "good",
        feedback: "Questioning unfairness benefits the whole class.",
      },
      {
        text: "Accept it quietly without asking questions",
        points: 5,
        type: "balanced",
        feedback:
          "Taking it doesn't hurt, but advocating for fairness is better.",
      },
      {
        text: "Complain publicly about favoritism",
        points: -5,
        type: "bad",
        feedback: "Address it privately and constructively.",
      },
    ],
  },
  {
    id: 125,
    question:
      "You're developing a product that has a safety flaw. Fixing it delays the launch. What do you do?",
    options: [
      {
        text: "Delay launch to fix the safety issue",
        points: 10,
        type: "good",
        feedback: "Public safety trumps business timelines.",
      },
      {
        text: "Discuss the risk with management before deciding",
        points: 5,
        type: "balanced",
        feedback: "Transparency with decision-makers is important.",
      },
      {
        text: "Launch without mentioning the flaw",
        points: -5,
        type: "bad",
        feedback: "Safety issues lead to legal liability and harm.",
      },
    ],
  },
  {
    id: 126,
    question:
      "Your roommate is failing and asks you to take their online test for them. What do you say?",
    options: [
      {
        text: "Refuse and suggest tutoring resources",
        points: 10,
        type: "good",
        feedback: "Real friendship helps them succeed honestly.",
      },
      {
        text: "Consider it because you're close",
        points: 5,
        type: "balanced",
        feedback: "Relationship doesn't justify academic fraud.",
      },
      {
        text: "Agree to take the test",
        points: -5,
        type: "bad",
        feedback: "Both of you would face serious academic consequences.",
      },
    ],
  },
  {
    id: 127,
    question:
      "You find confidential company information that's interesting. What do you do?",
    options: [
      {
        text: "Respect confidentiality and don't share it",
        points: 10,
        type: "good",
        feedback: "Trust is the foundation of professional relationships.",
      },
      {
        text: "Share it only with close friends",
        points: 5,
        type: "balanced",
        feedback: "Even limited sharing violates confidentiality.",
      },
      {
        text: "Share it widely on social media",
        points: -5,
        type: "bad",
        feedback: "Privacy violations have legal consequences.",
      },
    ],
  },
  {
    id: 128,
    question:
      "Your financial aid was calculated incorrectly in your favor. What do you do?",
    options: [
      {
        text: "Report the error to financial aid office",
        points: 10,
        type: "good",
        feedback: "Integrity in financial matters prevents serious problems.",
      },
      {
        text: "Use it but feel guilty",
        points: 5,
        type: "balanced",
        feedback: "Your guilt indicates you know what's right.",
      },
      {
        text: "Use it without reporting",
        points: -5,
        type: "bad",
        feedback:
          "Financial fraud can result in debt repayment and legal action.",
      },
    ],
  },
  {
    id: 129,
    question: "A classmate tries to pay you for your homework. What do you do?",
    options: [
      {
        text: "Refuse firmly and suggest they ask the teacher for help",
        points: 10,
        type: "good",
        feedback: "Standing firm against temptation shows character.",
      },
      {
        text: "Refuse but feel tempted",
        points: 5,
        type: "balanced",
        feedback: "Recognizing temptation and resisting it shows strength.",
      },
      {
        text: "Accept the payment",
        points: -5,
        type: "bad",
        feedback: "This is homework fraud affecting both of you.",
      },
    ],
  },
  {
    id: 130,
    question:
      "Your supervisor takes credit for your work in a meeting. How do you respond?",
    options: [
      {
        text: "Address it professionally with your supervisor later",
        points: 10,
        type: "good",
        feedback:
          "Assertive communication protects your professional reputation.",
      },
      {
        text: "Mention your contribution during the meeting",
        points: 5,
        type: "balanced",
        feedback:
          "Speaking up is good, but doing it privately first is more professional.",
      },
      {
        text: "Stay silent and let them take credit",
        points: -5,
        type: "bad",
        feedback: "Your contributions deserve recognition.",
      },
    ],
  },
  {
    id: 131,
    question:
      "You're assigned to a project with someone who has a learning disability. What's your approach?",
    options: [
      {
        text: "Adapt methods to help them succeed equally",
        points: 10,
        type: "good",
        feedback:
          "Inclusive collaboration produces better results for everyone.",
      },
      {
        text: "Do most of the work to move faster",
        points: 5,
        type: "balanced",
        feedback: "Efficiency shouldn't come at cost of their participation.",
      },
      {
        text: "Exclude them to avoid slowing down",
        points: -5,
        type: "bad",
        feedback:
          "Discrimination and exclusion are both unethical and illegal.",
      },
    ],
  },
  {
    id: 132,
    question:
      "You notice a friend is struggling with substance abuse affecting their grades. What do you do?",
    options: [
      {
        text: "Express concern and encourage them to seek help",
        points: 10,
        type: "good",
        feedback: "True friendship means supporting their health.",
      },
      {
        text: "Feel concerned but don't interfere",
        points: 5,
        type: "balanced",
        feedback: "Concern is good, but expressing it shows true friendship.",
      },
      {
        text: "Distance yourself from them",
        points: -5,
        type: "bad",
        feedback: "Abandoning friends when they struggle isn't compassion.",
      },
    ],
  },
  {
    id: 133,
    question:
      "Your research relies on a previous study that you suspect is fraudulent. What do you do?",
    options: [
      {
        text: "Investigate and report your concerns to authorities",
        points: 10,
        type: "good",
        feedback: "Protecting research integrity benefits the entire field.",
      },
      {
        text: "Avoid using it and choose different research",
        points: 5,
        type: "balanced",
        feedback: "Good choice for your work, but reporting helps everyone.",
      },
      {
        text: "Use it anyway to support your hypothesis",
        points: -5,
        type: "bad",
        feedback: "Using fraudulent data contaminates your research.",
      },
    ],
  },
  {
    id: 134,
    question:
      "You're offered a highly competitive opportunity but it requires compromising your values. What do you do?",
    options: [
      {
        text: "Decline and seek opportunities aligned with your values",
        points: 10,
        type: "good",
        feedback: "Values-aligned choices lead to lasting fulfillment.",
      },
      {
        text: "Take it temporarily while looking for alternatives",
        points: 5,
        type: "balanced",
        feedback: "Short-term strategy while protecting your integrity.",
      },
      {
        text: "Accept and compromise your values",
        points: -5,
        type: "bad",
        feedback: "Compromising values for opportunities leads to regret.",
      },
    ],
  },
  {
    id: 135,
    question:
      "A peer's work violates environmental or social responsibility standards. What do you do?",
    options: [
      {
        text: "Report to appropriate sustainability or ethics committee",
        points: 10,
        type: "good",
        feedback:
          "Accountability for environmental and social harm is crucial.",
      },
      {
        text: "Discuss your concerns with them first",
        points: 5,
        type: "balanced",
        feedback: "Starting with conversation is good, but report if needed.",
      },
      {
        text: "Ignore it to avoid conflict",
        points: -5,
        type: "bad",
        feedback: "Silence enables harmful practices.",
      },
    ],
  },
  {
    id: 136,
    question:
      "You're pressured to join unethical practices that everyone does. What do you decide?",
    options: [
      {
        text: "Refuse to participate regardless of peer pressure",
        points: 10,
        type: "good",
        feedback: "Moral courage often comes from standing alone.",
      },
      {
        text: "Feel uncomfortable but participate",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. You should listen to it.",
      },
      {
        text: "Participate enthusiastically",
        points: -5,
        type: "bad",
        feedback: "Popularity isn't worth compromising ethics.",
      },
    ],
  },
  {
    id: 137,
    question:
      "You discover your colleague is being paid significantly less for the same work. What do you do?",
    options: [
      {
        text: "Encourage them to negotiate and offer support",
        points: 10,
        type: "good",
        feedback: "Advocating for fairness helps build equitable workplaces.",
      },
      {
        text: "Feel bad but don't interfere",
        points: 5,
        type: "balanced",
        feedback: "Empathy is good, but action creates change.",
      },
      {
        text: "Ignore it to avoid complications",
        points: -5,
        type: "bad",
        feedback: "Silence perpetuates wage discrimination.",
      },
    ],
  },
  {
    id: 138,
    question:
      "A minor asks you for academic help on something they'll be tested on. Helping feels like cheating. What do you do?",
    options: [
      {
        text: "Teach concepts but have them solve problems independently",
        points: 10,
        type: "good",
        feedback:
          "Teaching builds understanding while maintaining academic integrity.",
      },
      {
        text: "Help them partially",
        points: 5,
        type: "balanced",
        feedback: "Some help with their effort is balanced.",
      },
      {
        text: "Give them answers directly",
        points: -5,
        type: "bad",
        feedback: "Direct answers prevent real learning.",
      },
    ],
  },
  {
    id: 139,
    question:
      "Your family faces financial hardship, but you're pursuing an expensive education. What do you do?",
    options: [
      {
        text: "Explore scholarships and work-study programs",
        points: 10,
        type: "good",
        feedback:
          "Finding solutions respects both education and family wellbeing.",
      },
      {
        text: "Sacrifice education to help family",
        points: 5,
        type: "balanced",
        feedback: "Generous, but education can improve your future earning.",
      },
      {
        text: "Pursue education without considering family",
        points: -5,
        type: "bad",
        feedback: "Family wellbeing matters, but there are balanced solutions.",
      },
    ],
  },
  {
    id: 140,
    question:
      "You see a professor's personal information online and it's sensitive. Do you use it?",
    options: [
      {
        text: "Respect their privacy and don't use it",
        points: 10,
        type: "good",
        feedback:
          "Privacy respect applies to everyone, regardless of position.",
      },
      {
        text: "Keep it secret but feel conflicted",
        points: 5,
        type: "balanced",
        feedback: "Your conflict shows you understand privacy matters.",
      },
      {
        text: "Use it against them somehow",
        points: -5,
        type: "bad",
        feedback: "Using private information for leverage is harassment.",
      },
    ],
  },
  {
    id: 141,
    question:
      "You're struggling with depression and your grades are suffering. What do you do?",
    options: [
      {
        text: "Seek counseling and inform professors about accommodations",
        points: 10,
        type: "good",
        feedback: "Getting help shows strength, not weakness.",
      },
      {
        text: "Try self-help strategies first",
        points: 5,
        type: "balanced",
        feedback: "Self-help is good, but professional help is more effective.",
      },
      {
        text: "Suffer alone and hope grades improve",
        points: -5,
        type: "bad",
        feedback: "Depression requires professional support.",
      },
    ],
  },
  {
    id: 142,
    question:
      "A friend invites you to participate in something risky for excitement. What do you do?",
    options: [
      {
        text: "Politely decline and suggest safer alternatives",
        points: 10,
        type: "good",
        feedback: "True friendship respects safety boundaries.",
      },
      {
        text: "Feel tempted but resist",
        points: 5,
        type: "balanced",
        feedback: "Resisting temptation for safety shows maturity.",
      },
      {
        text: "Participate to stay connected",
        points: -5,
        type: "bad",
        feedback: "Risk isn't worth potential harm.",
      },
    ],
  },
  {
    id: 143,
    question:
      "You realize your company is violating labor laws. What do you do?",
    options: [
      {
        text: "Report to labor department or unions",
        points: 10,
        type: "good",
        feedback: "Protecting worker rights protects everyone.",
      },
      {
        text: "Discuss with coworkers and decide together",
        points: 5,
        type: "balanced",
        feedback:
          "Collective action is good, but formal reporting is more effective.",
      },
      {
        text: "Stay silent to keep your job",
        points: -5,
        type: "bad",
        feedback: "Workers have rights that deserve protection.",
      },
    ],
  },
  {
    id: 144,
    question:
      "Your teaching assistant grades unfairly but you need a good grade. What do you do?",
    options: [
      {
        text: "Appeal respectfully with specific evidence",
        points: 10,
        type: "good",
        feedback: "Professional appeals are designed for this situation.",
      },
      {
        text: "Ask for reconsideration without evidence",
        points: 5,
        type: "balanced",
        feedback: "At least you're advocating for yourself.",
      },
      {
        text: "Accept unfair grading silently",
        points: -5,
        type: "bad",
        feedback: "Appealing unfair grades is appropriate.",
      },
    ],
  },
  {
    id: 145,
    question:
      "You see a post on social media that's false and harmful to someone. What do you do?",
    options: [
      {
        text: "Don't share it and report it if possible",
        points: 10,
        type: "good",
        feedback: "Stopping misinformation spread prevents harm.",
      },
      {
        text: "Share it but add a note that it's unverified",
        points: 5,
        type: "balanced",
        feedback: "Sharing still spreads harm even with disclaimers.",
      },
      {
        text: "Share it widely",
        points: -5,
        type: "bad",
        feedback: "Spreading misinformation harms people.",
      },
    ],
  },
  {
    id: 146,
    question:
      "Your friend is cheating in exams and wants you to help them. What do you say?",
    options: [
      {
        text: "Refuse and suggest tutoring help",
        points: 10,
        type: "good",
        feedback: "Real friends support honest success.",
      },
      {
        text: "Feel reluctant but might consider it",
        points: 5,
        type: "balanced",
        feedback: "Reluctance is good. Trust it and refuse.",
      },
      {
        text: "Help them cheat",
        points: -5,
        type: "bad",
        feedback: "Helping cheating harms both of you.",
      },
    ],
  },
  {
    id: 147,
    question:
      "You discover a security vulnerability in your school's system. What do you do?",
    options: [
      {
        text: "Report it to IT security responsibly",
        points: 10,
        type: "good",
        feedback: "Responsible disclosure protects everyone's data.",
      },
      {
        text: "Tell friends about it first",
        points: 5,
        type: "balanced",
        feedback: "Reporting directly to IT is more responsible.",
      },
      {
        text: "Exploit it for access",
        points: -5,
        type: "bad",
        feedback: "Exploiting vulnerabilities is illegal.",
      },
    ],
  },
  {
    id: 148,
    question:
      "Your research gets rejected. The feedback seems biased. What do you do?",
    options: [
      {
        text: "Improve the work and submit to another venue",
        points: 10,
        type: "good",
        feedback: "Resilience and persistence lead to eventual success.",
      },
      {
        text: "Feel angry but accept the rejection",
        points: 5,
        type: "balanced",
        feedback: "Accepting feedback, even unfair, helps you move forward.",
      },
      {
        text: "Attack the reviewers publicly",
        points: -5,
        type: "bad",
        feedback: "Professional reputation matters in academia.",
      },
    ],
  },
  {
    id: 149,
    question:
      "A teacher gives unfair homework that seems designed to punish. What do you do?",
    options: [
      {
        text: "Discuss your concerns respectfully with the teacher",
        points: 10,
        type: "good",
        feedback: "Professional dialogue can resolve misunderstandings.",
      },
      {
        text: "Complain to friends but do the work",
        points: 5,
        type: "balanced",
        feedback: "Doing the work is responsible, but speaking up is better.",
      },
      {
        text: "Skip the homework in protest",
        points: -5,
        type: "bad",
        feedback: "Direct communication is more effective than protest.",
      },
    ],
  },
  {
    id: 150,
    question:
      "You witness academic dishonesty but don't have solid proof. What do you do?",
    options: [
      {
        text: "Report to academic integrity office with what you observed",
        points: 10,
        type: "good",
        feedback: "Reporting concerns allows professionals to investigate.",
      },
      {
        text: "Keep quiet until you have proof",
        points: 5,
        type: "balanced",
        feedback: "Waiting for proof, but reporting concerns is also valid.",
      },
      {
        text: "Ignore it and say nothing",
        points: -5,
        type: "bad",
        feedback: "Reporting suspected dishonesty supports academic integrity.",
      },
    ],
  },
  {
    id: 151,
    question:
      "You're offered free access to premium educational software illegally. What do you do?",
    options: [
      {
        text: "Use legitimate free or educational licenses",
        points: 10,
        type: "good",
        feedback: "Legal alternatives often exist for students.",
      },
      {
        text: "Feel tempted but find a legal alternative",
        points: 5,
        type: "balanced",
        feedback: "Resisting temptation to find legal options is good.",
      },
      {
        text: "Use it illegally",
        points: -5,
        type: "bad",
        feedback: "Software piracy is illegal and unethical.",
      },
    ],
  },
  {
    id: 152,
    question:
      "Your group project member did zero work but expects credit. What do you do?",
    options: [
      {
        text: "Inform the teacher with documentation",
        points: 10,
        type: "good",
        feedback: "Teachers need to know about unequal contributions.",
      },
      {
        text: "Give them partial credit to avoid conflict",
        points: 5,
        type: "balanced",
        feedback: "Kindness is good, but fairness matters too.",
      },
      {
        text: "Give them equal credit",
        points: -5,
        type: "bad",
        feedback: "Rewarding non-participation encourages it.",
      },
    ],
  },
  {
    id: 153,
    question:
      "You accidentally access someone's private files. What do you do?",
    options: [
      {
        text: "Report the security issue and don't access further",
        points: 10,
        type: "good",
        feedback: "Privacy protection includes reporting vulnerabilities.",
      },
      {
        text: "Ignore it and pretend nothing happened",
        points: 5,
        type: "balanced",
        feedback: "At least you didn't access more, but reporting helps.",
      },
      {
        text: "Explore the files",
        points: -5,
        type: "bad",
        feedback: "Accessing private files violates privacy.",
      },
    ],
  },
  {
    id: 154,
    question:
      "Your school offers merit scholarships but overlooks deserving low-income students. What do you do?",
    options: [
      {
        text: "Advocate for inclusive scholarship criteria",
        points: 10,
        type: "good",
        feedback: "Advocating for equity benefits the entire community.",
      },
      {
        text: "Discuss it with friends but do nothing",
        points: 5,
        type: "balanced",
        feedback: "Discussion is good, but action creates change.",
      },
      {
        text: "Ignore the inequality",
        points: -5,
        type: "bad",
        feedback: "Speaking up against inequity is important.",
      },
    ],
  },
  {
    id: 155,
    question:
      "A significant other pressures you to help them cheat. What do you do?",
    options: [
      {
        text: "Refuse firmly and offer legitimate help",
        points: 10,
        type: "good",
        feedback: "Healthy relationships respect each other's values.",
      },
      {
        text: "Feel conflicted but ultimately refuse",
        points: 5,
        type: "balanced",
        feedback: "Conflicted but holding boundaries is healthy.",
      },
      {
        text: "Help them to maintain the relationship",
        points: -5,
        type: "bad",
        feedback: "Healthy relationships don't require compromise of ethics.",
      },
    ],
  },
  {
    id: 156,
    question:
      "You're hired for a job but later realize the role involves unethical work. What do you do?",
    options: [
      {
        text: "Resign and seek ethical employment",
        points: 10,
        type: "good",
        feedback: "Professional ethics matter more than job security.",
      },
      {
        text: "Stay temporarily while looking for another job",
        points: 5,
        type: "balanced",
        feedback: "Practical transition while protecting your integrity.",
      },
      {
        text: "Stay and do the unethical work",
        points: -5,
        type: "bad",
        feedback: "Career built on unethics leads to regret.",
      },
    ],
  },
  {
    id: 157,
    question:
      "A classmate tells you they're being abused at home. What do you do?",
    options: [
      {
        text: "Listen supportively and encourage them to seek help",
        points: 10,
        type: "good",
        feedback: "Your support and encouragement could save their life.",
      },
      {
        text: "Feel sympathetic but don't know what to do",
        points: 5,
        type: "balanced",
        feedback: "Sympathy is good. Research resources and connect them.",
      },
      {
        text: "Change the subject to avoid discomfort",
        points: -5,
        type: "bad",
        feedback: "Your response could prevent them from seeking help.",
      },
    ],
  },
  {
    id: 158,
    question:
      "You're struggling financially and find free textbook piracy sites. What do you do?",
    options: [
      {
        text: "Use library resources or ask your school for assistance",
        points: 10,
        type: "good",
        feedback:
          "Most schools have legitimate options for financial hardship.",
      },
      {
        text: "Feel guilty but use the pirated version",
        points: 5,
        type: "balanced",
        feedback: "Your guilt indicates you should explore legitimate options.",
      },
      {
        text: "Use pirated textbooks freely",
        points: -5,
        type: "bad",
        feedback: "Publishers need fair compensation too.",
      },
    ],
  },
  {
    id: 159,
    question:
      "Your professor seems lonely and asks you to join their social circle outside class. What do you do?",
    options: [
      {
        text: "Politely decline to maintain appropriate boundaries",
        points: 10,
        type: "good",
        feedback: "Professional boundaries protect both of you.",
      },
      {
        text: "Join but keep it professional",
        points: 5,
        type: "balanced",
        feedback: "Boundaries are more important. Polite decline is better.",
      },
      {
        text: "Become close friends with the professor",
        points: -5,
        type: "bad",
        feedback: "This creates conflicts of interest and complications.",
      },
    ],
  },
  {
    id: 160,
    question:
      "You discover your best friend plagiarized extensively. Will you report them?",
    options: [
      {
        text: "Urge them to come clean themselves",
        points: 10,
        type: "good",
        feedback: "Real friendship means supporting their integrity.",
      },
      {
        text: "Feel conflicted between friendship and honesty",
        points: 5,
        type: "balanced",
        feedback: "Conflict is natural. Supporting their honesty is best.",
      },
      {
        text: "Protect them by staying silent",
        points: -5,
        type: "bad",
        feedback: "Protecting dishonesty isn't true friendship.",
      },
    ],
  },
  {
    id: 161,
    question:
      "You notice a peer constantly using ChatGPT for all assignments. What do you do?",
    options: [
      {
        text: "Report it to the teacher with evidence",
        points: 10,
        type: "good",
        feedback:
          "Reporting cheating maintains academic integrity for everyone.",
      },
      {
        text: "Mention your concern to the peer",
        points: 5,
        type: "balanced",
        feedback:
          "Direct conversation is good, but reporting is more effective.",
      },
      {
        text: "Ignore it and do your own work",
        points: -5,
        type: "bad",
        feedback: "Reporting academic dishonesty is important.",
      },
    ],
  },
  {
    id: 162,
    question:
      "Your mentor offers you guidance but seems to have conflicts of interest. What do you do?",
    options: [
      {
        text: "Find another mentor or address the concern",
        points: 10,
        type: "good",
        feedback: "Conflict-free mentorship is important for your growth.",
      },
      {
        text: "Accept guidance while being cautious",
        points: 5,
        type: "balanced",
        feedback: "Caution is good, but finding clear guidance is better.",
      },
      {
        text: "Trust them completely despite conflicts",
        points: -5,
        type: "bad",
        feedback: "Conflicts of interest affect objectivity.",
      },
    ],
  },
  {
    id: 163,
    question:
      "You see a post about a protest and aren't sure if the cause is legitimate. What do you do?",
    options: [
      {
        text: "Research multiple sources before deciding",
        points: 10,
        type: "good",
        feedback: "Informed decisions matter more than reactive participation.",
      },
      {
        text: "Join if friends are going",
        points: 5,
        type: "balanced",
        feedback: "Your own research should guide your participation.",
      },
      {
        text: "Ignore it completely",
        points: -5,
        type: "bad",
        feedback: "Civic engagement is important when informed.",
      },
    ],
  },
  {
    id: 164,
    question:
      "Your group is making a presentation but some facts are oversimplified to be impressive. What do you do?",
    options: [
      {
        text: "Suggest adding nuance and accuracy to the presentation",
        points: 10,
        type: "good",
        feedback: "Accuracy strengthens presentations.",
      },
      {
        text: "Keep quiet to maintain group harmony",
        points: 5,
        type: "balanced",
        feedback: "Harmony is good, but accuracy matters more.",
      },
      {
        text: "Help oversimplify further",
        points: -5,
        type: "bad",
        feedback: "Misleading presentations erode credibility.",
      },
    ],
  },
  {
    id: 165,
    question:
      "You're asked to write a letter of recommendation for someone unqualified. What do you do?",
    options: [
      {
        text: "Decline or write an honest but limited letter",
        points: 10,
        type: "good",
        feedback: "Honest recommendations maintain their credibility.",
      },
      {
        text: "Feel uncomfortable but write a strong letter",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. Listen to it and decline.",
      },
      {
        text: "Write a false strong letter to help them",
        points: -5,
        type: "bad",
        feedback: "False recommendations harm recipients and institutions.",
      },
    ],
  },
  {
    id: 166,
    question:
      "You discover a classmate with a fake diploma or credential. What do you do?",
    options: [
      {
        text: "Report to academic integrity office",
        points: 10,
        type: "good",
        feedback: "Credential fraud affects everyone's credibility.",
      },
      {
        text: "Tell the person you know",
        points: 5,
        type: "balanced",
        feedback: "Direct conversation might lead to self-reporting.",
      },
      {
        text: "Stay quiet to avoid making enemies",
        points: -5,
        type: "bad",
        feedback: "Credential fraud undermines the entire system.",
      },
    ],
  },
  {
    id: 167,
    question:
      "Your career choice will likely earn you much less than others. How do you respond?",
    options: [
      {
        text: "Choose passion over money if you can manage financially",
        points: 10,
        type: "good",
        feedback: "Career satisfaction matters as much as income.",
      },
      {
        text: "Reconsider your choice for financial stability",
        points: 5,
        type: "balanced",
        feedback: "Financial considerations are valid.",
      },
      {
        text: "Abandon your passion for higher pay",
        points: -5,
        type: "bad",
        feedback: "Money isn't everything in career satisfaction.",
      },
    ],
  },
  {
    id: 168,
    question:
      "A teacher misunderstands your work as plagiarism but it's original. How do you respond?",
    options: [
      {
        text: "Calmly explain your process and original thinking",
        points: 10,
        type: "good",
        feedback: "Clear communication resolves misunderstandings.",
      },
      {
        text: "Feel angry but try to explain",
        points: 5,
        type: "balanced",
        feedback: "Staying calm while explaining is better.",
      },
      {
        text: "Accept the plagiarism accusation without defending",
        points: -5,
        type: "bad",
        feedback:
          "Defending yourself against false accusations is appropriate.",
      },
    ],
  },
  {
    id: 169,
    question:
      "You're offered a high-paying internship but the work seems meaningless. What do you choose?",
    options: [
      {
        text: "Look for meaningful work even if less paid",
        points: 10,
        type: "good",
        feedback: "Meaningful work builds career satisfaction.",
      },
      {
        text: "Take it for money while seeking alternatives",
        points: 5,
        type: "balanced",
        feedback: "Temporary acceptance while searching is reasonable.",
      },
      {
        text: "Take it and ignore the meaninglessness",
        points: -5,
        type: "bad",
        feedback: "Career meaninglessness leads to burnout.",
      },
    ],
  },
  {
    id: 170,
    question:
      "Your school's admissions seem biased toward wealthy students. What do you do?",
    options: [
      {
        text: "Advocate for more equitable admissions policies",
        points: 10,
        type: "good",
        feedback: "Advocating for fairness strengthens institutions.",
      },
      {
        text: "Discuss it but don't take action",
        points: 5,
        type: "balanced",
        feedback: "Discussion is good, but action creates change.",
      },
      {
        text: "Ignore the inequality",
        points: -5,
        type: "bad",
        feedback: "Speaking up against bias is important.",
      },
    ],
  },
  {
    id: 171,
    question:
      "You find a free way to take a course you can't afford. It's legally gray. What do you do?",
    options: [
      {
        text: "Ask your school or instructor about authorized access",
        points: 10,
        type: "good",
        feedback: "Legitimate solutions usually exist.",
      },
      {
        text: "Feel hesitant about using the gray method",
        points: 5,
        type: "balanced",
        feedback: "Your hesitation is valid. Seek legitimate alternatives.",
      },
      {
        text: "Use the gray method without concern",
        points: -5,
        type: "bad",
        feedback: "Legally gray often turns into legally wrong.",
      },
    ],
  },
  {
    id: 172,
    question:
      "A friend is considering dropping out. You think it's a mistake. What do you do?",
    options: [
      {
        text: "Listen and help them explore all options",
        points: 10,
        type: "good",
        feedback: "Supporting decision-making without judgment is valuable.",
      },
      {
        text: "Tell them it's a bad idea",
        points: 5,
        type: "balanced",
        feedback: "Listening first is more effective than judging.",
      },
      {
        text: "Ignore their concerns",
        points: -5,
        type: "bad",
        feedback: "Your support during hard decisions matters.",
      },
    ],
  },
  {
    id: 173,
    question:
      "You realize you don't understand course material but don't want to ask for help. What do you do?",
    options: [
      {
        text: "Ask the teacher for help immediately",
        points: 10,
        type: "good",
        feedback: "Asking for help is strength, not weakness.",
      },
      {
        text: "Try harder on your own first",
        points: 5,
        type: "balanced",
        feedback: "Personal effort is good, but get help sooner.",
      },
      {
        text: "Avoid the material and hope it's not tested",
        points: -5,
        type: "bad",
        feedback: "Avoidance makes understanding harder later.",
      },
    ],
  },
  {
    id: 174,
    question:
      "Your school is eliminating a program serving vulnerable students. What do you do?",
    options: [
      {
        text: "Advocate for the program's continuation",
        points: 10,
        type: "good",
        feedback: "Student advocacy can influence institutional decisions.",
      },
      {
        text: "Support the program but don't take action",
        points: 5,
        type: "balanced",
        feedback: "Support is good, but action is more impactful.",
      },
      {
        text: "Ignore the impact on vulnerable students",
        points: -5,
        type: "bad",
        feedback: "Speaking up for marginalized communities matters.",
      },
    ],
  },
  {
    id: 175,
    question:
      "A peer asks you to keep a secret that affects group dynamics. What do you do?",
    options: [
      {
        text: "Explain why the group should know and encourage honesty",
        points: 10,
        type: "good",
        feedback: "Group health depends on transparency.",
      },
      {
        text: "Keep the secret but feel conflicted",
        points: 5,
        type: "balanced",
        feedback: "Conflict is natural. Encourage them to share.",
      },
      {
        text: "Keep the secret indefinitely",
        points: -5,
        type: "bad",
        feedback: "Secrets that affect everyone deserve transparency.",
      },
    ],
  },
  {
    id: 176,
    question:
      "You're offered help from someone with a potential conflict of interest. What do you do?",
    options: [
      {
        text: "Decline politely or ensure transparency",
        points: 10,
        type: "good",
        feedback: "Avoiding conflicts of interest protects everyone.",
      },
      {
        text: "Accept but remain cautious",
        points: 5,
        type: "balanced",
        feedback: "Caution is good, but declining is cleaner.",
      },
      {
        text: "Accept without concern",
        points: -5,
        type: "bad",
        feedback: "Conflicts of interest compromise objectivity.",
      },
    ],
  },
  {
    id: 177,
    question:
      "You discover your strengths don't align with your chosen field. What do you do?",
    options: [
      {
        text: "Explore alternative paths aligned with your strengths",
        points: 10,
        type: "good",
        feedback: "Working with your strengths leads to success.",
      },
      {
        text: "Develop your weak areas",
        points: 5,
        type: "balanced",
        feedback: "Development is good, but alignment matters too.",
      },
      {
        text: "Force yourself into the misaligned field",
        points: -5,
        type: "bad",
        feedback: "Career success comes from alignment with strengths.",
      },
    ],
  },
  {
    id: 178,
    question:
      "A classmate is brilliant but their ideas are being stolen by others. What do you do?",
    options: [
      {
        text: "Encourage them to document and claim their ideas",
        points: 10,
        type: "good",
        feedback: "Supporting idea attribution protects intellectual property.",
      },
      {
        text: "Feel bad but don't interfere",
        points: 5,
        type: "balanced",
        feedback: "Empathy is good, but action helps them.",
      },
      {
        text: "Also use their ideas without credit",
        points: -5,
        type: "bad",
        feedback: "Idea theft compounds the problem.",
      },
    ],
  },
  {
    id: 179,
    question:
      "You realize you've been wrong about a social or political issue. What do you do?",
    options: [
      {
        text: "Acknowledge your error and learn from it",
        points: 10,
        type: "good",
        feedback: "Growth requires admitting mistakes.",
      },
      {
        text: "Quietly change your mind without discussing it",
        points: 5,
        type: "balanced",
        feedback: "Change is good, but acknowledging it helps others.",
      },
      {
        text: "Defend your old position stubbornly",
        points: -5,
        type: "bad",
        feedback: "Intellectual honesty includes changing wrong views.",
      },
    ],
  },
  {
    id: 180,
    question:
      "You notice a pattern of discrimination in your academic institution. What do you do?",
    options: [
      {
        text: "Document and report to appropriate offices",
        points: 10,
        type: "good",
        feedback: "Reporting patterns creates institutional accountability.",
      },
      {
        text: "Discuss it with affected people",
        points: 5,
        type: "balanced",
        feedback:
          "Discussion is good, but official reporting is more effective.",
      },
      {
        text: "Ignore the discrimination",
        points: -5,
        type: "bad",
        feedback: "Speaking up against discrimination is essential.",
      },
    ],
  },
  {
    id: 181,
    question:
      "A friend asks you to be a reference for a job, but you're not comfortable endorsing them. What do you do?",
    options: [
      {
        text: "Politely decline and suggest alternatives",
        points: 10,
        type: "good",
        feedback: "Honest references maintain credibility.",
      },
      {
        text: "Agree but give a lukewarm reference",
        points: 5,
        type: "balanced",
        feedback: "Declining is cleaner than a weak reference.",
      },
      {
        text: "Give a strong reference despite reservations",
        points: -5,
        type: "bad",
        feedback: "False references harm everyone involved.",
      },
    ],
  },
  {
    id: 182,
    question:
      "Your school receives a donation with questionable sources. What do you do?",
    options: [
      {
        text: "Question the donation's ethics publicly",
        points: 10,
        type: "good",
        feedback: "Ethical funding sources matter for institutional integrity.",
      },
      {
        text: "Feel uncomfortable but accept it",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. Raising concerns is better.",
      },
      {
        text: "Support the donation without questioning",
        points: -5,
        type: "bad",
        feedback: "Funding ethics affect institutional values.",
      },
    ],
  },
  {
    id: 183,
    question:
      "You see a peer struggling with an addiction that affects their academics. What do you do?",
    options: [
      {
        text: "Express concern and encourage professional help",
        points: 10,
        type: "good",
        feedback: "Your concern could motivate them to seek help.",
      },
      {
        text: "Feel worried but don't mention it",
        points: 5,
        type: "balanced",
        feedback: "Mentioning it shows you care.",
      },
      {
        text: "Judge them silently",
        points: -5,
        type: "bad",
        feedback: "Compassion and support work better than judgment.",
      },
    ],
  },
  {
    id: 184,
    question:
      "An opportunity comes with strings attached that compromise your values. What do you do?",
    options: [
      {
        text: "Decline and look for value-aligned opportunities",
        points: 10,
        type: "good",
        feedback: "Opportunities without value compromise are better.",
      },
      {
        text: "Consider the compromise",
        points: 5,
        type: "balanced",
        feedback: "Careful consideration is good, but values matter most.",
      },
      {
        text: "Accept despite the compromises",
        points: -5,
        type: "bad",
        feedback: "Compromised values lead to long-term regret.",
      },
    ],
  },
  {
    id: 185,
    question:
      "You realize your parents' expectations don't match your abilities. How do you respond?",
    options: [
      {
        text: "Have honest conversations about realistic expectations",
        points: 10,
        type: "good",
        feedback: "Communication reduces conflict and disappointment.",
      },
      {
        text: "Try to meet expectations despite struggles",
        points: 5,
        type: "balanced",
        feedback: "Effort is good, but honest dialogue is better.",
      },
      {
        text: "Rebel without communicating",
        points: -5,
        type: "bad",
        feedback: "Communication beats silent rebellion.",
      },
    ],
  },
  {
    id: 186,
    question:
      "A professor's research methodology seems questionable but not explicitly wrong. What do you do?",
    options: [
      {
        text: "Ask respectfully about the methodology",
        points: 10,
        type: "good",
        feedback: "Questioning methodology strengthens research.",
      },
      {
        text: "Ignore the concern",
        points: 5,
        type: "balanced",
        feedback: "Raising concerns is more valuable.",
      },
      {
        text: "Publicly criticize the research",
        points: -5,
        type: "bad",
        feedback: "Private inquiry is more professional.",
      },
    ],
  },
  {
    id: 187,
    question:
      "You're pressured to take part in a group project with unethical goals. What do you do?",
    options: [
      {
        text: "Refuse and explain your ethical concerns",
        points: 10,
        type: "good",
        feedback: "Standing for ethics matters more than group membership.",
      },
      {
        text: "Participate minimally",
        points: 5,
        type: "balanced",
        feedback: "Limited participation is better, but refusing is best.",
      },
      {
        text: "Participate fully",
        points: -5,
        type: "bad",
        feedback: "Ethical concerns shouldn't be ignored.",
      },
    ],
  },
  {
    id: 188,
    question:
      "A colleague is struggling but hiding it from management. Do you intervene?",
    options: [
      {
        text: "Speak to them privately and offer support",
        points: 10,
        type: "good",
        feedback: "Private support respects their dignity.",
      },
      {
        text: "Feel concerned but mind your business",
        points: 5,
        type: "balanced",
        feedback: "At least express concern. It shows you care.",
      },
      {
        text: "Tell management without their knowledge",
        points: -5,
        type: "bad",
        feedback: "Private conversation first is respectful.",
      },
    ],
  },
  {
    id: 189,
    question:
      "You're given the wrong grade in your favor. What's the right thing to do?",
    options: [
      {
        text: "Report the error to the teacher",
        points: 10,
        type: "good",
        feedback: "Honesty about grading errors shows integrity.",
      },
      {
        text: "Keep quiet but feel guilty",
        points: 5,
        type: "balanced",
        feedback: "Your guilt is valid. Report it.",
      },
      {
        text: "Happily accept the wrong grade",
        points: -5,
        type: "bad",
        feedback: "Academic honesty requires correct grades.",
      },
    ],
  },
  {
    id: 190,
    question:
      "Your success might mean fewer opportunities for less privileged peers. How do you respond?",
    options: [
      {
        text: "Succeed while advocating for systemic equity",
        points: 10,
        type: "good",
        feedback:
          "Individual success and systemic change aren't mutually exclusive.",
      },
      {
        text: "Feel guilty about success",
        points: 5,
        type: "balanced",
        feedback: "Empathy is good, but guilt without action doesn't help.",
      },
      {
        text: "Ignore systemic inequality",
        points: -5,
        type: "bad",
        feedback: "Awareness should lead to advocacy.",
      },
    ],
  },
  {
    id: 191,
    question:
      "A friend is cheating in their relationship. They're asking you to keep it secret. What do you do?",
    options: [
      {
        text: "Refuse and encourage them to tell the truth",
        points: 10,
        type: "good",
        feedback:
          "Loyalty to honesty is more important than protecting deception.",
      },
      {
        text: "Feel uncomfortable but agree reluctantly",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. Stand firm.",
      },
      {
        text: "Keep the secret willingly",
        points: -5,
        type: "bad",
        feedback: "Keeping secrets about betrayal enables harm.",
      },
    ],
  },
  {
    id: 192,
    question:
      "You discover your school is in financial trouble but hides it from students. What do you do?",
    options: [
      {
        text: "Demand transparency from administration",
        points: 10,
        type: "good",
        feedback: "Students deserve honest information.",
      },
      {
        text: "Discuss it with other students",
        points: 5,
        type: "balanced",
        feedback: "Discussion is good, but demanding transparency is better.",
      },
      {
        text: "Stay silent to avoid creating panic",
        points: -5,
        type: "bad",
        feedback: "Transparency is better than misinformation.",
      },
    ],
  },
  {
    id: 193,
    question:
      "A peer's work is brilliant but they lack confidence to share it. What do you do?",
    options: [
      {
        text: "Encourage them to share and highlight their strengths",
        points: 10,
        type: "good",
        feedback: "Supporting others' growth benefits everyone.",
      },
      {
        text: "Tell them it's good but leave it at that",
        points: 5,
        type: "balanced",
        feedback: "Some encouragement is good, but more helps.",
      },
      {
        text: "Don't comment on their work",
        points: -5,
        type: "bad",
        feedback: "Recognition boosts confidence.",
      },
    ],
  },
  {
    id: 194,
    question:
      "You're offered a position that was given to someone less qualified based on nepotism. Do you take it?",
    options: [
      {
        text: "Question the process or look for ethical positions",
        points: 10,
        type: "good",
        feedback: "Questioning unfair processes matters.",
      },
      {
        text: "Feel uncomfortable but accept",
        points: 5,
        type: "balanced",
        feedback: "Your discomfort is valid. It's okay to seek alternatives.",
      },
      {
        text: "Accept eagerly without questions",
        points: -5,
        type: "bad",
        feedback: "Participating in nepotism perpetuates it.",
      },
    ],
  },
  {
    id: 195,
    question:
      "Your family faces a crisis but you have an important exam. What do you do?",
    options: [
      {
        text: "Prioritize family and explain to the teacher",
        points: 10,
        type: "good",
        feedback: "Family crises warrant flexibility from educators.",
      },
      {
        text: "Try to do both despite the strain",
        points: 5,
        type: "balanced",
        feedback: "Effort is good, but family should come first.",
      },
      {
        text: "Ignore family to prepare for the exam",
        points: -5,
        type: "bad",
        feedback: "Family crises matter more than exams.",
      },
    ],
  },
  {
    id: 196,
    question:
      "You're given confidential student information due to a computer error. What do you do?",
    options: [
      {
        text: "Report the security breach immediately",
        points: 10,
        type: "good",
        feedback: "Privacy breaches must be reported quickly.",
      },
      {
        text: "Ignore it since you didn't cause it",
        points: 5,
        type: "balanced",
        feedback: "Reporting protects everyone's privacy.",
      },
      {
        text: "Use the information",
        points: -5,
        type: "bad",
        feedback: "Using private information violates privacy.",
      },
    ],
  },
  {
    id: 197,
    question:
      "A friend is lying to get ahead. You know the truth will catch up with them. What do you do?",
    options: [
      {
        text: "Encourage them to tell the truth before it's discovered",
        points: 10,
        type: "good",
        feedback: "Early honesty prevents bigger consequences.",
      },
      {
        text: "Feel conflicted but don't intervene",
        points: 5,
        type: "balanced",
        feedback: "Your concern should lead to action.",
      },
      {
        text: "Let them get caught",
        points: -5,
        type: "bad",
        feedback: "Warning them shows true friendship.",
      },
    ],
  },
  {
    id: 198,
    question:
      "You discover a system that allows you to break rules without consequences. What do you do?",
    options: [
      {
        text: "Report the loophole to authorities",
        points: 10,
        type: "good",
        feedback: "Closing loopholes maintains system integrity.",
      },
      {
        text: "Avoid using it but don't report",
        points: 5,
        type: "balanced",
        feedback: "Not using it is good, but reporting helps.",
      },
      {
        text: "Use the loophole",
        points: -5,
        type: "bad",
        feedback: "Using loopholes undermines institutional trust.",
      },
    ],
  },
  {
    id: 199,
    question:
      "Your country's educational system is deeply flawed. Will you work to change it from within or without?",
    options: [
      {
        text: "Decide based on your skills and passion for impact",
        points: 10,
        type: "good",
        feedback: "Both paths can create meaningful change.",
      },
      {
        text: "Feel frustrated but do nothing",
        points: 5,
        type: "balanced",
        feedback: "Frustration should motivate action.",
      },
      {
        text: "Accept the flawed system",
        points: -5,
        type: "bad",
        feedback: "Systems change when people work for it.",
      },
    ],
  },
  {
    id: 200,
    question:
      "You realize that integrity sometimes costs you opportunities. How do you respond?",
    options: [
      {
        text: "Accept it as the price of authentic living",
        points: 10,
        type: "good",
        feedback: "Integrity-based choices lead to sustainable success.",
      },
      {
        text: "Feel tempted to compromise",
        points: 5,
        type: "balanced",
        feedback: "Temptation is normal, but resistance builds character.",
      },
      {
        text: "Abandon integrity for more opportunities",
        points: -5,
        type: "bad",
        feedback: "Integrity is your most valuable asset.",
      },
    ],
  },
];
