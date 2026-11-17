const demoFrame = document.querySelector('.demo iframe');
const demoMedia = matchMedia('(max-width:760px)');
const desktopDemoSource = demoFrame?.getAttribute('src');
const syncDemo = () => {
  if (!demoFrame) return;
  const source = demoMedia.matches ? demoFrame.dataset.mobileSrc : desktopDemoSource;
  if (demoFrame.getAttribute('src') !== source) demoFrame.src = source;
};
syncDemo();
demoMedia.addEventListener('change', syncDemo);
window.addEventListener('message', event => {
  if (event.source !== demoFrame?.contentWindow || event.data?.type !== 'drawply-demo-size') return;
  const height = event.data.height;
  if (Number.isFinite(height) && height >= 180 && height <= 900) demoFrame.style.height = Math.ceil(height) + 'px';
});
