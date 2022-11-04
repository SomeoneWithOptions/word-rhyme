
export const fetchRhymes = (word = 'none') =>
    fetch(`https://api.datamuse.com/words?rel_rhy=${word}&max=10`)
        .then((response) => response.json()
  );

