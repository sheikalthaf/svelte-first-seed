<script>
  import { writable } from "svelte/store";
  export let title;

  $: {
    console.log(`multiple statements can be combined`);
    console.log(`the current title is ${num}`);
  }

  export let num;

  // we don't need to declare `squared` and `cubed`
  // — Svelte does it for us
  $: squared = num * num;
  $: cubed = squared * num;

  const clicked = () => {
    title = "testt" + new Date().getUTCMilliseconds();
  };

  const count = writable(0);
  console.log($count); // logs 0

  count.set(1);
  console.log($count); // logs 1

  $count = 2;
  console.log($count); // logs 2

  count.update(u => u + 1);
  console.log($count); // logs 2

  const unsubscribe = count.subscribe(value => {
    console.log(value);
  }); // logs `value`

  // later...
  // unsubscribe();
</script>

<div>{title}</div>
<button on:click={clicked}>CLiked</button>
