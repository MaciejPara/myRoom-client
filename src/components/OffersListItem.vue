<template>
    <div class="offersList__item">
        <div class="offersList__itemImage">
            <img :src="getImg" alt="" />
        </div>
        <div class="offersList__itemInfo">
            <p>{{ data.hotelName }}</p>
            <p>{{ data.shortDescription }}</p>
            <p><a :href="getHref">See more..</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "OffersListItem",
    props: {
        data: {
            type: Object,
            required: true,
            id: {
                type: String | Number,
            },
            img: {
                type: String,
            },
            hotelName: {
                type: String,
            },
            shortDescription: {
                type: String,
            },
        },
    },
    computed: {
        getImg() {
            return this.data?.img || "https://via.placeholder.com/250x150";
        },
        getHref() {
            return `/offers/${this.data?.id}`;
        },
    },
};
</script>

<style lang="scss" scoped="true">
.offersList__item {
    border-bottom: 1px solid rgba(128, 128, 128, 0.39);
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-bottom: 10px;
    &Image {
        display: inline-flex;
        img {
            margin: auto;
        }
    }

    &Info {
        display: inline-flex;
        flex-direction: column;
        padding: 10px 5px 0;

        p {
            margin: 0;
            padding-bottom: 10px;

            &:last-child {
                margin-top: auto;
            }
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
    }
}
</style>
