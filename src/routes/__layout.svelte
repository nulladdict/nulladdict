<script lang="ts">
  import "../app.css";
  import workletUrl from "$lib/polka.js?url";
  const tag = "script";
  const register = `<${tag} type="module">if("paintWorklet" in CSS){CSS.paintWorklet.addModule("${workletUrl}")}</${tag}>`;
</script>

<slot />
{@html register}
