import React from "react";

function Team() {
  // بيانات الفريق
  const teamMembers = [
    {
      img: "images/team-1.png",
      name: "Luke Skywalker",
      quote: "“I don't understand how we got by those troops. I thought we were dead.“",
    },
    {
      img: "images/team-2.png",
      name: "Leia Organa",
      quote: "“The Force will be with you. Always.“",
    },
    {
      img: "images/team-3.png",
      name: "Han Solo",
      quote: "“Never tell me the odds!“",
    },
    {
      img: "images/team-4.png",
      name: "Obi-Wan Kenobi",
      quote: "“The Force will guide us.“",
    },
  ];

  return (
    <div className="team text-center pb-5 pt-5">
      <div className="container pb-5 pt-5">
        <h2 className="fw-bold">Meet The Team</h2>
        <p className="text-black-50 mb-5">
          Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
        </p>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="box bg-white">
                <img className="img-fluid" src={member.img} alt={member.name} />
                <h4 className="p-3 text-light fw-bold">{member.name}</h4>
                <blockquote className="text-black-50 p-3">{member.quote}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// "Bu bölümün arka planını bu renkte yapmak istiyorum ve isimleri mavi renkte yapmak istiyorum."

export default Team;
