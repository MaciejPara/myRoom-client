<template>
    <div class="home">
        <h1 class="home__header">
            Get room with the best price
            <i class="fas fa-exclamation"></i>
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
    &__header {
        font-size: 2rem;
        color: orange;
        padding: 100px 0 100px 150px;
        font-weight: normal;
    }
}
</style>
