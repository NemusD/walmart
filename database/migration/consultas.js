db.createUser(
  {
    user: "nemus",
    pwd: "nemus",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);

exports.obtenerUsuarios = async function (req, res){
    try{
        const resultado = await query( "SELECT id, brand, description FROM 01-products.json");
        response = { status: "200", message: "Productos encontrados", result: resultado.rows};
        res.status(200).send(response);
    } catch (error){
        response = {
            response: { error: "500", message: "Error, no hay registro" },
        };
        console.log(error);
        res.status(500).send(response);
    }
};

exports.login = async function (email, password){
    try{
        const resultado = await query( "SELECT  email, password FROM 01-products.json");
        let data = resultado.rows.find(user => user.email === email);
        if(data && data.password != password ){
            data = 0;
        }
        return data;
    } catch (error){
        console.log(error);
        return 0
    }
};

exports.crearUsuario = async function ( req, res ) {
    try{
        let data = res.req.body;
        const resultado = await query(`INSERT INTO usuarios (email, password) VALUES (${data.id}, ${data.brand}, ${data.description}`);  
        const usuarioNuevo = resultado.rows[0];

        response = { status: "200", message: "Usuario registrado", result: usuarioNuevo};
        res.status(200).send(response);

        // return usuarioNuevo;
    } catch (error){
        response = {
            response: { error: "500", message: "Error de registro" },
        };
        console.log(error);
        res.status(500).send(response);
    }
};

exports.buscarPalindromo = async function (req, res) {
	let palabra = req.prompt("Escribe una palabra").toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra = palabra.replace(/ /g, "");
 
	for (let i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return res.palabra;
}
if(texto())
{
	alert("Esto es palíndromo");
}else{
	alert("Esto no es palíndromo")
}

const obj = 01-products.json

let data_brand = [];
let data_id = [];
let data_description = [];

Object.keys(obj[0]).forEach( e => {
    data_brand.push(obj[0][e].brand);
    data_id.push(obj[0][e].id);
    data_description.push(obj[0[e]].description);
});

console.log(data_description);
console.log(data_id);
console.log(data_brand);

