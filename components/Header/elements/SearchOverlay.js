import {IoIosSearch, IoIosClose} from "react-icons/io";
import clsx from "clsx";

const SearchOverlay = ({activeStatus, getActiveStatus}) => {
  return (
    <>
      <div className={clsx("search-wrap", activeStatus && "open")}>
        <button
          className="close-search"
          onClick={() => {
            getActiveStatus(false);
          }}
        >
          <IoIosClose/>
        </button>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            id="search-input"
          />
          <button type="submit" className="search-icon">
            <IoIosSearch/>
          </button>
        </form>
      </div>
      <div className={clsx("search-overlay", activeStatus && "open")}/>
    </>
  );
};

export default SearchOverlay;
