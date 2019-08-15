<script>
  import Toolbar from "./components/layout/Toolbar.svelte";
  import MenuList from "./modules/Menus.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import AccordionDemo from "./modules/AccordionDemo.svelte";
  import HomeDemo from "./modules/Home.svelte";
  import ButtonDemo from "./modules/ButtonDemo.svelte";
  import CardDemo from "./modules/CardDemo.svelte";
  import DialogDemo from "./modules/DialogDemo.svelte";
  import ProgressBarDemo from "./modules/ProgressBarDemo.svelte";
  import TableDemo from "./modules/TableDemo.svelte";
  import RadioButtonDemo from "./modules/RadioButtonDemo.svelte";
  import CheckboxDemo from "./modules/CheckboxDemo.svelte";
  import TooltipDemo from "./modules/TooltipDemo.svelte";

  let menus = [
    ["/", HomeDemo],
    ["Accordion", AccordionDemo],
    ["Button", ButtonDemo],
    ["Card", CardDemo],
    ["Dialog", DialogDemo],
    ["Layout", AccordionDemo],
    ["List", AccordionDemo],
    ["ProgressBar", ProgressBarDemo],
    ["Tab", AccordionDemo],
    ["Table", TableDemo],
    ["Toolbar", AccordionDemo],
    ["RadioButton", RadioButtonDemo],
    ["Checkbox", CheckboxDemo],
    ["Tooltip", TooltipDemo]
  ];
</script>

<style>
  .drawer-contaienr {
    display: flex;
    flex-direction: column;
  }

  .drawer {
    flex: calc(100vh - 55px);
    overflow: auto;
    display: flex;
    height: 100%;
    overflow: hidden;
  }

  .side-nav {
    width: 250px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background: #fff;
  }
  .main-container {
    overflow: auto;
    padding: 24px;
    width: 100%;
  }
</style>

<div class="drawer-contaienr">
  <Toolbar />
  <div class="drawer">
    <div class="side-nav">
      <MenuList {menus} />
    </div>
    <div class="main-container">
      <Router>
        {#each menus as [name, comp]}
          <Route path={name} component={comp} />
        {/each}
      </Router>
    </div>
  </div>
</div>
