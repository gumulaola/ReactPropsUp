import React from "react";

function ProductCategoryRow(props) {
    return (
        <div className="category">
            {props.category}
        </div>
    )
}

export default ProductCategoryRow;