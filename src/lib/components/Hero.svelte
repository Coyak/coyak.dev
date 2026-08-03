<script lang="ts">
	import { ArrowUpRight, Terminal, ShieldCheck, Sparkles, Download, Database } from 'lucide-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';

	const linkedinUrl = 'https://www.linkedin.com/in/angelbz/';
	const githubUrl = 'https://github.com/coyak';
	const cvUrl = '/cv_infor.pdf';
</script>

<section id="hero" class="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
	<div class="max-w-5xl mx-auto px-4 sm:px-6">
		
		<!-- Terminal Tag Badge -->
		<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass-card border-[#D14C03]/60 font-mono text-xs text-[#D14C03] mb-8 shadow-[0_0_16px_rgba(209,76,3,0.3)]">
			<Terminal class="w-3.5 h-3.5 text-[#D14C03]" />
			<span class="text-[#a1a1aa]">$</span> system_init <span class="text-[#D14C03]">--user=angel_gaspar</span> <span class="text-[#a1a1aa]">--role=fullstack_developer</span>
		</div>

		<!-- Main Headline -->
		<div class="space-y-4 max-w-4xl">
			<h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f5f5f7] leading-none">
				Angel Gaspar
			</h1>

			<div class="text-xl sm:text-2xl lg:text-3xl font-mono text-[#a1a1aa] font-medium pt-1">
				Fullstack <span class="text-[#D14C03]">&</span> Backend Developer
			</div>

			<p class="text-base sm:text-lg lg:text-xl text-[#a1a1aa] max-w-2xl pt-4 leading-relaxed font-sans">
				Especializado en <strong class="text-[#f5f5f7] font-semibold">arquitectura backend</strong>, infraestructura distribuida y la creación de <strong class="text-[#f5f5f7] font-semibold">productos web modernos</strong>, escalables y de alto rendimiento.
			</p>
		</div>

		<!-- Key Highlights Pills -->
		<div class="flex flex-wrap items-center gap-3 pt-6 font-mono text-xs text-[#a1a1aa]">
			<div class="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#09090b] border border-zinc-800 text-[#f5f5f7]">
				<ShieldCheck class="w-3.5 h-3.5 text-[#D14C03]" />
				<span>Clean Architecture & Clean Code</span>
			</div>
			<div class="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#09090b] border border-zinc-800 text-[#f5f5f7]">
				<Sparkles class="w-3.5 h-3.5 text-[#D14C03]" />
				<span>SvelteKit & Micro-Services</span>
			</div>
			<div class="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#09090b] border border-zinc-800 text-[#f5f5f7]">
				<Database class="w-3.5 h-3.5 text-[#D14C03]" />
				<span>PostgreSQL & SQL Databases</span>
			</div>
		</div>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row items-stretch sm:items-center flex-wrap gap-3 sm:gap-4 pt-8 sm:pt-10 font-mono text-sm">
			
			<!-- Ver Proyectos CTA -->
			<a 
				href="#proyectos" 
				class="px-6 py-3.5 rounded-lg bg-[#D14C03] hover:bg-[#e0560a] text-white font-extrabold flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(209,76,3,0.6)] hover:shadow-[0_0_36px_rgba(209,76,3,0.85)] transition-all transform hover:-translate-y-0.5 group"
			>
				<span>Ver Proyectos</span>
				<ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
			</a>

			<!-- LinkedIn -->
			<a 
				href={linkedinUrl} 
				target="_blank" 
				rel="noopener noreferrer"
				class="px-5 py-3.5 rounded-lg glass-card border-zinc-800 hover:border-[#D14C03] text-[#f5f5f7] hover:text-[#D14C03] font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
			>
				<LinkedinIcon class="w-4 h-4 text-[#D14C03]" />
				<span>LinkedIn</span>
			</a>

			<!-- GitHub -->
			<a 
				href={githubUrl} 
				target="_blank" 
				rel="noopener noreferrer"
				class="px-5 py-3.5 rounded-lg glass-card border-zinc-800 hover:border-[#D14C03] text-[#f5f5f7] hover:text-[#D14C03] font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
			>
				<GithubIcon class="w-4 h-4 text-[#D14C03]" />
				<span>GitHub</span>
			</a>

			<!-- Descargar CV -->
			<a 
				href={cvUrl} 
				download="cv-angel-gaspar-bustamante.pdf"
				class="px-5 py-3.5 rounded-lg border border-zinc-800 bg-[#09090b]/80 hover:border-[#D14C03] text-[#a1a1aa] hover:text-white font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
			>
				<Download class="w-4 h-4 text-[#D14C03]" />
				<span>Descargar CV</span>
			</a>
		</div>

	</div>
</section>
