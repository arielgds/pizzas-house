// Dados do Cardápio (pode ser substituído por um JSON no futuro)
const cardapio = [
    { nome: "Margherita", ingredientes: "Molho de tomate, mussarela, manjericão", preco: "R$ 45/pessoa", img: 'media/img/marguerita.webp' },
    { nome: "Calabresa", ingredientes: "Calabresa artesanal, cebola, azeitonas", preco: "R$ 50/pessoa", img: 'media/img/calabresa.webp' },
    { nome: "Vegetariana", ingredientes: "Berinjela, abobrinha, pimentões grelhados", preco: "R$ 55/pessoa", img: 'media/img/vegana.webp' }
];

// Gerar Cards do Cardápio
function renderCardapio() {
    const container = document.getElementById('cardapio-list');
    let html = '';

    cardapio.forEach(item => {
        html += `
            <div class="col-md-4">
                <div class="card cardapio-card h-100">
                    <img src="${item.img}" class="card-img-top" alt="${item.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">${item.ingredientes}</p>
                        <p class="text-danger fw-bold">${item.preco}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Validação do Formulário
document.getElementById('formAgendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const whatsappMessage = 
        `Olá! Gostaria de agendar um rodízio para:
        Data: ${formData.get('date')}
        Horário: ${formData.get('time')}
        Pessoas: ${formData.get('number')}
        Endereço: ${formData.get('address')}`;

    // Abrir WhatsApp com mensagem pré-formatada
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Feedback visual
    alert('Agendamento enviado! Entraremos em contato para confirmar.');
    this.reset();
});

// Rotação de Texto Simples (Banner)
const frases = ["Rodízio Premium", "Ingredientes Frescos", "Atendemos Festas"];
let indice = 0;

function rotacionarTexto() {
    document.querySelector('.carousel-caption h1').textContent = frases[indice];
    indice = (indice + 1) % frases.length;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCardapio();
    setInterval(rotacionarTexto, 3000);
});