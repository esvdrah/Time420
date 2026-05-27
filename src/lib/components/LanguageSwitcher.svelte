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
	.lang-btn {
		display: inline-block;
		font-size: 0.85rem;
		font-weight: 600;
		color: #2d6a4f;
		border: 1.5px solid #2d6a4f;
		border-radius: 4px;
		padding: 0.2rem 0.6rem;
		background: none;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
		white-space: nowrap;
		font-family: inherit;
	}
	.lang-btn:hover {
		background: #2d6a4f;
		color: #fff;
	}
</style>
