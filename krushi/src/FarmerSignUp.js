import React, { useState } from 'react';
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
    // Add more states and cities as required
};


function FarmerSignUp() {
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleStateChange = (e) => {
        setState(e.target.value);
        setCity(''); // Reset city when state changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Farmer Details:', { email, contactNumber, password, city, state });
    };

    return (
        <div className="farmer-signup-container">
            <h2>KRUSHI</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Contact Number</label>
                    <input 
                        type="tel" 
                        value={contactNumber} 
                        onChange={(e) => setContactNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>State</label>
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
                <div className="input-group">
                    <label>City</label>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default FarmerSignUp;
