import './index.scss'

// 用js切割文本
let landIInTexts = document.querySelectorAll('.landIn');
landIInTexts.forEach(landInText => {
    // 切割文本生成数组
    let letters = landInText.textContent.split('');
    landInText.textContent = "";
    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        // 逐渐递增
        span.style.animationDelay = `${i * 0.1}s`
        landInText.append(span)
    })
})

// attr()生成文本内容
let floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
floatTextMenuLinks.forEach(link => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.transitionDelay = `${i / 20}s`;
    span.dataset.text = letter;
    link.append(span);
  });
});
