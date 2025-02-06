import Letter from "./Letter/Letter";
import { WordContainer } from "./styles";

interface WordInterface {
    word: string;
}

const Word = ({ word } : WordInterface) => {
  return (
    <WordContainer>
        {word.split("").map((char) => (
            <Letter letter={char} />
        ))}
    </WordContainer>
  )
};

export default Word;
