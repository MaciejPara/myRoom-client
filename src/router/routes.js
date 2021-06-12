export default [
    {
        path: '/',
        name: 'Home',
        component: import('../views/Home.vue')
    },
    {
        path: '/offers',
        name: 'Offers',
        component: import('../views/OffersList.vue')
    },
    {
        path: '/offers/:id',
        name: 'Offer details',
        component: import('../views/OfferDetails.vue')
    },
    {
        path: '/rate/:offerId/:orderId/:rate',
        name: 'Offer rate',
        component: import('../views/OfferRate.vue')
    },
];