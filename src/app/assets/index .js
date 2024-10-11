import defaultPhoto from '../../assets/images/profile-images/default.jpg'
import img1 from '../../assets/images/profile-images/01.jpg'
import img2 from '../../assets/images/profile-images/02.jpeg'
import img3 from '../../assets/images/profile-images/03.jpg'
import img4 from '../../assets/images/profile-images/04.jpg'
import img5 from '../../assets/images/profile-images/05.jpg'
import img6 from '../../assets/images/profile-images/06.jpg'
import img7 from '../../assets/images/profile-images/07.webp'
import img8 from '../../assets/images/profile-images/08.jpg'
import img9 from '../../assets/images/profile-images/09.jpg'
import img10 from '../../assets/images/profile-images/10.webp'









// Users array
export const users = [

    { id: 1, name: "Mohammed Ali", profilePhoto: img1 },
    { id: 2, name: "Fatima Ahmed", profilePhoto: defaultPhoto },
    { id: 3, name: "Ahmed Hassan", profilePhoto: img2 },
    { id: 4, name: "Layla Mohammed", profilePhoto: img3 },
    { id: 5, name: "Omar Khalid", profilePhoto: defaultPhoto },
    { id: 6, name: "Nour Ali", profilePhoto: img6 },
    { id: 7, name: "Yasmine Ahmed", profilePhoto: img4 },
    { id: 8, name: "Hassan Mohammed", profilePhoto: img5 },
    { id: 9, name: "Sara Hassan", profilePhoto: defaultPhoto },
    { id: 10, name: "Khalid Ahmed", profilePhoto: img3 },
    { id: 11, name: "Lina Mohammed", profilePhoto: img1},
    { id: 12, name: "Mona Ali", profilePhoto: img10 },
    { id: 13, name: "Rami Hassan", profilePhoto: defaultPhoto },
    { id: 14, name: "Sami Mohammed", profilePhoto: defaultPhoto },
    { id: 15, name: "Tarek Ahmed", profilePhoto: defaultPhoto },
    { id: 16, name: "Wael Hassan", profilePhoto: img8 },
    { id: 17, name: "Zain Mohammed", profilePhoto: img9 },
    { id: 18, name: "Aya Ahmed", profilePhoto: defaultPhoto },
    { id: 19, name: "Basem Hassan", profilePhoto: img10},
    { id: 20, name: "Dina Mohammed", profilePhoto: defaultPhoto },
    { id: 21, name: "Hana Ahmed", profilePhoto: defaultPhoto },
    { id: 22, name: "Khalid Hassan", profilePhoto: img7 },
    { id: 23, name: "Lina Mohammed", profilePhoto: defaultPhoto },
    { id: 24, name: "Mona Hassan", profilePhoto: defaultPhoto },
    { id: 25, name: "Rami Ahmed", profilePhoto: img5 },
    { id: 26, name: "Sami Mohammed", profilePhoto: img4 },
    { id: 27, name: "Tarek Hassan", profilePhoto: defaultPhoto },
    { id: 28, name: "Wael Mohammed", profilePhoto: img2 },
    { id: 29, name: "Zain Ahmed", profilePhoto: defaultPhoto },
    { id: 30, name: "Yasmin Khalid", profilePhoto: img6 }

];

import post1 from '../../assets/images/posts-data/post1.jpeg'
import post3 from '../../assets/images/posts-data/post3.webp'
import post5 from '../../assets/images/posts-data/post5.jpg'
import post7 from '../../assets/images/posts-data/post7.jpg'
import post9 from '../../assets/images/posts-data/post9.png'
import post10 from '../../assets/images/posts-data/post10.webp'
import post12 from '../../assets/images/posts-data/post12.jpg'
import post14 from '../../assets/images/posts-data/post14.jpg'
import post17 from '../../assets/images/posts-data/post17.jpeg'
import post19 from '../../assets/images/posts-data/post19.png'
import post20 from '../../assets/images/posts-data/post20.jpg'





// Posts array
export const posts = [
    {
        postId: 1,
        mainPostText: "Just had the best day ever! 🌞",
        comments: [
            { id: 101, user: "Ahmed", content: "Glad to hear that!" },
            { id: 102, user: "Sara", content: "What made it so special?" }
        ],
        likesCount: 15,
        photo: post1,
        publisher: users[0]
    },
    {
        postId: 2,
        mainPostText: "Learning React today, it's challenging but fun!",
        comments: [
            { id: 201, user: "Hassan", content: "Keep it up!" },
            { id: 202, user: "Layla", content: "React is awesome!" }
        ],
        likesCount: 20,
        photo: null,
        publisher: users[1]
    },
    {
        postId: 3,
        mainPostText: "My cat just did the funniest thing!",
        comments: [
            { id: 301, user: "Omar", content: "Tell us more!" },
            { id: 302, user: "Nour", content: "Cats are the best!" }
        ],
        likesCount: 12,
        photo: post3,
        publisher: users[2]
    },
    {
        postId: 4,
        mainPostText: "Real life is sometimes stranger than fiction.",
        comments: [],
        likesCount: 8,
        photo: null,
        publisher: users[3]
    },
    {
        postId: 5,
        mainPostText: "Just finished a new project, very excited!",
        comments: [
            { id: 501, user: "Yasmine", content: "Can't wait to see it!" },
            { id: 502, user: "Ali", content: "Congratulations!" }
        ],
        likesCount: 25,
        photo: post5,
        publisher: users[4]
    },
    {
        postId: 6,
        mainPostText: "Today's programming challenge was tough!",
        comments: [
            { id: 601, user: "Hana", content: "What was the challenge?" },
            { id: 602, user: "Khalid", content: "Keep pushing!" }
        ],
        likesCount: 18,
        photo: null,
        publisher: users[5]
    },
    {
        postId: 7,
        mainPostText: "My dog loves the park!",
        comments: [
            { id: 701, user: "Lina", content: "Dogs are the best!" },
            { id: 702, user: "Mona", content: "What breed is your dog?" }
        ],
        likesCount: 14,
        photo: post7,
        publisher: users[6]
    },
    {
        postId: 8,
        mainPostText: "Real life lessons are the best teachers.",
        comments: [],
        likesCount: 10,
        photo: null,
        publisher: users[7]
    },
    {
        postId: 9,
        mainPostText: "Just learned a new JavaScript framework!",
        comments: [
            { id: 901, user: "Rami", content: "Which one?" },
            { id: 902, user: "Sami", content: "Share your knowledge!" }
        ],
        likesCount: 22,
        photo: post9,
        publisher: users[8]
    },
    {
        postId: 10,
        mainPostText: "My parrot is talking up a storm!",
        comments: [
            { id: 1001, user: "Tarek", content: "What's it saying?" },
            { id: 1002, user: "Wael", content: "Parrots are amazing!" }
        ],
        likesCount: 16,
        photo: post10,
        publisher: users[9]
    },
    {
        postId: 11,
        mainPostText: "Real life is full of surprises.",
        comments: [],
        likesCount: 9,
        photo: null,
        publisher: users[10]
    },
    {
        postId: 12,
        mainPostText: "Just finished a new design project!",
        comments: [
            { id: 1201, user: "Zain", content: "Looks great!" },
            { id: 1202, user: "Aya", content: "What tools did you use?" }
        ],
        likesCount: 24,
        photo: post12,
        publisher: users[11]
    },
    {
        postId: 13,
        mainPostText: "Today's programming session was productive!",
        comments: [
            { id: 1301, user: "Basem", content: "What did you work on?" },
            { id: 1302, user: "Dina", content: "Sounds like a good day!" }
        ],
        likesCount: 19,
        photo: null,
        publisher: users[12]
    },
    {
        postId: 14,
        mainPostText: "My hamster is so cute!",
        comments: [
            { id: 1401, user: "Hana", content: "Post a picture!" },
            { id: 1402, user: "Khalid", content: "Hamsters are adorable!" }
        ],
        likesCount: 13,
        photo: post14,
        publisher: users[13]
    },
    {
        postId: 15,
        mainPostText: "Real life experiences shape who we are.",
        comments: [],
        likesCount: 11,
        photo: null,
        publisher: users[14]
    },
    {
        postId: 16,
        mainPostText: "Just started learning Python!",
        comments: [
            { id: 1601, user: "Lina", content: "Python is great!" },
            { id: 1602, user: "Mona", content: "What resources are you using?" }
        ],
        likesCount: 21,
        photo: null,
        publisher: users[15]
    },
    {
        postId: 17,
        mainPostText: "My fish tank is looking beautiful!",
        comments: [
            { id: 1701, user: "Rami", content: "What kind of fish do you have?" },
            { id: 1702, user: "Sami", content: "Looks amazing!" }
        ],
        likesCount: 17,
        photo: post17,
        publisher: users[16]
    },
    {
        postId: 18,
        mainPostText: "Real life is the best teacher.",
        comments: [],
        likesCount: 12,
        photo: null,
        publisher: users[17]
    },
    {
        postId: 19,
        mainPostText: "Just finished a new coding project!",
        comments: [
            { id: 1901, user: "Tarek", content: "What did you build?" },
            { id: 1902, user: "Wael", content: "Congratulations!" }
        ],
        likesCount: 23,
        photo: post19,
        publisher: users[18]
    },
    {
        postId: 20,
        mainPostText: "My pet snake is so cool!",
        comments: [
            { id: 2001, user: "Zain", content: "What kind of snake?" },
            { id: 2002, user: "Aya", content: "Snakes are fascinating!" }
        ],
        likesCount: 15,
        photo: post20,
        publisher: users[19]
    }
];



export const chats = [
    {
      chatId: "chat-1",
      contact: {
        id: "contact-1",
        name: "Ahmad Al-Farsi",
        fatherName: "Mohammed Al-Farsi",
        profilePhoto:img1,
      },
      sentMessages: [
        "Hey, how have you been?",
        "Did you finish reading that book?",
        "I was thinking about our last trip.",
        "What’s your favorite movie these days?",
        "Are you free to meet this weekend?",
        "Have you seen the latest season of the show?",
        "I'm planning a gathering at my place.",
        "What do you think about the new cafe?",
        "Did you hear about the concert next month?",
        "How's work treating you lately?",
        "Let's catch up soon!",
        "What’s your favorite hobby?",
      ],
      receivedMessages: [
        "I've been great, thanks for asking!",
        "Yes, I just finished it and loved it!",
        "That was such a fun trip!",
        "I really liked that new action movie.",
        "I’m free on Saturday, what time?",
        "Yes, it was amazing!",
        "That sounds fun, count me in!",
        "I really liked it, very cozy!",
        "Yes, I can't wait to go!",
        "Work is busy but good, how about you?",
        "Absolutely, let me know when!",
        "I enjoy painting in my free time.",
      ],
      lastMessageTimestamp: ["3:45 PM", "2023-10-01"],
    },
    {
      chatId: "chat-2",
      contact: {
        id: "contact-2",
        name: "Fatima Al-Sayed",
        fatherName: "Hassan Al-Sayed",
        profilePhoto: img8,
      },
      sentMessages: [
        "Good morning! Did you sleep well?",
        "What are your plans for today?",
        "I just tried a new recipe, it was delicious!",
        "Have you heard back about the job application?",
        "Let’s visit that new art exhibit soon.",
        "How’s your family doing?",
        "What are you currently watching?",
        "You should join my workout class!",
        "What do you think about the weather?",
        "How about a game night this week?",
        "Any recommendations for a good book?",
        "Do you want to join me for a walk?",
      ],
      receivedMessages: [
        "Good morning! I slept really well!",
        "I have a few errands to run today.",
        "I’m glad to hear! I love cooking!",
        "Yes, I got an interview! Fingers crossed!",
        "That sounds great, I’d love to!",
        "They are doing well, thank you!",
        "I'm watching a great series right now!",
        "Sure, I could use some motivation!",
        "It's getting warmer, isn’t it?",
        "I’m in for a game night, sounds fun!",
        "I just read a fantastic mystery novel!",
        "Absolutely, a walk sounds nice!",
      ],
      lastMessageTimestamp: ["2:30 PM", "2023-10-01"],
    },
    {
      chatId: "chat-3",
      contact: {
        id: "contact-3",
        name: "Omar Al-Hassan",
        fatherName: "Salim Al-Hassan",
        profilePhoto: img6,
      },
      sentMessages: [
        "Hey Omar! What’s new?",
        "Are you excited for the vacation?",
        "I stumbled upon those old photos.",
        "What’s your favorite restaurant right now?",
        "Have you started the new project?",
        "Could you help me with my presentation?",
        "Did you catch the game last night?",
        "Let’s go hiking this weekend!",
        "What music do you listen to these days?",
        "How do you feel about the new policy?",
        "Are you still practicing guitar?",
        "What are your plans for the summer?",
      ],
      receivedMessages: [
        "Not much, just the usual!",
        "Absolutely! Can’t wait for it!",
        "Those were some good times!",
        "I love the new Italian place!",
        "I’m just gathering materials, almost ready.",
        "Of course! I’d be happy to help.",
        "Yes, it was an intense match!",
        "Count me in, sounds great!",
        "I’m into indie music lately.",
        "I have mixed feelings about it.",
        "Yes, I’m working on some new songs.",
        "I’m planning to travel a bit!",
      ],
      lastMessageTimestamp: ["1:45 PM", "2023-10-01"],
    },
    {
      chatId: "chat-4",
      contact: {
        id: "contact-4",
        name: "Sara Al-Khalid",
        fatherName: "Youssef Al-Khalid",
        profilePhoto: defaultPhoto,
      },
      sentMessages: [
        "Hi Sara! How’s everything?",
        "Are we still on for the movie?",
        "I need some recommendations for a new show.",
        "I loved that event we attended together!",
        "What’s your favorite dessert?",
        "How’s your new job going?",
        "Did you receive the package?",
        "Let's plan a weekend getaway!",
        "What’s your dream travel destination?",
        "Have you picked up any new hobbies?",
        "How do you unwind after a long day?",
        "What’s the last book you read?",
      ],
      receivedMessages: [
        "Everything’s great, thanks!",
        "Yes, I’m looking forward to it!",
        "I just finished a great crime series!",
        "That was so much fun, we should do it again!",
        "I can’t resist chocolate cake!",
        "It’s been challenging but exciting!",
        "Yes, it finally arrived!",
        "That sounds amazing, I’m in!",
        "I’ve always wanted to visit Japan!",
        "I started painting again, it’s relaxing.",
        "I like to listen to music to unwind.",
        "The last book was a fantastic thriller!",
      ],
      lastMessageTimestamp: ["12:30 PM", "2023-10-01"],
    },
    {
      chatId: "chat-5",
      contact: {
        id: "contact-5",
        name: "Khaled Al-Mansoor",
        fatherName: "Farid Al-Mansoor",
        profilePhoto: img8,
      },
      sentMessages: [
        "Hey Khaled! Any fun plans this week?",
        "I wanted to check on your health.",
        "What’s the latest news in your life?",
        "I found a cozy spot we should try!",
        "Did you hear about the festival next month?",
        "Are you still working on that project?",
        "I just got back from an amazing trip!",
        "What’s your go-to workout these days?",
        "How do you celebrate your birthday?",
        "Have you seen the new car models?",
        "What’s your guilty pleasure snack?",
        "How do you like to relax on weekends?",
      ],
      receivedMessages: [
        "Not much, just catching up on work!",
        "I appreciate it! I'm doing well.",
        "Things are good, just busy with work.",
        "That would be great to check out!",
        "Yes, I can’t wait for it!",
        "Yes, I’m almost done with it!",
        "That sounds great! Tell me more!",
        "I've started jogging in the mornings.",
        "I usually have a small party with friends.",
        "I’m interested in them, they look sleek!",
        "Chocolate chip cookies for sure!",
        "I love to read or watch movies.",
      ],
      lastMessageTimestamp: ["11:00 AM", "2023-10-01"],
    },
    {
      chatId: "chat-6",
      contact: {
        id: "contact-6",
        name: "Layla Al-Zayed",
        fatherName: "Omar Al-Zayed",
        profilePhoto: img1,
      },
      sentMessages: [
        "Hi Layla! How’s your week going?",
        "Have you tried that new restaurant?",
        "What are your thoughts on the latest book club pick?",
        "Let’s do a weekend brunch!",
        "I need your fashion advice!",
        "What’s the most exciting thing you did recently?",
        "How's your dog doing?",
        "Did you see my last Instagram post?",
        "Are you interested in going to the beach?",
        "What do you think about the current trends?",
        "How do you stay organized?",
        "What’s your favorite type of coffee?",
      ],
      receivedMessages: [
        "It’s going well, thanks!",
        "Yes, it was fantastic!",
        "I really enjoyed it, great choice!",
        "Yes! I’m in for brunch!",
        "Sure! Send me a picture!",
        "I went hiking last weekend, it was amazing!",
        "He’s doing great, full of energy!",
        "Yes, I loved it!",
        "Absolutely! Let’s plan it!",
        "I think some trends are amazing!",
        "I use a planner and apps for that.",
        "I love cappuccinos!",
      ],
      lastMessageTimestamp: ["10:15 AM", "2023-10-01"],
    },
    {
      chatId: "chat-7",
      contact: {
        id: "contact-7",
        name: "Nadia Al-Husaini",
        fatherName: "Saeed Al-Husaini",
        profilePhoto: defaultPhoto,
      },
      sentMessages: [
        "Nadia! What’s happening in your life?",
        "Are you still practicing yoga?",
        "Have you tried the new smoothie place?",
        "What’s your go-to comfort food?",
        "Are we on for our book club this month?",
        "How do you handle stress?",
        "I’ve been thinking about learning a new language.",
        "What’s your favorite movie genre?",
        "When’s the last time you traveled?",
        "How’s your family adjusting to the new city?",
        "What’s a skill you wish you had?",
        "Let’s plan a game night soon!",
      ],
      receivedMessages: [
        "Not much, just the usual work!",
        "Yes, I’m loving it!",
        "Not yet, but I want to check it out!",
        "I love pizza and ice cream!",
        "Absolutely, I’m excited for it!",
        "I try to meditate and exercise.",
        "That sounds interesting, I’d join you!",
        "I love thrillers and dramas.",
        "I traveled last year, it was great!",
        "They are settling in well, thank you!",
        "I wish I could play the guitar!",
        "I’m in! Sounds like fun.",
      ],
      lastMessageTimestamp: ["9:45 AM", "2023-10-01"],
    },
    {
      chatId: "chat-8",
      contact: {
        id: "contact-8",
        name: "Rami Al-Najjar",
        fatherName: "Khalid Al-Najjar",
        profilePhoto: img1,
      },
      sentMessages: [
        "What’s up Rami? How’s life?",
        "Are you still painting?",
        "Did you enjoy the last match?",
        "What’s your plan for the holidays?",
        "Let’s hit the gym together!",
        "Have you read any interesting articles lately?",
        "What’s your dream job?",
        "What hobbies are you exploring right now?",
        "What’s your favorite way to relax?",
        "How often do you travel?",
        "What’s a memorable experience you’ve had?",
        "How do you stay motivated?",
      ],
      receivedMessages: [
        "Hey! Life is good, how about you?",
        "Yes! I recently finished a big piece.",
        "It was exciting, enjoyed every moment!",
        "I’m thinking of a short trip somewhere.",
        "Totally! Let’s set a time.",
        "I came across a fascinating one on psychology.",
        "I’d love to be an artist!",
        "I enjoy photography and hiking.",
        "I love listening to music or reading.",
        "I try to travel once a year.",
        "I went skydiving last year, it was epic!",
        "I keep setting goals and pushing forward.",
      ],
      lastMessageTimestamp: ["8:30 AM", "2023-10-01"],
    },
    {
      chatId: "chat-9",
      contact: {
        id: "contact-9",
        name: "Mona Al-Mahdi",
        fatherName: "Amin Al-Mahdi",
        profilePhoto: img3,
      },
      sentMessages: [
        "Hello Mona! How are you doing?",
        "Have you started any new projects?",
        "I’m excited about the upcoming event!",
        "What are your favorite podcasts?",
        "Can we schedule a coffee catch-up soon?",
        "How do you celebrate special occasions?",
        "What’s a movie you recommend?",
        "How’s your garden coming along?",
        "What’s your favorite season and why?",
        "Any travel plans for the year?",
        "What’s been your biggest achievement lately?",
        "How do you handle work-life balance?",
      ],
      receivedMessages: [
        "I’m doing well, thanks for asking!",
        "Yes, I’m working on a new design project!",
        "Me too! It’s going to be amazing!",
        "I love listening to true crime podcasts.",
        "Absolutely! Looking forward to it!",
        "I like to throw small get-togethers!",
        "I highly recommend that romantic comedy!",
        "It’s growing beautifully, thank you!",
        "I love autumn, the colors are stunning!",
        "Thinking of a beach trip in the summer.",
        "I finally completed a major milestone at work!",
        "I try to set boundaries and take breaks.",
      ],
      lastMessageTimestamp: ["7:15 AM", "2023-10-01"],
    },
    {
      chatId: "chat-10",
      contact: {
        id: "contact-10",
        name: "Samir Al-Badri",
        fatherName: "Ziad Al-Badri",
        profilePhoto: defaultPhoto,
      },
      sentMessages: [
        "Hey Samir! What’s new with you?",
        "Are you still playing football?",
        "What are your thoughts on the last game?",
        "How do you usually celebrate your birthday?",
        "What’s a great place to eat in town?",
        "Did you hear the latest music release?",
        "What hobbies are you into?",
        "How's your family?",
        "What’s the last concert you attended?",
        "Do you keep up with any series?",
        "What’s a life lesson you’ve learned recently?",
        "How do you stay fit?",
      ],
      receivedMessages: [
        "Hey! Not much, just busy with work.",
        "Yes! I play every weekend.",
        "It was thrilling! Can't wait for the finals.",
        "I like to have a small gathering with friends.",
        "I love the new Italian place!",
        "Yes, I’m loving the latest album!",
        "I enjoy cycling and photography.",
        "They are all good, thank you!",
        "I went to that big one last month!",
        "I watched that series, really good!",
        "I’ve learned to take things one at a time.",
        "I try to hit the gym three times a week.",
      ],
      lastMessageTimestamp: ["6:00 AM", "2023-10-01"],
    },
    {
      chatId: "chat-11",
      contact: {
        id: "contact-11",
        name: "Zainab Al-Khalifa",
        fatherName: "Faisal Al-Khalifa",
        profilePhoto: img4,
      },
      sentMessages: [
        "Hi Zainab! What’s up?",
        "What’s your latest DIY project?",
        "Have you watched any good movies lately?",
        "What’s your idea of a perfect day?",
        "Are you planning to attend the seminar?",
        "What kind of music do you love?",
        "What’s your hidden talent?",
        "How’s your writing going?",
        "What’s on your reading list?",
        "How do you usually celebrate New Year’s?",
        "What’s your favorite outdoor activity?",
        "What inspires you?",
      ],
      receivedMessages: [
        "Hi! Just the usual, working on my projects.",
        "I just finished making a wooden shelf!",
        "I saw a great documentary recently!",
        "A perfect day involves nature and friends!",
        "Yes, I’m planning to go!",
        "I love classical and jazz music!",
        "I can bake really well!",
        "It’s going well, thank you!",
        "I’m hoping to read some self-help books.",
        "I like to have a family dinner!",
        "I enjoy hiking and cycling.",
        "Life experiences and art inspire me.",
      ],
      lastMessageTimestamp: ["5:30 AM", "2023-10-01"],
    },
    {
      chatId: "chat-12",
      contact: {
        id: "contact-12",
        name: "Amina Al-Rahman",
        fatherName: "Jamal Al-Rahman",
        profilePhoto: img1,
      },
      sentMessages: [
        "Amina! How’s your day going?",
        "What’s your favorite cuisine these days?",
        "Did you find the time to relax this week?",
        "What’s something new you’ve learned?",
        "How are your pets doing?",
        "What do you love about your job?",
        "What’s a goal you’re currently pursuing?",
        "Have you read any good articles lately?",
        "What’s your favorite way to spend a Saturday?",
        "How do you stay connected with friends?",
        "Are you a morning or night person?",
        "What motivates you every day?",
      ],
      receivedMessages: [
        "It’s going well, thank you for asking!",
        "I’m loving Italian food these days!",
        "I managed to squeeze in some downtime!",
        "I learned a new recipe, it was fun!",
        "They are doing well, full of energy!",
        "I enjoy the creativity of it!",
        "I’m working on my fitness goals!",
        "Yes, I read a fascinating one on psychology!",
        "I love to relax at home with a book or movie.",
        "I try to check in with everyone regularly.",
        "Definitely a night person!",
        "My passion for learning keeps me going.",
      ],
      lastMessageTimestamp: ["4:00 AM", "2023-10-01"],
    },
  ];
  
  console.log(chats);
  
  
  console.log(chats);
  