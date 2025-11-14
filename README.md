## 📄 README: Contador Regressivo (Count Down)

Olá\! Este projeto é um contador regressivo simples, estilizado com um tema escuro (dark mode), baseado no design visual fornecido. Ele exibe o tempo restante em Dias, Horas, Minutos e Segundos até uma data alvo pré-definida.

-----

### ✨ Tecnologias Utilizadas

O projeto utiliza a trilogia básica do desenvolvimento web:

  * **HTML5:** Estrutura e marcação dos elementos do contador.
  * **CSS3:** Estilização, layout e tema escuro (Dark Mode).
  * **JavaScript (ES6+):** Lógica principal para calcular e atualizar o tempo restante a cada segundo.

### 🚀 Como Executar

Para rodar este contador em sua máquina, siga estes passos simples:

1.  **Crie os Arquivos:** Crie três arquivos na mesma pasta:
      * `index.html` (para o HTML)
      * `style.css` (para o CSS)
      * `script.js` (para o JavaScript)
2.  **Copie o Código:** Cole o código fornecido anteriormente em seus respectivos arquivos.
3.  **Abra no Navegador:** Clique duas vezes no arquivo `index.html` ou abra-o em seu navegador de preferência (Chrome, Firefox, Edge, etc.).

O contador será iniciado automaticamente.

### 🛠️ Configuração e Personalização

Você pode facilmente ajustar a data alvo da contagem regressiva editando o arquivo **`script.js`**.

#### 1\. Alterando a Data Alvo

No arquivo `script.js`, procure por esta linha:

```javascript
// A data alvo padrão é 76 dias a partir do momento em que o código foi executado
const targetDate = new Date(); 
targetDate.setTime(targetDate.getTime() + (76 * 24 * 60 * 60 * 1000));
const countdownDate = targetDate.getTime();
```

**Para definir uma data específica (Ex: 31 de Dezembro de 2025 às 23:59:59):**

Substitua as linhas acima pela seguinte, ajustando a data conforme necessário:

```javascript
// Defina uma data e hora específicas no formato "Ano-Mês-Dia Hora:Minuto:Segundo"
const countdownDate = new Date("2025-12-31 23:59:59").getTime();
```

#### 2\. Personalizando o Estilo

Você pode mudar as cores, fontes e espaçamento editando o arquivo **`style.css`**.

| Propriedade | Exemplo de Alteração | Descrição |
| :--- | :--- | :--- |
| `background-color` (body) | `#0a0a0a` | Altera a cor de fundo principal. |
| `color` (body) | `lightblue` | Altera a cor do texto principal. |
| `.number` (`font-size`) | `5em` | Altera o tamanho dos números do contador. |

### 🛑 Comportamento ao Finalizar

Quando o tempo de contagem regressiva atinge zero, o código JavaScript pára de atualizar o tempo (limpa o `setInterval`) e o título **"Count Down"** é alterado para **"Tempo Esgotado\!"**.

-----

Gostaria que eu criasse um arquivo `.zip` com estes três arquivos (`index.html`, `style.css` e `script.js`) para facilitar o download?
