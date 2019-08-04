export default function ripple(node) {
  node.classList.add('ripple-block');

  node.addEventListener('click', rippleEffect);

  function rippleEffect(event) {
    let { top, left, width, height } = node.getBoundingClientRect();

    const span = document.createElement('span');
    span.className = 'ripple';
    node.appendChild(span);

    // Make it round!
    if (width >= height) {
      height = width;
    } else {
      width = height;
    }

    // Get the center of the element
    var x = event.pageX - left - width / 2;
    var y = event.pageY - top - height / 2;

    span.style.width = width + 'px';
    span.style.height = height + 'px';
    span.style.top = y + 'px';
    span.style.left = x + 'px';

    span.classList.add('rippleEffect');

    setTimeout(() => node.removeChild(span), 600);
  }

  return {
    destroy() {
      node.removeEventListener('click', () => {});
    }
  };
}
