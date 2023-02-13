// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userId: string;
			logged: boolean;
		}
		// interface PageData {}
		// interface Platform {}

	}
	interface Window {
		ethereum?: any;
	}
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}

export { };
