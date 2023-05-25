const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require(".previsione.dao");
const port = 3000;
const app = express();





initStruct().then(
    () => app.listen(port)
  );
  