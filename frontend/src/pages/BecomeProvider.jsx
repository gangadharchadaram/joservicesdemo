import { useState } from "react";
import { MapPin, Briefcase, User, Clock, Check } from "lucide-react";

const BecomeProvider = () => {

const [step,setStep] = useState(1);

const steps = [
{ id:1, title:"Business location", icon: MapPin },
{ id:2, title:"Choose services", icon: Briefcase },
{ id:3, title:"Profile details", icon: User },
{ id:4, title:"Price and hours", icon: Clock },
{ id:5, title:"Create first project", icon: Check },
];

return (
<div className="min-h-screen bg-gray-50">

{/* TOP STEPPER */}
<div className="bg-blue-600 text-white py-6">
    <div className="max-w-6xl mx-auto px-6">

<div className="flex items-center justify-between">

{steps.map((s,index)=>{

const Icon = s.icon;

return (
<div key={s.id} className="flex items-center flex-1">

<div className="flex items-center gap-3">

<div className={`w-10 h-10 rounded-full flex items-center justify-center border 
${step >= s.id ? "bg-white text-teal-600" : "border-white"}`}>

<Icon size={18}/>
</div>

<div className="hidden md:block text-sm">
{s.title}
</div>

</div>

{index !== steps.length-1 && (
<div className="flex-1 h-[2px] bg-white/40 mx-4"/>
)}

</div>
);

})}

</div>

</div>
</div>

{/* CONTENT */}
<div className="max-w-6xl mx-auto px-6 py-12">

{/* STEP 1 */}
{step === 1 && (
<div className="grid md:grid-cols-2 gap-10">

<div>

<h2 className="text-3xl font-bold mb-6">
What is your business address?
</h2>

<div className="grid grid-cols-2 gap-4">

<input placeholder="Country"
className="border p-3 rounded-lg"/>

<input placeholder="City"
className="border p-3 rounded-lg"/>

<input placeholder="District"
className="border p-3 rounded-lg"/>

<input placeholder="Zip code"
className="border p-3 rounded-lg"/>

</div>

<input
placeholder="Address line"
className="border p-3 rounded-lg mt-4 w-full"
/>

<button
onClick={()=>setStep(2)}
className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg"
>
Continue
</button>

</div>

<div className="flex items-center justify-center">
<img
src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
className="w-72 opacity-80"
/>
</div>

</div>
)}

{/* STEP 2 */}
{step === 2 && (
<div>

<h2 className="text-3xl font-bold mb-6">
Choose services
</h2>

<div className="grid grid-cols-3 gap-4">

{["AC Repair","Cleaning","Electrician","Plumbing","Painting"].map(s=>(
<div className="border p-4 rounded-xl cursor-pointer hover:border-teal-500">
{s}
</div>
))}

</div>

<div className="mt-8 flex gap-4">
<button
onClick={()=>setStep(1)}
className="border px-6 py-3 rounded-lg"
>
Back
</button>

<button
onClick={()=>setStep(3)}
className="bg-teal-600 text-white px-6 py-3 rounded-lg"
>
Continue
</button>
</div>

</div>
)}

{/* STEP 3 */}
{step === 3 && (
<div>

<h2 className="text-3xl font-bold mb-6">
Profile details
</h2>

<div className="grid grid-cols-2 gap-4">

<input placeholder="Full name" className="border p-3 rounded-lg"/>
<input placeholder="Phone" className="border p-3 rounded-lg"/>
<input placeholder="Experience" className="border p-3 rounded-lg"/>

</div>

<div className="mt-8 flex gap-4">
<button
onClick={()=>setStep(2)}
className="border px-6 py-3 rounded-lg"
>
Back
</button>

<button
onClick={()=>setStep(4)}
className="bg-teal-600 text-white px-6 py-3 rounded-lg"
>
Continue
</button>
</div>

</div>
)}

{/* STEP 4 */}
{step === 4 && (
<div>

<h2 className="text-3xl font-bold mb-6">
Price and hours
</h2>

<div className="grid grid-cols-2 gap-4">

<input placeholder="Starting price"
className="border p-3 rounded-lg"/>

<input placeholder="Working hours"
className="border p-3 rounded-lg"/>

</div>

<div className="mt-8 flex gap-4">
<button
onClick={()=>setStep(3)}
className="border px-6 py-3 rounded-lg"
>
Back
</button>

<button
onClick={()=>setStep(5)}
className="bg-teal-600 text-white px-6 py-3 rounded-lg"
>
Continue
</button>
</div>

</div>
)}

{/* STEP 5 */}
{step === 5 && (
<div className="text-center py-16">

<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
✓
</div>

<h2 className="text-2xl font-bold">
Provider profile created
</h2>

<p className="text-gray-600 mt-2">
You can now start receiving bookings
</p>

</div>
)}

</div>

</div>
);

};

export default BecomeProvider;