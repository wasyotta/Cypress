const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQwOTk3NTlhLWMyY2MtNGIwYy1hY2VjLWU2NDg0ZTFlM2M5MC0xNjc4NDk5NTc0NzMzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNTA5NzFjNzktODA2ZS00NTcxLWI4NjktMGQ5YTBkZjhhMzVmIiwidHlwZSI6InQifQ.QV_jWiQJpypa2Gep3nfLLqQJZ1OSe4aNS1mW4ldWfgg'


cypress.run({
  //specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
