import React from "react";

function skill() {
  return (
    <>
      <div className="skillBody" id="Skills">
        <h1 className="HSkill">Skills</h1>
        <p class="skillHeading">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology{" "}
        </p>
        <div className="skillbox">
          <div className="skillbtn">HTML</div>
          <p class="skillbtn2">CSS</p>
          <p class="skillbtn">JavaScript</p>
          <p class="skillbtn2">ReactJS</p>
          <p class="skillbtn">Nodejs</p>
          <p class="skillbtn2">SQL</p>
          <p class="skillbtn">GIT</p>
          <p class="skillbtn2">Github</p>
          <p class="skillbtn">AWS</p>
        </div>
        <div className="skillFooter">
          I'm open to Projects opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don't hesitate to contact me.
        </div>
      </div>
    </>
  );
}

export default skill;
