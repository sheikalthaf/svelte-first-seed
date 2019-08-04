<script>
  import { fxFlex } from "../components/layout/Layout.js";

  let tester = 1;
</script>

<span use:fxFlex={{ flex: 'row', align: tester }} on:click={() => tester++}>
  I'm Tooltip {tester}
</span>
