export const serviceCategories = [
  {
    id: 1,
    name: 'Plumbing Services',
    icon: 'Wrench',
    description: 'Fix leaks, install pipes, repair taps, bathroom fittings & more.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop',
    popular: true
  },
  {
    id: 2,
    name: 'Painting Services',
    icon: 'Paintbrush',
    description: 'Interior & exterior painting, touch-ups, waterproofing solutions.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
    popular: true
  },
  {
    id: 3,
    name: 'Electrical Services',
    icon: 'Zap',
    description: 'Wiring, switchboard repairs, electrical fittings, and more.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop',
    popular: true
  },
  {
    id: 4,
    name: 'Carpenter Services',
    icon: 'Hammer',
    description: 'Furniture assembly, repairs, polishing, custom woodwork.',
    image: 'https://images.unsplash.com/photo-1597839170394-dc69d8b9f4e0?w=400&h=300&fit=crop',
    popular: false
  },
  {
    id: 5,
    name: 'Tile & Flooring Services',
    icon: 'Layers',
    description: 'Tile fitting, flooring, repairs, polishing, and finishing.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&h=300&fit=crop',
    popular: false
  },
  {
    id: 6,
    name: 'Appliance Repairs',
    icon: 'Settings',
    description: 'AC, washing machine, refrigerator, geyser, TV, and all major household appliances.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop',
    popular: true
  },
  {
    id: 7,
    name: 'Pest Control',
    icon: 'Bug',
    description: 'Termite treatment, cockroach control, rodent management, and eco-friendly pest solutions.',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&h=300&fit=crop',
    popular: false
  },
  {
    id: 8,
    name: 'Water Installation Services',
    icon: 'Droplets',
    description: 'Water purifier fitting, pipe installations, water tank cleaning.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
    popular: false
  }
];

export const services = [
  // Plumbing
  { id: 101, categoryId: 1, name: 'Tap Repair & Installation', price: 199, duration: '30 mins', rating: 4.7, reviews: 1234 },
  { id: 102, categoryId: 1, name: 'Bathroom Fitting Installation', price: 499, duration: '2 hours', rating: 4.8, reviews: 892 },
  { id: 103, categoryId: 1, name: 'Pipe Leak Repair', price: 299, duration: '1 hour', rating: 4.6, reviews: 2341 },
  { id: 104, categoryId: 1, name: 'Drain Cleaning', price: 399, duration: '1.5 hours', rating: 4.5, reviews: 543 },
  
  // Painting
  { id: 201, categoryId: 2, name: 'Interior Wall Painting (per room)', price: 2999, duration: '1 day', rating: 4.9, reviews: 876 },
  { id: 202, categoryId: 2, name: 'Exterior Painting', price: 5999, duration: '2 days', rating: 4.7, reviews: 432 },
  { id: 203, categoryId: 2, name: 'Waterproofing Services', price: 3499, duration: '1 day', rating: 4.8, reviews: 654 },
  { id: 204, categoryId: 2, name: 'Touch-up Painting', price: 899, duration: '3 hours', rating: 4.6, reviews: 234 },
  
  // Electrical
  { id: 301, categoryId: 3, name: 'Switch & Socket Repair', price: 149, duration: '30 mins', rating: 4.7, reviews: 1876 },
  { id: 302, categoryId: 3, name: 'Ceiling Fan Installation', price: 249, duration: '1 hour', rating: 4.8, reviews: 1234 },
  { id: 303, categoryId: 3, name: 'Wiring & Rewiring', price: 1999, duration: '4 hours', rating: 4.6, reviews: 543 },
  { id: 304, categoryId: 3, name: 'Switchboard Installation', price: 899, duration: '2 hours', rating: 4.5, reviews: 765 },
  
  // Carpenter
  { id: 401, categoryId: 4, name: 'Furniture Assembly', price: 399, duration: '2 hours', rating: 4.8, reviews: 987 },
  { id: 402, categoryId: 4, name: 'Door Repair & Installation', price: 599, duration: '2 hours', rating: 4.7, reviews: 654 },
  { id: 403, categoryId: 4, name: 'Custom Woodwork', price: 2499, duration: '1 day', rating: 4.9, reviews: 321 },
  { id: 404, categoryId: 4, name: 'Furniture Polishing', price: 799, duration: '3 hours', rating: 4.6, reviews: 456 },
  
  // Tile & Flooring
  { id: 501, categoryId: 5, name: 'Floor Tile Installation', price: 3999, duration: '1 day', rating: 4.8, reviews: 543 },
  { id: 502, categoryId: 5, name: 'Tile Repair & Replacement', price: 699, duration: '2 hours', rating: 4.6, reviews: 432 },
  { id: 503, categoryId: 5, name: 'Floor Polishing', price: 1299, duration: '4 hours', rating: 4.7, reviews: 765 },
  { id: 504, categoryId: 5, name: 'Marble Finishing', price: 1999, duration: '5 hours', rating: 4.9, reviews: 234 },
  
  // Appliance Repairs
  { id: 601, categoryId: 6, name: 'AC Service & Repair', price: 499, duration: '1.5 hours', rating: 4.8, reviews: 2341 },
  { id: 602, categoryId: 6, name: 'Washing Machine Repair', price: 399, duration: '1 hour', rating: 4.7, reviews: 1876 },
  { id: 603, categoryId: 6, name: 'Refrigerator Repair', price: 599, duration: '2 hours', rating: 4.6, reviews: 1234 },
  { id: 604, categoryId: 6, name: 'Geyser Installation & Repair', price: 449, duration: '1.5 hours', rating: 4.8, reviews: 987 },
  
  // Pest Control
  { id: 701, categoryId: 7, name: 'Cockroach Control', price: 899, duration: '2 hours', rating: 4.7, reviews: 654 },
  { id: 702, categoryId: 7, name: 'Termite Treatment', price: 1999, duration: '3 hours', rating: 4.9, reviews: 432 },
  { id: 703, categoryId: 7, name: 'Rodent Management', price: 1299, duration: '2 hours', rating: 4.6, reviews: 321 },
  { id: 704, categoryId: 7, name: 'General Pest Control', price: 1499, duration: '2.5 hours', rating: 4.8, reviews: 543 },
  
  // Water Installation
  { id: 801, categoryId: 8, name: 'Water Purifier Installation', price: 799, duration: '1 hour', rating: 4.8, reviews: 876 },
  { id: 802, categoryId: 8, name: 'Water Tank Cleaning', price: 1299, duration: '3 hours', rating: 4.7, reviews: 543 },
  { id: 803, categoryId: 8, name: 'Pipe Installation', price: 999, duration: '2 hours', rating: 4.6, reviews: 432 },
  { id: 804, categoryId: 8, name: 'Water Motor Installation', price: 1499, duration: '2 hours', rating: 4.8, reviews: 234 }
];

export const professionals = [
  { id: 1, name: 'Rajesh Kumar', specialization: 'Plumbing', rating: 4.9, completedJobs: 1234, experience: '8 years', image: 'https://i.pravatar.cc/150?img=12' },
  { id: 2, name: 'Amit Sharma', specialization: 'Electrical', rating: 4.8, completedJobs: 987, experience: '6 years', image: 'https://i.pravatar.cc/150?img=13' },
  { id: 3, name: 'Vikram Singh', specialization: 'Painting', rating: 4.9, completedJobs: 543, experience: '10 years', image: 'https://i.pravatar.cc/150?img=33' },
  { id: 4, name: 'Suresh Patel', specialization: 'Carpenter', rating: 4.7, completedJobs: 876, experience: '7 years', image: 'https://i.pravatar.cc/150?img=14' },
  { id: 5, name: 'Ramesh Yadav', specialization: 'Appliance Repair', rating: 4.8, completedJobs: 1543, experience: '9 years', image: 'https://i.pravatar.cc/150?img=51' },
  { id: 6, name: 'Deepak Verma', specialization: 'Pest Control', rating: 4.6, completedJobs: 432, experience: '5 years', image: 'https://i.pravatar.cc/150?img=15' },
  { id: 7, name: 'Manoj Gupta', specialization: 'Tile & Flooring', rating: 4.9, completedJobs: 654, experience: '11 years', image: 'https://i.pravatar.cc/150?img=56' },
  { id: 8, name: 'Sanjay Joshi', specialization: 'Water Installation', rating: 4.7, completedJobs: 321, experience: '6 years', image: 'https://i.pravatar.cc/150?img=60' }
];

export const testimonials = [
  { id: 1, name: 'Priya Mehta', rating: 5, text: 'Excellent service! The plumber arrived on time and fixed the leak perfectly.', service: 'Plumbing', image: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Arjun Reddy', rating: 5, text: 'Very professional AC repair service. Highly recommended!', service: 'Appliance Repair', image: 'https://i.pravatar.cc/150?img=8' },
  { id: 3, name: 'Sneha Kapoor', rating: 4, text: 'Great painting work. My room looks beautiful now!', service: 'Painting', image: 'https://i.pravatar.cc/150?img=5' },
  { id: 4, name: 'Karan Malhotra', rating: 5, text: 'Quick and efficient electrical work. Very satisfied!', service: 'Electrical', image: 'https://i.pravatar.cc/150?img=68' }
];

export const howItWorks = [
  { step: 1, title: 'Select Service', description: 'Choose from our wide range of home services', icon: 'Search' },
  { step: 2, title: 'Book Appointment', description: 'Pick your preferred date and time slot', icon: 'Calendar' },
  { step: 3, title: 'Expert Arrives', description: 'Verified professional arrives at your doorstep', icon: 'UserCheck' },
  { step: 4, title: 'Job Complete', description: 'Quality service guaranteed with warranty', icon: 'CheckCircle2' }
];
