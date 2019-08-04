<script>
  import Radio from "../components/radio/RadioButton.svelte";

  let items = Array.from({ length: 5 }, (_, i) => i + 1);
</script>

<h1 class="common-header">Radio Button</h1>

{#each items as item}
  <Radio>Radio {item}</Radio>
{/each}
