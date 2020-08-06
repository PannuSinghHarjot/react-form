const videoGrid = document.getElementById('video-grid') 

const myVideo = document.createElement('video')
let myVideoStream;
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})

const addVideoStream = (video, stream) => {
        video.srcObject = stream;
        video.addEventListener('loadedmetadata', () => {
            video.play()
        });

        videoGrid.append(video)
}