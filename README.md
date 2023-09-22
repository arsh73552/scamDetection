# Phishing Detection System Readme

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [System Architecture](#system-architecture)
4. [Deployment](#deployment)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## 1. Introduction

Welcome to the Phishing Detection System readme! This system is a robust machine learning-based solution designed to detect phishing websites. It utilizes a variety of features and machine learning techniques to determine the authenticity of websites. This document will provide you with all the necessary information to understand, deploy, and use the system effectively.

## 2. Features

- **Machine Learning-Based Detection**: The system employs a neural network model built using PyTorch, which has achieved an impressive accuracy rate of 87% over a dataset comprising 100,000 samples.

- **AWS Deployment**: The system is deployed on AWS using Elastic Beanstalk, ensuring scalability and high availability with 1 EC2 instance.

- **Diverse Set of Features**: To ascertain the authenticity of websites, the system leverages a diverse set of features, including:
  - HTTPS availability
  - SSL usage
  - Website active duration
  - Presence of redirect links
  - And more than 13 other relevant attributes.

- **Proxy Service**: To avoid CORS origin issues and provide a seamless user experience, a Proxy Service is integrated into the system.

- **Express.js and Node.js**: The frontend-backend components are seamlessly connected using the Express.js framework for the frontend and Node.js for the backend.

## 3. System Architecture

![System Architecture](system_architecture.png)

The system architecture is designed to provide a scalable and high-availability solution for phishing detection. It consists of the following components:

- **User Interface**: The frontend of the system is developed using HTML, CSS, and JavaScript.

- **Express.js Server**: This server handles user requests and communicates with the backend.

- **Neural Network Model**: The heart of the system, built using PyTorch, analyzes website features to determine if a website is potentially phishing.

- **Node.js Backend**: The backend of the system manages data processing and communication with the neural network model.

- **AWS Elastic Beanstalk**: The system is deployed on AWS using Elastic Beanstalk for easy scalability and high availability.

## 4. Deployment

To deploy the Phishing Detection System, follow these steps:

1. Clone the repository to your local environment.

2. Set up an AWS account if you don't already have one.

3. Install the AWS Elastic Beanstalk CLI and configure it with your AWS credentials.

4. Create an Elastic Beanstalk environment and deploy your application.

5. Ensure that all necessary dependencies are installed, and the machine learning model is properly trained.

6. Update the necessary configurations, such as API endpoints and feature selection.

7. Launch the system on the Elastic Beanstalk environment.

## 5. Usage

To use the Phishing Detection System, follow these steps:

1. Access the user interface through the deployed website.

2. Enter the URL of the website you want to check for phishing.

3. Click the "Check" button to initiate the detection process.

4. The system will provide a response indicating whether the website is potentially phishing or not.

## 6. License

This Phishing Detection System is open-source and licensed under the [MIT License](LICENSE.md).

