import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const Form = () => {
  const [Phone, setPhone] = useState("+91")
  return (
    <div className='relative h-screen flex justify-center bg-slate-300'>
      <h3 className='uppercase absolute top-20'>
        Request Demo
      </h3>
      <form className='absolute top-24 w-1/2 space-y-8'>
        <div>
          <div className='mb-1'>Name*</div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-10'>
            <input
              maxLength="30"
              placeholder="First Name"
              pattern="[A-Za-z]"
              className="styleInput"
              required
            />
            <input
              maxLength="30"
              placeholder="Last Name"
              pattern="[A-Za-z]"
              className="styleInput"
              required
            />
          </div>
        </div>
        <div>
          <div className='mb-1'>Email*</div>
          <input
            className='w-full styleInput'
            type="email"
            maxLength="50"
            placeholder="Email" />
        </div>
        <div>
          <div className='mb-1'>Phone*</div>
          <PhoneInput
            country="India"
            value={Phone}
            onChange={setPhone}
            required
          />
        </div>
        <div>
          <div className='mb-1'>Message</div>
          <textarea
                id="textarea"
                rows="3"
                className='min-h-fit w-full styleInput message'
                placeholder="Write something here"
              />
          <input type="submit" className='bg-white p-3 w-28 rounded-sm mt-1'/>
        </div>
      </form>

    </div>
  )
}

export default Form