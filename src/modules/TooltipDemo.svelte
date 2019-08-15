<script>
  import tooltip from "../components/tooltip/Tooltip.js";
  import Card from "../components/card/Card.svelte";
</script>

<Card>
  <span use:tooltip={"I'm tooltip"}>Hover me</span>
</Card>
