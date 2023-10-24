const Annie = () => {
    const profile = 
      {
        id: 17,
        name: "Annie",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
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
  
  export default Annie;
  