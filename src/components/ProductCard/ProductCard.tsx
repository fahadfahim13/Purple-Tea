import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import { Product, ProductSectionProps } from "./types";
import { Button, Row, Col } from "styles/global";
import img1 from "media/images/info.png";
import img2 from "media/images/crt.png";
import { FaCartPlus } from "react-icons/fa";
import {
  ProductColumn,
  SaleButton,
  ProdImgWrapper,
  ProdImage,
  ProdImageColumn,
  CategoryTitle,
  ProductTitle,
} from "./ProductCardStyles";

const ProductCard = (product: ProductSectionProps) => {
  const {
    id,
    name,
    rating,
    onRatingChange,
    type,
    curPrice,
    prevPrice = curPrice,
    onSale = false,
    image,
    isFavorite = false,
    onFavoriteChange = () => {},
    handleAddtoCart,
    onProductSelect
  } = product;


  return (
    <ProductColumn key={id}>
      {/* Product on sale button & Add to Favorite Button. */}
      <Row  onClick={() => onProductSelect(product as Product)}>
        <Col style={{ alignItems: "self-start" }}>
          {onSale && <SaleButton>Sale</SaleButton>}
        </Col>
        <Col></Col>
        <Col></Col>
        <Col style={{ alignItems: "self-end", cursor: "pointer" }}>
          {isFavorite ? (
            <FavoriteIcon onClick={() => onFavoriteChange(id)} />
          ) : (
            <FavoriteBorderIcon onClick={() => onFavoriteChange(id)} />
          )}
        </Col>
      </Row>

      {/* Product Image poriton. */}
      <ProdImageColumn  onClick={() => onProductSelect(product as Product)}>
        <ProdImgWrapper>
          <ProdImage src={image} />
        </ProdImgWrapper>
      </ProdImageColumn>

      {/* Product Details */}

      <Row  onClick={() => onProductSelect(product as Product)}>
        <CategoryTitle style={{ marginBottom: "0px" }}> {type} </CategoryTitle>
      </Row>
      <Row onClick={() => onProductSelect(product as Product)}>
        <ProductTitle style={{ marginBottom: "0px" }}> {name} </ProductTitle>
      </Row>

      <Row>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue: number | null) =>
            onRatingChange(id, newValue ?? 0)
          }
        />
      </Row>

      {/* Add to cart button */}
      <br />

      <div color="black">
        <Row>
          <Col style={{ alignItems: "self-start" }}>
            <Row>
              <Col onClick={() => onProductSelect(product as Product)} style={{ cursor: "pointer" }}>
                <img src={img1}></img>
              </Col>
              <Col></Col>
              <Col
                onClick={() => handleAddtoCart(product)}
                style={{ cursor: "pointer" }}
              >
                <img src={img2}></img>
              </Col>
            </Row>
          </Col>
          <Col style={{ alignItems: "self-end", paddingTop: "2.5%" }}>
            ৳ {curPrice.toFixed(2)}
          </Col>
        </Row>
      </div>
    </ProductColumn>
  );
};

export default ProductCard;
