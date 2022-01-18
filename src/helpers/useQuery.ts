/**
 * Get URL query parameters
 *
 * @document https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 */
const useQuery = () => {
  return new URLSearchParams(window.location.search.toLowerCase());
};

export default useQuery;
