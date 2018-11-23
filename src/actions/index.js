import { APP_LOADED } from "./actionTypes";

export function loadApp() {
  console.log("App loaded logged from actions");
  return {
    type: APP_LOADED,
    payload: true
  };
}
