# 📐 Valor Médio de Funções por Integração Numérica (Regra de Simpson)

<p align="left">
  <img src="https://img.shields.io/badge/linguagens-HTML%20%7C%20CSS%20%7C%20JS-blue" alt="Linguagens Utilizadas">
  <img src="https://img.shields.io/badge/status-ativo-brightgreen" alt="Status do Projeto">
  </p>

Este projeto é uma calculadora web que demonstra o cálculo do valor médio de funções de aceleração `a(x)` e velocidade `v(x)` pré-definidas. A integração numérica é realizada utilizando a Regra de 1/3 de Simpson, e os resultados são comparados com valores de referência (obtidos via Geogebra) para estimar o erro da aproximação.

---

## 🎯 Funcionalidades Principais

* **Integração Numérica:** Calcula a integral definida de funções de aceleração e velocidade usando a Regra de 1/3 de Simpson.
* **Cálculo de Valor Médio:** Determina o valor médio das funções no intervalo fixo `[0, 30]`.
* **Entrada do Usuário:** Permite ao usuário especificar o número de partições (`n`) para a integração. **Nota:** `n` deve ser um número par.
* **Exibição de Resultados:** Mostra as médias calculadas para aceleração e velocidade.
* **Análise de Erro:** Apresenta o erro absoluto entre o valor médio calculado e um valor de referência do Geogebra para cada função.
* **Interface Simples:** Possui uma interface de usuário clara e direta para facilitar o uso.

---

## 🚀 Como Usar

1.  **Obtenha o código:** Clone ou baixe este repositório para o seu computador.
2.  **Abra a calculadora:** Navegue até a pasta do projeto e abra o arquivo `index.html` em qualquer navegador web moderno (como Chrome, Firefox, Edge).
3.  **Defina as partições:** No campo "Número de partições", insira um **número par** (o valor padrão é 100). Um número maior de partições geralmente leva a um resultado mais preciso, mas exige mais cálculo.
4.  **Calcule:** Clique no botão "Calcular médias".
5.  **Veja os resultados:** As médias da aceleração e velocidade, juntamente com os erros de aproximação, serão exibidos na seção "Resultados".

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)

---

## 🧩 Arquivos e Componentes Principais

Este projeto é composto pelos seguintes arquivos:

* **`index.html`**: Define a estrutura da página web, incluindo o formulário para entrada do número de partições e a área onde os resultados são exibidos.

* **`style.css`**: Contém todas as regras de estilização para a interface do usuário, aplicando um tema escuro e garantindo a responsividade básica.

* **`script.js`**: Coração da calculadora, este arquivo contém toda a lógica JavaScript:
    * `aceleracao(x)`
        * **Descrição:** Representa uma função de aceleração polinomial de 11º grau.
        * **Uso:** Fornece os valores de aceleração para um dado `x` no intervalo de integração.
    * `velocidade(x)`
        * **Descrição:** Representa uma função de velocidade polinomial de 12º grau.
        * **Uso:** Fornece os valores de velocidade para um dado `x` no intervalo de integração.
    * `integrarSimpson(func, a, b, n)`
        * **Descrição:** Calcula a integral definida de uma função `func` no intervalo `[a, b]` utilizando `n` subdivisões.
        * **Método:** Implementa a Regra de 1/3 de Simpson.
        * **Parâmetros:**
            * `func`: A função a ser integrada.
            * `a`: Limite inferior do intervalo de integração.
            * `b`: Limite superior do intervalo de integração.
            * `n`: Número de partições (deve ser par).
        * **Retorna:** O valor numérico aproximado da integral.
    * `calcular()`
        * **Descrição:** Função principal acionada pelo usuário para realizar todos os cálculos.
        * **Ações:**
            * Obtém o número de partições `n` da interface.
            * Define o intervalo de integração `[a=0, b=30]`.
            * Chama `integrarSimpson` para as funções `aceleracao` e `velocidade`.
            * Calcula os valores médios.
            * Calcula o erro em relação aos valores de referência do Geogebra.
            * Atualiza a interface com os resultados.

---

## ⚙️ Detalhes das Funções de Exemplo (Aceleração e Velocidade)

As funções `aceleracao(x)` e `velocidade(x)` são definidas estaticamente no arquivo `script.js` como polinômios de 11º e 12º grau, respectivamente. Elas servem como base para os cálculos de integração e valor médio realizados pela aplicação. O intervalo de integração para estas funções está fixado em `[0, 30]`.

---

## 📝 Observações

* A precisão do cálculo pela Regra de Simpson geralmente aumenta com um número maior de partições `n`.
* O erro é calculado em relação a valores de referência específicos, que foram obtidos previamente usando o software Geogebra, servindo como uma aproximação do valor "exato".
