let imagesLink=[
    'https://s27.q4cdn.com/708721433/files/images/2020/home-slider-1.png',
    'https://s27.q4cdn.com/708721433/files/images/2020/home-slider-2.png',
    'https://s27.q4cdn.com/708721433/files/images/2020/home-slider-3.png',
]
let para = [
    'The Expedia Group platform makes over 600 billion AI predictions a year.',
    'Expedia Group has 200+ websites in 70+ countries.',
    'The Expedia Group Conversations Platform hosts over 20 million virtual conversations annually.',
]
let leftBtn = document.getElementById('left_btn');
let rightBtn = document.getElementById('right_btn');
let slide_image = document.getElementById('slide_image');
let paraSlide = document.getElementById('slide_para');
let paraState = 0;
let imageState=0;
rightBtn.addEventListener("click", function(){
    imageState++;
    paraState++;
    if(imageState === imagesLink.length){
        imageState = 0;
    };
    if(paraState === para.length){
        paraState = 0;
    }
    slide_image.src = imagesLink[imageState];
    paraSlide.innerText = para[paraState];
});
leftBtn.addEventListener("click", function(){
    imageState--;
    paraState--;
    if(imageState<0){
        imageState = imagesLink.length-1;
    };
    if(paraState<0){
        paraState = para.length-1;
    };
    slide_image.src = imagesLink[imageState];
    paraSlide.innerText = para[paraState];
});