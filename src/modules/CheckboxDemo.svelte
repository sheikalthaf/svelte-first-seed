<script>
  import Checkbox from "../components/checkbox/Checkbox.svelte";

  let items = Array.from({ length: 5 }, (_, i) => i + 1);
</script>

<h1 class="common-header">Checkbox</h1>

{#each items as item}
  <Checkbox>{item}</Checkbox>
{/each}
