//Con la palabra clave export importamos codigo, pero recuerda usar el type module
export const getData = async () =>{
    try{
        const API_RESET = "https://rickandmortyapi.com/api/character";

        //El metodo fetch() Se utiliza para hacer peticiones de forma asincrona, esto devuelve un objeto "Response". este es la respuesta a la solicitud realizada; con esto podemos obtener o enviar datos. nota importante esta basado en promesas
        const objJsonResponse = await fetch(API_RESET); //tarea asincrona


        //lee el objeto "response", y devuelve un objeto comun y corriente :)
        const objLiteral = await objJsonResponse.json();

        // throw new Error("LA api externa falla");

        //results En duDa
        return objLiteral.results;
    }catch(error){
        console.log("Esta")
    }
}