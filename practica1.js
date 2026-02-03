// Crea una función llamada searchPost(id).
// Dentro del try, concatena el id recibido en la URL de la API: https://jsonplaceholder.typicode.com/posts/ID.
// Usa Template Literals para construir la URL.
// Si la petición es exitosa, imprime el título del post en mayúsculas.
// Si ocurre un error (por ejemplo, si el ID no existe o no hay internet), el catch debe imprimir: "El post no pudo ser hallado".
// Subelo a GitHub

async function searchPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error('Post not found');
        }
        const post = await response.json();
        console.log(post.title.toUpperCase());
    } catch (error) {
        console.log("El post no pudo ser hallado");
    }
}   