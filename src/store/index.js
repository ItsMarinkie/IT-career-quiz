import { createStore } from 'vuex';

export default createStore({
    state: {
        questions: [
            {
                id: 1,
                text: 'What do you enjoy doing the most?',
                options: ['Coding', 'Designing', 'Managing', 'Testing'],
            },
            {
                id: 2,
                text: 'Which environment do you prefer?',
                options: ['Office', 'Remote', 'Flexible'],
            },
            {
                id: 3,
                text: 'Which environment do you prefer?',
                options: ['Office', 'Remote', 'Flexible'],
            },
            {
                id: 4,
                text: 'Which environment do you prefer?',
                options: ['Office', 'Remote', 'Flexible'],
            },

            // Add more questions here
        ],
        answers: {},
        result: '',
        careers: ['Developer', 'Designer', 'Manager'],
        scoring: {
            'Coding': { 'Developer': 3, 'Designer': 1, 'Manager': 0 },
            'Designing': { 'Developer': 1, 'Designer': 3, 'Manager': 0 },
            'Managing': { 'Developer': 0, 'Designer': 1, 'Manager': 3 },
            'Office': { 'Developer': 1, 'Designer': 1, 'Manager': 3 },
            'Remote': { 'Developer': 3, 'Designer': 2, 'Manager': 1 },
            'Flexible': { 'Developer': 2, 'Designer': 2, 'Manager': 2 },
            // Add more scoring here
        },
    },
    mutations: {
        ANSWER_QUESTION(state, { questionId, answer }) {
            state.answers[questionId] = answer;
        },
        SET_RESULT(state, result) {
            state.result = result;
        },
    },
    actions: {
        answerQuestion({ commit }, payload) {
            commit('ANSWER_QUESTION', payload);
        },
        submitQuiz({ state, commit }) {
            const scores = {
                'Developer': 0,
                'Designer': 0,
                'Manager': 0,
            };

            // Calculate the scores based on the answers
            Object.values(state.answers).forEach(answer => {
                const score = state.scoring[answer];
                for (const career in scores) {
                    if (score[career] !== undefined) {
                        scores[career] += score[career];
                    }
                }
            });

            // Determine the career with the highest score
            let result = '';
            let maxScore = -1;
            for (const career in scores) {
                if (scores[career] > maxScore) {
                    maxScore = scores[career];
                    result = career;
                }
            }

            commit('SET_RESULT', result);
        },
    },
    getters: {
        // Add any getters if necessary
    },
});
