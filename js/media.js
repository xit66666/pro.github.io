// -------------------------------手机端导航点击事件-----------------------------------
// 获取折叠按钮实例
const burgerEl = document.querySelector(".burger");
// 监听herder
const headerEl = document.querySelector(".header");

burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
  burgerEl.classList.toggle("close");
})



// 通用滑动出现动画配置项（const 名字自定义）
const staggeringOption = {
    // 延迟200毫秒
    // delay: 100,
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
ScrollReveal().reveal(".show", { ...staggeringOption ,interval:300,});
ScrollReveal().reveal(".show2", { ...staggeringOption ,opacity:0,interval:100,delay: 300,});
ScrollReveal().reveal(".explore-container .img-box", { ...staggeringOption ,reset:true,scale:0.93,distance: "0px",duration: 900,});




//平滑滚动

// 初始化 Lenis (仅保留必要配置)
const lenis = new Lenis({
    smooth: true,          // 核心功能开关
    direction: 'vertical', // 只保留方向配置
    gestureDirection: 'vertical'
});

// 精简版滚轮控制
window.addEventListener('wheel', (e) => {
    e.preventDefault();
    lenis.scrollBy(e.deltaY * 0.005, {  // 0.8是优化后的速度系数
        duration: 1.5,
        // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
        easing: (t) => 1 - Math.pow(1 - t, 6) // 更高效的缓动函数
    });
}, { passive: false });

// // 精简版滚轮控制
// window.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     lenis.scrollBy(e.deltaY * 0.01, {  // 0.8是优化后的速度系数
//         duration: 1.5,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 缓动函数
//         // easing: (t) => 1 - Math.pow(1 - t, 6) // 更高效的缓动函数
//     });
// }, { passive: false });

// 最小化动画循环
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//---------------------全局文字动效--------------------------

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
        duration: 1.2,
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

//---------水波纹--------
$('.foot-ripples').ripples({
  resolution: 256,
  dropRadius: 30,
  perturbance: 0.02,
  damping: 1,  
});


// --------------------------footer-----------------------------------

ScrollTrigger.create({
    trigger:'.footer-box',// 触发对象
    start:'0%',//开始位置
    end:'+=1100',//结束位置
    // markers:true,//显示位置标记
    scrub:true,//随着鼠标上下滚动显示出现
    pin:true,
    animation:
    gsap.timeline()
    .to('.footer-mask',{ y:-1000,duration: 80,ease: 'power1.out',})
    .to('.footer-img1',{ y:60,x:60,duration: 80,ease: 'power1.out',},"<")
    .to('.footer-img2',{ y:-60,x:-60,duration: 80,ease: 'power1.out',},"<")
    .from('.QRcode-box',{rotate:20,duration: 80,ease: 'power3.out',},'<')
});



// ----------------------------------图片不能下载----------------------------------
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
//   var alertBox = document.createElement('div');
//   var alertText = document.createTextNode('不可以复制或下载图片哦~');
//   alertBox.appendChild(alertText);
//   alertBox.style.width = '200px';
//   alertBox.style.height = '40px';
//   alertBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   alertBox.style.color = '#fff';
//   alertBox.style.fontSize = '14px';
//   alertBox.style.borderRadius = '4px';
//   alertBox.style.position = 'fixed';
//   alertBox.style.top = '50%';
//   alertBox.style.left = '50%';
//   alertBox.style.transform = 'translate(-50%, -50%)';
//   alertBox.style.textAlign = 'center';
//   alertBox.style.lineHeight = '40px';
//   document.body.appendChild(alertBox);
//   setTimeout(function() {
//     alertBox.style.opacity = '0';
//     setTimeout(function() {
//       document.body.removeChild(alertBox);
//     }, 500);
//   }, 1000);
// });


// --------------------------鼠标-----------------------------------
// 鼠标

// 鼠标
const dot = document.getElementById('cursor-dot');
const circle = document.getElementById('cursor-circle');
let dotX = 0, dotY = 0, circleX = 0, circleY = 0;

// 更新指针位置
const updateCursorPosition = (e) => {
  dotX = e.clientX;
  dotY = e.clientY;
  updateCursorStyles();
  dot.style.opacity = circle.style.opacity = 1;
};

// 更新光标样式（考虑滚动位置）
const updateCursorStyles = () => {
  dot.style.top = `${dotY + window.scrollY}px`;
  dot.style.left = `${dotX + window.scrollX}px`;
  circle.style.top = `${circleY + window.scrollY}px`;
  circle.style.left = `${circleX + window.scrollX}px`;
};

// 平滑动画
const circleAnimation = () => {
  const parts = 4;
  circleX += (dotX - circleX) / parts;
  circleY += (dotY - circleY) / parts;
  updateCursorStyles();
  requestAnimationFrame(circleAnimation);
};

// 事件监听
document.addEventListener('mousemove', updateCursorPosition);

// 修改滚动事件处理 - 使用防抖优化性能
let isScrolling;
window.addEventListener('scroll', () => {
  // 取消之前的滚动处理
  cancelAnimationFrame(isScrolling);
  
  // 在下一帧处理滚动
  isScrolling = requestAnimationFrame(() => {
    updateCursorStyles();
  });
});

// 初始化动画
requestAnimationFrame(circleAnimation);

// 链接/按钮悬停效果
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseover', () => {
    circle.style.backgroundColor = '#0000FF';
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.mixBlendMode = 'exclusion';
  });

  element.addEventListener('mouseleave', () => {
    circle.style.backgroundColor = 'var(--first-color)';
    circle.style.mixBlendMode = 'normal';
    circle.style.width = '20px';
    circle.style.height = '20px';
  });
});

// 文本元素悬停效果
document.querySelectorAll('h1, span, p, h2, .skill-list').forEach(element => {
  element.addEventListener('mouseover', () => {
    circle.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    circle.style.width = '20px';
    circle.style.height = '20px';
    circle.style.mixBlendMode = 'exclusion';
  });

  element.addEventListener('mouseleave', () => {
    circle.style.backgroundColor = 'var(--first-color)';
    circle.style.mixBlendMode = 'normal';
    circle.style.width = '20px';
    circle.style.height = '20px';
  });
});







//------------图片扭曲-----------------
class DistortionEffect {
    constructor() {
      // ============== 可调节参数区域 ==============
      // 扭曲效果参数
      this.distortionRadius = 280;     // 扭曲半径(像素)
      this.distortionStrength = 0.3;   // 扭曲强度(0-1)
      this.smoothness = 0.1;           // 平滑过渡参数(0-1)，值越大过渡越平滑
      
      // 噪点效果参数
      this.noiseIntensity = 0.01;       // 噪点强度(0-1)，值越大噪点越明显
      this.noiseScale = 1;             // 噪点大小(1-20)，值越大噪点颗粒越大
      this.noiseDensity = 0.8;         // 噪点密度(0-1)，值越大噪点越密集
      this.noiseAnimationSpeed = 0.001; // 噪点动画速度(0-0.1)，值越大变化越快
      
      // 噪点颜色参数 (0-255)
      this.noiseRed = 255;             // 红色通道强度
      this.noiseGreen = 255;           // 绿色通道强度
      this.noiseBlue = 255;            // 蓝色通道强度
      this.noiseAlpha = 0.1;           // 噪点透明度(0-1)
      
      // 动画参数
      this.animationSpeed = 0.003;     // 波浪动画速度(0-1)
      // ==========================================
      
      this.canvases = [...document.querySelectorAll('.distort-canvas')];
      this.activeCanvas = null;
      this.mouse = { x: 0, y: 0 };
      this.animationFrame = null;
      this.noiseOffset = 0; // 用于噪点动画的偏移量
      
      this.init();
    }
    
    init() {
      // 初始化所有canvas
      this.canvases.forEach((canvas, index) => {
        canvas.id = `canvas-${index}`;
        const container = canvas.parentElement;
        const imgSrc = canvas.dataset.src;
        
        // 设置canvas尺寸
        const resizeCanvas = () => {
          const { width, height } = container.getBoundingClientRect();
          canvas.width = width;
          canvas.height = height;
        };
        
        // 加载图像
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imgSrc;
        
        img.onload = () => {
          resizeCanvas();
          this.drawOriginalImage(canvas, img);
          
          // 保存原始图像数据
          canvas.originalImage = img;
          canvas.ctx = canvas.getContext('2d');
          canvas.originalImageData = canvas.ctx.getImageData(0, 0, canvas.width, canvas.height);
        };
        
        // 窗口大小变化时重绘
        window.addEventListener('resize', () => {
          resizeCanvas();
          if (canvas.originalImage) {
            this.drawOriginalImage(canvas, canvas.originalImage);
          }
        });
        
        // 鼠标进入事件
        container.addEventListener('mouseenter', () => {
          this.activeCanvas = canvas;
          if (!this.animationFrame) {
            this.animate();
          }
        });
        
        // 鼠标移动事件
        container.addEventListener('mousemove', (e) => {
          const rect = canvas.getBoundingClientRect();
          this.mouse = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
        });
        
        // 鼠标离开事件
        container.addEventListener('mouseleave', () => {
          if (this.activeCanvas === canvas) {
            this.activeCanvas = null;
            // 恢复原始图像
            if (canvas.originalImageData) {
              canvas.ctx.putImageData(canvas.originalImageData, 0, 0);
            }
          }
        });
      });
    }
    
    drawOriginalImage(canvas, img) {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // 保存原始图像数据
      canvas.originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    
    // 平滑过渡函数
    smoothstep(edge0, edge1, x) {
      // 将x限制在0-1范围内
      x = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
      // 使用平滑曲线过渡
      return x * x * (3 - 2 * x);
    }
    
    // 生成噪点值 (使用柏林噪声算法改进)
    generateNoise(x, y, timeOffset) {
      // 使用简单的伪随机算法生成噪点
      const scaledX = x / this.noiseScale;
      const scaledY = y / this.noiseScale;
      const n = Math.sin(scaledX * 12.9898 + scaledY * 78.233 + timeOffset) * 43758.5453;
      const noiseValue = (n - Math.floor(n)) * 2 - 1; // 范围-1到1
      
      // 根据密度参数决定是否显示噪点
      if (Math.random() > this.noiseDensity) {
        return 0;
      }
      
      return noiseValue * this.noiseIntensity;
    }
    
    applyDistortion(canvas, mouseX, mouseY) {
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;
      const originalData = canvas.originalImageData;
      const distortedData = ctx.createImageData(width, height);
      
      const radius = this.distortionRadius;
      const strength = this.distortionStrength * 30;
      
      // 更新噪点动画偏移量
      this.noiseOffset += this.noiseAnimationSpeed;
      
      // 遍历所有像素
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          // 计算与鼠标的距离
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // 使用平滑过渡函数计算强度
          const intensity = 1 - this.smoothstep(radius * this.smoothness, radius, distance);
          
          if (intensity > 0) {
            // 计算波浪偏移，强度随距离减弱
            const waveIntensity = strength * intensity * intensity;
            const angle = Math.atan2(dy, dx);
            const waveX = Math.sin(angle * 5 + Date.now() * this.animationSpeed) * waveIntensity;
            const waveY = Math.cos(angle * 3 + Date.now() * this.animationSpeed * 0.6) * waveIntensity * 0.5;
            
            // 计算新位置
            const newX = Math.min(width - 1, Math.max(0, x + waveX));
            const newY = Math.min(height - 1, Math.max(0, y + waveY));
            
            // 获取原始像素数据
            const origPos = (y * width + x) * 4;
            const newPos = (Math.floor(newY) * width + Math.floor(newX)) * 4;
            
            // 生成噪点值
            const noiseValue = this.generateNoise(x, y, this.noiseOffset);
            
            // 应用扭曲和噪点效果
            distortedData.data[origPos] = Math.min(255, Math.max(0, originalData.data[newPos] + noiseValue * this.noiseRed)); // R
            distortedData.data[origPos + 1] = Math.min(255, Math.max(0, originalData.data[newPos + 1] + noiseValue * this.noiseGreen)); // G
            distortedData.data[origPos + 2] = Math.min(255, Math.max(0, originalData.data[newPos + 2] + noiseValue * this.noiseBlue)); // B
            distortedData.data[origPos + 3] = originalData.data[newPos + 3]; // Alpha
            
            // 添加噪点层（半透明噪点）
            if (noiseValue !== 0 && this.noiseAlpha > 0) {
              const noiseAlpha = this.noiseAlpha * intensity;
              const r = Math.random() * this.noiseRed;
              const g = Math.random() * this.noiseGreen;
              const b = Math.random() * this.noiseBlue;
              
              // 混合原始颜色和噪点颜色
              distortedData.data[origPos] = distortedData.data[origPos] * (1 - noiseAlpha) + r * noiseAlpha;
              distortedData.data[origPos + 1] = distortedData.data[origPos + 1] * (1 - noiseAlpha) + g * noiseAlpha;
              distortedData.data[origPos + 2] = distortedData.data[origPos + 2] * (1 - noiseAlpha) + b * noiseAlpha;
            }
          } else {
            // 扭曲半径外的区域保持原样
            const pos = (y * width + x) * 4;
            distortedData.data[pos] = originalData.data[pos];
            distortedData.data[pos + 1] = originalData.data[pos + 1];
            distortedData.data[pos + 2] = originalData.data[pos + 2];
            distortedData.data[pos + 3] = originalData.data[pos + 3];
          }
        }
      }
      
      ctx.putImageData(distortedData, 0, 0);
    }
    
    animate() {
      if (this.activeCanvas && this.activeCanvas.originalImageData) {
        this.applyDistortion(this.activeCanvas, this.mouse.x, this.mouse.y);
        this.animationFrame = requestAnimationFrame(() => this.animate());
      } else {
        this.animationFrame = null;
      }
    }
  }
  
  // 初始化
  window.addEventListener('load', () => {
    new DistortionEffect();
  });

