export default function Portfolio() {
  const projects = [
    {
      title: "Portfolio 1",
      description: "This is my portfolio page",
      link: "",
      repo: "",
      image: "./assets/images/profile.jpg"
    },
    {
      title: "Portfolio 2",
      description: "This is my portfolio page",
      link: "",
      repo: "",
      image: ""
    },
    {
      title: "Portfolio 3",
      description: "This is my portfolio page",
      link: "",
      repo: "",
      image: ""
    },
    {
      title: "Portfolio 4",
      description: "This is my portfolio page",
      link: "",
      repo: "",
      image: ""
    },
    {
      title: "Portfolio 5",
      description: "This is my portfolio page",
      link: "",
      repo: "",
      image: ""
    },
    {
      title: "Portfolio 6",
      description: "This is my portfolio page",
      link: "",
      repo: "",
      image: ""
    },
  ]
  return (
    <div className="container"><h1>Portfolio Page</h1>
    <div className="row">
      {projects.map((project) => {
        return (
          <div className="col-md-4 col-sm-12 mb-3" key={project.title}>
            <div className="card">
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">Link</a>
                <a href={project.repo} className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </div>
    
  )
}