/**
 * Simulated chart data
 */
export default ({ fetchMock, delay, mock, toSuccess, toError }) => ({
  '/api/charts/bar1': options => toSuccess(
    mock([
      { year: '1951 year', "sales|1-100": 100 },
      { year: '1952 year', "sales|1-100": 100 },
      { year: '1956 year', "sales|1-100": 100 },
      { year: '1957 year', "sales|1-100": 100 },
      { year: '1958 year', "sales|1-100": 100 },
    ]),
    400
  ),
  '/api/charts/bar2': options => toSuccess(
    mock([
      { name:'London', 'Jan.|1-100': 1, 'Feb.|1-100': 1, 'Mar.|1-100' : 1, 'Apr.|1-100': 1, 'May.|1-100': 1, 'Jun.|1-100': 1, 'Jul.|1-100': 1, 'Aug.|1-100': 1 },
      { name:'Berlin', 'Jan.|1-100': 1, 'Feb.|1-100': 1, 'Mar.|1-100' : 1, 'Apr.|1-100': 1, 'May.|1-100': 1, 'Jun.|1-100': 1, 'Jul.|1-100': 1, 'Aug.|1-100': 1}
    ]),
    400
  )
});
