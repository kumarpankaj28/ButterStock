import React, { useState } from "react";

function FormInput() {
  //   const [name, setName] = useState("");
  //   const [cont, setCont] = useState("");
  //   const [mail, setMail] = useState("");

  //   function demo() {
  //     console.log(name, cont, mail);
  //   }

  return (
    <div className="bg-gradient-to-r from-red-400">
      {/* <div classNameName="flex justify-center pt-10">
        <div classNameName="text-left">
          <form>
            <label>Name:</label>
            
            <input
             classNameName="mb-6"
              placeholder="username"
              type="text"
              value={name}
              onChange={(event1) => setName(event1.target.value)}
            />

            <br />
            <label>Contact no.</label>
            
            <input
            classNameName="mb-6"
              type="text"
              value={cont}
              onChange={(event2) => setCont(event2.target.value)}
            />
            <br />
            <label> e-mail</label>
            
            <input
            classNameName="mb-6"
              type="text"
              value={mail}
              onChange={(event3) => setMail(event3.target.value)}
            />
            <br />
            <button type="button" classNameName="bg-red-600" onClick={demo}>
              Click me
            </button>
          </form>
        </div>
        <div>

        </div>
      </div> */}
      
      <div className="md:mx-12 py-4 flex flex-col md:flex-row">
        <div className="rounded-2xl flex-1 ">
             <iframe className="rounded-xl w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224022.47527582682!2d76.97804307134898!3d28.67908072379827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1638104294668!5m2!1sen!2sin"  height="450"  allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div className="text-center flex-1 ">
            <h1 className="text-3xl font-bold ">You can reach us here</h1>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
