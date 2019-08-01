<script>
  import Counter from "./counter/Counter.svelte";
  import Anim from "./counter/animation.svelte";
  import Button from "./components/buttons/Button.svelte";
  import Accordion from "./components/accordion/Accordion.svelte";
  import AccordionPanel from "./components/accordion/expansion-panel.svelte";
  import Card from "./components/card/Card.svelte";
  import Contact from "./modules/Contact.svelte";
  import Modal from "./components/dialog/Dialog.svelte";
  import Toolbar from "./components/toolbar/Toolbar.svelte";

  export let name;

  let accr = Array.from({ length: 10 }, (_, i) => i + 1);

  const options = [{ color: "red", component: Contact }];

  let selected = options[0];

  let showModal = false;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Toolbar />
<p>sdfdsfds</p>
<Button>Clicksfsd</Button>

<Counter title="Angular" num="1" />
<!-- <Anim /> -->

<div>Tester</div>
<h1>Hello {name}!</h1>

<h2>Tester</h2>

<!-- <svelte:component this={selected.component} /> -->

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

<button on:click={() => (showModal = true)}>show modal</button>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">
      modal
      <small>
        <em>adjective</em>
        mod·al \ˈmō-dəl\
      </small>
    </h2>

    <ol class="definition-list">
      <li>of or relating to modality in logic</li>
      <li>
        containing provisions as to the mode of procedure or the manner of
        taking effect —used of a contract or legacy
      </li>
      <li>of or relating to a musical mode</li>
      <li>of or relating to structure as opposed to substance</li>
      <li>
        of, relating to, or constituting a grammatical form or category
        characteristically indicating predication
      </li>
      <li>of or relating to a statistical mode</li>
    </ol>

    <a href="https://www.merriam-webster.com/dictionary/modal">
      merriam-webster.com
    </a>
  </Modal>
{/if}
