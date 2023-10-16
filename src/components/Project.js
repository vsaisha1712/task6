import "../css/Project.css";
import sentiment from "../images/sentiment.jpeg";
import { useState } from "react";
const Project = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      image: sentiment,
      lang1: "Python",
      title: "DL Project",
      description:
        "Created a model using bidirectional LSTM that does sentiment analysis on a dataset of tweets regarding covid-19",
      project: "https://colab.research.google.com/drive/1bvZDQvRO7dV57S7ymgU0_z4gHlGj6onS?usp=sharing",
      github: "https://colab.research.google.com/drive/1bvZDQvRO7dV57S7ymgU0_z4gHlGj6onS?usp=sharing",
    },

  ]);
  return (
    <div className="project" id="project">
      <h2>Personal Projects</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="underline"></div>
      <div className="main ">
{/* projects */}
        <div className="projects">
          {project.map((details) => (
             <div className="project-box" key={details.id}>
             <div className="project-details">

               <div className="projects-left">
                 <img src={details.image} width="250px" />
                 <div className="languages">
                   <p>{details.lang1}</p>
                   <p>{details.lang2}</p>
                 </div>
               </div>

               <div className="projects-right">
                 <h3>{details.title}</h3>
                 <p>{details.description}</p>
               </div>

             </div>
             <div className="project-links">
               <a href={details.github} target="_blank">
                 GitHub
               </a>
               <a href={details.project} target="_blank">
                 See project
               </a>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};


export default Project;