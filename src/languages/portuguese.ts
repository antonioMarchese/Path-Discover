export interface LanguageTexts {
  title: string;
  startNodeText: string;
  targetNodeText: string;
  wallNodeText: string;
  clearButtonText: string;
  algorithmsButtonText: string;
  mazeGeneratorButtonText: string;
  visualizeButton: string;
  speedButon: string;
  tutorialTitle: string;
  tutorialPage0: string;
  tutorialPage1: string;
  tutorialPage1Title: string;
  tutorialPage2: string;
  tutorialPage2Title: string;
  tutorialPage3: string;
  tutorialPage3Title: string;
  tutorialPage4: string;
  tutorialPage4Title: string;
}

export const portugueseTexts: LanguageTexts = {
  title: "Escolha um algoritmo e visualize!",
  startNodeText: "Nó Inicial",
  targetNodeText: "Nó Alvo",
  wallNodeText: "Nó de Parede",
  clearButtonText: "Limpar Grade",
  algorithmsButtonText: "Algoritmos",
  mazeGeneratorButtonText: "Gerar Labirinto",
  visualizeButton: "Visualizar",
  speedButon: "Velocidade",
  tutorialTitle: "Bem-vindo(a) ao PathDiscover Visualizer!",
  tutorialPage0:
    "Este aplicativo ilustra como alguns algoritmos de busca de caminho funcionam ao procurar um caminho entre dois pontos. Todos os algoritmos aqui são adaptados para uma grade 2D, onde cada virada de 90 graus e cada movimento de um nó para outro têm um 'custo' de 1.",
  tutorialPage1:
    "Você pode começar selecionando o 'Muro'. Em seguida, pode clicar e arrastar para criar muros em todo o quadro. Além disso, você pode clicar em 'Gerar Labirinto' para gerar um novo labirinto. Caso seja necessário quebrar algum muro, basta selecionar 'Nó de Partida' ou 'Nó de Chegada' e clicar em cima do muro desejado. Depois é só reposicionar o seu nó.",
  tutorialPage2:
    "Você também pode selecionar 'Nó de Partida' para definir um ponto de partida e 'Nó de Chegada' para definir o objetivo.",
  tutorialPage3:
    "Depois de ter um 'Nó de Partida' e um 'Nó de Chegada', você pode clicar no botão de algoritmos e escolher um deles para ver como ele funciona.",
  tutorialPage4:
    "Agora, tudo que você precisa fazer é clicar no botão de visualização. Divirta-se!",
  tutorialPage1Title: "Colocando Muros",
  tutorialPage2Title: "Selecionando Partida e Chegada",
  tutorialPage3Title: "Selecionando um Algoritmo",
  tutorialPage4Title: "Visualizando!",
};
