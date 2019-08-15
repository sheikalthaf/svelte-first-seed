<script>
  import ripple from "../layout/ripple.js";
</script>

<style>
  .sve-list {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
</style>

<div use:ripple class="sve-list">
  <slot />
</div>
