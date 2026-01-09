// 1. Job Card ka structure (Jo Home page par dikhta hai)
export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: 'Job' | 'Internship';
}

// 2. Application Form ka structure (Jo user submit karta hai)
export interface JobApplication {
    fullName: string;
    address: string;
    experience: string;
    resumeLink: string;
    linkedin: string;
    jobTitle?: string; // Optional: Kaunsi job ke liye apply kiya
    company?: string;  // Optional: Kaunsi company mein apply kiya
    jobId?: number;    // Optional: Job ki ID
}

// 3. User Profile ka structure (Login ke baad)
export interface UserProfile {
    username: string;
    isLoggedIn: boolean;
}