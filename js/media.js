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







// 增强版RGB色散着色器（支持圆角和鼠标效果）
// RGB色散着色器
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouseUV;
  uniform float uHoverEffect;
  uniform float uIsHovered;
  uniform float uMouseEffect;
  uniform vec2 uSize;
  varying vec2 vUv;

  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  vec3 enhancedRGBSplit(sampler2D tex, vec2 uv, vec2 mouseOffset, float intensity) {
    float rOffset = 0.1 * intensity;
    float gOffset = 0.2 * intensity;
    float bOffset = 0.3 * intensity;
    
    float r = texture2D(tex, uv + mouseOffset * rOffset).r;
    float g = texture2D(tex, uv + mouseOffset * gOffset).g;
    float b = texture2D(tex, uv + mouseOffset * bOffset).b;
    
    vec3 original = texture2D(tex, uv).rgb;
    vec3 splitColor = vec3(r, g, b);
    return mix(original, splitColor, 0.8 * intensity);
  }

  void main() {
    float borderRadius = 16.0 / max(uSize.x, uSize.y);
    vec2 center = vec2(0.5, 0.5);
    vec2 position = abs(vUv - center);
    float distance = roundedBox(position - center + vec2(0.5), vec2(0.5), borderRadius);
    
    if (distance > 0.0) {
      discard;
    }
    
    if (uIsHovered > 0.5) {
      vec2 mouseOffset = (vUv - uMouseUV) * uHoverEffect;
      float dist = length(mouseOffset);
      float effect = smoothstep(0.3, 0.0, dist) * uMouseEffect;//扭曲参数
      
      vec3 color = enhancedRGBSplit(uTexture, vUv, mouseOffset, effect);
      gl_FragColor = vec4(color, 1.0);
    } else {
      gl_FragColor = texture2D(uTexture, vUv);
    }
  }
`;

const vertexShader = `
  uniform vec2 uMouseUV;
  uniform float uHoverEffect;
  uniform float uIsHovered;
  uniform float uMouseEffect;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    
    if (uIsHovered > 0.5) {
      vec2 mouseOffset = (uv - uMouseUV) * uHoverEffect;
      float dist = length(mouseOffset);
      float effect = smoothstep(0.5, 0.0, dist) * uMouseEffect;//范围
      
      vec3 newPosition = position;
      vec2 normalizedOffset = normalize(mouseOffset) * dist;
      newPosition.xy += normalizedOffset * sin(dist * 20.0) * 0.1 * effect;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    } else {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  }
`;

class DistortionEffect {
  constructor() {
    this.images = [...document.querySelectorAll('.distort-container img')];
    this.meshItems = [];
    this.mouse = new THREE.Vector2();
    this.hoverEffect = 0;

    this.setupThreeJS();
    this.createMeshItems();
    this.setupEventListeners();
    this.startRendering();
  }

  setupThreeJS() {
    // 创建场景
    this.scene = new THREE.Scene();
    
    // 设置相机
    const perspective = 1000;
    const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
    this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.set(0, 0, perspective);
    
    // 创建渲染器
// 修改渲染器设置
  this.renderer = new THREE.WebGLRenderer({ 
    antialias: false, // 禁用抗锯齿
    alpha: true,
    powerPreference: "high-performance",
    stencil: false,
    depth: false
  });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(this.renderer.domElement);

    // 窗口大小调整
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  createMeshItems() {
    
    this.images.forEach(img => {
      const container = img.parentElement;
      const { width, height, left, top } = container.getBoundingClientRect();
      
      // 创建几何体
      const geometry = new THREE.PlaneBufferGeometry(1, 1, 50, 50);// 从100减少到20
      
      // 加载纹理
      const texture = new THREE.TextureLoader().load(img.src);
      
      // 设置uniforms
      const uniforms = {
        uTexture: { value: texture },
        uMouseUV: { value: new THREE.Vector2(0.5, 0.5) },
        uHoverEffect: { value: 0 },
        uIsHovered: { value: 0 },
        uMouseEffect: { value: 0 },
        uSize: { value: new THREE.Vector2(width, height) }
      };

      // 创建材质
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide
      });

      // 创建网格
      const mesh = new THREE.Mesh(geometry, material);
      
      // 设置位置和尺寸
      mesh.position.set(
        left - window.innerWidth / 2 + width / 2,
        -top + window.innerHeight / 2 - height / 2,
        0
      );
      mesh.scale.set(width, height, 1);
      
      // 添加到场景
      this.scene.add(mesh);
      
      // 保存引用
      this.meshItems.push({
        mesh,
        uniforms,
        element: img,
        update: () => {
          const { width, height, left, top } = container.getBoundingClientRect();
          mesh.position.set(
            left - window.innerWidth / 2 + width / 2,
            -top + window.innerHeight / 2 - height / 2,
            0
          );
          mesh.scale.set(width, height, 1);
          uniforms.uSize.value.set(width, height);
        }
      });
    });
  }

  setupEventListeners() {
    // 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.hoverEffect = 1.0;
      
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      const mouse = new THREE.Vector2(mouseX, mouseY);
      
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);
      
      // 重置所有hover状态
      this.meshItems.forEach(item => {
        item.uniforms.uIsHovered.value = 0;
      });
      
      // 检测碰撞
      const intersects = raycaster.intersectObjects(this.meshItems.map(item => item.mesh));
      if (intersects.length > 0) {
        const intersect = intersects[0];
        const hoveredMesh = intersect.object;
        const uv = intersect.uv;
        
        // 设置hover状态
        this.meshItems.forEach(item => {
          if (item.mesh === hoveredMesh) {
            item.uniforms.uIsHovered.value = 1;
            item.uniforms.uMouseUV.value = uv;
          }
        });
      }
    });

    // 鼠标离开窗口
    window.addEventListener('mouseout', () => {
      this.hoverEffect = 0.0;
      this.meshItems.forEach(item => {
        item.uniforms.uIsHovered.value = 0;
      });
    });
  }

  startRendering() {
    const animate = () => {
      requestAnimationFrame(animate);
      
      // 更新所有网格位置和尺寸
      this.meshItems.forEach(item => item.update());
      
      // 更新hover效果
      this.meshItems.forEach(item => {
        item.uniforms.uHoverEffect.value = this.hoverEffect;
        item.uniforms.uMouseEffect.value = this.hoverEffect;
      });
      
      // 渲染场景
      this.renderer.render(this.scene, this.camera);
    };
    
    animate();
  }
}

// 添加节流函数
function throttle(callback, limit) {
  let waiting = false;
  return function() {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => { waiting = false; }, limit);
    }
  }
}

// 修改事件监听器
document.addEventListener('mousemove', throttle((e) => {
  // 原有鼠标移动逻辑
}, 16)); // 限制为约60fps


// 修改动画循环
let lastTime = 0;
const animate = (time) => {
  requestAnimationFrame(animate);
  
  // 限制更新频率
  if (time - lastTime > 16) { // 约60fps
    lastTime = time;
    // 更新逻辑
    this.renderer.render(this.scene, this.camera);
  }
};

// 初始化效果
window.addEventListener('load', () => {
  new DistortionEffect();
});

