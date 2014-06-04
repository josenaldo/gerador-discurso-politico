'use strict';
angular.module('geradorApp').service('Random', function() {
    this.next = function(max) {
        return Math.floor(Math.random() * max);
    };
});

angular.module('geradorApp').service('Petralha', function(Random) {
    var problemas = ["A miséria ", "A inflação ", "O desemprego ", "A violência ", "A crise ", "O crime "];
    var naturezas = ["é uma invenção ", "é uma estratégia ", "é uma manobra ", "é um complô ", "é uma instituição ", "é uma criação "];
    var culpados = ["da burguesia ", "do imperialismo americano ", "das elites ", "da oposição ", "do capitalismo ", "das políticas neoliberais "];
    var motivacoes = ["para criminalizar ", "para oprimir ", "para desmoralizar ", "para destruir ", "para controlar ", "para explorar "];
    var vitimas = ["o povo.", "a revolução.", "o proletariado.", "os movimentos sociais.", "os avanços da democracia.", "as conquistas dos trabalhadores."];
    
    this.fala = function() {    	
        return problemas[Random.next(problemas.length)] +
        naturezas[Random.next(naturezas.length)] + 
        culpados[Random.next(culpados.length)] + 
        motivacoes[Random.next(motivacoes.length)] + 
        vitimas[Random.next(vitimas.length)]
        ;
    };
});

angular.module('geradorApp').service('Coxinha', function(Random) {
    var problemas = ["A miséria ", "A inflação ", "O golpe de 1964 ", "A violência ", "A crise ", "O crime ", "O Nazismo ", "O Bolsa família ", "Problemas da educação ", "A corrupção "];
    var naturezas = ["é uma invenção ", "é uma estratégia ", "é uma manobra ", "é um complô ", "é culpa ", "é uma criação ", "é uma conspiração ", "é uma forma orquestrada ", "é uma doutrinação ideológica ", "é uma articulação "];
    var culpados = ["do PT ", "do Comunismo ", "dos esquerdopatas ", "da Dilma ", "do Socialismo ", "do Estado ", "da ditadura gay ", "da esquerda caviar ", "dos vândalos ", "das feminazis "];
    var motivacoes = ["para deslegitimar ", "para vandalizar ", "para desmoralizar ", "para destruir ", "para regular ", "para ameaçar ", "para superar ", "para roubar ", "para aterrorizar ", "para transgredir "];
    var vitimas = ["a economia.", "o livre mercado.", "a classe média.", "a propriedade privada.", "a nação.", "o progresso.", "a família.", "a democracia.", "a liberdade.", "os bons costumes."];
    
    this.fala = function() {        
        return problemas[Random.next(problemas.length)] +
        naturezas[Random.next(naturezas.length)] + 
        culpados[Random.next(culpados.length)] + 
        motivacoes[Random.next(motivacoes.length)] + 
        vitimas[Random.next(vitimas.length)]
        ;
    };
});
