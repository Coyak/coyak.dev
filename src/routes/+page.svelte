<script lang="ts">
	import AsciiBackground from '$lib/components/AsciiBackground.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsShowcase from '$lib/components/ProjectsShowcase.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import StatusNowWidget from '$lib/components/StatusNowWidget.svelte';
	import FooterContact from '$lib/components/FooterContact.svelte';
</script>

<svelte:head>
	<title>Angel Gaspar | Fullstack & Backend Developer</title>
</svelte:head>

<!-- Dynamic Canvas ASCII Noise Background -->
<AsciiBackground />

<!-- Foreground Page Application Content -->
<div class="relative z-10 min-h-screen flex flex-col justify-between">
	
	<!-- Top Sticky Glass Navbar -->
	<Navbar />

	<main class="flex-grow space-y-12">
		<!-- Hero Section -->
		<Hero />

		<!-- Projects Showcase Section -->
		<ProjectsShowcase />

		<!-- Tech Stack Section -->
		<TechStack />

		<!-- Personal Status / Now Widget Section -->
		<StatusNowWidget />
	</main>

	<!-- Footer & Contact Section -->
	<FooterContact />

</div>
