import {
  TOGGLE_SIDER_STATUE
} from '@src/actions/type';

const appState = {
  collapsed: false
};

export default (state = appState, action) => {
  switch (action.type) {
      case TOGGLE_SIDER_STATUE:
          return {
            ...state,
            collapsed: action.payload
          };
      default:
          return state;
  }
}
