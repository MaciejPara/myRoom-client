<template>
    <div class="offersList">
        <OffersListItem v-for="item in offers" :key="item.id" :data="item" />
    </div>
</template>

<script>
import OffersListItem from "./OffersListItem";
export default {
    name: "Main",
    components: { OffersListItem },
    data() {
        return {
            offers: new Array(10).fill().map((item, key) => ({
                id: key,
                hotelName: "test hotem name",
                shortDescription: "short description lorem",
            })),
        };
    },
};
</script>

<style lang="scss" scoped="true">
.offersList {
    padding-top: 10px;
}
</style>
