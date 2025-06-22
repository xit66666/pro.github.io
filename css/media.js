// -------------------------------手机端导航点击事件-----------------------------------
// 获取折叠按钮实例
const burgerEl = document.querySelector(".burger");
// 监听herder
const headerEl = document.querySelector(".header");

burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
  burgerEl.classList.toggle("close");
})



// ----------------------------------图片不能下载----------------------------------
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  var alertBox = document.createElement('div');
  var alertText = document.createTextNode('不可以复制或下载图片哦~');
  alertBox.appendChild(alertText);
  alertBox.style.width = '200px';
  alertBox.style.height = '40px';
  alertBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  alertBox.style.color = '#fff';
  alertBox.style.fontSize = '14px';
  alertBox.style.borderRadius = '4px';
  alertBox.style.position = 'fixed';
  alertBox.style.top = '50%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  alertBox.style.textAlign = 'center';
  alertBox.style.lineHeight = '40px';
  document.body.appendChild(alertBox);
  setTimeout(function() {
    alertBox.style.opacity = '0';
    setTimeout(function() {
      document.body.removeChild(alertBox);
    }, 500);
  }, 1000);
});


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


