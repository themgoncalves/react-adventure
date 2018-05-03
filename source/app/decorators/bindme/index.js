/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

export default (target, key, descriptor) => {
  if (!target[key] && {}.toString.call(target[key]) !== '[object Function]') {
    throw new Error('@bindme decorator can only be applied to functions', target);
  };

  let fn = descriptor.value;
  let definingProperty = false;

  return {
    configurable: true,

    get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      let boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return boundFn;
        },
        set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set(value) {
      fn = value;
    }
  };
};
