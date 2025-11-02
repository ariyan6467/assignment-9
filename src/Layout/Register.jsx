import { NavLink, useLocation, useNavigate } from "react-router";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
     const location = useLocation();
  const { handleRegister, setUser, handleGoogleSignIn, handleUpdateProfile,handleForgotPassword } = useContext(AuthContext);

   const[error,setError]=useState("");
     const[suck,setSuck]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!regex.test(password)){
   setError("Password must have uppercase, lowercase and at least 6 characters long");
   setSuck("");
   return;
}
  
        console.log(location);
   
    // Register user
    handleRegister(email, password)
      .then((result) => {
          setSuck("Register Successful")
          setError("")
        const registeredUser = result.user;

        // Update profile
        const profileData = {
          displayName: name,
          photoURL: img,
        };

        handleUpdateProfile(registeredUser, profileData)
          .then(() => {
            // Merge profile data with user state
            setUser({ ...registeredUser, ...profileData });
            console.log("User registered & profile updated:", { ...registeredUser, ...profileData });
            navigate(location?.state? location.state:"/")// redirect after successful registration
          })
          .catch((error) =>
              {
                setError(error.message)
            setSuck("")
            console.error("Profile update error:", error.message)
              });
      })
      .catch((error) =>
         {
           setError(error.message)
           setSuck("")
        console.error("Registration error:", error.message)
         });

    
  };

  // Google Sign-In
  const handleSignInWithGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        console.log("Signed in with Google:", result.user);
     navigate(location?.state? location.state:"/")
      })
      .catch((error) => console.error("Google sign-in error:", error.message));
  };

    const emailRef = useRef();
     function forgotPassword(){
    const email = emailRef.current.value;
    handleForgotPassword(email)
    .then(()=>{
      
      alert("check email")
    })
    .catch(error=>{
      console.error(error.message);
      alert(error.message)
    })
    }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input rounded-xl bg-gray-400"
                  placeholder="Enter Your Name"
                  required
                />

                <label className="label">Image</label>
                <input
                  name="img"
                  type="url"
                  className="input rounded-xl bg-gray-400"
                  placeholder="Image URL"
                />

                <label className="label">Email</label>
                <input
                ref={emailRef}
                  name="email"
                  type="email"
                  className="input rounded-xl bg-gray-400"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input rounded-xl bg-gray-400"
                  placeholder="Password"
                  required
                />

                <div>
                  <a 
                  onClick={forgotPassword}
                  className="link link-hover">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-neutral mt-4 border-0 bg-gray-500">
                  Register
                </button>

                <button
                  type="button"
                  onClick={handleSignInWithGoogle}
                  className="btn bg-white text-black border-[#e5e5e5] mt-2"
                >
                  Register with Google
                </button>

                <p className="mt-2">
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-blue-600">
                    Login
                  </NavLink>
                </p>
              </fieldset>
            </form>
             {error && <p className="text-red-500">{error}</p>}
                        {suck && <p className="text-green-600">{suck}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
