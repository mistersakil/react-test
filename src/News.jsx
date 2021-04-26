import React from "react";
import { NavLink } from "react-router-dom";
const News = (props) => {
  return (
    <>
      <h2>Welcome to {props.title} Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae sed
        consectetur, eligendi aperiam nam corporis officia molestiae rem
        aliquam, asperiores debitis reiciendis maiores mollitia? Earum possimus
        sed saepe molestiae?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        laudantium temporibus cumque, nisi optio ipsa itaque, similique
        distinctio pariatur recusandae quae magni neque sequi consectetur iusto
        quisquam dolores voluptatum nobis?
      </p>
      <ul>
        <li>
          <NavLink activeClassName="active_link" to="/news/00000001">
            News one
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_link" to="/news/00000002">
            News Two
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_link" to="/news/00000003">
            News Three
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_link" to="/news/00000004">
            News Four
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default News;
