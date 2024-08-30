export const questions = [
    {
        text: 'What type of projects do you enjoy working on the most?',
        options: ['Web development', 'Data analysis', 'System automation', 'Networking'],
        mapping: {
            'Web development': 'front-end-developer',
            'Data analysis': 'data-scientist',
            'System automation': 'devops-engineer',
            'Networking': 'network-engineer',
        }
    },
    // Add more questions as needed
];

export const quizzes = [
    {
        id: 'front-end-developer',
        title: 'Front-End Developer Quiz',
        questions: [
            'What is your experience with HTML/CSS?',
            'How familiar are you with JavaScript frameworks like Vue or React?',
            // Add more questions
        ]
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist Quiz',
        questions: [
            'What is your experience with data analysis tools like Python or R?',
            'How familiar are you with machine learning algorithms?',
            // Add more questions
        ]
    },
    // Add more quizzes as needed
];
