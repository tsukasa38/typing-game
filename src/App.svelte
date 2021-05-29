<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<Router {routes} />

<style>
  :global(:root) {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
  
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
