const mode = process.env.NODE_ENV || "development";

//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _module = {
    rules: [
        // {
        //     test: /.css$/,
        //     exclude: /node_modules/,
        //     use: [
        //         MiniCssExtractPlugin.loader,
        //         "css-loader"
        //     ]
        // },
        // {
        //     test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        //     use: [
        //         {
        //             loader: 'file-loader',
        //             options: {
        //                 name: '[name].[ext]',
        //                 outputPath: 'fonts/'
        //             }
        //         }
        //     ]
        // },
        // {
        //     test: /\.svg$/,
        //     loader: 'svg-inline-loader?classPrefix'
        // }
    ]
};

const entry = {
    "index": [
        // "./src/stylesheets/general.css",
        // "./src/stylesheets/navigation/navigation.css",
        // "./src/stylesheets/navigation/navigation__container.css",
        // "./src/stylesheets/navigation/logo/logo.css",
        // "./src/stylesheets/navigation/logo/logo__link.css",
        // "./src/stylesheets/navigation/logo/logo__link__svg.css",
        // "./src/stylesheets/navigation/menu-hamburguer/menu-hamburguer.css",
        // "./src/stylesheets/navigation/menu-bar/menu-bar.css",
        // "./src/stylesheets/navigation/menu-bar/list/list.css",
        // "./src/stylesheets/navigation/menu-bar/list/list__item.css",
        // "./src/stylesheets/navigation/menu-bar/list/list__item__link.css",
        // "./src/stylesheets/principal/principal.css",
        // "./src/stylesheets/principal/presentation/presentation.css",
        // "./src/stylesheets/principal/presentation/presentation__title.css",
        // "./src/stylesheets/principal/presentation/presentation__text.css",
        // "./src/stylesheets/principal/presentation/presentation__link.css",
        // "./src/stylesheets/principal/image/image.css",
        // "./src/stylesheets/principal/image/image__svg.css",
        // "./src/stylesheets/section/section.css",
        // "./src/stylesheets/section/section__presentation.css",
        // "./src/stylesheets/section/section__presentation__title.css",
        // "./src/stylesheets/section/section__presentation__text.css",
        // "./src/stylesheets/principles__cards/principles__cards.css",
        // "./src/stylesheets/principles__cards/card/card.css",
        // "./src/stylesheets/principles__cards/card/card__image.css",
        // "./src/stylesheets/principles__cards/card/card__title.css",
        // "./src/stylesheets/principles__cards/card/card__text.css",
        // "./src/stylesheets/ethical-commitment/ethical-commitment.css",
        // "./src/stylesheets/ethical-commitment/ethical-commitment__title.css",
        // "./src/stylesheets/ethical-commitment/ethical-commitment__text.css",
        // "./src/stylesheets/what-we-do/trail-card/trail-card.css",
        // "./src/stylesheets/what-we-do/trail-card/trail-card__image.css",
        // "./src/stylesheets/what-we-do/trail-card/trail-card__title.css",
        // "./src/stylesheets/what-we-do/trail-card/trail-card__text.css",
        // "./src/stylesheets/what-we-do/trail-card/trail-card__button.css",
        // "./src/stylesheets/our-clients/our-clients.css",
        // "./src/stylesheets/our-clients/card__companies/card__companies.css",
        // "./src/stylesheets/our-clients/card__companies/card__companies__figcaption.css",
        // "./src/stylesheets/our-clients/card__companies/card__companies__title.css",
        // "./src/stylesheets/our-clients/card__companies/card__companies__image.css",
        // "./src/stylesheets/footer-container/footer-container.css",
        // "./src/stylesheets/footer-container/social-medias/social-medias.css",
        // "./src/stylesheets/footer-container/social-medias/social-medias__list.css",
        // "./src/stylesheets/footer-container/social-medias/social-medias__links.css",
        // "./src/stylesheets/footer-container/social-medias/social-medias__links__svg.css",
        // "./src/stylesheets/footer-container/footer-container__copyright.css",
        // "./src/stylesheets/footer-container/footer-container__copyright__container.css",
        // "./src/stylesheets/footer-container/footer-container__copyright__title.css",
        // "./src/stylesheets/footer-container/footer-container__copyright__text.css",
        // "./src/stylesheets/accessibility-bar/accessibility-bar.css",
        // "./src/stylesheets/accessibility-bar/accessibility-bar__button.css",
        // "./src/stylesheets/accessibility-bar/accessibility-bar__button__image.css",
        "./src/javascripts/menu-hamburguer.js",
        "./src/javascripts/menu-control.js",
        "./src/javascripts/minify-texts.js",
        "./src/javascripts/fancy-scroll.js",
        "./src/javascripts/accessibility.js"
    ]
};

const output = {
    filename: "[name].bundle.js",
    path: __dirname
};

// const plugins = [
//     new MiniCssExtractPlugin({
//         filename: "[name].bundle.css"
//     })
// ];

module.exports = {
    entry,
    mode,
    //module: _module,
    plugins,
    output
};