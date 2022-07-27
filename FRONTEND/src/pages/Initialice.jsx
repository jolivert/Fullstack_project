import React from 'react'
import '../assets/style/initialice.css'

const Initialice = () => {
  return (
    <div>
      <div className="container-initiate">
        <div className="singIn">
          <h1>Sing In</h1>
          <section>
            {' '}
            <button>f</button>
            <button>g</button>
            <button>in</button>{' '}
          </section>
          <p>our use your count</p>
          <section className="inputsSingIn">
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Password'/>
          </section>
          <p>Forgot your password?</p>
          <button>SING IN</button>
        </div>

        <div className="singUp-pink">
          <section>
            
            <h1>hello, friends!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button>SING UP</button>
          </section>
        </div>
      </div>
    </div>
  )
}
export default Initialice
