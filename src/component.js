import React from "react";

function Componente({ fetchUser }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchUser(1).then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, [fetchUser]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return <div>Usuario: {user.name}</div>;
}

export default Componente;
