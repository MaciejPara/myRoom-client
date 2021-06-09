<template>
    <div class="container offersList">
        <OffersListItem v-for="item in offers" :key="item.id" :data="item" />
    </div>
</template>

<script>
import OffersListItem from "../components/OffersListItem";
export default {
    name: "Main",
    components: { OffersListItem },
    data() {
        return {
            offers: [],
        };
    },
    mounted() {
        this.offers = this.$store.state.offers;
    },
};
</script>

<style lang="scss" scoped="true">
.offersList {
    padding-top: 10px;
}
</style>
