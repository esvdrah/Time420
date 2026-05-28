<script>
	import * as m from '$lib/paraglide/messages';

	const choices = $derived([
		m.privacy_s10_1(),
		m.privacy_s10_2(),
		m.privacy_s10_3(),
		m.privacy_s10_4()
	]);
</script>

<svelte:head>
	<title>Privacy Policy — Time 420</title>
	<meta name="description" content="Read the Privacy Policy for Time 420, including information on data collection, advertising, and your privacy choices." />
</svelte:head>

<article class="legal-page">
	<div class="container">
		<header class="page-header">
			<div class="page-label">Legal</div>
			<h1>{m.privacy_title()}</h1>
			<p class="effective">{m.privacy_effective()}</p>
		</header>

		<p>{m.privacy_intro()}</p>

		<section>
			<h2>{m.privacy_s1_title()}</h2>
			{#each m.privacy_s1().split('\n\n') as para}
				<p>{para}</p>
			{/each}
		</section>

		<section>
			<h2>{m.privacy_s2_title()}</h2>
			<p>{m.privacy_s2()}</p>
		</section>

		<section>
			<h2>{m.privacy_s3_title()}</h2>
			{#each m.privacy_s3().split('\n\n') as para}
				{#if para.startsWith('https://')}
					<p><a href={para} target="_blank" rel="noopener noreferrer">{para}</a></p>
				{:else}
					<p>{para}</p>
				{/if}
			{/each}
		</section>

		<section>
			<h2>{m.privacy_s4_title()}</h2>
			{#each m.privacy_s4().split('\n\n') as para}
				<p>{para}</p>
			{/each}
		</section>

		<section>
			<h2>{m.privacy_s5_title()}</h2>
			<p>{m.privacy_s5()}</p>
		</section>

		<section>
			<h2>{m.privacy_s6_title()}</h2>
			<p>{m.privacy_s6()}</p>
		</section>

		<section>
			<h2>{m.privacy_s7_title()}</h2>
			<p>{m.privacy_s7()}</p>
		</section>

		<section>
			<h2>{m.privacy_s8_title()}</h2>
			<p>{m.privacy_s8()}</p>
		</section>

		<section>
			<h2>{m.privacy_s9_title()}</h2>
			<p>{m.privacy_s9()}</p>
		</section>

		<section>
			<h2>{m.privacy_s10_title()}</h2>
			<p>{m.privacy_s10_intro()}</p>
			<ul>
				{#each choices as choice}
					<li>{choice}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>{m.privacy_s11_title()}</h2>
			<p>{m.privacy_s11()}</p>
		</section>

		<section>
			<h2>{m.privacy_s12_title()}</h2>
			<p>{m.privacy_s12()}</p>
			<a href="mailto:support@time420.app" class="email-link">support@time420.app</a>
		</section>
	</div>
</article>

<style>
	/* DESIGN.md §5 Layout */
	.legal-page {
		padding: 4rem 0 5rem;
	}
	.container {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Page header — DESIGN.md §4 Page Headers */
	.page-header {
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}
	/* Eyebrow */
	.page-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.6rem;
	}
	/* H1 gradient — DESIGN.md §3 */
	h1 {
		font-family: var(--font-display);
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 0.4rem;
	}
	/* Effective date — DESIGN.md §3: Shadow Fern, 0.8rem */
	.effective {
		font-size: 0.8rem;
		color: var(--text-faint);
		margin: 0;
		letter-spacing: 0.01em;
	}

	/* Sections — DESIGN.md §4: Deep Root Border dividers, 2rem top padding */
	section {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
	}
	/* Section H2 — DESIGN.md §4: Syne 700, Luminescent Emerald, 0.01em spacing */
	h2 {
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--accent);
		margin: 0 0 0.75rem;
		letter-spacing: 0.01em;
	}
	p {
		font-size: 0.925rem;
		color: var(--text-muted);
		line-height: 1.8;
		margin: 0 0 0.75rem;
	}
	ul {
		padding-left: 1.25rem;
		margin: 0.5rem 0 0;
	}
	li {
		font-size: 0.925rem;
		color: var(--text-muted);
		line-height: 1.75;
		margin-bottom: 0.4rem;
	}
	li::marker {
		color: var(--accent);
	}

	/* Inline links in body text */
	a {
		color: var(--accent);
		transition: color 0.2s var(--ease);
	}
	a:hover {
		color: var(--text-secondary);
	}

	/* Email link pill — DESIGN.md §4: --radius-md, all tokens */
	.email-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-pale);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
		padding: 0.5rem 1rem;
		text-decoration: none;
		transition:
			background 0.2s var(--ease),
			border-color 0.2s var(--ease),
			box-shadow 0.2s var(--ease);
	}
	.email-link:hover {
		background: var(--accent-hover);
		border-color: var(--border-accent-hov);
		box-shadow: var(--shadow-glow);
		color: var(--accent);
	}
</style>
