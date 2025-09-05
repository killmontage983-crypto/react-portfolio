import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "./components/card";
// import "./Portfolio.css";

export default function Portfolio() {
  const sections = ["about", "experience", "skills", "projects", "education",];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="portfolio">
      {/* Navigation Header */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="navbar"
      >
        <div className="navbar-container">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="logo"
          >
            DINESH KRISHNAMURTHY
          </motion.h1>
          <ul className="nav-links">
            {sections.map((sec) => (
              <motion.li
                key={sec}
                whileHover={{ scale: 1.1, color: "#F472B6" }}
                className="nav-item"
                onClick={() => scrollToSection(sec)}
              >
                {sec}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <div className="content">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title"
        >
          DINESH KRISHNAMURTHY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="subtitle"
        >
          I'm a Data Analyst ✨
        </motion.p>

        {/* About */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about"
        >
          As a B.E student with a focus on electronics and communication engineering, I bring
          hands-on experience in AI and robotics projects. With a strong capacity for developing
          innovative solutions, I possess solid technical skills, strong communication abilities,
          and a collaborative mindset. I'm eager to contribute my skills to organizations that
          value innovation and teamwork.
        </motion.div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="contact"
        >
          <a href="mailto:dineshsivam3051@gmail.com"><Mail /></a>
          <a href="tel:+919025379366"><Phone /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin /></a>
        </motion.div>

        {/* Experience */}
        <motion.h2 id="experience" className="section-title">Experience</motion.h2>
        <motion.div whileHover={{ scale: 1.05 }} className="center">
          <Card>
            <CardContent>
              <h3 className="card-title">Student Trainee</h3>
              <p className="card-sub">Towards Technology | Jun 2022 - Jul 2022</p>
              <p className="card-text">
                Successfully completed basics of industrial robotics and virtual robotics platform
                course in internship training.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.h2 id="skills" className="section-title">Skills</motion.h2>
        <div className="grid-3">
          <Card>
            <CardContent>
              <h3 className="card-title">Platforms</h3>
              <div className="tag-container">
                {["VS Code", "Figma", "Power BI", "Canva", "Wix Studio", "Excel", "Power Point", "MySQL", "Power Query"].map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="card-title">Domains</h3>
              <div className="tag-container">
                {["OpenCV", "Machine Learning", "TensorFlow", "DBMS"].map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="card-title">Languages</h3>
              <div className="tag-container">
                {["English", "Tamil"].map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects */}
        <motion.h2 id="projects" className="section-title">Projects</motion.h2>
        <div className="grid-2">
          {[
            {
              title: "Plastic Detecting AI robotic arm",
              desc: "Created an AI-powered robotic arm system that identifies and classifies plastics for waste management, increasing productivity and streamlining recycling.",
              tags: ["AI", "Machine Learning", "Sensing Technology"]
            },
            {
              title: "HR Analytics Dashboard using Power BI",
              desc: "Developed an interactive HR analytics dashboard in Power BI to visualize key workforce metrics and support decision making.",
              tags: ["Power BI", "Power Query", "DAX"]
            },
            {
              title: "Student Database Management System using SQL and Power BI",
              desc: "Created schemas and dashboards for student data, enrollment trends, and academic performance using SQL and Power BI.",
              tags: ["SQL", "Power BI"]
            }
          ].map((proj) => (
            <Card key={proj.title}>
              <CardContent>
                <h3 className="card-title">{proj.title}</h3>
                <p className="card-text">{proj.desc}</p>
                <div className="tag-container">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <motion.h2 id="education" className="section-title">Education</motion.h2>
        <div className="education">
          {[
            { school: "Bannari Amman Institute Of Technology", degree: "B.E in Electronics and Communication Engineering", gpa: "6.50/10", year: "2021 - 2025" },
            { school: "Sishya Matric. Hr. Sec. School", degree: "HSC", gpa: "78.3", year: "2020 - 2021" },
            { school: "SRGDS Matric. Hr. Sec. School", degree: "SSLC", gpa: "68.2", year: "2018 - 2019" }
          ].map((edu) => (
            <Card key={edu.school}>
              <CardContent className="edu-item">
                <div>
                  <h3 className="card-title">{edu.school}</h3>
                  <p className="card-sub">{edu.degree}</p>
                  <p className="card-text">GPA: {edu.gpa}</p>
                </div>
                <span className="edu-year">{edu.year}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <motion.div className="footer">
          © 2025 Dinesh Krishnamurthy | Portfolio
        </motion.div>
      </div>
    </div>
  );
}
