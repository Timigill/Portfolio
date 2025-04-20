export default function ProjectCard({ title, description, image }) {
    return (
      <div className="col-md-4 mb-4 position-relative">
        <div className="card h-100 shadow-sm">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                fontWeight: "600",
                position: "relative",
              }}
            >
              {title}
            </h5>
            <p className="card-text position-relative text-muted"
             style={{
                fontSize: "0.9rem",
                position: "relative",
              }}
              >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  