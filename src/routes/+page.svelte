<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Accueil - Infos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Bienvenu</h1>

	<h2>
		<strong>1. </strong> CU = Condition d'utilisation <br />
		<strong>2. </strong> Neurtre = Aucune collecte de donnée<br />
		<strong>3. </strong> Pub = Publicité contenue dans l'application : collecte de donnée
		d'identifiant publicitaire <br />
		<strong>2. </strong> Classic = Collecte de nom d'unilisateur et mot de passe<br />
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
