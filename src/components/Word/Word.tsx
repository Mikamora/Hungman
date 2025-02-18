import Letter from "./Letter/Letter";
import { WordContainer } from "./styles";

interface WordInterface {
    word: string;
    lettersGuessed: string[];
}

const Word = ({ word, lettersGuessed } : WordInterface) => {
  return (
    <WordContainer>
        {word.split("").map((char, index) => (
            <Letter key={`${char}-${index}`} word={word} letter={char} lettersGuessed={lettersGuessed}/>
        ))}
    </WordContainer>
  )
};

export default Word;
