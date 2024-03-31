import React from "react";
import Image from "../assets/no-Img.jpg";

const NewsCard = ({ author, title, content, description, img, url }) => {
  return (
    <div
      className=" col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 mb-3 mx-auto mx-md-0 "
      data-bs-theme="dark"
      style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <div className="card  bg-info-subtle text-white">
        <img
          src={img ? img : Image}
          className="card-img-top"
          alt="..."
          style={{ height: "220px" }}
        />
        <div className="card-body">
          <h5
            className="card-title fw-bold"
            style={{ paddingBottom: "7px", textAlign: "justify" }}
          >
            {" "}
            {title}
          </h5>
          <p className="card-text">
            {description ? description.slice(0, 50) : "no description"}
          </p>
          <p className="card-text">
            {content ? content.slice(0, 50) : "No content"}{" "}
          </p>
          <p>
            Author:
            <span>
              <strong> {author ? author : "Sources"}</strong>
            </span>
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
