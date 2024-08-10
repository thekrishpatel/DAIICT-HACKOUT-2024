import React, { useState,useEffect } from 'react';
import './FarmerSignUp.css';

const stateCityMapping = {
    AndhraPradesh: [
        'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool',
        'Tirupati', 'Rajahmundry', 'Kakinada', 'Anantapur', 'Eluru'
    ],
    ArunachalPradesh: [
        'Itanagar', 'Tawang', 'Ziro', 'Pasighat', 'Bomdila',
        'Aalo', 'Naharlagun', 'Tezu', 'Roing', 'Changlang'
    ],
    Assam: [
        'Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Nagaon',
        'Tinsukia', 'Tezpur', 'Bongaigaon', 'Karimganj', 'Sivasagar'
    ],
    Bihar: [
        'Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga',
        'Purnia', 'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar'
    ],
    Chhattisgarh: [
        'Raipur', 'Bhilai', 'Korba', 'Bilaspur', 'Durg',
        'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Dhamtari'
    ],
    Goa: [
        'Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda',
        'Bicholim', 'Curchorem', 'Valpoi', 'Mormugao', 'Canacona'
    ],
    Gujarat: [
        'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar',
        'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Nadiad'
    ],
    Haryana: [
        'Gurgaon', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar',
        'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula'
    ],
    HimachalPradesh: [
        'Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi',
        'Kullu', 'Una', 'Hamirpur', 'Bilaspur', 'Chamba'
    ],
    Jharkhand: [
        'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh',
        'Deoghar', 'Giridih', 'Ramgarh', 'Phusro', 'Medininagar'
    ],
    Karnataka: [
        'Bengaluru', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum',
        'Davangere', 'Bellary', 'Bijapur', 'Shimoga', 'Tumkur'
    ],
    Kerala: [
        'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam',
        'Alappuzha', 'Palakkad', 'Kannur', 'Kottayam', 'Malappuram'
    ],
    MadhyaPradesh: [
        'Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain',
        'Sagar', 'Satna', 'Rewa', 'Ratlam', 'Singrauli'
    ],
    Maharashtra: [
        'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad',
        'Solapur', 'Amravati', 'Kolhapur', 'Akola', 'Latur'
    ],
    Manipur: [
        'Imphal', 'Bishnupur', 'Thoubal', 'Churachandpur', 'Ukhrul',
        'Kakching', 'Senapati', 'Tamenglong', 'Chandel', 'Jiribam'
    ],
    Meghalaya: [
        'Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Baghmara',
        'Williamnagar', 'Mawkyrwat', 'Resubelpara', 'Ampati', 'Sohra'
    ],
    Mizoram: [
        'Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Lawngtlai',
        'Kolasib', 'Mamit', 'Saiha', 'Saitual', 'Khawzawl'
    ],
    Nagaland: [
        'Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Zunheboto',
        'Tuensang', 'Mon', 'Phek', 'Kiphire', 'Longleng'
    ],
    Odisha: [
        'Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Berhampur',
        'Puri', 'Balasore', 'Baripada', 'Bhadrak', 'Jharsuguda'
    ],
    Punjab: [
        'Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala',
        'Bathinda', 'Hoshiarpur', 'Mohali', 'Pathankot', 'Moga'
    ],
    Rajasthan: [
        'Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner',
        'Ajmer', 'Alwar', 'Bhilwara', 'Sikar', 'Bharatpur'
    ],
    Sikkim: [
        'Gangtok', 'Geyzing', 'Namchi', 'Mangan', 'Rangpo',
        'Jorethang', 'Singtam', 'Pakyong', 'Singtam', 'Soreng'
    ],
    TamilNadu: [
        'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem',
        'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Nagercoil'
    ],
    Telangana: [
        'Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar',
        'Ramagundam', 'Mahbubnagar', 'Adilabad', 'Siddipet', 'Nalgonda'
    ],
    Tripura: [
        'Agartala', 'Udaipur', 'Kailashahar', 'Dharmanagar', 'Belonia',
        'Khowai', 'Amarpur', 'Sabroom', 'Sonamura', 'Ambassa'
    ],
    UttarPradesh: [
        'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut',
        'Allahabad', 'Ghaziabad', 'Bareilly', 'Aligarh', 'Moradabad'
    ],
    Uttarakhand: [
        'Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Nainital',
        'Rudrapur', 'Kashipur', 'Rishikesh', 'Pithoragarh', 'Almora'
    ],
    WestBengal: [
        'Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Durgapur',
        'Asansol', 'Kharagpur', 'Haldia', 'Bardhaman', 'Malda'
    ],
    AndamanAndNicobarIslands: [
        'Port Blair', 'Diglipur', 'Rangat', 'Mayabunder', 'Nicobar',
        'Bombooflat', 'Garacharma', 'Wimberlygunj', 'Swaraj Dweep', 'Havelock'
    ],
    Chandigarh: [
        'Chandigarh'
    ],
    DadraAndNagarHaveliAndDamanAndDiu: [
        'Daman', 'Diu', 'Silvassa', 'Amli', 'Khanvel'
    ],
    Lakshadweep: [
        'Kavaratti', 'Agatti', 'Amini', 'Minicoy', 'Andrott',
        'Kalpeni', 'Kadmat', 'Kiltan', 'Chetlat', 'Bitra'
    ],
    Delhi: [
        'New Delhi', 'Central Delhi', 'East Delhi', 'North Delhi',
        'South Delhi', 'West Delhi', 'Shahdara', 'Rohini', 'Dwarka', 'Narela'
    ],
    Puducherry: [
        'Puducherry', 'Oulgaret', 'Karaikal', 'Mahe', 'Yanam'
    ]
};


function FarmerSignUp() {
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const checkFormValidity = () => {
            setIsFormValid(
                firstname &&
                lastname &&
                email &&
                contactNumber &&
                password &&
                confirmPassword &&
                city &&
                state &&
                password === confirmPassword
            );
        };
        checkFormValidity();
    }, [firstname, lastname, email, contactNumber, password, confirmPassword, city, state]);

    const handleStateChange = (e) => {
        setState(e.target.value);
        setCity(''); // Reset city when state changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Farmer Details:', { firstname, lastname, email, contactNumber, password, city, state });
    };

    return (
        <div className="MainSignup">
            <div className="form-box">
                <h2>KRUSHI</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-box">
                            <span className="icon">
                                {/* SVG for First Name */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                                    <path d="M12 14a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v3a4 4 0 0 1-4 4z" />
                                    <path d="M4 22h16a2 2 0 0 0 2-2v-1a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v1a2 2 0 0 0 2 2z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                                placeholder=" "
                            />
                            <label>First Name</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                {/* SVG for Last Name */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                                    <path d="M12 14a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v3a4 4 0 0 1-4 4z" />
                                    <path d="M4 22h16a2 2 0 0 0 2-2v-1a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v1a2 2 0 0 0 2 2z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                                placeholder=" "
                            />
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-box">
                            <span className="icon">
                                {/* SVG for Email */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
                                </svg>
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder=" "
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                {/* SVG for Phone Number */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <input
                                type="tel"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                required
                                placeholder=" "
                            />
                            <label>Contact Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-box">
                            <span className="icon">
                                {/* SVG for Password */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                                </svg>
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder=" "
                            />
                            <label>Password</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                {/* SVG for Confirm Password */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                                </svg>
                            </span>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder=" "
                            />
                            <label>Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-box">
                            <select
                                value={state}
                                onChange={handleStateChange}
                                required
                            >
                                <option value="" disabled>Select State</option>
                                {Object.keys(stateCityMapping).map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                disabled={!state}
                            >
                                <option value="" disabled>Select City</option>
                                {stateCityMapping[state]?.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button className="btn" type="submit" disabled={!isFormValid}>
                        Sign Up
                    </button>
                    <div className="login-register">
                        <p>Do you have an account? <a href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FarmerSignUp;
