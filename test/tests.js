import { app } from '../src/services/firebase.js'; 
import './html-equal.js';
// // individual test files...
// import './whatever.test.js';
import './Profile.test.js';
import './movie-detail.test.js';
QUnit.done(() => {
    app.delete();
}); 