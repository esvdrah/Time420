<script>
	import { setLocale, getLocale } from '$lib/paraglide/runtime';

	const locale = $derived(getLocale());
	const otherLocale = $derived(locale === 'en' ? 'es' : 'en');
	const otherLabel = $derived(locale === 'en' ? 'ES' : 'EN');
</script>

<button
	class="lang-btn"
	aria-label="Switch language"
	onclick={() => setLocale(otherLocale)}
>
	{otherLabel}
</button>

<style>
	/* Compact outlined pill — DESIGN.md §4 Navigation Header / Language Switcher */
	.lang-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-display);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: var(--accent);
		border: 1.5px solid var(--border-accent);
		border-radius: var(--radius-sm);
		padding: 0.25rem 0.65rem;
		background: transparent;
		cursor: pointer;
		transition:
			background 0.2s var(--ease),
			color 0.2s var(--ease),
			border-color 0.2s var(--ease);
		white-space: nowrap;
	}
	.lang-btn:hover {
		background: var(--accent-hover);
		border-color: var(--border-accent-hov);
		color: var(--accent);
	}
</style>
