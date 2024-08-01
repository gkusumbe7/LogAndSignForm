import { useState } from "react";

const App = ()=>{
  const [isLogin , setLogin ] = useState(true);
  return(
    <>
      <div className="flex items-center justify-center">
        <div className=" p-10 border border-black rounded-md m-10 bg-gradient-to-r from-rose-100 to-teal-100 shadow-xl">
          <div>
            <button className={isLogin ? 'bg-blue-400 border font-semibold p-2 px-5':'border shadow-xl font-semibold p-2 px-5 m-1 '} onClick={()=>setLogin(true)}>Log In </button>
            <button className={!isLogin ? 'bg-blue-400 border font-semibold p-2 px-5':'border shadow-xl font-semibold p-2 px-5 m-1 '} onClick={()=>setLogin(false)} >Sign In</button>
          </div>
          {isLogin ? <>
                  <form className="flex flex-col gap-2 my-5  ">
                      <label htmlFor="inputEmail" className="text-md font-medium">Email</label>
                      <input type="text" placeholder="Enter Email" className="text-md border rounded-md p-1" />
                      <label htmlFor="inputPassword" className="text-md font-medium">Password</label>
                      <input type="password" placeholder="Enter Password" className="text-md border rounded-md p-1"/>
                      <a href="#" className="text-sm p-0 m-0 text-red-700 font-medium">Forgot Password</a>
                      <button className="text-md border rounded-md px-[10px] py-[4px] w-fit font-semibold hover:bg-blue-400 shadow-xl">Log in</button>
                      <p className="text-sm font-medium">Not a Member? <a href="#" className="text-sm p-0 m-0 text-blue-700 font-medium" onClick={()=>setLogin(false)}>Signup now</a></p>
                  </form>            
            </>: <>
            <form className="flex flex-col gap-2 my-5">
                      <label htmlFor="inputEmail" className="text-md font-medium">Name</label>
                      <input type="text" placeholder="Enter Name" className="text-md border rounded-md p-1" />
                      <label htmlFor="inputPassword" className="text-md font-medium">Email</label>
                      <input type="password" placeholder="Enter Email" className="text-md border rounded-md p-1"/>
                      <label htmlFor="inputPassword" className="text-md font-medium">Password</label>
                      <input type="password" placeholder="Enter Password" className="text-md border rounded-md p-1"/>
                      <button className="text-md border rounded-md px-1 py-[2px] w-fit font-semibold hover:bg-blue-400 shadow-xl ">Sign Up</button>
                  </form>            
            </>}
        </div>
      </div>
    </>
  )
}
export default App;