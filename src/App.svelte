<script>
  import Counter from "./counter/Counter.svelte";
  import Anim from "./counter/animation.svelte";
  import Button from "./components/buttons/Button.svelte";
  import Accordion from "./components/accordion/Accordion.svelte";
  import AccordionPanel from "./components/accordion/expansion-panel.svelte";
  import Card from "./components/card/Card.svelte";

  export let name;

  let accr = Array.from({ length: 100 }, (_, i) => i + 1);
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Button>Click</Button>

<Counter title="Angular" num="1" />
<Anim />

<div>Tester</div>
<h1>Hello {name}!</h1>

<Card>
  <Accordion>
    {#each accr as ac}
      <AccordionPanel label="Tab {ac}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
        amet ipsa, officia eum nihil illum, voluptate nesciunt, delectus
        consequatur id. Facere pariatur, aliquid minus saepe vitae voluptas
        voluptate nobis.
      </AccordionPanel>
    {/each}
  </Accordion>
</Card>
