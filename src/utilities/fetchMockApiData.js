// Private
const mockedResponses = {
  forTopPicks: [
    {
      badgeTitle: "Greek Salad",
      imgUrl: "greeksalad.jpg",
    },
    {
      badgeTitle: "Lemon Dessert",
      imgUrl: "lemon_dessert.jpg",
    },
    {
      badgeTitle: "Bruchetta",
      imgUrl: "bruchetta.jpg",
    },
  ],
  forMenuItems: [
    {
      title: "Greek Salad",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "greeksalad.jpg",
    },
    {
      title: "Lemon Dessert",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "lemon_dessert.jpg",
    },
    {
      title: "Bruchetta",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "bruchetta.jpg",
    },
    {
      title: "Savory Eclairs",
      description:
        "Fresh and vibrant, made with crisp cucumbers, ripe tomatoes, olives, and tangy feta cheese. Perfectly drizzled with olive oil and herbs for a light, refreshing taste.",
      imgUrl: "savory_eclairs.jpg",
    },
  ],
};

// Functions provided in js file for capstone

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  return true;
};

// Public
export const fetchMockApiData = (key) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedResponses[key]);
    }, 1000);
  });
};
