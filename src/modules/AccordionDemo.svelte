<script>
  import { Accordion, AccordionPanel } from "../components/accordion";

  let accr = Array.from({ length: 10 }, (_, i) => i + 1);
</script>

<h1 class="common-header">Accordion</h1>

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
