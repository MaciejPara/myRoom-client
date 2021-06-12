<template>
    <div class="container details">
        Thank you for rating our service
    </div>
</template>

<script>
export default {
    name: "OfferDetails",
    data() {
        return {};
    },
    methods: {},
    async mounted() {
        const { orderId, offerId, rate } = this.$route.params;
        try {
            const req = await fetch(
                `http://127.0.0.1:3000/room/${offerId}/rate`,
                {
                    method: "post",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ orderId, rate }),
                }
            );
            await req.json();
        } catch (e) {
            console.error(e);
        }
    },
};
</script>

<style lang="scss" scoped="true">
.details {
    .detailsHeader {
        display: flex;

        .detailsHeader__text {
            color: orange;
            font-size: 2rem;
        }
        .detailsHeader__button {
            display: inline-block;
            height: max-content;
            margin: auto 0 auto auto;

            border: none;
            background-color: rgba(0, 163, 219, 0.82);
            color: #fff;
            padding: 8px 35px;
            font-size: 20px;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                background-color: rgba(0, 185, 255, 0.82);
                color: rgb(0, 131, 190);

                -webkit-transition: ease 0.1s;
                -moz-transition: ease 0.1s;
                -ms-transition: ease 0.1s;
                -o-transition: ease 0.1s;
                transition: ease 0.1s;
            }
        }
    }
    .detailsContent {
        width: 100%;
        .detailsContent__imgContainer img {
            width: 100%;
        }
        .detailsContent__address {
            color: gray;
            font-size: 0.8rem;
            margin: 0;

            p {
                display: flex;
                * {
                    margin-top: auto;
                    margin-bottom: auto;
                }

                img {
                    margin-right: 10px;
                }
            }
        }
        .detailsContent__rate {
            margin-left: auto;
            font-size: 1.5rem;
            color: #fff;
            background-color: orange;
            padding: 5px 10px;
        }
        .detailsContent__facilities {
            grid-template-columns: 50px 50px 50px;
            grid-template-rows: auto;
            column-gap: 10px;
            row-gap: 15px;
            align-items: stretch;

            .detailsContent__facilitiesItem {
                display: inline-grid;
                font-size: 50px;
                text-align: center;
                vertical-align: middle;
                margin: auto;
                padding: 20px;
            }
        }
    }

    .detailsPriceContainer {
        display: flex;

        .goBackLink {
            margin: auto 0;
            display: inline-block;
            width: auto;
            font-size: 1.5rem;
        }

        .detailsPrice {
            margin-left: auto;
            font-size: 2.5rem;
        }
    }
}
</style>
