/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Job Onyango",
  start:"Hi There!",
  title: "I'm Job Owino",
  subTitle: "I am a Nairobi based Software Engineer passionate about making human life simpler using software",
  resumeLink: "https://drive.google.com/file/d/1KLv307GWEvtgfeRVBTwzTftB5wD3oIWB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jobunski",
  linkedin: "https://www.linkedin.com/in/job-onyango-owino/",
  gmail: "jonyango003@gmail.com",
  spotify:"https://open.spotify.com/user/nkt3snih6lprtuywuh48dnbzp?si=oD6DBIOeQ1iOQylz7JRYHA&utm_source=copy-link",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I build Cloud Infrastructure and Softwares that makes your life easy and work enjoyable.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Setup Cloud Infrastructure on AWS, GCP or any cloud provider."),
    emoji("⚡ Manage Cloud Infrastructure using Terraform (IAC)."),
    emoji("⚡ Automate your deployments using CI/CD, Jenkins etc.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT Guwahati",
      logo: require("./assets/images/iit-logo.png"),
      subHeader: "Advanced PG Certification in Cloud & Devops",
      duration: "September 2021 - Present",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Chitkara University",
      logo: require("./assets/images/cu-logo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science & Technology",
      duration: "June 2016 - June 2020",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: 95 //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: 80
    },
    {
      Stack: "Golang",
      progressPercentage: 65
    },
    {
      Stack: "Scala",
      progressPercentage: 55
    },
    {
      Stack: "AWS/GCP",
      progressPercentage: 60
    },
    {
      Stack: "JavaScript",
      progressPercentage: 60
    },
    {
      Stack: "React",
      progressPercentage: 65
    },
    {
      Stack: "NodeJS",
      progressPercentage: 50
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer ||",
      company: "Safaricom PLC",
      date: "Feb 2022 – Present",
      desc: "Working on Integrations to the M-PESA Financial Service Ecosystem.",
      descBullets: [
        "Create services that allow connectivity among M-Pesa Ecosystem and its partners",
      ],
      education: false
    },
    {
      role: "Software Engineer (Safaricom) ",
      company: "TechSavannah",
      date: "Feb 2021 - Jan 2022",
      desc: "Built and Maintained the M-pesa Business BillManager Platform.",
      descBullets: [
        "Successfully created a CICD pipeline that significantly reduced deployment to production from 1 hr to 10min",
        "Optimized system and fix bugs",
      ],
      education: false
    },
    {
      role: "Software Engineer ",
      company: "Skylab Systems",
      date: "Jan 2020 - Jan 2021",
      desc: "Built and Maintained  Apptivate System.",
      descBullets: [
        "Optimized system and fix bugs",
      ],
      education: false
    },
    {
      role: "Software Engineer Intern",
      company: "Skylab Systems",
      date: "Oct 2019 - Dec 2019",
      desc: "Maintained backend and frontend application for Malipo System.",
      descBullets: [
        "Optimized system and fix bugs on the Mobile App",
        "Created a website for admin access for Malipo System"
      ],
      education: false
    },
    {
      role: "Bachelor of Science, Electronic and Computer Engineering",
      company: "Jomo Kenyatta University of Agriculture and Technology",
      date: "Sep 2014 - Dec 2019 (Graduated 2022)",
      desc: "Undergraduate degree in Computer Engineering.",
      descBullets: [
        "Optimized system and fix bugs on the Mobile App",
        "Created a website for admin access for Malipo System"
      ],
      education: true
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Spark Award - UST BlueConch Technologies",
      subtitle:
        "Got appreciation for being the spark in the team and motivating them to do better and efficient work.",
      image: require("./assets/images/14595-thumbs-up.gif"),
      footerLink: [
        {name: "Spark Award"},
        {name: "#Leadership"},
        {name: "#Appreciation"},
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/13Efi2NP1QH-PB-tqhV0u-cMc0wQnz1MP/view?usp=sharing"
        }
      ]
    },
    {
      title: "Pat on Back - Uplight",
      subtitle:
        "Got appreciation for the work I did as a Associate Software Enginner.",
      image: require("./assets/images/61147-excellent.gif"),
      footerLink: [
        {name: "Pat On the Back"},
        {name: "#Appreciation"},
        {
          name: "Certificate 2021",
          url: "https://drive.google.com/file/d/13Efi2NP1QH-PB-tqhV0u-cMc0wQnz1MP/view?usp=sharing"
        },
        {
          name: "Certificate 2020",
          url: "https://drive.google.com/file/d/1mConZpXwpeo0j8wZ-X1jtR2SD3aPRo5o/view?usp=sharing"
        }
      ]
    },
    {
      title: "Python: Zero to Hero",
      subtitle: "Completed Certifcation from Udemy for Python basics",
      image: require("./assets/images/python-logo.png"),
      footerLink: [
        {name: "Jul 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-9a058d13-f3a1-4455-aa9c-dd0255ad527c/"
        }
      ]
    },
    {
      title: "React: Complete Developer Guide",
      subtitle: "Completed Certifcation from Udemy for React",
      image: require("./assets/images/react-logo.png"),
      footerLink: [
        {name: "Jun 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-ec858918-b82d-432f-962c-b7476d87244f/"
        }
      ]
    },
    {
      title: "Nodejs: Complete Developer Course",
      subtitle: "Completed Certifcation from Udemy for Nodejs",
      image: require("./assets/images/node-logo.png"),
      footerLink: [
        {name: "May 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-add3b90c-f4da-416c-9b92-35c5f14aad66/"
        }
      ]
    },
    {
      title: "MongoDB: Complete Developer Guide",
      subtitle: "Completed Certifcation from Udemy for MongoDB",
      image: require("./assets/images/MongoDB-Logo.png"),
      footerLink: [
        {name: "Apr 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-f17f0ea5-dcfe-4dfe-8b69-89a30a3d6f93/"
        }
      ]
    },
    {
      title: "Data Structures in JAVA",
      subtitle: "Completed Certifcation from Coding Ninjavs for DS in JAVA ",
      image: require("./assets/images/coding-ninja-logo.png"),
      footerLink: [
        {name: "Jun 2019 - No Expiration"},
        {name: "Coding Ninjas", url: "https://www.codingninjas.in"},
        {
          name: "Certification Credntials",
          url: "https://www.codingninjas.in/verify/c1e90177b1930cf6"
        }
      ]
    },
    {
      title: "Front-end Nanodegree I & II",
      subtitle: "Completed nanodegrees from Udacity",
      image: require("./assets/images/udacity-logo.png"),
      footerLink: [
        {name: "Mar 2018 - No Expiration"},
        {name: "Udacity", url: "https://www.udacity.com"},
        {
          name: "Certification Credntials I",
          url: "https://drive.google.com/file/d/1S7NrzYGwVdzE09T9gkIxfOBJOMWBCdBe/view?usp=sharing"
        },
        {
          name: "Certification Credntials II",
          url: "https://drive.google.com/file/d/1bX-pPJv2xKblK9tSgbkqKI_lH1qwukLK/view?usp=sharing"
        }
      ]
    },
    {
      title: "Acadview: Core JAVA Development",
      subtitle:
        "Completed training from Acadview (Now upGrad) for basics of JAVA ",
      image: require("./assets/images/upgrad-logo.png"),
      footerLink: [
        {name: "Jun 2019 - No Expiration"},
        {name: "upGrad", url: "https://www.upgrad.com"},
        {
          name: "Certificate Credentials",
          url: "https://drive.google.com/file/d/1_EfucnNr6j1JUnEQp5Y7ZyEzqgfavIAv/view?usp=sharing"
        },
        {
          name: "Letter of Recommendation",
          url: "https://drive.google.com/file/d/1PsysrFHeQvoNk_LgJFuuXJUcPlg2ZD1m/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Get In Touch",
  subtitle: "Dev-Portfolio Fin. Thanks for reaching in my email section.If you are not interested in the nearest bit checkout my well curated playlist. All opinions are mine."
};

// Twitter Section

const twitterDetails = {
  userName: "khannamayank98", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
