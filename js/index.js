

// 首页动效

// 通用滑动出现动画配置项（const 名字自定义）
const staggeringOption = {
    // 延迟200毫秒
    delay: 100,
    // 移动20px
    distance: "20px",
    // 持续时间800毫秒
    duration: 800,
    // 变量函数
    easing: "ease-in-out",
    // 从上到下，如果是left就是从左到右
    origin: "bottom",
    opacity:1,
    // 重复多次
    // reset:true,
 };
// ScrollReveal().reveal("需要动的类名", { 引入上方通用配置名字，interval设置等待时间 });
ScrollReveal().reveal(".show", { ...staggeringOption ,interval:100,});
ScrollReveal().reveal(".show2", { ...staggeringOption ,interval:100,delay: 500,});
ScrollReveal().reveal(".item-animation", { ...staggeringOption ,reset:true,opacity:1,scale:0.93,distance: "0px",duration: 900,});
ScrollReveal().reveal(".play img", { ...staggeringOption ,reset:true,opacity:1,scale:0.99,distance: "30px",interval:200,duration: 700,});

// -------------------------------手机端导航点击事件-----------------------------------
// 获取折叠按钮实例
const burgerEl = document.querySelector(".burger");
// 监听herder
const headerEl = document.querySelector(".header");

burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
  burgerEl.classList.toggle("close");
})


//全局文字动效
document.addEventListener('DOMContentLoaded', () => {
    // 处理.split-line元素（行级动画）
    document.querySelectorAll('.split-line').forEach(el => {
        gsap.set(el, { visibility: "hidden" });
        ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            onEnter: () => animateLines(el),  // 调用行级动画函数
            once: true
        });
    });
    
    // 处理.split-animate元素（字符级动画）
    document.querySelectorAll('.split-animate').forEach(el => {
        gsap.set(el, { visibility: "hidden" });
        ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            onEnter: () => animateChars(el),  // 调用字符级动画函数
            once: true
        });
    });
    
    // 进度条监听（保留一次即可）
    window.addEventListener('scroll', updateProgressBar);
});

// 行级动画函数（仅整体行动画）
function animateLines(element) {
    gsap.set(element, { visibility: "visible" });
    
    const splitLines = new SplitText(element, {
        type: "lines",
        linesClass: "line-child"
    });
    
    gsap.set(splitLines.lines, { y: 30, opacity: 0 });
    
    gsap.to(splitLines.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power3.out"
    });
}

// 字符级动画函数（行+字符动画）
function animateChars(element) {
    gsap.set(element, { visibility: "visible" });
    
    const splitLines = new SplitText(element, {
        type: "lines",
        linesClass: "line-parent"
    });
    
    splitLines.lines.forEach((line, index) => {
        const splitChars = new SplitText(line, {
            type: "chars",
            charsClass: "char-child"
        });
        
        gsap.set(splitChars.chars, { y: "100%", opacity: 0 });
        
        gsap.to(splitChars.chars, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.03,
            delay: index * 0.2,
            ease: "power3.out"
        });
    });
}

// 进度条更新函数
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}
// ------------------------------------1.首页---------------------------------


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



// ---------------------------------------2.个人信息----------------------------------------------

gsap.to('.card-white', {
    scrollTrigger: ".card-white",// 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    rotation:-8,
    duration: 0.3,
    ease: 'power1.out',
});
gsap.to('.card-blue', {
    scrollTrigger: ".card-blue",// 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    rotation:-16,
    y:30,
    x:-20,
    duration: 0.3,
    ease: 'power1.out',
});
gsap.to('.card-yellow', {
    scrollTrigger: ".card-yellow",// 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    rotation:-24,
    y:70,
    x:-40,
    duration: 0.3,
    ease: 'power1.out',
});

ScrollTrigger.create({
    trigger:'.personal',// 触发对象
    start:'3%',//开始位置
    end:'+=30',//结束位置
    // markers:true,//显示位置标记
    // scrub:true,//随着鼠标上下滚动显示出现
    pin:true,
    animation:
    gsap.timeline()
    .to('.card-white',{ rotation:-20,y:-80,duration: 0.4,ease: 'power1.out',})
    .to('.card-blue',{ rotation:-20,y:120,x:-100,duration: 0.4,ease: 'power1.out',},"<")
    .to('.card-yellow',{ rotation:-20,y:340,x:-240,duration: 0.4,ease: 'power1.out',},"<")
});

// 个人经验点击展开
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const section = header.parentElement;
        section.classList.toggle('active');
    });
});





// ---------------------------------------3.目录--------------------------------------------

//视差滚动


// 硬件加速初始化
document.querySelectorAll('.img-container').forEach(container => {
  container.style.willChange = 'transform';
  container.querySelectorAll('img').forEach(img => {
    img.style.willChange = 'transform';
    img.style.backfaceVisibility = 'hidden';
  });
});

// 浏览器检测
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const speedFactor = isSafari ? 0.9 : 1;

// 视差层配置（新增centerOffset标记）
const layers = {
  'black': { value: 1, centerOffset: true },
  'fast': { value: 15, centerOffset: true},
  'middle-fast': { value: 20, centerOffset: true },
  'least-slow': { value: 4, centerOffset: true },
  'middle-slow': { value: 6, centerOffset: true },
  'slow': { value: 8, centerOffset: true },
  'least-fast': { value: 35, centerOffset: true },
  'main': { value: 50, centerOffset: true },
  'middle-slower': { value: 10, centerOffset: true },
  'laptop-bg': { value: 25, centerOffset: true },

};

// 动画节流控制
let isAnimating = false;
const handleParallax = (container, x, y) => {
  if(isAnimating) return;
  isAnimating = true;
  
  requestAnimationFrame(() => {
    Object.entries(layers).forEach(([className, {value, centerOffset}]) => {
      const element = container.querySelector(`.${className}`);
      if(element) {
        const adjustedValue = value * speedFactor;
        const baseTransform = centerOffset ? 'translateX(-50%) ' : '';
        element.style.transform = 
          `${baseTransform}translate3d(${x*adjustedValue}px, ${y*adjustedValue}px, 0)`;
      }
    });
    isAnimating = false;
  });
};

// 事件监听系统
document.querySelectorAll('.img-container').forEach(container => {
  let isInside = false;
  const localSpeedFactor = 0.6; // 局部灵敏度系数
  
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    isInside = (
      e.clientX >= rect.left && 
      e.clientX <= rect.right && 
      e.clientY >= rect.top && 
      e.clientY <= rect.bottom
    );
    
    if(isInside) {
      const x = (e.clientX - rect.left - centerX) / centerX * localSpeedFactor;
      const y = (e.clientY - rect.top - centerY) / centerY * localSpeedFactor;
      handleParallax(container, x, y);
    }
  });

  // 复位控制
  const resetParallax = () => {
    Object.entries(layers).forEach(([className, {centerOffset}]) => {
      const element = container.querySelector(`.${className}`);
      if(element) {
        const baseTransform = centerOffset ? 'translateX(-50%) ' : '';
        element.style.transform = `${baseTransform}translate3d(0, 0, 0)`;
      }
    });
  };

  container.addEventListener('mouseleave', resetParallax);
  
  // 边界检测保险
  setInterval(() => {
    if(!isInside) resetParallax();
  }, 100);
});





// 重力参数配置
document.addEventListener('DOMContentLoaded', () => {
  const { Engine, World, Bodies, Mouse, MouseConstraint } = Matter;
  const container = document.getElementById('container');
  const labels = document.querySelectorAll('.label');
  let engine, world, isActive = false;
  let labelBodies = [];

  // 初始化物理引擎
  function initPhysics() {
    engine = Engine.create({ 
      gravity: {  x: 0, y: 0.5  },
      enableSleeping: true
    });
    world = engine.world;

    // 创建边界
    const boundaries = [
      Bodies.rectangle(0, container.offsetHeight/2, 20, container.offsetHeight, { 
        isStatic: true, render: { visible: false }
      }),
      Bodies.rectangle(container.offsetWidth, container.offsetHeight/2, 20, container.offsetHeight, { 
        isStatic: true, render: { visible: false }
      }),
      Bodies.rectangle(container.offsetWidth/2, container.offsetHeight, container.offsetWidth, 20, { 
        isStatic: true, render: { visible: false }
      })
    ];
    World.add(world, boundaries);

    // 鼠标交互配置（关键修改）
    const mouse = Mouse.create(container);
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        collisionFilter: null,  // 修改2：允许穿透事件
        render: { visible: false }
      }
    });
    World.add(world, mouseConstraint);

    // 初始化标签物理体
    labels.forEach((label, i) => {
      const rect = label.getBoundingClientRect();
      const body = Bodies.rectangle(
        Math.random() * (container.offsetWidth - rect.width),
        -rect.height - i * 60,  // 修改3：初始位置偏移
        rect.width,
        rect.height,
        {
          chamfer: { radius: rect.height/2 },
          restitution: 0.6,      // 弹性系数
          friction: 0.1,         // 摩擦力
          frictionAir: 0.02      // 空气阻力
        }
      );
      labelBodies.push({ body, element: label });
      World.add(world, body);
    });

    // 滚动事件处理（新增功能）
    container.addEventListener('wheel', (e) => {
      if(!mouseConstraint.mouse.position.x) return;
      window.scrollBy(0, e.deltaY);
      e.preventDefault();
    }, { passive: false });


    // 启动引擎
    Engine.run(engine);
    
    // 持续更新位置
    function update() {
      if(isActive) {
        labelBodies.forEach(item => {
          const { body, element } = item;
          element.style.transform = `
            translate(${body.position.x - element.offsetWidth/2}px, 
                      ${body.position.y - element.offsetHeight/2}px)
            rotate(${body.angle}rad)`;
        });
      }
      requestAnimationFrame(update);
    }
    update();
  }

  // 保持原有resetTags和观察者逻辑...
  // 初始立即激活物理效果
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      if(!isActive) {
        isActive = true;
        initPhysics();
      }
    } else {
      if(isActive) {
        isActive = false;
        resetTags();
      }
    }
  }, { threshold: 0.3 });

  observer.observe(container);
});



// 视频暂停
// document.addEventListener('DOMContentLoaded', function() {
//     const imgContainers = document.querySelectorAll('.img-container');

//     imgContainers.forEach(container => {
//         const video = container.querySelector('video');

//         // 监听鼠标悬停事件
//         container.addEventListener('mouseenter', function() {
//             video.pause(); // 暂停视频播放
//         });

//         // 可选：监听鼠标离开事件以继续播放视频（如果需要的话）
//         // 但根据您的需求描述，这里不需要继续播放的逻辑
//         container.addEventListener('mouseleave', function() {
//             if (video.paused ) {
//                 video.play(); // 继续播放视频（如果需要的话）
//             }
//         });
//     });
// });




// 获取视频元素
const video2 = document.getElementById('video-slow');

// 设置视频播放速度为0.8倍速
video2.playbackRate = 0.9;

  

// --------------------------------------4.其他设计-----------------------------------
gsap.to('.strong', {
    scrollTrigger: ".strong",// 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    opacity:1,
    duration: 0.3,
    delay:1.2,
    ease: 'power1.out',
});
gsap.to('.strong-hidden', {
    scrollTrigger: ".strong",// 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    opacity:0,
    duration: 0.3,
    delay:1.2,
    ease: 'power3.out',
});
ScrollTrigger.create({
    trigger:'.other-container',// 触发对象
    start:'top',//开始位置
    end:'+=3000',//结束位置
    // markers:true,//显示位置标记
    scrub:true,//随着鼠标上下滚动显示出现
    // pin:true,
    animation:
    gsap.timeline()
    .to('.img-roll',{y:-400,duration: 20,ease: 'power3.out',})
    .to('.other-container',{y:800,duration: 20,ease: 'power3.out',})
});

// ---------------图片向右滚动动画----------------

document.addEventListener('DOMContentLoaded', () => {
    // 克隆元素并设置容器宽度
    const initScroll = (el) => {
        const clone = el.innerHTML;
        el.innerHTML = clone + clone + clone; // 三倍克隆确保无缝衔接
        el.style.width = `${el.scrollWidth / 3 * 2}px`;
        
        // 动画结束时立即重置位置
        el.addEventListener('animationiteration', () => {
            el.style.animation = 'none';
            requestAnimationFrame(() => {
                el.style.animation = '';
            });
        });
    };

    initScroll(document.getElementById('rightTrack'));
    initScroll(document.getElementById('leftTrack'));
});


// 重力掉落
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('physics-container');
  const tags = document.querySelectorAll('.tag');
  let engine, world, tagBodies = [], mouseConstraint;
  let isActive = false;

  function getActualRadius(element) {
    const rect = element.getBoundingClientRect();
    return Math.max(rect.width, rect.height) / 2 * 1;
  }

  function initPhysics() {
    if(engine) Matter.Engine.clear(engine);
    
    engine = Matter.Engine.create({ 
      gravity: { x: 0.2, y: 0.8 },
      enableSleeping: false
    });
    world = engine.world;

    // 添加鼠标交互约束
    const mouse = Matter.Mouse.create(container);
    mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Matter.Composite.add(world, mouseConstraint);

    const wallOptions = { 
      isStatic: true, 
      render: { visible: false },
      collisionFilter: { group: -1 }
    };
    
    const walls = [
      // 左、右、底、顶四个边界
      Matter.Bodies.rectangle(0, container.offsetHeight/2, 20, container.offsetHeight, wallOptions),
      Matter.Bodies.rectangle(container.offsetWidth, container.offsetHeight/2, 20, container.offsetHeight, wallOptions),
      Matter.Bodies.rectangle(container.offsetWidth/2, container.offsetHeight, container.offsetWidth, 20, wallOptions),
      Matter.Bodies.rectangle(container.offsetWidth/2, 0, container.offsetWidth, 20, wallOptions) // 新增顶部边界
    ];
    Matter.Composite.add(world, walls);

    tagBodies = Array.from(tags).map(tag => {
      const radius = getActualRadius(tag);
      const body = Matter.Bodies.circle(
        Math.random() * (container.offsetWidth - radius*2) + radius,
        Math.random() * (container.offsetHeight/2),
        radius,
        { 
          restitution: 0.6, 
          friction: 0.05,
          collisionFilter: { group: 0 }
        }
      );
      body.domElement = tag;
      tag.style.transform = `translate(${body.position.x-radius}px, ${body.position.y-radius}px)`;
      return body;
    });
    Matter.Composite.add(world, tagBodies);
    Matter.Engine.run(engine);

    function update() {
      tagBodies.forEach(body => {
        const radius = getActualRadius(body.domElement);
        body.domElement.style.transform = 
          `translate(${body.position.x-radius}px, ${body.position.y-radius}px)`;
      });
      if(isActive) requestAnimationFrame(update);
    }
    update();
  }

  // 保持原有resetTags和观察者逻辑...
  // 初始立即激活物理效果
  isActive = true;
  initPhysics();

  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      if(!isActive) {
        isActive = true;
        initPhysics();
      }
    } else {
      if(isActive) {
        isActive = false;
        resetTags();
      }
    }
  }, { threshold: 0.3 });

  observer.observe(container);
});






// --------------------------鼠标-----------------------------------
// 鼠标

const dot = document.getElementById('cursor-dot');
const circle = document.getElementById('cursor-circle');
let dotX = 0, dotY = 0, circleX = 0, circleY = 0;

// 更新指针位置
const updateCursorPosition = (e) => {
  dotX = e.clientX;
  dotY = e.clientY;
  dot.style.top = `${dotY + window.scrollY}px`;
  dot.style.left = `${dotX + window.scrollX}px`;
  dot.style.opacity = circle.style.opacity = 1;
};

// 平滑动画
const circleAnimation = () => {
  const parts = 5;
  circleX += (dotX - circleX) / parts;
  circleY += (dotY - circleY) / parts;
  circle.style.top = `${circleY + window.scrollY}px`;
  circle.style.left = `${circleX + window.scrollX}px`;
  requestAnimationFrame(circleAnimation);
};

// 事件监听
document.addEventListener('mousemove', updateCursorPosition);
window.addEventListener('scroll', () => {
  dot.style.top = `${dotY + window.scrollY}px`;
  dot.style.left = `${dotX + window.scrollX}px`;
  circle.style.top = `${circleY + window.scrollY}px`;
  circle.style.left = `${circleX + window.scrollX}px`;
});

// 初始化动画
requestAnimationFrame(circleAnimation);


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



// --------------------------contact鼠标-----------------------------------

  // 获取contact容器
const contactContainer = document.getElementById('contactContainer');
const navLinks = document.getElementById('navLinks');

// 在contact容器内获取所有拖尾图片
const imgTails = contactContainer.querySelectorAll(".imgTail");

// 动画配置
let animationDelay = 300; // 消失延迟 (ms)
let animationDuration = 500; // 消失动画时间 (ms)
let staggerDelay = 100; // 图片之间的消失间隔 (ms)

// 初始化变量
const coords = { 
  x: contactContainer.offsetWidth / 2, 
  y: contactContainer.offsetHeight / 2 
};

// 初始化图片位置和状态
imgTails.forEach((imgTail, index) => {
  imgTail.x = coords.x;
  imgTail.y = coords.y;
  imgTail.style.opacity = 0;
  imgTail.style.transform = "scale(1)";
});

// 鼠标移动事件 - 绑定到contact容器
let animationTimer = null;
let isMouseInContainer = false;
let isOverNav = false; // 是否在导航栏上

contactContainer.addEventListener("mousemove", function (e) {
  // 如果鼠标在导航栏上，不触发拖尾效果
  if (isOverNav) return;
  
  // 获取容器位置
  const rect = contactContainer.getBoundingClientRect();
  
  // 计算相对于容器的坐标
  coords.x = e.clientX - rect.left;
  coords.y = e.clientY - rect.top;
  
  // 清除之前的定时器
  if (animationTimer) {
    clearTimeout(animationTimer);
  }
  
  // 重置所有图片状态
  imgTails.forEach((imgTail) => {
    imgTail.style.transition = "none";
    imgTail.style.opacity = 1;
    imgTail.style.transform = "scale(1)";
  });
  
  // 设置新的定时器，在延迟后触发图片依次消失
  animationTimer = setTimeout(() => {
    // 从最后一张图片开始消失（索引从大到小）
    for (let i = imgTails.length - 1; i >= 0; i--) {
      // 计算每张图片的延迟（最后一张最先消失）
      const delay = (imgTails.length - 1 - i) * staggerDelay;
      
      setTimeout(() => {
        imgTails[i].style.transition = `transform ${animationDuration}ms ease, opacity ${animationDuration}ms ease`;
        imgTails[i].style.transform = "scale(0)";
        imgTails[i].style.opacity = "0";
      }, delay);
    }
  }, animationDelay);
  
  isMouseInContainer = true;
});

// 鼠标离开容器事件
contactContainer.addEventListener("mouseleave", function() {
  isMouseInContainer = false;
  
  // 清除动画定时器
  if (animationTimer) {
    clearTimeout(animationTimer);
  }
  
  // 立即隐藏所有图片
  imgTails.forEach((imgTail) => {
    imgTail.style.transition = `opacity 300ms ease`;
    imgTail.style.opacity = "0";
  });
});

// 导航栏鼠标事件
navLinks.addEventListener("mouseenter", function() {
  isOverNav = true;
  
  // 立即隐藏所有拖尾图片
  imgTails.forEach((imgTail) => {
    imgTail.style.transition = `all 1000ms ease`;
    // imgTail.style.opacity = "0";
    imgTail.style.scale = "0";

  });
  
  // 清除动画定时器
  if (animationTimer) {
    clearTimeout(animationTimer);
    animationTimer = null;
  }
});

navLinks.addEventListener("mouseleave", function() {
  isOverNav = false;
  imgTails.forEach((imgTail) => {
    imgTail.style.scale = "1";
  });
});

// 动画函数 - 更新位置
function animationCircle() {
  if (!isMouseInContainer || isOverNav) {
    requestAnimationFrame(animationCircle);
    return;
  }
  
  let x = coords.x;
  let y = coords.y;
  
  imgTails.forEach((imgTail, index) => {
    // 更新位置
    imgTail.style.left = (x - 60) + "px";
    imgTail.style.top = (y - 60) + "px";
    
    // 存储当前位置
    imgTail.x = x;
    imgTail.y = y;
    
    // 计算下一个位置（保持图片之间的距离）
    const nextCircle = imgTails[index + 1] || imgTails[0];
    x += (nextCircle.x - x) * 0.93;
    y += (nextCircle.y - y) * 0.93;
  });
  
  requestAnimationFrame(animationCircle);
}

// 启动动画循环
animationCircle();

// 控制面板交互
document.getElementById('delay').addEventListener('input', function() {
  animationDelay = parseInt(this.value);
  document.getElementById('delayValue').textContent = animationDelay + ' ms';
});

document.getElementById('duration').addEventListener('input', function() {
  animationDuration = parseInt(this.value);
  document.getElementById('durationValue').textContent = animationDuration + ' ms';
});

document.getElementById('stagger').addEventListener('input', function() {
  staggerDelay = parseInt(this.value);
  document.getElementById('staggerValue').textContent = staggerDelay + ' ms';
}); 




