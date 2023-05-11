import { Router } from './router.js';

const homeButton = document.getElementById("home-button");
// const buttonLearn = document.getElementById("button-learn");
const router = new Router();          

router.add('/', '/pages/home.html', true);
router.add('/universe', '/pages/universe.html');
router.add('/explorer', '/pages/explorer.html');
router.add(404, '/pages/404.html');
                
router.handle();

// buttonLearn.addEventListener('click', () => {
//     router.route('/universe');
// })

// homeButton.addEventListener('click', () => {
//     router.route({target: {href: '/'}});
// });
                
window.onpopstate = () => router.handle();
window.route = () => router.route();

