export const colors = {
    primary: '#5843E4',
    secondary: '#8186A0',
    backgroundLight: '#F9F9FC',
}

export const colorText = {
    "Abordable": "#447244ff",
    "Moyenne": "#776741ff",
    "Trop chère": "#814231ff",

    "Mauvais": "#814231ff",
    "Moyen": "#776741ff",
    "Bien": "#447244ff",
    "Très bien": "#301b6bff"

}

export const colorBackground = {
    "Abordable": "#d4f9d4ff",
    "Moyenne": "#faf2deff",
    "Trop chère": "#fadfd8ff",

    "Mauvais": "#fadfd8ff",
    "Moyen": "#faf2deff",
    "Bien": "#d4f9d4ff",
    "Très bien": "rgba(213, 209, 248, 1)"
}

export const getScoreColor = (score, isSelected) => {
    if (!isSelected) return "border-gray-200 bg-white text-gray-700 hover:border-gray-300";
    if (score === "Très bien") return "border-green-500 bg-green-50 text-green-700 ring-2 ring-green-200";
    if (score === "Bien") return "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200";
    if (score === "Moyen") return "border-orange-500 bg-orange-50 text-orange-700 ring-2 ring-orange-200";
    return "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-200";
  };

