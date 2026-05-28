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
	<!-- Ambient background orbs -->
	<div class="orb orb-1" aria-hidden="true"></div>
	<div class="orb orb-2" aria-hidden="true"></div>
	<div class="noise" aria-hidden="true"></div>

	<div class="container hero-content">
		<div class="hero-badge">
			<span class="badge-dot" aria-hidden="true"></span>
			Lifestyle · Reminder · Timer
		</div>
		<h1>{m.home_title()}</h1>
		<p class="subtitle">{m.home_subtitle()}</p>
		<p class="body-text">{m.home_body()}</p>
	</div>
</section>

<section class="features-section">
	<div class="container">
		<div class="section-label">What's included</div>
		<h2>{m.home_features_title()}</h2>
		<ul class="features-list">
			{#each features as feature}
				<li class="feature-item">
					<span class="check" aria-hidden="true">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="compliance-section">
	<div class="container">
		<div class="compliance-inner">
			<div class="compliance-icon" aria-hidden="true">⚖️</div>
			<div>
				<h2>{m.home_compliance_title()}</h2>
				<p>{m.home_compliance()}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 760px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* ── Hero ──────────────────────────────────────────────── */
	.hero {
		position: relative;
		overflow: hidden;
		padding: 7rem 0 6rem;
		text-align: center;
		background: var(--bg-base);
	}
	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}
	.orb-1 {
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(52,211,153,0.14) 0%, transparent 70%);
		top: -120px;
		left: 50%;
		transform: translateX(-50%);
	}
	.orb-2 {
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 70%);
		bottom: -60px;
		right: 10%;
	}
	/* Subtle grain overlay */
	.noise {
		position: absolute;
		inset: 0;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
		pointer-events: none;
		opacity: 0.4;
	}
	.hero-content {
		position: relative;
		z-index: 1;
	}
	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--accent-pale);
		border: 1px solid var(--border-light);
		color: var(--accent);
		font-family: var(--font-body);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		border-radius: 999px;
		padding: 0.35rem 1rem;
		margin-bottom: 1.75rem;
	}
	.badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
		animation: pulse 2s ease-in-out infinite;
	}
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.5; transform: scale(0.85); }
	}
	.hero h1 {
		font-family: var(--font-display);
		font-size: clamp(3rem, 9vw, 5rem);
		font-weight: 800;
		line-height: 1.05;
		letter-spacing: -0.03em;
		margin: 0 0 1rem;
		/* gradient text */
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 60%, var(--accent-dim) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.subtitle {
		font-family: var(--font-display);
		font-size: clamp(1.05rem, 3vw, 1.35rem);
		font-weight: 500;
		color: var(--text-secondary);
		margin: 0 0 1.25rem;
		letter-spacing: -0.01em;
	}
	.body-text {
		font-size: 1rem;
		color: var(--text-muted);
		max-width: 560px;
		margin: 0 auto;
		line-height: 1.75;
	}

	/* ── Features ──────────────────────────────────────────── */
	.features-section {
		padding: 5rem 0;
		background: var(--bg-surface);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}
	.section-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.6rem;
	}
	.features-section h2 {
		font-family: var(--font-display);
		font-size: clamp(1.4rem, 4vw, 1.9rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 2.5rem;
		letter-spacing: -0.02em;
	}
	.features-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 0.75rem;
	}
	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: 10px;
		padding: 1rem 1.1rem;
		font-size: 0.925rem;
		color: var(--text-primary);
		line-height: 1.5;
		transition: border-color 0.2s var(--ease), background 0.2s var(--ease);
	}
	.feature-item:hover {
		border-color: var(--border-light);
		background: var(--bg-surface);
	}
	.check {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		min-width: 22px;
		background: var(--accent-pale);
		border: 1px solid rgba(52,211,153,0.3);
		border-radius: 6px;
		color: var(--accent);
		margin-top: 0.1em;
	}

	/* ── Compliance ────────────────────────────────────────── */
	.compliance-section {
		padding: 4rem 0;
		background: var(--bg-base);
	}
	.compliance-inner {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		background: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: 14px;
		padding: 1.75rem 2rem;
	}
	.compliance-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
		filter: grayscale(0.3);
	}
	.compliance-section h2 {
		font-family: var(--font-display);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin: 0 0 0.6rem;
	}
	.compliance-section p {
		font-size: 0.875rem;
		color: var(--text-muted);
		line-height: 1.75;
		margin: 0;
	}
</style>
