import GenderCheckBox from "./GenderCheckBox"


const SignUp = () => {
  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl front-semibold text-center text-gray-300">
             Sign Up
            <span className="text-green-500 text-5xl front-bold">   ChatHub</span>
          </h1>
         
         <form>

              <div>
              <label className="label p-2">
                      <span className=" label-text text-gray-300 text-2xl ">Full Name</span>
                </label>
                 <input
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
                  type="text"
                 placeholder="Enter your password"
                 className="w-full input-bordered input-accent  h-10 "
                 />
              </div>

              <div>
              <label className="label p-2">
                      <span className=" label-text text-gray-300 text-2xl ">Confirm Password</span>
                </label>
                 <input
                  type="text"
                 placeholder="Confirm your password"
                 className="w-full input-bordered input-accent  h-10 "
                 />
              </div>

             <GenderCheckBox/>
         
             <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-blocked  text-gray-50">
                Already have an account?
             </a>
             
        <div>
          <button className="btn btn-primary btn-block btn-sm mt-2">Sign up</button>
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