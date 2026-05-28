<script>
	import * as m from '$lib/paraglide/messages';

	const faqs = $derived([
		{ q: m.support_q1(), a: m.support_a1() },
		{ q: m.support_q2(), a: m.support_a2() },
		{ q: m.support_q3(), a: m.support_a3() },
		{ q: m.support_q4(), a: m.support_a4() },
		{ q: m.support_q5(), a: m.support_a5() }
	]);
</script>

<svelte:head>
	<title>Support — Time 420</title>
	<meta name="description" content="Get help with Time 420. Find answers to common questions and contact us at support@time420.app." />
</svelte:head>

<article class="support-page">
	<div class="container">
		<header class="page-header">
			<div class="page-label">Help & Support</div>
			<h1>{m.support_title()}</h1>
		</header>

		<section class="contact-section">
			<p>{m.support_intro()}</p>
			<a href="mailto:support@time420.app" class="email-link">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
					<path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				</svg>
				support@time420.app
			</a>
		</section>

		<section class="faq-section">
			<div class="section-label">Frequently asked</div>
			<h2>{m.support_faq_title()}</h2>

			<dl class="faq-list">
				{#each faqs as { q, a }}
					<div class="faq-item">
						<dt>
							<span class="faq-icon" aria-hidden="true">?</span>
							{q}
						</dt>
						<dd>{a}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="contact-section bottom-contact">
			<h2>{m.support_contact_title()}</h2>
			<p>{m.support_contact()}</p>
			<a href="mailto:support@time420.app" class="email-link">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
					<path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				</svg>
				support@time420.app
			</a>
		</section>
	</div>
</article>

<style>
	/* DESIGN.md §5 Layout — content max-width 720px, 4-5rem vertical padding */
	.support-page {
		padding: 4rem 0 5rem;
	}
	.container {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Page header — DESIGN.md §4 Page Headers */
	.page-header {
		margin-bottom: 2.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
	}
	/* Eyebrow — DESIGN.md §3: 0.7rem DM Sans 600 ALL CAPS Luminescent Emerald */
	.page-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.6rem;
	}
	/* H1 gradient — DESIGN.md §3: Frost White → Luminescent Emerald */
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
	h2 {
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1.25rem;
		letter-spacing: -0.02em;
	}
	p {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.75;
		margin: 0 0 0.75rem;
	}
	.contact-section {
		margin-bottom: 3rem;
	}

	/* Email link pill — DESIGN.md §4: --radius-md, Emerald tokens */
	.email-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.925rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-pale);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
		padding: 0.6rem 1.1rem;
		text-decoration: none;
		transition:
			background 0.2s var(--ease),
			border-color 0.2s var(--ease),
			box-shadow 0.2s var(--ease);
		letter-spacing: 0.01em;
	}
	.email-link:hover {
		background: var(--accent-hover);
		border-color: var(--border-accent-hov);
		box-shadow: var(--shadow-glow);
		color: var(--accent);
	}

	/* Section eyebrow */
	.section-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.4rem;
	}
	.faq-section {
		margin-bottom: 3rem;
	}
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	/* FAQ card — DESIGN.md §4: --radius-lg (14px), Shadowed Understory bg */
	.faq-item {
		background: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.25rem 1.35rem;
		transition: border-color 0.2s var(--ease);
	}
	.faq-item:hover {
		border-color: var(--border-light);
	}
	dt {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.65rem;
		letter-spacing: -0.01em;
	}
	/* FAQ icon badge — DESIGN.md §4: circle, Emerald Whisper Border */
	.faq-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		min-width: 20px;
		border-radius: 50%;
		background: var(--accent-pale);
		border: 1px solid var(--border-accent-dim);
		color: var(--accent);
		font-size: 0.7rem;
		font-weight: 800;
		font-family: var(--font-display);
		margin-top: 0.05em;
	}
	dd {
		font-size: 0.875rem;
		color: var(--text-muted);
		line-height: 1.75;
		margin: 0;
		padding-left: 2rem;
	}
	.bottom-contact {
		padding-top: 2rem;
		border-top: 1px solid var(--border);
	}
</style>
