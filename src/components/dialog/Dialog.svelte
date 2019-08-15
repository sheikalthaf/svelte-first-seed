<script>
  import { createEventDispatcher } from "svelte";
  import { fade, slide, crossfade, fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";

  const dispatch = createEventDispatcher();

  let visible = false;

  setTimeout(() => (visible = true));

  function noclose(ev) {
    ev.stopPropagation();
  }

  function close(data) {
    visible = false;
    setTimeout(() => {
      dispatch("close", data);
    }, 300);
  }
</script>

<style lang="scss">
  $pad: 15px;

  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal-header {
    padding: $pad;
    border-bottom: 1px solid #d9d9d9;
    height: 35px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
  }

  .sve-modal-content {
    padding: $pad;
    max-height: calc(100vh - 329px);
    overflow: auto;
  }

  .sve-modal-footer {
    padding: $pad;
    border-top: 1px solid #d9d9d9;
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    border-radius: 0.2em;
    background: white;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }

  button {
    display: block;
  }
</style>

{#if visible}
  <div>
    <div
      transition:fade
      class="modal-background"
      on:click={() => close({ data: '123' })} />

    <div
      class="modal"
      on:click={noclose}
      in:fly={{ y: 70, z: 10, scale: 0.8, duration: 300, opacity: 1 }}
      out:fly={{ y: 70, z: 10, duration: 300, opacity: 0 }}>
      <div class="modal-header">
        <slot name="header" />
      </div>
      <div class="sve-modal-content">
        <slot />
      </div>
      <div class="sve-modal-footer">
        <slot name="footer" {close} />
      </div>
    </div>
  </div>
{/if}
