import {
  TOGGLE_SIDER_STATUE
} from './type';

export function toggleSiderStatus() {
  return (dispatch, getState) => {

    dispatch({
      type: TOGGLE_SIDER_STATUE,
      payload: !getState().app.collapsed
    })
  }
}
