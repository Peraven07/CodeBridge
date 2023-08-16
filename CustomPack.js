import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../components/Style/style.css";

const CustomPack = () => {
    
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="card w-12">
                <div className="card w-auto">
                    <div className="block">
                        <img src="https://t3.ftcdn.net/jpg/02/25/46/80/240_F_225468022_Ho9beWFzYMHvBX8GT1SJfgmw78VNyAe6.jpg" alt="welcome image" className="h-15rem" style={{ float: "right"}}/>
                    </div>
                    <h1>Custom Package</h1> 
                    <h5>{`✔`} Advance Package Added-On</h5>
                    <h3>Deep Learning</h3>
                    <h4>{`✔`}Computer Vision</h4>
                    <p className="custom-font-size">Computer Vision is a field of AI focused on enabling machines to interpret and understand visual information 
                    from the world. It involves developing algorithms and models that allow computers to process, analyze, and make decisions based on images and videos. 
                    Computer Vision has led to advancements in areas such as image recognition, object detection, facial recognition, image generation, and more. It finds applications in industries like healthcare, automotive, entertainment, agriculture, surveillance, and robotics. Key techniques include Convolutional Neural Networks (CNNs), image segmentation, feature extraction, and deep learning.</p>
                    <h4>{`✔`}Large Language Models</h4>
                    <p className="custom-font-size">Large Language Models (LLMs) are a class of artificial intelligence models that specialize in understanding and generating human language. These models are designed to handle natural language processing tasks, such as language translation, text summarization, sentiment analysis, chatbots, and more. LLMs are built on deep learning architectures, 
                    particularly Transformers. They leverage massive amounts of text data for pretraining and fine-tuning, resulting in impressive language comprehension and generation capabilities. Prominent examples include GPT-3 (Generative Pre-trained Transformer 3) and BERT (Bidirectional Encoder Representations from Transformers).</p>
                    
                </div>
                <div className="card w-auto">
                    <h3>Post Production</h3>
                    <h4>{`✔`}Big Data</h4>
                    <p className="custom-font-size">Big Data refers to the management and analysis of large and complex datasets that traditional data processing methods can't handle effectively. Big Data technologies enable organizations to store, process, and derive insights from massive amounts of structured and unstructured data.</p>
                    <h4>{`✔`}Data Warehousing</h4>
                    <p className="custom-font-size">Data warehousing involves collecting, storing, and managing data from various sources to support business intelligence and decision-making. A data warehouse organizes data for analysis and reporting, providing a consolidated view of information across an organization.</p>
                    <h4>{`✔`}Block Chain</h4>
                    <p className="custom-font-size">Blockchain is a distributed and secure digital ledger technology that enables the recording of transactions in a transparent and tamper-resistant manner. It's often associated with cryptocurrencies like Bitcoin, but its applications extend to various industries, including supply chain management, financial services, and more.</p>
                    <h4>{`✔`}HA & DR</h4>
                    <p className="custom-font-size">HA refers to designing systems or architectures to ensure minimal downtime and continuous availability even in the face of hardware or software failures. DR involves having plans and processes in place to recover systems and data after a catastrophic event like natural disasters or cyberattacks.</p>
                    <h4>{`✔`}Firewalling</h4>
                    <p className="custom-font-size">Firewalls are security devices or software that act as barriers between a trusted internal network and untrusted external networks (like the internet). They control and monitor incoming and outgoing network traffic to prevent unauthorized access and potential threats.</p>
                    
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

export default connect(mapState, mapDispatch)(CustomPack);
