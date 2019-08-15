export default function dialog(node, props) {
  const main = document.getElementById('app23123');
  node.addEventListener('click', create);
  let count = 1;
  let modalCollection = new Map();

  function create() {
    const modalComp = new props.comp({
      target: main,
      props: props.props
    });
    modalCollection.set(count, modalComp);
    console.log(modalCollection);
  }

  function close() {
    modalComp.$destroy();
  }

  function closeAll() {
    modalCollection.forEach(e => e.$destroy());
  }

  return {
    destroy() {
      closeAll();
    }
  };
}
