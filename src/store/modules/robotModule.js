import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      /* eslint no-param-reassign: 0 */
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      // destructured: { commit } comes from context object (context.commit)
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(err => console.error(err));
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
        .catch(err => console.error(err));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
};
