<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import { ExternalLink, FolderGit2, AlertCircle } from 'lucide-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
</script>

<section id="proyectos" class="py-20 relative">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-zinc-800 pb-6">
			<div>
				<div class="flex items-center gap-2 text-[#D14C03] font-mono text-sm font-semibold mb-2">
					<FolderGit2 class="w-4 h-4" />
					<span>01. PORTAFOLIO</span>
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-[#f5f5f7] tracking-tight">
					Proyectos Destacados
				</h2>
			</div>
			<p class="text-[#a1a1aa] font-mono text-sm mt-3 sm:mt-0 max-w-sm">
				Soluciones reales desarrolladas con arquitecturas sólidas y enfoque en UX/UI.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
			{#each PROJECTS as project}
				<article 
					class="glass-card glass-card-hover rounded-2xl p-5 sm:p-8 relative flex flex-col justify-between overflow-hidden group border border-zinc-800"
					style="--project-accent: {project.accentColor}"
				>
					<!-- Cyber Corner Accents -->
					<div class="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
						<div class="w-full h-full border-t-2 border-r-2" style="border-color: {project.accentColor}"></div>
					</div>

					<div>
						<!-- Top Header Badge & Title -->
						<div class="flex items-center justify-between gap-4 mb-4">
							<span class="px-2.5 py-1 rounded bg-[#0f172a] border border-zinc-800 text-xs font-mono text-[#D14C03]">
								{project.badge}
							</span>
							<div class="w-3 h-3 rounded-full shadow-[0_0_10px_var(--project-accent)]" style="background-color: {project.accentColor}"></div>
						</div>

						<!-- Project Screenshot Preview (16:9 Aspect Ratio) -->
						{#if project.image}
							<div class="mb-5 rounded-xl overflow-hidden border border-zinc-800 bg-[#000000] relative group/img aspect-video">
								<img 
									src={project.image} 
									alt={project.title} 
									class="w-full h-full object-cover object-top filter brightness-90 contrast-105 group-hover/img:scale-105 group-hover/img:brightness-100 transition-all duration-300"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-[#05050a]/80 via-transparent to-transparent"></div>
							</div>
						{/if}

						<h3 class="text-2xl sm:text-3xl font-bold text-[#f5f5f7] group-hover:text-white transition-colors">
							{project.title}
						</h3>
						<h4 class="text-sm font-mono text-[#a1a1aa] mb-4">
							{project.subtitle}
						</h4>

						<p class="text-[#a1a1aa] text-sm leading-relaxed mb-6">
							{project.description}
						</p>

						<!-- Problem Solved Callout Box -->
						<div class="p-3.5 sm:p-4 rounded-xl bg-[#000000]/90 border border-zinc-800 mb-6 font-sans">
							<div class="flex items-center gap-2 text-xs font-mono text-[#D14C03] mb-1.5">
								<AlertCircle class="w-3.5 h-3.5 shrink-0" />
								<span>PROBLEMA RESUELTO:</span>
							</div>
							<p class="text-xs text-[#f5f5f7]/90 leading-relaxed font-mono">
								{project.problemSolved}
							</p>
						</div>

						<!-- Tech Stack Tags -->
						<div class="flex flex-wrap gap-2 mb-8 font-mono text-xs">
							{#each project.tags as tag}
								<span class="px-2.5 py-1 rounded bg-[#000000] border border-zinc-800 text-[#a1a1aa] group-hover:border-[#D14C03] transition-colors">
									#{tag}
								</span>
							{/each}
						</div>
					</div>

					<!-- Bottom Action Buttons -->
					<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-zinc-800 font-mono text-xs font-semibold">
						{#if project.liveUrl}
							<a 
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="px-4 py-2.5 rounded-lg bg-[#D14C03] hover:bg-[#e0560a] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_16px_rgba(209,76,3,0.4)]"
							>
								<ExternalLink class="w-3.5 h-3.5 text-white" />
								<span>Ver Web en Vivo</span>
							</a>
						{/if}

						{#if project.githubUrl}
							<a 
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="px-4 py-2.5 rounded-lg border border-zinc-800 bg-[#0f172a]/40 hover:border-[#D14C03] text-[#a1a1aa] hover:text-white flex items-center justify-center gap-2 transition-all"
							>
								<GithubIcon class="w-3.5 h-3.5 text-[#D14C03]" />
								<span>Código en GitHub</span>
							</a>
						{/if}
					</div>

				</article>
			{/each}
		</div>

	</div>
</section>
