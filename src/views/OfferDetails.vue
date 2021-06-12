<template>
    <div class="container details">
        <div class="detailsPriceContainer">
            <router-link class="goBackLink" to="/offers">
                Go back
            </router-link>
            <p class="detailsPrice">
                {{ data.pricePerDay }} {{ data.currency }}/day
            </p>
        </div>
        <div class="detailsHeader">
            <h2 class="detailsHeader__text">{{ data.hotelName }}</h2>
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
                    <span> {{ data.address }}</span>
                    <span class="detailsContent__rate">
                        Rate: {{ data.rate?.toFixed(1) }}/5
                    </span>
                </p>
            </div>
            <div class="detailsContent__imgContainer">
                <img :src="data.img" alt="main img" />
            </div>
            <div class="detailsContent__facilities">
                <div
                    class="detailsContent__facilitiesItem"
                    v-for="(facility, index) in data.facilities"
                    :key="index"
                >
                    <i
                        :class="`fas ${facility.iconClass}`"
                        :title="facility.name"
                    ></i>
                </div>
            </div>
            <div class="detailsContent__description">
                <h2>About us</h2>
                <p>
                    {{ data.description }}
                </p>
            </div>
        </div>
        <Modal
            :is-visible="isModalVisible"
            @close-modal="closeModal"
            @submit="onSubmit"
            :success-message="successMessage"
            :error-message="errorMessage"
            :price-per-day="data.pricePerDay"
            :currency="data.currency"
        />
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
            data: {},
            hiddenString: "hidden",
            successMessage: "",
            errorMessage: "",
            messageTimeout: 2500,
        };
    },
    methods: {
        showModalTrigger() {
            this.toggleScroll();
            this.isModalVisible = true;
        },
        closeModal() {
            this.toggleScroll();
            this.isModalVisible = false;
            this.successMessage = "";
            this.errorMessage = "";
        },
        toggleScroll() {
            const overflow = document.body.style.overflow;
            let newOverflow = "auto";

            if (overflow !== this.hiddenString) {
                newOverflow = this.hiddenString;
            }

            document.body.style.overflow = newOverflow;
        },
        isEmailValid(email) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email
            );
        },
        isDateValid(date) {
            return date;
        },
        onSubmit({ email, date, ...rest }) {
            const { offerId } = this;
            const defaultRequired = "is required";
            const result = {
                ...rest,
                offerId,
            };
            const error = {};

            if (this.isEmailValid(email)) {
                result.email = email;
            } else {
                error.email = `Email ${defaultRequired}`;
            }

            if (this.isDateValid(date)) {
                result.date = date;
            }

            if (Object.keys(error).length === 0) {
                this.sendDataToAPI(result);
            }
            // this.closeModal();
        },
        async sendDataToAPI(data) {
            console.log("sent to api ::: ", data);

            try {
                const req = await fetch(`http://127.0.0.1:3000/order`, {
                    method: "post",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                await req.json();

                if (req.ok) {
                    this.successMessage =
                        "Order successfully processed. Please check your email to see more details.";
                } else {
                    this.errorMessage =
                        "Something went wrong, please try again later.";
                }

                setTimeout(() => {
                    this.closeModal();
                }, this.messageTimeout);
            } catch (e) {
                console.error(e);
            }
        },
        async getOfferFromAPI() {
            let result;

            try {
                const req = await fetch(
                    `http://127.0.0.1:3000/room/${this.offerId}`
                );

                result = await req.json();
            } catch (e) {
                console.error(e);
            }

            return result;
        },
    },
    async mounted() {
        this.offerId = this.$route.params.id;

        const data =
            this.$store.getters.getOffer(this.offerId) ||
            (await this.getOfferFromAPI());

        if (data) {
            this.data = data;
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
