import React from "react";
import { Link } from "react-router-dom";

const FilterTag = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterTag"
        aria-expanded="true"
        aria-controls="filterTag"
      >
     Item Tags
      </div>
      <div className="card-body show" id="filterTag">
        <Link to="/" className="btn btn-sm btn-outline-info me-2 mb-2">
         Table 
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-secondary me-2 mb-2">
           sofa Chair
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-success me-2 mb-2">
          Furniture
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-secondary me-2 mb-2">
          HD camera
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-dark me-2 mb-2">
          Camera
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-primary me-2 mb-2">
          photoes
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-warning me-2 mb-2">
          videographer
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-secondary me-2 mb-2">
           graduation  cown
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-success me-2 mb-2">
          birthday
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-dark me-2 mb-2">
          wedding
        </Link>
      </div>
    </div>
  );
};

export default FilterTag;
