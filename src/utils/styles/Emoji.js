export  const getScoreEmoji = (score) => {
    if (score === "Très bien") return "😍";
    if (score === "Bien") return "😊";
    if (score === "Moyen") return "😐";
    return "😞";
  };