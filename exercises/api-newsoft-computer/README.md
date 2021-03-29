
# [<img src="https://newsoftcomputer.com/images/NC/Imagotipo%20Verde%20Android.png" width="120" height="120" />](https://www.newsoftcomputer.com)

# NC - Newsoft Computer


[<img src="https://newsoftcomputer.com/images/tecnologias/React-GraphQL-Apollo.png" width="80" height="80" />](https://es.reactjs.org/docs/react-api.html)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="80" height="80" />](https://www.creative-tim.com/product/material-dashboard-pro-react)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="80" height="80" />](https://www.creative-tim.com/product/material-dashboard-pro)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-dashboard-pro)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-pro-angular2)
[<img src="https://newsoftcomputer.com/images/tecnologias/mongodb-logo.png" width="80" height="70" />](https://es.reactjs.org/docs/react-api.html)

## REACT - GRAPHQL - APOLLO - NODEJS - MONGODB



# [<img src="https://newsoftcomputer.com/images/tecnologias/Code%2815%29.png"  />](https://es.reactjs.org/docs/react-api.html)
### REACT DOCUMENTACION



# [<img src="https://newsoftcomputer.com/images/tecnologias/React-GraphQL-Apollo.png" width="80" height="80" />](https://es.reactjs.org/docs/react-api.html)
### INSTALACION DE APOLLO CLIENTE

+ Instalacion de Apollo Client (SE INSTALA SOLO LA PRIMERA VEZ)

Se instala solo en el client

$ npm install --save apollo-boost react-apollo graphql graphql-tag


+ [Perfect-scrollbar](https://github.com/utatti/perfect-scrollbar) for the slim and beautiful scrollbars.
Code(15).png


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MUTATIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
MUTATIONS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MUTATIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


======================================================================================
MUTATION CREAR
======================================================================================

 - Crea un registro

============================= Sin campos anidados ===============================

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation CREAR - Playground
Sin campos anidados
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

mutation crearUser($input: UserInput){
  crearUser(input: $input){
    name
    lastname
    email
  }
}


<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation Variables CREAR - Playground
con campo anidados
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{
  "input": {
    "name": "Andres",
    "lastname": "Giraldo",
    "email": "Newsoft Computer"
  }
}




============================= Con campos anidados ===============================

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation CREAR - Playground
Con campos anidados
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

mutation crearUser($input: UserInput){
  crearUser(input: $input){
    id
    name
    lastname
    emails
    password
    status
  }
}


<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation Variables CREAR - Playground
con campo anidados
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{
  "input": {
    "name": "Andres",
    "lastname": "Giraldo",
    "emails": {
      "email": "andresncadmin@nc.com"
    },
    "password": "123456",
    "status": "true"
  }
}





======================================================================================
MUTATION EDITAR
======================================================================================

- Edita un registro (Se debe agregar el id del registro a editar)

============================= Sin campos anidados ===============================

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation EDITAR - Playground
Con campos anidados
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
mutation {
  editarUser(input: {
    id: "5d66fd512f51b3416c11fbf4"
    name: "Daniela"
    lastname:"Giraldo"
    email: "danielagiraldo@nc.com"
    edad: 15
    tipo: PREMIUM
    pedidos: [
      {
        producto: "Iphone"
        precio: 1500000
      },
      {
        producto: "Universidad"
        precio: 6000000
      }
    ]
  })
  
   {
    id
    name
    lastname
    email
  }
}



============================= Con campos anidados ===============================

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation EDITAR - Playground
Con campos anidados
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
mutation {
  editarUser(input: {
    id: "5d66fd512f51b3416c11fbf4"
    name: "Daniela"
    lastname:"Giraldo"
    empresa: "Newsoft Computer"
    email: "danielagiraldo@nc.com"
    edad: 15
    tipo: PREMIUM
    pedidos: [
      {
        producto: "Iphone"
        precio: 1500000
      },
      {
        producto: "Universidad"
        precio: 6000000
      }
    ]
  })
  
   {
    id
    nombre
    apellido
    empresa
    edad
  }
}




======================================================================================
MUTATION ELIMINAR
======================================================================================

- Elimina un registro (Se debe agregar el id del registro a eliminar)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mutation ELIMINAR- Playground
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
mutation {
  eliminarCliente(id: "5d66fd512f51b3416c11fbf4")
}
















!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! QUERIES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
QUERIES
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! QUERIES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


======================================================================================
QUERY - CONSULTAR TODOS LOS REGISTROS
======================================================================================

- Consultar todos los registros de la tabla o coleccion (Muestra todo los registros de la tabla)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Query - Playground
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
query {
  getClientes{
    id
    name
    lastname
    email
  }
}

======================================================================================
QUERY - CONSULTA CON ID
======================================================================================

- Consulta para obtener registro desde un ID (Solo muestra un solo registro)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Query - Playground
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
query {
  getUser(id: "5d671c535eb3c431ac6b939d"){
    id
    name
    lastname
    email
  }
}

======================================================================================
QUERY - CONSULTA TODOS LOS REGISTROS CON UN LIMITE DE CANTIDAD
======================================================================================

- Consulta los registros pero se pone un limite de registros a mostrar

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Query - Playground
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
query {
  getUsersLimite(limite: 3){
    id
    name
    lastname
    email
    
  }
}