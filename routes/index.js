var express = require('express');
var router = express.Router();

const listItems = [
  {
    'id': "1",
    'title': "DevOps",
    'description': "Software development and IT teams can automate and integrate their processes with the help of a set of practices, tools, and cultural principles called \"DevOps.\" It places a strong emphasis on technology automation, cross-team communication, and team empowerment.",
    'reference': "[1]Atlassian, 'What is DevOps? | Atlassian,' Atlassian, 2016. https://www.atlassian.com/devops",
  },
  {
    'id': "2",
    'title': "Docker",
    'description': "An open platform for creating, distributing, and running applications is Docker. You can divide your applications from your infrastructure with the help of Docker, allowing for quick software delivery.",
    'reference': "[2]Docker, 'Docker overview,' Docker Documentation, Apr. 09, 2020. https://docs.docker.com/get-started/overview/",
  },
  {
    'id': "3",
    'title': "Kubernetes",
    'description': "K8s, also referred to as Kubernetes, is an open-source platform for managing, scaling, and automating the deployment of containerized applications.",
    'reference': "[3]Kubernetes, 'Production-Grade Container Orchestration,' Kubernetes.io, 2019. https://kubernetes.io/",
  },
  {
    'id': "4",
    'title': "AWS",
    'description': "The most complete and widely used cloud in the world, Amazon Web Services (AWS), provides over 200 fully functional services from data centers around the world.",
    'reference': "[4]Amazon Web Services, 'What Is AWS? - Amazon Web Services,' Amazon Web Services, Inc., 2019. https://aws.amazon.com/what-is-aws/",
  },
  {
    'id': "5",
    'title': "Azure",
    'description': "The Azure cloud platform consists of more than 200 products and cloud services that can be used to solve current problems and build the future.",
    'reference': "[5]'What is Azure—Microsoft Cloud Services | Microsoft Azure,' azure.microsoft.com. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-azure/",
  },
  {
    'id': "6",
    'title': "Google Cloud platform",
    'description': "Virtual machines (VMs) and other physical and virtual resources, housed in Google's data centers around the world, make up the Google Cloud. Physical resources include computers and hard drives.",
    'reference': "[6]Google, 'Google Cloud overview | Overview,' Google Cloud. https://cloud.google.com/docs/overview",
  },
  {
    'id': "7",
    'title': "Skaffold",
    'description': "Skaffold takes care of the building, pushing, and deploying processes for your application, freeing you up to concentrate on what really matters: writing code.",
    'reference': "[7]'Skaffold,' Skaffold. https://skaffold.dev/",
  },
  {
    'id': "8",
    'title': "Waterfall model",
    'description': "The waterfall model is a linear, sequential approach to software development.",
    'reference': "[8]'What is waterfall model? - Definition from WhatIs.com,' SearchSoftwareQuality. https://www.techtarget.com/searchsoftwarequality/definition/waterfall-model#:~:text=The%20waterfall%20model%20is%20a",
  },
  {
    'id': "9",
    'title': "Scrum",
    'description': "Scrum is an agile project management framework that uses a set of values, principles, and practices to assist teams in organizing and managing their work.",
    'reference': "[9]Atlassian, 'Scrum - What is it, how it works, & how to start,' Atlassian. https://www.atlassian.com/agile/scrum#:~:text=Scrum%20is%20an%20agile%20project",
  },
  {
    'id': "10",
    'title': "Command Line Interface",
    'description': "A text-based user interface (UI) known as a command-line interface (CLI) is used to interact with computers and run programs.",
    'reference': "[10]'What is a command-line interface (CLI)?,' SearchWindowsServer. https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI#:~:text=A%20command%2Dline%20interface%20(CLI)%20is%20a",
  },
  {
    'id': "11",
    'title': "Continuous Integration (CI)",
    'description': "Continuous Integration is a software development practice where code changes are automatically integrated into a shared repository several times a day. Each integration triggers an automated build and automated tests to identify any issues early in the development process. CI ensures that the codebase is always up-to-date and allows developers to detect and fix integration problems quickly.",
    'reference': "Martin Fowler, 'Continuous Integration' - https://martinfowler.com/articles/continuousIntegration.html",
  },
  {
    'id': "12",
    'title': "Continuous Deployment (CD)",
    'description': "Continuous Deployment is an extension of Continuous Integration, where changes that pass automated tests are automatically deployed to the production environment. With CD, there is minimal manual intervention, and new features or bug fixes can be released to end-users rapidly and frequently, enhancing the software delivery process.",
    'reference': "ThoughtWorks, 'Continuous Deployment' - https://www.thoughtworks.com/continuous-delivery",
  },
  {
    'id': "13",
    'title': "Infrastructure as Code (IaC)",
    'description': "Infrastructure as Code is the practice of managing and provisioning infrastructure through machine-readable definition files, such as YAML or JSON, rather than manual processes. IaC allows for version control, consistency, and repeatability in managing infrastructure, resulting in more reliable and efficient deployments.",
    'reference': "HashiCorp, 'Infrastructure as Code' - https://www.hashicorp.com/resources/what-is-infrastructure-as-code",
  },
  {
    'id': "14",
    'title': "Configuration Management",
    'description': "Configuration Management is the process of automating the setup and maintenance of infrastructure and software configurations. Tools like Ansible, Puppet, and Chef enable administrators to define and enforce desired states on servers, ensuring consistency across various environments and reducing configuration drift.",
    'reference': "Red Hat, 'Configuration Management' - https://www.redhat.com/en/topics/automation/what-is-configuration-management",
  },
  {
    'id': "15",
    'title': "DevSecOps",
    'description': "DevSecOps is an approach that integrates security practices into the DevOps cycle from the beginning. It emphasizes collaboration between development, operations, and security teams to address security concerns proactively throughout the software development lifecycle. DevSecOps aims to make security a shared responsibility and enhance overall application security.",
    'reference': "Gartner, 'DevSecOps: How to Seamlessly Integrate Security Into DevOps' - https://www.gartner.com/smarterwithgartner/devsecops-how-to-seamlessly-integrate-security-into-devops/",
  },
  {
    'id': "16",
    'title': "Microservices Architecture",
    'description': "Microservices Architecture is an architectural style where applications are broken down into small, independent services that can be deployed and scaled independently. Each service focuses on a specific business capability, making it easier to maintain, update, and scale the application.",
    'reference': "Martin Fowler, 'Microservices' - https://martinfowler.com/articles/microservices.html",
  },
  {
    'id': "17",
    'title': "Containers and Docker",
    'description': "Containers are lightweight, standalone units that package an application and its dependencies together. Docker is a popular platform for creating, deploying, and managing containers. Containers offer portability and consistency across different environments, making it easier to develop and deploy applications.",
    'reference': "Docker, 'What is a Container?' - https://www.docker.com/resources/what-container",
  },
  {
    'id': "18",
    'title': "Version Control System (VCS)",
    'description': "Version Control System is a crucial tool in DevOps for tracking and managing changes to code and other project files. VCS allows developers to collaborate, maintain historical versions of code, and easily roll back changes when needed. Git is a widely used VCS.",
    'reference': "Atlassian, 'What is Version Control?' - https://www.atlassian.com/git/tutorials/what-is-version-control",
  },
  {
    'id': "19",
    'title': "Monitoring and Observability",
    'description': "Monitoring and Observability are practices that focus on continuously collecting and analyzing data from the application and infrastructure to gain insights into its performance and health. These practices help identify issues, troubleshoot problems, and ensure high availability and reliability.",
    'reference': "New Relic, 'Observability, Monitoring, and Everything in Between' - https://newrelic.com/resources/glossary/what-is-observability",
  },
  {
    'id': "20",
    'title': "Cloud Computing",
    'description': "Cloud Computing is the delivery of computing services over the internet, such as storage, servers, databases, networking, software, etc. It enables organizations to scale resources dynamically, reduce infrastructure costs, and focus on development without worrying about hardware management.",
    'reference': "Microsoft Azure, 'What is Cloud Computing?' - https://azure.microsoft.com/en-us/overview/what-is-cloud-computing/",
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Software Deployment and Operation', subheading: "Example", list: listItems });
});

module.exports = router;
