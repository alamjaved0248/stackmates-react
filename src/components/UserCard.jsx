import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoURL, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img className="image justify-center my-5" src={photoURL} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center my-4">
          {firstName + " " + lastName}
        </h2>
        {age && gender && (
          <p className="age-center justify-center my-4">{age + " " + gender}</p>
        )}
        {about && <p className="text-center justify-center my-4">{about}</p>}
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
