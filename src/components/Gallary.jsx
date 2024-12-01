import React, { useEffect, useState } from "react";

// Dynamically import images using Vite's import.meta.glob
const imagePaths = import.meta.glob("../assets/images/*.{jpg,webp}");

const Gallary = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    // Load images dynamically and map them to the image names
    const loadImages = async () => {
      const imagesObj = {};
      for (const path in imagePaths) {
        // Extract the image name (without the .jpg extension)
        const imageName = path
          .split("/")
          .pop()
          .replace(/\.(jpg|webp)$/, "");

        // Dynamically import the image and store it in the imagesObj
        imagesObj[imageName] = (await imagePaths[path]()).default;
      }

      // Store the images object in the state
      setImages(imagesObj);
    };

    loadImages();
  }, []); // Empty dependency array ensures this only runs once when the component mounts


  if (Object.keys(images).length === 0) {
    return <div>Loading...</div>;
  }

  const capitalize = (str) => {
    if (!str) return ""; // Handle empty or undefined strings
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div className="image-container">
        {Object.keys(images).map((key) => (
          <div key={key} style={{ margin: "10px", textAlign: "center" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
              href={images[key]}
            >
              <div className="image">
                <img
                  src={images[key]}
                  alt={key}
                  style={{ width: "200px", height: "auto", objectFit: "cover" }}
                />
              </div>
            </a>
            <h3>{capitalize(key)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
