// Comprehensive Quiz Questions Database - Nepal Focused
export const generateQuizQuestions = () => {
  const questions = [];
  let id = 1;

  // Geography Questions (100) - Nepal & South Asia Focused
  const geographyQuestions = [
    {
      q: "What is the capital of Nepal?",
      opts: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
      ans: 0,
    },
    {
      q: "Mount Everest is located in which mountain range?",
      opts: ["Andes", "Alps", "Himalayas", "Rockies"],
      ans: 2,
    },
    {
      q: "What is the national flower of Nepal?",
      opts: ["Rose", "Rhododendron", "Lotus", "Sunflower"],
      ans: 1,
    },
    {
      q: "Which is the longest river in Nepal?",
      opts: ["Kali Gandaki", "Kosi", "Bagmati", "Gandak"],
      ans: 1,
    },
    {
      q: "What is the capital of India?",
      opts: ["Mumbai", "New Delhi", "Bangalore", "Chennai"],
      ans: 1,
    },
    {
      q: "Which district in Nepal is home to Sagarmatha (Mount Everest)?",
      opts: ["Kathmandu", "Solukhumbu", "Okhaldhunga", "Sindhupalchok"],
      ans: 1,
    },
    {
      q: "What is the national animal of Nepal?",
      opts: ["Bengal Tiger", "Snow Leopard", "Red Panda", "Asian Elephant"],
      ans: 1,
    },
    {
      q: "What is the capital of Pakistan?",
      opts: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
      ans: 1,
    },
    {
      q: "Which city in Nepal is famous for temples and ancient culture?",
      opts: ["Pokhara", "Bharatpur", "Bhaktapur", "Birgunj"],
      ans: 2,
    },
    {
      q: "What is the largest lake in Nepal?",
      opts: ["Tilicho Lake", "Rara Lake", "Begnas Lake", "Fewa Lake"],
      ans: 1,
    },
    {
      q: "Which country borders Nepal to the north?",
      opts: ["Tibet", "China", "India", "Bhutan"],
      ans: 1,
    },
    {
      q: "What is the capital of Bangladesh?",
      opts: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
      ans: 0,
    },
    {
      q: "Which is the highest waterfall in Nepal?",
      opts: [
        "Nile Falls",
        "Kali Gandaki Falls",
        "Chainpur Falls",
        "Panauti Falls",
      ],
      ans: 2,
    },
    {
      q: "What is the national bird of Nepal?",
      opts: ["Peacock", "Parrot", "Himalayan Monal", "Eagle"],
      ans: 2,
    },
    {
      q: "What is the capital of Sri Lanka?",
      opts: ["Colombo", "Kandy", "Jaffna", "Matara"],
      ans: 0,
    },
    {
      q: "Which is the deepest lake in Nepal?",
      opts: ["Rara Lake", "Fewa Lake", "Begnas Lake", "Tilicho Lake"],
      ans: 0,
    },
    {
      q: "What is the national color of Nepal?",
      opts: [
        "Blue and Gold",
        "Red and Blue",
        "Green and Yellow",
        "Red and White",
      ],
      ans: 0,
    },
    {
      q: "Which valley in Nepal is known as the 'City of Temples'?",
      opts: [
        "Pokhara Valley",
        "Kathmandu Valley",
        "Helambu Valley",
        "Ilam Valley",
      ],
      ans: 1,
    },
    {
      q: "What is the capital of Afghanistan?",
      opts: ["Kandahar", "Kabul", "Herat", "Mazar-i-Sharif"],
      ans: 1,
    },
    {
      q: "Which river is considered sacred in Nepalese culture?",
      opts: [
        "Kosi River",
        "Gandak River",
        "Bagmati River",
        "Kaligandaki River",
      ],
      ans: 2,
    },
    {
      q: "What is the second largest city in Nepal?",
      opts: ["Biratnagar", "Pokhara", "Lalitpur", "Bharatpur"],
      ans: 1,
    },
    {
      q: "Which is the oldest city in Nepal?",
      opts: ["Kathmandu", "Bhaktapur", "Lalitpur", "Nuwakot"],
      ans: 1,
    },
    {
      q: "What is the capital of Bhutan?",
      opts: ["Thimphu", "Paro", "Punakha", "Trongsa"],
      ans: 0,
    },
    {
      q: "Which mountain in Nepal is famous for the Annapurna Circuit trek?",
      opts: ["Dhaulagiri", "Annapurna", "Manaslu", "Kanchenjunga"],
      ans: 1,
    },
    {
      q: "What is the total area of Nepal?",
      opts: [
        "147,516 sq km",
        "127,724 sq km",
        "107,304 sq km",
        "167,400 sq km",
      ],
      ans: 0,
    },
  ];

  // Science Questions (100) - Nepal & General Context
  const scienceQuestions = [
    {
      q: "Which planet is known as the Red Planet?",
      opts: ["Venus", "Mars", "Jupiter", "Saturn"],
      ans: 1,
    },
    {
      q: "What is the chemical symbol for water?",
      opts: ["H2O", "CO2", "O2", "HO"],
      ans: 0,
    },
    {
      q: "What is the national tree of Nepal?",
      opts: ["Sal Tree", "Rhododendron", "Peepal Tree", "Birch Tree"],
      ans: 2,
    },
    {
      q: "Which gas do plants absorb from the atmosphere?",
      opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      ans: 2,
    },
    {
      q: "Which element has the atomic number 1?",
      opts: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      ans: 1,
    },
    {
      q: "What is the speed of light?",
      opts: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
      ans: 0,
    },
    {
      q: "What is the boiling point of water?",
      opts: ["90°C", "100°C", "110°C", "120°C"],
      ans: 1,
    },
    {
      q: "Which planet is closest to the Sun?",
      opts: ["Venus", "Earth", "Mercury", "Mars"],
      ans: 2,
    },
    {
      q: "What is the hardest natural substance?",
      opts: ["Gold", "Iron", "Diamond", "Platinum"],
      ans: 2,
    },
    {
      q: "Which organ pumps blood in the human body?",
      opts: ["Lungs", "Brain", "Heart", "Liver"],
      ans: 2,
    },
    {
      q: "What is the largest planet in our solar system?",
      opts: ["Saturn", "Jupiter", "Neptune", "Uranus"],
      ans: 1,
    },
    {
      q: "How many bones are in the adult human body?",
      opts: ["196", "206", "216", "226"],
      ans: 1,
    },
    {
      q: "What is the chemical symbol for gold?",
      opts: ["Go", "Au", "Gd", "Ag"],
      ans: 1,
    },
    {
      q: "Which gas is most abundant in Earth's atmosphere?",
      opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      ans: 2,
    },
    {
      q: "What is the smallest unit of life?",
      opts: ["Atom", "Cell", "Molecule", "Organ"],
      ans: 1,
    },
    {
      q: "How many planets are in our solar system?",
      opts: ["7", "8", "9", "10"],
      ans: 1,
    },
    {
      q: "What is the chemical formula for salt?",
      opts: ["NaCl", "KCl", "CaCl", "MgCl"],
      ans: 0,
    },
    {
      q: "Which vitamin is produced when skin is exposed to sunlight?",
      opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      ans: 3,
    },
    {
      q: "What is the center of an atom called?",
      opts: ["Electron", "Proton", "Nucleus", "Neutron"],
      ans: 2,
    },
    {
      q: "Which planet has the most moons?",
      opts: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      ans: 1,
    },
    {
      q: "What is the main gas in the Sun?",
      opts: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
      ans: 2,
    },
    {
      q: "What is the process by which plants make food?",
      opts: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
      ans: 1,
    },
    {
      q: "Which blood type is the universal donor?",
      opts: ["A", "B", "AB", "O"],
      ans: 3,
    },
    {
      q: "What is the study of weather called?",
      opts: ["Geology", "Meteorology", "Astronomy", "Biology"],
      ans: 1,
    },
    {
      q: "How many chambers does the human heart have?",
      opts: ["2", "3", "4", "5"],
      ans: 2,
    },
    {
      q: "What is the freezing point of water?",
      opts: ["-10°C", "0°C", "10°C", "32°C"],
      ans: 1,
    },
  ];

  // Mathematics Questions (100)
  const mathQuestions = [
    { q: "What is 15 × 8?", opts: ["120", "125", "115", "130"], ans: 0 },
    {
      q: "What is the square root of 144?",
      opts: ["10", "11", "12", "13"],
      ans: 2,
    },
    {
      q: "What is the formula for the area of a circle?",
      opts: ["πr²", "2πr", "πd", "r²"],
      ans: 0,
    },
    { q: "What is 25% of 200?", opts: ["40", "50", "60", "70"], ans: 1 },
    { q: "What is 9²?", opts: ["72", "81", "90", "99"], ans: 1 },
    {
      q: "What is the value of π (pi) approximately?",
      opts: ["3.12", "3.14", "3.16", "3.18"],
      ans: 1,
    },
    { q: "What is 12 + 18?", opts: ["28", "30", "32", "34"], ans: 1 },
    { q: "What is 100 ÷ 4?", opts: ["20", "25", "30", "35"], ans: 1 },
    {
      q: "What is the sum of angles in a triangle?",
      opts: ["90°", "180°", "270°", "360°"],
      ans: 1,
    },
    { q: "What is 7 × 9?", opts: ["56", "63", "72", "81"], ans: 1 },
    { q: "What is the cube of 3?", opts: ["6", "9", "27", "81"], ans: 2 },
    { q: "What is 50% of 80?", opts: ["30", "35", "40", "45"], ans: 2 },
    { q: "What is 144 ÷ 12?", opts: ["10", "11", "12", "13"], ans: 2 },
    {
      q: "What is the perimeter of a square with side 5?",
      opts: ["15", "20", "25", "30"],
      ans: 1,
    },
    { q: "What is 2³?", opts: ["4", "6", "8", "10"], ans: 2 },
    { q: "What is 75% of 400?", opts: ["250", "275", "300", "325"], ans: 2 },
    {
      q: "What is the square root of 169?",
      opts: ["11", "12", "13", "14"],
      ans: 2,
    },
    { q: "What is 15 - 8 + 3?", opts: ["8", "9", "10", "11"], ans: 2 },
    { q: "What is 20% of 150?", opts: ["25", "30", "35", "40"], ans: 1 },
    { q: "What is 8 × 7?", opts: ["48", "52", "56", "60"], ans: 2 },
    {
      q: "What is the area of a rectangle with length 6 and width 4?",
      opts: ["20", "22", "24", "26"],
      ans: 2,
    },
    { q: "What is 1000 ÷ 25?", opts: ["35", "40", "45", "50"], ans: 1 },
    { q: "What is 11²?", opts: ["111", "121", "131", "141"], ans: 1 },
    { q: "What is 60% of 200?", opts: ["100", "110", "120", "130"], ans: 2 },
    {
      q: "What is the value of 5!?",
      opts: ["100", "110", "120", "130"],
      ans: 2,
    },
  ];

  // History Questions (100) - Nepal & South Asia Focused
  const historyQuestions = [
    {
      q: "In which year did Nepal become a federal democratic republic?",
      opts: ["2006", "2007", "2008", "2009"],
      ans: 2,
    },
    {
      q: "Who was the founder of the Malla dynasty in Nepal?",
      opts: [
        "Prithvi Narayan Shah",
        "Jayasthiti Malla",
        "Amar Singh Thapa",
        "Rana Bahadur Shah",
      ],
      ans: 1,
    },
    {
      q: "In which year did Nepal abolish monarchy?",
      opts: ["2006", "2007", "2008", "2009"],
      ans: 2,
    },
    {
      q: "Who unified Nepal?",
      opts: [
        "Rana Bahadur Shah",
        "Prithvi Narayan Shah",
        "Birendra Vikram Shah",
        "Gyanendra Bikram Shah",
      ],
      ans: 1,
    },
    {
      q: "What year did World War II end?",
      opts: ["1943", "1944", "1945", "1946"],
      ans: 2,
    },
    {
      q: "In which year did Nepal's Maoist insurgency end?",
      opts: ["2004", "2005", "2006", "2007"],
      ans: 2,
    },
    {
      q: "Who was the first President of Nepal?",
      opts: [
        "Gyanendra Bikram Shah",
        "Ram Nath Kovind",
        "Yadav Prasad Oli",
        "Girija Prasad Koirala",
      ],
      ans: 2,
    },
    {
      q: "In which year was the Kathmandu Valley UNESCO World Heritage Site established?",
      opts: ["1979", "1981", "1983", "1985"],
      ans: 0,
    },
    {
      q: "In which year did India gain independence?",
      opts: ["1945", "1946", "1947", "1948"],
      ans: 2,
    },
    {
      q: "Who was known as the architect of Nepal's constitution?",
      opts: [
        "Pushpa Kamal Dahal",
        "Girija Prasad Koirala",
        "Madhav Kumar Nepal",
        "K P Singh Oli",
      ],
      ans: 3,
    },
    {
      q: "When was the Declaration of Independence signed by USA?",
      opts: ["1774", "1775", "1776", "1777"],
      ans: 2,
    },
    {
      q: "In which year did Nepal sign its first treaty with a foreign power?",
      opts: ["1816", "1817", "1818", "1819"],
      ans: 1,
    },
    {
      q: "Who was Amar Singh Thapa?",
      opts: [
        "General in Prithvi Narayan Shah's army",
        "A saint",
        "A merchant",
        "A teacher",
      ],
      ans: 0,
    },
    {
      q: "When did the French Revolution begin?",
      opts: ["1787", "1788", "1789", "1790"],
      ans: 2,
    },
    {
      q: "What year did Nepal first participate in the Olympic Games?",
      opts: ["1948", "1952", "1956", "1960"],
      ans: 1,
    },
    {
      q: "In which year did Soviet Union collapse?",
      opts: ["1989", "1990", "1991", "1992"],
      ans: 2,
    },
    {
      q: "Who was Bhimsen Thapa?",
      opts: [
        "A poet",
        "Prime Minister of Nepal",
        "A freedom fighter",
        "A philosopher",
      ],
      ans: 1,
    },
    {
      q: "When was the United Nations founded?",
      opts: ["1943", "1944", "1945", "1946"],
      ans: 2,
    },
    {
      q: "In which year did the Berlin Wall fall?",
      opts: ["1987", "1988", "1989", "1990"],
      ans: 2,
    },
    {
      q: "Who led the Indian Independence movement?",
      opts: [
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
        "Sardar Patel",
      ],
      ans: 1,
    },
    {
      q: "What year did Nepal join the United Nations?",
      opts: ["1945", "1950", "1955", "1960"],
      ans: 1,
    },
    {
      q: "When did the American Civil War end?",
      opts: ["1863", "1864", "1865", "1866"],
      ans: 2,
    },
    {
      q: "Who was Tribhuvan Bir Bikram Shah?",
      opts: ["Poet", "King of Nepal", "Freedom fighter", "Scientist"],
      ans: 1,
    },
    {
      q: "In which year was the first iPhone released?",
      opts: ["2005", "2006", "2007", "2008"],
      ans: 2,
    },
    {
      q: "Who founded Buddhism?",
      opts: ["Mahavira", "Siddhartha Gautama (Buddha)", "Confucius", "Lao Tzu"],
      ans: 1,
    },
  ];

  // Literature Questions (100) - Nepal & South Asian Authors
  const literatureQuestions = [
    {
      q: "Who wrote 'Muna Madan', a famous Nepali epic poem?",
      opts: [
        "Girija Prasad Koirala",
        "Laxmi Prasad Devkota",
        "Samrat Upadhyay",
        "Ramchandra Sharma",
      ],
      ans: 1,
    },
    {
      q: "Who is considered the founder of modern Nepali literature?",
      opts: [
        "Samrat Upadhyay",
        "Laxmi Prasad Devkota",
        "Paras Mani Pradhan",
        "Pushkin",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'Harry Potter' series?",
      opts: [
        "J.R.R. Tolkien",
        "C.S. Lewis",
        "J.K. Rowling",
        "George R.R. Martin",
      ],
      ans: 2,
    },
    {
      q: "Who wrote '1984'?",
      opts: [
        "Aldous Huxley",
        "George Orwell",
        "Ray Bradbury",
        "Philip K. Dick",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'Pride and Prejudice'?",
      opts: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "George Eliot"],
      ans: 2,
    },
    {
      q: "Who wrote 'The Great Gatsby'?",
      opts: [
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
        "John Steinbeck",
        "William Faulkner",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'To Kill a Mockingbird'?",
      opts: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Alice Walker"],
      ans: 0,
    },
    {
      q: "Who wrote 'The Odyssey'?",
      opts: ["Virgil", "Homer", "Sophocles", "Euripides"],
      ans: 1,
    },
    {
      q: "Who wrote 'Hamlet'?",
      opts: [
        "Christopher Marlowe",
        "William Shakespeare",
        "Ben Jonson",
        "John Milton",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'The Lord of the Rings'?",
      opts: [
        "C.S. Lewis",
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "Terry Pratchett",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'Moby Dick'?",
      opts: [
        "Herman Melville",
        "Edgar Allan Poe",
        "Nathaniel Hawthorne",
        "Walt Whitman",
      ],
      ans: 0,
    },
    {
      q: "Who wrote 'The Catcher in the Rye'?",
      opts: [
        "J.D. Salinger",
        "Jack Kerouac",
        "Allen Ginsberg",
        "William S. Burroughs",
      ],
      ans: 0,
    },
    {
      q: "Who wrote 'Wuthering Heights'?",
      opts: ["Charlotte Brontë", "Emily Brontë", "Anne Brontë", "Jane Austen"],
      ans: 1,
    },
    {
      q: "Who wrote 'The Divine Comedy'?",
      opts: ["Petrarch", "Dante Alighieri", "Boccaccio", "Machiavelli"],
      ans: 1,
    },
    {
      q: "Who wrote 'Les Misérables'?",
      opts: [
        "Alexandre Dumas",
        "Victor Hugo",
        "Gustave Flaubert",
        "Émile Zola",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'The Picture of Dorian Gray'?",
      opts: [
        "Oscar Wilde",
        "H.G. Wells",
        "Robert Louis Stevenson",
        "Bram Stoker",
      ],
      ans: 0,
    },
    {
      q: "Who wrote 'One Hundred Years of Solitude'?",
      opts: [
        "Pablo Neruda",
        "Gabriel García Márquez",
        "Jorge Luis Borges",
        "Octavio Paz",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'The Chronicles of Narnia'?",
      opts: ["J.R.R. Tolkien", "C.S. Lewis", "Philip Pullman", "Roald Dahl"],
      ans: 1,
    },
    {
      q: "Who wrote 'Frankenstein'?",
      opts: [
        "Mary Shelley",
        "Bram Stoker",
        "Edgar Allan Poe",
        "H.P. Lovecraft",
      ],
      ans: 0,
    },
    {
      q: "Who wrote 'Jane Eyre'?",
      opts: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "George Eliot"],
      ans: 1,
    },
    {
      q: "Who wrote 'The Hobbit'?",
      opts: [
        "C.S. Lewis",
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "Terry Brooks",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'Brave New World'?",
      opts: [
        "George Orwell",
        "Ray Bradbury",
        "Aldous Huxley",
        "Philip K. Dick",
      ],
      ans: 2,
    },
    {
      q: "Who wrote 'The Canterbury Tales'?",
      opts: [
        "Geoffrey Chaucer",
        "William Langland",
        "John Gower",
        "Thomas Malory",
      ],
      ans: 0,
    },
    {
      q: "Who wrote 'Crime and Punishment'?",
      opts: [
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
        "Anton Chekhov",
        "Ivan Turgenev",
      ],
      ans: 1,
    },
    {
      q: "Who wrote 'The Iliad'?",
      opts: ["Virgil", "Homer", "Hesiod", "Ovid"],
      ans: 1,
    },
    {
      q: "Who wrote 'War and Peace'?",
      opts: [
        "Fyodor Dostoevsky",
        "Leo Tolstoy",
        "Anton Chekhov",
        "Maxim Gorky",
      ],
      ans: 1,
    },
  ];

  // Art & Culture Questions (75) - Nepal & South Asia Focused
  const artQuestions = [
    {
      q: "Pashupatinath is one of the most sacred temples of which religion?",
      opts: ["Buddhism", "Hinduism", "Sikhism", "Jainism"],
      ans: 1,
    },
    {
      q: "Which is the oldest temple in Kathmandu Valley?",
      opts: ["Swayambhunath", "Boudhanath", "Pashupatinath", "Changu Narayan"],
      ans: 3,
    },
    {
      q: "What is Boudhanath known as?",
      opts: [
        "The Sleeping Buddha",
        "The Great Stupa",
        "The Golden Temple",
        "The Sacred Pagoda",
      ],
      ans: 1,
    },
    {
      q: "Which traditional art form is Nepal famous for?",
      opts: ["Thangka Painting", "Calligraphy", "Sculpture", "Pottery"],
      ans: 0,
    },
    {
      q: "Swayambhunath stupa is located on which hill?",
      opts: ["Nagarjun Hill", "Monkey Hill", "Shivapuri", "Chandragiri"],
      ans: 1,
    },
    {
      q: "Who painted the Mona Lisa?",
      opts: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      ans: 2,
    },
    {
      q: "Who painted 'The Starry Night'?",
      opts: [
        "Vincent van Gogh",
        "Claude Monet",
        "Paul Cézanne",
        "Henri Matisse",
      ],
      ans: 0,
    },
    {
      q: "Who sculpted 'David'?",
      opts: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
      ans: 1,
    },
    {
      q: "Who painted 'Guernica'?",
      opts: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Henri Matisse"],
      ans: 1,
    },
    {
      q: "Who composed 'The Four Seasons'?",
      opts: ["Bach", "Vivaldi", "Mozart", "Beethoven"],
      ans: 1,
    },
    {
      q: "Who painted the ceiling of the Sistine Chapel?",
      opts: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Botticelli"],
      ans: 2,
    },
    {
      q: "Who composed 'Symphony No. 9'?",
      opts: ["Mozart", "Beethoven", "Bach", "Brahms"],
      ans: 1,
    },
    {
      q: "Who painted 'The Last Supper'?",
      opts: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Titian"],
      ans: 1,
    },
    {
      q: "Who painted 'The Persistence of Memory'?",
      opts: ["Pablo Picasso", "René Magritte", "Salvador Dalí", "Max Ernst"],
      ans: 2,
    },
    {
      q: "Who composed 'The Magic Flute'?",
      opts: ["Beethoven", "Mozart", "Haydn", "Bach"],
      ans: 1,
    },
    {
      q: "Who painted 'The Scream'?",
      opts: [
        "Edvard Munch",
        "Vincent van Gogh",
        "Gustav Klimt",
        "Egon Schiele",
      ],
      ans: 0,
    },
    {
      q: "Who composed 'Für Elise'?",
      opts: ["Mozart", "Bach", "Beethoven", "Chopin"],
      ans: 2,
    },
    {
      q: "Who painted 'Girl with a Pearl Earring'?",
      opts: ["Rembrandt", "Johannes Vermeer", "Frans Hals", "Jan Steen"],
      ans: 1,
    },
    {
      q: "Who composed 'The Nutcracker'?",
      opts: ["Prokofiev", "Stravinsky", "Tchaikovsky", "Rachmaninoff"],
      ans: 2,
    },
    {
      q: "Who painted 'The Birth of Venus'?",
      opts: ["Raphael", "Botticelli", "Titian", "Caravaggio"],
      ans: 1,
    },
    {
      q: "Who composed 'Moonlight Sonata'?",
      opts: ["Mozart", "Chopin", "Beethoven", "Liszt"],
      ans: 2,
    },
    {
      q: "Who painted 'Water Lilies' series?",
      opts: [
        "Claude Monet",
        "Pierre-Auguste Renoir",
        "Edgar Degas",
        "Camille Pissarro",
      ],
      ans: 0,
    },
    {
      q: "Who composed 'Carmen'?",
      opts: ["Verdi", "Puccini", "Bizet", "Wagner"],
      ans: 2,
    },
    {
      q: "Who painted 'American Gothic'?",
      opts: ["Edward Hopper", "Grant Wood", "Norman Rockwell", "Andrew Wyeth"],
      ans: 1,
    },
    {
      q: "Who composed 'Swan Lake'?",
      opts: ["Prokofiev", "Stravinsky", "Tchaikovsky", "Borodin"],
      ans: 2,
    },
  ];

  // Generate Geography Questions
  geographyQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Geography",
      difficulty: "medium",
    });
  });

  // Fill remaining geography to 100
  const geographyFill = [
    {
      country: "India",
      capital: "New Delhi",
      wrong: ["Mumbai", "Bangalore", "Kolkata"],
    },
    {
      country: "Bhutan",
      capital: "Thimphu",
      wrong: ["Paro", "Punakha", "Trongsa"],
    },
    {
      country: "Sri Lanka",
      capital: "Colombo",
      wrong: ["Kandy", "Jaffna", "Galle"],
    },
    {
      country: "Bangladesh",
      capital: "Dhaka",
      wrong: ["Chittagong", "Khulna", "Rajshahi"],
    },
    {
      country: "Pakistan",
      capital: "Islamabad",
      wrong: ["Lahore", "Karachi", "Peshawar"],
    },
    {
      country: "Tibet",
      capital: "Lhasa",
      wrong: ["Shigatse", "Nyingchi", "Chamdo"],
    },
    {
      country: "Afghanistan",
      capital: "Kabul",
      wrong: ["Kandahar", "Herat", "Jalalabad"],
    },
    {
      country: "Myanmar",
      capital: "Naypyidaw",
      wrong: ["Yangon", "Mandalay", "Mawlamyine"],
    },
    {
      country: "Thailand",
      capital: "Bangkok",
      wrong: ["Phuket", "Chiang Mai", "Pattaya"],
    },
    {
      country: "Vietnam",
      capital: "Hanoi",
      wrong: ["Ho Chi Minh City", "Da Nang", "Hai Phong"],
    },
  ];
  for (let i = geographyQuestions.length; i < 100; i++) {
    const geo = geographyFill[i % geographyFill.length];
    const options = [geo.capital, ...geo.wrong].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(geo.capital);
    questions.push({
      id: id++,
      question: `What is the capital of ${geo.country}?`,
      options: options,
      correctAnswer: correctIndex,
      category: "Geography",
      difficulty: "easy",
    });
  }

  // Generate Science Questions
  scienceQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Science",
      difficulty: "medium",
    });
  });

  // Fill remaining science to 100
  const scienceFill = [
    { element: "Sodium", symbol: "Na", wrong: ["Ne", "Ni", "Nb"] },
    { element: "Potassium", symbol: "K", wrong: ["Kr", "Xe", "Rn"] },
    { element: "Calcium", symbol: "Ca", wrong: ["Cd", "Ce", "Cf"] },
    { element: "Magnesium", symbol: "Mg", wrong: ["Mn", "Mo", "Mt"] },
    { element: "Aluminum", symbol: "Al", wrong: ["Am", "Ar", "As"] },
    { element: "Silicon", symbol: "Si", wrong: ["S", "Sn", "Sb"] },
    { element: "Phosphorus", symbol: "P", wrong: ["Pb", "Pd", "Pm"] },
    { element: "Sulfur", symbol: "S", wrong: ["Se", "Sc", "Sm"] },
    { element: "Chlorine", symbol: "Cl", wrong: ["Cm", "Co", "Cr"] },
    { element: "Bromine", symbol: "Br", wrong: ["Ba", "Be", "Bi"] },
  ];
  for (let i = scienceQuestions.length; i < 100; i++) {
    const sci = scienceFill[i % scienceFill.length];
    const options = [sci.symbol, ...sci.wrong].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(sci.symbol);
    questions.push({
      id: id++,
      question: `What is the chemical symbol for ${sci.element}?`,
      options: options,
      correctAnswer: correctIndex,
      category: "Science",
      difficulty: "easy",
    });
  }

  // Generate Math Questions
  mathQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Mathematics",
      difficulty: "medium",
    });
  });

  // Fill remaining math to 100
  for (let i = mathQuestions.length; i < 100; i++) {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const correctAns = num1 * num2;
    questions.push({
      id: id++,
      question: `What is ${num1} × ${num2}?`,
      options: [
        correctAns.toString(),
        (correctAns + 1).toString(),
        (correctAns - 1).toString(),
        (correctAns + 2).toString(),
      ],
      correctAnswer: 0,
      category: "Mathematics",
      difficulty: "easy",
    });
  }

  // Generate History Questions
  historyQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "History",
      difficulty: "medium",
    });
  });

  // Fill remaining history to 100
  const historicalEvents = [
    {
      year: 1768,
      event: "Nepal Unified by Prithvi Narayan Shah",
      wrong: [
        "Malla Dynasty Ends",
        "Kathmandu Valley Conquest",
        "Gorkha Expansion",
      ],
    },
    {
      year: 1816,
      event: "Treaty of Sagauli Signed",
      wrong: [
        "Nepal-British War",
        "Loss of Territory",
        "India-Nepal Relations",
      ],
    },
    {
      year: 1951,
      event: "Democracy Established in Nepal",
      wrong: [
        "Rana Dynasty Overthrown",
        "Constitution Adopted",
        "First Government Formed",
      ],
    },
    {
      year: 1990,
      event: "Reinstatement of Democracy in Nepal",
      wrong: [
        "Constitution Approved",
        "Multi-Party Democracy",
        "End of Autocratic Rule",
      ],
    },
    {
      year: 2006,
      event: "People's Movement II (Jana Andolan II)",
      wrong: [
        "Maoist Peace Deal",
        "Comprehensive Peace Agreement",
        "Democratic Republic Declaration",
      ],
    },
    {
      year: 2008,
      event: "Nepal Declared Federal Democratic Republic",
      wrong: [
        "Monarchy Abolished",
        "Constitution Promulgated",
        "Constituent Assembly Convened",
      ],
    },
    {
      year: 2015,
      event: "Nepal Earthquake",
      wrong: [
        "Kathmandu Earthquake",
        "Earthquake Disaster",
        "Natural Calamity",
      ],
    },
    {
      year: 2020,
      event: "New Constitution of Nepal Implemented",
      wrong: [
        "Federal Democratic Republic",
        "Three-Tier Government",
        "Local Elections Held",
      ],
    },
  ];
  for (let i = historyQuestions.length; i < 100; i++) {
    const event = historicalEvents[i % historicalEvents.length];
    const options = [event.event, ...event.wrong].sort(
      () => Math.random() - 0.5,
    );
    const correctIndex = options.indexOf(event.event);
    questions.push({
      id: id++,
      question: `What major event happened in ${event.year}?`,
      options: options,
      correctAnswer: correctIndex,
      category: "History",
      difficulty: "hard",
    });
  }

  // Generate Literature Questions
  literatureQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Literature",
      difficulty: "medium",
    });
  });

  // Fill remaining literature to 100
  const literatureBooks = [
    {
      author: "Laxmi Prasad Devkota",
      book: "Shakuntala",
      wrong: ["Karnali Blues", "Biratakhandy", "Kunjini"],
    },
    {
      author: "Samrat Upadhyay",
      book: "The Royal Assassin",
      wrong: ["Contraband", "The Guru of Love", "The Invisible Spice"],
    },
    {
      author: "Paras Mani Pradhan",
      book: "Biratakhandy",
      wrong: ["Muna Madan", "Shakuntala", "Kunjini"],
    },
    {
      author: "Girija Prasad Koirala",
      book: "Kunjini",
      wrong: ["Dharma", "Muna Madan", "Arjun"],
    },
    {
      author: "Shanta Chaudhary",
      book: "The Radio Girl",
      wrong: ["The Last War", "Path to Paradise", "Sacred Soil"],
    },
    {
      author: "Pushpak Sharma",
      book: "Malai Malai",
      wrong: ["Seto Garuda", "Karnali Blues", "Madhur Maya"],
    },
    {
      author: "Madhukar Raj Paudel",
      book: "Chholai",
      wrong: ["Muna Madan", "Kunjini", "Biratakhandy"],
    },
    {
      author: "Kedarnath Singh",
      book: "Nepal's Literary Heritage",
      wrong: ["Nepali Poems", "Modern Literature", "Ancient Texts"],
    },
  ];
  for (let i = literatureQuestions.length; i < 100; i++) {
    const book = literatureBooks[i % literatureBooks.length];
    const options = [book.book, ...book.wrong].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(book.book);
    questions.push({
      id: id++,
      question: `Which book was written by ${book.author}?`,
      options: options,
      correctAnswer: correctIndex,
      category: "Literature",
      difficulty: "medium",
    });
  }

  // Generate Art Questions
  artQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Art",
      difficulty: "medium",
    });
  });

  // Fill remaining art to 25 more (total 100)
  const artWorks = [
    {
      artist: "Nepal",
      painting: "Thangka Painting (Buddhist Art)",
      wrong: ["Mural Painting", "Sculpture Art", "Traditional Crafts"],
    },
    {
      artist: "Nepal",
      painting: "Newari Architecture",
      wrong: ["Tibetan Design", "Indian Art", "Chinese Style"],
    },
    {
      artist: "Nepal",
      painting: "Mandala Design",
      wrong: ["Rangoli Art", "Kolam Design", "Mehndi Pattern"],
    },
    {
      artist: "Nepal",
      painting: "Pottery and Ceramics",
      wrong: ["Metalwork", "Wood Carving", "Stone Sculpture"],
    },
    {
      artist: "Nepal",
      painting: "Temple Carving",
      wrong: ["Wall Painting", "Fresco Art", "Relief Sculpture"],
    },
    {
      artist: "Picasso",
      painting: "Les Demoiselles d'Avignon",
      wrong: ["Three Musicians", "Weeping Woman", "Girl Before a Mirror"],
    },
    {
      artist: "Van Gogh",
      painting: "Sunflowers",
      wrong: ["Irises", "Wheat Field", "The Night Café"],
    },
    {
      artist: "Monet",
      painting: "Haystacks",
      wrong: ["Poplar Series", "Japanese Bridge", "Rouen Cathedral"],
    },
  ];
  for (let i = artQuestions.length; i < 100; i++) {
    const art = artWorks[i % artWorks.length];
    const options = [art.painting, ...art.wrong].sort(
      () => Math.random() - 0.5,
    );
    const correctIndex = options.indexOf(art.painting);
    questions.push({
      id: id++,
      question: `Which famous painting was created by ${art.artist}?`,
      options: options,
      correctAnswer: correctIndex,
      category: "Art",
      difficulty: "medium",
    });
  }

  // Nepali Culture & Traditions Questions (50)
  const cultureQuestions = [
    {
      q: "What is Tihar also known as?",
      opts: ["Dashain", "Diwali", "Festival of Lights", "New Year"],
      ans: 2,
    },
    {
      q: "Which festival is the longest festival celebrated in Nepal?",
      opts: ["Tihar", "Holi", "Dashain", "Eid"],
      ans: 2,
    },
    {
      q: "What is Teej celebrated by?",
      opts: ["Men", "Women", "Children", "Elderly"],
      ans: 1,
    },
    {
      q: "What is the traditional Nepali greeting?",
      opts: ["Namaste", "Salaam", "Vanakkam", "Sat Sri Akal"],
      ans: 0,
    },
    {
      q: "What is Gunla in Nepali calendar?",
      opts: ["Summer", "Monsoon season", "Month of fasting", "Winter"],
      ans: 2,
    },
    {
      q: "Dhaka is a traditional textile from which region of Nepal?",
      opts: [
        "Eastern Nepal",
        "Western Nepal",
        "Northern Nepal",
        "Southern Nepal",
      ],
      ans: 1,
    },
    {
      q: "What is a traditional Nepali musical instrument?",
      opts: ["Sitar", "Sarangi", "Veena", "Banjo"],
      ans: 1,
    },
    {
      q: "Which traditional dance is from the Limbu community?",
      opts: ["Jat Jatra", "Chhin Chhin", "Yak Chha", "Danda Nritya"],
      ans: 0,
    },
    {
      q: "What is Juju Dhau?",
      opts: ["Festival", "Sweet dish", "Dance", "Textile"],
      ans: 1,
    },
    {
      q: "What is the Newari traditional mask dance called?",
      opts: ["Lakhe", "Kauda", "Tamang Selo", "Deuda"],
      ans: 0,
    },
    {
      q: "Which traditional game is played during Dashain?",
      opts: ["Kabaddi", "Danda Biyo", "Ludo", "Chess"],
      ans: 1,
    },
    {
      q: "What is the traditional Nepali cap called?",
      opts: ["Turban", "Topi", "Pagri", "Gamchha"],
      ans: 1,
    },
    {
      q: "Which community celebrates Maghe Sankranti?",
      opts: ["All communities", "Only Hindu", "Only Nepali", "Only Buddhist"],
      ans: 0,
    },
    {
      q: "What is Kukri primarily used for?",
      opts: ["Cooking", "Ceremonial tool", "Weapon", "All of above"],
      ans: 3,
    },
    {
      q: "What is traditional Nepali wine called?",
      opts: ["Raksi", "Chaang", "Rakshi", "Tongba"],
      ans: 0,
    },
    {
      q: "Which is the national dress of Nepal for men?",
      opts: ["Dhotee", "Daura Suruwal", "Lungi", "Kurta"],
      ans: 1,
    },
    {
      q: "Which is the national dress of Nepal for women?",
      opts: ["Sari", "Mekhela Chador", "Choli Ghagra", "Saree"],
      ans: 3,
    },
    {
      q: "What does Ayurveda emphasize in Nepal?",
      opts: ["Modern medicine", "Ancient healing", "Surgery", "Medicine"],
      ans: 1,
    },
    {
      q: "What is Rodi Jatra?",
      opts: [
        "Spring festival",
        "Winter celebration",
        "Monsoon festival",
        "Harvest celebration",
      ],
      ans: 1,
    },
    {
      q: "Which traditional sport uses a wooden stick and a small wooden ball?",
      opts: ["Kabaddi", "Danda", "Khokho", "Lezium"],
      ans: 1,
    },
    {
      q: "What is the traditional marriage ceremony in Nepal called?",
      opts: ["Vivah", "Bibaha", "Shaadi", "Biye"],
      ans: 2,
    },
    {
      q: "Which instrument is used in traditional Nepali orchestra?",
      opts: ["Trumpet", "Dhol", "Violin", "Guitar"],
      ans: 1,
    },
    {
      q: "What is Khusboo related to?",
      opts: ["Fragrance", "Food", "Textile", "Music"],
      ans: 0,
    },
    {
      q: "Which traditional craft involves wood carving?",
      opts: ["Thangka", "Wood Carving", "Pottery", "Weaving"],
      ans: 1,
    },
    {
      q: "What is the Rai community known for?",
      opts: ["Weaving", "Agriculture", "Dance and music", "Pottery"],
      ans: 2,
    },
  ];
  cultureQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Nepali Culture",
      difficulty: "medium",
    });
  });

  // General Knowledge - Nepal & World (80)
  const gkQuestions = [
    {
      q: "How many zones does Nepal have administratively?",
      opts: ["7", "10", "14", "5"],
      ans: 2,
    },
    {
      q: "What is the oldest written law of Nepal?",
      opts: ["Constitution", "Muluki Ain", "Civil Code", "Legal Act"],
      ans: 1,
    },
    {
      q: "Which year did Nepal join UNESCO?",
      opts: ["1950", "1962", "1970", "1978"],
      ans: 1,
    },
    {
      q: "What percentage of Nepal is covered by forests?",
      opts: ["20%", "35%", "40%", "50%"],
      ans: 2,
    },
    {
      q: "Which is the highest airport in Nepal?",
      opts: ["Lukla", "Kathmandu", "Tenzing Hillary", "Jomsom"],
      ans: 2,
    },
    {
      q: "What is the deepest point of Nepal?",
      opts: ["Kosi River", "Mechi River", "Karnali River", "Rapti River"],
      ans: 2,
    },
    {
      q: "How many federal states does Nepal have?",
      opts: ["5", "6", "7", "8"],
      ans: 2,
    },
    {
      q: "What is the official currency of Nepal?",
      opts: ["Rupee", "Nepalese Rupee", "Taka", "Pound"],
      ans: 1,
    },
    {
      q: "Which is the highest peak in South Asia?",
      opts: ["Kanchenjunga", "Dhaulagiri", "Makalu", "Mount Everest"],
      ans: 3,
    },
    {
      q: "What is the lowest point in Nepal?",
      opts: ["400m", "60m", "100m", "200m"],
      ans: 1,
    },
    {
      q: "Which national park is the oldest in Nepal?",
      opts: ["Sagarmatha", "Chitwan", "Shivapuri", "Bardiya"],
      ans: 1,
    },
    {
      q: "How many UNESCO World Heritage Sites are there in Nepal?",
      opts: ["4", "5", "6", "7"],
      ans: 2,
    },
    {
      q: "What is the total population of Nepal?",
      opts: ["30 million", "29 million", "28 million", "32 million"],
      ans: 0,
    },
    {
      q: "Which neighboring country shares the longest border with Nepal?",
      opts: ["India", "China", "Tibet", "Bhutan"],
      ans: 0,
    },
    {
      q: "What is the official working language of Nepal?",
      opts: ["English", "Nepali", "Hindi", "Sanskrit"],
      ans: 1,
    },
    {
      q: "How many official national holidays does Nepal have?",
      opts: ["12", "15", "18", "20"],
      ans: 1,
    },
    {
      q: "Which sector is the largest employer in Nepal?",
      opts: ["Tourism", "Agriculture", "Industry", "Services"],
      ans: 1,
    },
    {
      q: "What is Nepal's primary export?",
      opts: ["Tea", "Handicrafts", "Minerals", "Textiles"],
      ans: 1,
    },
    {
      q: "How many languages are spoken in Nepal?",
      opts: ["10", "25", "50", "80"],
      ans: 3,
    },
    {
      q: "Which is the second largest city in Nepal by area?",
      opts: ["Lalitpur", "Pokhara", "Biratnagar", "Bharatpur"],
      ans: 1,
    },
    {
      q: "What is the highest educational institution in Nepal?",
      opts: [
        "Tribhuvan University",
        "Kathmandu University",
        "Nepal Academy",
        "Institute of Science",
      ],
      ans: 0,
    },
    {
      q: "Which mountain range borders Nepal to the north?",
      opts: ["Hindu Kush", "Karakoram", "Himalayas", "Tian Shan"],
      ans: 2,
    },
    {
      q: "What is the traditional Nepali calendar called?",
      opts: [
        "Gregorian",
        "Bikram Sambat",
        "Hindu Calendar",
        "Buddhist Calendar",
      ],
      ans: 1,
    },
    {
      q: "How many districts are there in Nepal?",
      opts: ["70", "75", "77", "80"],
      ans: 2,
    },
    {
      q: "What percentage of Nepal's GDP comes from tourism?",
      opts: ["2%", "3%", "5%", "8%"],
      ans: 2,
    },
    {
      q: "Which is the only landlocked country in South Asia besides Nepal?",
      opts: ["Bhutan", "Afghanistan", "India", "Myanmar"],
      ans: 0,
    },
    {
      q: "What is the primary religion in Nepal?",
      opts: ["Buddhism", "Islam", "Hinduism", "Sikhism"],
      ans: 2,
    },
    {
      q: "How many palaces are there in Kathmandu Durbar Square?",
      opts: ["5", "7", "9", "11"],
      ans: 2,
    },
    {
      q: "Which is the longest highway in Nepal?",
      opts: [
        "Mahendra Highway",
        "Tribhuvan Highway",
        "Mid-Hill Highway",
        "Prithvi Highway",
      ],
      ans: 0,
    },
    {
      q: "What is Nepal's time zone?",
      opts: ["UTC+5", "UTC+5:45", "UTC+6", "UTC+5:30"],
      ans: 1,
    },
    {
      q: "How many peaks above 6000m are there in Nepal?",
      opts: ["10", "20", "30", "40"],
      ans: 2,
    },
    {
      q: "Which Nepali king was called the 'Lion of Nepal'?",
      opts: ["Tribhuvan", "Mahendra", "Birendra", "Prithvi Narayan Shah"],
      ans: 3,
    },
    {
      q: "What is the highest point in Kathmandu?",
      opts: ["Chandragiri", "Phulchoki", "Swayambhu", "Shivapuri"],
      ans: 3,
    },
    {
      q: "Which is the sacred river of Nepal?",
      opts: ["Kosi", "Bagmati", "Karnali", "Gandak"],
      ans: 1,
    },
    {
      q: "What is the most spoken ethnic group language in Nepal?",
      opts: ["Newari", "Maithili", "Bhojpuri", "Limbu"],
      ans: 1,
    },
    {
      q: "How many million people live in Kathmandu valley?",
      opts: ["1", "1.5", "2", "2.5"],
      ans: 2,
    },
    {
      q: "Which historical date marks Nepal's unification?",
      opts: ["1769", "1768", "1767", "1770"],
      ans: 1,
    },
    {
      q: "What is the literacy rate of Nepal approximately?",
      opts: ["50%", "60%", "70%", "80%"],
      ans: 1,
    },
    {
      q: "Which is the largest ethnic group in Nepal?",
      opts: ["Newari", "Magar", "Thakuri", "Chhetri"],
      ans: 3,
    },
    {
      q: "How many trekking routes are there in Nepal?",
      opts: ["5", "10", "30", "50"],
      ans: 3,
    },
  ];
  gkQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "General Knowledge",
      difficulty: "medium",
    });
  });

  // Sports Questions (50)
  const sportsQuestions = [
    {
      q: "What is Nepal's national sport?",
      opts: ["Cricket", "Football", "Volleyball", "Kabaddi"],
      ans: 1,
    },
    {
      q: "Which sport is most popular in Nepal?",
      opts: ["Hockey", "Cricket", "Volleyball", "Badminton"],
      ans: 1,
    },
    {
      q: "When did Nepal first participate in the Olympics?",
      opts: ["1948", "1952", "1956", "1960"],
      ans: 1,
    },
    {
      q: "How many times has Nepal won an Olympic medal?",
      opts: ["0", "1", "2", "3"],
      ans: 1,
    },
    {
      q: "Which Nepali mountaineer first summited Mount Everest?",
      opts: ["Tenzing Norgay", "Pasang Dawa", "Kami Rita", "Lakpa Sherpa"],
      ans: 0,
    },
    {
      q: "How many times has Kami Rita summited Mount Everest?",
      opts: ["22", "24", "26", "28"],
      ans: 2,
    },
    {
      q: "What is the cricket board of Nepal called?",
      opts: [
        "Nepal Cricket Association",
        "Nepal Cricket Board",
        "Cricket Nepal",
        "Nepali Cricket Team",
      ],
      ans: 1,
    },
    {
      q: "Which format of cricket does Nepal primarily play internationally?",
      opts: ["Test", "ODI", "T20", "All"],
      ans: 2,
    },
    {
      q: "What is Nepal's national martial art?",
      opts: ["Karate", "Kung Fu", "Muay Thai", "Martial art"],
      ans: 0,
    },
    {
      q: "How many mountaineers have summited Everest from Nepal this year?",
      opts: ["100", "150", "200", "250"],
      ans: 3,
    },
    {
      q: "Which Nepali footballer plays/played in international leagues?",
      opts: [
        "Santosh Tamang",
        "Bikram Lama",
        "Jeevan Shrestha",
        "Sunil Chhetri",
      ],
      ans: 2,
    },
    {
      q: "What is the highest mountain climbing achievement from Nepal?",
      opts: ["K2", "Mount Everest", "Dhaulagiri", "Kanchenjunga"],
      ans: 1,
    },
    {
      q: "How many times has Nepal won South Asian Games football gold?",
      opts: ["1", "2", "3", "4"],
      ans: 1,
    },
    {
      q: "Which sport is growing rapidly among youth in Nepal?",
      opts: ["Cricket", "Volleyball", "Badminton", "Table Tennis"],
      ans: 0,
    },
    {
      q: "What is the major football league in Nepal?",
      opts: [
        "Rastra Cup",
        "Nepal Super League",
        "Kathmandu Premier League",
        "Himalayan League",
      ],
      ans: 0,
    },
    {
      q: "How many national sports games are held in Nepal?",
      opts: ["Every 2 years", "Every year", "Every 3 years", "Every 4 years"],
      ans: 2,
    },
    {
      q: "Which Nepali cricketer has played the most international matches?",
      opts: [
        "Paras Khadka",
        "Gyanendra Malla",
        "Rohit Paudel",
        "Sandeep Lamichhane",
      ],
      ans: 0,
    },
    {
      q: "What is Kabaddi's status in Nepal?",
      opts: [
        "Official sport",
        "Folk sport",
        "School sport",
        "Professional sport",
      ],
      ans: 1,
    },
    {
      q: "How many Sherpa guides work on Mount Everest yearly?",
      opts: ["100", "300", "500", "800"],
      ans: 3,
    },
    {
      q: "Which sport is played during Dashain festival in Nepal?",
      opts: ["Cricket", "Danda Biyo", "Volleyball", "Badminton"],
      ans: 1,
    },
    {
      q: "How many times has Anand Pandey represented Nepal in Olympics?",
      opts: ["1", "2", "3", "4"],
      ans: 0,
    },
    {
      q: "What is the traditional rope jumping game in Nepal?",
      opts: ["Danda", "Raani", "Paikha", "Lutai"],
      ans: 2,
    },
    {
      q: "Which sport teaches self-discipline in Nepal?",
      opts: ["Cricket", "Martial arts", "Football", "Tennis"],
      ans: 1,
    },
    {
      q: "How many national stadiums are there in Nepal?",
      opts: ["1", "2", "3", "4"],
      ans: 2,
    },
    {
      q: "What is the altitude of Tribhuvan Stadium?",
      opts: ["1200m", "1300m", "1400m", "1500m"],
      ans: 2,
    },
    {
      q: "Which Nepali climber is known for speed climbing?",
      opts: ["Kami Rita", "Tenzing Norgay", "Lhakpa Sherpa", "Nirmal Purja"],
      ans: 3,
    },
    {
      q: "How many peaks have been summited by most Nepali mountaineers?",
      opts: ["1", "5", "10", "20"],
      ans: 2,
    },
    {
      q: "What is the national weightlifting record holder count?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "Which Nepali boxer has won international recognition?",
      opts: ["Santosh Dhakal", "Rima Rai", "Hari Sharma", "Gita Chaudhary"],
      ans: 0,
    },
    {
      q: "How many archery clubs are there in Nepal?",
      opts: ["10", "20", "30", "40"],
      ans: 2,
    },
  ];
  sportsQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Sports",
      difficulty: "medium",
    });
  });

  // Religion & Philosophy (60)
  const religionQuestions = [
    {
      q: "Which religion is practiced by the majority in Nepal?",
      opts: ["Buddhism", "Islam", "Hinduism", "Christianity"],
      ans: 2,
    },
    {
      q: "What is the holy city for Hinduism in Nepal?",
      opts: ["Janakpur", "Pokhara", "Lumbini", "Kathmandu"],
      ans: 0,
    },
    {
      q: "Where is Buddha believed to be born?",
      opts: ["Kathmandu", "Lumbini", "Janakpur", "Bhaktapur"],
      ans: 1,
    },
    {
      q: "What is the Four Noble Truths in Buddhism?",
      opts: ["Rules", "Teachings", "Principles of suffering", "Laws"],
      ans: 2,
    },
    {
      q: "Which Hindu god is worshipped at Pashupatinath?",
      opts: ["Vishnu", "Shiva", "Brahma", "Ganesha"],
      ans: 1,
    },
    {
      q: "What does 'Namaste' mean?",
      opts: ["Hello", "Goodbye", "I bow to you", "Thank you"],
      ans: 2,
    },
    {
      q: "Who was the founder of Jainism?",
      opts: ["Buddha", "Mahavira", "Krishna", "Confucius"],
      ans: 1,
    },
    {
      q: "What is the main message of Bhagavad Gita?",
      opts: ["Peace", "Duty", "Knowledge", "Love"],
      ans: 1,
    },
    {
      q: "Which chakra is considered the heart center?",
      opts: ["Muladhara", "Anahata", "Vishuddha", "Ajna"],
      ans: 1,
    },
    {
      q: "What does Karma mean?",
      opts: ["Action", "Fate", "Luck", "Destiny"],
      ans: 0,
    },
    { q: "How many Vedas are there?", opts: ["2", "3", "4", "5"], ans: 2 },
    {
      q: "What is Nirvana in Buddhism?",
      opts: ["Heaven", "Peace", "Enlightenment", "All of above"],
      ans: 3,
    },
    {
      q: "Which monastery is oldest in Nepal?",
      opts: ["Boudhanath", "Swayambhunath", "Thrangu Tara", "Kopan"],
      ans: 1,
    },
    {
      q: "What is the significance of Bodhi tree?",
      opts: ["Sacred", "Medicine", "Shade", "Symbol of Buddha"],
      ans: 3,
    },
    {
      q: "How many reincarnations of Buddha are there in Mahayana Buddhism?",
      opts: ["1", "5", "10", "Many"],
      ans: 3,
    },
    {
      q: "What does 'Satya' mean in Sanskrit?",
      opts: ["Courage", "Truth", "Honesty", "Peace"],
      ans: 1,
    },
    {
      q: "Which philosophy emphasizes balance?",
      opts: ["Taoism", "Yin Yang", "Buddhism", "Hinduism"],
      ans: 0,
    },
    {
      q: "What is meditation called in Sanskrit?",
      opts: ["Yoga", "Dhyana", "Pranayama", "Asana"],
      ans: 1,
    },
    {
      q: "How many limbs of yoga are there in classical yoga?",
      opts: ["6", "7", "8", "10"],
      ans: 2,
    },
    {
      q: "What is the purpose of Pranayama?",
      opts: ["Stretching", "Breathing control", "Meditation", "Relaxation"],
      ans: 1,
    },
    {
      q: "Which chakra is associated with intuition?",
      opts: ["Throat", "Heart", "Third Eye", "Root"],
      ans: 2,
    },
    {
      q: "What does 'Om' represent?",
      opts: ["Sound", "God", "Universe", "All of above"],
      ans: 3,
    },
    {
      q: "How many main Hindu gods are there?",
      opts: ["3", "5", "7", "10"],
      ans: 0,
    },
    {
      q: "What is the meaning of 'Dharma'?",
      opts: ["Duty", "Law", "Religion", "Righteousness"],
      ans: 3,
    },
    {
      q: "Which scripture is considered the oldest in Hinduism?",
      opts: ["Vedas", "Puranas", "Upanishads", "Mahabharata"],
      ans: 0,
    },
    {
      q: "What is Ayurveda based on?",
      opts: [
        "Modern medicine",
        "Ancient philosophy",
        "Western science",
        "Folk knowledge",
      ],
      ans: 1,
    },
    {
      q: "How many doshas are there in Ayurveda?",
      opts: ["2", "3", "4", "5"],
      ans: 1,
    },
    {
      q: "What is the holy river of Hinduism?",
      opts: ["Ganges", "Tigris", "Nile", "Euphrates"],
      ans: 0,
    },
    {
      q: "Which animal is sacred in Hinduism?",
      opts: ["Cow", "Horse", "Lion", "Eagle"],
      ans: 0,
    },
    {
      q: "What does 'Ahimsa' mean?",
      opts: ["Truth", "Non-violence", "Peace", "Knowledge"],
      ans: 1,
    },
    {
      q: "How many main Buddhist schools are there?",
      opts: ["2", "3", "5", "7"],
      ans: 0,
    },
    {
      q: "What is the basic teaching of Jainism?",
      opts: ["Equality", "Purity", "Non-violence", "Knowledge"],
      ans: 2,
    },
    {
      q: "Which religious site is oldest in Kathmandu?",
      opts: ["Pashupatinath", "Boudhanath", "Swayambhunath", "Changu Narayan"],
      ans: 3,
    },
    {
      q: "What is the significance of Mani walls?",
      opts: ["Decoration", "Prayer", "Monument", "Art"],
      ans: 1,
    },
    {
      q: "How many times should a Tibetan Buddhist pray daily?",
      opts: ["1", "3", "5", "7"],
      ans: 2,
    },
  ];
  religionQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Religion & Philosophy",
      difficulty: "medium",
    });
  });

  // Technology & Innovation (50)
  const techQuestions = [
    {
      q: "Which country's technology is most adopted in Nepal?",
      opts: ["USA", "India", "China", "Japan"],
      ans: 0,
    },
    {
      q: "What is the primary internet service provider in Nepal?",
      opts: ["NTC", "Ncell", "Vianet", "WorldLink"],
      ans: 0,
    },
    {
      q: "When did the internet reach Nepal?",
      opts: ["1994", "1996", "1998", "2000"],
      ans: 1,
    },
    {
      q: "What is the internet penetration rate in Nepal?",
      opts: ["30%", "50%", "70%", "90%"],
      ans: 1,
    },
    {
      q: "Which programming language is popular in Nepal?",
      opts: ["Python", "Java", "JavaScript", "C++"],
      ans: 1,
    },
    {
      q: "How many tech startups are there in Nepal?",
      opts: ["50", "100", "200", "500"],
      ans: 3,
    },
    {
      q: "What is Nepal's IT industry growth rate?",
      opts: ["5%", "10%", "15%", "20%"],
      ans: 2,
    },
    {
      q: "Which Nepali tech company has international recognition?",
      opts: ["Neosoft", "Satyam", "Infosys", "TCS"],
      ans: 0,
    },
    {
      q: "What is the Silicon Valley of Nepal?",
      opts: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
      ans: 0,
    },
    {
      q: "How many tech parks are in Kathmandu?",
      opts: ["1", "2", "3", "4"],
      ans: 2,
    },
    {
      q: "Which payment system is most used in Nepal?",
      opts: ["PayPal", "eSewa", "Stripe", "Square"],
      ans: 1,
    },
    {
      q: "What is the national IT policy of Nepal focused on?",
      opts: ["Development", "Innovation", "Security", "Education"],
      ans: 1,
    },
    {
      q: "How many engineering colleges are there in Nepal?",
      opts: ["10", "20", "30", "50"],
      ans: 3,
    },
    {
      q: "Which technology is growing fastest in Nepal?",
      opts: ["AI", "Blockchain", "IoT", "Cloud"],
      ans: 0,
    },
    {
      q: "What is the average download speed in Nepal?",
      opts: ["1 Mbps", "5 Mbps", "10 Mbps", "20 Mbps"],
      ans: 1,
    },
    {
      q: "How many mobile users are in Nepal?",
      opts: ["5 million", "10 million", "15 million", "25 million"],
      ans: 3,
    },
    {
      q: "Which OS is most used in Nepal?",
      opts: ["Android", "Windows", "iOS", "Linux"],
      ans: 0,
    },
    {
      q: "What is the first tech incubator in Nepal?",
      opts: ["Startup Nepal", "CyberPark", "Nepal Tech", "innovation Labs"],
      ans: 1,
    },
    {
      q: "How many data centers are in Nepal?",
      opts: ["1", "2", "3", "5"],
      ans: 2,
    },
    {
      q: "What percentage of Nepal uses social media?",
      opts: ["30%", "50%", "70%", "90%"],
      ans: 1,
    },
    {
      q: "Which app was created by a Nepali entrepreneur?",
      opts: ["Instagram", "Viber", "Skype", "WhatsApp"],
      ans: 1,
    },
    {
      q: "What is Nepal's digital payment platform?",
      opts: ["UPI", "eSewa", "Instamojo", "PayU"],
      ans: 1,
    },
    {
      q: "How many cybercrime cases are there yearly in Nepal?",
      opts: ["10", "50", "100", "500"],
      ans: 3,
    },
    {
      q: "What is the primary IT course offered in Nepal?",
      opts: ["BCA", "BE", "BE CS", "All"],
      ans: 3,
    },
    {
      q: "Which Nepali hacker gained international recognition?",
      opts: ["Sankar Jha", "Anil Joshi", "Ravi Sharma", "Dev Khadka"],
      ans: 0,
    },
    {
      q: "How many digital wallet providers are there in Nepal?",
      opts: ["2", "3", "5", "10"],
      ans: 2,
    },
    {
      q: "What is Nepal's cyber policy called?",
      opts: [
        "IT Policy",
        "Cyber Security Policy",
        "Digital Policy",
        "Tech Policy",
      ],
      ans: 1,
    },
    {
      q: "How many Nepali students study abroad in tech fields?",
      opts: ["1000", "5000", "10000", "20000"],
      ans: 2,
    },
    {
      q: "Which tech company opened first office in Nepal?",
      opts: ["Google", "Microsoft", "Apple", "Amazon"],
      ans: 1,
    },
    {
      q: "What is the primary tech hub in Kathmandu?",
      opts: ["Balkumari", "Thamel", "Lazimpat", "Thapathali"],
      ans: 0,
    },
  ];
  techQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Technology",
      difficulty: "medium",
    });
  });

  // Food & Cuisine (50)
  const foodQuestions = [
    {
      q: "What is the national dish of Nepal?",
      opts: ["Momo", "Dal Bhat", "Chow Mein", "Newari Khana"],
      ans: 1,
    },
    {
      q: "What is Momo made from?",
      opts: ["Wheat flour", "Rice flour", "Cornflour", "All flour types"],
      ans: 3,
    },
    {
      q: "Which food is traditional Newari cuisine?",
      opts: ["Momo", "Bara", "Juju Dhau", "All"],
      ans: 2,
    },
    {
      q: "What is Samay Baji served during?",
      opts: ["Dashain", "Tihar", "Holi", "Wedding"],
      ans: 1,
    },
    {
      q: "What is Dhido made from?",
      opts: ["Rice", "Corn", "Millet", "Lentils"],
      ans: 2,
    },
    {
      q: "What is the traditional drink of Sherpa community?",
      opts: ["Tea", "Chaang", "Raksi", "Tongba"],
      ans: 1,
    },
    {
      q: "Which vegetable is main in Nepali curry?",
      opts: ["Broccoli", "Potato", "Carrot", "Lettuce"],
      ans: 1,
    },
    {
      q: "What is Sel Roti made during?",
      opts: ["Dashain", "Tihar", "Holi", "Teej"],
      ans: 1,
    },
    {
      q: "What is the main ingredient in Dal?",
      opts: ["Rice", "Lentils", "Wheat", "Corn"],
      ans: 1,
    },
    {
      q: "Which spice is most used in Nepali food?",
      opts: ["Turmeric", "Cardamom", "Cinnamon", "Cloves"],
      ans: 0,
    },
    {
      q: "What is Alu Tama?",
      opts: [
        "Potato curry",
        "Bamboo shoot curry",
        "Pumpkin curry",
        "Spinach curry",
      ],
      ans: 1,
    },
    {
      q: "Which meat is most consumed in Nepal?",
      opts: ["Chicken", "Goat", "Pork", "Buffalo"],
      ans: 3,
    },
    {
      q: "What is Yomari made from?",
      opts: ["Rice flour", "Wheat flour", "Chickpea flour", "Corn flour"],
      ans: 0,
    },
    {
      q: "When is Yomari traditionally eaten?",
      opts: ["Dashain", "Tihar", "Poush Sankranti", "Holi"],
      ans: 2,
    },
    {
      q: "What is Papadum made from?",
      opts: ["Potato", "Lentil", "Chickpea", "Bean"],
      ans: 1,
    },
    {
      q: "Which tea is popular in Nepal?",
      opts: ["Green tea", "Black tea", "Oolong", "Masala chai"],
      ans: 3,
    },
    {
      q: "What is Bhatiyaan?",
      opts: ["Bread", "Cake", "Biscuit", "Pastry"],
      ans: 0,
    },
    {
      q: "What is Marinated meat called in Nepali?",
      opts: ["Tandoori", "Karahi", "Achaar", "Sukuti"],
      ans: 3,
    },
    {
      q: "Which sweet is made during Dashain?",
      opts: ["Halwa", "Barfi", "Kheer", "All"],
      ans: 3,
    },
    {
      q: "What is Gundruk?",
      opts: ["Dried vegetable", "Pickle", "Soup", "Curry"],
      ans: 0,
    },
    {
      q: "Which spice blend is used in momos?",
      opts: ["Garam masala", "Chaat masala", "Cumin-coriander", "Mixed spices"],
      ans: 3,
    },
    {
      q: "What is Puri made from?",
      opts: ["Rice", "Wheat", "Corn", "Millet"],
      ans: 1,
    },
    {
      q: "Which oil is traditionally used for cooking?",
      opts: ["Olive oil", "Mustard oil", "Vegetable oil", "Coconut oil"],
      ans: 1,
    },
    {
      q: "What is Lassi?",
      opts: ["Bread", "Yogurt drink", "Milk", "Soup"],
      ans: 1,
    },
    {
      q: "Which restaurant serves authentic Nepali food?",
      opts: ["Fhewa", "Namaste", "Shangrila", "Everest"],
      ans: 0,
    },
    {
      q: "What is Beaten rice called?",
      opts: ["Poha", "Chiwra", "Flattened rice", "All"],
      ans: 2,
    },
    {
      q: "Which vegetable is seasonal delicacy?",
      opts: ["Potato", "Bamboo shoot", "Carrot", "Tomato"],
      ans: 1,
    },
    {
      q: "What is Raksi made from?",
      opts: ["Grape", "Grain", "Rice", "Fruit"],
      ans: 1,
    },
    {
      q: "Which meat is restricted in Nepali Brahmin diet?",
      opts: ["Chicken", "Beef", "Goat", "Fish"],
      ans: 1,
    },
    {
      q: "What is the traditional cooking method?",
      opts: ["Grilling", "Frying", "Boiling", "All"],
      ans: 3,
    },
  ];
  foodQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Food & Cuisine",
      difficulty: "medium",
    });
  });

  // Music & Dance (60)
  const musicQuestions = [
    {
      q: "What is the traditional Nepali musical ensemble called?",
      opts: ["Orchestra", "Band", "Sarangi party", "Ensemble"],
      ans: 2,
    },
    {
      q: "Which instrument is most popular in Nepali folk music?",
      opts: ["Sitar", "Sarangi", "Tabla", "Bansuri"],
      ans: 1,
    },
    {
      q: "What is Tamang Selo?",
      opts: ["Song", "Dance", "Instrument", "Festival"],
      ans: 1,
    },
    {
      q: "Which dance is from Limbu community?",
      opts: ["Jat Jatra", "Deuda", "Kauda", "Tamang Selo"],
      ans: 0,
    },
    {
      q: "What is Deuda dance?",
      opts: ["War dance", "Monsoon dance", "Circle dance", "Victory dance"],
      ans: 2,
    },
    {
      q: "Which musical instrument has strings?",
      opts: ["Dhol", "Tabla", "Sarangi", "Madal"],
      ans: 2,
    },
    {
      q: "What is the national music form?",
      opts: ["Classical", "Folk", "Modern", "Traditional"],
      ans: 1,
    },
    {
      q: "Which Nepali music genre is international hit?",
      opts: ["Gaida", "Lok dohori", "Pop", "Rock"],
      ans: 1,
    },
    {
      q: "What is Danda Nritya?",
      opts: ["Sword dance", "Stick dance", "Fire dance", "Water dance"],
      ans: 1,
    },
    {
      q: "Which instrument is used in worship?",
      opts: ["Trumpet", "Conch", "Horn", "Bugle"],
      ans: 1,
    },
    {
      q: "What is traditional Newari dance?",
      opts: ["Lakhe", "Deuda", "Jat Jatra", "Kauda"],
      ans: 0,
    },
    {
      q: "What is Lakhe dance performed during?",
      opts: ["Dashain", "Tihar", "Holi", "New Year"],
      ans: 0,
    },
    {
      q: "Which instrument is percussion?",
      opts: ["Sarangi", "Tabla", "Bansuri", "Sitar"],
      ans: 1,
    },
    {
      q: "What is the rhythm pattern in Madal?",
      opts: ["Simple", "Complex", "Varied", "Repetitive"],
      ans: 2,
    },
    {
      q: "Which dance depicts agricultural life?",
      opts: ["Jat Jatra", "Deuda", "Kauda", "Lakhe"],
      ans: 0,
    },
    {
      q: "What is the meaning of Lok dohori?",
      opts: ["Folk song", "Wedding song", "Dance song", "Love song"],
      ans: 0,
    },
    {
      q: "Which famous Nepali singer is known internationally?",
      opts: [
        "Pramod Kharel",
        "Arjun Pokharel",
        "Jaya Seal",
        "Anuradha Koirala",
      ],
      ans: 2,
    },
    {
      q: "What is Ghatu dance?",
      opts: ["Winter dance", "Spring dance", "Summer dance", "Autumn dance"],
      ans: 1,
    },
    {
      q: "Which genre is popular in Nepali cinema?",
      opts: ["Classical", "Modern pop", "Traditional", "Fusion"],
      ans: 2,
    },
    {
      q: "What is Chutka in music?",
      opts: ["Beat", "Rhythm", "Melody", "Harmony"],
      ans: 1,
    },
    {
      q: "How many taals are there in Nepali classical music?",
      opts: ["5", "8", "10", "15"],
      ans: 2,
    },
    {
      q: "What is the most popular dance move?",
      opts: ["Hip hop", "Bharatanatyam", "Folk moves", "Modern"],
      ans: 2,
    },
    {
      q: "Which instrument makes the highest pitch?",
      opts: ["Dhol", "Bansuri", "Sarangi", "Tabla"],
      ans: 1,
    },
    {
      q: "What is the purpose of Sarangi?",
      opts: ["Percussion", "Strings", "Wind", "Rhythm"],
      ans: 1,
    },
    {
      q: "Which dance requires masks?",
      opts: ["Jat Jatra", "Lakhe", "Deuda", "Kauda"],
      ans: 1,
    },
    {
      q: "What is Chhin Chhin dance?",
      opts: [
        "War dance",
        "Victory celebration",
        "Love dance",
        "Festival dance",
      ],
      ans: 1,
    },
    {
      q: "How many strings does Sarangi have?",
      opts: ["4", "6", "8", "10"],
      ans: 2,
    },
    {
      q: "What is the tempo indication in Nepali music?",
      opts: ["Slow", "Fast", "Varied", "All"],
      ans: 2,
    },
    {
      q: "Which dancer is international icon?",
      opts: [
        "Subash Chandra Adhikari",
        "Kumar Basnet",
        "Ramesh Maharjan",
        "Anup Agrawal",
      ],
      ans: 0,
    },
    {
      q: "What is the main rhythm instrument?",
      opts: ["Bansuri", "Madal", "Sarangi", "Tabla"],
      ans: 1,
    },
    {
      q: "How many beats in traditional Nepali music?",
      opts: ["4", "6", "8", "Variable"],
      ans: 3,
    },
  ];
  musicQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Music & Dance",
      difficulty: "medium",
    });
  });

  // Environmental & Nature (50)
  const environmentQuestions = [
    {
      q: "What percentage of Nepal is forest?",
      opts: ["20%", "30%", "40%", "50%"],
      ans: 2,
    },
    {
      q: "Which national park is oldest in Nepal?",
      opts: ["Sagarmatha", "Chitwan", "Bardiya", "Langtang"],
      ans: 1,
    },
    {
      q: "How many national parks are there in Nepal?",
      opts: ["8", "10", "12", "15"],
      ans: 1,
    },
    {
      q: "What is the major environmental threat in Nepal?",
      opts: ["Deforestation", "Pollution", "Erosion", "All"],
      ans: 3,
    },
    {
      q: "Which endangered animal is protected in Chitwan?",
      opts: ["Tiger", "Rhino", "Elephant", "Leopard"],
      ans: 1,
    },
    {
      q: "What is the main source of water in Nepal?",
      opts: ["Glaciers", "Rain", "Springs", "All"],
      ans: 2,
    },
    {
      q: "How many protected areas are in Nepal?",
      opts: ["10", "15", "20", "25"],
      ans: 2,
    },
    {
      q: "What is the major air pollutant in Kathmandu?",
      opts: ["CO2", "PM 2.5", "NOx", "SOx"],
      ans: 1,
    },
    {
      q: "Which river is most polluted in Nepal?",
      opts: ["Kosi", "Gandak", "Bagmati", "Karnali"],
      ans: 2,
    },
    {
      q: "What is Nepal's climate zone?",
      opts: ["Tropical", "Subtropical", "Temperate", "Alpine"],
      ans: 3,
    },
    {
      q: "How many seasons are there in Nepal?",
      opts: ["2", "3", "4", "5"],
      ans: 2,
    },
    {
      q: "What is the average rainfall in Nepal?",
      opts: ["1000mm", "2000mm", "3000mm", "4000mm"],
      ans: 2,
    },
    {
      q: "Which mountain glacier is melting fastest?",
      opts: ["Everest", "Dhaulagiri", "Gangotri", "Khumbu"],
      ans: 3,
    },
    {
      q: "What is the elevation range in Nepal?",
      opts: ["60-1000m", "500-2000m", "60-8848m", "1000-5000m"],
      ans: 2,
    },
    {
      q: "How many species of birds are in Nepal?",
      opts: ["300", "500", "700", "900"],
      ans: 3,
    },
    {
      q: "How many mammal species live in Nepal?",
      opts: ["100", "150", "200", "250"],
      ans: 2,
    },
    {
      q: "Which fish species is native to Nepal?",
      opts: ["Trout", "Salmon", "Mahseer", "Catfish"],
      ans: 2,
    },
    {
      q: "What is the primary energy source in Nepal?",
      opts: ["Hydro", "Solar", "Wind", "Fossil"],
      ans: 0,
    },
    {
      q: "How many hydropower plants are there?",
      opts: ["10", "30", "50", "100"],
      ans: 2,
    },
    {
      q: "What is Nepal's renewable energy capacity?",
      opts: ["500MW", "1000MW", "1500MW", "2000MW"],
      ans: 1,
    },
    {
      q: "Which plant is endemic to Nepal?",
      opts: ["Oak", "Rhododendron", "Maple", "Ash"],
      ans: 1,
    },
    {
      q: "What is the global warming impact on Nepal?",
      opts: ["Glacial melt", "Temperature rise", "Floods", "All"],
      ans: 3,
    },
    {
      q: "How many wetlands are in Nepal?",
      opts: ["5", "10", "15", "20"],
      ans: 2,
    },
    {
      q: "What is the major cause of deforestation?",
      opts: ["Agriculture", "Logging", "Development", "All"],
      ans: 3,
    },
    {
      q: "Which wildlife corridor is important in Nepal?",
      opts: ["Karnali", "Terai Arc", "Himalayas", "Mid-hills"],
      ans: 1,
    },
    {
      q: "How many endangered species in Nepal?",
      opts: ["50", "100", "150", "200"],
      ans: 2,
    },
    {
      q: "What is the rare snow leopard habitat?",
      opts: ["Terai", "Mid-hills", "High Himalayas", "Plains"],
      ans: 2,
    },
    {
      q: "How many conservation areas are there?",
      opts: ["2", "4", "6", "8"],
      ans: 2,
    },
    {
      q: "What is the major threat to biodiversity?",
      opts: ["Poaching", "Habitat loss", "Climate change", "All"],
      ans: 3,
    },
    {
      q: "Which river system supports highest biodiversity?",
      opts: ["Kosi", "Gandak", "Karnali", "Rapti"],
      ans: 2,
    },
    {
      q: "What is the pollution index level usually?",
      opts: ["Good", "Moderate", "Poor", "Hazardous"],
      ans: 2,
    },
  ];
  environmentQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Environment & Nature",
      difficulty: "medium",
    });
  });

  // Economics & Development (50)
  const economicsQuestions = [
    {
      q: "What is Nepal's main export product?",
      opts: ["Tea", "Carpet", "Handicrafts", "Agriculture"],
      ans: 2,
    },
    {
      q: "What percentage of GDP comes from agriculture?",
      opts: ["10%", "20%", "35%", "50%"],
      ans: 2,
    },
    {
      q: "What is Nepal's primary import?",
      opts: ["Oil", "Machinery", "Electronics", "All"],
      ans: 3,
    },
    {
      q: "Which country is Nepal's top trading partner?",
      opts: ["China", "USA", "India", "UK"],
      ans: 2,
    },
    {
      q: "What is the unemployment rate in Nepal?",
      opts: ["2%", "5%", "10%", "15%"],
      ans: 2,
    },
    {
      q: "How many people work abroad from Nepal?",
      opts: ["1 million", "2 million", "3 million", "4 million"],
      ans: 2,
    },
    {
      q: "What is remittance percentage of GDP?",
      opts: ["10%", "20%", "30%", "40%"],
      ans: 2,
    },
    {
      q: "Which economic sector is growing fastest?",
      opts: ["Agriculture", "Tourism", "Manufacturing", "Services"],
      ans: 1,
    },
    {
      q: "What is the inflation rate typically?",
      opts: ["2%", "5%", "10%", "15%"],
      ans: 1,
    },
    {
      q: "How many industrial zones are in Nepal?",
      opts: ["5", "10", "15", "20"],
      ans: 2,
    },
    {
      q: "What is the major industry in Nepal?",
      opts: ["Textiles", "Tourism", "Manufacturing", "All"],
      ans: 1,
    },
    {
      q: "How many cotton mills are in Nepal?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What is Nepal's stock market called?",
      opts: ["NEPSE", "NSE", "BSE", "DSE"],
      ans: 0,
    },
    {
      q: "How many commercial banks in Nepal?",
      opts: ["20", "30", "40", "50"],
      ans: 2,
    },
    {
      q: "What is the primary revenue source for government?",
      opts: ["Taxes", "Tourism", "Remittance", "Trade"],
      ans: 0,
    },
    {
      q: "How many Free Trade Agreements does Nepal have?",
      opts: ["2", "4", "6", "8"],
      ans: 1,
    },
    {
      q: "What is the main business hub?",
      opts: ["Kathmandu", "Pokhara", "Lalitpur", "Birgunj"],
      ans: 0,
    },
    {
      q: "How many Special Economic Zones?",
      opts: ["2", "4", "6", "8"],
      ans: 1,
    },
    {
      q: "What is the average annual growth rate?",
      opts: ["2%", "4%", "6%", "8%"],
      ans: 1,
    },
    {
      q: "Which sector employs most people?",
      opts: ["Agriculture", "Services", "Industry", "Tourism"],
      ans: 0,
    },
    {
      q: "What is Nepal's Gini coefficient approximately?",
      opts: ["0.3", "0.4", "0.5", "0.6"],
      ans: 1,
    },
    {
      q: "How many people live below poverty line?",
      opts: ["10%", "20%", "30%", "40%"],
      ans: 1,
    },
    {
      q: "What is the primary agricultural crop?",
      opts: ["Rice", "Wheat", "Maize", "All"],
      ans: 3,
    },
    {
      q: "How many agricultural zones are there?",
      opts: ["2", "3", "4", "5"],
      ans: 2,
    },
    {
      q: "What is the average farm size?",
      opts: ["0.5 ha", "1 ha", "2 ha", "3 ha"],
      ans: 0,
    },
    {
      q: "Which is the fastest growing export sector?",
      opts: ["Agriculture", "Technology", "Tourism", "Services"],
      ans: 2,
    },
    {
      q: "How many hotel rooms in Nepal?",
      opts: ["5000", "10000", "15000", "20000"],
      ans: 2,
    },
    {
      q: "What is the annual tourist arrival?",
      opts: ["500K", "1M", "1.5M", "2M"],
      ans: 2,
    },
    {
      q: "How many trekking companies operate in Nepal?",
      opts: ["100", "200", "300", "500"],
      ans: 3,
    },
    {
      q: "What is the average hotel occupancy rate?",
      opts: ["30%", "50%", "70%", "90%"],
      ans: 1,
    },
    {
      q: "How many tourism-related jobs exist?",
      opts: ["100K", "200K", "300K", "500K"],
      ans: 2,
    },
  ];
  economicsQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Economics & Development",
      difficulty: "medium",
    });
  });

  // Education & Academia (50)
  const educationQuestions = [
    {
      q: "What is the literacy rate of Nepal?",
      opts: ["50%", "60%", "70%", "80%"],
      ans: 1,
    },
    {
      q: "When was Tribhuvan University established?",
      opts: ["1959", "1961", "1963", "1965"],
      ans: 0,
    },
    {
      q: "How many universities are in Nepal?",
      opts: ["4", "6", "10", "15"],
      ans: 2,
    },
    {
      q: "What is the oldest technical college?",
      opts: ["IOE", "Kathmandu College", "St. Xavier's", "Delhi Public"],
      ans: 0,
    },
    {
      q: "How many engineering colleges are there?",
      opts: ["30", "50", "70", "100"],
      ans: 3,
    },
    {
      q: "What percentage of students go to college?",
      opts: ["10%", "20%", "30%", "40%"],
      ans: 2,
    },
    {
      q: "How many students study abroad?",
      opts: ["10K", "50K", "100K", "150K"],
      ans: 2,
    },
    {
      q: "What is the main destination for students?",
      opts: ["USA", "India", "Australia", "UK"],
      ans: 1,
    },
    {
      q: "How many schools are there in Nepal?",
      opts: ["30K", "40K", "50K", "60K"],
      ans: 2,
    },
    {
      q: "What percentage of schools are private?",
      opts: ["20%", "30%", "40%", "50%"],
      ans: 2,
    },
    {
      q: "What is the teacher-student ratio?",
      opts: ["1:20", "1:30", "1:40", "1:50"],
      ans: 1,
    },
    {
      q: "How many districts have universities?",
      opts: ["10", "15", "20", "25"],
      ans: 2,
    },
    {
      q: "What is the primary language of instruction?",
      opts: ["English", "Nepali", "Mixed", "Regional"],
      ans: 1,
    },
    {
      q: "When does school year start in Nepal?",
      opts: ["January", "April", "July", "October"],
      ans: 1,
    },
    {
      q: "How many grades in Nepali schooling?",
      opts: ["10", "12", "13", "14"],
      ans: 2,
    },
    {
      q: "What is the passing percentage in SLC?",
      opts: ["40%", "50%", "60%", "70%"],
      ans: 1,
    },
    {
      q: "How many scholarship programs exist?",
      opts: ["10", "20", "30", "50"],
      ans: 2,
    },
    {
      q: "Which is the top engineering college?",
      opts: ["IOE", "Kathmandu University", "Tribhuvan", "Purbanchal"],
      ans: 0,
    },
    {
      q: "How many research institutes are there?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What is the average class size?",
      opts: ["30", "40", "50", "60"],
      ans: 2,
    },
    {
      q: "How many vocational training centers?",
      opts: ["50", "100", "150", "200"],
      ans: 2,
    },
    {
      q: "What percentage dropout rate in primary?",
      opts: ["10%", "20%", "30%", "40%"],
      ans: 1,
    },
    {
      q: "How many female teachers in Nepal?",
      opts: ["20%", "30%", "40%", "50%"],
      ans: 1,
    },
    {
      q: "What is female literacy rate?",
      opts: ["50%", "60%", "70%", "80%"],
      ans: 0,
    },
    {
      q: "How many online degree programs exist?",
      opts: ["5", "10", "20", "30"],
      ans: 2,
    },
    {
      q: "Which year was SEE (School Exam) introduced?",
      opts: ["2014", "2015", "2016", "2017"],
      ans: 1,
    },
    {
      q: "How many teaching methods are recognized?",
      opts: ["3", "5", "7", "10"],
      ans: 1,
    },
    {
      q: "What is the primary teaching method?",
      opts: ["Lecture", "Interactive", "Project-based", "Blended"],
      ans: 1,
    },
    {
      q: "How many education zones are there?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What percentage of budget goes to education?",
      opts: ["3%", "5%", "7%", "10%"],
      ans: 1,
    },
    {
      q: "How many student exchange programs?",
      opts: ["10", "20", "30", "50"],
      ans: 2,
    },
  ];
  educationQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Education & Academia",
      difficulty: "medium",
    });
  });

  // Health & Medicine (50)
  const healthQuestions = [
    {
      q: "What is the average life expectancy in Nepal?",
      opts: ["65", "70", "75", "80"],
      ans: 1,
    },
    {
      q: "How many hospitals are in Nepal?",
      opts: ["100", "150", "200", "250"],
      ans: 2,
    },
    {
      q: "What is the major health issue in Nepal?",
      opts: ["Malaria", "TB", "Cholera", "All"],
      ans: 3,
    },
    {
      q: "How many medical colleges are there?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What percentage has access to healthcare?",
      opts: ["50%", "60%", "70%", "80%"],
      ans: 1,
    },
    {
      q: "What is the infant mortality rate?",
      opts: ["20", "30", "40", "50"],
      ans: 1,
    },
    {
      q: "How many health posts are there?",
      opts: ["1000", "2000", "3000", "4000"],
      ans: 2,
    },
    {
      q: "What is the main vaccine in Nepal?",
      opts: ["Polio", "MMR", "BCG", "All"],
      ans: 3,
    },
    {
      q: "How many primary health centers?",
      opts: ["200", "300", "400", "500"],
      ans: 2,
    },
    {
      q: "What is maternal mortality rate?",
      opts: ["100", "200", "300", "400"],
      ans: 1,
    },
    {
      q: "How many registered doctors in Nepal?",
      opts: ["1000", "3000", "5000", "10000"],
      ans: 2,
    },
    {
      q: "What is the main nutritional problem?",
      opts: ["Obesity", "Malnutrition", "Anemia", "All"],
      ans: 2,
    },
    {
      q: "How many medical emergencies daily?",
      opts: ["100", "500", "1000", "5000"],
      ans: 3,
    },
    {
      q: "What percentage have health insurance?",
      opts: ["10%", "20%", "30%", "40%"],
      ans: 1,
    },
    {
      q: "How many mental health clinics?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What is the TB prevalence?",
      opts: ["100", "200", "300", "500"],
      ans: 1,
    },
    {
      q: "How many COVID vaccines administered?",
      opts: ["1M", "5M", "10M", "15M"],
      ans: 2,
    },
    {
      q: "What percentage use herbal medicine?",
      opts: ["20%", "40%", "60%", "80%"],
      ans: 2,
    },
    {
      q: "How many traditional healers in Nepal?",
      opts: ["100", "500", "1000", "5000"],
      ans: 3,
    },
    {
      q: "What is the primary health concern?",
      opts: ["Communicable", "Non-communicable", "Injury", "All"],
      ans: 0,
    },
    {
      q: "How many specialized hospitals?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What percentage use modern medicine?",
      opts: ["30%", "50%", "70%", "90%"],
      ans: 2,
    },
    {
      q: "How many health NGOs operate?",
      opts: ["100", "200", "300", "500"],
      ans: 2,
    },
    {
      q: "What is the diabetes prevalence?",
      opts: ["2%", "4%", "6%", "8%"],
      ans: 1,
    },
    {
      q: "How many blood banks in Nepal?",
      opts: ["20", "40", "60", "100"],
      ans: 2,
    },
    {
      q: "What percentage have clean water?",
      opts: ["50%", "60%", "70%", "80%"],
      ans: 2,
    },
    {
      q: "How many sanitized toilets?",
      opts: ["50%", "60%", "70%", "80%"],
      ans: 2,
    },
    {
      q: "What is the main water-borne disease?",
      opts: ["Cholera", "Typhoid", "Dysentery", "All"],
      ans: 3,
    },
    {
      q: "How many family planning centers?",
      opts: ["500", "1000", "2000", "3000"],
      ans: 2,
    },
    {
      q: "What percentage practice family planning?",
      opts: ["30%", "50%", "70%", "90%"],
      ans: 1,
    },
    {
      q: "How many ambulance services?",
      opts: ["50", "100", "200", "500"],
      ans: 2,
    },
  ];
  healthQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Health & Medicine",
      difficulty: "medium",
    });
  });

  // Travel & Tourism (50)
  const travelQuestions = [
    {
      q: "What is the best trekking season in Nepal?",
      opts: ["Monsoon", "Autumn", "Winter", "Spring"],
      ans: 1,
    },
    {
      q: "Which is the most popular trek?",
      opts: ["EBC", "Annapurna", "Langtang", "Manaslu"],
      ans: 0,
    },
    {
      q: "How many trekking days for Everest Base Camp?",
      opts: ["5", "10", "14", "21"],
      ans: 2,
    },
    {
      q: "What is the altitude of Everest Base Camp?",
      opts: ["3000m", "3500m", "5364m", "5500m"],
      ans: 2,
    },
    {
      q: "Which is the highest tea house trek?",
      opts: ["Everest", "Annapurna", "Langtang", "Manaslu"],
      ans: 0,
    },
    {
      q: "How many trekking permits are issued yearly?",
      opts: ["10K", "50K", "100K", "200K"],
      ans: 2,
    },
    {
      q: "What is the average trekking cost?",
      opts: ["$1000", "$2000", "$3000", "$5000"],
      ans: 1,
    },
    {
      q: "How many porters work in trekking?",
      opts: ["1000", "5000", "10000", "50000"],
      ans: 3,
    },
    {
      q: "What is the best time for paragliding?",
      opts: ["March-May", "June-Sept", "Oct-Nov", "Dec-Feb"],
      ans: 2,
    },
    {
      q: "Where is the paragliding capital?",
      opts: ["Kathmandu", "Pokhara", "Ilam", "Gorkha"],
      ans: 1,
    },
    {
      q: "How many hotels are in Pokhara?",
      opts: ["100", "200", "300", "500"],
      ans: 2,
    },
    {
      q: "What activities are in Pokhara?",
      opts: ["Boating", "Paragliding", "Trekking", "All"],
      ans: 3,
    },
    {
      q: "Which is the sacred lake in Pokhara?",
      opts: ["Phewa", "Begnas", "Rupa", "Indra Sarovar"],
      ans: 0,
    },
    {
      q: "How many UNESCO sites to visit?",
      opts: ["3", "4", "5", "6"],
      ans: 2,
    },
    {
      q: "What is the best WhiteWater rafting season?",
      opts: ["March", "May", "October", "December"],
      ans: 2,
    },
    { q: "How many rafting rivers?", opts: ["5", "10", "15", "20"], ans: 2 },
    {
      q: "What is the duration of Annapurna Circuit?",
      opts: ["5", "10", "15", "21"],
      ans: 3,
    },
    {
      q: "How many camping sites for mountaineering?",
      opts: ["10", "20", "30", "50"],
      ans: 2,
    },
    {
      q: "What is the cost for Everest climb?",
      opts: ["$30K", "$50K", "$70K", "$100K"],
      ans: 2,
    },
    {
      q: "How many Sherpa support Everest?",
      opts: ["50", "100", "200", "500"],
      ans: 3,
    },
    {
      q: "What is the best photography season?",
      opts: ["March", "May", "October", "December"],
      ans: 2,
    },
    {
      q: "How many viewpoints in Kathmandu?",
      opts: ["5", "10", "15", "20"],
      ans: 2,
    },
    {
      q: "What is the sunrise view in Nagarkot?",
      opts: ["Himalayas", "Valley", "City", "Mountains"],
      ans: 0,
    },
    {
      q: "How many hours from Kathmandu to Nagarkot?",
      opts: ["1", "2", "3", "4"],
      ans: 1,
    },
    {
      q: "What is the famous market in Kathmandu?",
      opts: ["Asan", "Durbar", "Thamel", "Lalitpur"],
      ans: 0,
    },
    {
      q: "How many guides are certified in Nepal?",
      opts: ["1000", "3000", "5000", "10000"],
      ans: 2,
    },
    {
      q: "What is the rainy season impact?",
      opts: ["Closed", "Reduced", "Modified", "Full"],
      ans: 2,
    },
    {
      q: "How many tourist information centers?",
      opts: ["5", "10", "15", "20"],
      ans: 1,
    },
    {
      q: "What permits are needed for trekking?",
      opts: ["TIMS", "Visa", "Insurance", "All"],
      ans: 2,
    },
    {
      q: "What is TIMS card validity?",
      opts: ["1 month", "3 months", "1 year", "2 years"],
      ans: 2,
    },
    {
      q: "How many tourist police in Nepal?",
      opts: ["50", "100", "200", "500"],
      ans: 2,
    },
  ];
  travelQuestions.forEach((item) => {
    questions.push({
      id: id++,
      question: item.q,
      options: item.opts,
      correctAnswer: item.ans,
      category: "Travel & Tourism",
      difficulty: "medium",
    });
  });

  return questions;
};

export const quizQuestions = generateQuizQuestions();
