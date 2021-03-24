let EventBus = {};

const _ = {
  cached: {
  },
  handlers: {
  },
}

Object.defineProperties(EventBus, {
  on: {
    get() {
      return (event, ...options) => {
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
    }
  },
  '_listen': {
    get() {
      return (event, fn, isCallCache) => {
        let handlers = _.handlers
        handlers[event] = fn
        if (_.cached[event] && isCallCache) {
          fn.apply(null, _.cached[event])
        }
      }
    }
  },
  off: {
    get() {
      return (event, fn) => {
        let handlers = _.handlers[event]
        let cachedEvent = _.cached[event]
        if (!fn) {
          delete _.handlers[event]
          delete _.cached[event]
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
    }
  },
  emit: {
    get() {
      return (event, ...options) => {
        let handlers = _.handlers[event]
        if (handlers) {
          handlers.apply(null, options)
        }
        _.cached[event] = options
      }
    }
  }
})

export default EventBus