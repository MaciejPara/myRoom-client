<template>
    <Navigation />
    <router-view />
</template>

<script>
import Navigation from "./components/Navigation";

export default {
    name: "App",
    components: {
        Navigation,
    },
};
</script>

<style lang="scss">
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html,
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.container {
    padding: 50px 10%;

    .filters {
        padding: 30px 0;
        background-color: rgba(255, 165, 0, 0.15);

        text-align: center;
    }
}
</style>
