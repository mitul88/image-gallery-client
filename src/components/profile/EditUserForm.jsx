import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// user name
// user Phone
// dob
// profession
// bio
// interest

function EditUserForm({defaultValue}) {
    const [dob, setDob] = useState(new Date());
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profession, setProfession] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="p-10 w-96 ">
            <h3 className="text-xl text-gray-600 font-semibold text-center mb-5">Update Your Profile</h3>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="user-name" className="text-gray-600 font-semibold">Your name</label>
                    <input 
                        id="user-name" 
                        type="text" 
                        name="user-name" 
                        defaultValue={defaultValue}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 mb-3 text-gray-600 font-semibold"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="user-phone" className="text-gray-600 font-semibold">Your phone</label>
                    <input 
                        id="user-phone" 
                        type="text" 
                        name="user-phone" 
                        defaultValue={defaultValue}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 mb-3 text-gray-600 font-semibold"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-gray-600 font-semibold">Your date of birth</label>
                    <DatePicker 
                        className="border border-gray-300 px-3 py-1 w-full rounded mb-3 text-gray-600 font-semibold" 
                        selected={dob} 
                        onChange={(date) => setDob(date)} 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="profession" className="text-gray-600 font-semibold">Your profession</label>
                    <input 
                        id="profession" 
                        type="text" name="profession" 
                        defaultValue={defaultValue}
                        onChange={(e) => setProfession(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 mb-3 text-gray-600 font-semibold"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="bio" className="text-gray-600 font-semibold">Your bio</label>
                    <textarea 
                        id="bio" 
                        type="text" 
                        name="bio" 
                        defaultValue={defaultValue}
                        onChange={(e) => setBio(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 mb-3 text-gray-600 font-semibold"
                    />
                </div>
                <button className="px-3 py-1 bg-green-200 text-green-600 rounded" type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditUserForm