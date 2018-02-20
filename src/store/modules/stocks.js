import stocks from '../../data/stocks.js'

const state = {
	stocks: []
}

const mutations = {
	'SET_STOCKS' (state, stocks) {
		state.stocks = stocks
	},
	'RAND_STOCKS' (state) {

	}
}

const actions = {
	buyStock: ({commit}, order) => {
		commit()
	},
	initStocks: ({commit}) => {
		commit('SET_STOCKS', stocks)
	},
	randomStocks: ({commit}, order) => {
		commit('RAND_STOCKS')
	}
}

const getters = {
	stocks: state => {
		return state.stocks
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
