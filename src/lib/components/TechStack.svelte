<script lang="ts">
	import { STACK_SECTIONS } from '$lib/data/stack';
	import { Cpu, CheckCircle2 } from 'lucide-svelte';

	// Default active category is Frontend & Maquetación
	let activeFilter = $state<string>(STACK_SECTIONS[0].title);

	let activeSection = $derived(
		STACK_SECTIONS.find((sec) => sec.title === activeFilter) || STACK_SECTIONS[0]
	);

	function setFilter(title: string) {
		activeFilter = title;
	}
</script>

<section id="stack" class="py-20 relative">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-zinc-800 pb-6">
			<div>
				<div class="flex items-center gap-2 text-[#D14C03] font-mono text-sm font-semibold mb-2">
					<Cpu class="w-4 h-4" />
					<span>02. TECNOLOGÍAS & HERRAMIENTAS</span>
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-[#f5f5f7] tracking-tight">
					Tech Stack
				</h2>
			</div>
			<p class="text-[#a1a1aa] font-mono text-sm mt-3 sm:mt-0 max-w-xs">
				Selecciona una categoría arriba para cambiar la vista del panel.
			</p>
		</div>

		<!-- Category Filter Tabs Bar (Only the 5 Categories) -->
		<div class="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs overflow-x-auto pb-1">
			{#each STACK_SECTIONS as sec}
				<button
					onclick={() => setFilter(sec.title)}
					class="px-3.5 sm:px-4 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center shrink-0 gap-1.5 {
						activeFilter === sec.title
							? 'bg-[#D14C03] text-white border-[#D14C03] shadow-[0_0_18px_rgba(209,76,3,0.6)] font-extrabold'
							: 'bg-[#09090b] text-[#a1a1aa] border-zinc-800 hover:border-[#D14C03] hover:text-white'
					}"
				>
					<span>{sec.icon}</span>
					<span>{sec.title} ({sec.items.length})</span>
				</button>
			{/each}
		</div>

		<!-- SINGLE CONTAINER CARD FOR ACTIVE CATEGORY VIEW -->
		<div class="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 relative shadow-2xl">
			
			<!-- Single Container Active Header -->
			<div class="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
				<div class="flex items-center gap-3">
					<span class="text-2xl">{activeSection.icon}</span>
					<h3 class="text-xl sm:text-2xl font-bold font-mono text-[#f5f5f7]">
						{activeSection.title}
					</h3>
				</div>
				<span class="text-xs font-mono px-3 py-1.5 rounded bg-[#0f172a] border border-zinc-800 text-[#D14C03] font-semibold">
					{activeSection.items.length} tecnologías
				</span>
			</div>

			<!-- Dynamic Items Grid for Active Category -->
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{#each activeSection.items as item (item.name)}
					<div 
						class="glass-card rounded-xl p-4 border border-zinc-800 hover:border-[var(--brand-color)] transition-all group flex flex-col justify-between"
						style="--brand-color: {item.accent || '#D14C03'}"
					>
						<div class="flex items-center justify-between gap-2 mb-3">
							<!-- Brand Color Accent Dot -->
							<div class="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_var(--brand-color)]" style="background-color: {item.accent || '#D14C03'}"></div>
							<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#09090b] border border-zinc-800 text-[#a1a1aa]">
								{item.level}
							</span>
						</div>

						<div class="font-mono text-sm font-semibold text-[#f5f5f7] group-hover:text-white transition-colors">
							{item.name}
						</div>

						<div class="text-[11px] font-mono text-[#a1a1aa] mt-2 pt-2 border-t border-zinc-800/80 flex items-center justify-between">
							<span>{item.category}</span>
							<CheckCircle2 class="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" style="color: {item.accent || '#D14C03'}" />
						</div>
					</div>
				{/each}
			</div>

		</div>

	</div>
</section>
