const Skills = () => {
  const linkProduct = () => {
    window.location.href = "https://shop-interior.vercel.app/";
  };
  return (
    <>
      <div className="container">
        <div className="main-content-right">
          <p className="title-main">Skills</p>
          <h1 className="title-main-contact">My Skills</h1>
          <span className="sayings">
            I would love to hear from the company about my CV. However, I
            noticed that my CV still has many flaws. I hope you can help me
            improve my CV to increase my chances of getting a positive response.
          </span>
          <h2 className="my-skills">My Skillset </h2>
          <div className="skill-synthesis">
            <div className="ski-sy">
              <div className="ss-01 sk">
                <p>Skill 1</p>
                <p>Subtitle</p>
              </div>
              <div className="ss-02 sk">
                <p>Skill 2</p>
                <p>Subtitle</p>
              </div>
            </div>
          </div>
          <div className="sk-syns">
            <div className="ski-sy">
              <div className="ss-03 sk">
                <p>Skill 3</p>
                <p>Subtitle</p>
              </div>
              <div className="ss-04 sk">
                <p>Skill 4</p>
                <p>Subtitle</p>
              </div>
            </div>
          </div>
          <h3 className="my-skills">Product </h3>
          <div className="ss-05 sk">
            <p onClick={linkProduct}>Click Me😘</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
