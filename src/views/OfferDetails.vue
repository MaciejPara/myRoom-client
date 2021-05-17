<template>
    <div class="container details">
        <div>
            <router-link class="goBackLink" to="/offers">
                Go back
            </router-link>
        </div>
        <div class="detailsHeader">
            <h2 class="detailsHeader__text">Hotel & Room name</h2>
            <button
                class="detailsHeader__button"
                :id="0"
                @click="showModalTrigger"
            >
                Book
            </button>
        </div>
        <div class="detailsContent">
            <div class="detailsContent__address">
                <p>
                    <img src="https://via.placeholder.com/20x20" alt="icon" />
                    <span> 23/6 Stare Miasto, 00-000, Kraków</span>
                </p>
            </div>
            <div class="detailsContent__imgContainer">
                <img src="https://via.placeholder.com/1024x400" alt="" />
            </div>
            <div class="detailsContent__facilities">
                <div
                    class="detailsContent__facilitiesItem"
                    v-for="(facility, index) in facilities"
                    :key="index"
                >
                    <i
                        :class="`fas ${facility.iconClass}`"
                        :title="facility.name"
                    ></i>
                </div>
            </div>
        </div>
        <Modal :isVisible="isModalVisible" @close-modal="closeModal" />
    </div>
</template>

<script>
import Modal from "../components/Modal";
export default {
    name: "OfferDetails",
    components: {
        Modal,
    },
    data() {
        return {
            isModalVisible: false,
            facilities: [
                {
                    name: "WiFi",
                    iconClass: "fa-wifi",
                },
                {
                    name: "Animals",
                    iconClass: "fa-paw",
                },
                {
                    name: "Bath",
                    iconClass: "fa-bath",
                },
            ],
        };
    },
    methods: {
        showModalTrigger() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
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

    .goBackLink {
        margin: 0 auto 0 0;
        display: inline-block;
        width: auto;
    }
}
</style>
