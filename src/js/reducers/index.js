import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: [],
  remoteArticles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    if(action.payload.title=== '') {
      return state;
    }
    return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
  }else if (action.type === "FOUND_BAD_WORD") {
    console.log("BAD WORD NOT ALLOWED");
  }
  if(action.type === "DATA_LOADED") {
    return Object.assign({},state,{
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;