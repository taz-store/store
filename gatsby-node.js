
exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
      data: {
        gcms: { products },
      },
    } = await graphql(`
      {
        gcms {
          products(stage: PUBLISHED) {
            id
            slug
          }
        }
      }
    `);
  
    products.forEach(({ id, slug }) =>
      createPage({
        path: `/products/${slug}`,
        component: require.resolve(`./src/templates/product-item.js`),
        context: {
          id,
        },
      })
    );
  };

// const path = require('path')

// exports.createPages =({actions, graphql}) => {
//     const { createPage } = actions

//     const postTemplate = path.resolve('src/templates/product-item.js');

//     return graphql(`
//         {
//             allMarkdownRemark {
//                 edges {
//                   node {
//                     html
//                     id
//                     frontmatter {
//                       path
//                       title
//                       date
//                       author
//                     }
//                   }
//                 }
//               }
//         }
//     `).then(res => {
//         if(res.errors){
//             return Promise.reject(res.errors)
//         }

//         res.data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
//                 path: node.frontmatter.path,
//                 component: postTemplate
//             })
//         })
//     })
// }