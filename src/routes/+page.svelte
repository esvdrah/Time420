<script>
	import * as m from '$lib/paraglide/messages';

	const features = $derived([
		m.home_feature_1(),
		m.home_feature_2(),
		m.home_feature_3(),
		m.home_feature_4(),
		m.home_feature_5(),
		m.home_feature_6()
	]);
</script>

<svelte:head>
	<title>Time 420 — Reminder &amp; Session Timer App</title>
	<meta name="description" content="Time 420 is a simple 4:20 reminder and session timer app with live countdown, ambient audio, and custom notifications." />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-badge">Lifestyle · Reminder · Timer</div>
		<h1>{m.home_title()}</h1>
		<p class="subtitle">{m.home_subtitle()}</p>
		<p class="body-text">{m.home_body()}</p>
	</div>
</section>

<section class="features-section">
	<div class="container">
		<h2>{m.home_features_title()}</h2>
		<ul class="features-list">
			{#each features as feature}
				<li>
					<span class="check" aria-hidden="true">✓</span>
					{feature}
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="compliance-section">
	<div class="container">
		<h2>{m.home_compliance_title()}</h2>
		<p>{m.home_compliance()}</p>
	</div>
</section>

<style>
	.container {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.25rem;
	}

	/* Hero */
	.hero {
		background: linear-gradient(135deg, #1a3c2e 0%, #2d6a4f 100%);
		color: #fff;
		padding: 5rem 0 4rem;
		text-align: center;
	}
	.hero-badge {
		display: inline-block;
		background: rgba(255,255,255,0.15);
		color: #d1fae5;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		border-radius: 999px;
		padding: 0.3rem 0.9rem;
		margin-bottom: 1.25rem;
	}
	.hero h1 {
		font-size: clamp(2.5rem, 8vw, 4rem);
		font-weight: 800;
		margin: 0 0 0.5rem;
		letter-spacing: -0.02em;
		color: #fff;
	}
	.subtitle {
		font-size: clamp(1rem, 3vw, 1.25rem);
		color: #a7f3d0;
		margin: 0 0 1.5rem;
	}
	.body-text {
		font-size: 1rem;
		color: #d1fae5;
		max-width: 580px;
		margin: 0 auto;
		line-height: 1.7;
	}

	/* Features */
	.features-section {
		padding: 3.5rem 0;
		background: #f9fafb;
	}
	.features-section h2 {
		font-size: 1.4rem;
		font-weight: 700;
		color: #1a3c2e;
		margin: 0 0 1.5rem;
	}
	.features-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.75rem;
	}
	.features-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		font-size: 0.975rem;
		color: #374151;
	}
	.check {
		color: #2d6a4f;
		font-weight: 700;
		flex-shrink: 0;
		margin-top: 0.05em;
	}

	/* Compliance */
	.compliance-section {
		padding: 3rem 0;
		background: #fff;
	}
	.compliance-section h2 {
		font-size: 1rem;
		font-weight: 700;
		color: #6b7280;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin: 0 0 0.75rem;
	}
	.compliance-section p {
		font-size: 0.875rem;
		color: #6b7280;
		line-height: 1.7;
		margin: 0;
		max-width: 640px;
	}
</style>
