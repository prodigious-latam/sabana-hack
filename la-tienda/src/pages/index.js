import * as React from 'react'
import { graphql } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'

import DefaultLayout from '../layouts/DefaultLayout'
import ProductList from '../components/ProductList'
// markup
const IndexPage = ({ data }) => {
  const { meta_titulo, meta_descripcion, meta_palabras_clave } =
    data.strapiPaginaPrincipal.metadatos
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta_titulo}</title>
        <meta name="description" content={meta_descripcion}></meta>
        <meta name="keywords" content={meta_palabras_clave}></meta>
      </Helmet>
      <DefaultLayout>
        <ProductList productList={data.allStrapiProductos.nodes}></ProductList>
      </DefaultLayout>
    </>
  )
}

export const query = graphql`
  {
    strapiPaginaPrincipal {
      metadatos {
        meta_titulo
        meta_palabras_clave
        meta_descripcion
      }
    }
    allStrapiProductos {
      nodes {
        nombre_producto
        id
        imagen_producto {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        descripcion_producto
      }
    }
  }
`

export default IndexPage
