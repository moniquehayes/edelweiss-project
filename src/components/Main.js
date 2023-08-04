import React from "react";
import catalogData from "../catalog-data";
import { Card } from "react-bootstrap";

const Main = () => {
  const products = catalogData.products;

  return (
    <div>
      <div style={{ textAlign: "center", margin: "4vh 0" }}>
        <h1 style={{ color: "#73956F" }}>Edelwiess Catalog Viewer</h1>
        <p style={{ color: "#57595F" }}>Browse our collection below!</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => {
          const jacketCov = product.images
            ? product.images["0"]["uri"]
            : "https://img.freepik.com/free-vector/vector-blank-book-cover-isolated-white_1284-41904.jpg?w=2000";

          return (
            <Card
              key={product.fullName + product.sku}
              style={{
                width: "25vw",
                margin: "2vh 3vw",
                border: "1px solid #57595F",
                padding: "3px",
                position: "relative",
              }}
            >
              <Card.Img src={jacketCov} />
              <Card.Body>
                <Card.Title style={{ color: "#73956F" }}>
                  {product.name ? product.name : "Title Unknown"}
                </Card.Title>
                <Card.Text style={{ color: "#EDA63B" }}>
                  By: {product.author ? product.author : "Author Unknown"}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
