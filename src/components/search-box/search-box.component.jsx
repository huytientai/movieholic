import React from "react";
import { InputBase } from "@material-ui/core";

import { Search } from "@material-ui/icons";
import { useStyles } from "./search-box.styles";
import "./search-box.styles.scss";
import SearchDropdown from "../search-dropdown/search-dropdown.component";
import { firestore } from "../../firebase/firebase.utils";

import { useRef, useEffect } from "react";

export default function SearchBox() {
  const classes = useStyles();

  const [results, setResults] = React.useState([]);

  const [show, setShow] = React.useState(false);

  function handleChange(event) {
    if (!event.target.value) {
      setResults([]);
      return false;
    }

    let array = [];

    firestore
      .collection("movies")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          array.push(doc.data());
        });
      });

    setResults(array);
    setShow(true);

    // console.log(show);
    // console.log(results);
  }

  function useOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (show) setShow(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutside(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search movies here…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
        />
        <div className={classes.dropdownLists}>
          {show
            ? results.map((result, index) => (
                <SearchDropdown
                  key={index}
                  {...result}
                  className={classes.inputRoot}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
