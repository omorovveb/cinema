import './App.scss';
import Header from './components/Header'
import Recipes from "./components/Recipes"
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import TopRated from "./components/TopRated"
import Popular from './components/Popular'
import {APIKEY} from "./ApiKey";
import DetailPage from "./components/page/DetailPage";
import ActorDetail from "./components/Actors/ActorDetail";
import SearchResult from "./SearchResult/SearchResult";

function App() {
  return (
    <div>
        <Header/>

        <Routes>
         <Route path={'/'} element={<Home/>}/>
         <Route path={'/recipes'} element={<Recipes/>}/>
         <Route path={'/top_rated'} element={<TopRated/>}/>
         <Route path={'/popular'} element={<Popular/>}/>
         <Route path={'/movies/detail-page/:movieId'} element={<DetailPage/>}/>
         <Route path={'/actors/detail-page/:actorId'} element={<ActorDetail/>}/>
         <Route path={'/movies/search-result/:movieName'} element={<SearchResult/>}/>

     </Routes>

 </div>
  );
}

export default App;
