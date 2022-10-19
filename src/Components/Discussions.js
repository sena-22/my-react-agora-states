import React, { useEffect, useState } from "react";
import Discussion from "../Components/Discussion";
import Pagination from "./Pagination";
import "./Discussions.css";
const Discussions = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const newTitle = (event) => {
    setTitle(event.target.value);
  };
  const newAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const newContent = (event) => {
    setContent(event.target.value);
  };

  const parsedDate = new Date().toLocaleDateString("ko-kr");
  const parsedDate2 = new Date().toLocaleDateString("ko-kr");

  const submitButtonClick = (event) => {
    event.preventDefault();
    const discussion = {
      answer: null,
      id: data.length + 1,
      createdAt: parsedDate, //new Date() => Object...
      updatedAt: parsedDate2,
      title: title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/44",
      author: author,
      bodyHTML: content,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4",
    };
    const newDiscussion = [discussion, ...data];
    setData(newDiscussion);
  };

  /* Paginaion*/
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (data) => {
    let currentPosts = 0;
    currentPosts = data.slice(indexOfFirst, indexOfLast).map((discussion) => {
      return (
        <li>
          <Discussion discussion={discussion} key={discussion.id} />
        </li>
      );
    });
    return currentPosts;
  };

  return (
    <>
      <div className="container">
        <section className="form__container">
          <form
            action=""
            method="get"
            className="form"
            onSubmit={submitButtonClick}
          >
            <div className="form__input--wrapper">
              <div className="form__input--name">
                <label htmlFor="name" className="InputName">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="username"
                  className="InputName"
                  autoComplete="off"
                  onChange={newAuthor}
                  value={author}
                  required
                />
              </div>
              <div className="form__input--title">
                <label htmlFor="name" className="neonText">
                  Title:
                </label>
                <input
                  type="text"
                  name="name"
                  id="title"
                  autoComplete="off"
                  required
                  onChange={newTitle}
                  value={title}
                />
              </div>
              <div className="form__textbox">
                <label htmlFor="story" className="neonText">
                  Your question:
                </label>
                <textarea
                  id="story"
                  name="story"
                  placeholder="질문을 작성하세요"
                  autoComplete="off"
                  required
                  onChange={newContent}
                  value={content}
                ></textarea>
              </div>
            </div>
            <div className="form__submit">
              <input type="submit" id="submit" className="neons" />
            </div>
          </form>
        </section>
        <section className="discussion__wrapper"></section>
        <section>
          <ul>{currentPosts(data)}</ul>
        </section>
      </div>
      <div className="pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={setCurrentPage}
        ></Pagination>
      </div>
    </>
  );
};
export default Discussions;
