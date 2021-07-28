exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
    {
      allStrapiProductos {
        nodes {
          nombre_producto
          id
          imagen_producto {
            localFile {
              childImageSharp {
                fixed(height: 300, width: 1024) {
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
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  console.log(result);
  const products = result.data.allStrapiProductos.nodes;
  const ProductTemplate = require.resolve('./src/templates/Product.jsx');

  products.forEach((product, index) => {
    createPage({
      path: `/productos/${product.id}`,
      component: ProductTemplate,
      context: {
        ...product
      },
    });
  });
};