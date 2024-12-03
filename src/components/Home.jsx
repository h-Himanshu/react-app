import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import exampleImage from "../assets/mapOfNepal.png";

const Home = () => {
  return (
    <>
    <div className="middle">
      
      <p>
        Nepal is a landlocked country in South Asia. It is located mainly in the
        Himalayas but also includes parts of the Indo-Gangetic Plain. With an
        estimated population of 26.4 million, it is the 48th largest country by
        population and 93rd largest country by area. It borders China in the
        north and India in the south, east, and west while Bangladesh is located
        within only 27 km (17 mi) of its southeastern tip and Bhutan is
        separated from it by the Indian state of Sikkim. Nepal has a diverse
        geography, including fertile plains, subalpine forested hills, and eight
        of the world’s ten tallest mountains, including Mount Everest, the
        highest point on Earth. Kathmandu is the nation’s capital and largest
        city. Nepal is a multiethnic nation with Nepali as the official
        language. Nepal includes different types of cultural heritage. Here we
        can observe the various types of flora and fauna due to the different
        types of climate zone are present. Nepal includes most of the climatic
        zone as present world consist even though it is a small country.

        </p>
        <br /><br />
      <img src={exampleImage}  alt="abc" height="40%" width="100%"  />
    </div>
    </>
  );
};

export default Home;
