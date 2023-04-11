module.exports = (data, query) => {
  let filteredResults = data;
  Object.entries(query).forEach(([queryKey, queryValue]) => {
    const querySegments = queryKey.split(".");
    filteredResults = filteredResults.filter((result) => {
      let queryLookup = result;
      for (const segment of querySegments) {
        if (!queryLookup) {
          break;
        }
        queryLookup = queryLookup[segment];
      }
      return queryLookup === queryValue;
    });
  });
  return filteredResults;
};
