<script context="module">
  import { writable } from "svelte/store";

  export const store = writable([1, 2, 3]);
</script>

<script>
  function updateVal() {
    store.update(v => {
      v.push(1);
      return v;
    });
  }
</script>

<div>{$store}</div>

<button on:click={updateVal}>Update</button>
