export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_ITEMS = 'GET_CATEGORY_ITEMS';
export const GET_TRENDING_ITEMS = 'GET_TRENDING_ITEMS';
export const GET_ITEM_DETAILS = 'GET_ITEM_DETAILS';
export const ADD_ITEM_TO_BAG = 'ADD_ITEM_TO_BAG';
export const ITEMS_CHECKOUT = 'ITEMS_CHECKOUT';
export const ITEM_BUY_NOW = 'ITEM_BUY_NOW';
export const ITEM_LIKE = 'ITEM_LIKE';
export const ITEM_DISLIKE = 'ITEM_DISLIKE';


export function getCategories() {
	return dispatch => {
		dispatch({
			type: GET_CATEGORIES
		})
	}
}

export function getCategoryItems(category) {
	return dispatch => {
		dispatch({
			type: GET_CATEGORY_ITEMS,
			category
		})
	}
}

export function getTrendingItems() {
	return dispatch => {
		dispatch({
			type: GET_TRENDING_ITEMS,
		})
	}
}


export function getItemDetails(id) {
	return dispatch => {
		dispatch({
			type: GET_ITEM_DETAILS,
			id
		})
	}
}

export function addItemToBag(id) {
	return dispatch => {
		dispatch({
			type: ADD_ITEM_TO_BAG,
			id
		})
	}
}


export function checkoutItems() {
	return dispatch => {
		dispatch({
			type: ITEMS_CHECKOUT,
		})
	}
}

export function buyNowItem() {
	return dispatch => {
		dispatch({
			type: ITEM_BUY_NOW,
		})
	}
}

export function likeItem(id) {
	return dispatch => {
		dispatch({
			type: ITEM_LIKE,
			id
		})
	}
}

export function dislikeItem(id) {
	return dispatch => {
		dispatch({
			type: ITEM_DISLIKE,
			id
		})
	}
}

