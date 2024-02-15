import VerticalLayout from "./VerticalLayout.js";
import ErrorPage from "./ErrorPage.js";
import LoadingPage from "./LoadingPage.js";
import Actions from "./Actions.js";
import {
  formatDateForDisplay,
  sortBills,

} from "../app/format.js";

const row = (bill) => {
  return `
    <tr>
      <td>${bill.type}</td>
      <td>${bill.name}</td>
      <td data-testid='bill-date'>${formatDateForDisplay(bill.date)}</td>
      <td>${bill.amount} €</td>
      <td>${bill.status}</td>
      <td >
        ${Actions(bill.fileUrl)}
      </td>
    </tr>
    `;
};

const rows = (data) => {

  const sortedDatas = data && data.length > 0 ? sortBills(data) : []
  return sortedDatas.map(bill => row(bill)).join("")
}


export default function BillsUi(data, loading, error) {
  console.log('data', data)

  const {data: datas} = data
  console.log('datas', datas)
  const rawDatas = datas && datas.length > 0 ? datas : data && data.length > 0 ? data : []
  console.log('rawDatas', rawDatas)
  debugger

  const modal = () => (`<div class="modal fade" id="modaleFile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"     aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Justificatif</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            </div>
          </div>
        </div>
      </div>`)

  if (loading) {
    return LoadingPage();
  } else if (error) {
    return ErrorPage(error);
  } 

  return `
    <div class='layout'>
      ${VerticalLayout(120)}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Mes notes de frais </div>
          <button type="button" data-testid='btn-new-bill' class="btn btn-primary">Nouvelle note de frais</button>
        </div>
        <div id="data-table">
        <table id="example" class="table table-striped" style="width:100%">
          <thead>
              <tr>
                <th>Type</th>
                <th>Nom</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
          </thead>
          <tbody data-testid="tbody">
            ${rows(rawDatas)}
          </tbody>
          </table>
        </div>
      </div>
      ${modal()}
    </div>
  `;
}
