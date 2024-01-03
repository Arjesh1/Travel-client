import styled from 'styled-components';
import './App.css';

const MainWrapper = styled.div`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

function App() {
  return (
    <MainWrapper>
      <p className="text-3xl font-bold underline ">
      Welcome to TravelVerse
    </p>
    </MainWrapper>
  );
}

export default App;
