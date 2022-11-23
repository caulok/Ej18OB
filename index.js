// - En el fichero index.js:
// - Crea una variable con tu nombre
// - Crea una variable con tu apellido
// - Crea un objeto con tu nombre y tu apellido
// - Almacena el objeto anterior en la SessionStorage
// - Almacena el objeto anterior en la LocalStorage
// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
// - Observa cómo la SessionStorage está vacía
// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado

const nombre = 'Ramiro';
const apellido = 'Caulo';

const nombreCompleto = {
    nombre,
    apellido
}
const now = new Date();

const nombreCompletoSession = sessionStorage.setItem('persona', JSON.stringify(nombreCompleto));
const nombreCompletoLocal = localStorage.setItem('persona', JSON.stringify(nombreCompleto));
document.cookie = 'Datos=Cookie';
document.cookie = `Datos=${JSON.stringify(nombreCompleto)};expires=${new Date(now.getTime() + 2 * 60000)}`;
