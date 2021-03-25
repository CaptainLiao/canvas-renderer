export default class EventBus {
  constructor() {
    this.cached = {};
    this.handlers = {}
  }

  on(event, ...options) {
    let args = options[0]
    // 默认不使用cache。（缺省 undefined）
    let isCallCache = options[1];
    try {
      if (typeof args === 'function') {
        this._listen(event, args, isCallCache);
      } else {
        this._listen(event, args[event].bind(args), isCallCache)
      }
    } catch (e) {
      throw new Error(`${event} is not a function`)
    }
  }


  _listen(event, fn, isCallCache) {
    let handlers = this.handlers
    handlers[event] = fn
    if (this.cached[event] && isCallCache) {
      fn.apply(null, this.cached[event])
    }
  }

  off(event, fn) {
    let handlers = this.handlers[event]
    let cachedEvent = this.cached[event]
    if (!fn) {
      delete this.handlers[event]
      delete this.cached[event]
      return
    }
    for (let i = 0, len = handlers.length; i < len; i++) {
      if (handlers[i] === fn) {
        handlers.splice(i, 1)
        cachedEvent.splice(i, 1)
        break
      }
    }
  }


  emit(event, ...options) {
    let handlers = this.handlers[event]
    if (handlers) {
      handlers.apply(null, options)
    }
    this.cached[event] = options
  }

}