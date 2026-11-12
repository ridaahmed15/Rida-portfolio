import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Cpu,
  ScanEye,
  ServerCog,
} from "lucide-react";

/* ------------------------------ Profile ------------------------------ */

export const profile = {
  name: "Rida Ahmed",
  firstName: "Rida",
  headline: "AI Engineer",
  roles: ["AI Engineer", "ML Engineer", "Python Data Analyst", "LLM & RAG Developer"],
  location: "Karachi, Pakistan",
  email: "webdeveloper.ridaa@gmail.com",
  phone: "+92 334 0350718",
  phoneHref: "tel:+923340350718",
  linkedin: "https://www.linkedin.com/in/ridaahmed-dev",
  github: "https://github.com/ridaahmed15",
  yearsOfExperience: "4+",
  avatar: "/profile.png",
  availability: "Available for new opportunities",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------- About ------------------------------- */

export const aboutParagraphs = [
  "I'm Rida Ahmed, an AI Engineer based in Karachi, Pakistan, with 4+ years of hands-on experience building intelligent systems end-to-end. My work spans the full AI lifecycle — from data collection and analysis to model training, evaluation and cloud deployment.",
  "I specialize in Large Language Models, RAG architectures, computer vision and practical machine learning, with Python as my daily driver. Whether it's fine-tuning transformers, engineering retrieval pipelines or shipping analytics dashboards, I focus on solutions that create measurable real-world impact. Currently pursuing my BS in Computer Science, I pair strong engineering fundamentals with an obsession for everything AI.",
];

export const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "AI Domains Explored" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
];

/* ---------------------------- Specializations ---------------------------- */

export type Specialization = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

export const specializations: Specialization[] = [
  {
    icon: BrainCircuit,
    title: "LLMs & NLP",
    description:
      "Building and fine-tuning large language models, prompt engineering, text classification, summarization and conversational AI.",
    tags: ["Transformers", "Fine-tuning", "Prompt Eng."],
  },
  {
    icon: Bot,
    title: "RAG & AI Agents",
    description:
      "Designing retrieval-augmented generation pipelines and autonomous agents that reason, plan and call tools over private data.",
    tags: ["LangChain", "Vector DBs", "Agents"],
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    description:
      "Object detection, image classification and real-time video analytics with modern CNN and transformer architectures.",
    tags: ["YOLO", "OpenCV", "CNNs"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "End-to-end ML pipelines: feature engineering, model selection, evaluation and reproducible experiment tracking.",
    tags: ["scikit-learn", "XGBoost", "MLflow"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turning raw data into decisions with exploratory analysis, visualization and automated reporting workflows.",
    tags: ["Pandas", "SQL", "Power BI"],
  },
  {
    icon: ServerCog,
    title: "MLOps & Deployment",
    description:
      "Containerizing, serving and monitoring models in production with CI/CD pipelines and cloud infrastructure.",
    tags: ["Docker", "FastAPI", "AWS"],
  },
];

/* ------------------------------- Skills ------------------------------- */

export const marqueeSkills = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "scikit-learn",
  "LangChain",
  "Hugging Face",
  "OpenCV",
  "Pandas",
  "NumPy",
  "SQL",
  "FastAPI",
  "Docker",
  "AWS",
  "Power BI",
  "XGBoost",
  "LangGraph",
  "Keras",
  "MLflow",
  "Git",
  "Streamlit",
  "Pinecone",
  "ChromaDB",
  "Jupyter",
  "Linux",
];

export const skillBars = [
  { label: "Python Programming", value: 95 },
  { label: "Machine Learning & Deep Learning", value: 92 },
  { label: "LLMs, RAG & AI Agents", value: 90 },
  { label: "Data Analysis & Visualization", value: 90 },
  { label: "SQL & Databases", value: 85 },
  { label: "MLOps & Cloud Deployment", value: 82 },
];

export const toolbox = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "Bash"],
  },
  {
    category: "ML & Deep Learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "XGBoost"],
  },
  {
    category: "Generative AI",
    items: ["LangChain", "LangGraph", "Hugging Face", "OpenAI API", "Pinecone", "ChromaDB"],
  },
  {
    category: "Data & Visualization",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Jupyter"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Flask", "Streamlit", "REST APIs"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
  },
];

/* ------------------------------ Projects ------------------------------ */

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "NeuralDocs",
    subtitle: "RAG Document Intelligence",
    description:
      "Enterprise Q&A platform that ingests private documents and answers questions with cited sources using retrieval-augmented generation.",
    image: "/projects/project-rag.png",
    category: "LLM / RAG",
    tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    link: "https://github.com/ridaahmed15",
  },
  {
    title: "VisionGuard",
    subtitle: "Real-Time Object Detection",
    description:
      "Live video analytics pipeline detecting and tracking objects at 30 FPS with instant alerting, containerized for edge deployment.",
    image: "/projects/project-vision.png",
    category: "Computer Vision",
    tech: ["YOLOv8", "OpenCV", "Python", "Docker"],
    link: "https://github.com/ridaahmed15",
  },
  {
    title: "SentimentScope",
    subtitle: "Social Listening Engine",
    description:
      "BERT-based sentiment classifier and analytics dashboard tracking brand perception across thousands of social media posts.",
    image: "/projects/project-sentiment.png",
    category: "NLP",
    tech: ["Hugging Face", "BERT", "Plotly", "Pandas"],
    link: "https://github.com/ridaahmed15",
  },
  {
    title: "ChurnShield",
    subtitle: "Churn Prediction Pipeline",
    description:
      "End-to-end ML pipeline predicting telecom customer churn with 92% AUC, featuring automated retraining and drift monitoring.",
    image: "/projects/project-churn.png",
    category: "Machine Learning",
    tech: ["XGBoost", "MLflow", "scikit-learn", "GitHub Actions"],
    link: "https://github.com/ridaahmed15",
  },
  {
    title: "SupportGPT",
    subtitle: "AI Support Agent",
    description:
      "Tool-calling LLM agent that resolves tier-1 support tickets autonomously and escalates gracefully to human operators.",
    image: "/projects/project-chatbot.png",
    category: "AI Agents",
    tech: ["LangGraph", "OpenAI", "RAG", "FastAPI"],
    link: "https://github.com/ridaahmed15",
  },
  {
    title: "DemandCast",
    subtitle: "Sales Forecasting Suite",
    description:
      "Time-series forecasting with LSTM and Prophet feeding interactive dashboards that cut inventory stockouts by 18%.",
    image: "/projects/project-forecast.png",
    category: "Time Series",
    tech: ["LSTM", "Prophet", "Power BI", "Python"],
    link: "https://github.com/ridaahmed15",
  },
];

/* ----------------------------- Experience ----------------------------- */

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Freelance & Contract · Remote",
    period: "2024 — Present",
    current: true,
    points: [
      "Architect and ship production LLM applications, RAG systems and computer-vision solutions for international clients.",
      "Own the full lifecycle: data pipelines, model training, API serving, deployment and monitoring.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Remote Projects",
    period: "2022 — 2024",
    points: [
      "Designed and trained deep learning models for NLP and vision tasks with reproducible pipelines and experiment tracking.",
      "Built evaluation frameworks that cut model iteration time and improved accuracy across client datasets.",
    ],
  },
  {
    role: "Python Data Analyst",
    company: "Freelance",
    period: "2021 — 2022",
    points: [
      "Delivered data cleaning, EDA and visualization projects for businesses across retail and services.",
      "Automated recurring reporting workflows, saving clients hours of manual work every week.",
    ],
  },
];

/* ------------------------- Education & Certs ------------------------- */

export const education = {
  degree: "BS in Computer Science",
  institution: "Bachelor's Program",
  period: "2025 — Present",
  description:
    "Deepening the theory behind the systems I build: algorithms, data structures, machine learning, databases and software engineering — while applying every concept directly to production AI work.",
};

export const certifications = [
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI" },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI" },
  { title: "Data Analytics Professional Certificate", issuer: "Google" },
];
