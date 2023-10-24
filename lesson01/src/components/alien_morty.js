const AlienMorty = () => {
    const profile = 
      {
        id: 14,
        name: "Alien Morty",
        status: "unknown",
        species: "Alien",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
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
  
  export default AlienMorty;
  