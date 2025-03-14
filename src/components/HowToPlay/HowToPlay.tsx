import { Wrapper, Point } from "./styles.ts";

const HowToPlay = () => {
  return (
    <Wrapper>
      <Point>
        <p>
          <span>1. Pick a word: </span>
          And random word will be chosen and a blank will appear for each
          letter.
        </p>
      </Point>
      <Point>
        <p>
          <span>2. Guess letters: </span>
          Start guessing letters. If the letter is in the word, it's filled in
          the blanks. If it's not, a part of a stick figure is drawn.
        </p>
      </Point>
      <Point>
        <p>
          <span>3. Avoid hanging: </span>
          If the stick figure is fully drawn (rope, head, body, arms, legs), the
          game is over, and you lose.
        </p>
      </Point>
      <Point>
        <p>
          <span>4. Win: </span>
          If you guess the word before the figure is fully drawn, you win!
        </p>
      </Point>
    </Wrapper>
  );
};

export default HowToPlay;
