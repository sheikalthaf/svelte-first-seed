<script>
  import Card from "../components/card/Card.svelte";
</script>

<style>
  div {
    margin-bottom: 20px;
  }
</style>

<h1 class="common-header">Card</h1>

{#each [1, 2, 3] as tr}
  <div>
    <Card>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
      architecto cum quas animi iusto, laudantium similique veniam aliquid, nisi
      quae et. Sequi nam quaerat amet, eum quasi consectetur enim hic?
      Consequatur architecto cum quas animi iusto, laudantium similique veniam
      aliquid, nisi quae et. Sequi nam quaerat amet, eum quasi consectetur enim
      hic? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
      architecto cum quas animi iusto, laudantium similique veniam aliquid, nisi
      quae et. Sequi nam quaerat amet, eum quasi consectetur enim hic?
    </Card>
  </div>
{/each}
