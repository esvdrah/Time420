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
			<h1>{m.age_title()}</h1>
		</header>

		{#each m.age_body().split('\n\n') as para}
			<p>{para}</p>
		{/each}

		<section class="contact-section">
			<p>{m.age_contact()}</p>
			<a href="mailto:support@time420.app">support@time420.app</a>
		</section>
	</div>
</article>

<style>
	.legal-page {
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
	p {
		font-size: 0.975rem;
		color: #374151;
		line-height: 1.75;
		margin: 0 0 1rem;
	}
	.contact-section {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e7eb;
	}
	a {
		color: #2d6a4f;
		font-weight: 600;
	}
</style>
