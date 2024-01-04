import styled from 'styled-components';
import './App.css';
import { FaPaperPlane } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";

const MainWrapper = styled.div`
  color: primary700;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4f74;
  border-radius: 3px;
  display: flex;
  justify-content: center;
`;

function App() {

  const notify = () => toast("Welcome to TravelVerse");

  const sweetAlert = () =>swal("Good job!", "Your tour has been booked!", "success");

  return (
    <>
      <MainWrapper>
      <p className="text-3xl font-bold underline">
      Welcome to TravelVerse
    </p>
    <FaPaperPlane className="text-3xl" />
    </MainWrapper>
    <div className='flex justify-center gap-10'>
      <button onClick={notify} className='bg-red-800 px-5 py-3 text-white font-bold'>Let's Travel</button>
      <button onClick={sweetAlert} className='bg-yellow-800 px-5 py-3 text-white font-bold'>Book Now</button>
    </div>
    <ToastContainer />
    </>
  );
}

export default App;
