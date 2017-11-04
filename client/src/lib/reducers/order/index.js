import {orders} from '../../store/state'
export default function(state=orders, action) {
	switch(action.type) {
		case 'ADD_ITEM_TO_BAG': {
			let newState = [
				...state
			];
			let active = newState.find(order => order.status === 'active');
			if (active) {
				active.items.push(action.id)
				return newState;
			}

			newState.push({
				id: Math.floor(Math.random() * 10000000),
				status: 'active',
				items: [ action.id ]
			});
			return newState;
		};
		case 'ITEM_BUY_NOW': {
			let newState = [
				...Object.create({}, state)
			];
			let active = newState.find(order => order.id === action.id);
			if (active) {
				active.items.push(action.id)
				return newState;
			}

			newState.push({
				id: Math.floor(Math.random() * 10000000),
				status: 'active',
				items: [ action.id ]
			});
			return newState;
		};
		case 'ITEM_BUY_NOW_COMPLETE': {
			let newState = [
				...state
			];
			let active = newState.find(order => order.status === 'active')
			if (active) {
				active.status = 'done';
			}
			return newState;
		};
	}
  return state;
}
