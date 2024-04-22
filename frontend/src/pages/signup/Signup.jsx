import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignUp from "../../hooks/useSignUp";





const SignUp = () => {
      const [inputs,setInputs] = useState({
            fullName:"",
            username:"",
            password:"",
            confirmPassword:"",
            gender:"",
      });

     const {loading,signup}=useSignUp();
   
      const handleCheckboxChange =(gender) =>{
          setInputs({...inputs,gender});
      }
      
      const handleSubmit = async (e)=>{
            e.preventDefault();
            
          await signup(inputs);
      }

  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl front-semibold text-center text-gray-300">
             Sign Up
            <span className="front-bold text-green-500 text-5xl ">   ChatHub</span>
          </h1>
         
         <form onSubmit={handleSubmit}>

              <div>
              <label className="label p-2">
                      <span className=" label-text text-gray-300 text-2xl ">Full Name</span>
                </label>
                 <input
                 value={inputs.fullName}
                 onChange={(e) => setInputs({...inputs,fullName:e.target.value})}
                  type="text"
                 placeholder="Enter your full name"
                 className="w-full input-bordered input-accent  h-10 "
                 />
              </div>

              <div>
              <label className="label p-2">
                      <span className=" label-text text-gray-300 text-2xl ">Username</span>
                </label>
                 <input
                 value={inputs.username}
                 onChange={(e) => setInputs({...inputs,username:e.target.value})}
                  type="text"
                 placeholder="Enter your username"
                 className="w-full input-bordered input-accent  h-10 "
                 />
              </div>

              <div>
              <label className="label p-2">
                      <span className=" label-text text-gray-300 text-2xl ">Password</span>
                </label>
                 <input
                 value={inputs.password}
                 onChange={(e) => setInputs({...inputs,password:e.target.value})}
                  type="password"
                 placeholder="Enter your password"
                 className="w-full input-bordered input-accent  h-10 "
                 />
              </div>

              <div>
              <label className="label p-2">
                      <span className=" label-text text-gray-300 text-2xl ">Confirm Password</span>
                </label>
                 <input
                 value={inputs.confirmPassword}
                 onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
                  type="password"
                 placeholder="Confirm your password"
                 className="w-full input-bordered input-accent  h-10 "
                 />
              </div>

             <GenderCheckBox
             onCheckboxChange={handleCheckboxChange} 
             selectedGender={inputs.gender}
             />
         
             <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-blocked  text-gray-50">
                Already have an account?
             </Link>
             
        <div>
          <button className="btn btn-primary btn-block btn-sm mt-2"
          disabled={loading}
          >
            {loading?<span className="loading loading-spinner"></span> :"Sign Up"}
          </button>
        </div>
                      
         </form>

        </div>
  </div>
  
}

 export default SignUp


 //STARTER CODE

// const SignUp = () => {
//       return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
//             <h1 className="text-3xl front-semibold text-center text-gray-300">
//                  Sign Up
//                 <span className="text-green-500 text-5xl front-bold">   ChatHub</span>
//               </h1>
             
//              <form>
    
//                   <div>
//                   <label className="label p-2">
//                           <span className=" label-text text-gray-300 text-2xl ">Full Name</span>
//                     </label>
//                      <input
//                       type="text"
//                      placeholder="Enter your full name"
//                      className="w-full input-bordered input-accent  h-10 "
//                      />
//                   </div>
    
//                   <div>
//                   <label className="label p-2">
//                           <span className=" label-text text-gray-300 text-2xl ">Username</span>
//                     </label>
//                      <input
//                       type="text"
//                      placeholder="Enter your username"
//                      className="w-full input-bordered input-accent  h-10 "
//                      />
//                   </div>
    
//                   <div>
//                   <label className="label p-2">
//                           <span className=" label-text text-gray-300 text-2xl ">Password</span>
//                     </label>
//                      <input
//                       type="text"
//                      placeholder="Enter your password"
//                      className="w-full input-bordered input-accent  h-10 "
//                      />
//                   </div>
    
//                   <div>
//                   <label className="label p-2">
//                           <span className=" label-text text-gray-300 text-2xl ">Confirm Password</span>
//                     </label>
//                      <input
//                       type="text"
//                      placeholder="Confirm your password"
//                      className="w-full input-bordered input-accent  h-10 "
//                      />
//                   </div>
    
//                  <GenderCheckBox/>
             
//                  <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-blocked  text-gray-50">
//                     Already have an account?
//                  </a>
                 
//             <div>
//               <button className="btn btn-primary btn-block btn-sm mt-2">Sign up</button>
//             </div>
                          
//              </form>
    
//             </div>
//       </div>
      
//     }
    
//     export default SignUp