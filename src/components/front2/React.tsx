function React() {

  return (
    <>
      <h3>React JS</h3>

      <p style={{ marginTop: '12px', lineHeight: '1.6' }}>
        O <strong>React</strong> é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e reutilizáveis.
        Ele permite construir aplicações web de forma eficiente por meio de componentes, facilitando a organização
        e a manutenção do código.
      </p>

      <h4 style={{ marginTop: '20px', marginBottom: '8px' }}>Características Principais:</h4>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        <li><strong>Componentização:</strong> Permite dividir a interface em componentes reutilizáveis e independentes.</li>
        <li><strong>Virtual DOM:</strong> Os dados fluem dos componentes pais para os filhos, tornando o comportamento da aplicação mais previsível.</li>
        <li><strong>Fluxo de Dados Unidirecional:</strong> Permite fazer requisições a servidores (APIs) e carregar dados dinamicamente usando a API Fetch.</li>
        <li><strong>JSX:</strong> Combina JavaScript e HTML em uma sintaxe simples e intuitiva para criar interfaces.</li>
      </ul>
    </>
  )

}

export default React