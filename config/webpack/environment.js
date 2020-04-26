const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const jquery = require('./plugins/jquery')
const html =  require('./loaders/html')
const scss =  require('./loaders/scss')

// Patch out standard loaders from angular app. Angular wants raw files
for (key of ['css', 'sass', 'moduleCss', 'moduleSass']) {
    const loader = environment.loaders.get(key);
    if (loader.exclude) {
        loader.exclude = [loader.exclude];
    } else {
        loader.exclude = []
    }
    loader.exclude.push(/\/cheltuieli\/app\//);
}

environment.plugins.prepend('jquery', jquery)
environment.loaders.prepend('typescript', typescript)
environment.loaders.append('html', html)
environment.loaders.append('scss', scss)
module.exports = environment
