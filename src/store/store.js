import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pages: [],
        page: {}
    },
    getters: {
        getPages: state => {
            return state.pages
        },
        getSinglePage: state => {
            return state.page
        }
    },
    mutations: {
        fetchPages: state => {          
            axios.defaults.baseURL = 'http://0.0.0.0:5000/api/'
            axios.get('/pages')
            .then(res => {
                const data = res.data.data
                for (let key in data) {
                    const page = data[key]
                    state.pages.push(page)
                }
                console.log(state.pages)
            })
        },
        fetchSinglePage: (state, id) => {
            axios.defaults.baseURL = 'http://0.0.0.0:5000/api/'
            axios.get(`/pages/${id}`)
            .then(res => {
                state.page = res.data.data
                console.log(state.page)
            })
        }
    },
    actions: {
        fetchPages: ({commit}) => {
            commit('fetchPages')
        },
        fetchSinglePage: ({commit},id) => {
            commit('fetchSinglePage',id)
        }
    }
})