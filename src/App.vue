<template>
    <div id="app">
        <div id="app-wrapper">
            <NavbarComponent />
            <router-view></router-view>
            <FooterComponent />
        </div>
    </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
export default {
    name: "App",
    components: {
        NavbarComponent,
        FooterComponent
    }
};
</script>

<style>
html {
    background-color: #70636a;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #70636a;
}

#app-wrapper {
    padding-bottom: 2rem;
}

body {
    margin: 0 auto;
}
</style>
