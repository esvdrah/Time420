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
			<h1>{m.support_title()}</h1>
		</header>

		<section class="contact-section">
			<p>{m.support_intro()}</p>
			<a href="mailto:support@time420.app" class="email-link">support@time420.app</a>
		</section>

		<section class="faq-section">
			<h2>{m.support_faq_title()}</h2>

			<dl class="faq-list">
				{#each faqs as { q, a }}
					<div class="faq-item">
						<dt>{q}</dt>
						<dd>{a}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="contact-section bottom-contact">
			<h2>{m.support_contact_title()}</h2>
			<p>{m.support_contact()}</p>
			<a href="mailto:support@time420.app" class="email-link">support@time420.app</a>
		</section>
	</div>
</article>

<style>
	.support-page {
		padding: 3rem 0 4rem;
	}
	.container {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.25rem;
	}
	.page-header {
		border-bottom: 2px solid #2d6a4f;
		padding-bottom: 1.25rem;
		margin-bottom: 2rem;
	}
	h1 {
		font-size: clamp(1.5rem, 5vw, 2.25rem);
		font-weight: 800;
		color: #1a3c2e;
		margin: 0;
	}
	h2 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1a3c2e;
		margin: 0 0 1rem;
	}
	p {
		font-size: 0.975rem;
		color: #374151;
		line-height: 1.7;
		margin: 0 0 0.5rem;
	}
	.contact-section {
		margin-bottom: 2.5rem;
	}
	.email-link {
		display: inline-block;
		font-size: 1rem;
		font-weight: 600;
		color: #2d6a4f;
		background: #f0fdf4;
		border: 1.5px solid #bbf7d0;
		border-radius: 6px;
		padding: 0.5rem 1rem;
		text-decoration: none;
		transition: background 0.15s;
	}
	.email-link:hover {
		background: #dcfce7;
	}
	.faq-section {
		margin-bottom: 2.5rem;
	}
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.faq-item {
		background: #f9fafb;
		border-left: 3px solid #2d6a4f;
		border-radius: 0 6px 6px 0;
		padding: 1rem 1.25rem;
	}
	dt {
		font-size: 0.975rem;
		font-weight: 700;
		color: #1a3c2e;
		margin-bottom: 0.5rem;
	}
	dd {
		font-size: 0.9rem;
		color: #374151;
		line-height: 1.7;
		margin: 0;
	}
	.bottom-contact {
		padding-top: 1rem;
		border-top: 1px solid #e5e7eb;
	}
</style>
