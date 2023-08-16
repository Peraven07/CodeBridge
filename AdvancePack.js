import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../components/Style/style.css";

const AdvancePack = () => {
    
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="card w-12">
                <div className="card w-auto">
                    <h1>Advance Pack</h1> 
                    <h5>{`✔`} Starter & Developer Added-On</h5>
                    <div className="block">
                        <img src="https://img.freepik.com/free-vector/flat-illustration-content-management-system_23-2148815112.jpg?w=1800&t=st=1692073957~exp=1692074557~hmac=6598d3fde312881f3b3482754e9da61fc7ebfc51eaeed84964eac5bac7dbce57" alt="Backend-image" className="h-20rem" style={{ float: "right" }}/>
                    </div>
                    <h3>Available Frontends</h3>
                    <h4>{`✔`}Angular</h4>
                    <p className="custom-font-size">Docker is a platform that allows you to develop, deploy, and run applications in containers. Containers are lightweight, portable, 
                    and isolated environments that package an application and its dependencies together. Docker provides a way to ensure consistency between development, 
                    testing, and production environments, making it easier to manage and deploy applications.</p>
                    <h4>{`✔`} React</h4>
                    <p className="custom-font-size">Postman is a collaboration platform for API development. It allows you to design, test, and document APIs quickly. 
                    Postman's user-friendly interface lets you make API requests, inspect responses, and automate repetitive tasks related to testing APIs.</p>
                </div>

                <div className="card w-auto">
                    <h3>Available Backends</h3>
                    <h4>{`✔`}Java Hipster</h4>
                    <p className="custom-font-size">JHipster is a powerful development platform that generates a complete and high-quality 
                    Java backend and Angular or React frontend. It's built on top of Spring Boot and various other popular Java technologies. JHipster provides tools to quickly set up the 
                    backend, including user authentication, database configuration, API endpoints, and more. It's particularly useful for modern web application development.</p>
                    <div className="block">
                        <img src="https://img.freepik.com/free-vector/linear-web-development-illustration_1257-357.jpg?size=626&ext=jpg&ga=GA1.2.1625328930.1692068568&semt=ais" alt="Backend-image" className="h-20rem" style={{ float: "right" }}/>
                    </div>
                    <h4>{`✔`}PHP Laravel</h4>
                    <p className="custom-font-size">Laravel is a widely used PHP framework known for its elegant syntax and feature-rich development environment. It provides tools for 
                    routing, authentication, database ORM (Eloquent), templating (Blade), and more. Laravel promotes rapid development and follows the Model-View-Controller (MVC) pattern.</p>
                    <h4>{`✔`}Python Django</h4>
                    <p className="custom-font-size">Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the "batteries-included" 
                    philosophy, offering built-in features for authentication, database ORM, template rendering, and more. Django follows the MVC pattern and is favored for its robustness and maintainability.</p>
                    <h4>{`✔`}C# .Net Core</h4>
                    <p className="custom-font-size">.NET Core is a cross-platform, open-source framework developed by Microsoft. It provides a versatile environment for building backend applications using C#.
                    ASP.NET Core is the web framework within the .NET Core ecosystem, supporting the development of modern web applications. It offers features like routing, middleware, authentication, and dependency injection.</p>
                    
                </div>
                <div className="card w-auto">
                    <h3>MLOPS Ready</h3>
                    <h4>{`✔`} Data Versioning</h4>
                    <p className="custom-font-size">Data versioning involves systematically managing changes to datasets used in the machine learning process. This is crucial for reproducibility, collaboration, and traceability. 
                    It ensures that the exact dataset version used for training a model can be identified and reused when needed. Data versioning tools help track changes, provide historical context, and allow data scientists to collaborate effectively.</p>
                    <h4>{`✔`} Process Pipeline</h4>
                    <p className="custom-font-size">A process pipeline, also known as a workflow pipeline, is a sequence of interconnected steps that outline the end-to-end process of creating, training, evaluating, deploying, and 
                    monitoring machine learning models. This pipeline automates various tasks, such as data preprocessing, feature engineering, model training, hyperparameter tuning, testing, deployment, and monitoring. 
                    A well-structured process pipeline ensures consistency, reduces errors, and facilitates collaboration across teams.</p>
                    <h4>{`✔`} Model Management</h4>
                    <p className="custom-font-size">Model management encompasses the entire lifecycle of machine learning models, from development to deployment and beyond. It involves versioning models, monitoring their 
                    performance in production, updating models with new data, and retiring obsolete models. Effective model management ensures that the most 
                    accurate and relevant models are serving the intended purpose while maintaining consistency and reliability.</p>
                </div>
                <div className="card w-auto">
                    <div className="block">
                        <img src="https://img.freepik.com/premium-vector/megaphone-label-with-need-help-megaphone-banner-web-design-vector-stock-illustration_100456-10840.jpg?size=626&ext=jpg&ga=GA1.2.1625328930.1692068568&semt=ais" alt="tech-support" className="h-15rem" style={{ float: "right" }}/>
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

export default connect(mapState, mapDispatch)(AdvancePack);
