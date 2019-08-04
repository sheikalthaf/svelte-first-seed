<script>
  import { fade, slide, crossfade, fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";

  export let component;
  export let props;
  let visible = false;

  setTimeout(() => (visible = true));
</script>

<style>
  div {
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
</style>

{#if visible}
  <div
    in:fly={{ y: 70, scale: 0.8, duration: 300, opacity: 1 }}
    out:fly={{ y: -200, duration: 300, opacity: 0 }}>
    <svelte:component this={component} {...props} />
  </div>
{/if}
