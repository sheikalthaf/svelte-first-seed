import DialogInternal from './DialogInternal.svelte';

export default function dialog(node, props) {
  const main = document.getElementById('app23123');
  node.addEventListener('click', create);
  let modalComp, div;
  let isClosed = true;

  function create() {
    div = document.createElement('div');
    div.className = 'app231234';
    div.addEventListener('click', close);
    modalComp = new DialogInternal({
      target: div,
      props: { component: props.comp, props: props.props }
    });
    main.appendChild(div);
    isClosed = false;
  }

  function close() {
    if (isClosed) return;
    modalComp.$destroy();
    main.removeChild(div);
    isClosed = true;
  }

  return {
    destroy() {
      close();
      node.removeEventListener('click', create);
    }
  };
}
