import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      institution: 'Escuela Superior de Cómputo',
      degree: 'Ingeniería en Sistemas Computacionales',
      date: '2021 - 2025',
      description: 'Cursos relevantes: Introducción a la programación, Estructuras de Datos y Diseño de Algoritmos, POO, Bases de Datos, Desarrollo Web, Redes, Ingeniería de software, Análisis y Diseño de Sistemas y Sistemas en Chip.',
    },
    {
      institution: 'Centro de Estudios Científicos y Tecnológicos No. 3',
      degree: 'Manufactura Asistida por Computadora',
      date: '2017 - 2021',
      description: 'Cursos relevantes: Computación (Paquetería Office), Diseño asistido por computadora (SolidWorks) Eléctrica, Electrónica, Robótica, Cálculo Diferencial, Cálculo Integral y Estadística.',
    },
  ];

  return (
    <section id="education" className="education container px-3 pb-5">
      <div className="text-center mb-5">
        <h2 className="education-title display-5 fw-bolder mb-0">
          <span className="text-gradient">Educación</span>
        </h2>
      </div>
      <div className="row">
        {education.map((edu, index) => (
          <div key={index} className="col-md-6 px-3">
            <div className="education-item">
              <h3 style={{ paddingBottom: '5px' }}><strong>{edu.institution}</strong></h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-date">{edu.date}</p>
              <p className="education-description" style={{ paddingTop: '0px' }}>
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
