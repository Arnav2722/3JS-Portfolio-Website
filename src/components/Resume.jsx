// // Make the Resume page
// import React from "react";
// // import { Tilt } from "react-tilt";
// // import { motion } from "framer-motion";

// // import { styles } from "../styles";
// // import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// // import { fadeIn, textVariant } from "../utils/motion";

// // const ServiceCard = ({ index, title, icon }) => (
// //     <Tilt
// //         options={{
// //             max: 45,
// //             scale: 1,
// //             speed: 450,
// //         }}
// //         className="xs:w-[250px] w-full"
// //     >
// //         <motion.div
// //             variants={fadeIn("right", "spring", index * 0.5, 0.75)}
// //             className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
// //         >
// //             <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
// //                 <img
// //                     src={icon}
// //                     alt="web-development"
// //                     className="w-16 h-16 object-contain"
// //                 />

// //                 <h3 className="text-white text-[20px] font-bold text-center">
// //                     {title}
// //                 </h3>
// //             </div>
// //         </motion.div>
// //     </Tilt>
// // );

// // const About = () => {
// //     return (
// //         <>
// //             <motion.div variants={textVariant()}>
// //                 <p className={styles.sectionSubText}>Resume</p>
// //             </motion.div>

// //             <motion.button variant></motion.button>

// //             <div className="mt-20 flex flex-wrap gap-10">
// //                 {services.map((service, index) => (
// //                     <ServiceCard key={service.title} index={index} {...service} />
// //                 ))}
// //             </div>
// //         </>
// //     );
// // };

// // import React, { Component } from 'react';
// // import Pdf from '..src/assets/Resume.pdf';

// // class Resume extends Component {

// //     render() {

// //         return (
// //             <div className="Resume">
// //                 <a href={Pdf} target="_blank">Download Resume</a>
// //             </div>
// //         );

// //     }
// // }

// // export default SectionWrapper(Resume, "resume");


// import React, { Component } from 'react';

// class Resume extends Component {

//     render() {

//         return (
//             <div className="App">
//                 <a href={require('./src/assets/Resume.pdf')} target="_blank">Download Pdf</a>
//             </div>
//         );
//     }
// }

// export default Resume;