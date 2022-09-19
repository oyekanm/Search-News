export const reducer = (state, action) => {
  switch (action.type) {
    case "SET LOADING": {
      return { ...state, loading: true };
    }
    case "SET DATA": {
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        page: action.payload.page,
      };
    }
    case "RESET LOADING": {
      return { ...state, loading: false };
    }
    case "FILTER BTN": {
      const filterBtn = state.hits.filter(
        (hit) => hit.objectID !== action.payload
      );
      return {
        ...state,
        hits: filterBtn,
      };
    }
    case "CHANGE": {
      return { ...state, query: action.payload, page : 0 };
    }
    case "TOGGLE PAGE": {
      if (action.payload === "PREV") {
        const pages = state.page - 1;
        if (pages < 0) {
          return { ...state, page: state.nbPages - 1 };
        }
        return { ...state, page: pages };
      }
      if (action.payload === "NEXT") {
        const pages = state.page + 1;
        if (pages > state.nbPages - 1) return { ...state, page: 0 };
        return { ...state, page: pages };
      }
    }
  }
  return state;
};
