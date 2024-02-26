const app = document.getElementById('app');
let clickerGameInterval;

const model = {
    app: {
        loggedInUser: null,
        currentPage: 'loginPage',
        displayMode: 'dark',
        language: 'no',
        logo: null,
    },
    inputs: {
        user: {
            id: '',
            displayName: '',
            username: '',
            password: '',
            email: '',
            profileImage: '',
            isAdmin: false,
            description: "",
            toDoAppTasks: [],
            clickerGame: { 
                interval: 0,
                points: 0,
                upgradeClicker: 1,
                clickerLevel: 1,
                idleClicker1: 0,
                idleClicker2: 0,
                idleClicker3: 0,
            },
        },
    },
    // Data
    data: {
        users: [
            // Dummy User for easy access:
            {
                id: 1,
                displayName: 'DummyDude',
                username: '',
                password: '',
                email: '',
                profileImage: './img/profileImg/emptyUser.jpg',
                isAdmin: false,
                description: "Testing",
                toDoAppTasks: [],
                clickerGame: { 
                    interval: 0,
                    points: 0,
                    upgradeClicker: 1,
                    clickerLevel: 1,
                    idleClicker1: 0,
                    idleClicker2: 0,
                    idleClicker3: 0,
                },
            },
            // Other Users:
            {
                id: 666,
                displayName: 'Succubus',
                username: 'Ellie',
                password: '1234',
                email: 'elliemarie@getacademy.no',
                profileImage: './img/profileImg/emptyUser.jpg',
                isAdmin: true,
                description: "Ellie is the best ever!",
                toDoAppTasks: [],
                clickerGame: { 
                    interval: 0,
                    points: 0,
                    upgradeClicker: 1,
                    clickerLevel: 1,
                    idleClicker1: 0,
                    idleClicker2: 0,
                    idleClicker3: 0,
                },
            },
        ],
    }
}

