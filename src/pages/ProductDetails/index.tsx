import React from 'react';
import { Drawer } from '@mui/material';
import { Button, Col, Row, Section } from 'styles/global';
import { Close } from '@styled-icons/ionicons-outline';
import { ProductDetailsProps } from './types';
import Reviews from './Reviews';

const ProductDetails = (props: ProductDetailsProps) => {
  const { open, onclose, product, handleAddToCart } = props;

  return (
    <Drawer anchor="left" open={open} onClose={onclose}>
      <Section smPadding="10px 10px" position="relative" inverse id="about" width="610px">
        <Row style={{ paddingLeft: '0px', textAlign: 'center' }}>
          <Col></Col>
          <Col style={{ alignItems: 'center' }}>
            <h3 style={{ textAlign: 'center' }}>
              <b>Product Details</b>
            </h3>
          </Col>
          <Col></Col>
          <Col style={{ marginLeft: '20px', alignItems: 'self-end' }}>
            <Close onClick={onclose} style={{ width: '22px', height: '22px', cursor: 'pointer' }} />
          </Col>
        </Row>
        {/* <hr style={{ border: '1px solid #E9E9E9' }} /> */}
        <Row style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={product.image} alt={product.name}></img>
        </Row>
        <br />
        <br />
        <br />
        <Row>
            <Col style={{ alignItems: 'center' }}>
                <h3>
                <b>Quantity: {product.weight}</b>
                </h3>
          </Col>
        </Row>
        <Row><b> <h3>This nutritious tea is made from a Camellia Sinensis variety that is filled with antioxidants, anthocyanins, and polyphenols properties.</h3></b></Row>
        <Row>
            <Col style={{ alignItems: 'center' }}>
                <h3>
                <b>Benefits</b>
                </h3>
          </Col>
        </Row>
        <Row><b> <h3>Purple tea aren’t just limited to weight loss or antioxidants. People with several health  concerns including skin aging, scalp health, 
            eyesight, hair loss, weight loss, inflammation, cardiovascular health, diabetes, and more can gain benefits from this product.</h3></b></Row>
      </Section>

      <Row>
            <Col style={{ alignItems: 'center' }}>
                <h3>
                <b>Price: {product.curPrice}</b>
                </h3>
          </Col>
        </Row><br />

        <Button onClick={() => handleAddToCart(product)} color='black' style={{ paddingBottom: '5%' }}> Add To Cart </Button>

        <Reviews />
    </Drawer>
  );
};

export default ProductDetails;
