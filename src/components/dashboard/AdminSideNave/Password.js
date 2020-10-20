// import "./Footer.css"
// import logo from './lolo.svg'
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import Navbar from "../components/Navbar";
import Navbar from "../../Navbar"
// import { FaFacebook } from 'react-icons/fa';
// import Footer from "./Footer";
// import  './SignUp.css'
// import Navbar from './useSignUp';



       




 export const Password = () =>{
	const [values, setValues] = useState({ currentpassword: "", newpassword: "", confirmpassword: "", })
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
      <div className="Password-page">
      		<Navbar />
      
				<div className="signupwrapper">
		
        
					<section className="signup-parent">
          
          <h2 className="register-member">Update Password</h2>
          <br />
      
						<div className="loginForm">
							{/* <img src={logo} className="App-logo" alt="logo" /> */}
							<form    onSubmit={handleSubmit} className="form_parent">
							<span>
								<input type="text" name="currentpassword"  placeholder="current password" value={values.currentpassword} onChange={handleChange}  size="50"  />
								{/* <p className="first">First Name</p> */}
								{/* <label ><i class="fas fa-user"></i></label> */}
							</span>
								
							<span>
								<input type="text" name="newpassword" placeholder="new password" value={values.newpassword} onChange={handleChange}  size="50"/>
								{/* <p>Last Name</p> */}
								{/* <label ><i className="fas fa-user"></i></label> */}
							</span>
						
								<span>
								<input type="confirmpassword" name="confirmpassword" placeholder="confirm password" value={values.confirmpassword} onChange={handleChange}  size="50"  />
									{/* <p>Password</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>
                
								<div>
									<button type="submit" className="password-btn" >Update</button>
								</div>

								
							</form>
							
          </div>
            
					</section>
          
					</div>
          </div>
			</>
		)
} 
export default Password;


























