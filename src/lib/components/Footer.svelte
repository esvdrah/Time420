<script>
	import * as m from '$lib/paraglide/messages';
</script>

<footer>
	<div class="footer-inner">
		<nav class="footer-nav" aria-label="Footer navigation">
			<a href="/privacy">{m.nav_privacy()}</a>
			<a href="/support">{m.nav_support()}</a>
			<a href="/age-suitability">{m.nav_age()}</a>
		</nav>
		<p class="copy">{m.footer_copy()}</p>
	</div>
</footer>

<style>
	footer {
		background: #f9fafb;
		border-top: 1px solid #e5e7eb;
		margin-top: 4rem;
	}
	.footer-inner {
		max-width: 960px;
		margin: 0 auto;
		padding: 2rem 1.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		text-align: center;
	}
	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	.footer-nav a {
		font-size: 0.875rem;
		color: #6b7280;
		text-decoration: none;
		transition: color 0.15s;
	}
	.footer-nav a:hover {
		color: #2d6a4f;
	}
	.copy {
		font-size: 0.8rem;
		color: #9ca3af;
		margin: 0;
	}
</style>
