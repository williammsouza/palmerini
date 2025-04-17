import React from 'react';
import '../assets/styles/Expertise.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';

const frontendTech = [
  'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS',
  'Redux', 'Material UI', 'Bootstrap', 'Jest', 'Angular'
];

const backendTech = [
  'Node.js', 'Express', 'NestJS', 'Python', 'SQLServer',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'MariaDB', 'DynamoDB',
  'GraphQL', '.NET', 'GO', 'C#', 'Memcached'
];

const devopsTech = [
  'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions',
  'Jenkins', 'Terraform', 'Grafana', 'Linux', 'Datadog', 'Nginx', 'SonarQube', 'Selenium',
  'RabbitMQ', 'Scrum', 'Kanban'
];

function Expertise() {
  return (
    <div id="expertise" className="expertise-container">
      <div className="section-title">
        <h2>Áreas de Especialização</h2>
        <div className="underline"></div>
        <p className="section-description">
          Com mais de 10 anos de experiência no desenvolvimento de aplicações, adquiri proficiência em diversas tecnologias e metodologias que me permitem criar soluções completas e eficientes para os mais variados desafios.
        </p>
      </div>

      <div className="expertise-content">
        <div className="skills-grid">
          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Desenvolvimento Front-end</h3>
            <p>
              Experiência no desenvolvimento de interfaces modernas e responsivas, focando em uma experiência de usuário.
            </p>
            <div className="tech-stack">
              {frontendTech.map((tech, index) => (
                <Chip key={index} label={tech} className="chip" />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faServer} />
            </div>
            <h3>Desenvolvimento Back-end</h3>
            <p>
              Desenvolvimento de APIs robustas, escaláveis e seguras, com foco em performance e boas práticas. Experiência com diferentes bancos de dados, autenticação, autorização e integração com serviços de terceiros.
            </p>
            <div className="tech-stack">
              {backendTech.map((tech, index) => (
                <Chip key={index} label={tech} className="chip" />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3>DevOps & Automação</h3>
            <p>
              Implementação de pipelines de CI/CD, containerização de aplicações, infraestrutura como código e monitoramento. Experiência com cloud providers e práticas de segurança para garantir a disponibilidade e confiabilidade das aplicações.
            </p>
            <div className="tech-stack">
              {devopsTech.map((tech, index) => (
                <Chip key={index} label={tech} className="chip" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;