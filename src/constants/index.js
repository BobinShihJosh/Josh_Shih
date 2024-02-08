import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript, 
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git, 
    python,
    pytorch,
    c,
    docker,
    nl2bash,
    gpt,
    rcar, 
    threejs,
    garmin,
    peel,
    uw,
    arista,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "c++",
      icon: c,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "University of Washington ",
      company_name: "Seattle, WA",
      icon: uw,
      iconBg: "#383E56",
      date: "Sept 2016 - June 2020",
      points: [
        "M.S. in Electrical & Computer Engineering 2016-2020",
        "B.S. in Electrical & Computer Engineering 2022-2024",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Garmin Ltd.",
      icon: garmin,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - June 2022",
      points: [
        "Led development for Voice Assistant and Bluetooth-Calling on the latest APAC smartwatch. Enabled users to command basic actions and answer calls via voice commands. (C++)",
        "Enhance the eﬀiciency of the on-device voice assistant by decreasing its activation latency by 130% through a redesign of task scheduler.(C/C++)",
        "Enhanced market access for Huawei, Oppo, and Vivo users by developing a specialized wrapper around Android's Bluetooth manager. ",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },  
    {
      title: "Software Engineer Intern",
      company_name: "Arista Networks Inc.",
      icon: arista,
      iconBg: "#E6DEDD",
      date: "June 2023 - Sept 2023",
      points: [
        "Enforced network security by enabling customers to conceal their traffic within segmented areas (Subnets/VLANs/IPs). This reduces the risk of data exfiltration and eavesdropping. (C++, GDB)",
        "Enhanced network diagnostic capabilities for customers by developing a dynamic database that maintains a network logical port ID to interface ID mapping, improving interface ID lookup time by 10x.", 
      ],
    },
    {
      title: "Co-Founder, CTO",
      company_name: "Peel Solutions, Inc",
      icon: peel,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Co-founded a social media wellness company that provides a platform for extroverts to offer conversation as a service to introverts where they can access on-demand personalized conversations through conversation topics and styles.(50+ Users)",
        "Built a full-stack mobile private chat app (React Native, Next.js, Firebase) featuring a pay-to-chat model using Stripe API, user recommendation and user authentication systems.(Typescript)", 
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Natural Language 2 Bash",
      description:
        "A model that generates linux bash commands from english text input trained on custom data-set generated from GPT-3.5-Turbo.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "HuggingFace",
          color: "pink-text-gradient",
        },
      ],
      image: nl2bash,
      source_code_link: "https://github.com/BobinShihJosh/ENG2Bash",
    },
    {
      name: "Data Hiding in Robot Cars",
      description:
        "A secure wireless communication method for autonomous robot cars using steganographic methods in an adaptive cruise control scenario.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ROS",
          color: "green-text-gradient",
        },
        {
          name: "Steganography",
          color: "pink-text-gradient",
        },
      ],
      image: rcar,
      source_code_link: "https://github.com/BobinShihJosh/Robot_Sign_Language",
    },
    {
      name: "GPT Voice Assistant",
      description:
        "A mobile chatbot powered by GPT3.5Turbo API and text-2-Speech function using phone speaker.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/BobinShihJosh/GPT-Voice-Assistant",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };