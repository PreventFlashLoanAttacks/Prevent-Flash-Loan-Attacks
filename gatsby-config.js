module.exports = {
  siteMetadata: {
    title: `Prevent Flash Loan Attacks`,
    description: `dedicated to preventing flash loan attacks by sharing information and bringing to light all the rough things that have happened.`,
    keywords: `cryptocurrency, ethereum, ethereum defi, ethereum flash loans, decentralized finance flash loans, defi hacks, defi flash loans, flash loans cryptocurrency, blockchain hacks, prevent flash loans, chainlink, oracle hacks`,
    author: `PreventFlashLoanAttacks`,
  },
  pathPrefix: "/Prevent-Flash-Loan-Attacks",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/pfla-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400;600;700`],
        display: 'swap',
      },
    },
  ],
}
