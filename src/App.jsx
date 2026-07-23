import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import User from './components/User'

const App = () => {
 const [formData, setFormData] = useState({
    fullName:'',
    password:'',
    confirmPassword:'',
    email:''
  })

  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

    // Regex
  const nameRegex = /^[A-Za-z ]{3,40}$/;
  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+])[A-Za-z\d@$!%*?&#^()_+]{8,}$/;

  const handleChanges = (e)=>{
    const {name,value} = e.target ;

    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }));
        setError("");
  }
  
  const submitHandler = (e) => {
    e.preventDefault();

    const fullName = formData.fullName.trim();
    const email = formData.email.trim().toLowerCase();

    // Name Validation
    if (!nameRegex.test(fullName)) {
      setError(
        "Name should contain only letters and be 3-40 characters long."
      );
      return;
    }

    // Email Validation
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Duplicate Email Check
    const emailExists = users.some(
      (user) => user.email === email
    );

    if (emailExists) {
      setError("This email is already registered.");
      return;
    }

    // Password Validation
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain:\n• 8+ characters\n• Uppercase\n• Lowercase\n• Number\n• Special character"
      );
      return;
    }

    // Confirm Password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save User
    setUsers((prev) => [
      ...prev,
      {
        fullName,
        email,
        password: formData.password,
      },
    ]);

    setError('')
    setFormData({
      fullName:'',
      email:'',
      password:'',
      confirmPassword:''
    })
    
    toast.success('Account Created Successfully! ✅', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }

  return (
    <>
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96'>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className="flex flex-col gap-4">
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="text"
              required
              name='fullName'
              placeholder="Enter Name here"
              value={formData.fullName}
              onChange={handleChanges}  
            />
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="email"
              required
              placeholder="Enter Your Email"
              name='email'
              value={formData.email}
              onChange={handleChanges}
            />
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="password"
              required
              name='password'
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChanges}
            />
            <input
            required
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="password"
              name='confirmPassword'
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChanges}
            />

              {error && (
                <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
              )}
            
            <button
             type="submit"
              className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3 "
            >
              Create Account
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
          </p>
        </div>
        <ToastContainer/>
      </div>
    </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 p-5">
        {users.map((user, index) => (
          <User key={index} elem={user} />
        ))}
      </div>
    </>
  )
}

export default App