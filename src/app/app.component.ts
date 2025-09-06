import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MY-PORTFOLIO';
  email = 'amaanjhaa15915@gmail.com';
  name = 'Aman Kumar Jha';
  designation = 'Full Stack Developer';
  mobile = "+91 9654268884"
  // myImage = '‍D:\angular_learning_project\MY-PORTFOLIO\src\assets\images\Me.png';
  aboutMe = "Java Full Stack Developer with over 2 years of experience in designing and developing scalable web applications. Proficient in Java, Spring Boot, and microservices architecture, ensuring efficient backend development. Skilled in front-end technologies like Angular and Flutter, building responsive, dynamic user interfaces. Experienced in developing and integrating REST APIs to facilitate seamless communication between services. Knowledgeable in cloud deployment, using tools such as Docker and Kubernetes for microservices management and scaling. Adept in optimizing databases for performance and reliability. A strong advocate of Agile methodologies, collaborating effectively within teams to meet deadlines and deliver high-quality software solutions.";
  skills = ["Microservices","Java", "Spring Boot", "Angular", "Flutter", "Rest API", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"];
  
  durationForKarkinos = "Oct 2022 – Present"
  worksForKarkinos = [
   "Designed and develop scalable web applications using Java, Spring Boot, React, Flutter and microservices",
    "Utilized Kubernetes and Docker for the deployment, scaling, and management of microservices in a cloud-native environment.",
    "Utilized Jenkins for CICD, automating build, test, and deployment pipelines",
    "Developed a file-storage microservice to manage secure URLs for Google Cloud Platform (GCP) buckets, ensuring reliable file uploads and downloads.",
    "Worked with UI/UX team to implement designs and improve user experience.",
    "Designed and optimized PostgreSQL schemas and queries for efficient data storage and retrieval in a microservices environment.",
    "Enabled seamless data synchronization using Change Data Capture (CDC) with Debezium for MongoDB and PostgreSQL, ensuring data consistency across systems.",
    "Created and integrated RESTFUL APIs for patient and tag integration, supporting advanced linking and delinking functionalities to meet dynamic use cases, ensuring seamless data exchange.",
    "Managed codebase and facilitated team collaboration using Git.",
    "Worked within an Agile Scrum team using JIRA/Confluence to meet deadlines and deliver high-quality features on time."
  
  ]
  constructor(private http: HttpClient) { }

  // downloadCV() {
  //   this.http.get('assets/images/cv.pdf',
  //      { responseType: 'blob' as 'json' })
  //     .subscribe((blob: any) => {
  //       const fileBlob = new Blob([blob], { type: 'application/pdf' });
  //       const url = window.URL.createObjectURL(fileBlob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'Aman_Kumar_Jha_CV.pdf';
  //       link.click();
  //       window.URL.revokeObjectURL(url);
  //     }, error => {
  //       console.error('Error downloading CV:', error);
  //       alert('Failed to download CV. Please try again.');
  //     });
  // }

  downloadCV() {
    const filePath = 'pdf/cv.pdf';

    this.http.get(filePath, { responseType: 'blob' }) // Correct responseType
      .subscribe(
        (blob: Blob) => {
          // Create a new blob object
          const fileBlob = new Blob([blob], { type: 'application/pdf' });

          // Create a URL for the blob
          const url = window.URL.createObjectURL(fileBlob);

          // Create a link and trigger the download
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Aman_Kumar_Jha_CV.pdf';
          link.click();

          // Release the object URL
          window.URL.revokeObjectURL(url);
        },
        error => {
          console.error('Error downloading CV:', error);
          alert('Failed to download CV. Please check if the file exists at the specified path.');
        }
      );
  }

}
