import React from "react";
import Js1 from "../assets/Javascriptphoto/Js1.png";
import jsbook1 from "../assets/Javascriptphoto/jsbook1.png";
import JS2 from "../assets/Javascriptphoto/JS2.png";
import JS3 from "../assets/Javascriptphoto/JS3.png";
import JS4 from "../assets/Javascriptphoto/JS4.png";
import JS5 from "../assets/Javascriptphoto/JS5.png";
import Js6 from "../assets/Javascriptphoto/Js6.png";






const Javascript = () => {
  return ( 
     <div className="min-h-screen mb-0 flex flex-col  bg-gradient-to-b from-gray-800 to-gray-700 text-gray-100 " > 

    <div className=" flex flex-col items-center  text-gray-100 p-6">
      <div className="w-full  bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-gray-700">
        {/* Header */}
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-4">
          Learn JavaScript Step by Step
        </h1>

        {/* Intro paragraph */}
        <p className="text-lg text-gray-300 leading-relaxed">
          JavaScript is a versatile programming language commonly used for web
          development. It allows you to create interactive and dynamic web
          pages. Here are some key concepts to get you started with JavaScript:
        </p>

        {/* List of topics */}
        <ul className=" flex flex-col list-decimal list-inside space-y-3 text-gray-200">
          <li>
            <span className="font-semibold text-yellow-400">Variables:</span>{" "}
            Used to store data values. You can declare variables using{" "}
            <code className="bg-gray-700 text-yellow-300 px-1 rounded">var</code>,{" "}
            <code className="bg-gray-700 text-yellow-300 px-1 rounded">let</code>, or{" "}
            <code className="bg-gray-700 text-yellow-300 px-1 rounded">const</code>.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Data Types:</span>{" "}
            Numbers, strings, booleans, arrays, and objects.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Functions:</span>{" "}
            Reusable blocks of code that perform specific tasks. Define them with{" "}
            <code className="bg-gray-700 text-yellow-300 px-1 rounded">function</code>{" "}
            or arrow syntax.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Control Flow:</span>{" "}
            Use <code className="bg-gray-700 text-yellow-300 px-1 rounded">if-else</code>,{" "}
            <code className="bg-gray-700 text-yellow-300 px-1 rounded">switch</code>, and loops.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Events:</span> Handle
            user actions like clicks and form submissions.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">DOM Manipulation:</span>{" "}
            Modify HTML elements dynamically using JavaScript.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Asynchronous Programming:</span>{" "}
            Use callbacks, promises, and async/await for tasks like fetching data.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Error Handling:</span>{" "}
            Manage exceptions with <code className="bg-gray-700 text-yellow-300 px-1 rounded">try-catch</code>.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">ES6 Features:</span>{" "}
            Explore modern syntax — template literals, destructuring, and modules.
          </li>

          <li>
            <span className="font-semibold text-yellow-400">Practice:</span>{" "}
            Build small projects, experiment, and keep learning!
          </li>
        </ul>

        {/* Closing note */}
        <p className="text-gray-300 italic text-center mt-6">
          Learning JavaScript is an ongoing journey — stay curious and happy coding!
        </p>
      </div>
    </div>
    <div className="border  w-360 border-yellow-100"></div>
    
       {/* learning course  */} 
       <div className="mt-8 mb-8 items-center text-center justify-center  " > 
        <div  className="flex  flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-45 " >
          
            {/* Youtube course  */}
           <div className="mt-3" >

        <div className=" cursor-pointer  flex w-100 md:w-155 flex-col items-center" >
          <img src={Js1} className="rounded md:w-155" alt="" />
          <h1 className="text-yellow-500 text-xl md:text-2xl font-bold mt-2" > Start Learning </h1>
          <p className="mt-2 text-sm md:text-xl text-gray-200"> <span className="text-yellow-500">Created Coder</span> ကနေ JavaScript ကို မြန်မာလို လေ့လာရမှာ ဖြစ်ပါတယ်။</p>
          <h2 className="mt-2">ဘာတွေပါမလဲ?</h2>
          <p className="mt-2  space-y-2 text-sm md:text-xl"> ဒီသင်ခန်းစာတွေမှာ JavaScript ရဲ့ အခြေခံအပိုင်းများ၊ Variables၊ Functions၊ DOM Manipulation စတဲ့အကြောင်းတွေကို လက်တွေ့နဲ့တကယ်နားလည်အောင် ရှင်းပြပေးသွားမှာပါ။</p>
        </div>    
            <div className=" mt-10 w-100 md:w-155 gap-6 grid grid-cols-1 md:grid-cols-2" >
              <a href="https://youtu.be/EerdGm-ehJQ?si=EoMw166U-7W3uLXG">
                      <img className=" w-full h-auto rounded" src={JS2} alt="" />
                      <h1 className="text-yellow-500 text-xl  font-bold mt-2">Start Learning with course</h1>
                      <p className="mt-2 text-sm  text-gray-200">  Learn JavaScript in English from <span className="text-yellow-500">SurperSimpleDev</span>. </p>
                      <h2 className="mt-2">What’s Included?</h2>
                      <p  className="mt-2  space-y-2 text-sm ">This course covers the fundamentals of JavaScript, including Variables, Functions, and DOM Manipulation, explained in a practical and easy-to-understand way.</p>
              </a>   
               <a href="https://youtu.be/lfmg-EJ8gm4?si=kfFQevTj9Qtibirt">
                      <img className="w-full h-auto rounded" src={JS3} alt="" />
                      <h1 className="text-yellow-500 text-xl  font-bold mt-2">Start Learning with course</h1>
                      <p className="mt-2 text-sm  text-gray-200">  Learn JavaScript in English from <span className="text-yellow-500">Bro Code</span>. </p>
                      <h2 className="mt-2">What’s Included?</h2>
                      <p  className="mt-2  space-y-2 text-sm ">This course covers the fundamentals of JavaScript, including Variables, Functions, and DOM Manipulation, explained in a practical and easy-to-understand way.</p>
              </a>  
               <a href="https://youtu.be/ukiGFmZ32YA?si=wF8R-eKnJgfLUqI1">
                      <img className="w-full h-auto rounded" src={JS4} alt="" />
                      <h1 className="text-yellow-500 text-xl  font-bold mt-2">Start Learning with Projects</h1>
                      <p className="mt-2 text-sm  text-gray-200">  Learn JavaScript in English from <span className="text-yellow-500">JavaScript Mastery</span>. </p>
                      <h2 className="mt-2">What’s Included?</h2>
                      <p  className="mt-2  space-y-2 text-sm ">This course covers the fundamentals of JavaScript, including Variables, Functions, and DOM Manipulation, explained in a practical and easy-to-understand way.</p>
              </a>  
               <a href="https://youtu.be/LX8_z1nvqk4?si=GebnKDA6AyxS9oKr">
                      <img className="w-full h-auto rounded" src={JS5} alt="" />
                      <h1 className="text-yellow-500 text-xl  font-bold mt-2">Start Learning with Projects </h1>
                      <p className="mt-2 text-sm  text-gray-200">  Learn JavaScript in English from <span className="text-yellow-500">Code Traversal</span>. </p>
                      <h2 className="mt-2">What’s Included?</h2>
                      <p  className="mt-2  space-y-2 text-sm ">This course covers the fundamentals of JavaScript, including Variables, Functions, and DOM Manipulation, explained in a practical and easy-to-understand way.</p>
              </a>  
              
              
              
             
            </div>
           </div>
        
          {/* Books */}
                  <div className=" w-95" >
              <div className=" bg-yellow-500 px-25 py-2 text-black font-bold text-2xl" >Populor Books</div> 
                <div className="flex flex-col mt-3 ">
                <div className= " cursor-pointer mt-2 flex gap-3">
                  <img className="w-30 h-30" src={jsbook1} alt="" />
                  <p> JavaScript လိုတိုရှင်း <br />
                      by  <span className="text-yellow-500" >Sir Ei Maung</span> <br />
                    A practical guide for beginners to intermediate </p>
                </div>  
                   {/*border  */}
                <div className=" flex justify-end">

                   <div className="border-yellow-100 border   w-70 mt-2  "></div>
                </div>
                 <div className=" cursor-pointer mt-2 flex gap-3">
                  <img className="w-30 h-30" src={jsbook1} alt="" />
                  <p> JavaScript လိုတိုရှင်း <br />
                      by   <span className="text-yellow-500" >Sir Ei Maung</span> <br />
                    A practical guide for beginners to intermediate </p>
                </div>  
                 <div className=" flex justify-end">

                   <div className="border-yellow-100 border   w-70 mt-2  "></div>
                </div>
                <div className=" cursor-pointer mt-2 flex gap-3">
                  <img className="w-30 h-30" src={jsbook1} alt="" />
                  <p> JavaScript လိုတိုရှင်း <br  />
                      by <span className="text-yellow-500" >Sir Ei Maung</span>   <br />
                    A practical guide for beginners to intermediate </p>
                </div>  
                 <div className=" flex justify-end">

                   <div className="border-yellow-100 border   w-70 mt-2  "></div>
                </div>
                  
                </div> 
                {/* About us section */}
                 <div className="w-95 mt-20"> 
    <div className="bg-yellow-500 px-25 py-2 text-black font-bold text-2xl">About Us</div> 
    <div>
        <img className="w-full h-85 mt-4" src={Js6} alt="Team Image" /> 
        <h1 className="mt-4 text-xl text-yellow-500 font-semibold">Welcome to Our Team!</h1>
        <p className="mt-2 text-white">
            If you have any questions or don’t understand something, feel free to reach out to our team. 
            You can find our contact information in the Home section. We’re here to help and support you!
        </p>
        <h2 className="mt-4  text-yellow-500 text-lg font-semibold">Our Mission</h2>
        <p className="mt-2 text-white">
            Our mission is to provide clear guidance, useful resources, and a supportive environment 
            so everyone can achieve their goals efficiently.
        </p>
        <h1 className="mt-4 text-xl text-yellow-500 font-semibold">Get in Touch</h1>
        <p className="mt-2 text-white">
            Whether it’s a question, suggestion, or feedback, don’t hesitate to contact us. 
            We value your input and strive to make our services better every day.
        </p>
    </div>
</div>
                  </div>
        
        </div>
       </div>
     </div>
  );
};

export default Javascript;