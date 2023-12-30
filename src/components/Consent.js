
import * as React from "react"
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent";
// import ScrollAnimation from 'react-animate-on-scroll'
// import { AnchorLink } from "gatsby-plugin-anchor-links"

const Consent = () => (

    // <ScrollAnimation animateIn="bounceInUp" animateOnce="true" delay={0} style={{ display:'flex', alignItems:'center', zIndex:'1', width:'100%',}}>

<CookieConsent
    id="sitepref"
	debug={false}
	location="none"
	style={{ opacity:'.8', padding:'10px 20px', margin:'0 auto', border:'1px solid white', borderRadius:'3px', position:'relative', bottom:'', zIndex:'5', display:'flex', alignItems:'center', alignContent:'center', maxWidth:'400px', justifyContent:'center', color:'#fff', background:'#222',
   }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{justifyContent:'center', textAlign:'center', fontSize: "", fontWeight:'bold', borderRadius:'3px', color:'', top:'',  position:'relative', margin:'0 0 0 0', padding:'.5rem 1rem', background:'transparent', border:'1px solid',
    // filter:'drop-shadow(1px 1px 10rem #fff)',
    boxShadow:' 0px 1px 6px 1px black',
    backdropFilter: 'blur(10px)',
    textShadow: '1px 2px 2px rgba(0,0,0,.9)'
 }}
    
    contentStyle={{margin:'0', padding:'0', border:'0px solid red'}}

    expires={364}
    cookieName="site-pref-cookie"
>


    <div style={{color:'inherit', padding:'1rem 0rem', fontSize:'clamp(.6rem, 1.3vw, 1rem)%', textAlign:'center', display:'grid', placeContent:'center', justifyContent:'center', maxWidth:'400px', margin:'0 auto'}}>
    This site uses cookies to analyze traffic, remember preferences, and optimize your visit.{" "}<br /><br />
    <span style={{ fontSize: "", color:'inherit', textDecoration:'underline' }}>
   <Link state={{modal: true}} className="donotsell" to="/privacy#ccpa">Do Not Sell My Personal Information<br /> View Privacy Policy</Link>
    </span>
    </div>
    
</CookieConsent>
//</ScrollAnimation> 

)

export default Consent


