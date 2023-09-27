window.onload = inicio;

function inicio() {
    const formulario_iniciar_sesion = document.getElementById("formIniciarSesion");
    formulario_iniciar_sesion.addEventListener("submit", iniciar_sesion);
}

function iniciar_sesion(evento) {
    evento.preventDefault();
    let usuario = validar_usuario_password();
    // hard-codeo administrador de stocks
    const hard_admin_stock = "adminstock";
    // hard-codeo vendedor
    const hard_vendedor = "vendedor";
    // hard-codeo gerente
    const hard_gerente = "gerente";

    if (usuario == hard_admin_stock) {
        window.location = "index-admin-stock.html";
    } else if (usuario == hard_vendedor) {
        window.location = "index-vendedor.html";
    } else if (usuario == hard_gerente) {
        window.location = "index-gerente.html";
    } else {
        // ocurrieron errores al iniciar sesión
    }
}

function validar_usuario_password() {
    // hard-codeo administrador de stocks
    const hard_admin_stock = "adminstock";
    // hard-codeo vendedor
    const hard_vendedor = "vendedor";
    // hard-codeo gerente
    const hard_gerente = "gerente";
    // hard-codeo contraseña (igual para todos los usuarios)
    const hard_password = "1234";
    // iniciar sesion hard-codeado
    const usuario = document.getElementById("idNombreDeUsuario");
    let usuario_valor = usuario.value;
    let error_usuario = document.getElementById("errorNombreUsuario");
    usuario.classList.remove("is-invalid");
    const password = document.getElementById("idpassword");
    let password_valor = password.value;
    let error_password = document.getElementById("errorContrasenha");
    password.classList.remove("is-invalid");
    // para hacer la validacion final
    let contador = 0;
    console.log(usuario_valor);
    if (usuario_valor == hard_admin_stock || usuario_valor == hard_gerente || usuario_valor == hard_vendedor) {
        // paso la validacion
    } else if (!usuario_valor) {
        usuario.classList.add("is-invalid");
        error_usuario.innerHTML = "Campo usuario no puede quedar vacío. Ingrese su usuario.";
        contador++;
        // paso la validacion
    } else {
        usuario.classList.add("is-invalid");
        error_usuario.innerHTML = "Usuario incorrecto. Vuelva a intentarlo.";
        contador++;
    }

    if (!password_valor) {
        password.classList.add("is-invalid");
        error_password.innerHTML = "Campo password no puede quedar vacío. Ingrese su contraseña.";
        contador++;
    } else if (password_valor != hard_password) {
        password.classList.add("is-invalid");
        error_password.innerHTML = "Constraseña incorrecta. Vuelva a intentarlo.";
        contador++;
    } else {
        // paso la validacion de password
    }

    if (contador >= 1) {
        console.log("Se encontraron " + contador + " errores al validar usuario y/o password");
        return false;
    } else {
        // mando el usuario a iniciar_sesion()
        return usuario_valor;
    }
}