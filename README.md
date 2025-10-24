# 🎮 Jogo de Adivinhação

Um jogo simples e divertido onde você precisa adivinhar um número entre 1 e 100 que foi gerado aleatoriamente pelo computador.

## 📋 Descrição

Neste jogo, o computador gera um número aleatório entre 1 e 100, e o jogador tem 10 tentativas para adivinhar qual é esse número. A cada tentativa, o jogo fornece dicas informando se o número correto é maior ou menor que o número escolhido pelo jogador.

## 🚀 Como Jogar

1. Abra o arquivo `index.html` no seu navegador
2. Digite um número entre 1 e 100 no campo de entrada
3. Clique no botão "Chutar" para fazer sua tentativa
4. O jogo irá informar se você:
   - Acertou o número
   - Precisa chutar um número maior
   - Precisa chutar um número menor
5. Você tem 10 tentativas para acertar o número

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## 📝 Regras do Jogo

- O jogador tem 10 tentativas para adivinhar o número
- Apenas números entre 1 e 100 são válidos
- A cada tentativa, o jogo informa se o número correto é maior ou menor
- O jogo termina quando:
  - O jogador acerta o número (Vitória! 🎉)
  - As 10 tentativas se esgotam (Game Over 😢)

## 💡 Dicas

- Preste atenção nas dicas fornecidas após cada tentativa
- Use uma estratégia de busca binária: comece com 50 e ajuste suas próximas tentativas baseado nas dicas
- Mantenha o controle das tentativas restantes

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido como exercício para praticar:
- Manipulação do DOM com JavaScript
- Eventos de formulário
- Lógica de programação
- Estruturas condicionais
- Geração de números aleatórios