// import React, { useState } from "react";

// const TeamDropdown = ({ teamMembers }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="team-dropdown">
//             <button className="dropbtn" onClick={toggleDropdown}>
//                 Team Members
//             </button>
//             {isOpen && (
//                 <div className="dropdown-content">
//                     {teamMembers.map((member, index) => (
//                         <a key={index} href={member.profileLink}>
//                             {member.name}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TeamDropdown;
