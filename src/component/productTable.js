import React from "react";
import ProductRow from "./productRow";
import ProductCategoryRow from "./productCategoryRow";

function ProductTable(props) {
    const rows = [];
    let lastCategory = null;

    props.products.forEach(
        (product) => {
            if (product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1) {
                return;
            }
            if (props.inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={product.category} />
                )
            }
            rows.push(
                <ProductRow name={product.name} price={product.price} stocked={product.stocked} />
            )
            lastCategory = product.category;
        }
    )

    return (
        <div className="table">
            <div style={{ fontSize: "28px" }}>Name Price</div>
            {rows}
        </div>
    )
}

export default ProductTable;