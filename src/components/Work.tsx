import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "PHP Web App Deployment with DevOps and Cloud Practices",
      tools: "Linux, AWS, Kubernetes, Jenkins",
      category: "Develop and Deploy it on a Server",
      description:
        "Engineered a robust CI/CD pipeline using **Jenkins** to automate the deployment of a **PHP** web application. The infrastructure was provisioned and managed on **AWS** using **Kubernetes**, demonstrating expertise in cloud-native deployments and **Linux** server management.",
      image: "/images/1.webp",
      source: "https://github.com/sushant960kr/php-project.git",
    },
    {
      id: 2,
      title: "Weather App",
      tools: "HTML, CSS, JS, API",
      category: "App Development with the use of open source API",
      description:
        "Developed a responsive weather application utilizing **HTML**, **CSS**, and vanilla **JavaScript**. This project fetches real-time weather data by integrating with the OpenWeatherMap **API**, showcasing proficiency in front-end development and API consumption.",
      image: "/images/2.webp",
      demo: "https://weather-m1.netlify.app/",
      
    },
    {
      id: 3,
      title: "AWS Infrastructure Automation with Terraform",
      tools: "Code Commit, Code Pipeline, Docker, SSM, Terraform",
      category: "Create Infrastructure and Deploy it on same environment",
      description:
        "Automated the provisioning of **AWS** cloud infrastructure using **Terraform**, demonstrating Infrastructure as Code (IaC) principles. The project includes deploying a **Dockerized** application via an **AWS CI/CD pipeline** (using **CodeCommit** and **CodePipeline**), with secure configuration management handled by **SSM**.",
      image: "/images/3.webp",
     // Make sure this is a real link if you want it to work
      source: "https://github.com/sushant960kr/AWSDevOpsProject.git",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools used </h4>
                <p>{project.tools}</p>
                {/* Project description now explains the project and integrates tools */}
                <p>{project.description}</p>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-button"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-button"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;