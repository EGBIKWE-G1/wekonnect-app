// import "./Footer.css"
// import logo from './lolo.svg'
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from "../../Navbar";
// import { FaFacebook } from 'react-icons/fa';
// import Footer from "./Footer";
// import  './SignUp.css'
// import Navbar from './useSignUp';



       




 export const Signup = () =>{
	const [values, setValues] = useState({ organisation: "", email: "", phone: "", profession: "", password: "", address: "", state: "", city: "", country: "", csv: "", origin: "", })
	const[checked, setChecked] = useState(false)
	// const [errors, setErrors] = useState({ })
	// const [isSubmitting, setIsSubmitting] = useState(false)
	
const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		
		})
		setChecked(!checked)
	}
	
	

	function handleSubmit(e) {
		e.preventDefault()

		console.log(values)
		//handling errors

		//Setting input to initiial state
  }


		return (
			< >
      <div className="addmember">
       <Navbar />
      <br />
          <br />
				<div className="signupwrapper">
				{/* <Navbar /> */}
        
					<section className="signup-parent">
          
          <h2 className="register-member">Personal Profile</h2>
          <br />
      <br />
      
  
						<div className="loginForm">
							{/* <img src={logo} className="App-logo" alt="logo" /> */}
							<form    onSubmit={handleSubmit} className="form_parent">
							<span>
								<input type="text" name="organisation"  placeholder="organisation" value={values.organisation} onChange={handleChange}  size="50"  />
								{/* <p className="first">First Name</p> */}
								{/* <label ><i class="fas fa-user"></i></label> */}
							</span>
								
							
								<span>
								<input type="email" name="email"  placeholder="Email" value={values.email} onChange={handleChange}  size="50"  />
									{/* <p>Email address</p> */}
									{/* <label ><i class="fas fa-envelope"></i></label> */}
								</span>
						
							<span>
								<input type="tel" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange}  size="50"  />
								{/* <p>Phone Number</p> */}
								{/* <label ><i className="fas fa-phone-volume"></i></label> */}
							</span>
							
							<span>
								<input type="profession" name="profession" placeholder="profession" value={values.profession} onChange={handleChange} size="50" />
								<p>profession</p>
								{/* <label ><i className="fas fa-user"></i></label> */}
							</span>
							
								<span>
								<input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}  size="50"  />
									{/* <p>Password</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>
                
                <span>
									<input type="address" name="address"  placeholder="Address" value={values.address} onChange={handleChange}  size="50" />
									{/* <p>address</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>

                <span>
									<input type="state" name="state" placeholder="State" value={values.state} onChange={handleChange}  size="50" />
									{/* <p>state</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>

                <span>
									<input type="city" name="city" placeholder="City" value={values.city} onChange={handleChange}  size="50" />
									{/* <p>city</p> */}
                  {/* <i class='fas fa-house-user'></i> */}
									{/* <label ><i className="fas fa-house-user"></i></label> */}
								</span>

                <span>
									<input type="country" name="country" placeholder="Country" value={values.country} onChange={handleChange}  size="20" />
								
								</span>
                
								<label>
							</label>
								<div>
									<button type="submit" className="btn10" >Sign up</button>
								</div>

								
							</form>
							
            	</div>
              
					</section>
          
					</div>
          </div>
			</>
		)
} 
export default Signup;