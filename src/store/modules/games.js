//represents module
import streamsApi from "../../api/streamsApi"
import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

//mutation -types
const types = {
    SET_GAMES_DATA: "SET_GAMES_DATA",
    SET_STREAMS_DATA: "SET_STREAMS_DATA"
}
const state = {
    test: 'test-games-state',
    gamesResponseData: [],
    streamsResponseData: []
}
//getting state
const getters = {

}
//altering/mutating state 
const mutations = {
    [types.SET_GAMES_DATA](state, data) {
        state.gamesResponseData = data
    },
    [types.SET_STREAMS_DATA](state, data) {
        state.streamsResponseData = data
    }

}
//To dispatch actions or commit mutations in the global namespace, pass { root: true } as the 3rd argument to dispatch and commit.

//Actions TODO
const actions = {
    async getGamesData({ commit, state }) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await streamsApi.getGames().then(res => {
                    let dataArray = res.data
                    let replacedArray = dataArray.map(item => {
                        let newUrl = item.box_art_url.replace("{width}", "300").replace("{height}", "300");
                        item.box_art_url = newUrl
                    })
                    commit(types.SET_GAMES_DATA, dataArray)
                    //return if sucessfull
                    resolve(dataArray)
                })

            } catch (error) {
                console.log(error)
            }
        })
    },
    async getStreamsData({ commit }) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await streamsApi.getStreams().then(res => {
                    let dataArray = res.data
                    let replacedArray = dataArray.map(item => {
                        let newUrl = item.thumbnail_url.replace("{width}", "300").replace("{height}", "300");
                        item.thumbnail_url = newUrl
                    })
                    commit(types.SET_STREAMS_DATA, dataArray)
                    //return if sucessfull
                    resolve(dataArray)
                })
            } catch (error) {
                console.log(error)
            }
        })
    },
    //PASS GameId  to this endpoint to fetch live streams!!!!
    async getGameStreamsData({ commit }, gameId) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await streamsApi.getGameStreams() + gameId.then(res => {
                    let dataArray = res.data
                    let replacedArray = dataArray.map(item => {
                        let newUrl = item.thumbnail_url.replace("{width}", "300").replace("{height}", "300");
                        item.thumbnail_url = newUrl
                    })
                    commit(types.SET_STREAMS_DATA, dataArray)
                    //return if sucessfull
                    resolve(dataArray)
                })
            } catch (error) {
                console.log(error)
            }
        })
    }
}
//By default, actions, mutations and getters inside modules are still registered under the global namespace
// - this allows multiple modules to react to the same mutation/action type.

//If you want your modules to be more self-contained or reusable, you can mark it as namespaced with namespaced: true.
// When the module is registered, all of its getters, actions and mutations will be automatically namespaced

export default {
    namespaced: true,
    state,
    actions,
    mutations
}