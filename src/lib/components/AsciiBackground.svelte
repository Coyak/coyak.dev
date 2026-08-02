<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	// ASCII matrix characters
	const CHARACTERS = '01XYZ#*+=:-./\\<>{}[]ANGELCOYAK$%&@~!?';
	const FONT_SIZE = 14;
	const TARGET_FPS = 30;

	// Dark Violet Damascus Palette:
	// 1. Pure Black (#000000)
	// 2. Deep Violet Charcoal (#3b0764)
	// 3. Dark Violet (#6b21a8)
	// 4. Spicy Orange (#D14C03)

	function getDamascusColor(val: number): string {
		// Map normalized value (0 to 1) into subtle Damascus topographic bands
		if (val < 0.22) {
			return 'rgba(24, 24, 27, 0.40)';    // Dark zinc Trough
		} else if (val < 0.46) {
			return 'rgba(39, 39, 42, 0.50)';    // Medium zinc
		} else if (val < 0.70) {
			return 'rgba(180, 50, 10, 0.55)';    // Orange Transition
		} else {
			return 'rgba(209, 76, 3, 0.70)';     // Spicy Orange (#D14C03) Crest Highlight
		}
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;
		let lastTime = 0;
		let time = 0;
		const interval = 1000 / TARGET_FPS;

		let cols = 0;
		let rows = 0;
		let charGrid: string[] = [];

		function resize() {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			ctx!.scale(dpr, dpr);

			cols = Math.ceil(window.innerWidth / FONT_SIZE);
			rows = Math.ceil(window.innerHeight / FONT_SIZE);

			charGrid = [];
			for (let i = 0; i < cols * rows; i++) {
				charGrid.push(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]);
			}
		}

		function draw(currentTime: number) {
			animationFrameId = requestAnimationFrame(draw);

			const delta = currentTime - lastTime;
			if (delta < interval) return;
			lastTime = currentTime - (delta % interval);
			time += 0.02;

			const width = window.innerWidth;
			const height = window.innerHeight;

			ctx!.clearRect(0, 0, width, height);

			// Pure Black (#000000) Background
			ctx!.fillStyle = '#000000';
			ctx!.fillRect(0, 0, width, height);

			ctx!.font = `${FONT_SIZE}px "JetBrains Mono", "Fira Code", monospace`;
			ctx!.textBaseline = 'top';

			// Mutate ~5% of characters for organic terminal matrix flicker
			const totalCells = cols * rows;
			const updates = Math.floor(totalCells * 0.05);
			for (let u = 0; u < updates; u++) {
				const index = Math.floor(Math.random() * totalCells);
				charGrid[index] = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
			}

			// Render ASCII Matrix where ASCII CHARACTERS THEMSELVES form the moving COD Damascus Camo pattern
			const centerX = width / 2;
			const centerY = height / 2;

			for (let r = 0; r < rows; r++) {
				const y = r * FONT_SIZE;
				for (let c = 0; c < cols; c++) {
					const x = c * FONT_SIZE;

					const dx = x - centerX;
					const dy = y - centerY;
					const dist = Math.sqrt(dx * dx + dy * dy);

					// Procedural wave equation
					const wave1 = Math.sin(x * 0.005 + time * 1.2) * Math.cos(y * 0.006 - time * 0.9);
					const wave2 = Math.sin((x * 0.004 + y * 0.008) + Math.sin(x * 0.003 + time * 0.8) * 3);
					const wave3 = Math.cos(dist * 0.006 - time * 0.7);

					const rawVal = (wave1 + wave2 + wave3 + 3) / 6;

					// Draw ASCII character with calculated color
					ctx!.fillStyle = getDamascusColor(rawVal);
					ctx!.fillText(charGrid[r * cols + c], x, y);
				}
			}
		}

		window.addEventListener('resize', resize);
		resize();
		animationFrameId = requestAnimationFrame(draw);

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
	<canvas bind:this={canvas} class="w-full h-full block"></canvas>
	<!-- Subtle CRT Scanline overlay -->
	<div class="crt-scanlines"></div>
	<!-- Radial Dark Vignette -->
	<div class="crt-vignette"></div>
</div>

<style>
	.crt-scanlines {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			rgba(107, 33, 168, 0) 50%,
			rgba(0, 0, 0, 0.45) 50%
		);
		background-size: 100% 4px;
		opacity: 0.35;
		pointer-events: none;
	}

	.crt-vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at center,
			transparent 40%,
			rgba(0, 0, 0, 0.96) 100%
		);
		pointer-events: none;
	}
</style>
