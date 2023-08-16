import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../components/Style/style.css";

const DevPack = () => {
    
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="card w-12">
                <div className="block">
                        <img src="https://www.abraquest.co.uk/media/1067/most-popular.gif?anchor=center&mode=crop&width=800&height=600&rnd=132546149380000000" alt="welcome image" className="h-15rem" style={{ float: "right" }}/>
                </div>
                <div className="card w-auto">
                    <h1>Developer Pack</h1> 
                    <h5>{`✔`} Added-on Starter pack</h5>
                    <h3>Testing Tools</h3>
                    <h4>{`✔`}Dosker Ready</h4>
                    <p className="custom-font-size">Docker is a platform that allows you to develop, deploy, and run applications in containers. Containers are lightweight, portable, 
                    and isolated environments that package an application and its dependencies together. Docker provides a way to ensure consistency between development, 
                    testing, and production environments, making it easier to manage and deploy applications.</p>
                    <h4>{`✔`} Postman Ready</h4>
                    <p className="custom-font-size">Postman is a collaboration platform for API development. It allows you to design, test, and document APIs quickly. 
                    Postman's user-friendly interface lets you make API requests, inspect responses, and automate repetitive tasks related to testing APIs.</p>
                    <h4>{`✔`} Faker Data</h4>
                    <p className="custom-font-size">Faker is a library or tool that generates fake or placeholder data for testing and development purposes. It's 
                    useful when you need realistic-looking data but don't want to use real data for privacy or security reasons. Faker can generate various 
                    types of data, such as names, addresses, phone numbers, dates, and more.</p>

                </div>
                <div className="card w-auto">
                    <h3>Cont. Deployment</h3>
                    <h4>{`✔`}Github Private</h4>
                    <p className="custom-font-size">
                    GitHub allows you to create private repositories, which are repositories that are not accessible to the public. Only authorized collaborators have access to the code and other resources within a private repository. 
                    This is particularly useful when you're working on proprietary or sensitive projects that you don't want to be visible to the broader GitHub community. 
                    Private repositories are often used for internal projects, commercial software, or any codebases that require restricted access.
                    <div className="block">
                        <img src="https://img.freepik.com/free-icon/user_318-451189.jpg?t=st=1692072465~exp=1692073065~hmac=fbd4ab7de025fe33e259dc3bc7e539ebd7a557d606f1071aee4fe45d584ffb67" alt="welcome image" className="h-10rem" style={{ float: "right" }}/>
                    </div>
                    <p className="custom-font-bold">Key features of GitHub Private repositories include:</p>
                    <p className="custom-font-size">{`=>`}Code privacy: Only approved collaborators can view, clone, or contribute to the repository.</p>
                    <p className="custom-font-size">{`=>`}Collaboration: Team members can work together on code without exposing it to the public.</p>
                    <p className="custom-font-size">{`=>`}Security: Sensitive information such as API keys and credentials can be stored securely.</p>
                    </p>
                    <h3>{`✔`}Github Actions</h3>
                    <p className="custom-font-size">
                    GitHub Actions is a powerful automation and CI/CD (Continuous Integration/Continuous Deployment) platform provided by GitHub. It allows you to automate various tasks and workflows 
                    in your software development process. With GitHub Actions, you can create custom workflows that run automatically in response to events such as code pushes, pull requests, and more.
                    GitHub Actions is a flexible tool that empowers you to streamline your development process by automating repetitive tasks, testing your code, and ensuring a smooth deployment process.
                    <div className="block">
                        <img src="https://img.freepik.com/free-icon/algorithm_318-692712.jpg?t=st=1692072687~exp=1692073287~hmac=caa7ef043cd76bb020765d1deb111b8a0bee8a753702537fdbee608743fd33d1" alt="welcome image" className="h-15rem" style={{ float: "right" }}/>
                    </div>
                    <p className="custom-font-bold">Key features of GitHub Actions include:</p>
                    <p className="custom-font-size">{`=>`}Workflows: Define sequences of steps that are executed automatically based on events.</p>
                    <p className="custom-font-size">{`=>`}CI/CD: Automate testing, building, and deploying your code with ease.</p>
                    <p className="custom-font-size">{`=>`}Customization: Create workflows using YAML configuration files and customize actions to suit your project's needs.</p>
                    <p className="custom-font-size">{`=>`}Marketplace: Access a wide range of pre-built actions from the GitHub Marketplace to perform common tasks.</p>
                    <p className="custom-font-size">{`=>`}Integration: GitHub Actions integrates seamlessly with your repositories and provides visibility into workflow runs and statuses.</p>
                    </p>
                </div>
                <div className="card w-auto">
                <h3>Hosting Available</h3>
                    <h4>{`✔`}Publis Cloud</h4>
                    <p className="custom-font-size">Public cloud hosting involves utilizing infrastructure and services provided by third-party cloud providers, such as Amazon Web Services (AWS), 
                    Microsoft Azure, Google Cloud Platform (GCP), and others. With public cloud hosting, you can deploy your applications on virtual machines, managed services, and other resources 
                    offered by the cloud provider. This option offers scalability, flexibility, and ease of management, as the cloud provider takes care of the underlying infrastructure.</p>
                    <h4>{`✔`}Docker</h4>
                    <p className="custom-font-size">Docker allows you to package applications and their dependencies into containers, providing a consistent environment for your applications to 
                    run regardless of the underlying system. These containers can be deployed on various platforms, including local development environments, cloud providers, and on-premises servers. 
                    Docker containers are lightweight and portable, making application deployment more efficient.</p>
                    <h4>{`✔`}On Premise</h4>
                    <p className="custom-font-size">On-premise hosting refers to deploying applications or services on hardware that you manage and maintain within your organization's physical infrastructure. 
                    This approach provides direct control over hardware, security policies, and network configurations. However, it also requires more management and maintenance compared to cloud solutions.</p>
                </div>
                <div className="card w-auto">
                    <div className="block">
                        <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?size=626&ext=jpg&ga=GA1.2.1625328930.1692068568&semt=ais" alt="tech-support" className="h-15rem" style={{ float: "right" }}/>
                    </div>
                    <h3>Managed Services</h3>
                    <h4>{`✔`} Technical support</h4>
                    <h4>{`✔`} Issue Resolution</h4>
                    <h4>{`✔`} Feedback and Improvement</h4>
                </div>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(DevPack);
