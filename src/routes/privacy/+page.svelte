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
			<p><a href="mailto:support@time420.app">support@time420.app</a></p>
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
		margin: 0 0 0.4rem;
	}
	.effective {
		font-size: 0.875rem;
		color: #6b7280;
		margin: 0;
	}
	section {
		margin-top: 2rem;
	}
	h2 {
		font-size: 1.05rem;
		font-weight: 700;
		color: #1a3c2e;
		margin: 0 0 0.6rem;
	}
	p {
		font-size: 0.975rem;
		color: #374151;
		line-height: 1.75;
		margin: 0 0 0.75rem;
	}
	ul {
		padding-left: 1.25rem;
		margin: 0.5rem 0 0;
	}
	li {
		font-size: 0.975rem;
		color: #374151;
		line-height: 1.7;
		margin-bottom: 0.4rem;
	}
	a {
		color: #2d6a4f;
	}
</style>
