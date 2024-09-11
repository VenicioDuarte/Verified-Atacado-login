document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Limpa mensagens anteriores
    errorMessage.textContent = "";

    // Verifica se o usuário e senha estão corretos
    if (username === "Venicio" && password === "seguidores") {
        errorMessage.classList.remove("errorMessage");
        errorMessage.classList.add("successMessage");
        errorMessage.textContent = "Login bem-sucedido! Redirecionando...";

        // Redireciona para o link após o login bem-sucedido
        setTimeout(() => {
            window.location.href = "https://play.google.com/store/apps/details?id=com.app.httpsverifiedscatacadocom";
        }, 2000); // Atraso de 2 segundos para exibir a mensagem antes de redirecionar
    } else {
        errorMessage.classList.remove("successMessage");
        errorMessage.classList.add("errorMessage");
        errorMessage.textContent = "Usuário ou senha incorretos.";
    }
});
