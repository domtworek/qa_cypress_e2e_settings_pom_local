let isProduction;
if (process.env.NODE_ENV_OVERRIDE === undefined) {
  isProduction = process.env.NODE_ENV === 'production'
} else {
  isProduction = process.env.NODE_ENV_OVERRIDE === 'production'
}
module.exports = {
  apiPath: '/api',
  databaseUrl: process.env.DATABASE_URL || '',
  isProduction: isProduction,
  isProductionNext: process.env.NODE_ENV_NEXT === undefined ?
    (isProduction) :
    (process.env.NODE_ENV_NEXT === 'production'),
  port: process.env.PORT || 3000,
  // Makes deployment impossibly slow if there are lots of pages
  // like in a real-world production public website.
  prerenderAll: false,
  revalidate: 10,
  secret: isProduction ? process.env.SECRET : 'secret',
  verbose: process.env.VERBOSE,
}
