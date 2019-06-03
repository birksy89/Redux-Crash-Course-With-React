import { FETCH_POSTS, NEW_POST } from "../actions/types";
import uuid from "uuid";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  console.log("Post Reducer is firing...");

  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload);

      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      console.log(state);
      console.log(action);

      //Destructure the incoming data
      const {title, body} = action.payload;
      const newItem = {
        id: uuid.v4(),
        title,
        body
      }
      
      return {
        ...state,
        items: [newItem,...state.items ]
      };

    default:
      return state;
  }
}
