import React from "react";

function ProductRow(props) {
    if (props.stocked) {
        return (
            <div className="row">
                {props.name} {props.price}
            </div>
        )
    } else {
        return (
            <div className="row" style={{ color: 'red' }}>
                {props.name} {props.price}
            </div>
        )
    }
}

export default ProductRow;
