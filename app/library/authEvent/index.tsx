import EventEmitter from "eventemitter3"


const authEvent = new EventEmitter();


export function exit() {
    authEvent.emit("exit");
}


export function onExit(handler: () => void) {
    const listener = authEvent.on("exit", () => {
        handler();
    });
    return function cleaner() {
        listener.removeListener("exit")
    }
}

export function login() {
    authEvent.emit("login");
}

export function onLogin(handler: () => void) {
    const listener = authEvent.on("login", () => {
        handler();
    });
    return function cleaner() {
        listener.removeListener("login")
    }
}