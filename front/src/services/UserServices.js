import axios from "axios";
import {
  USER_DATA,
  USER_ACTIVITY_DATA,
  USER_PERFORMANCE_DATA,
  USER_AVG_SESSION_DATA,
} from "../mocks/userData";

async function getDataFromMock(dataType, userId) {
  switch (dataType) {
    case "activity":
      return USER_ACTIVITY_DATA.find(
        (user) => user.userId === parseInt(userId)
      );
    case "performance":
      return USER_PERFORMANCE_DATA.find(
        (user) => user.userId === parseInt(userId)
      );
    case "average-sessions":
      return USER_AVG_SESSION_DATA.find(
        (user) => user.userId === parseInt(userId)
      );
    default:
      return USER_DATA.find((user) => user.id === parseInt(userId));
  }
}

async function getDataFromAPI(dataType, userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/${dataType}`
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      console.error("La requête a échoué avec le statut : " + response.status);
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la requête :",
      error.message
    );
  }
}

async function getData(mock, userId, dataType) {
  if (mock) {
    return getDataFromMock(dataType, userId);
  } else {
    return getDataFromAPI(dataType, userId);
  }
}

export { getData };
