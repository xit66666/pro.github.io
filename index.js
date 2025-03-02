

// 首页动效

// 通用滑动出现动画配置项（const 名字自定义）
const staggeringOption = {
    // 延迟200毫秒
    delay: 200,
    // 移动20px
    distance: "20px",
    // 持续时间800毫秒
    duration: 800,
    // 变量函数
    easing: "ease-in-out",
    // 从上到下，如果是left就是从左到右
    origin: "bottom",
    // 重复多次
    // reset:true,
 };
// ScrollReveal().reveal("需要动的类名", { 引入上方通用配置名字，interval设置等待时间 });
ScrollReveal().reveal(".show", { ...staggeringOption ,interval:100,});
ScrollReveal().reveal(".show2", { ...staggeringOption ,interval:100,delay: 300,});
ScrollReveal().reveal(".show3", { ...staggeringOption ,interval:100,delay: 300,});
// ScrollReveal().reveal(".img-roll", { ...staggeringOption ,interval:300,scale: 0.99,duration: 800,distance: "10px",});
ScrollReveal().reveal(".tips", { ...staggeringOption ,origin: "right", delay:1000,reset:true,});



// ------------------------------------首页---------------------------------

ScrollTrigger.create({
    trigger:'.banner',// 触发对象
    start:'top top',//开始位置
    end:'+=2100',//结束位置
    markers:true,//显示位置标记
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,
    animation:
    gsap.timeline()
    .to('.smile',{ x: -1300,y: -500,rotation:-70,duration: 5,scale:1.2,ease: 'power1.out',})
    .to('.lamp',{ x: 1500,y: 400,rotation:360,duration: 5,scale:1.2,ease: 'power1.out',},"<")
    .to('.imagination',{ x: -1500,y: 300,rotation:360,duration: 5,scale:1.2,ease: 'power1.out',},"<")
    .to('.creativity',{ x: 1500,y: -300,rotation:360,duration: 5,scale:1.2,ease: 'power1.out',},"<")
    .to('.design-lable',{ x: 1300,y: 50,rotation:360,duration: 5,scale:1.2,ease: 'power1.out',},"<")
    .to('.design-pen',{ x: -800,y: 30,rotation:360,duration: 5,scale:1.2,ease: 'power1.out',},"<")
    // .to('.sprite1',{ x: 300,y: 80,duration: 1,ease: 'power1.out',},"<")
    // .to('.sprite2',{ x: -300,y: 80,duration: 1,ease: 'power1.out',},"<")
    // .to('.sprite3',{ x: -300,y: -80,duration: 1,ease: 'power1.out',},"<")
    // .to('.sprite4',{ x: 300,y: -80,duration: 1,ease: 'power1.out',},"<")

});
//-------------首页banner4个小元素

  // 获取div元素
  var myDiv = document.getElementById('sprite1');
  // 获取div的宽度
  var divWidth = myDiv.offsetWidth;

document.addEventListener('DOMContentLoaded', function() {
    const sprites = document.querySelectorAll('.sprite-container');
  
    sprites.forEach(sprite => {
        const frames = parseInt(sprite.getAttribute('data-frames'), 10);
        const spriteImage = sprite.getAttribute('data-sprite');
        const frameWidth = divWidth; // Adjust to your frame width
        let currentFrame = 0;
        let interval;
        let playingForward = true;
  
        sprite.style.backgroundImage = `url('${spriteImage}')`;
  
        function updateFrame() {
            sprite.style.backgroundPositionX = `-${currentFrame * frameWidth}px`;
        }
  
        function animateSprite() {
            if (playingForward) {
                currentFrame++;
                if (currentFrame >= frames) {
                    currentFrame = frames - 1;
                    clearInterval(interval);
                    return;
                }
            } else {
                currentFrame--;
                if (currentFrame < 0) {
                    currentFrame = 0;
                    clearInterval(interval);
                    return;
                }
            }
            updateFrame();
        }
  
        sprite.addEventListener('mouseenter', function() {
            playingForward = true;
            currentFrame = 0;
            interval = setInterval(animateSprite, 30); // Adjust animation speed here
        });
  
        sprite.addEventListener('mouseleave', function() {
            playingForward = false;
            interval = setInterval(animateSprite, 30); // Adjust animation speed here
        });
    });
  });
  


// -----------------------------------放大淡入--------------------------------

//工作经历
ScrollTrigger.create({
    trigger:'.banner-information',// 触发对象
    start:'top top',//开始位置
    end:'+=1',//结束位置
    // markers:true,
    animation:
    gsap.from('.work-experience',{ scale:0.97,duration: 0.8,delay: 0.6,opacity: 0,ease: 'power1.out',})

});





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
    trigger:'.content-item',// 触发对象
    start:'top top',//开始位置
    end:'+=5000',//结束位置
    scrub:true,//随着鼠标上下滚动显示出现
    markers:true,
    // pin:true,//到end之前是固定的，end之后开始走
    animation:
    gsap.to('.metal',{ x: 150,duration: 2,ease: 'power3.inout',})
});

// ScrollTrigger.create({
//     trigger:'.design-3d',// 触发对象
//     start:'70%',//开始位置
//     end:'+=4000',//结束位置
//     scrub:true,//随着鼠标上下滚动显示出现
//     markers:true,
//     // pin:true,//到end之前是固定的，end之后开始走
//     animation:
//     gsap.to('.pen',{ y: 200,duration: 2,ease: 'power3.inout',})
// });
// ---------------------------------图片向右滚动动画-----------------------------------
// 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）
let ul=document.querySelector('.scroll-right');
ul.innerHTML=ul.innerHTML+ul.innerHTML;
let ul2=document.querySelector('.scroll-left');
ul2.innerHTML=ul2.innerHTML+ul2.innerHTML;

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




// --------------------目录--------------------
ScrollTrigger.create({
    trigger:'.content',// 触发对象
    start:'top',//开始位置
    end:'+=300',//结束位置
    markers:true,//显示位置标记
    // scrub:true,//随着鼠标上下滚动显示出现
    pin:true, 
    animation:
    gsap.timeline()
    .from('.p-right',{ x: -100,duration: 1,ease: 'power1.out',})
    .from('.p-left',{ x: 100,duration: 1,ease: 'power1.out',},"<")
    .from('.item-1',{ x: 100, y: 130,scale:1.03,rotation:-7,duration: 0.4,ease: 'power1.out',},"<")
    .from('.item-2',{ y: 80,scale:1.03,duration: 0.4,ease: 'power1.out',},"<")
    .from('.item-3',{ y: 100,x: -100,scale:1.03,rotation:7,duration:0.4,ease: 'power1.out',},"<")

});

// ------------------3d设计---------------------
ScrollTrigger.create({
    trigger:'.content',// 触发对象
    start:'56%',//开始位置
    end:'+=1',//结束位置
    markers:true,//显示位置标记
    // scrub:true,//随着鼠标上下滚动显示出现
    pin:true,
    animation:
    gsap.timeline()
    .from('.carousel .img1',{ scale:0.8,x:20,duration: 0.6,ease: 'power1.out',})
    .from('.carousel .img2',{ scale:0,x:20,duration: 0.6,ease: 'power1.out',},"<")
});


// 图片切换
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('[id^="carousel-image"]');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    const updateCarousel = () => {
        images.forEach((img, index) => {
            img.classList.remove('active', 'next', 'prev');
            if (index === currentIndex) {
                img.classList.add('active');
            } else if (index === (currentIndex + 1) % images.length) {
                img.classList.add('next');
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
                img.classList.add('prev');
            }
        });

        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);
    };

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // 初始时不需要再次调用，因为已经在HTML中设置了第一个图片为active
    updateCarousel();
});
// -----video播放一次隐藏
// const video1 = document.getElementById('video1');
// const video2 = document.getElementById('video2');
// const videoWrapper1 = document.getElementById('videoWrapper1');
// const videoWrapper2 = document.getElementById('videoWrapper2');

// // 监听第一个视频的ended事件
// video1.addEventListener('ended', function() {
//   // 隐藏第一个视频
//   videoWrapper1.classList.add('video-hidden');
//   // 显示第二个视频
//   videoWrapper2.classList.remove('video-hidden');
//   // 播放第二个视频（如果需要的话，但设置了loop属性后通常不需要）
//   video2.play();
// });
// --------------------其他设计------------------
ScrollTrigger.create({
    trigger:'.other-designs',// 触发对象
    start:'top',//开始位置
    end:'+=600',//结束位置
    markers:true,//显示位置标记
    scrub:true,//随着鼠标上下滚动显示出现
    pin:true,
    animation:
    gsap.to('.img-roll',{scale:1.26,duration: 0.8,ease: 'power3.inout',})
});

// 重力掉落
function initSimulation() {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Events = Matter.Events;
  
    const engine = Engine.create(),
      world = engine.world;
  
    const containerElement = document.querySelector(".tag-canvas");
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;
  
    // Set up Matter.js renderer
    const render = Render.create({
      element: containerElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: "transparent", // No default background
        wireframes: false
      }
    });
  
    Render.run(render);
    Engine.run(engine);
  
    // Create boundaries
    const ground = Bodies.rectangle(
      containerWidth / 2,
      containerHeight + 50,
      containerWidth,
      100,
      { isStatic: true }
    );
    const wallLeft = Bodies.rectangle(
      -50,
      containerHeight / 2,
      100,
      containerHeight,
      {
        isStatic: true
      }
    );
    const wallRight = Bodies.rectangle(
      containerWidth + 50,
      containerHeight / 2,
      100,
      containerHeight,
      { isStatic: true }
    );
    const roof = Bodies.rectangle(containerWidth / 2, -50, containerWidth, 100, {
      isStatic: true
    });
  
    World.add(world, [ground, wallLeft, wallRight, roof]);
  
    // Sync Matter.js bodies with HTML elements
    const tags = document.querySelectorAll(".tag");
    const tagBodies = Array.from(tags).map((tag) => {
      const width = tag.offsetWidth;
      const height = tag.offsetHeight;
  
      const x = Math.random() * (containerWidth - width) + width / 2;
      const y = Math.random() * containerHeight;
  
      const body = Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: height / 2 }, // Rounded corners
        density: 0.01,
        friction: 0.1,
        restitution: 0.8, // Bouncy effect
        render: {
          fillStyle: "transparent" // Disable Matter.js background rendering
        }
      });
  
      World.add(world, body);
      return { body, element: tag };
    });
  
    // Sync positions and rotation with Matter.js
    Events.on(engine, "afterUpdate", () => {
      tagBodies.forEach(({ body, element }) => {
        const { x, y } = body.position;
  
        element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
      });
    });
  
    // Add mouse interactivity
    // const mouse = Mouse.create(render.canvas);
    // const mouseConstraint = MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     stiffness: 0.2
    //   }
    // });
  
    World.add(world, mouseConstraint);
  
    // Adjust rendering and bounds on resize
    window.addEventListener("resize", () => {
      render.canvas.width = containerElement.clientWidth;
      render.canvas.height = containerElement.clientHeight;
      render.options.width = containerElement.clientWidth;
      render.options.height = containerElement.clientHeight;
    });
  }
  
  const containerElement = document.querySelector(".tag-canvas");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initSimulation();
      }
    });
  });
  
  observer.observe(containerElement);
  
// 鼠标
const dot = document.getElementById('cursor-dot')
  const circle = document.getElementById('cursor-circle')
  const opacity = (dot.style.opacity == 1 && circle.style.opacity == 1)

  let dotX = 0, dotY = 0, circleX = 0, circleY = 0;
  document.addEventListener('mousemove', (e) => {
    dotX = e.pageX
    dotY = e.pageY
    dot.style.top = `${dotY}px`
    dot.style.left = `${dotX}px`
    if (!opacity) {
      dot.style.opacity = circle.style.opacity = 1
    }
  })

  const circleAnimation = () => {
    const parts = 6
    circleX += (dotX - circleX) / parts
    circleY += (dotY - circleY) / parts
    circle.style.top = `${circleY}px`
    circle.style.left = `${circleX}px`
    window.requestAnimationFrame(circleAnimation)
  }
  window.requestAnimationFrame(circleAnimation)

  document.querySelectorAll('a').forEach(element => {
    element.addEventListener('mouseover', (e) => {
      circle.style.backgroundColor = `rgba(255, 255, 255, 0.1)`
      circle.style.border = `1px solid #8e8d9c`
      circle.style.width = `60px`
      circle.style.height = `60px`
      dot.style.width = `0px`
      dot.style.height = `0px`
    })
    element.addEventListener('mouseleave', (e) => {
      circle.style.backgroundColor = `rgba(255, 255, 255, 0)`
      circle.style.border = `1px solid #8e8d9c`
      circle.style.width = '40px'
      circle.style.height = '40px'
      dot.style.width = `10px`
      dot.style.height = `10px`
    })
    
  });


  document.querySelectorAll('button').forEach(element => {
    element.addEventListener('mouseover', (e) => {
      circle.style.backgroundColor = `rgba(255, 255, 255, 0.1)`
      circle.style.border = `1px solid #8e8d9c`
      circle.style.width = `60px`
      circle.style.height = `60px`
      dot.style.width = `0px`
      dot.style.height = `0px`
    })
    element.addEventListener('mouseleave', (e) => {
      circle.style.backgroundColor = `rgba(255, 255, 255, 0)`
      circle.style.border = `1px solid #8e8d9c`
      circle.style.width = '40px'
      circle.style.height = '40px'
      dot.style.width = `10px`
      dot.style.height = `10px`
    })
    
  });