export default {
    state: {
        offers: new Array(10).fill().map((item, key) => ({
            id: key,
            hotelName: `Hotel & Room name ${key}`,
            shortDescription: "short description lorem",
            address: `2${key}/6 Stare Miasto, 00-000, Kraków`,
            pricePerDay: 100 + key,
            currency: "USD",
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
        }
    }
};