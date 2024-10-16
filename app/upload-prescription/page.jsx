/*
Kimbriah
User only
- PDFs
- Submit button
- Drag/Drog/Upload File
*/


"use client";


import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import UploadPres from "@/components/auth/UploadPres";


const Page = () => {
 return (
   <div className="flex flex-col min-h-screen">
     <NavBar />


     <main>
         <div className="w-full flex justify-center items-center overflow-hidden p-3">
           <div className="shadow-lg p-8 w-[500px] rounded-xl bg-slate-50">
             <h1 className="font-bold text-xl text-center p-4">Upload Prescription</h1>
             <UploadPres />
           </div>
         </div>
     </main>


     <Footer />
   </div>
 );
};


export default Page;



