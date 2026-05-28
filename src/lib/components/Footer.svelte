<script>
	import * as m from '$lib/paraglide/messages';
</script>

<footer>
	<div class="footer-inner">
		<div class="footer-logo">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 64 64" aria-hidden="true">
				<rect width="64" height="64" rx="14" fill="var(--accent-pale)"/>
				<circle cx="32" cy="36" r="18" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
				<line x1="32" y1="36" x2="32" y2="22" stroke="var(--text-primary)" stroke-width="3" stroke-linecap="round"/>
				<line x1="32" y1="36" x2="42" y2="36" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
			</svg>
			<span class="footer-brand">Time 420</span>
		</div>
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
		background: var(--bg-surface);
		border-top: 1px solid var(--border);
		margin-top: 5rem;
	}
	.footer-inner {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2.25rem 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
	}
	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.25rem;
	}
	.footer-brand {
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--text-muted);
		letter-spacing: -0.01em;
	}
	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem;
	}
	.footer-nav a {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--text-faint);
		text-decoration: none;
		padding: 0.3rem 0.6rem;
		border-radius: 4px;
		transition: color 0.2s var(--ease), background 0.2s var(--ease);
		letter-spacing: 0.01em;
	}
	.footer-nav a:hover {
		color: var(--accent);
		background: var(--accent-pale);
	}
	.copy {
		font-size: 0.75rem;
		color: var(--text-faint);
		margin: 0;
		letter-spacing: 0.01em;
	}
</style>
