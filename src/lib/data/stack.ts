export interface StackItem {
	name: string;
	category: string;
	level: string;
	accent: string;
}

export interface StackSection {
	title: string;
	icon: string;
	items: StackItem[];
}

export const STACK_SECTIONS: StackSection[] = [
	{
		title: 'Frontend & Maquetación',
		icon: '🎨',
		items: [
			{ name: 'TypeScript', category: 'Frontend', level: 'Uso Frecuente', accent: '#3178c6' },
			{ name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Uso Frecuente', accent: '#f7df1e' },
			{ name: 'HTML5', category: 'Frontend', level: 'Uso Frecuente', accent: '#e34f26' },
			{ name: 'CSS3 / Modern CSS', category: 'Frontend', level: 'Uso Frecuente', accent: '#1572b6' },
			{ name: 'Svelte 5', category: 'Frontend', level: 'Proyectos Reales', accent: '#ff3e00' },
			{ name: 'SvelteKit', category: 'Frontend', level: 'Uso Frecuente', accent: '#ff3e00' },
			{ name: 'React', category: 'Frontend', level: 'Uso Frecuente', accent: '#61dafb' },
			{ name: 'Next.js', category: 'Frontend', level: 'En Aprendizaje', accent: '#ffffff' },
			{ name: 'Astro', category: 'Frontend', level: 'En Aprendizaje', accent: '#bc52ee' },
			{ name: 'Angular', category: 'Frontend', level: 'En Aprendizaje', accent: '#dd0031' },
			{ name: 'Tailwind CSS', category: 'Frontend', level: 'Uso Frecuente', accent: '#38b2ac' },
			{ name: 'Bootstrap', category: 'Frontend', level: 'Proyectos Reales', accent: '#7952b3' }
		]
	},
	{
		title: 'Backend & Lenguajes',
		icon: '⚙️',
		items: [
			{ name: 'Node.js', category: 'Backend', level: 'Uso Frecuente', accent: '#339933' },
			{ name: 'Express.js', category: 'Backend', level: 'Uso Frecuente', accent: '#61dafb' },
			{ name: 'Java', category: 'Backend', level: 'Proyectos Reales', accent: '#ed8b00' },
			{ name: 'Python', category: 'Backend', level: 'Proyectos Reales', accent: '#3776ab' },
			{ name: 'Kotlin', category: 'Backend', level: 'En Aprendizaje', accent: '#7f52ff' },
			{ name: 'JWT & Auth', category: 'Backend', level: 'Proyectos Reales', accent: '#d63aff' }
		]
	},
	{
		title: 'Bases de Datos & ORMs',
		icon: '🗄️',
		items: [
			{ name: 'PostgreSQL', category: 'Bases de Datos', level: 'Uso Frecuente', accent: '#4169e1' },
			{ name: 'MySQL', category: 'Bases de Datos', level: 'Proyectos Reales', accent: '#4479a1' },
			{ name: 'SQLite', category: 'Bases de Datos', level: 'En Aprendizaje', accent: '#07405e' },
			{ name: 'Supabase', category: 'Bases de Datos', level: 'Proyectos Reales', accent: '#3ecf8e' },
			{ name: 'Prisma ORM', category: 'Bases de Datos', level: 'Proyectos Reales', accent: '#2d3748' }
		]
	},
	{
		title: 'Infraestructura & Cloud',
		icon: '☁️',
		items: [
			{ name: 'Docker', category: 'Infraestructura', level: 'Proyectos Reales', accent: '#2496ed' },
			{ name: 'AWS Cloud', category: 'Infraestructura', level: 'En Aprendizaje', accent: '#ff9900' },
			{ name: 'Cloudflare', category: 'Infraestructura', level: 'Proyectos Reales', accent: '#f38020' },
			{ name: 'Vercel', category: 'Infraestructura', level: 'Uso Frecuente', accent: '#ffffff' },
			{ name: 'Render', category: 'Infraestructura', level: 'Proyectos Reales', accent: '#46e3b7' },
			{ name: 'Oracle Cloud', category: 'Infraestructura', level: 'En Aprendizaje', accent: '#f80000' }
		]
	},
	{
		title: 'Herramientas, CI/CD & Testing',
		icon: '🛠️',
		items: [
			{ name: 'Git', category: 'Herramientas', level: 'Uso Frecuente', accent: '#f05033' },
			{ name: 'GitHub', category: 'Herramientas', level: 'Uso Frecuente', accent: '#ffffff' },
			{ name: 'GitHub Actions', category: 'Herramientas', level: 'En Aprendizaje', accent: '#2671e5' },
			{ name: 'GitLab', category: 'Herramientas', level: 'En Aprendizaje', accent: '#fc6d26' },
			{ name: 'GitLab CI', category: 'Herramientas', level: 'En Aprendizaje', accent: '#fc6d26' },
			{ name: 'Vite', category: 'Herramientas', level: 'Uso Frecuente', accent: '#646cff' },
			{ name: 'Vitest', category: 'Herramientas', level: 'En Aprendizaje', accent: '#fcc72b' },
			{ name: 'Postman', category: 'Herramientas', level: 'Uso Frecuente', accent: '#ff6c37' },
			{ name: 'Markdown', category: 'Herramientas', level: 'Uso Frecuente', accent: '#ffffff' }
		]
	}
];
