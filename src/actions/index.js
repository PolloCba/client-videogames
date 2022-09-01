import axios from "axios";
import {
  URL_GET_ALL_GAMES,
  URL_GET_ALL_GENRES,
  URL_GET_ALL_PLATFORMS,
  URL_POST_GAME,
  URL_SEARCH_BY_ID,
  URL_SEARCH_BY_NAME,
} from "../constants";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GENRES_FILTER = "GENRES_FILTER";
export const GET_GENRES = "GET_GENRES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_NAME_GAME = "GET_NAME_GAME";
export const GET_DETAILS = "GET_DETAILS";
export const GET_PLATFORMS = "GET_PLATFORMS";

export function getVideogames() {
  return async function (dispatch) {
    var result = await axios.get(URL_GET_ALL_GAMES);
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: result.data,
    });
  };
}

export function getNameGame(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(URL_SEARCH_BY_NAME + name);
      return dispatch({
        type: GET_NAME_GAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPlatforms() {
  return async function (dispatch) {
    var result = await axios.get(URL_GET_ALL_PLATFORMS);
    return dispatch({
      type: GET_PLATFORMS,
      payload: result.data,
    });
  };
}
export function getGenres() {
  return async function (dispatch) {
    var result = await axios.get(URL_GET_ALL_GENRES);
    return dispatch({
      type: GET_GENRES,
      payload: result.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(URL_SEARCH_BY_ID);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function genreFilter(payload) {
  return {
    type: GENRES_FILTER,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function postGame(payload) {
  return async function (dispatch) {
    const response = await axios.post(URL_POST_GAME, payload);
    return response;
  };
}
