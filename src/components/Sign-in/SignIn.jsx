import Footer from "../Footer/Footor"
import Navbar from "../Navbar/Navbar"
import NewsLetter from "../NewsLetter/NewsLetter"
import SignInContainer from "../SignInContainer/SignInContainer"
import './SignIn.css'

export const SignIn = () => {
  return (
    <div>
        <Navbar/>
        <div className="banner-image">
            <img src="./Breadcrumbs.jpg"></img>
        </div>
        <SignInContainer/>
        <NewsLetter/>
        <Footer/>

    </div>
  )
}
