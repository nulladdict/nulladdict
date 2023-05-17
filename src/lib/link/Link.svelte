<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  interface $$Props extends HTMLAnchorAttributes {}
</script>

<a
  {...$$props}
  href={$$props.href}
  class={`text-teal-300 underline decoration-from-font hover:no-underline focus-visible:no-underline ${
    $$props.class || ""
  }`}
>
  <slot />
</a>
