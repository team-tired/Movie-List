const config = {
    apiKey: 'AIzaSyCoEHEjb87b2VF8p9JVPFZ2zrNOKL5C_MY',
    authDomain: 'watchy-things.firebaseapp.com',
    databaseURL: 'https://watchy-things.firebaseio.com',
    projectId: 'watchy-things',
    storageBucket: '',
    messagingSenderId: '127456624729',
    appId: '1:127456624729:web:595d7370dda355d9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();