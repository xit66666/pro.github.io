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
  // 延迟300毫秒
  delay: 300,
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
ScrollReveal().reveal(".fixed-buttons li", { ...staggeringOption ,interval:300,});



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



