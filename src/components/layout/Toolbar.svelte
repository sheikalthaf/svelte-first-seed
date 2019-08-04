<script>
  import Icon from "../icon/Icon.svelte";
</script>

<style>
  header {
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: white;
    height: 55px;
    background: #1976d2;
    z-index: 1;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
</style>

<header>
  <Icon>menu</Icon>
</header>
