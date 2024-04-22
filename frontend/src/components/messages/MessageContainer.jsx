
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messagess from "./Messagess";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
	{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='px-4 py-2 mb-2  bg-blue-400 
           bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '>
						<span className='label-text text-white'>Send To:</span>{" "}
						<span className=' font-bold text-white'>{selectedConversation.fullName}</span>
					</div>
					<Messagess />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;



const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Thabiso ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
