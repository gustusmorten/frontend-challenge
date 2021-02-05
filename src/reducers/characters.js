
import { Types } from '../actions/actionTypes';
const initialState = {
    filters: {
      name: "",
      gryffindor: false,
      slytherin: false,
      ravenclaw: false,
      hufflepuff: false,
      others: false,
      pure_blood: false,
      half_blood: false,
      muggleborn: false,
      live: false,
      dead: false,
    },
    data: [],
    characters:[],
    loading: false,
    error: {}
}

const Characters = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CHARACTERS:
      return {
        ...state,
        data: action.payload,
        characters: action.payload,
        loading: false,
        error: {}
      }

    case Types.GET_CHARACTERS_LOADING:
      return {
        ...state,
        loading: true,
      }

    case Types.GET_CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload,
    }

    case Types.FILTER_CHARACTERS:

      const filters = {
        ...state.filters,
        ...action.payload
      };
      
      var characters = state.data
      .filter((item) => {
        if (filters.name === "") {
          return true;
        }
        return item.name.toLowerCase().includes(filters.name.toLowerCase());
      })
      .filter((item) => {
        if (!(filters.gryffindor || filters.slytherin ||  filters.ravenclaw ||  filters.hufflepuff ||  filters.others)) {
          return true;
        }
        if (filters.gryffindor) {
          var isGRffindor = (item.house === "Gryffindor")
        }else{
          var isGRffindor = false;
        }

        if (filters.slytherin) {
          var isSlytherin = (item.house === "Slytherin")
        }else{
          var isSlytherin = false;
        }

        if (filters.ravenclaw) {
          var isRavenclaw = (item.house === "Ravenclaw")
        }else{
          var isRavenclaw = false;
        }

        if (filters.hufflepuff) {
          var isHufflepuff = (item.house === "Hufflepuff")
        }else{
          var isHufflepuff = false;
        }
        if (filters.others) {
          var isOthers = (item.house === "")
        }else{
          var isOthers = false;
        }
        return isGRffindor || isSlytherin || isRavenclaw || isHufflepuff || isOthers;
      })
      .filter((item) => {
        if (!(filters.pure_blood || filters.half_blood ||  filters.muggleborn)) {
          return true;
        }
        if (filters.pure_blood) {
          var isPureBlood = (item.ancestry === "pure-blood")
        }else{
          var isPureBlood = false;
        }

        if (filters.half_blood) {
          var isHalfBlood = (item.ancestry === "half-blood")
        }else{
          var isHalfBlood = false;
        }

        if (filters.muggleborn) {
          var isMuggleborn = (item.ancestry === "muggleborn")
        }else{
          var isMuggleborn = false;
        }

        return isPureBlood || isHalfBlood || isMuggleborn;
      })
      .filter((item) => {
        if (!(filters.live || filters.dead)) {
          return true;
        }
        if (filters.live) {
          var isLive = item.alive 
        }else{
          var isLive = false;
        }
        if (filters.dead) {
          var isDead = (item.alive === false)
        }else{
          var isDead = false;
        }
        return isLive || isDead;
      });


      console.log("after", characters);

      return {
        ...state,
        characters: characters,
        filters: {
          ...filters
        }
    }

    default:
      return state;
  }
}

export default Characters;

export const getCharactersData = state => state.characters.data;
export const getCharactersLoading = state => state.characters.loading;
export const getCharactersError = state => state.characters.error;
export const getCharactersFilters = state => state.characters.filters;
export const getCharacters = state => state.characters.characters;



