<template>
	<header class="header">
		<div class="container">
			<div class="header__box">
				<div class="header__logo">
					myShelf
				</div>
				<nav>
					<RouterLink to="/">Главная</RouterLink>
					<RouterLink to="/about">О проекте</RouterLink>
					<RouterLink to="/top">Топы</RouterLink>
					<RouterLink to="/persons">Личности</RouterLink>
					<RouterLink to="/moments">События</RouterLink>
					<RouterLink to="/tasks">Таска</RouterLink>
				</nav>
				<div>
					User
				</div>
			</div>
		</div>
	</header>
</template>


<style scoped lang="scss">
@use '../css/main.scss' as *;
	.header{
		height: 80px;
		background: $lightBg;
		border: 1px solid blue;
		&__box{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border: 1px solid red;
		}
	}
</style>
