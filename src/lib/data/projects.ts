export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	problemSolved: string;
	tags: string[];
	liveUrl?: string;
	githubUrl?: string;
	accentColor: string; // hex for highlight border/glow
	featured: boolean;
	badge: string;
	image?: string;
}

export const PROJECTS: Project[] = [
	{
		id: 'open-shop',
		title: 'OpenShop',
		subtitle: 'Modern E-Commerce Boilerplate',
		description: 'Infraestructura de e-commerce de alto rendimiento con catálogo instantáneo a 0ms (SSR), filtrado multicriterio, Wishlist y Checkout interactivo.',
		problemSolved: 'Elimina la latencia de carga en tiendas online mediante Server Components y almacenamiento en memoria, ofreciendo un flujo completo de compra y panel de usuario.',
		tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Prisma', 'Supabase', 'Vercel'],
		liveUrl: 'https://open-shop-sic7.vercel.app/',
		githubUrl: 'https://github.com/Coyak/Open-shop',
		accentColor: '#D14C03',
		featured: true,
		badge: 'E-COMMERCE BOILERPLATE',
		image: '/open-shop.png'
	},
	{
		id: 'opengarden',
		title: 'OpenGarden',
		subtitle: 'Digital Garden as a Service',
		description: 'Plataforma para crear y explorar jardines digitales interconectados mediante grafos de conocimiento interactivos y bidireccionales en tiempo real.',
		problemSolved: 'Resuelve la fragmentación de notas personales transformándolas en una red visual de conocimiento indexable, colaborativa y exportable.',
		tags: ['SvelteKit', 'TypeScript', 'Supabase', 'D3.js', 'Tailwind CSS', 'PostgreSQL'],
		liveUrl: 'https://open-garden-pi.vercel.app/',
		githubUrl: 'https://github.com/coyak/opengarden',
		accentColor: '#D14C03',
		featured: true,
		badge: 'CORE PROJECT',
		image: '/open-garden.png'
	},
	{
		id: 'saas-restaurante',
		title: 'SaaS Gastronómico',
		subtitle: 'Sistema de Gestión Integral & Pedidos',
		description: 'Solución SaaS end-to-end para restaurantes que automatiza comandos de cocina, carta digital en vivo, control de stock y métricas analíticas.',
		problemSolved: 'Elimina cuellos de botella en la atención presencial y pedidos online sincronizando cocina, caja e inventario en milisegundos.',
		tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Tailwind CSS'],
		liveUrl: 'https://gestion-restaurant-xi.vercel.app/',
		githubUrl: 'https://github.com/Coyak/Gestion-Restaurant',
		accentColor: '#D14C03',
		featured: true,
		badge: 'SAAS PLATFORM',
		image: '/gestion-restaurant.png'
	}
];
