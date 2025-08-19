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
class FixedSizeDistortionEffect {
  constructor() {
    // ============== 可调节参数区域 ==============
    // 图像质量参数
    this.renderScale = 2; // 提高渲染质量 (1-3之间，2是高清屏的理想值)
    
    // 扭曲效果参数
    this.distortionRadius = 450;     // 扭曲半径(像素)
    this.distortionStrength = 0.5;   // 扭曲强度(0-1)
    this.smoothness = 0.1;           // 平滑过渡参数(0-1)
    
    // 细分参数
    this.horizontalSegments = 600;    // 水平细分数量
    this.verticalSegments = 400;     // 垂直细分数量
    
    // 噪点效果参数
    this.noiseRadius = 250;          // 噪点效果的影响半径(像素)
    this.noiseFadeStart = 0.1;       // 噪点开始淡出的位置(0-1)
    this.noiseFadeEnd = 1.0;         // 噪点完全淡出的位置(0-1)
    this.noiseIntensity = 0.01;      // 噪点强度(0-1)
    this.noiseScale = 1;             // 噪点大小(1-20)
    this.noiseDensity = 0.8;         // 噪点密度(0-1)
    this.noiseAnimationSpeed = 0.001;// 噪点动画速度(0-0.1)
    
    // 噪点颜色参数 (0-255)
    this.noiseRed = 210;               // 红色通道强度
    this.noiseGreen = 255;             // 绿色通道强度
    this.noiseBlue = 255;              // 蓝色通道强度
    this.maxNoiseAlpha = 0.2;        // 噪点最大透明度(0-1)
    
    // 动画参数
    this.animationSpeed = 0.004;     // 波浪动画速度(0-1)
    // ==========================================
    
    this.canvases = [...document.querySelectorAll('.distort-canvas')]; // 获取所有需要应用效果的canvas元素
    this.activeCanvas = null;        // 当前激活的canvas
    this.mouse = { x: 0, y: 0 };     // 当前鼠标位置
    this.animationFrame = null;      // 动画帧ID
    this.noiseOffset = 0;            // 噪点动画偏移量
    this.resizeObservers = [];       // 存储所有ResizeObserver实例
    
    this.init(); // 初始化效果
  }
  
  init() {
    this.canvases.forEach((canvas, index) => {
      // 为每个canvas设置唯一ID
      canvas.id = `canvas-${index}`;
      const container = canvas.parentElement;
      const imgSrc = canvas.dataset.src; // 从data-src属性获取图片URL
      
      // 初始化canvas尺寸
      const initCanvas = () => {
        const { width, height } = container.getBoundingClientRect();
        // 根据renderScale设置canvas的实际尺寸
        canvas.width = width * this.renderScale;
        canvas.height = height * this.renderScale;
        // 保持CSS显示尺寸不变
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        return { width, height };
      };
      
      // 加载图片
      const img = new Image();
      img.crossOrigin = "anonymous"; // 处理跨域问题
      img.src = imgSrc;
      
      img.onload = () => {
        // 图片加载完成后初始化canvas
        const { width, height } = initCanvas();
        // 绘制高质量图片
        this.drawHighQualityImage(canvas, img);
        
        // 保存原始图片和图像数据
        canvas.originalImage = img;
        canvas.ctx = canvas.getContext('2d', { willReadFrequently: true });
        canvas.originalImageData = this.getHighQualityImageData(
          canvas.ctx, 
          img, 
          canvas.width, 
          canvas.height
        );
        
        // 设置元素尺寸变化监听
        this.setupResizeObserver(container, canvas);
      };
      
      // 鼠标进入事件 - 激活当前canvas
      container.addEventListener('mouseenter', (e) => {
        this.activeCanvas = canvas;
        // 计算鼠标在canvas中的位置（考虑renderScale）
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        this.mouse = {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY
        };
        
        // 如果没有动画在运行，则开始动画
        if (!this.animationFrame) {
          this.animate();
        }
      });
      
      // 鼠标移动事件 - 更新鼠标位置
      container.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        this.mouse = {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY
        };
      });
      
      // 鼠标离开事件 - 恢复原始图像
      container.addEventListener('mouseleave', () => {
        if (this.activeCanvas === canvas) {
          this.activeCanvas = null;
          if (canvas.originalImage) {
            // 绘制原始图像
            this.drawHighQualityImage(canvas, canvas.originalImage);
          }
        }
      });
    });
  }
  
  // 设置元素尺寸变化监听
  setupResizeObserver(container, canvas) {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        // 更新canvas尺寸
        canvas.width = width * this.renderScale;
        canvas.height = height * this.renderScale;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        // 如果图片已加载，重新绘制
        if (canvas.originalImage) {
          this.drawHighQualityImage(canvas, canvas.originalImage);
          // 更新图像数据
          canvas.originalImageData = this.getHighQualityImageData(
            canvas.ctx, 
            canvas.originalImage, 
            canvas.width, 
            canvas.height
          );
        }
      }
    });
    
    observer.observe(container);
    this.resizeObservers.push(observer);
  }
  
  // 高质量图像绘制方法
  drawHighQualityImage(canvas, img) {
    const ctx = canvas.getContext('2d');
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    // 启用图像平滑
    ctx.imageSmoothingEnabled = true;
    // 绘制图像（自动缩放到canvas尺寸）
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
  
  // 获取高质量图像数据
  getHighQualityImageData(ctx, img, width, height) {
    // 创建临时canvas处理图像
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.imageSmoothingEnabled = true;
    // 绘制图像到临时canvas
    tempCtx.drawImage(img, 0, 0, width, height);
    // 返回图像数据
    return tempCtx.getImageData(0, 0, width, height);
  }
  
  // 平滑过渡函数 (用于创建非线性过渡效果)
  smoothstep(edge0, edge1, x) {
    // 将x限制在edge0和edge1之间
    x = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
    // 三次多项式平滑过渡
    return x * x * (3 - 2 * x);
  }
  
  // 计算噪点强度基于距离
  calculateNoiseIntensity(distance) {
    const ratio = distance / this.noiseRadius;
    // 完全在范围之外
    if (ratio >= this.noiseFadeEnd) return 0;
    // 完全在范围之内
    if (ratio <= this.noiseFadeStart) return 1;
    // 在过渡范围内
    return 1 - this.smoothstep(this.noiseFadeStart, this.noiseFadeEnd, ratio);
  }
  
  // 生成噪点值
  generateNoise(x, y, timeOffset) {
    // 缩放坐标
    const scaledX = x / this.noiseScale;
    const scaledY = y / this.noiseScale;
    // 使用伪随机函数生成噪点
    const n = Math.sin(scaledX * 12.9898 + scaledY * 78.233 + timeOffset) * 43758.5453;
    const noiseValue = (n - Math.floor(n)) * 2 - 1; // 转换为-1到1的范围
    
    // 根据密度随机决定是否返回噪点
    if (Math.random() > this.noiseDensity) {
      return 0;
    }
    
    return noiseValue * this.noiseIntensity;
  }
  
  // 应用扭曲效果到canvas
  applyDistortion(canvas, mouseX, mouseY) {
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const originalData = canvas.originalImageData;
    // 创建新的图像数据用于扭曲效果
    const distortedData = ctx.createImageData(width, height);
    
    // 更新噪点偏移量
    this.noiseOffset += this.noiseAnimationSpeed;
    
    // 计算每个细分块的尺寸
    const segmentWidth = width / this.horizontalSegments;
    const segmentHeight = height / this.verticalSegments;
    
    // 遍历所有细分块
    for (let segY = 0; segY < this.verticalSegments; segY++) {
      for (let segX = 0; segX < this.horizontalSegments; segX++) {
        // 计算当前细分块中心坐标
        const x = segX * segmentWidth + segmentWidth / 2;
        const y = segY * segmentHeight + segmentHeight / 2;
        
        // 计算到鼠标的距离
        const distortionDx = x - mouseX;
        const distortionDy = y - mouseY;
        const distortionDistance = Math.sqrt(distortionDx * distortionDx + distortionDy * distortionDy);
        
        // 计算噪点效果的距离
        const noiseDx = x - mouseX;
        const noiseDy = y - mouseY;
        const noiseDistance = Math.sqrt(noiseDx * noiseDx + noiseDy * noiseDy);
        
        // 计算扭曲强度
        const distortionIntensity = 1 - this.smoothstep(
          this.distortionRadius * this.smoothness, 
          this.distortionRadius, 
          distortionDistance
        );
        
        // 计算噪点强度
        const noiseIntensity = this.calculateNoiseIntensity(noiseDistance);
        
        // 如果扭曲强度大于0，应用扭曲效果
        if (distortionIntensity > 0) {
          // 计算波浪强度
          const waveIntensity = this.distortionStrength * 20 * Math.pow(distortionIntensity, 2);
          // 计算角度
          const angle = Math.atan2(distortionDy, distortionDx);
          // 时间因子用于动画
          const timeFactor = Date.now() * this.animationSpeed;
          // 计算x和y方向的波浪偏移
          const waveX = Math.sin(angle * 4 + timeFactor) * waveIntensity;
          const waveY = Math.cos(angle * 2 + timeFactor * 0.8) * waveIntensity * 0.7;
          
          // 计算新坐标（限制在canvas范围内）
          const newX = Math.min(width - 1, Math.max(0, x + waveX));
          const newY = Math.min(height - 1, Math.max(0, y + waveY));
          
          // 原始位置和新位置的像素索引
          const origPos = (Math.floor(y) * width + Math.floor(x)) * 4;
          const newPos = (Math.floor(newY) * width + Math.floor(newX)) * 4;
          
          // 生成噪点值
          const noiseValue = this.generateNoise(x, y, this.noiseOffset);
          
          // 当前细分块的像素范围
          const startX = Math.floor(segX * segmentWidth);
          const endX = Math.min(width, Math.floor((segX + 1) * segmentWidth));
          const startY = Math.floor(segY * segmentHeight);
          const endY = Math.min(height, Math.floor((segY + 1) * segmentHeight));
          
          // 处理当前细分块内的所有像素
          for (let py = startY; py < endY; py++) {
            for (let px = startX; px < endX; px++) {
              const pos = (py * width + px) * 4;
              
              // 应用扭曲效果
              distortedData.data[pos] = originalData.data[newPos];
              distortedData.data[pos + 1] = originalData.data[newPos + 1];
              distortedData.data[pos + 2] = originalData.data[newPos + 2];
              distortedData.data[pos + 3] = originalData.data[newPos + 3];
              
              // 如果需要添加噪点
              if (noiseValue !== 0 && noiseIntensity > 0) {
                // 生成随机颜色值
                const r = this.noiseRed + Math.random() * 50;
                const g = this.noiseGreen + Math.random() * 50;
                const b = this.noiseBlue + Math.random() * 50;
                const noiseAlpha = this.maxNoiseAlpha * noiseIntensity;
                
                // 混合原始颜色和噪点颜色
                distortedData.data[pos] = distortedData.data[pos] * (1 - noiseAlpha) + r * noiseAlpha;
                distortedData.data[pos + 1] = distortedData.data[pos + 1] * (1 - noiseAlpha) + g * noiseAlpha;
                distortedData.data[pos + 2] = distortedData.data[pos + 2] * (1 - noiseAlpha) + b * noiseAlpha;
              }
            }
          }
        } else {
          // 扭曲强度为0的区域，直接复制原始图像数据
          const startX = Math.floor(segX * segmentWidth);
          const endX = Math.min(width, Math.floor((segX + 1) * segmentWidth));
          const startY = Math.floor(segY * segmentHeight);
          const endY = Math.min(height, Math.floor((segY + 1) * segmentHeight));
          
          for (let py = startY; py < endY; py++) {
            for (let px = startX; px < endX; px++) {
              const pos = (py * width + px) * 4;
              const origPos = (py * width + px) * 4;
              
              distortedData.data[pos] = originalData.data[origPos];
              distortedData.data[pos + 1] = originalData.data[origPos + 1];
              distortedData.data[pos + 2] = originalData.data[origPos + 2];
              distortedData.data[pos + 3] = originalData.data[origPos + 3];
            }
          }
        }
      }
    }
    
    // 将处理后的图像数据绘制到canvas
    ctx.putImageData(distortedData, 0, 0);
  }
  
  // 动画循环
  animate() {
    if (this.activeCanvas && this.activeCanvas.originalImageData) {
      // 使用当前鼠标位置应用扭曲效果
      this.applyDistortion(this.activeCanvas, this.mouse.x, this.mouse.y);
      // 继续动画循环
      this.animationFrame = requestAnimationFrame(() => this.animate());
    } else {
      this.animationFrame = null;
    }
  }
  
  // 清理资源
  cleanup() {
    // 取消所有ResizeObserver监听
    this.resizeObservers.forEach(observer => observer.disconnect());
  }
}

// 页面加载完成后初始化效果
window.addEventListener('load', () => {
  const effect = new FixedSizeDistortionEffect();
  
  // 页面卸载前清理资源
  window.addEventListener('beforeunload', () => {
    effect.cleanup();
  });
  
  // 处理页面可见性变化
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      effect.cleanup();
    }
  });
});
