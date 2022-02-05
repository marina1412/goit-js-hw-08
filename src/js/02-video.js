import throttle from 'lodash/throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
};

const current_time = localStorage.getItem(STORAGE_KEY);

current_time ? player.setCurrentTime(JSON.parse(current_time)) : player.setCurrentTime(0.00);

player.on('timeupdate', throttle(onPlay, 1000));

