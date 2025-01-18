import React from 'react'
import { FaTwitter } from 'react-icons/fa'

const Login = () => {
    return (
        <div className="login-wrapper w-full" id="login-content">
            <div className="w-full p-[50px] bg-transparent md:p-[30px]">
                
                <h3 className="font-dosis text-[36px] text-[#222222] font-bold uppercase mb-[45px] text-center md:mb-[15px]">Login</h3>
                <form method="post" action="login.php">
                    <div className="flex flex-row">
                        <label htmlFor="username" className="font-dosis text-[14px] text-[#222222] font-bold uppercase w-full mb-[25px] md:mb-[15px]">
                            Username:
                            <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required className="block w-full pl-2 font-dosis text-[14px] text-[#222222] font-bold mt-[10px] h-[42px] border border-gray-300" />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="password" className="font-dosis text-[14px] text-[#222222] font-bold uppercase w-full mb-[25px] md:mb-[15px]">
                            Password:
                            <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required className="block w-full pl-2 font-dosis text-[14px] text-[#222222] font-bold mt-[10px] h-[42px] border border-gray-300" />
                        </label>
                    </div>
                    <div className="row my-5">
                        <div className="flex items-center justify-between mb-[25px] md:mb-[15px] font-nunito text-[#565d64] font-semibold">
                            <div className="flex items-center">
                                <input type="checkbox" name="remember" value="Remember me" className="w-[20px] h-[20px] border border-gray-300 mr-[5px]" />
                                <span className="mt-[3px] text-[#222222] ">Remember me</span>
                            </div>
                            <a href="#">Forget password ?</a>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" className="font-dosis text-[14px] text-white font-bold uppercase border-none bg-pink h-[42px] w-full cursor-pointer">Login</button>
                    </div>
                </form>
                <div className="row">
                    <p className="text-[#222222] mt-[35px] mb-[20px] md:mb-[15px] md:mt-[15px]">Or via social</p>
                    <div className="w-full">
                        <a className="h-[42px] flex items-center justify-center font-dosis text-[16px] text-white hover:text-white font-bold uppercase cursor-pointer bg-[#00b9ef] rounded-[3px]" href="#"><FaTwitter className='mx-1' />twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
