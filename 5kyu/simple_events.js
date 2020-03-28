// Your goal is to write an Event constructor function, which can be used to make event objects.

// An event object should work like this:

// it has a .subscribe() method, which takes a function and stores it as its handler
// it has an .unsubscribe() method, which takes a function and removes it from its handlers
// it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments

class Event {
  constructor() {
    this.events = []
  }

  subscribe(fn) {
    this.events.push(fn)
  }
  
  unsubscribe(fn) {
    let idx = this.events.indexOf(fn)
  
    if (fn !== -1) {
      this.events.splice(idx, 1)
    }
  }
  
  emit(...args) {
    this.events.forEach(event => event.apply(null, args))
  }
}
