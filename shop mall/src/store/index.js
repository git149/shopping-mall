import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersist from 'vuex-persist'
import jingdongList from './jingdongList'
import categoryList from './categoryList'
Vue.use(Vuex);//从vue官网中引用vuex，这里使用npm安装
export default new Vuex.Store({//实例化vuex配置对象 并导出
    state: {
        jingdongList: jingdongList,
        categoryList: categoryList,
        cake: {},
        cart: []
    },
    mutations: {
        DETAIL(state, cake) {
            state.cake = cake;
        },
        ADDCART(state, cake) {
            if (state.cart.length == 0) {
                Vue.set(cake, 'number', 1)
                state.cart.push(cake)
                return;
            }
            for (let index = 0; index < state.cart.length; index++) {
                if (state.cart[index].cakeName == cake.cakeName) {
                    state.cart[index].number++;
                    return;
                }
            }
            Vue.set(cake, 'number', 1)
            state.cart.push(cake)
        },
        ADD(state, cake) {
            state.cart.forEach((item) => {
                if (item.cakeName == cake.cakeName) item.number++;
            })
        },
        SUB(state, cake) {
            state.cart.forEach((item) => {
                if (item.cakeName == cake.cakeName) item.number--;
            })
        },
        DELETE(state, cake) {
            state.cart = state.cart.filter((item) => {
                if (item.cakeName != cake.cakeName) return true;
            })
        },
        PAY(state, selectcake) {
            state.cart = state.cart.filter((item) => {
                let flag = false;
                for (let index = 0; index < selectcake.length; index++) {
                    if (item.cakeName == selectcake[index].cakeName) {
                        flag = true;
                        break;
                    }
                }
                if (flag) return false;
                else return true;
            })
        },
        CLEAR(state) {
            state.cart = [];
        }
    },
    plugins: [
        new VuexPersist({
            storage: window.localStorage,
        }).plugin,
    ]
})