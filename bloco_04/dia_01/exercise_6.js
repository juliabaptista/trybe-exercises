let chess;

chess = "peão"

switch (chess.toLowerCase()) {
    case "rei":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.")
        break;

    case "dama":
        console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
        break;

    case "torre":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;

    case "bispo":
        console.log("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.");
        break;

    case "cavalo":
        console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.");
        break;

    case "peão":
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
        break;
    
    default:
        console.log("Peça não identificada. Reveja sua escolha! ;)");
    }


