const Repositories = ({ repos }) => {
    return (
      <>
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
        </ul>
      </>
    );
  };
  
  export default Repositories;
  