<template>
    <div class="banner">
        <div class="logo">
            <i class="fas fa-campground"></i>
        </div>
        <div class="banner__titleContainer">
            <h1 class="banner__title">MyRoom</h1>
        </div>
        <nav class="nav">
            <router-link class="nav__item" to="/">Home</router-link>
            <router-link class="nav__item" to="/offers">Offers</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Main",
};
</script>

<style lang="scss" scoped="true">
.banner {
    background-color: aliceblue;
    padding: 10px 15px;
    display: flex;

    .logo {
        display: inline-flex;
        margin: auto 0 auto 20px;
        font-size: 45px;
        color: orange;
    }

    .banner__titleContainer {
        display: inline-flex;
        margin: auto;

        .banner__title {
            font-weight: 500;
            font-style: italic;
            color: rgba(0, 163, 219, 0.82);
        }
    }

    .nav {
        display: flex;

        .nav__item {
            margin: auto 0;
            padding: 10px 20px;
            color: Orange;
            text-decoration: none;
            font-size: 1.2rem;
            border: 1px solid transparent;
            transition: 0.2s ease all;

            &:hover {
                border-color: #ff6d05;
                color: #ff6d05;
            }
        }
    }
}
</style>
