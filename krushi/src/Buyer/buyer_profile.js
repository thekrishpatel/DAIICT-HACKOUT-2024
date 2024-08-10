import React, { useState } from 'react';
import './buyer_profile.css';

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


const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'First',
    lastName: 'Last',
    email: 'first.last@example.com',
    phone: '+1 (123) 456-7890',
    city: 'San Francisco',
    state: 'CA',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save profile data logic here
    setIsEditing(false);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setProfile({
      ...profile,
      state: selectedState,
      city: '', // Reset city when state changes
    });
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-icon">
            <i className="fas fa-user"></i>
          </div>
          {isEditing ? (
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="profile-name-input"
            />
          ) : (
            <div className="profile-name">{profile.firstName}</div>
          )}
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="profile-name-input"
            />
          ) : (
            <div className="profile-name">{profile.lastName}</div>
          )}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="profile-email-input"
            />
          ) : (
            <div className="profile-email">{profile.email}</div>
          )}
        </div>
        <div className="profile-details">
          <div className="detail-item">
            <i className="fas fa-phone-alt"></i>
            <div className="detail-text">
              <div className="detail-title">Phone</div>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="detail-value-input"
                />
              ) : (
                <div className="detail-value">{profile.phone}</div>
              )}
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-flag"></i>
            <div className="detail-text">
              <div className="detail-title">State</div>
              {isEditing ? (
                <div className="input-wrapper">
                  <select
                    name="state"
                    value={profile.state}
                    onChange={handleStateChange}
                    className="detail-value-input"
                  >
                    <option value="" disabled>Select State</option>
                    {Object.keys(stateCityMapping).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="detail-value">{profile.state}</div>
              )}
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="detail-text">
              <div className="detail-title">City</div>
              {isEditing ? (
                <div className="input-wrapper">
                  <select
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    className="detail-value-input"
                    disabled={!profile.state}
                  >
                    <option value="" disabled>Select City</option>
                    {stateCityMapping[profile.state]?.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="detail-value">{profile.city}</div>
              )}
            </div>
          </div>
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-button">Save</button>
              <button onClick={handleEditClick} className="cancel-button">Cancel</button>
            </>
          ) : (
            <button onClick={handleEditClick} className="edit-button">Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
