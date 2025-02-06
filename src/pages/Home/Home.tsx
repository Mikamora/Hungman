import { useNavigate } from 'react-router-dom';
import logo from '../../assets/cat.webp';
import { Wrapper, BananaCatImg, Title, Info, FlavorText, StartMenu, HomeButtons } from './styles';

const Home = () => {
  const navigate = useNavigate();
  const date = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <Wrapper>
      <BananaCatImg src={logo} alt='big muscle banana cat' />
      <Title>HUNGMAN</Title>
      <Info>
        <FlavorText>Figure out the hidden word<br />
          Guess one letter at a time<br />
          DON'T HANG THE MAN
        </FlavorText>
      </Info>
      <StartMenu>
        <HomeButtons onClick={() => navigate("/game")}>Play</HomeButtons>
        <HomeButtons>Settings</HomeButtons>
      </StartMenu>
      <FlavorText>{date}</FlavorText>
    </Wrapper>
  );
}

export default Home;
