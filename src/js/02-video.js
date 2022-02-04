import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
    console.log(data.seconds)
};

const current_time = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(JSON.parse(current_time));

player.on('timeupdate', throttle(onPlay, 1000));

