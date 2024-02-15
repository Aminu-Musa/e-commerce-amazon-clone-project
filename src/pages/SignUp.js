import { Link } from "react-router-dom"
import logo from "../images/logo_colored2.png"
import caution from "../images/caution.png"
import leftArrow from "../images/left-arrow.png"
import Button from "../utilities/Button"




function Sign_up() {

  let date = new Date().getFullYear()

  return (
    <div className="page">
      <div className="create__account">
        <div className="home-link">
          <Link to="/"> <img src={logo} alt="logo" /> </Link>
        </div>
        <div className="create__account__container">
          <form action="">
            <h3>Create account</h3>
            <div className="form-group">
              <label htmlFor="account_name">Your name</label>
              <input type="text" name="" id="account_name" placeholder="First and last name" />
            </div>

            <div className="form-group">
              <label htmlFor="account_number-email">Mobile number or email</label>
              <input type="text" name="" id="account_number-email" />
            </div>

            <div className="form-group">
              <label htmlFor="account_password">Password</label>
              <input type="text" name="" id="account_password" placeholder="At least 6 characters" />
              <div className="password-requirement">
                <div><img src={caution} alt="" /></div>
                <p className="caution"> Password must be at least 6 characters</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="account_password_confirmation">Re-enter password</label>
              <input type="text" name="" id="account_password_confirmation" />
            </div>
            <Button text='Continue'/>
          </form>

          <div className="terms_conditions">
            <p> By creating an account, you agree to Amazon's </p>
            <p> <span>Conditions of Use</span> and <span>Privacy Notice</span>. </p>
          </div>

          <div className="account-type">
            <p> Buying for work?</p>
            <p>Create a free business account </p>
          </div>

          <div className="sign-in">
            <p>Already have an account ? <Link to='/signin' className="sign-in-link"> Sign in <img src={leftArrow} alt="" /></Link></p>
          </div>
        </div>

      </div>

      <div className="sign-up-footer-container">
      <div className="create__account__footer">
            <div className="create__account__footer_terms_conditions">
            <p>Conditions of Use</p>
            <p>Privacy Notice</p>
            <p>Help </p>
          </div>
          <p>© 1996-{date}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  )
}

export default Sign_up