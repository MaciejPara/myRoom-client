<template>
    <div class="container">
        <div class="details">
            <div class="GoBack">
                <button>Go back</button>
            </div>
            <div class="detailsHeader">
                <h2 class="detailsHeader__text">Hotel & Room name</h2>
                <button class="detailsHeader__button" :id="0" @click="bookRoom">
                    Book
                </button>
            </div>
            <div class="detailsContent">
                <div class="detailsContent__address">
                    <p>
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <span> 23/6 Stare Miasto, 00-000, Kraków</span>
                    </p>
                </div>
                <div class="detailsContent__imgContainer">
                    <img src="https://via.placeholder.com/1024x400" alt="" />
                </div>
                <div class="detailsContent__facilities">
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                    <div class="detailsContent__facilitiesItem">
                        <img
                            src="https://via.placeholder.com/20x20"
                            alt="icon"
                        />
                        <p>fridge</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="filters">filters</div>
        <OffersList />
    </div>
</template>

<script>
import OffersList from "./OffersList";
export default {
    name: "Main",
    components: {
        OffersList,
    },
    methods: {
        bookRoom({ currentTarget: { id } }) {
            console.log(id);
        },
    },
};
</script>

<style lang="scss" scoped="true">
.container {
    padding: 50px 10%;

    .filters {
        padding: 30px 0;
        background-color: rgba(255, 165, 0, 0.15);

        text-align: center;
    }
}

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
    }
    .detailsContent__facilities {
        grid-template-columns: 50px 50px 50px;
        grid-template-rows: auto;
        column-gap: 10px;
        row-gap: 15px;
        align-items: stretch;

        .detailsContent__facilitiesItem {
            display: inline-grid;
            height: 100px;
            width: 100px;
            border: 1px solid red;
            text-align: center;
            vertical-align: middle;
            margin: auto;
        }
    }
}
</style>
