function showInfo(player) {
  const infoBox = document.getElementById("info-box");

  const players = {
    messi: `
      <h2>Lionel Messi</h2>
      <p><strong>Background:</strong> Born in Rosario, Argentina, in 1987. Started his career at FC Barcelona.</p>
      <p><strong>Achievements:</strong> 8 Ballon d'Ors, multiple Champions League and La Liga titles, 2022 FIFA World Cup winner with Argentina.</p>
    `,
    ronaldo: `
      <h2>Cristiano Ronaldo</h2>
      <p><strong>Background:</strong> Born in Madeira, Portugal, in 1985. Rose to fame with Manchester United.</p>
      <p><strong>Achievements:</strong> 5 Ballon d'Ors, Champions League wins with Manchester United and Real Madrid, Euro 2016 winner with Portugal.</p>
    `,
    mbappe: `
      <h2>Kylian Mbappé</h2>
      <p><strong>Background:</strong> Born in Paris, France, in 1998. Emerged as a superstar with AS Monaco and PSG.</p>
      <p><strong>Achievements:</strong> 2018 World Cup winner, multiple Ligue 1 titles, Golden Boot winner at 2022 World Cup.</p>
    `
  };

  infoBox.innerHTML = players[player];
}