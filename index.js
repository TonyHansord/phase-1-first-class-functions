const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
  function fn() {}
  return fn;
};

const returnsAnAnonymousFunction = () => {
  return function () {};
};
