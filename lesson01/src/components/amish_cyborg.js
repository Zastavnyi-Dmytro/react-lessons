const AmishCyborg = () => {
    const profile = 
      {
        id: 16,
        name: "Amish Cyborg",
        status: "Dead",
        species: "Alien",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
      }
    ;
  
    return (
      <div className="profile-box">
        <img src={profile.image} className="avatar" alt="logo" />
        <p>Name:{profile.name}</p>
        <p>Status:{profile.status}</p>
        <p>Species:{profile.species}</p>
        <p>Gender:{profile.gender}</p>
      </div>
    );
  };
  
  export default AmishCyborg;
  