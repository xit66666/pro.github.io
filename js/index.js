// 首页动效
gsap.from('.show', {
    y: -30,
    scale:1.05,
    duration: 1,
    ease: 'power1.out',
});
gsap.from('.show2', {
    y: -30,

    duration: 1,
    delay:0.2,
    ease: 'power1.out',
});


// -----------------------------------放大淡入--------------------------------

//工作经历
ScrollTrigger.create({
    trigger:'.banner-information',// 触发对象
    start:'top top',//开始位置
    end:'+=1',//结束位置
    // markers:true,
    animation:
    gsap.from('.work-experience',{ scale:0.97,duration: 0.8,opacity: 0,ease: 'power1.out',})

});
ScrollTrigger.create({
    trigger:'personal',// 触发对象
    start:'top top',//开始位置
    end:'+=1',//结束位置
    // markers:true,
    animation:
    gsap.timeline()
    .from('.skill-tag',{ y:-50,x:20,rotation:30,opacity:0,scale:0.8,duration: 0.5, delay:0.6,stagger:0.6})
    .to('.download-button',{ rotation:4,duration: 0.3,yoyo:true,repeat:3 })
    .to('.download-button',{ rotation:0,duration: 0.2, })
});
//目录
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





//----------------------------------3d设计滚动效果-------------------------------

ScrollTrigger.create({
    trigger:'.design-3d',// 触发对象
    start:'top top',//开始位置
    end:'+=1300',//结束位置
    // markers:true,
    scrub:true,//随着鼠标上下滚动显示出现
    pin:true,
    animation:
    gsap.to('.lists-3d',{ x:-500,duration: 20,else:'power1.out',})

});

ScrollTrigger.create({
    trigger:'.content-items',// 触发对象
    start:'top top',//开始位置
    end:'+=10',//结束位置
    markers:true,
    animation:
    gsap.timeline()
    .from('.text-left',{ x: -100,duration: 1,ease: 'power1.out',})
    .from('.en-right',{ x: 100,duration: 1,ease: 'power1.out',},"<")
    // .from('.metal',{opacity:0,duration: 1,ease: 'power1.out',})
    
});

// 图片滚动淡入效果
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

// banner绿色标签

ScrollTrigger.create({
    trigger:'.banner',// 触发对象
    start:'top top',//开始位置
    end:'+=200',//结束位置
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,//到end之前是固定的，end之后开始走
    animation:
    gsap.to('.banner-label',{ rotation:-2,duration: 1,ease: 'power3.inout',})

});

ScrollTrigger.create({
    trigger:'.banner',// 触发对象
    start:'top top',//开始位置
    end:'+=200',//结束位置
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,//到end之前是固定的，end之后开始走
    animation:
    gsap.to('.gif-container',{ y: 15,duration: 2,ease: 'power3.inout',})
});

// -----------------------------------emoji动效--------------------------------------
ScrollTrigger.create({
    trigger:'.banner',// 触发对象
    start:'top',//开始位置
    end:'+=2000',//结束位置
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,//到end之前是固定的，end之后开始走
    animation:
    gsap.to('.emoji',{ x: -100,duration: 1,ease: 'power3.inout',})

});

ScrollTrigger.create({
    trigger:'.work-experience',// 触发对象
    start:'top top',//开始位置
    end:'+=2000',//结束位置
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,//到end之前是固定的，end之后开始走
    animation:
    gsap.to('.target',{ x: 60,duration: 2,ease: 'power3.inout',})
});

ScrollTrigger.create({
    trigger:'.design-3d',// 触发对象
    start:'top top',//开始位置
    end:'+=5000',//结束位置
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,//到end之前是固定的，end之后开始走
    animation:
    gsap.to('.pen',{ y: 100,duration: 2,ease: 'power3.inout',})
});



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


// -------------首页banner4个小元素

const gifImage = document.getElementById('gifImage');
const staticImageSrc = '../img/index/gif/方形-statistic.png'; // 静态图片的路径
const gifImageSrc = '../img/index/gif/方形gif.png'; // GIF图片的路径

gifImage.addEventListener('mouseenter', function() {
  // 鼠标进入时播放GIF
  gifImage.src = gifImageSrc;
});

gifImage.addEventListener('mouseleave', function() {
  // 鼠标离开时重置GIF（通过先设置为静态图片再切换回GIF来实现刷新）
  gifImage.src = staticImageSrc;
  setTimeout(() => {
    gifImage.src = gifImageSrc;
  }, 10); // 短暂的延迟，确保浏览器有时间处理图片更换
});