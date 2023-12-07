import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd6b5cbebebf455ab1ccda5cf6ff264a",
  },
});
