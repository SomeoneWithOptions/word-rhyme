import { fetchRhymes } from "../API/fetchRhymes";
import { useRef, useState } from "react";
import Loading from "./Loading";

function Form() {
  const [APIWords, setAPIWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputWord, setInputWord] = useState("");

  const buttonInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchRhymes(inputWord).then((data) => {
      setAPIWords(data);
      setLoading(false);
      e.target.blur();
      buttonInput.current.focus();
    });
  };

  function handleRhymeWords(e) {
    e.preventDefault();
    setInputWord (e.target.innerText);
    fetchRhymes(e.target.innerText).then((data) => {
      setAPIWords(data);
    });
  }
  return (
    <>
      <form id="form" onSubmit={(e) => handleClick(e)}>
        <label htmlFor="wordInput">Your Word: </label>
        <input
          id="wordInput"
          type="text"
          onChange={(e) => setInputWord(e.target.value)}
          value={inputWord}
        />
        <button onClick={(e) => handleClick(e)} ref={buttonInput}>
          Get Rhymes
        </button>
      </form>
      <div className="words-container">
        {loading ? (
          <Loading />
        ) : (
          <ul>
            {APIWords.map((item) => {
              return (
                <li
                  key={item.word}
                  className="rhyme-words-effect"
                  onClick={(e) => handleRhymeWords(e)}
                >
                  {item.word}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default Form;
