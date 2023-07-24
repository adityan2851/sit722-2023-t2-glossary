var express = require('express');
var router = express.Router();

const listItems = [
  {'id': "1", 'title': "DevOps", 'description': "Software development and IT teams can automate and integrate their processes with the help of a set of practices, tools, and cultural principles called \"DevOps.\" It places a strong emphasis on technology automation, cross-team communication, and team empowerment.", 'reference': "[1]Atlassian, “What is DevOps? | Atlassian,” Atlassian, 2016. https://www.atlassian.com/devops"},
  {'id': "2", 'title': "Docker", 'description': "An open platform for creating, distributing, and running applications is Docker. You can divide your applications from your infrastructure with the help of Docker, allowing for quick software delivery.", 'reference': "[2]Docker, “Docker overview,” Docker Documentation, Apr. 09, 2020. https://docs.docker.com/get-started/overview/"},
  {'id': "3", 'title': "Kubernetes", 'description': "K8s, also referred to as Kubernetes, is an open-source platform for managing, scaling, and automating the deployment of containerized applications.", 'reference': "[3]Kubernetes, “Production-Grade Container Orchestration,” Kubernetes.io, 2019. https://kubernetes.io/"},
  {'id': "4", 'title': "AWS", 'description': "The most complete and widely used cloud in the world, Amazon Web Services (AWS), provides over 200 fully functional services from data centres around the world.", 'reference': "[4]Amazon Web Services, “What Is AWS? - Amazon Web Services,” Amazon Web Services, Inc., 2019. https://aws.amazon.com/what-is-aws/"},
  {'id': "5", 'title': "Azure", 'description': "The Azure cloud platform consists of more than 200 products and cloud services that can be used to solve current problems and build the future.", 'reference': "[5]“What is Azure—Microsoft Cloud Services | Microsoft Azure,” azure.microsoft.com. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-azure/"},
  {'id': "6", 'title': "Google Cloud platform", 'description': "Virtual machines (VMs) and other physical and virtual resources, housed in Google's data centres around the world, make up the Google Cloud. Physical resources include computers and hard drives.", 'reference': "[6]Google, “Google Cloud overview | Overview,” Google Cloud. https://cloud.google.com/docs/overview"},
  {'id': "7", 'title': "Skaffold", 'description': "Skaffold takes care of the building, pushing, and deploying processes for your application, freeing you up to concentrate on what really matters: writing code.", 'reference': "[7]“Skaffold,” Skaffold. https://skaffold.dev/"},
  {'id': "8", 'title': "Waterfall model", 'description': "The waterfall model is a linear, sequential approach to the software development.", 'reference': "[8]“What is waterfall model? - Definition from WhatIs.com,” SearchSoftwareQuality. https://www.techtarget.com/searchsoftwarequality/definition/waterfall-model#:~:text=The%20waterfall%20model%20is%20a"},
  {'id': "9", 'title': "Scrum", 'description': "Scrum is an agile project management framework that uses a set of values, principles, and practices to assist teams in organizing and managing their work.", 'reference': "[9]Atlassian, “Scrum - What is it, how it works, & how to start,” Atlassian. https://www.atlassian.com/agile/scrum#:~:text=Scrum%20is%20an%20agile%20project"},
  {'id': "10", 'title': "Command Line Interface", 'description': "A text-based user interface (UI) known as a command-line interface (CLI) is used to interact with computers and run programs.", 'reference': "[10]“What is a command-line interface (CLI)?,” SearchWindowsServer. https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI#:~:text=A%20command%2Dline%20interface%20(CLI)%20is%20a%20text%2D"},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Software Deployment and Operation', subheading: "Example", list: listItems });
});

module.exports = router;
