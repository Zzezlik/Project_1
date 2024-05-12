// const video = document.querySelector(".video");
// const img = document.querySelector(".image");
// const stream = document.querySelector(".stream");
//
// console.dir(img)
// console.dir(video)
// const getUserVideo = async i => {
//     try {
//         const videoe = await navigator.mediaDevices.getUserMedia({video: true});
//         video.srcObject = videoe;
//         console.dir(videoe)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getUserVideo()
//
// const getUserControl = async () => {
//     try {
//         const test = await navigator.mediaDevices
//         const displaye = await navigator.mediaDevices.getDisplayMedia({video: { width: 480, height: 280 },});
//         stream.srcObject = displaye;
//         console.dir(displaye)
//         console.dir(test)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getUserControl()