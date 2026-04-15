import { useState, useEffect } from "react";
import { MapPin, Briefcase, User, Clock, Check } from "lucide-react";

const BecomeProvider = () => {

const [step, setStep] = useState(1);

const [form, setForm] = useState({
  country: "",
  city: "",
  district: "",
  zip: "",
  address: "",
  services: [],
  name: "",
  phone: "",
  price: "",
  hours: ""
});

const [error, setError] = useState("");

/* LOAD SAVED DATA */
useEffect(() => {
  const saved = localStorage.getItem("providerForm");
  if (saved) setForm(JSON.parse(saved));
}, []);

/* SAVE DATA */
useEffect(() => {
  localStorage.setItem("providerForm", JSON.stringify(form));
}, [form]);

/* PROGRESS */
const progress = (step / 5) * 100;

/* VALIDATION */
const validateStep = () => {

  if (step === 1) {
    if (!form.country || !form.city || !form.address) {
      return "Please fill all address fields";
    }
  }

  if (step === 2) {
    if (form.services.length === 0) {
      return "Select at least one service";
    }
  }

  if (step === 3) {
    if (!form.name || !form.phone) {
      return "Enter profile details";
    }
  }

  if (step === 4) {
    if (!form.price || !form.hours) {
      return "Enter pricing & hours";
    }
  }

  return "";
};

/* NEXT STEP */
const handleNext = () => {
  const err = validateStep();

  if (err) {
    setError(err);
    return;
  }

  setError("");
  setStep(step + 1);
};

/* BACK */
const handleBack = () => {
  setStep(step - 1);
};

const steps = [
  { id: 1, title: "Location", icon: MapPin },
  { id: 2, title: "Services", icon: Briefcase },
  { id: 3, title: "Profile", icon: User },
  { id: 4, title: "Pricing", icon: Clock },
  { id: 5, title: "Done", icon: Check },
];

return (
<div className="min-h-screen bg-gray-50">

{/* PROGRESS BAR */}
<div className="h-1 bg-gray-200">
  <div
    className="h-1 bg-blue-600 transition-all duration-500"
    style={{ width: `${progress}%` }}
  />
</div>

{/* TOP STEPPER */}
<div className="bg-blue-600 text-white py-6">
<div className="max-w-6xl mx-auto px-6">

<div className="flex items-center justify-between">

{steps.map((s,index)=>{

const Icon = s.icon;

return (
<div key={s.id} className="flex items-center flex-1">

<div className="flex items-center gap-3">

{/* STEP CIRCLE */}
<div className={`w-10 h-10 rounded-full flex items-center justify-center border 
transition-all duration-500
${step >= s.id ? "bg-white text-blue-600 scale-110" : "border-white"}`}>

{step > s.id ? "✓" : s.id}

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

{/* ERROR */}
{error && (
<div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-4">
{error}
</div>
)}

{/* STEP 1 */}
{step === 1 && (
<div className="grid md:grid-cols-2 gap-10">

<div>

<h2 className="text-3xl font-bold mb-6">
Business Address
</h2>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="Country"
value={form.country}
onChange={e=>setForm({...form, country:e.target.value})}
className="border p-3 rounded-lg"/>

<input
placeholder="City"
value={form.city}
onChange={e=>setForm({...form, city:e.target.value})}
className="border p-3 rounded-lg"/>

<input
placeholder="District"
value={form.district}
onChange={e=>setForm({...form, district:e.target.value})}
className="border p-3 rounded-lg"/>

<input
placeholder="Zip code"
value={form.zip}
onChange={e=>setForm({...form, zip:e.target.value})}
className="border p-3 rounded-lg"/>

</div>

<input
placeholder="Address line"
value={form.address}
onChange={e=>setForm({...form, address:e.target.value})}
className="border p-3 rounded-lg mt-4 w-full"
/>

<div className="mt-6">
<button
onClick={handleNext}
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
>
Continue
</button>
</div>

</div>

</div>
)}

{/* STEP 2 */}
{step === 2 && (
<div>

<h2 className="text-3xl font-bold mb-6">
Choose Services
</h2>

<div className="grid grid-cols-3 gap-4">

{["Cleaning","AC Repair","Electrician","Plumbing","Painting"].map(s=>{

const selected = form.services.includes(s);

return (
<div
key={s}
onClick={()=>{
  if (selected) {
    setForm({...form, services: form.services.filter(i=>i!==s)});
  } else {
    setForm({...form, services: [...form.services, s]});
  }
}}
className={`border p-4 rounded-xl cursor-pointer 
${selected ? "bg-blue-50 border-blue-600" : ""}`}
>
{s}
</div>
);

})}

</div>

<div className="mt-8 flex gap-4">
<button onClick={handleBack} className="border px-6 py-3 rounded-lg">
Back
</button>

<button onClick={handleNext} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Continue
</button>
</div>

</div>
)}

{/* STEP 3 */}
{step === 3 && (
<div>

<h2 className="text-3xl font-bold mb-6">
Profile Details
</h2>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="Full Name"
value={form.name}
onChange={e=>setForm({...form, name:e.target.value})}
className="border p-3 rounded-lg"/>

<input
placeholder="Phone"
value={form.phone}
onChange={e=>setForm({...form, phone:e.target.value})}
className="border p-3 rounded-lg"/>

</div>

<div className="mt-8 flex gap-4">
<button onClick={handleBack} className="border px-6 py-3 rounded-lg">
Back
</button>

<button onClick={handleNext} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Continue
</button>
</div>

</div>
)}

{/* STEP 4 */}
{step === 4 && (
<div>

<h2 className="text-3xl font-bold mb-6">
Pricing & Hours
</h2>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="Starting Price"
value={form.price}
onChange={e=>setForm({...form, price:e.target.value})}
className="border p-3 rounded-lg"/>

<input
placeholder="Working Hours"
value={form.hours}
onChange={e=>setForm({...form, hours:e.target.value})}
className="border p-3 rounded-lg"/>

</div>

<div className="mt-8 flex gap-4">
<button onClick={handleBack} className="border px-6 py-3 rounded-lg">
Back
</button>

<button onClick={handleNext} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Finish
</button>
</div>

</div>
)}

{/* STEP 5 */}
{step === 5 && (
<div className="text-center py-20">

<div className="text-5xl mb-4">🎉</div>

<h2 className="text-2xl font-bold">
Profile Created Successfully
</h2>

<p className="text-gray-600 mt-2">
We will start sending bookings soon
</p>

</div>
)}

</div>

</div>
);

};

export default BecomeProvider;