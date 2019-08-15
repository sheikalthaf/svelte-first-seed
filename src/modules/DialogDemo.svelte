<script>
  import { dialog, Modal } from "../components/dialog";
  import Contact from "./Contact.svelte";

  let name = "Test";
</script>

<button use:dialog={{ comp: Contact, props: { name } }}>Open dialog</button>
