export const BACKEND_URL = 'http://localhost:5000';
export const consultarClientes = async () => {
    const url = BACKEND_URL+'/clientes';
    const respuesta = await fetch(url);
    console.log(respuesta)
    
    const clientes = await respuesta.json();
    return clientes.map((cliente) => {
        return {
            id: cliente[0],
            foto: cliente[0], 
            cliente: cliente[1],
            id_mascota: cliente[8],
            mascota: cliente[9],
        };
    });
};

export const consultarDocumentos = async (id_mascota) => {
    const url = BACKEND_URL+'/documentos';
    const respuesta = await fetch(url);
    const documentos = await respuesta.json();
    return documentos.map((documento) => {
        return {
            id: documento[0],
            documento: documento[1],
            ruta: documento[2],
            id_mascota: documento[3],
        };
    }).filter((documento) => documento.id_mascota === id_mascota);
};

export const login = async (usuario, contrasena) => {
    const url = BACKEND_URL+'/login';
    const formData = new FormData();
    formData.append('username', usuario);
    formData.append('password', contrasena);
    const respuesta = await fetch(url, {
        method: 'POST',
        body: formData,
    });
    const resultado = await respuesta.json();
    return resultado[0];
};

export const guardarDatosModificados = (datosFormulario) => {
    return fetch(`${BACKEND_URL}/api/guardar-datos-modificados`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosFormulario),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error al guardar los datos modificados:', error);
      });
  };