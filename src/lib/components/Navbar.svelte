<script lang="ts">
	import { Terminal, Menu, X } from 'lucide-svelte';

	let isMobileMenuOpen = $state(false);

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#000000]/90 backdrop-blur-md transition-all duration-300">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
		
		<!-- Logo / Monogram -->
		<a href="#hero" class="flex items-center gap-2 group text-decoration-none">
			<div class="w-8 h-8 rounded bg-[#05050a] border border-[#D14C03]/80 flex items-center justify-center text-[#D14C03] group-hover:shadow-[0_0_16px_rgba(209,76,3,0.8)] transition-all">
				<Terminal class="w-4 h-4" />
			</div>
			<span class="font-mono font-bold tracking-tight text-lg text-[#f5f5f7] group-hover:text-[#D14C03] transition-colors">
				COYAK<span class="text-[#D14C03] animate-pulse">_</span>
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center gap-8 font-mono text-sm">
			<a href="#proyectos" class="text-[#a1a1aa] hover:text-[#D14C03] transition-colors flex items-center gap-1.5">
				<span class="text-[#D14C03] text-xs">01.</span> Proyectos
			</a>
			<a href="#stack" class="text-[#a1a1aa] hover:text-[#D14C03] transition-colors flex items-center gap-1.5">
				<span class="text-[#D14C03] text-xs">02.</span> Tech Stack
			</a>
			<a href="#status" class="text-[#a1a1aa] hover:text-[#D14C03] transition-colors flex items-center gap-1.5">
				<span class="text-[#D14C03] text-xs">03.</span> Status / Now
			</a>
			<a href="#contacto" class="text-[#a1a1aa] hover:text-[#D14C03] transition-colors flex items-center gap-1.5">
				<span class="text-[#D14C03] text-xs">04.</span> Contacto
			</a>
		</nav>

		<!-- Right Side Badge -->
		<div class="hidden md:flex items-center gap-4">
			<div class="flex items-center gap-2 px-3 py-1 rounded-full bg-[#05050a] border border-[#D14C03]/60 text-xs font-mono text-[#D14C03] shadow-[0_0_14px_rgba(209,76,3,0.4)]">
				<span class="w-2 h-2 rounded-full bg-[#D14C03] animate-ping"></span>
				<span>Online & Open</span>
			</div>
		</div>

		<!-- Mobile Menu Button -->
		<button 
			onclick={toggleMenu}
			aria-label="Toggle navigation menu"
			class="md:hidden p-2 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-zinc-900 border border-[#D14C03]/40"
		>
			{#if isMobileMenuOpen}
				<X class="w-5 h-5" />
			{:else}
				<Menu class="w-5 h-5" />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu Drawer -->
	{#if isMobileMenuOpen}
		<div class="md:hidden border-b border-zinc-800 bg-[#000000]/95 backdrop-blur-xl px-4 py-6 font-mono space-y-4">
			<a 
				href="#proyectos" 
				onclick={closeMenu} 
				class="block py-2 text-[#f5f5f7] hover:text-[#D14C03] transition-colors"
			>
				<span class="text-[#D14C03]">01.</span> Proyectos
			</a>
			<a 
				href="#stack" 
				onclick={closeMenu} 
				class="block py-2 text-[#f5f5f7] hover:text-[#D14C03] transition-colors"
			>
				<span class="text-[#D14C03]">02.</span> Tech Stack
			</a>
			<a 
				href="#status" 
				onclick={closeMenu} 
				class="block py-2 text-[#f5f5f7] hover:text-[#D14C03] transition-colors"
			>
				<span class="text-[#D14C03]">03.</span> Status / Now
			</a>
			<a 
				href="#contacto" 
				onclick={closeMenu} 
				class="block py-2 text-[#f5f5f7] hover:text-[#D14C03] transition-colors"
			>
				<span class="text-[#D14C03]">04.</span> Contacto
			</a>
			<div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
				<div class="flex items-center gap-2 px-3 py-1 rounded-full bg-[#05050a] border border-[#D14C03]/60 text-xs font-mono text-[#D14C03]">
					<span class="w-2 h-2 rounded-full bg-[#D14C03] animate-pulse"></span>
					<span>Disponible para Proyectos</span>
				</div>
			</div>
		</div>
	{/if}
</header>
