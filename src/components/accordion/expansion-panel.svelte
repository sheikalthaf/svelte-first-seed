<script>
  import { fade, slide, crossfade, fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";

  export let condition = false;
  export let label;
</script>

<style>
  .main {
    border: 4px solid #e8e8e8;
  }

  .header {
    height: 48px;
    background: #e8e8e8;
    display: flex;
    align-items: center;
    padding: 0 24px;
  }
  .header span {
    flex: 1;
  }

  .inner-content {
    /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); */
    padding: 24px;
  }
</style>

<div class="main">
  <div on:click={() => (condition = !condition)} class="header">
    <span>{label}</span>
    <i class="fa {condition ? 'fa-angle-up' : 'fa-angle-down'}" />
  </div>
  {#if condition}
    <div transition:slide={{ duration: 300 }} class="inner-content">
      <slot />
    </div>
  {/if}
</div>
