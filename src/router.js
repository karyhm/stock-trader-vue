import Home from './components/Home.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
	{
		path: '/',
		component: Home
	}, {
		path: '/stocks',
		component: Stocks
	}
]
