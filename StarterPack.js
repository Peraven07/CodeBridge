import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../components/Style/style.css";

const StarterPack = () => {
    
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="card w-12">
                <div className="card w-auto">
                    <div className="block">
                        <img src="https://www.irecruit-software.com/wp-content/uploads/2014/10/free-trial-300x285.png" alt="welcome image" className="h-15rem" style={{ float: "right" }}/>
                    </div>
                    <h1>Starter Pack</h1>
                    <h3>Front-End Development</h3>
                    <p className="custom-font-size">Front-end development is concerned with the user-interface aspect of a website. 
                    Front-end developers use programming languages, design skills, and other technologies to 
                    guarantee consumers can easily interact with and navigate websites. 
                    They also develop websites with drop-down menus, layouts, and designs.Front-end developers create websites using
                    computer programming languages such as JavaScript, HyperText Markup Language (HTML), and Cascading Style Sheets (CSS).
                    At the same time, developers must be proficient in the use of frameworks and libraries such as PrimeReact, jQuery, Bootstrap, AngularJS, and EmberJS. 
                    Frameworks ensure that content looks the same on all devices, whereas libraries condense code into smaller, more time-saving packages. </p>
                    <h4>{`✔`} React 17 with PrimeReact</h4>
                    <p className="custom-font-size">React 17 enables gradual React upgrades. 
                    When you upgrade from React 15 to 16 (or, this time, from React 16 to 17), 
                    you would usually upgrade your whole app at once. This works well for many apps.PrimeReact is similar to CSS in that it can be used to style user interfaces. 
                    In contrast to CSS, PrimeReact offers a pre-defined style for each component that can be used in our React application.</p>

                </div>
                <div className="card w-auto">
                    <h3>Back-End Development</h3>
                    <p className="custom-font-size">Back-end development is an important part of website development because back-ends include databases, authentication and authorization features, 
                    application programming interfaces (APIs), and all the other components that, when combined with a front-end, allow users to view and interact with applications in their browser.</p>
                    <h4>{`✔`} Node.js Express</h4>
                    <p className="custom-font-size">Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality 
                    with middleware and routing. It adds helpful utilities to Node.js’s HTTP objects and facilitates the rendering of dynamic HTTP objects.
                    Express is a part of the MERN stack, a full-stack JavaScript solution used in building fast, robust, and maintainable production web applications.</p>
                    <h4>{`✔`} Feather.js</h4>
                    <p className="custom-font-size">Feathers is a full-stack web framework for writing TypeScript or JavaScript APIs and real-time apps. Feathers can operate with any frontend technology, 
                        including React, VueJS, Angular, React Native, Android, or iOS, and communicate with any backend technology. 
                        It also supports numerous databases out of the box.</p>
                </div>
                <div className="card w-auto">
                <h3>Data & File Storage</h3>
                    <h4>{`✔`}MongoDb</h4>
                    <p className="custom-font-size">MongoDB's storage engine is the major component in charge of data management. MongoDB offers a number of storage engines from which to choose the best one for your application.</p>
                    <h4>{`✔`}AWS S3 Storage</h4>
                    <p className="custom-font-size"><a href='https://aws.amazon.com/pm/serv-s3/?trk=9f61e2df-2989-46d9-8520-f424b3c8e21d&sc_channel=ps&s_kwcid=AL!4422!10!71537202903221!71537723517889&ef_id=6a768a54f8831586cd05ee814edfbb61:G:s' target='_blank'>Amazon Web Services(AWS) S3</a> is a service that provides industry-leading scalability, data availability, security, and performance. Data lakes, websites, cloud-native applications, backups, archives, machine learning, and analytics all have the ability to store and safeguard any amount of data. 
                    AWS S3 is built to last and saves data for millions of customers around the world.</p>
                </div>
                <div className="card w-auto">
                    <div className="block">
                        <img src="https://img.freepik.com/free-icon/illustrator_318-855758.jpg?t=st=1692073192~exp=1692073792~hmac=1bc15fc77418081f4abcf4d233febfd888980bc3d527403e6030595149e29853" alt="AI-Gen" className="h-15rem" style={{ float: "right" }}/>
                    </div>
                    <h3>Ai Code Generator</h3>
                    <h4>{`✔`} Data Models</h4>
                    <p className="custom-font-size">Data models define how your application's data is structured and stored. This can include the various entities and relationships between them. 
                    For example, if you were building a blogging platform, your data models might include entities like "User," "Post," and "Comment," along with the attributes and relationships associated with each.</p>
                    <h4>{`✔`} CRUD Ready</h4>
                    <p className="custom-font-size">CRUD stands for Create, Read, Update, and Delete, which are the four basic operations you can perform on data. Having your application "CRUD ready" means 
                    that you've implemented the necessary functionality to perform these operations on your data models. For instance, for a "Post" data model, you'd need to be able to create new posts, retrieve existing posts, update posts, and delete posts.</p>
                    <div className="block">
                        <img src="https://img.freepik.com/free-icon/id-card_318-571091.jpg?t=st=1692073314~exp=1692073914~hmac=0e44489701d9998c839e319cb6a1b3f15c4f9d276c0be37191a9938911680aca" alt="Authen" className="h-12rem" style={{ float: "right" }}/>
                    </div>
                    <h4>{`✔`} Authentication JWT</h4>
                    <p className="custom-font-size">JWT stands for JSON Web Token, which is a widely used method for securely transmitting information between parties as a JSON object. Authentication JWT refers to 
                    implementing a mechanism where users have to authenticate themselves (usually by providing a username and password) to obtain a JWT. This token is then sent with each subsequent request to the server to prove the user's identity and access rights.</p>
                    <h4>{`✔`} Restful API Ready</h4>
                    <p className="custom-font-size">A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It's based on a set of principles, including using HTTP methods (GET, POST, PUT, DELETE) for operations on resources, and 
                    using URIs to identify these resources. Having your application "RESTful API ready" means that you have designed your API following these principles, making it easy for other applications or services to interact with yours.</p>
                    <h4>{`✔`} Github Public</h4>
                    <p className="custom-font-size">GitHub is a platform for version control and collaborative software development. When you mention "GitHub Public," it likely means that your project's source code repository is hosted on GitHub 
                    and is publicly accessible. This allows other developers to view your code, collaborate, contribute, and even use your project as a reference or as a dependency in their projects.</p>
                </div>
                <div className="card w-auto">
                    <div className="block">
                        <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?size=626&ext=jpg&ga=GA1.2.1625328930.1692068568&semt=ais" alt="tech-support" className="h-15rem" style={{ float: "right" }}/>
                    </div>
                    <h3>Managed Services</h3>
                    <h4>{`✖️`} Technical support</h4>
                    <h4>{`✖️`} Issue Resolution</h4>
                    <h4>{`✖️`} Feedback and Improvement</h4>
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

export default connect(mapState, mapDispatch)(StarterPack);
