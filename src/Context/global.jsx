import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURE = "GET_PICTURE";
// reduser
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    case SEARCH:
      return { ...state, searchResult: action.payload, loading: false };
    case GET_UPCOMING_ANIME:
      return { ...state, upcomingAnime: action.payload, loading: false };
    case GET_AIRING_ANIME:
      return { ...state, airingAnime: action.payload, loading: false };
    case GET_PICTURE: 
      return { ...state, pictures: action.payload, loading: false };
    default:
      return state;
  }
};
export const GlobalContextProvider = ({ children }) => {
  // inisial state
  const intialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearch: false,
    searchResult: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  const [search, setSearch] = useState("");

  //handle change
  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert("Please enter a search term");
    }
  };
  //fetch popular aninme
  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
  };

  //fetch upcoming anieme
  const getUpComing = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
    const data = await response.json();
    dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
  };

  //fetch airing anime
  const getAiring = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
    const data = await response.json();
    dispatch({ type: GET_AIRING_ANIME, payload: data.data });
  };

  //search anime
  const searchAnime = async (anime) => {
    dispatch({ type: LOADING });
    try {
      const response = await fetch(`${baseUrl}/anime?q=${anime}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      dispatch({ type: SEARCH, payload: data.data });
    } catch (error) {
      console.error("Error searching anime:", error.message);
    }
  };

  //get anime pictures
const getAnimePicture = async (id) => {
  dispatch({ type: LOADING });
  const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`);
  const data = await response.json()
  console.log(data.data)
  dispatch({type: GET_PICTURE,payload:data.data})
}
  

  useEffect(() => {
    getPopularAnime();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        searchAnime,
        search,
        getUpComing,
        getAiring,
        getPopularAnime,
        getAnimePicture
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
