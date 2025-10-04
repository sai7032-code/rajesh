import React, { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaAws,
  FaGit,
  FaLinux,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed"; // ✅ Correct import
import profileImg from "./rajesh_profile.jpg"; // Update profile image path if needed

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#081b2e] via-[#162447] to-[#081b2e] text-white font-sans">
      {/* Hero Section */}
      <section data-aos="fade-down" className="text-center py-20 px-6">
        <img
          src={profileImg}
          alt="Rajesh Galipelli"
          className="w-36 h-36 mx-auto mb-6 rounded-full border-4 border-amber-400 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-amber-400">
          Rajesh Galipelli
        </h1>
        <ReactTyped
          strings={[
            "AWS DevOps Engineer",
            "Docker | Kubernetes | Terraform",
            "CI/CD Automation Specialist",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="text-xl text-gray-300"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#summary"
            className="px-5 py-2 bg-amber-500 rounded-full hover:bg-amber-600 transition"
          >
            Summary
          </a>
          <a
            href="#skills"
            className="px-5 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="px-5 py-2 bg-violet-500 rounded-full hover:bg-violet-600 transition"
          >
            Experience
          </a>
          <a
            href="#education"
            className="px-5 py-2 bg-green-500 rounded-full hover:bg-green-600 transition"
          >
            Education
          </a>
          <a
            href="#certifications"
            className="px-5 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition"
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-500 transition"
          >
            Contact
          </a>
          <a
            href="/Rajesh-Galipelli_Aws-DevOps.pdf"
            download
            className="px-5 py-2 bg-gray-600 rounded-full hover:bg-gray-700 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Professional Summary */}
      <section
        id="summary"
        data-aos="fade-left"
        className="max-w-5xl mx-auto p-8 bg-white/5 rounded-xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-bold text-amber-400 mb-4 border-b border-amber-400 pb-2">
          🧾 Professional Summary
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          AWS DevOps Engineer with 3 years of experience in designing and
          managing scalable cloud infrastructure using AWS EC2, S3, VPC, and
          RDS. Proficient in CI/CD automation with Jenkins, Git, Docker, and
          Terraform. Experienced in container orchestration using Kubernetes and
          monitoring with Prometheus and Grafana. Strong collaborator focused on
          reliability, automation, and DevOps best practices.
        </p>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12 border-b border-blue-500 pb-2">
          🧠 Technical Skills
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaAws size={40} className="mx-auto text-amber-400 mb-3" />
            <h3 className="font-semibold">Cloud Platforms</h3>
            <p>AWS EC2, S3, IAM, VPC, RDS, ELB, ASG, SNS</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaDocker size={40} className="mx-auto text-blue-400 mb-3" />
            <h3 className="font-semibold">Containerization</h3>
            <p>Docker, Kubernetes</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaGit size={40} className="mx-auto text-pink-400 mb-3" />
            <h3 className="font-semibold">CI/CD & Automation</h3>
            <p>Jenkins, AWS CodePipeline, Git, GitHub, Maven, Terraform</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaLinux size={40} className="mx-auto text-gray-400 mb-3" />
            <h3 className="font-semibold">Monitoring & Management</h3>
            <p>Prometheus, Grafana, Ansible, SonarQube, Trivy, OWASP</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <h3 className="font-semibold">Scripting & OS</h3>
            <p>Bash, Linux, Windows</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <h3 className="font-semibold">Databases</h3>
            <p>AWS RDS, MySQL</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-violet-400 mb-12 border-b border-violet-500 pb-2">
          💼 Experience
        </h2>
        <div className="space-y-8">
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-amber-400">
              DevOps Engineer | EdgeRock Software Solutions Pvt Ltd, Hyderabad
            </h3>
            <p className="text-gray-300 mb-2">Sep 2023 – Present</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>
                Designed and implemented CI/CD pipelines using Jenkins, Git, and
                Maven, reducing release times by 30%.
              </li>
              <li>
                Built scalable AWS infrastructure with Terraform for automated
                provisioning.
              </li>
              <li>
                Deployed and managed containers in Kubernetes for autoscaling
                and load balancing.
              </li>
              <li>
                Configured Prometheus and Grafana for proactive system health
                monitoring.
              </li>
              <li>
                Applied blue-green and canary deployments for zero-downtime
                rollouts.
              </li>
              <li>
                Integrated security scanning into CI/CD pipelines, optimized
                cloud costs.
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-amber-400">
              Junior DevOps Engineer | Atos Syntel, Chennai
            </h3>
            <p className="text-gray-300 mb-2">May 2022 – June 2023</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>
                Deployed Java monolithic applications on AWS EC2 via Jenkins
                CI/CD with GitHub integration.
              </li>
              <li>
                Built and optimized CI/CD pipelines using Maven, SonarQube, and
                Nexus.
              </li>
              <li>
                Managed Git repository with effective branching strategies.
              </li>
              <li>
                Monitored Jenkins pipelines and AWS deployment, resolving issues
                to improve release quality.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12 border-b border-green-500 pb-2">
          🎓 Education
        </h2>
        <div className="space-y-4">
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold">
              B.Tech (Electrical & Electronics Engineering)
            </h3>
            <p className="text-gray-300">
              Sree Chaitanya College of Engineering | 2018 – 2021
            </p>
          </div>
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold">Diploma (EEE)</h3>
            <p className="text-gray-300">
              Jyothishmathi Institute of Technology & Science | 2015 – 2018
            </p>
          </div>
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold">SSC</h3>
            <p className="text-gray-300">
              Abhinava Vidya Sadan High School | 2014 – 2015
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-pink-400 mb-12 border-b border-pink-500 pb-2">
          📜 Certifications
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2" data-aos="fade-up">
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-[#081b2e] via-[#162447] to-[#081b2e] text-white p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">
          📧{" "}
          <a
            href="mailto:rajeshgalipeli123@gmail.com"
            className="hover:underline text-amber-400"
          >
            rajeshgalipeli123@gmail.com
          </a>
        </p>
        <p className="mb-2">
          📞{" "}
          <a
            href="tel:+919848776478"
            className="hover:underline text-amber-400"
          >
            +91 9848776478
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:rajeshgalipeli123@gmail.com"
            className="hover:text-amber-300 transition"
          >
            <MdEmail size={30} />
          </a>
          <a
            href="tel:+919848776478"
            className="hover:text-amber-300 transition"
          >
            <MdPhone size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-galipelli"
            className="hover:text-amber-300 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="#"
            className="hover:text-amber-300 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </section>
    </main>
  );
}
