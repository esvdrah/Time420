<script>
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>Age Suitability — Time 420</title>
	<meta name="description" content="Age suitability information for Time 420. The app is intended for adults. Learn about content, advertising, and local law compliance." />
</svelte:head>

<article class="legal-page">
	<div class="container">
		<header class="page-header">
			<div class="page-label">Legal</div>
			<h1>{m.age_title()}</h1>
		</header>

		{#each m.age_body().split('\n\n') as para}
			<p>{para}</p>
		{/each}

		<section class="contact-section">
			<p>{m.age_contact()}</p>
			<a href="mailto:support@time420.app" class="email-link">support@time420.app</a>
		</section>
	</div>
</article>

<style>
	.legal-page {
		padding: 4rem 0 5rem;
	}
	.container {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.page-header {
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}
	.page-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.6rem;
	}
	h1 {
		font-family: var(--font-display);
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0;
	}
	p {
		font-size: 0.925rem;
		color: var(--text-muted);
		line-height: 1.8;
		margin: 0 0 1rem;
	}
	.contact-section {
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
	}
	.email-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-pale);
		border: 1px solid rgba(52,211,153,0.25);
		border-radius: 8px;
		padding: 0.5rem 1rem;
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
	}
	.email-link:hover {
		background: rgba(52,211,153,0.14);
		border-color: rgba(52,211,153,0.5);
		box-shadow: 0 0 16px rgba(52,211,153,0.1);
		color: var(--accent);
	}
</style>
