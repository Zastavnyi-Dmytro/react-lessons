const RickSanchez = () => {
  const profile = 
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
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

export default RickSanchez;
