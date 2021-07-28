import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { Helmet } from 'react-helmet'
import {
  BreadcrumbItem,
  Breadcrumb,
  Jumbotron,
  Button,
} from 'reactstrap'

export default function Product({ pageContext }) {
  return (
    <>
      <Helmet>
        <title>{`La Tienda -  ${pageContext.nombre_producto} `}</title>
      </Helmet>
      <DefaultLayout>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Inicio</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>{pageContext.nombre_producto}</BreadcrumbItem>
        </Breadcrumb>
        <img
          className="mb-3"
          width="100%"
          src={pageContext.imagen_producto.localFile.childImageSharp.fixed.src}
          alt={pageContext.nombre_producto}
        />
        <Jumbotron className="mb-5">
          <h1 className="display-3">{pageContext.nombre_producto}</h1>
          <p className="lead">{pageContext.descripcion_producto}</p>
          <hr className="my-2" />
          <p className="lead">
            <Button color="primary">Comprar</Button>
          </p>
        </Jumbotron>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          omnis magni rerum iste, cupiditate consequuntur sequi, est odio,
          similique soluta sed neque ducimus obcaecati explicabo facere
          excepturi molestias non reiciendis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          omnis magni rerum iste, cupiditate consequuntur sequi, est odio,
          similique soluta sed neque ducimus obcaecati explicabo facere
          excepturi molestias non reiciendis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          omnis magni rerum iste, cupiditate consequuntur sequi, est odio,
          similique soluta sed neque ducimus obcaecati explicabo facere
          excepturi molestias non reiciendis.
        </p>
      </DefaultLayout>
    </>
  )
}
