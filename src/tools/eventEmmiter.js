import { EventEmitter } from "events";

const messagingEvents = new EventEmitter();
// sub
export function subscribeToMessagingEvents(callback) {
	messagingEvents.on("message", callback);
}
// unsub
export function unScribeFromMessagingEvents(callback) {
	messagingEvents.off("message", callback);
}
// pub
export function sendMessage(message) {
	messagingEvents.emit("message", message);
}
