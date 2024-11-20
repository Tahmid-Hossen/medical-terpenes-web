"use client"

import {Row, Col} from "react-bootstrap";
import clsx from "clsx";
import {setActiveLayout} from "@/lib/product";
import {IoIosSearch} from "react-icons/io";
import {RiArrowDropDownFill} from "react-icons/ri";

const ShopHeader = ({getFilterSortParams, getFilterSortValue, layoutClass,}) => {
  return (
    <div className="shop-header-area">
      <Row className={clsx("align-items-center mb-4 pb-1", layoutClass)}>
        <Col>
          <div className="shop-header">
            <div className="shop-header__left">
              <select
                className="form-control form-control-sm"
                onChange={(e) =>
                  getFilterSortParams("filterSort", e.target.value)
                }
              >
                <option value="default">Default</option>
                <option value="priceHighToLow">Price - High to Low</option>
                <option value="priceLowToHigh">Price - Low to High</option>
              </select>
              <RiArrowDropDownFill/>
            </div>
            <div className="shop-header__center search-form">
              <input type="text" placeholder="Search Products..." className="form-control form-control-sm"
                     onChange={(e) => getFilterSortValue("product", e.target.value)}/>
              <button type="button" onClick={(e) => getFilterSortValue("product", e.target.value)}
                      className="btn icon-search">
                <IoIosSearch/>
              </button>
            </div>
            {/* <div className="shop-header__right">
              <div className="products-view">
                <button
                  className={`sorting-icon grid ${
                    layout === "grid" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    getLayout("grid");
                    setActiveLayout(e);
                  }}
                >
                  <MdApps />
                </button>
                <button
                  className={`sorting-icon list  ${
                    layout === "list" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    getLayout("list");
                    setActiveLayout(e);
                  }}
                >
                  <MdList />
                </button>
              </div>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShopHeader;
