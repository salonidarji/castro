'use client'
import React,{useState} from 'react'
import { loginApi } from '../api/customApi';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await loginApi({ email, password });
        
        if(response.code === 1){
          localStorage.setItem('token', response.data.token);
          router.replace("/")
        }else{
          throw Error("Something went wrong in Login")
        }
        
      } catch (error) {
        console.log('error: ', error);
        // Handle login error
      }
    };
  return (
            <section className="myaccount-section">
              <div className="auto-container">
                <div className="row justify-content-center clearfix">
                  <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                    <div className="inner-box login-inner">
                      <div className="upper-inner">
                        <h3>Log in</h3>
                        <p>Log in to access all your resources</p>
                      </div>
                      <form onSubmit={handleLogin} action="https://azim.commonsupport.com/Castro/my-account.html" method="post" className="default-form">
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)}  />
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
                              <span className="description">Remember me</span>
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="theme-btn-two w-100">Log In<i className="flaticon-right-1" /></button>
                        </div>
                      </form>
                      <div className="text-center">
                        <p>{`Don't Have an Account? `}<a href="/signup">Sign up Now</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Login