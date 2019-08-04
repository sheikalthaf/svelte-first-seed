<script>
  import { Card, Button } from "../components/index";
  import ProgressBar from "../components/progress-bar/ProgressBar.svelte";

  let progress = 50;
</script>

<style>
  h4 {
    margin: 0 0 30px;
    color: rgb(149, 149, 149);
  }
</style>

<h1 class="common-header">Progress Bar</h1>

<Card>
  <h4>Progress bar configuration</h4>
  <ProgressBar type="determinate" width={progress} />

  <Button on:click={() => (progress += 10)}>Increment</Button>
  <Button on:click={() => (progress -= 10)}>Decrement</Button>
</Card>
