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
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
				<rect width="64" height="64" rx="14" fill="#1a3c2e"/>
				<circle cx="32" cy="36" r="18" fill="none" stroke="#a7f3d0" stroke-width="3"/>
				<line x1="32" y1="36" x2="32" y2="22" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
				<line x1="32" y1="36" x2="42" y2="36" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
				<rect x="28" y="13" width="8" height="4" rx="2" fill="#a7f3d0"/>
				<line x1="22" y1="17" x2="26" y2="21" stroke="#a7f3d0" stroke-width="2.5" stroke-linecap="round"/>
				<line x1="42" y1="17" x2="38" y2="21" stroke="#a7f3d0" stroke-width="2.5" stroke-linecap="round"/>
			</svg>
			<span class="logo-text">Time 420</span>
		</a>

		<button
			class="menu-toggle"
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
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
	header {
		background: #fff;
		border-bottom: 1px solid #e5e7eb;
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.nav-inner {
		max-width: 960px;
		margin: 0 auto;
		padding: 0.75rem 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: #1a3c2e;
		font-size: 1.15rem;
		font-weight: 700;
		flex-shrink: 0;
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}
	.nav-link {
		font-size: 0.9rem;
		color: #374151;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.15s;
	}
	.nav-link:hover,
	.nav-link.active {
		color: #2d6a4f;
	}
	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}
	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: #374151;
		border-radius: 2px;
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
			background: #fff;
			border-bottom: 1px solid #e5e7eb;
			flex-direction: column;
			align-items: flex-start;
			padding: 1rem 1.25rem;
			gap: 1rem;
		}
		.nav-links.open {
			display: flex;
		}
	}
</style>
