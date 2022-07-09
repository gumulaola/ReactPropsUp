import React from "react";

function SearchBar(props) {
    function handleTextChange(e) {
        props.onFilterTextChange(e.target.value);
    }

    function handleCheckChange(e) {
        props.onInStockOnlyChange(e.target.checked);
    }

    return (
        <form className="search">
            <input type="text" placeholder="Search..." value={props.filterText} onChange={handleTextChange} />
            <br />
            <input type="checkbox" checked={props.inStockOnly} onChange={handleCheckChange} /> in stock only
        </form>
    )
}

export default SearchBar;
