const initialState = {
  searchQuery: '',
  startDate: '2016-03-01',
  endDate: '2016-04-01',
};

export default function search(state = initialState) {
  /**
   * Turns a YYYY-MM-DD date string into a URL-ready D-M-Y snippet.
   *
   * @param {string} piece
   * @returns {string}
   */
  const prepareDatePiece = piece =>
    piece.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$3%2F$2%2F$1');

  const url = `https://www.google.com/search?q=${encodeURIComponent(state.searchQuery)}&tbs=cdr%3A1%2Ccd_min%3A${prepareDatePiece(state.startDate)}%2Ccd_max%3A${prepareDatePiece(state.endDate)}`;

  return {
    ...state,
    url,
  };
}
