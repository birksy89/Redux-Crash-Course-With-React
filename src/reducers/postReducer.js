import { FETCH_POSTS, NEW_POST } from "../actions/types";
import uuid from "uuid";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  console.log("Post Reducer is firing...", action);

  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload);
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      //Destructure the incoming data
      const { title, body } = action.payload;
      const newItem = {
        id: uuid.v4(),
        title,
        body
      };
      return {
        ...state,
        items: [newItem, ...state.items]
      };
    case "REMOVE_POST":
      // Get current items as copy
      const currentItems = [...state.items];
      //  Filter the items to remove the id passed
      const filteredItems = currentItems.filter(item => item.id !== action.id);
      return {
        ...state,
        items: [...filteredItems]
      };

    default:
      return state;
  }
}
