import React from 'react'

import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from 'reactstrap'

export default function ProductList({ productList }) {
  return (
    <Row>
    {productList.map((product) => (
      <Col xs="12" lg="6" className="mb-3" key={product.id}>
        <Card>
          <CardImg
            top
            width="100%"
            src={product.imagen_producto.localFile.childImageSharp.fluid.src}
            alt={product.nombre_producto}
          />
          <CardBody>
            <CardTitle tag="h5">{product.nombre_producto}</CardTitle>
            <CardText>{product.descripcion_producto}</CardText>
            <CardLink href={`/productos/${product.id}`}>Ver detalles</CardLink>
          </CardBody>
        </Card>
      </Col>
    ))}
  </Row>
  )
}
