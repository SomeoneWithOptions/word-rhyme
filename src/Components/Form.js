import { fetchRhymes } from "../API/fetchRhymes";
import { useRef, useState } from "react";
import Loading from "./Loading";

function Form() {
  const [APIWords, setAPIWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const wordInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchRhymes(wordInput.current.value).then((data) => {
      setAPIWords(data);
      setLoading(false);
      e.target.blur();
    });
  };


 function handleRhymeWords(e){ 
   e.preventDefault();
   wordInput.current.value = e.target.innerText;
   fetchRhymes(wordInput.current.value).then((data) => {
    setAPIWords(data);
    setLoading(false);
   });
   
  }
  return (
    <>
      <form id="form" onSubmit={e => handleClick(e)}>
        <label htmlFor="wordInput">Your Word: </label>
        <input ref={wordInput} id="wordInput" type="text" />
        <button onClick={(e) => handleClick(e)}>Get Rhymes</button>
      </form>
      <div className="words-container">
        {loading ? (
          <Loading />
        ) : (
          <ul>
              {APIWords.map((item) => {
                return <li key={item.word} className="rhyme-words-effect" onClick={e => handleRhymeWords(e)}>
                  {item.word}
                </li>
              }
            )}
          
          </ul>
        )}
      </div>
    </>
  );
}

export default Form;
