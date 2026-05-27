<script>
	import { setLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
</script>

<h1>{m.home_title()}</h1>

<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('es')}>es</button>
</div>
