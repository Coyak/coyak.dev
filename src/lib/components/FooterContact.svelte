<script lang="ts">
	import { Mail, Copy, Check, Send, Terminal, ExternalLink } from 'lucide-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';

	let email = 'ang.bustamantez@gmail.com';
	let copied = $state(false);
	let formSubmitted = $state(false);

	let name = $state('');
	let senderEmail = $state('');
	let subject = $state('');
	let message = $state('');
	let isSubmitting = $state(false);

	async function handleCopyEmail() {
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 3000);
		} catch (err) {
			console.error('Failed to copy email', err);
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name || !senderEmail || !message) return;

		isSubmitting = true;

		const mailSubjectText = subject ? subject : `Mensaje de ${name} desde el Portafolio`;

		try {
			// Dispatch direct email to ang.bustamantez@gmail.com via FormSubmit AJAX API silently in background
			await fetch('https://formsubmit.co/ajax/ang.bustamantez@gmail.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					email: senderEmail,
					_subject: mailSubjectText,
					message: message,
					_captcha: 'false'
				})
			});
		} catch (err) {
			console.warn('FormSubmit API notice:', err);
		}

		isSubmitting = false;
		formSubmitted = true;
		name = '';
		senderEmail = '';
		subject = '';
		message = '';
	}
</script>

<footer id="contacto" class="pt-20 pb-12 relative">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		
		<!-- Contact Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
			
			<!-- Left Info Column -->
			<div class="space-y-6">
				<div class="flex items-center gap-2 text-[#D14C03] font-mono text-sm font-semibold">
					<Mail class="w-4 h-4" />
					<span>04. CONTACTO & REDES</span>
				</div>

				<h2 class="text-3xl sm:text-5xl font-extrabold text-[#f5f5f7] tracking-tight">
					¿Tienes un proyecto en mente?
				</h2>

				<p class="text-[#a1a1aa] text-base leading-relaxed max-w-md">
					Estoy disponible para oportunidades laborales, consultorías en desarrollo Fullstack o colaboraciones en software libre. ¡Hablemos!
				</p>

				<!-- Direct Email Pill -->
				<div class="pt-2">
					<div class="text-xs font-mono font-semibold tracking-wider text-[#a1a1aa] mb-2">EMAIL DIRECTO:</div>
					<div class="inline-flex items-center gap-3 p-3 rounded-xl glass-card border border-zinc-800">
						<span class="font-mono text-sm sm:text-base font-semibold text-[#f5f5f7]">
							{email}
						</span>
						<button 
							onclick={handleCopyEmail}
							aria-label="Copiar correo electrónico"
							class="p-2 rounded-lg bg-zinc-800/60 hover:bg-[#D14C03] hover:text-white text-[#f5f5f7] transition-all duration-200"
							title="Copiar email"
						>
							{#if copied}
								<Check class="w-4 h-4 text-[#D14C03]" />
							{:else}
								<Copy class="w-4 h-4" />
							{/if}
						</button>
					</div>
					{#if copied}
						<div class="text-xs font-mono text-[#D14C03] mt-2 animate-fade-in flex items-center gap-1 font-bold">
							<Check class="w-3.5 h-3.5" />
							<span>¡Email copiado al portapapeles!</span>
						</div>
					{/if}
				</div>

				<!-- Social Links -->
				<div class="pt-6 font-mono">
					<div class="text-xs font-mono font-semibold tracking-wider text-[#a1a1aa] mb-3">CONECTA CONMIGO:</div>
					<div class="flex flex-wrap items-center gap-3">
						<a 
							href="https://github.com/coyak" 
							target="_blank" 
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-[#D14C03] hover:text-[#D14C03] text-[#f5f5f7] text-xs flex items-center gap-2 transition-all"
						>
							<GithubIcon class="w-4 h-4 text-[#D14C03]" />
							<span>GitHub</span>
						</a>

						<a 
							href="https://www.linkedin.com/in/angelbz/" 
							target="_blank" 
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-[#D14C03] hover:text-[#D14C03] text-[#f5f5f7] text-xs flex items-center gap-2 transition-all"
						>
							<LinkedinIcon class="w-4 h-4 text-[#D14C03]" />
							<span>LinkedIn</span>
						</a>

						<a 
							href="https://mail.google.com/mail/?view=cm&fs=1&to={email}" 
							target="_blank"
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-[#D14C03] hover:text-[#D14C03] text-[#f5f5f7] text-xs flex items-center gap-2 transition-all"
						>
							<Mail class="w-4 h-4 text-[#D14C03]" />
							<span>Enviar Correo</span>
						</a>
					</div>
				</div>

			</div>

			<!-- Right Form Column -->
			<div class="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 relative">
				<h3 class="text-xl font-bold text-[#f5f5f7] mb-6 font-mono flex items-center gap-2">
					<Send class="w-4 h-4 text-[#D14C03]" />
					<span>Enviar Mensaje</span>
				</h3>

				{#if formSubmitted}
					<div class="p-6 rounded-xl bg-zinc-900/90 border border-[#D14C03] font-mono text-center space-y-4">
						<div class="w-12 h-12 rounded-full bg-[#D14C03]/20 border border-[#D14C03] flex items-center justify-center mx-auto text-[#D14C03]">
							<Check class="w-6 h-6" />
						</div>
						<div class="text-[#D14C03] font-bold text-lg">¡Mensaje Enviado con Éxito!</div>
						<p class="text-xs text-[#a1a1aa] leading-relaxed">
							Tu mensaje ha sido enviado directamente a <strong class="text-white">{email}</strong>. Te responderé a la brevedad.
						</p>
						<div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
							<button 
								onclick={() => (formSubmitted = false)}
								class="w-full sm:w-auto px-4 py-2 rounded bg-[#D14C03] text-xs text-white font-bold hover:bg-[#e0560a] transition-all cursor-pointer"
							>
								Enviar otro mensaje
							</button>
							<a 
								href="https://mail.google.com/mail/?view=cm&fs=1&to={email}"
								target="_blank"
								rel="noopener noreferrer"
								class="w-full sm:w-auto px-4 py-2 rounded border border-zinc-700 text-xs text-[#a1a1aa] hover:text-white transition-all flex items-center justify-center gap-1.5"
							>
								<span>Abrir en Gmail Web</span>
								<ExternalLink class="w-3 h-3" />
							</a>
						</div>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-4 font-mono text-xs">
						<div>
							<label for="name" class="block text-[#a1a1aa] mb-1.5 font-semibold tracking-wide">NOMBRE Y APELLIDO *</label>
							<input 
								id="name"
								type="text"
								required
								bind:value={name}
								placeholder="Ej. Sofia Rossi"
								class="w-full px-4 py-3 rounded-lg bg-[#000000] border border-zinc-800 text-[#f5f5f7] focus:outline-none focus:border-[#D14C03] transition-colors"
							/>
						</div>

						<div>
							<label for="senderEmail" class="block text-[#a1a1aa] mb-1.5 font-semibold tracking-wide">CORREO ELECTRÓNICO *</label>
							<input 
								id="senderEmail"
								type="email"
								required
								bind:value={senderEmail}
								placeholder="tu@email.com"
								class="w-full px-4 py-3 rounded-lg bg-[#000000] border border-zinc-800 text-[#f5f5f7] focus:outline-none focus:border-[#D14C03] transition-colors"
							/>
						</div>

						<div>
							<label for="subject" class="block text-[#a1a1aa] mb-1.5 font-semibold tracking-wide">ASUNTO</label>
							<input 
								id="subject"
								type="text"
								bind:value={subject}
								placeholder="Propuesta de proyecto / Consulta"
								class="w-full px-4 py-3 rounded-lg bg-[#000000] border border-zinc-800 text-[#f5f5f7] focus:outline-none focus:border-[#D14C03] transition-colors"
							/>
						</div>

						<div>
							<label for="message" class="block text-[#a1a1aa] mb-1.5 font-semibold tracking-wide">MENSAJE *</label>
							<textarea 
								id="message"
								rows="4"
								required
								bind:value={message}
								placeholder="Describe brevemente tus requerimientos o consulta..."
								class="w-full px-4 py-3 rounded-lg bg-[#000000] border border-zinc-800 text-[#f5f5f7] focus:outline-none focus:border-[#D14C03] transition-colors resize-none"
							></textarea>
						</div>

						<button 
							type="submit"
							disabled={isSubmitting}
							class="w-full py-3.5 rounded-lg bg-[#D14C03] hover:bg-[#e0560a] text-white font-extrabold flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(209,76,3,0.6)] transition-all cursor-pointer disabled:opacity-50"
						>
							{#if isSubmitting}
								<span class="animate-pulse">Enviando mensaje...</span>
							{:else}
								<span>Enviar Mensaje</span>
								<Send class="w-4 h-4" />
							{/if}
						</button>
					</form>
				{/if}

			</div>

		</div>

		<!-- Bottom Copyright Footer -->
		<div class="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#a1a1aa] gap-4">
			<div class="flex items-center gap-2">
				<Terminal class="w-4 h-4 text-[#D14C03]" />
				<span>© {new Date().getFullYear()} Angel Gaspar. Todos los derechos reservados.</span>
			</div>

			<div class="flex items-center gap-1.5 text-white/50">
				<span>Diseñado y desarrollado con</span>
				<span class="text-[#D14C03] font-bold">SvelteKit</span>
				<span>&</span>
				<span class="text-[#D14C03] font-bold">Tailwind CSS</span>
			</div>
		</div>

	</div>
</footer>
