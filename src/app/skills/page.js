export default function SkillsEducation() {
  const education = [
    {
      institution: "Jinnah College Of Commerce and Sciences Gojra",
      degree: "Intermediate, Pre-Engineering",
      grade: "Grade: 12",
    },
  ];

  const skills = [
    "Team Management",
    "Web Development",
    "Team Leadership",
    "Next.js",
    "Node.js",
    "MongoDB",
    "CSS",
    "JavaScript",
    "Graphic Design",
    "Flyer Design",
    "Social Media",
  ];

  return (
    <section id="skills-education" className="py-5 position-relative">
      <div className="container">
        {/* Education Section */}
        <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Education
        </h2>
        <div className="row">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">{edu.institution}</h5>
                  <p className="card-text">
                    <strong>Degree:</strong> {edu.degree}
                    <br />
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Skills
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <ul className="list-inline">
                  {skills.map((skill, index) => (
                    <li key={index} className="list-inline-item bg-light text-dark px-3 py-2 m-1 rounded">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}