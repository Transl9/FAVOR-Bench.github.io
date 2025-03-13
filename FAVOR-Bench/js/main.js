// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
  // 可以在这里添加页面加载时的动画效果
  console.log('FAVOR-Bench website loaded');
});