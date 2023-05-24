import React, { useState } from "react";
import { useDispatch } from "react-redux";
import setSearchQuery from "../store/features/searchSlice";

const Search = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Search" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button
                onClick={() => dispatch(setSearchQuery(search))}
            >Search</button>
        </div>
    )
}

export default Search;