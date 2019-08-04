<script>
  import { fade, slide, crossfade, fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";
  import ripple from "../layout/ripple.js";

  export let condition = false;
  export let label;
</script>

<style lang="scss">
  .main {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
    transition: 0.3s ease margin;
  }

  .header {
    display: flex;
    align-items: center;
    padding: 0 24px;
    transition: 0.3s ease height;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
    span {
      flex: 1;
    }
  }

  .spacing {
    margin: 16px 0;
    .header:hover {
      background: none;
    }
    &:first-child {
      margin-top: 0;
    }
  }

  .inner-content {
    padding: 24px;
  }
</style>

<div class="main" class:spacing={condition}>
  <div
    on:click={() => (condition = !condition)}
    class="header"
    style="height: {condition ? 64 : 48}px">
    <span>{label}</span>
    <i class="fa {condition ? 'fa-angle-up' : 'fa-angle-down'}" />
  </div>
  {#if condition}
    <div transition:slide={{ duration: 300 }} class="inner-content">
      <slot />
    </div>
  {/if}
</div>
