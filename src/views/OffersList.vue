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
    async mounted() {
        await this.getOffersFromAPI();
    },
    methods: {
        async getOffersFromAPI() {
            try {
                const req = await fetch("http://127.0.0.1:3000/room");
                const array = await req.json();

                if (array) {
                    const res = array.map(({ _id: id, ...rest }) => ({
                        id,
                        ...rest,
                    }));

                    this.$store.commit("setOffers", res);
                    this.offers = res;
                }
            } catch (e) {
                console.error(e);
            }
        },
    },
};
</script>

<style lang="scss" scoped="true">
.offersList {
    padding-top: 10px;
}
</style>
