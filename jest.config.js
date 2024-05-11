/** @type {import('jest').Config} */
const config = {
    verbose: true,
    transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$|pdfjs-dist))'],
  };
  
  module.exports = config;