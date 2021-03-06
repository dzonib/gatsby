module.exports = {
    siteMetadata: {
        title: 'Gatsby Blog!',
        author: 'Dzonib',
    },
    plugins: [
        'gatsby-plugin-sass', 
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ],
}
