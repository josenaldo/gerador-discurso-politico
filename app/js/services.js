'use strict';
angular.module('geradorApp').service('Random', function() {
    this.next = function(max) {
        return Math.floor(Math.random() * max);
    };
});

angular.module('geradorApp').service('Militante', function(Random) {
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

