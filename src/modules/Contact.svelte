<script>
  import { onDestroy } from "svelte";
  import Table from "../components/table/Table.svelte";
  import TableHead from "../components/table/TableHead.svelte";
  import TableBody from "../components/table/TableBody.svelte";
  import TableRow from "../components/table/TableRow.svelte";
  import TableCell from "../components/table/TableCell.svelte";
  import { Modal } from "../components/dialog";
  import Button from "../components/buttons/Button.svelte";

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  export let name;

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  onDestroy(() => {
    console.log(`I'm destroyed`);
  });
</script>

<style>
  .tester {
    text-align: right;
  }
</style>

<Modal on:close={e => console.log(e.detail)}>
  <div slot="header">Are you sure to delete?</div>

  <!-- <Table>
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {#each rows as row}
        <TableRow>
          <TableCell component="th" scope="row">{row.name}</TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      {/each}
    </TableBody>
  </Table> -->
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  <div slot="footer" let:close class="tester">
    <Button on:click={close}>Yes</Button>
    <Button on:click={close}>No</Button>
  </div>
</Modal>
