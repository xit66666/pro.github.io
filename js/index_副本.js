// 通用滑动出现动画配置项（const 名字自定义）
const staggeringOption = {
    // 延迟300毫秒
    delay: 300,
    // 移动20px
    distance: "20px",
    // 持续时间800毫秒
    duration: 800,
    // 变量函数
    easing: "ease-in-out",
    // 从上到下，如果是left就是从左到右
    origin: "top",
    // 重复多次
    // reset:true,
 };
// ScrollReveal().reveal("需要动的类名", { 引入上方通用配置名字，interval设置等待时间 });
ScrollReveal().reveal(".show", { ...staggeringOption ,interval:300,});

// --------------------------------------3d表情动画-----------------------------------

// 3d表情视差滚动
// 监听emoji
const dataSectionEl = document.querySelector(".emoji");
window.addEventListener("scroll",()=>{
    // 获取div底部到视窗顶部的高度
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    // 获取div顶部到视窗顶部的高度
    const top = dataSectionEl.getBoundingClientRect().top;
    // 获取屏幕高度
    const windowInnerHeight = window.innerHeight;
    // 获取屏幕宽度
    const width = window.innerWidth;
    // console.log("bottom:",bottom)
    // console.log("top:",top)
    // console.log("value:",(windowInnerHeight - top)/windowInnerHeight*80)
    // if (top <= 361)
    if (bottom >= 0 && top <= window.innerHeight && width >= 769){
        // dataSectionEl.classList.add('show')
        dataSectionEl.style.right=80 + (windowInnerHeight - top)/windowInnerHeight*100 + 'px';
    }
    else{
        dataSectionEl.style.right=-50 + (windowInnerHeight - top)/windowInnerHeight*100 + 'px';
    }   
})

// 3d靶子动画
const targets = document.querySelector(".target");
window.addEventListener("scroll",()=>{
    // 获取div底部到视窗顶部的高度
    const bottom = targets.getBoundingClientRect().bottom;
    // 获取div顶部到视窗顶部的高度
    const top = targets.getBoundingClientRect().top;
    const windowInnerHeight = window.innerHeight;
    const width = window.innerWidth;
    if (bottom >= 0 && top <= window.innerHeight && width >= 769){
        targets.style.left= 300 + (windowInnerHeight - top)/windowInnerHeight*70 + 'px';
    }
    else{
        targets.style.left=150 + (windowInnerHeight - top)/windowInnerHeight*100 + 'px';
    }   
})

// 3d钢笔动画
const pen = document.querySelector(".pen");
window.addEventListener("scroll",()=>{
    // 获取div底部到视窗顶部的高度
    const bottom = pen.getBoundingClientRect().bottom;
    // 获取div顶部到视窗顶部的高度
    const top = pen.getBoundingClientRect().top;
    const windowInnerHeight = window.innerHeight;
    const width = window.innerWidth;
    if (bottom >= 0 && top <= window.innerHeight && width >= 769){
        pen.style.top=100 + (windowInnerHeight - top)/windowInnerHeight*60 + 'px';
    }
    else{
        pen.style.top=-30 + (windowInnerHeight - top)/windowInnerHeight*70 + 'px';

    } 

})


// 作品分类淡入动画
const design = document.querySelector(".item-1");
window.addEventListener("scroll",()=>{
    // 获取div顶部到视窗顶部的高度
    const top = design.getBoundingClientRect().top;
    // 获取屏幕高度
    const windowInnerHeight = window.innerHeight;
    if (top<= 769){
        design.classList.add('fade-in')
    }
})

const design2 = document.querySelector(".item-2");
window.addEventListener("scroll",()=>{
    // 获取div顶部到视窗顶部的高度
    const top = design2.getBoundingClientRect().top;
    // 获取屏幕高度
    const windowInnerHeight = window.innerHeight;
    if (top<= 769){
        design2.classList.add('fade-in')
    }
})

const design3 = document.querySelector(".item-3");
window.addEventListener("scroll",()=>{
    // 获取div顶部到视窗顶部的高度
    const top = design3.getBoundingClientRect().top;
    // 获取屏幕高度
    const windowInnerHeight = window.innerHeight;
    if (top<= 769){
        design3.classList.add('fade-in')
    }
})

const design4 = document.querySelector(".work-experience");
window.addEventListener("scroll",()=>{
    // 获取div顶部到视窗顶部的高度
    const top = design4.getBoundingClientRect().top;
    // 获取屏幕高度
    const windowInnerHeight = window.innerHeight;
    if (top<= 769){
        design4.classList.add('fade-in')
    }
})

const design5 = document.querySelector(".img-roll");
window.addEventListener("scroll",()=>{
    // 获取div顶部到视窗顶部的高度
    const top = design5.getBoundingClientRect().top;
    // 获取屏幕高度
    const windowInnerHeight = window.innerHeight;
    if (top<= 769){
        design5.classList.add('fade-in')
    }
})

// const design6 = document.querySelector(".img-roll");
// window.addEventListener("scroll",()=>{
//     // 获取div顶部到视窗顶部的高度
//     const top = design6.getBoundingClientRect().top;
//     // 获取屏幕高度
//     const windowInnerHeight = window.innerHeight;
//     if (top<= 769){
//         design6.classList.add('fade-in')
//     }
// })







// ---------------------------------图片向右滚动动画-----------------------------------
// 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）
let ul=document.querySelector('.scroll-right');
ul.innerHTML=ul.innerHTML+ul.innerHTML;

// // 获取所有的li元素
// let lis=document.querySelectorAll('.right-list');
// // 每次滚动的跨度（正数向右，负数向左，默认向左滚动）
// let spa=2;
// // 计算并设置ul的总宽度
// ul.style.width=lis[0].offsetWidth*lis.length+'px';

// // 滚动函数
// function move(){
//     if(ul.offsetLeft < -ul.offsetWidth/2){
//         // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
//         ul.style.left='0';
//     }
//     if(ul.offsetLeft > 0){
//         // 向右走时，判断图片是否走完
//         ul.style.left=-ul.offsetWidth/2+'px';
//     }
//     // 设置偏移位置
//     ul.style.left=ul.offsetLeft+spa+'px';
// }

// // 定时器，每30毫秒执行一次move函数
// let timer=setInterval(move,30);

// // 为ul绑定事件，悬停停止，移开滚动
// ul.addEventListener('mousemove',function(){
//     clearInterval(timer);
// })
// ul.addEventListener('mouseout',function(){
//     timer=setInterval(move,30);
// })


// ---------------------------------图片向左滚动动画-----------------------------------
let left=document.querySelector('.scroll-left');
left.innerHTML=left.innerHTML+left.innerHTML;

// ---------------------------------文字向左滚动动画-----------------------------------
let roll=document.querySelector('.roll');
roll.innerHTML=roll.innerHTML+roll.innerHTML+roll.innerHTML;






