import { fetchRhymes } from "../API/fetchRhymes";
import { useRef, useState } from "react";
import Loading from "./Loading";

function Form() {
  const [APIWords, setAPIWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const wordInput = useRef(null);
  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    fetchRhymes(wordInput.current.value).then((data) => {
      setAPIWords(data);
      setLoading(false);
    });
  };

  return (
    <>
      <div id="form">
        <label htmlFor="wordInput">Your Word: </label>
        <input ref={wordInput} id="wordInput" type="text" />
        <button onClick={(e) => handleClick(e)}>Get Rhymes</button>
      </div>
          <div className="words-container">{loading ? <Loading /> : <ul>
              {APIWords.map((word) => (
                  <li key={word.word}>{word.word}</li>
                ))}
          </ul>}</div>
    </>
  );
}

export default Form;
