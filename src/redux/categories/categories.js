const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

const checkStatus = () => ({
  type: CHECKED_STATUS,
});

const categoryReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under Construction 🚧';
    default:
      return state;
  }
};

export { checkStatus };
export default categoryReducer;
