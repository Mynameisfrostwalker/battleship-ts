type Anyfunctions = (...args: unknown[]) => void;

interface Events {
  [index: string]: Anyfunctions[];
}

let events: Events = {
  // key: eventname, value: [funcs]
};

const subscribe = (eventName: string, func: Anyfunctions) => {
  events[eventName] = events[eventName] || [];
  events[eventName].push(func);
};

const unsubscribe = (eventName: string, func: Anyfunctions) => {
  if (events[eventName]) {
    for (let i = 0; i < events[eventName].length; i += 1) {
      if (events[eventName][i].toString() === func.toString()) {
        events[eventName].splice(i, 1);
        break;
      }
    }
  }
};

const publish = (eventName: string, ...args: unknown[]): void => {
  const funcs = events[eventName];
  if (Array.isArray(funcs)) {
    funcs.forEach((func) => {
      func(...args);
    });
  }
};

const clear = () => {
  events = {};
};

export { publish, subscribe, unsubscribe, clear };
