'use client'
import React ,  { useState} from 'react'
import { signupApi } from '../api/customApi';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signupApi({ name, email, password });
      if(response.data.code === 1){

        const token = response.data.data?.token;
        localStorage.setItem('token', token);
        router.replace("/login")
      }else{
        throw Error("user already exist")
      }
    } catch (error) {
      // Handle signup error
      console.log(error);
    }
  };
  
  return (
      
            <section className="myaccount-section">
              <div className="auto-container">
                <div className="row justify-content-center clearfix">
                  <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                    <div className="inner-box signup-inner">
                      <div className="upper-inner">
                        <h3>Create An Account</h3>
                        <p>Log in to access all your resources</p>
                      </div>
                      <form onSubmit={handleSignup} action="/login" method="post" className="default-form">
                        <div className="form-group">
                          <label>Your name</label>
                          <input type="text" name="name" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                              <input type="checkbox" className="material-control-input" />
                              <span className="material-control-indicator" />
                              <span className="description">I agree to terms &amp; Policy.</span>
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="theme-btn-two w-100">Sign Up<i className="flaticon-right-1" /></button>
                        </div>
                      </form>
                      <div className="text-center">
                        <p>Already have an account? <a href="/login">Log In Now</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Signup