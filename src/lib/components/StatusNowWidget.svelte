<script lang="ts">
	import { Radio, Disc3, BookOpen, Code, Activity } from 'lucide-svelte';

	const currentTrack = {
		title: 'Resonance',
		artist: 'HOME / Synthwave',
		status: 'Playing via Spotify'
	};

	const currentLearning = [
		'Rust & WebAssembly Integration',
		'Distributed Systems Architecture & Raft Consensus',
		'Advanced Svelte 5 Runes & Signals pattern'
	];

	const activeProjects = [
		'OpenGarden (Knowledge Graph Engine & SvelteKit 5)',
		'Portafolio CRT Analógico (Personal Site)'
	];
</script>

<section id="status" class="py-20 relative">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-zinc-800 pb-6">
			<div>
				<div class="flex items-center gap-2 text-[#D14C03] font-mono text-sm font-semibold mb-2">
					<Radio class="w-4 h-4 animate-pulse text-[#D14C03]" />
					<span>03. ESTADO ACTUAL</span>
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-[#f5f5f7] tracking-tight">
					Status / Now
				</h2>
			</div>
			<p class="text-[#a1a1aa] font-mono text-sm mt-3 sm:mt-0 max-w-xs">
				Exploración tecnológica actual, música en rotación y proyectos en desarrollo activo.
			</p>
		</div>

		<!-- CRT Terminal Container -->
		<div class="glass-card rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
			
			<!-- Terminal Header Bar -->
			<div class="bg-[#09090b] px-4 py-3 border-b border-zinc-800 flex items-center justify-between font-mono text-xs text-[#a1a1aa]">
				<div class="flex items-center gap-2">
					<div class="w-3 h-3 rounded-full bg-[#D14C03] shadow-[0_0_8px_#D14C03]"></div>
					<div class="w-3 h-3 rounded-full bg-zinc-700"></div>
					<div class="w-3 h-3 rounded-full bg-zinc-800"></div>
					<span class="ml-2 text-white font-semibold">coyak@terminal: ~/status-now</span>
				</div>
				<div class="flex items-center gap-2 text-[#D14C03] font-bold">
					<Activity class="w-3.5 h-3.5 animate-pulse" />
					<span>SYSTEM ACTIVE</span>
				</div>
			</div>

			<!-- Terminal Body -->
			<div class="p-6 sm:p-8 font-mono space-y-6 text-sm bg-[#000000]/95 backdrop-blur-md">
				
				<!-- Terminal Command Prompt -->
				<div class="flex items-center gap-2 text-xs text-[#a1a1aa]">
					<span class="text-[#D14C03] font-bold">coyak@dev</span>:<span class="text-[#a1a1aa]">~</span>$ cat status_now.log
				</div>

				<!-- Grid: Music, Learning, Active Projects -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
					
					<!-- 1. Music / Listening -->
					<div class="p-4 rounded-xl bg-[#09090b]/80 border border-zinc-800 hover:border-[#D14C03] transition-colors">
						<div class="flex items-center gap-2 text-[#D14C03] text-xs font-bold mb-3">
							<Disc3 class="w-4 h-4 animate-spin text-[#D14C03]" style="animation-duration: 8s;" />
							<span>NOW PLAYING</span>
						</div>
						<div class="text-[#f5f5f7] font-semibold text-base">
							{currentTrack.title}
						</div>
						<div class="text-xs text-[#a1a1aa] mt-1">
							{currentTrack.artist}
						</div>
						<div class="mt-4 flex items-center gap-1.5 text-[11px] text-[#D14C03] font-semibold">
							<span class="w-2 h-2 rounded-full bg-[#D14C03] animate-ping"></span>
							<span>{currentTrack.status}</span>
						</div>
					</div>

					<!-- 2. Tech Learning -->
					<div class="p-4 rounded-xl bg-[#09090b]/80 border border-zinc-800 hover:border-[#D14C03] transition-colors">
						<div class="flex items-center gap-2 text-[#D14C03] text-xs font-bold mb-3">
							<BookOpen class="w-4 h-4 text-[#D14C03]" />
							<span>EXPLORANDO & APRENDIENDO</span>
						</div>
						<ul class="space-y-2 text-xs text-[#a1a1aa]">
							{#each currentLearning as item}
								<li class="flex items-start gap-2">
									<span class="text-[#D14C03] font-bold">&gt;</span>
									<span class="text-[#f5f5f7]/90">{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- 3. Active Projects -->
					<div class="p-4 rounded-xl bg-[#09090b]/80 border border-zinc-800 hover:border-[#D14C03] transition-colors">
						<div class="flex items-center gap-2 text-[#D14C03] text-xs font-bold mb-3">
							<Code class="w-4 h-4 text-[#D14C03]" />
							<span>DESARROLLO ACTIVO</span>
						</div>
						<ul class="space-y-2 text-xs text-[#a1a1aa]">
							{#each activeProjects as project}
								<li class="flex items-start gap-2">
									<span class="text-[#D14C03] font-bold">#</span>
									<span class="text-[#f5f5f7]/90">{project}</span>
								</li>
							{/each}
						</ul>
					</div>

				</div>

				<!-- Terminal Footer Cursor -->
				<div class="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-[#a1a1aa]">
					<div class="flex items-center gap-2">
						<span class="text-[#D14C03] font-bold">coyak@dev</span>:<span class="text-[#a1a1aa]">~</span>$ <span class="terminal-cursor"></span>
					</div>
					<span class="text-[10px] text-white/40 font-mono">STATUS UPDATED 2026</span>
				</div>

			</div>
		</div>

	</div>
</section>
