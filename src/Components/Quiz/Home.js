import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
      <div className="text-center">
        <Link
          to="/play/instructions"
          className="btn btn-success text-light btn-lg btn-block"
        >
          Play
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
