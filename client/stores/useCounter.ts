import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
	state: () => ({ 
		listOfFav: []
	}),
	persist: {
		storage: persistedState.sessionStorage,
	},
	getters: {
		getListOfFav: (state) => {
			return state.listOfFav
		}
	},
	actions: {
		addItemValue(a: any) {
			// prevent duplicate
			if(this.listOfFav.indexOf(a) === -1){
				this.listOfFav.push(a) //add to list of favorite
			}
		}
	},
})
