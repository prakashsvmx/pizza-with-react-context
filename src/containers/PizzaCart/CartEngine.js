const PizzaSizeMatchConfig = {
  SMALL: {
    cost: 150,
    sizeRules: [
      {
        adult: 0,
        children: 1
      }
    ]
  },

  MEDIUM: {
    cost: 200,
    sizeRules: [
      {
        adult: 1,
        children: 2
      }
    ]
  },
  LARGE: {
    cost: 300,
    sizeRules: [
      {
        adult: 1,
        children: 2
      },
      {
        adult: 2,
        children: 0
      },
      {
        adult: 0,
        children: 4
      }
    ]
  }
};

//const MIN_ADULTS = 1;
//const MIN_CHILDREN = 0;

export { PizzaSizeMatchConfig };
