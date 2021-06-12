<template>
    <transition id="modal" name="modal" v-if="isVisible">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <div
                                class="modal-message"
                                :class="{
                                    success: successMessage,
                                    error: errorMessage,
                                }"
                            >
                                {{ successMessage }}{{ errorMessage }}
                            </div>
                            <h2 v-if="!isMessage">Order</h2>
                        </slot>
                    </div>

                    <div v-if="!isMessage" class="modal-body">
                        <slot name="body">
                            <h3 class="field">Fill required data:</h3>
                            <div class="field">
                                <input v-model="name" placeholder="name" />
                            </div>
                            <div class="field">
                                <input
                                    v-model="surname"
                                    placeholder="surname"
                                />
                            </div>
                            <div class="field">
                                <input v-model="email" placeholder="email" />
                            </div>
                            <div class="field">
                                <h3>Choose date:</h3>
                                <v-date-picker
                                    locale="en"
                                    v-model="date"
                                    :is-range="true"
                                />
                            </div>
                            <div class="field">
                                Price: {{ price }} {{ currency }} ({{
                                    countOfDays
                                }}
                                day/s)
                            </div>
                        </slot>
                    </div>

                    <div v-if="!isMessage" class="modal-footer">
                        <slot name="footer">
                            <button
                                class="modal-default-button"
                                @click="submit"
                            >
                                Submit
                            </button>
                            <button
                                class="modal-default-button modal-default-button__cancel"
                                @click="close"
                            >
                                Cancel
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        successMessage: {
            type: String,
            default: "",
        },
        errorMessage: {
            type: String,
            default: "",
        },
        pricePerDay: {
            type: Number,
            default: 0,
        },
        currency: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            date: new Date(),
            name: "",
            surname: "",
            email: "",
            countOfDays: 1,
            price: 0,
        };
    },
    updated() {
        this.price = this.getPrice();
    },
    watch: {
        date({ start, end }) {
            const date1 = new Date(end);
            const date2 = new Date(start);
            const difference = date1.getTime() - date2.getTime();
            const days = Math.ceil(difference / (1000 * 3600 * 24));

            this.countOfDays = days ? days : 1;
            this.price = this.getPrice();
        },
    },
    computed: {
        isMessage() {
            return this.successMessage || this.errorMessage;
        },
    },
    methods: {
        getPrice() {
            return this.countOfDays * this.pricePerDay;
        },
        clearForm() {
            Object.assign(this.$data, this.$options.data());
        },
        close() {
            this.$emit("close-modal");
            this.clearForm();
        },
        submit() {
            const { name, surname, email, date, currency, price } = this;

            this.$emit("submit", {
                name,
                surname,
                email,
                date,
                currency,
                price,
            });

            // this.clearForm();
        },
    },
};
</script>

<style lang="scss" scoped="true">
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    max-width: 800px;
    width: 95%;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;

    .field {
        margin: auto;
        width: 50%;
        padding: 0 0 10px 0;

        input {
            width: 100%;
            font-size: 1.2rem;
        }
    }
}

.modal-footer {
    height: 30px;
    display: flex;

    .modal-default-button {
        margin: auto 10px auto auto;

        display: inline-block;
        height: max-content;

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

        &__cancel {
            margin: auto auto auto 10px;

            background-color: rgba(181, 198, 219, 0.82);
            color: #fff;
            padding: 8px 35px;
            font-size: 20px;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                background-color: rgba(181, 198, 219, 0.82);
                color: rgb(0, 131, 190);

                -webkit-transition: ease 0.1s;
                -moz-transition: ease 0.1s;
                -ms-transition: ease 0.1s;
                -o-transition: ease 0.1s;
                transition: ease 0.1s;
            }
        }
    }
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
