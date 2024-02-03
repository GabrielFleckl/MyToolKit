import { useState, useRef, useEffect } from "react";

function CaseConverter() {
  const textAreaRef = useRef<null>(null);

  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [wordValue, setWordValue] = useState<number>(0);
  const [letterValue, setLetterValue] = useState<number>(0);

  const handleUpperCaseClick = () => {
    const upperCaseText = textAreaValue.toUpperCase();
    setTextAreaValue(upperCaseText);
  };

  const handleLowerCaseClick = () => {
    const upperCaseText = textAreaValue.toLowerCase();
    setTextAreaValue(upperCaseText);
  };

  const handleTitleCaseClick = () => {
    const string = textAreaValue;
    const stringLower = string.toLowerCase();
    function capitalizeWords(text: string) {
      let words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      let capitalizedText = words.join(" ");
      return capitalizedText;
    }
    const titleCase = capitalizeWords(stringLower);
    setTextAreaValue(titleCase);
  };

  const handleClearTextAreaClick = () => {
    setTextAreaValue("");
  };

  const handleCopyTextAreaClick = () => {
    navigator.clipboard.writeText(textAreaValue);
    setIsCopied(true);

    setTextAreaValue("");

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const wordValue = textAreaValue.trim().split(/\s+/).length;
    setWordValue(wordValue);

    const letterValue = textAreaValue.trim().length;
    setLetterValue(letterValue);
  }, [textAreaValue]);

  return (
    <section className="flex flex-col gap-4 justify-center md:h-[70vh] h-[80vh] items-center w-full">
      <div className="flex flex-wrap w-80 gap-2 md:w-full md:gap-2 justify-center items-center">
        <button
          onClick={handleUpperCaseClick}
          className="btn active:bg-primary hover:bg-base-300"
        >
          Uppercase
        </button>
        <button
          onClick={handleLowerCaseClick}
          className="btn active:bg-primary hover:bg-base-300"
        >
          Lowercase
        </button>
        <button
          onClick={handleTitleCaseClick}
          className="btn active:bg-primary hover:bg-base-300"
        >
          Title Case
        </button>
        <button
          onClick={handleClearTextAreaClick}
          className="btn active:bg-primary hover:bg-base-300"
        >
          Clear
        </button>
        <button
          onClick={handleCopyTextAreaClick}
          className="btn active:bg-primary hover:bg-base-300"
        >
          Copy
        </button>
      </div>
      <textarea
        placeholder="Write or paste your text here!"
        className="textarea-lg bg-base-200 w-full md:w-3/4 resize-none rounded-md pb-80 textarea-primary"
        onChange={(e) => setTextAreaValue(e.target.value)}
        value={textAreaValue}
        ref={textAreaRef}
      ></textarea>
      <div className="flex flex-col md:flex-row md:gap-4 text-center ">
        <div className="text-sm">
          <p>
          Word Count:{" "}
            <span> {wordValue === 1 ? "0" : wordValue} </span>
          </p>
        </div>
        <div className="text-sm">
          <p>
          Letter Count: <span> {letterValue} </span>
          </p>
        </div>
      </div>

      <div
        role="alert"
        className={`alert alert-success absolute w-60 top-5 md:w-96 md:right-2 md:top-5 pointer-events-none ${
          isCopied
            ? "opacity-100 transition-all duration-300 z-10"
            : "opacity-0 transition-all duration-300"
        } `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Text Copied Successfully!</span>
      </div>
    </section>
  );
}

export default CaseConverter;
