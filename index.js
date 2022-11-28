const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
  return function fn() {};
};

const returnsAnAnonymousFunction = () => {
  return function () {};
};
