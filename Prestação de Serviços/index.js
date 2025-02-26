alert("Prestação de Serviços agradece a preferência.");

// Abre o formulário de contato ao clicar no botão
document.getElementById("botaoContato").addEventListener("click", function () {
    document.getElementById("formularioContato").style.display = "block";
});

// Fecha o formulário ao clicar no botão "Fechar"
document.getElementById("fecharFormulario").addEventListener("click", function () {
    document.getElementById("formularioContato").style.display = "none";
});

// Limita o valor do telefone a apenas números
document.getElementById("fone").addEventListener("input", function (e) {
    this.value = this.value.replace(/\D/g, ""); // Remove qualquer coisa que não seja número
});

// Atualiza o contador de caracteres enquanto digita
document.addEventListener("DOMContentLoaded", function () {
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    mensagem.addEventListener("input", function () {
        const restante = 250 - mensagem.value.length;
        contador.textContent = `${restante} caracteres restantes`;
    });
});

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efeito de rolagem suave
    });
}

// Atribuindo o evento de clique para cada botão de serviço
document.getElementById('segurancaBtn').addEventListener('click', function() {
    document.getElementById('seguranca').style.display = 'block';
    scrollToTop();
});
document.getElementById('limpezaBtn').addEventListener('click', function() {
    document.getElementById('limpeza').style.display = 'block';
    scrollToTop();
});
document.getElementById('alimentoBtn').addEventListener('click', function() {
    document.getElementById('alimento').style.display = 'block';
    scrollToTop();
});
document.getElementById('mecanicaBtn').addEventListener('click', function() {
    document.getElementById('mecanica').style.display = 'block';
    scrollToTop();
});
document.getElementById('jardinagemBtn').addEventListener('click', function() {
    document.getElementById('jardinagem').style.display = 'block';
    scrollToTop();
});
document.getElementById('saudeBtn').addEventListener('click', function() {
    document.getElementById('saude').style.display = 'block';
    scrollToTop();
});
document.getElementById('outrosBtn').addEventListener('click', function() {
    document.getElementById('outros').style.display = 'block';
    scrollToTop();
});

// Função para fechar todas as seções de serviços
function closeAllServices() {
    const sections = document.querySelectorAll('div[id^="seguranca"], div[id^="limpeza"], div[id^="alimento"], div[id^="mecanica"], div[id^="jardinagem"], div[id^="saude"], div[id^="outros"]');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// Seleciona o link e o modal
const sobreNosLink = document.getElementById("sobreNosLink");
const sobreNosModal = document.getElementById("sobreNosModal");
const closeModal = document.getElementById("closeModal");

// Quando o link "Sobre nós" for clicado, mostra o modal
sobreNosLink.addEventListener("click", (event) => {
    event.preventDefault();  // Evita o comportamento padrão do link
    sobreNosModal.style.display = "flex";  // Exibe o modal
});

// Quando o botão de fechar for clicado, esconde o modal
closeModal.addEventListener("click", () => {
    sobreNosModal.style.display = "none";  // Esconde o modal
});

// Quando o usuário clicar fora do modal, também o fecha
window.addEventListener("click", (event) => {
    if (event.target === sobreNosModal) {
        sobreNosModal.style.display = "none";  // Esconde o modal
    }
});