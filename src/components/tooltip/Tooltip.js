export default function tooltip(node, text) {
  let div;
  let settimeoutCatch;

  node.addEventListener('mouseenter', mouseenter);

  node.addEventListener('mouseleave', mouseleave);

  function mouseenter() {
    mouseleave();
    settimeoutCatch = setTimeout(() => {
      const { top, left, height } = node.getBoundingClientRect();
      div = document.createElement('div');
      div.textContent = text;
      div.className = 'svtooltip';
      div.style.cssText = { top: top + height + 'px', left: left + 10 + 'px' };
      node.appendChild(div);
    }, 100);
  }

  function mouseleave() {
    clearTimeout(settimeoutCatch);
    if (div) {
      node.removeChild(div);
      div = null;
    }
  }

  return {
    destroy() {
      clearTimeout(settimeoutCatch);
      mouseleave();
      node.removeEventListener('mouseover', () => {});
    }
  };
}
