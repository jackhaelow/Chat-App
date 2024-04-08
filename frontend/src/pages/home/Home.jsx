import MessageContainer from "../../components/messages/MessageContainer"
import Slidebar from "../../components/sidebar/Slidebar"


const Home = () => {
  return  <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden h-full  bg-blue-400 
   bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <Slidebar/>
    <MessageContainer/>
  </div>
  
}

export default Home