<template>
    <div>
        <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
            <router-link to="/" class="nav-item">
                Awesome JS SSR Blog!
            </router-link>
            <router-link active-class="is-active" to="/" class="nav-item is-tab" exact>Home</router-link>
            <router-link active-class="is-active" to="/about" class="nav-item is-tab" exact>About</router-link>
            </div>
        </div>
        </nav>
    </div>
</template>
