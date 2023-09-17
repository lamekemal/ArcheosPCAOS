<script>
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
</style>
