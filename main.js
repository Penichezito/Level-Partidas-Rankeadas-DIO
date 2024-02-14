function calculateLevel(victory, defeat) {
    const balanceVictory = victory - defeat;
    let level;

    if (balanceVictory <= 10) level = "Ferro";
    else if (balanceVictory <= 20) level = "Bronze";
    else if (balanceVictory <= 50) level = "Prata";
    else if (balanceVictory <= 80) level = "Ouro";
    else if (balanceVictory <= 90) level = "Diamante";
    else if (balanceVictory <= 100) level = "Lendário";
    else level = "Imortal";

    console.log(`O Herói tem saldo de ${balanceVictory} portanto está no nível de ${level}`);
}

return calculateLevel(100, 10);
