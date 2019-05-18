module.exports = require('./**/*.riot', {mode: 'list'}).concat(
    require('../components/**/*.riot', {mode: 'list'})
)
