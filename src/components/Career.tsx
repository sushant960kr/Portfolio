import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Architect</h4>
                <h5>Encryptix</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              At Encryptix, I contributed as a Cloud Engineer, focusing on
              designing and deploying secure, scalable, and highly available
              cloud infrastructure. I automated deployments using Terraform 
              and Ansible, containerized microservices with Docker, and
              managed orchestration using Kubernetes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>Codsoft</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              As a Python Developer at CodSoft, I developed efficient and
              modular code for real-world applications, focusing on automation,
              data handling, and backend logic. I worked on creating RESTful APIs, 
              optimized data processing tasks, and contributed to building clean, 
              maintainable codebases. .
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
