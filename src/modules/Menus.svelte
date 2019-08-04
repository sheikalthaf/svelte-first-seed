<script>
  import { Router, Link, Route } from "svelte-routing";
  import List from "../components/list/List.svelte";
  import AccordionDemo from "./AccordionDemo.svelte";

  export let menus = [];
  let url = "";
</script>

<Router {url}>
  {#each menus as [menu]}
    <List>
      <Link to={menu}>{menu}</Link>
    </List>
  {/each}
</Router>
