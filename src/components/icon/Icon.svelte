<script>
  import ripple from "../layout/ripple";
</script>

<style>
  span {
    height: 100%;
    width: 55px;
    margin: 0 0 0 -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<span use:ripple>
  <i class="material-icons">
    <slot />
  </i>
</span>
