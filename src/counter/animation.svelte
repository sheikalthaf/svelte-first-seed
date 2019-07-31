<script>
  import { fade, slide, crossfade, fly } from "svelte/transition";
  import { bounceInOut } from "svelte/easing";

  let condition = true;
</script>

<button on:click={() => (condition = !condition)} />
{#if condition}
  <div transition:slide={{ duration: 300 }}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia corporis
    perspiciatis aliquid dignissimos ab consectetur id quia, molestias eveniet
    facere harum quisquam, fuga itaque. Dolorem fuga cupiditate tenetur ratione
    unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
    corporis perspiciatis aliquid dignissimos ab consectetur id quia, molestias
    eveniet facere harum quisquam, fuga itaque. Dolorem fuga cupiditate tenetur
    ratione unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Mollitia corporis perspiciatis aliquid dignissimos ab consectetur id quia,
    molestias eveniet facere harum quisquam, fuga itaque. Dolorem fuga
    cupiditate tenetur ratione unde. Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Mollitia corporis perspiciatis aliquid dignissimos ab
    consectetur id quia, molestias eveniet facere harum quisquam, fuga itaque.
    Dolorem fuga cupiditate tenetur ratione unde. Lorem ipsum dolor sit amet
    consectetur, adipisicing elit. Mollitia corporis perspiciatis aliquid
    dignissimos ab consectetur id quia, molestias eveniet facere harum quisquam,
    fuga itaque. Dolorem fuga cupiditate tenetur ratione unde. Lorem ipsum dolor
    sit amet consectetur, adipisicing elit. Mollitia corporis perspiciatis
    aliquid dignissimos ab consectetur id quia, molestias eveniet facere harum
    quisquam, fuga itaque. Dolorem fuga cupiditate tenetur ratione unde. Lorem
    ipsum dolor sit amet consectetur, adipisicing elit. Mollitia corporis
    perspiciatis aliquid dignissimos ab consectetur id quia, molestias eveniet
    facere harum quisquam, fuga itaque. Dolorem fuga cupiditate tenetur ratione
    unde.
  </div>
{/if}
