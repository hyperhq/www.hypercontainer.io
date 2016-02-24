import 'font-awesome/css/font-awesome.css';
require('./normalize.css');
require('./index.css');

// document.addEventListener("DOMContentLoaded", function() {
//     let playBtn = document.getElementById('play');
//     let video = document.getElementById('video');
//     video.pause();
//     let hashChange = function() {
//         if (location.hash != "#intro") {
//             video.pause();
//             playBtn.className = 'button';
//         }
//     }
//     playBtn.addEventListener('click', function(event) {
//         video.play();
//         playBtn.className = 'button loading';
//         event.preventDefault();
//         event.stopPropagation();
//     });
//     video.addEventListener('click', function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//     });
//     window.addEventListener('hashchange', hashChange);
//     video.addEventListener('play', function(event) {
//         window.location.hash = "#intro";
//     });
//     video.addEventListener('dblclick', function(event) {
//         if (this.requestFullscreen) {
//             this.requestFullscreen();
//         } else if (this.mozRequestFullScreen) {
//             this.mozRequestFullScreen();
//         } else if (this.webkitRequestFullscreen) {
//             this.webkitRequestFullscreen();
//         }
//     });
//     hashChange();
// });
