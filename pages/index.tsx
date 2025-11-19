import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Natalia Zaitseva | Software Engineer & Researcher</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header_container">
        <div className="header-image">
          <Image
            src="/leaves_header.jpg"
            alt="Header Image - Leaves"
            width={1920}
            height={500}
            layout="responsive"
          />
        </div>
        <h1 className="header_text">
          Hello, my name is Natalia Zaitseva and I am a Software Engineer at
          Oregon State University!
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#education">EDUCATION</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#resexperience">RESEARCH</a>
            </li>
            <li>
              <a href="#workexperience">WORK</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
  {/* Education */}
  <Section id="education" title="Education">
    <p><strong>Oregon State University – Corvallis, OR</strong></p>
    <p>
      Bachelor of Science in Computer Science (Applied AI Option), Honors College · GPA: 3.75 ·
      Expected Graduation: Winter 2027
    </p>
  </Section>

  {/* Projects */}
  <Section id="projects" title="Projects">
  <ProjectCard
  title="Self-Organizing AI Agents at the Edge (Capstone)"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>

<ProjectCard
  title="Small Shell"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>

<ProjectCard
  title="Animal Cell Lerning Game in Unreal Engine 5"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>

<ProjectCard
  title="Wumpus Game In Unity"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>

<ProjectCard
  title="Contellation Identifier ML"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>

<ProjectCard
  title="Habit Tracker Terminal App"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>

<ProjectCard
  title="Encryption/Decryption Website"
  github="https://github.com/placeholder"
  video="#"
  image="/placeholder_project1.jpg"
>
  Distributed multi-agent system where nodes cooperatively solve mazes...
</ProjectCard>
    
  </Section>


{/* Research */}
  <Section id="research" title="Research Experience">
    <ResearchCard
        title="Honors Thesis – Faithful Reasoning in LLMs"
        professorLink="https://sanghyun-hong.com/">
        Investigating how reasoning traces align with internal model states.
    </ResearchCard>
    <ResearchCard
        title="Research Project – Faithfulness in LLMs"
        professorLink="https://scholar.google.com/citations?user=AFaZMNwAAAAJ">
        Generating Synthetic Data using GAN AI.
    </ResearchCard>
    </Section>



{/* Work Experience */}
  <Section id="workexperience" title="Work Experience">
  <ExperienceCard
    title="Software Engineering Intern – UpSight Security Inc."
    labLink="https://upsight.ai/"
    supervisorLink="https://www.linkedin.com/in/makenzieschwartz/"
  >
    Developed and tested a security-focused web application using Next.js...
  </ExperienceCard>
  <ExperienceCard3
    title="Undergraduate Lerning Assitant - Operating Systems & Intro to Computer Science II"
    labLink="https://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=374&termcode=ALL"
    supervisorLink="https://engineering.oregonstate.edu/people/alex-guyer"
  >
    Developed and tested a security-focused web application using Next.js...
  </ExperienceCard3>

  <ExperienceCard
    title="Graphics Lab Research Assistant"
    labLink="https://www.raffaeledeamicis.com/my-current-research"
    supervisorLink="https://engineering.oregonstate.edu/people/raffaele-de-amicis"
  >
    Integrated speech recognition and LLM-driven training inside a VR simulator...
  </ExperienceCard>

  <ExperienceCard
    title="Environmental Lab Research Assistant (Feb 2024 - Dec 2024)"
    labLink="https://github.com/OPEnSLab-OSU/OPEnS-Lab-Home/wiki/WeatherChimes"
    supervisorLink="https://www.chetudell.com/"
  >
    Integrated speech recognition and LLM-driven training inside a VR simulator...
  </ExperienceCard>

  <ExperienceCard3
    title="Undergraduate Lerning Assitant - Engineering 103"
    labLink="https://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=ENGR&coursenumber=103&termcode=ALL"
    supervisorLink="https://engineering.oregonstate.edu/people/donald-heer"
  >
    Developed and tested a security-focused web application using Next.js...
  </ExperienceCard3>

  <ExperienceCard2
    title="Material Lab Research Assistant"
    labLink="https://pubs.aip.org/aip/apl/article-abstract/124/4/041901/3051473/Nontoxic-precious-metal-free-titanium-based?redirectedFrom=fulltext"
    supervisorLink="https://engineering.oregonstate.edu/people/donghua-xu"
  >
    Developed and tested a security-focused web application using Next.js...
  </ExperienceCard2>
</Section>

  {/* Skills */}
  <Section id="skills" title="Skills">
    <p>
      C/C++, C#, JavaScript, Python, React, HTML/CSS, Jest,
      Cypress, Playwright, Assembly, PyTorch, Next.js, Tailwind CSS, Linux, SQL
    </p>
    <p>
      Arduino IDE, MongoDB, MATLAB, Unity, Unreal Engine 4/5,
      Microsoft Office
    </p>
  </Section>

  {/* Contact */}
  <Section id="contact" title="Contact">
    <p>
      Email:{" "}
      <a href="mailto:zaitsevanatalia13@gmail.com">
        zaitsevanatalia13@gmail.com
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/natalia-zaitseva-78153a252/"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/natalia-zaitseva-78153a252
      </a>
    </p>
    <p>
      GitHub:{" "}
      <a
        href="https://github.com/natashazai"
        target="_blank"
        rel="noreferrer"
      >
        github.com/natashazai
      </a>
    </p>
    <p className={styles.footer}>© 2025 Natalia Zaitseva</p>
  </Section>
</main>


    </>
  );
}

/* Reusable components */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
      </div>
    );
  }

  function ExperienceCard({
    title,
    children,
    labLink,
    supervisorLink
  }: {
    title: string;
    children: React.ReactNode;
    labLink: string;
    supervisorLink: string;
  }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
  
        <div className="card-links">
          <a href={labLink} target="_blank" rel="noreferrer" className="btn-link">
            Lab / Company Website
          </a>
          <a href={supervisorLink} target="_blank" rel="noreferrer" className="btn-link">
            Professor / Supervisor
          </a>
        </div>
      </div>
    );
  }

  function ExperienceCard3({
    title,
    children,
    labLink,
    supervisorLink
  }: {
    title: string;
    children: React.ReactNode;
    labLink: string;
    supervisorLink: string;
  }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
  
        <div className="card-links">
          <a href={labLink} target="_blank" rel="noreferrer" className="btn-link">
            Course Description
          </a>
          <a href={supervisorLink} target="_blank" rel="noreferrer" className="btn-link">
            Professor / Supervisor
          </a>
        </div>
      </div>
    );
  }

  function ExperienceCard2({
    title,
    children,
    labLink,
    supervisorLink
  }: {
    title: string;
    children: React.ReactNode;
    labLink: string;
    supervisorLink: string;
  }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
  
        <div className="card-links">
          <a href={labLink} target="_blank" rel="noreferrer" className="btn-link">
            Published Paper
          </a>
          <a href={supervisorLink} target="_blank" rel="noreferrer" className="btn-link">
            Professor / Supervisor
          </a>
        </div>
      </div>
    );
  }

  function ResearchCard({
    title,
    children,
    professorLink
  }: {
    title: string;
    children: React.ReactNode;
    professorLink: string;
  }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
  
        <div className="card-links">
          <a href={professorLink} target="_blank" rel="noreferrer" className="btn-link">
            Professor Website
          </a>
        </div>
      </div>
    );
  }

  function ProjectCard({
    title,
    children,
    github,
    video,
    image
  }: {
    title: string;
    children: React.ReactNode;
    github: string;
    video: string;
    image: string;
  }) {
    return (
      <div className="project-card">
        <div className="project-image">
          <Image src={image} width={800} height={450} alt={title} />
        </div>
  
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
  
        <div className="card-links">
          <a href={github} target="_blank" rel="noreferrer" className="btn-link">
            GitHub
          </a>
          <a href={video} target="_blank" rel="noreferrer" className="btn-link">
            Video Demo
          </a>
        </div>
      </div>
    );
  }
  
