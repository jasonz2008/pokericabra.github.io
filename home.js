const demoFrame = document.querySelector('.demo iframe');
if (demoFrame && matchMedia('(max-width:760px)').matches) demoFrame.src = demoFrame.dataset.mobileSrc;
window.addEventListener('message', event => {
  if (event.source !== demoFrame?.contentWindow || event.data?.type !== 'drawply-demo-size') return;
  const height = event.data.height;
  if (Number.isFinite(height) && height >= 180 && height <= 900) demoFrame.style.height = Math.ceil(height) + 'px';
});
