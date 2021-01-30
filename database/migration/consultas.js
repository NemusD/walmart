const { Pool } = require('pg');
const pool = new Pool ({
    user:"postgres",
    host: "localhost",
    password: "postgres",
    database: "walmart",
    port: 5432,
});

exports.obtenerUsuarios = async function (req, res){
    try{
        const resultado = await pool.query( "SELECT id, brand, description FROM 01-products.json");
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
        const resultado = await pool.query( "SELECT  email, password FROM 01-products.json");
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
        const resultado = await pool.query(`INSERT INTO usuarios (email, password) VALUES (${data.nombre}, ${data.email}, ${data.password}`);  
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


//funcion formulario para calcular precio producto.
exports.calcula_precio = async function (req,res) {
    //aqui cojo el elemento de la lista seleccionado.
    try{
        if(document.getElementById("opciones").selectedIndex){
        seleccion = document.getElementById("opciones").value;
        }
        //else{alert("Debes seleccionar un producto"); return false;}  
   
     //aqui cojo el elemento radio seleccionado.
        for(let i=0; i<document.formu.estado.length;i++){
        if(document.formu.estado[i].checked){
        seleccionado = document.formu.estado[i].value;
        }
        }
   
     //aqui cojo la cantidad introducida por el usuario.  
   let unidades = document.getElementById("cantidad").value;
    if(unidades > 0){
      let unidades
      }
        //else{alert("Debes poner número días");return false;  } 
   
      //aqui cojo el valor del iva si ha sido seleccionado.
   if(document.getElementById("iva").checked){
    impuesto = document.getElementById("iva").value;}
   
     //y aqui realizo la ecuación.
       if(document.getElementById("iva").checked){
       var precio = (parseInt(seleccion) + parseInt(seleccionado)) * parseInt(unidades);
       var precioConImpuestos = (1 + parseInt(impuesto)/100) * precio;
       document.getElementById("precio").value = precioConImpuestos.toFixed(2);}
       else{ var precio = (parseInt(seleccion) + parseInt(seleccionado)) * parseInt(unidades);
       document.getElementById("precio").value = precio.toFixed(2); }}