<script>
  import { Router, Link, Route } from "svelte-routing";
  import List from "../components/list/List.svelte";
  import AccordionDemo from "./AccordionDemo.svelte";

  export let menus = [];
  let url = "";
</script>

<style lang="scss">
  div :global(a) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 -15px;
    padding: 0 15px;
    color: black;
    text-decoration: none;
    &:hover {
      background: #dfdfdf;
    }
  }
</style>

<div>
  <Router {url}>
    {#each menus as [menu]}
      <List>
        <Link to={menu}>{menu}</Link>
      </List>
    {/each}
  </Router>
</div>
