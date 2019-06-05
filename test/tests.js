import { app } from '../src/services/firebase.js'; 
import './html-equal.js';
import './Profile.test.js';
// // individual test files...
// import './whatever.test.js';
QUnit.done(() => {
    app.delete();
}); 