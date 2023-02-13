/* eslint-disable react/button-has-type */
// import SearchBar from "../components/Search/SearchBar";
// import SearchResults from "../components/Search/SearchResults";
// import SearchType from "../components/Search/SearchType";
import HomeEvents from "../components/HomePage/HomeEvents";
import HomeCarousel from "../components/HomePage/HomeCarousel";
import "../styles/Homepage.scss";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <HomeEvents />
    </div>
  );
}
