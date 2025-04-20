export default function Experience() {
  const experiences = [
    {
      title: "Web Development Lead",
      company: "Gamicacloud",
      type: "Full-time",
      duration: "Aug 2024 - Present · 9 mos",
      location: "Remote, Gojra, Punjab, Pakistan",
      skills: ["Web Development", "Node.js", "Next.js", "MongoDB", "CSS", "JavaScript", "Team Leadership"],
    },
    {
      title: "Graphic Designer",
      company: "The Arqam Schools",
      type: "Part-time",
      duration: "Aug 2024 - Present · 9 mos",
      location: "Remote, Gojra, Punjab, Pakistan",
      skills: ["Graphic Design", "Flyer Design", "Social Media"],
    },
  ];

  return (
    <section id="experience" className="py-5 position-relative">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Experience
        </h2>
        <div className="row">
          {experiences.map((exp, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">{exp.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{exp.company} · {exp.type}</h6>
                  <p className="card-text">
                    <strong>Duration:</strong> {exp.duration}
                    <br />
                    <strong>Location:</strong> {exp.location}
                    <br />
                    <strong>Skills:</strong> {exp.skills.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}