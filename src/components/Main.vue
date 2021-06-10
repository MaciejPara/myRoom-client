<template>
    <div class="container">
        <div class="filters">filters</div>
        <OffersList />
    </div>
</template>

<script>
import OffersList from "../views/OffersList";
export default {
    name: "Main",
    components: {
        OffersList,
    },
};
</script>
