import io from 'socket.io-client';
import { APP } from './actions/actionsTypes';
import * as AppActions from './actions/App';
import reduxStore from './createStore';
import settings from './constants/settings';

const { SERVER_URL } = settings;
const socket = io.connect(SERVER_URL);

console.dir(socket);

socket.on(APP.PLAYER1_JOINED, player1 => {
	reduxStore.dispatch(AppActions.player1Joined(player1));
});

socket.on(APP.PLAYER2_JOINED, player2 => {
	reduxStore.dispatch(AppActions.player2Joined(player2));
});

socket.on(APP.STATE_UPDATED, App => {
	reduxStore.dispatch(AppActions.stateUpdated(App));
});