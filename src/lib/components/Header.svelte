<script>
	import { page } from '$app/state';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import * as m from '$lib/paraglide/messages';

	let menuOpen = $state(false);

	const isActive = $derived((/** @type {string} */ path) => page.url.pathname === path);
</script>

<header>
	<nav class="nav-inner">
		<a href="/" class="logo" aria-label="Time 420 Home">
			<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
				<rect width="64" height="64" rx="14" fill="var(--accent-pale)" stroke="var(--border-light)" stroke-width="1.5"/>
				<circle cx="32" cy="36" r="18" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
				<line x1="32" y1="36" x2="32" y2="22" stroke="var(--text-primary)" stroke-width="3" stroke-linecap="round"/>
				<line x1="32" y1="36" x2="42" y2="36" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
				<rect x="28" y="13" width="8" height="4" rx="2" fill="var(--accent)"/>
				<line x1="22" y1="17" x2="26" y2="21" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
				<line x1="42" y1="17" x2="38" y2="21" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
			</svg>
			<span class="logo-text">Time 420</span>
		</a>

		<button
			class="menu-toggle"
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="bar" class:open={menuOpen}></span>
			<span class="bar" class:open={menuOpen}></span>
			<span class="bar" class:open={menuOpen}></span>
		</button>

		<div class="nav-links" class:open={menuOpen}>
			<a href="/privacy" class="nav-link" class:active={isActive('/privacy')} onclick={() => (menuOpen = false)}>{m.nav_privacy()}</a>
			<a href="/support" class="nav-link" class:active={isActive('/support')} onclick={() => (menuOpen = false)}>{m.nav_support()}</a>
			<a href="/age-suitability" class="nav-link" class:active={isActive('/age-suitability')} onclick={() => (menuOpen = false)}>{m.nav_age()}</a>
			<LanguageSwitcher />
		</div>
	</nav>
</header>

<style>
	/* DESIGN.md §4 Navigation Header */
	header {
		background: var(--bg-overlay);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--border);
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.nav-inner {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0.875rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	/* Logo — with hover opacity feedback */
	.logo {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
		color: var(--text-primary);
		flex-shrink: 0;
		transition: opacity 0.2s var(--ease);
	}
	.logo:hover {
		opacity: 0.8;
	}
	.logo-text {
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--text-primary);
	}

	/* Nav links */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.nav-link {
		font-family: var(--font-body);
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--text-muted);
		text-decoration: none;
		padding: 0.4rem 0.75rem;
		border-radius: var(--radius-sm);
		transition:
			color 0.2s var(--ease),
			background 0.2s var(--ease);
		letter-spacing: 0.01em;
	}
	.nav-link:hover {
		color: var(--text-primary);
		background: var(--bg-elevated);
	}
	.nav-link.active {
		color: var(--accent);
		background: var(--accent-pale);
	}

	/* Hamburger toggle */
	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 6px;
		border-radius: var(--radius-sm);
		transition: background 0.2s var(--ease);
	}
	.menu-toggle:hover {
		background: var(--bg-elevated);
	}
	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--text-muted);
		border-radius: var(--radius-xs);
		transition:
			transform 0.3s var(--ease),
			opacity 0.3s var(--ease),
			background 0.2s var(--ease);
	}
	.menu-toggle:hover .bar {
		background: var(--text-primary);
	}

	@media (max-width: 640px) {
		.menu-toggle {
			display: flex;
		}
		.nav-links {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--bg-surface);
			border-bottom: 1px solid var(--border);
			flex-direction: column;
			align-items: stretch;
			padding: 0.75rem 1rem;
			gap: 0.25rem;
		}
		.nav-links.open {
			display: flex;
		}
		.nav-link {
			padding: 0.6rem 0.75rem;
		}
	}
</style>
