export default {
    state: {
        offers: new Array(10).fill().map((item, key) => ({
            id: key,
            hotelName: `Hotel & Room name ${key}`,
            shortDescription: "short description lorem",
            description: "description lorem",
            address: `2${key}/6 Stare Miasto, 00-000, Kraków`,
            pricePerDay: 30 + key,
            currency: "USD",
            img: "https://via.placeholder.com/1024x400",
            rate: 5,
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
        })),
    },
    getters: {
        getOffer: (state) => (id) => {
            return state.offers.find(({ id: oId }) => oId.toString() === id.toString());
        },
    },
    mutations: {
        setOffers: (state, offers) => {
            state.offers = offers;
        }
    },
};