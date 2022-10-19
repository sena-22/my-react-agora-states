import React from "react";
import "./Discussion.css";
const Discussion = ({ discussion }) => {
  return (
    <>
      <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={discussion.avatarUrl}
            alt="avatar of kimploo"
          />
        </div>

        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href={discussion.url}>{discussion.title}</a>
          </h2>
          <div className="discussion__information">
            {discussion.author} / {discussion.createdAt}
          </div>
        </div>
        <div className="discussion__answered">
          <p>☑️</p>
        </div>
      </li>
    </>
  );
};
export default Discussion;
