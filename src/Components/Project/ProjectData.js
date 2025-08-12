const projects = [
  {
    id: "1",
    title: "Athletic Event Management System",
    description:
      "A full-stack platform for organizing and managing athletic events with real-time booking capabilities.",
    image: "https://i.ibb.co/y1PSch2/assignment-11-client-sid-64337-web-app.png",
    tech: ["React", "Tailwind CSS", "Firebase", "MongoDB", "Express", "Node.js", "JWT"],
    live: "https://assignment-11-client-sid-64337.web.app/",
    github: "https://github.com/Mohammad7558/Athletic-Core-Frontend",
    challenges: [
      "Real-time seat/slot booking sync between clients (race conditions).",
      "Complex permission roles for organizers, participants and admins.",
      "Image/media storage and CDN performance for large event galleries."
    ],
    futurePlans: [
      "Add real-time notifications using sockets for booking confirmations.",
      "Implement analytics dashboard for event organizers.",
      "Add multi-language support and mobile app (React Native)."
    ]
  },
  {
    id: "2",
    title: "FreelancerHub",
    description:
      "A freelance marketplace where users can register, manage tasks, and bid. Includes dark mode and user authentication.",
    image: "https://i.ibb.co.com/nqpS5CRq/assignment-10-client-sid-c420b-web-app.png",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    live: "https://assignment-10-client-sid-c420b.web.app/",
    github: "https://github.com/Mohammad7558/Freelancer-Hub-Frontend",
    challenges: [
      "Implementing secure role-based access for clients and freelancers.",
      "Real-time chat and bid updates with consistent UI state.",
      "Handling payments and escrow flow reliably."
    ],
    futurePlans: [
      "Integrate Stripe Connect for marketplace payouts.",
      "Add advanced search & filters (skill, rating, price).",
      "Introduce portfolio & verified skills badges for freelancers."
    ]
  },
  {
    id: "3",
    title: "Study Platform",
    description:
      "A Modern Study Platform — MERN app with Student/Tutor/Admin roles, course creation, booking sessions and reviews.",
    image: "https://i.ibb.co.com/FbvKpnGB/68747470733a2f2f692e6962622e636f2e636f6d2f516a363453396b742f7468652d6c6173742d64616e63652d3132323766.png",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "JWT", "Firebase", "TanStack Query"],
    live: "https://the-last-dance-1227f.web.app/",
    github: "https://github.com/Mohammad7558/Study-Platform",
    challenges: [
      "Complex role-based UI flows (tutor vs student dashboards).",
      "File upload and secure content delivery for paid courses.",
      "Designing a smooth booking & refund flow for paid sessions."
    ],
    futurePlans: [
      "Add subscriptions and recurring payments.",
      "Improve course editor with drag-and-drop modules.",
      "Add certificate generation and shareable achievement badges."
    ]
  }
];

export default projects;