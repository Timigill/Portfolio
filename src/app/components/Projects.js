import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'School Template for Chenab Group of Schools',
            description: 'Created a full-stack school website using React, Node.js, Express, and MongoDB. The site includes a secure admin panel, dynamic student data management, and a responsive, user-friendly design for seamless access across devices.',
            image: '/Chenab.png', // Replace with the actual image path
        },
        {
            title: 'SkillMatch.Tech: A Complete Clone',
            description: 'Built a full-stack eCommerce shoe store using React, Node.js, Express, and MongoDB. Implemented secure auth, dynamic product views, and real-time cart features with toast alerts and live total updates via RESTful APIs.',
            image: '/skill.png', // Replace with the actual image path
        },
        {
            title: ' StepHub: A Shoe Store Template',
            description: 'Developed a full-stack Shoes Store application with secure user authentication, dynamic product display, and real-time cart management. Integrated toast notifications and total price calculation, with all data handled via a backend API connected to MongoDB.',
            image: '/Store.png', // Replace with the actual image path
        },
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container position-relative " >
                <h2 className="text-center " style={{
                    fontSize: "3rem", // Match the Hero section heading size
                    fontWeight: "600", // Match the boldness of the Hero section heading

                    letterSpacing: "1.5px", // Subtle letter spacing for consistency
                    marginBottom: "20px", // Space below heading
                    position: "relative",
                }}  >My Projects</h2>
                <p className="text-center position-relative">
                    Here are some of the projects I’ve worked on recently.
                </p>
                <div className="row">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}