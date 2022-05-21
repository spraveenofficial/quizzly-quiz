import { combineReducers } from "redux";
import { auth } from "./auth";
import { register, login, user } from "./user";
import { addQuiz, homePageQuiz, eachQuiz } from "./quiz";
import { leaderboard } from "./leaderboard";
export default combineReducers({
  auth,
  register,
  login,
  user,
  addQuiz,
  homePageQuiz,
  eachQuiz,
  leaderboard,
});
