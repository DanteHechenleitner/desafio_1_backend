let arayProductos = [
    {   
        titulo: "Aliemto Balanceado",
        descripccion: "Upper Crock Cachorro",
        precio: 250,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_883384-MLA41106102563_032020-O.webp",
        id: 1,
        codigo: "ED01",
        stock: 10
    },
    {   
        titulo: "Aliemto Balanceado",
        descripccion: "Upper Crock Adulto",
        precio: 325,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_964965-MLA31063000520_062019-O.webp",
        id: 2,
        codigo: "ED02",
        stock: 10
    },
    {   
        titulo: "Aliemto Balanceado",
        descripccion: "Upper Crock Gatos",
        precio: 625,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_880246-MLA50822636782_072022-O.webp",
        id: 3,
        codigo: "ED03",
        stock: 10
    },


];


let opcion
let titulo
let descripccion
let precio
let imagen
let id
let codigo
let stock 


class crearProducts {
    constructor(titulo, descripccion, precio, imagen, id, codigo, stock) {
        this.titulo = titulo;
        this.descripccion = descripccion
        this.precio = precio
        this.imagen = imagen
        this.id = id
        this.codigo = codigo
        this.stock = stock
    }
}

function validarId(parametro){

    while(arayProductos.some((el) => el.codigo === codigo)){
        alert("El codigo ya existe")
        codigo = prompt("Por favor ingrese un codigo")
    }

}


function validarCampos(parametro){
    if(parametro === "" || parametro === null){
        while(parametro === "" || parametro === null){
            parametro = prompt("Por no deje datos sin completar")
        }
    }
}

function crearID(){
    return arayProductos.length;
}

function addProducts(array){
    arayProductos.push(array)
}

function inicarEnHtml(){
    while(opcion !== 0){
        opcion = Number(prompt("Ingresar una opcion: \n -1 Agregar producto \n -2 Mostrar Productos \n -3 Buscar Producto \n -0 Salir"));
        switch (opcion){
            case 1:
                titulo =  prompt("Ingrese un titulo del producto")
                validarCampos(titulo)
                descripccion = prompt("Ingrese una descripccion del producto")
                validarCampos(descripccion)
                precio = prompt("Ingresar precio")
                validarCampos(Number(precio))
                imagen = prompt("Ingresar URL de la imagen")
                validarCampos(imagen)
                codigo = prompt("Ingrese un codigo Unico")
                validarId(codigo)
                stock = prompt("Ingresar el stock")
                validarCampos(Number(stock))
                id = crearID() + 1
                let crear = new crearProducts( titulo, descripccion,precio,imagen,id,codigo,stock)
                addProducts(crear)
                console.log(arayProductos)
                break;
            case 2:
                getProducts()
            case 3:
                let buscarId = prompt("Colocar Id")
                buscarId = Number(buscarId)
                getProductById(buscarId)
        }
    }
}



function getProducts(){
    arayProductos.forEach((productos) => console.log(productos.id + "-" + productos.codigo + "-" + productos.descripccion + "-" + productos.precio));
}

function getProductById(cod){
    const artBuscado = arayProductos.filter((el) => el.id === cod).map(((el) => el.descripccion + " - "+ "Cantidad= " + el.stock))
    alert("Producto: " + artBuscado)
}

inicarEnHtml()