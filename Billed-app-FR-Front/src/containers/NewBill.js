import { ROUTES_PATH } from "../constants/routes.js";
import Logout from "./Logout.js";
import { formatDateToStore } from "../app/format.js";

export default class NewBill {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document;
    this.onNavigate = onNavigate;
    this.store = store;

    const formNewBill = this.document.querySelector(
      `form[data-testid="form-new-bill"]`
    );
    formNewBill.addEventListener("submit", this.handleSubmit);

    const fileInput = this.document.querySelector(`input[data-testid="file"]`);
    fileInput.addEventListener("change", this.handleChangeFile);

    this.path = null;
    this.user = JSON.parse(localStorage.getItem("user"));
    this.email = this.user.email;

    new Logout({ document, localStorage, onNavigate });
  }
  handleChangeFile = (e) => {
    e.preventDefault();
    const file = this.document.querySelector(`input[data-testid="file"]`)
      .files[0];

    const fileName = file.name;
    const mimetype = file.type;
    const grantedMimeType = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/gif",
    ];

    if (!grantedMimeType.includes(mimetype)) {
      this.fileInput.files = null;
      this.fileInput.value = null;
      this.file = null;
      this.fileName = null;
      alert(
        "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", this.email);

    this.store
      .bills()
      .create({
        data: formData,
        headers: {
          noContentType: true,
        },
      })
      //Modified by RCHON
      .then(({ filePath, id, key }) => {
        console.log("filePath)", filePath, "id", id, "key", key);
        this.billId = id;
        this.key = key;
        this.path = filePath.replace("public\\", "public/");
        this.fileName = fileName;
        //End of modification
      })
      .catch((error) => console.error(error));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formNewBill = this.document.querySelector(`form[data-testid="form-new-bill"]`);
    const expanseType = `${formNewBill.querySelector(
      `select[data-testid="expense-type"]`
    ).value}`;
    const expenseName = `${formNewBill.querySelector(
      'input[data-testid="expense-name"]'
    ).value}`;

    const amount =
      parseInt(formNewBill.querySelector(`input[data-testid="amount"]`).value) ||
      0;
    const date = formatDateToStore(
      formNewBill.querySelector(`input[data-testid="datepicker"]`).value);
    const vat = `${formNewBill.querySelector(`input[data-testid="vat"]`).value.toString() || '0'}`;
    const pct =
      parseInt(formNewBill.querySelector(`input[data-testid="pct"]`).value) || 20;
    const commentary = `${formNewBill.querySelector(
      `textarea[data-testid="commentary"]`
    ).value}`;
    

    
    const bill = {
      name: expenseName,
      type: expanseType,
      email: this.email,
      date: date,
      vat: vat,
      pct: pct,
      commentary: commentary,
      status: "pending",
      amount: amount,
      fileName: this.fileName,
      //Modified by RCHON
      fileUrl: this.path,
      //End of modification
    };
    this.updateBill(bill);
  };

  // not need to cover this function by tests
  updateBill = (bill) => {
    if (this.store) {
      this.store
        .bills()
        .update({
          data: JSON.stringify(bill),

          selector: this.key,
        })
        .then(() => {
          this.onNavigate(ROUTES_PATH["Bills"]);
        })
        .catch((error) => console.error(error));
    }
  };
}
