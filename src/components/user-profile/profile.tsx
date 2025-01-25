import React from 'react'

const Profile = () => {
  return (
    <div className="md:absolute md:top-32 right-0 xl:right-[100px] md:mx-10 md:w-[60%] lg:w-2/3 form-style-1 p-6 max-xs:mx-5 bg-[#0b1a2a] my-10 border-[3px] border-light-blue max-md:space-y-10 md:mb-52">
          <form id="search-form" action="#">
            <h1 className="uppercase text-white font-bold mb-5">
              01. Profile details
            </h1>
            <div className="row md:grid grid-cols-2 gap-5">
              <div className="col-md-12 form-it">
                <label>Username</label>
                <input type="text" placeholder="johndoe" />
              </div>
              <div className="col-md-12 form-it">
                <label>Email Address</label>
                <input type="text" placeholder="johndoe@gmail.com" />
              </div>
              <div className="col-md-12 form-it">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="col-md-12 form-it">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="col-md-12 form-it">
                <label>Country</label>
                <div className="group-ip">
                  <div className="ui fluid dropdown selection multiple">
                    <select name="countries">
                      <option value="united-states">United States</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12 form-it">
                <label>States</label>
                <div className="group-ip">
                  <div className="ui fluid dropdown selection multiple">
                    <select name="states">
                      <option value="new-york">New York</option>
                      <option value="others">Others</option>
                    </select>
                    </div>
                  </div>
                </div>

              <div className="col-md-12 uppercase">
                <button
                  className="font-dosis submit uppercase max-md:mt-5 text-sm bg-pink rounded-full font-bold text-white w-full md:w-[100px] p-2"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          <form id="search-form" action="#" className="border-t border-light-blue py-8 md:w-2/4">
          <h1 className="uppercase text-white font-bold mb-5">
          02. Change password
            </h1>
            <div className="row">
              <div className="col-md-12 form-it">
                <label>Old Password</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="col-md-12 form-it">
                <label>New Password</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="col-md-12 form-it">
                <label>Confirm New Password</label>
                <input type="password" placeholder="********" />
              </div>
              
              <div className="col-md-12 uppercase">
                <button
                  className="font-dosis submit uppercase mt-5 text-sm bg-pink rounded-full font-bold text-white w-full  md:w-[100px] p-2"
                  type="submit"
                >
                  Change
                </button>
              </div>
            </div>
          </form>
        </div>
  )
}

export default Profile