<template>
    <div class="home">
        <img src="https://via.placeholder.com/1024x400" alt="main img" />

        <h1 class="home__header">
            Get room with the best price!
        </h1>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>
<style lang="scss">
.home {
    display: flex;
    flex-direction: column;
    &__header {
        font-size: 2rem;
        color: orange;
        padding: 50px 0 100px 150px;
        font-weight: normal;
    }
    img {
        max-width: 100%;
        margin: 50px auto auto;
    }
}
</style>
