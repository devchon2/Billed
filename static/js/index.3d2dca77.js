(()=>{var e={884(){Date.prototype.getWeekNumber=function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);var a=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-a)/864e5+1)/7)}}},t={};(()=>{"use strict";let a={list:()=>Promise.resolve([{id:"47qAXb6fIm2zOKkLzMro",vat:"80",fileUrl:"https://test.storage.tld/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=c1640e12-a24b-4b11-ae52-529112e9602a",status:"pending",type:"H\xf4tel et logement",commentary:"s\xe9minaire billed",name:"encore",fileName:"preview-facture-free-201801-pdf-1.jpg",date:"2004-04-04",amount:400,commentAdmin:"ok",email:"a@a",pct:20},{id:"BeKy5Mo4jkmdfPGYpTxZ",vat:"",amount:100,name:"test1",fileName:"1592770761.jpeg",commentary:"plop",pct:20,type:"Transports",email:"a@a",fileUrl:"https://test.storage.tld/v0/b/billable-677b6.a…61.jpeg?alt=media&token=7685cd61-c112-42bc-9929-8a799bb82d8b",date:"2001-01-01",status:"refused",commentAdmin:"en fait non"},{id:"UIUZtnPQvnbFnB0ozvJh",name:"test3",email:"a@a",type:"Services en ligne",vat:"60",pct:20,commentAdmin:"bon bah d'accord",amount:300,status:"accepted",date:"2003-03-03",commentary:"",fileName:"facture-client-php-exportee-dans-document-pdf-enregistre-sur-disque-dur.png",fileUrl:"https://test.storage.tld/v0/b/billable-677b6.a…dur.png?alt=media&token=571d34cb-9c8f-430a-af52-66221cae1da3"},{id:"qcCK3SzECmaZAGRrHjaC",status:"refused",pct:20,amount:200,email:"a@a",name:"test2",vat:"40",fileName:"preview-facture-free-201801-pdf-1.jpg",date:"2002-02-02",commentAdmin:"pas la bonne facture",commentary:"test2",type:"Restaurants et bars",fileUrl:"https://test.storage.tld/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=4df6ed2c-12c8-42a2-b013-346c1346f732"}]),create:e=>Promise.resolve({fileUrl:"https://localhost:3456/images/test.jpg",key:"1234"}),update:e=>Promise.resolve({id:"47qAXb6fIm2zOKkLzMro",vat:"80",fileUrl:"https://firebasestorage.googleapis.com/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=c1640e12-a24b-4b11-ae52-529112e9602a",status:"pending",type:"H\xf4tel et logement",commentary:"s\xe9minaire billed",name:"encore",fileName:"preview-facture-free-201801-pdf-1.jpg",date:"2004-04-04",amount:400,commentAdmin:"ok",email:"a@a",pct:20})},i={bills:()=>a,login:e=>Promise.resolve({jwt:"mocked-jwt"}),users:()=>({create:()=>Promise.resolve({}),select:()=>Promise.resolve({}),list:()=>Promise.resolve([])}),user:e=>Promise.resolve({})};function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let s=()=>`
      <div class="page-div">
        <div class="row">
          <div class="title-container"> 
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
              <path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <h1> Billed </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <form class="form-signin" data-testid="form-employee">
                  <h2 class="h3 mb-3 font-weight-normal">Employ\xe9</h1>
                  <label for="inputEmail">Votre email</label>
                  <input type="email" data-testid="employee-email-input" class="form-control" placeholder="johndoe@email.com" required autofocus>
                  <label for="inputPassword">Mot de passe</label>
                  <input type="password" data-testid="employee-password-input" class="form-control" placeholder="******" required>
                  <button class="btn btn-lg btn-primary btn-block" data-testid="employee-login-button" style="background-color: #0E5AE5;" type="submit">Se connecter</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <form class="form-signin" data-testid="form-admin">
                  <h2 class="h3 mb-3 font-weight-normal">Administration</h1>
                  <label for="inputEmail">Votre email</label>
                  <input type="email" data-testid="admin-email-input" class="form-control" placeholder="johndoe@email.com" required autofocus>
                  <label for="inputPassword">Mot de passe</label>
                  <input type="password" data-testid="admin-password-input" class="form-control" placeholder="******" required>
                  <button  type="submit" class="btn btn-lg btn-primary btn-block" data-testid="admin-login-button" style="background-color: #0E5AE5;">Se connecter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,o=`
  <svg xmlns="http://www.w3.org/2000/svg"
      width="0.2in" height="0.2in"
      viewBox="0 0 18 18">
    <path id="Imported Path"
          fill="#fff" stroke="none" stroke-width="0"
          d="M 8.00,5.00
            C 8.00,5.00 8.00,1.00 8.00,1.00
              8.00,0.45 7.55,0.00 7.00,0.00
              7.00,0.00 1.00,0.00 1.00,0.00
              0.45,0.00 0.00,0.45 0.00,1.00
              0.00,1.00 0.00,5.00 0.00,5.00
              0.00,5.55 0.45,6.00 1.00,6.00
              1.00,6.00 7.00,6.00 7.00,6.00
              7.55,6.00 8.00,5.55 8.00,5.00 Z
            M 1.00,8.00
            C 1.00,8.00 7.00,8.00 7.00,8.00
              7.55,8.00 8.00,8.45 8.00,9.00
              8.00,9.00 8.00,17.00 8.00,17.00
              8.00,17.55 7.55,18.00 7.00,18.00
              7.00,18.00 1.00,18.00 1.00,18.00
              0.45,18.00 0.00,17.55 0.00,17.00
              0.00,17.00 0.00,9.00 0.00,9.00
              0.00,8.45 0.45,8.00 1.00,8.00 Z
            M 17.00,12.00
            C 17.00,12.00 11.00,12.00 11.00,12.00
              10.45,12.00 10.00,12.45 10.00,13.00
              10.00,13.00 10.00,17.00 10.00,17.00
              10.00,17.55 10.45,18.00 11.00,18.00
              11.00,18.00 17.00,18.00 17.00,18.00
              17.55,18.00 18.00,17.55 18.00,17.00
              18.00,17.00 18.00,13.00 18.00,13.00
              18.00,12.45 17.55,12.00 17.00,12.00 Z
            M 11.00,0.00
            C 11.00,0.00 17.00,0.00 17.00,0.00
              17.55,0.00 18.00,0.45 18.00,1.00
              18.00,1.00 18.00,9.00 18.00,9.00
              18.00,9.55 17.55,10.00 17.00,10.00
              17.00,10.00 11.00,10.00 11.00,10.00
              10.45,10.00 10.00,9.55 10.00,9.00
              10.00,9.00 10.00,1.00 10.00,1.00
              10.00,0.45 10.45,0.00 11.00,0.00 Z" />
  </svg>
`,d=`
<svg xmlns="http://www.w3.org/2000/svg"
     width="0.222222in" height="0.177778in"
     viewBox="0 0 20 16">
  <path id="Imported Path"
        fill="#fff" stroke="none" stroke-width="0"
        d="M 2.00,0.00
           C 2.00,0.00 18.00,0.00 18.00,0.00
             19.10,0.00 20.00,0.90 20.00,2.00
             20.00,2.00 20.00,14.00 20.00,14.00
             20.00,15.10 19.10,16.00 18.00,16.00
             18.00,16.00 2.00,16.00 2.00,16.00
             0.90,16.00 0.00,15.10 0.00,14.00
             0.00,14.00 0.00,2.00 0.00,2.00
             0.00,0.90 0.90,0.00 2.00,0.00 Z
           M 11.65,11.45
           C 11.65,11.45 18.00,7.00 18.00,7.00
             18.00,7.00 18.00,4.90 18.00,4.90
             18.00,4.90 10.65,10.05 10.65,10.05
             10.26,10.32 9.74,10.32 9.35,10.05
             9.35,10.05 2.00,4.90 2.00,4.90
             2.00,4.90 2.00,7.00 2.00,7.00
             2.00,7.00 8.35,11.45 8.35,11.45
             9.34,12.14 10.66,12.14 11.65,11.45 Z" />
</svg>
`,n=`
<svg xmlns="http://www.w3.org/2000/svg"
     width="0.255556in" height="0.255556in"
     viewBox="0 0 23 23">
  <path id="Imported Path"
        fill="#fff" stroke="none" stroke-width="0"
        d="M 12.78,0.00
           C 12.78,0.00 10.22,0.00 10.22,0.00
             10.22,0.00 10.22,12.76 10.22,12.76
             10.22,12.76 12.78,12.76 12.78,12.76
             12.78,12.76 12.78,0.00 12.78,0.00 Z
           M 18.95,2.77
           C 18.95,2.77 17.14,4.58 17.14,4.58
             18.17,5.41 19.00,6.46 19.58,7.66
             20.15,8.85 20.44,10.16 20.44,11.48
             20.44,13.85 19.50,16.13 17.83,17.80
             16.15,19.48 13.87,20.42 11.50,20.42
             9.66,20.42 7.86,19.85 6.35,18.79
             4.84,17.72 3.70,16.22 3.08,14.48
             2.46,12.75 2.39,10.86 2.89,9.09
             3.39,7.31 4.42,5.73 5.86,4.57
             5.86,4.57 4.05,2.77 4.05,2.77
             2.90,3.75 1.96,4.94 1.27,6.28
             0.58,7.62 0.16,9.09 0.04,10.59
             -0.08,12.10 0.09,13.61 0.55,15.05
             1.02,16.48 1.76,17.81 2.74,18.96
             6.85,23.79 14.11,24.37 18.95,20.26
             20.22,19.18 21.25,17.84 21.94,16.32
             22.64,14.80 23.00,13.15 23.00,11.48
             23.00,8.13 21.52,4.94 18.95,2.77 Z" />
</svg>
`,r=e=>{let t;return("string"==typeof(t=JSON.parse(localStorage.getItem("user")))&&(t=JSON.parse(t)),t&&"Employee"===t.type)?`
        <div class='vertical-navbar' style='height: ${e}vh;'>
          <div class='layout-title'> Billed </div>
          <div id='layout-icon1' data-testid="icon-window">
            ${o}
          </div>
          <div id='layout-icon2' data-testid="icon-mail">
            ${d}
          </div>
          <div id='layout-disconnect'>
            ${n}
          </div>
      </div>
        `:`
        <div class='vertical-navbar' style='height: ${e}vh;'>
          <div class='layout-title'> Billed </div>
            <div id='layout-disconnect' data-testid='layout-disconnect'>
              ${n}
            </div>
          </div>
        `},c=e=>`
    <div class='layout'>
      ${r()}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Erreur </div>
        </div>
        <div data-testid="error-message">
          ${e||""}
        </div>
    </div>`,m=()=>`
    <div class='layout'>
      ${r()}
      <div class='content' id='loading'>
        Loading...
      </div>
    </div>`,h=`<svg xmlns="http://www.w3.org/2000/svg"
width="0.244444in" height="0.166667in"
viewBox="0 0 22 15">
<path id="Imported Path"
   fill="#0D5AE5" stroke="none" stroke-width="0"
   d="M 11.00,0.00
      C 6.00,0.00 1.73,3.11 0.00,7.50
        1.73,11.89 6.00,15.00 11.00,15.00
        16.00,15.00 20.27,11.89 22.00,7.50
        20.27,3.11 16.00,0.00 11.00,0.00 Z
      M 11.00,12.50
      C 8.24,12.50 6.00,10.26 6.00,7.50
        6.00,4.74 8.24,2.50 11.00,2.50
        13.76,2.50 16.00,4.74 16.00,7.50
        16.00,10.26 13.76,12.50 11.00,12.50 Z
      M 11.00,4.50
      C 9.34,4.50 8.00,5.84 8.00,7.50
        8.00,9.16 9.34,10.50 11.00,10.50
        12.66,10.50 14.00,9.16 14.00,7.50
        14.00,5.84 12.66,4.50 11.00,4.50 Z" />
</svg>`,u=e=>{let t=new Date(null!==e?e:"1970-01-01").toLocaleDateString("fr-FR",{year:"numeric",month:"short",day:"numeric"}).split(" "),a=t[0].padStart(2,"0"),i=t[1],l=t[2].padStart(4,"0"),s=i.charAt(0).toUpperCase()+i.slice(1);return`${a} ${s} ${l}`},p=e=>{let t=new Date(e),a=new Intl.DateTimeFormat("us",{year:"numeric"}).format(t),i=new Intl.DateTimeFormat("us",{month:"2-digit"}).format(t),l=new Intl.DateTimeFormat("us",{day:"2-digit"}).format(t);return Number(`${a}${i}${l}`)},v=e=>{switch(e){case"pending":return"En attente";case"accepted":return"Accept\xe9";case"refused":return"Refused"}};function b(e){let{data:t,loading:a,error:i}=e,l=t&&t.length>0?t:[];return a?m():i?c(i):`
    <div class='layout'>
      ${r(120)}
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
            ${l.sort((e,t)=>p(t.date)-p(e.date)).map(e=>{let t;return`
    <tr>
      <td>${e.type}</td>
      <td>${e.name}</td>
      <td data-testid='bill-date'>${u(e.date)}</td>
      <td>${e.amount} €</td>
      <td>${e.status}</td>
      <td >
        ${t=e.fileUrl,`<div class="icon-actions">
      <div id="eye" data-testid="icon-eye" data-bill-url=${t}>
      ${h}
      </div>
    </div>
    `}
      </td>
    </tr>
    `}).join("")}
          </tbody>
          </table>
        </div>
      </div>
      <div class="modal fade" id="modaleFile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"     aria-hidden="true" data-testid='modale-active'>
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
      </div>
    </div>
  `}let g=`
  <svg xmlns="http://www.w3.org/2000/svg"
  width="2.57778in" height="2.86667in"
  viewBox="0 0 232 258">
  <path id="Imported Path"
    fill="#eaeaea" stroke="none" stroke-width="0"
    d="M 212.25,19.92
        C 212.25,19.92 193.00,0.67 193.00,0.67
          193.00,0.67 173.75,19.92 173.75,19.92
          173.75,19.92 154.50,0.67 154.50,0.67
          154.50,0.67 135.25,19.92 135.25,19.92
          135.25,19.92 116.00,0.67 116.00,0.67
          116.00,0.67 96.75,19.92 96.75,19.92
          96.75,19.92 77.50,0.67 77.50,0.67
          77.50,0.67 58.25,19.92 58.25,19.92
          58.25,19.92 39.00,0.67 39.00,0.67
          39.00,0.67 19.75,19.92 19.75,19.92
          19.75,19.92 0.50,0.67 0.50,0.67
          0.50,0.67 0.50,257.33 0.50,257.33
          0.50,257.33 19.75,238.08 19.75,238.08
          19.75,238.08 39.00,257.33 39.00,257.33
          39.00,257.33 58.25,238.08 58.25,238.08
          58.25,238.08 77.50,257.33 77.50,257.33
          77.50,257.33 96.75,238.08 96.75,238.08
          96.75,238.08 116.00,257.33 116.00,257.33
          116.00,257.33 135.25,238.08 135.25,238.08
          135.25,238.08 154.50,257.33 154.50,257.33
          154.50,257.33 173.75,238.08 173.75,238.08
          173.75,238.08 193.00,257.33 193.00,257.33
          193.00,257.33 212.25,238.08 212.25,238.08
          212.25,238.08 231.50,257.33 231.50,257.33
          231.50,257.33 231.50,0.67 231.50,0.67
          231.50,0.67 212.25,19.92 212.25,19.92 Z
        M 205.83,219.99
        C 205.83,219.99 26.17,219.99 26.17,219.99
          26.17,219.99 26.17,38.01 26.17,38.01
          26.17,38.01 205.83,38.01 205.83,38.01
          205.83,38.01 205.83,219.99 205.83,219.99 Z
        M 39.00,167.50
        C 39.00,167.50 193.00,167.50 193.00,167.50
          193.00,167.50 193.00,193.17 193.00,193.17
          193.00,193.17 39.00,193.17 39.00,193.17
          39.00,193.17 39.00,167.50 39.00,167.50 Z
        M 39.00,116.17
        C 39.00,116.17 193.00,116.17 193.00,116.17
          193.00,116.17 193.00,141.83 193.00,141.83
          193.00,141.83 39.00,141.83 39.00,141.83
          39.00,141.83 39.00,116.17 39.00,116.17 Z
        M 39.00,64.83
        C 39.00,64.83 193.00,64.83 193.00,64.83
          193.00,64.83 193.00,90.50 193.00,90.50
          193.00,90.50 39.00,90.50 39.00,90.50
          39.00,90.50 39.00,64.83 39.00,64.83 Z" />
  </svg>
`,f=`
<svg xmlns="http://www.w3.org/2000/svg"
     width="0.2in" height="0.222222in"
     viewBox="0 0 18 20">
  <path id="Imported Path"
        fill="#0D5AE5" stroke="none" stroke-width="0"
        d="M 16.00,2.00
           C 16.00,2.00 15.00,2.00 15.00,2.00
             15.00,2.00 15.00,0.00 15.00,0.00
             15.00,0.00 13.00,0.00 13.00,0.00
             13.00,0.00 13.00,2.00 13.00,2.00
             13.00,2.00 5.00,2.00 5.00,2.00
             5.00,2.00 5.00,0.00 5.00,0.00
             5.00,0.00 3.00,0.00 3.00,0.00
             3.00,0.00 3.00,2.00 3.00,2.00
             3.00,2.00 2.00,2.00 2.00,2.00
             0.89,2.00 0.00,2.90 0.00,4.00
             0.00,4.00 0.00,18.00 0.00,18.00
             0.00,19.10 0.89,20.00 2.00,20.00
             2.00,20.00 16.00,20.00 16.00,20.00
             17.10,20.00 18.00,19.10 18.00,18.00
             18.00,18.00 18.00,4.00 18.00,4.00
             18.00,2.90 17.10,2.00 16.00,2.00 Z
           M 16.00,18.00
           C 16.00,18.00 2.00,18.00 2.00,18.00
             2.00,18.00 2.00,8.00 2.00,8.00
             2.00,8.00 16.00,8.00 16.00,8.00
             16.00,8.00 16.00,18.00 16.00,18.00 Z
           M 16.00,6.00
           C 16.00,6.00 2.00,6.00 2.00,6.00
             2.00,6.00 2.00,4.00 2.00,4.00
             2.00,4.00 16.00,4.00 16.00,4.00
             16.00,4.00 16.00,6.00 16.00,6.00 Z
           M 4.00,10.00
           C 4.00,10.00 9.00,10.00 9.00,10.00
             9.00,10.00 9.00,15.00 9.00,15.00
             9.00,15.00 4.00,15.00 4.00,15.00
             4.00,15.00 4.00,10.00 4.00,10.00 Z" />
</svg>
`,w=`
<svg xmlns="http://www.w3.org/2000/svg"
width="0.2in" height="0.2in"
viewBox="0 0 18 18">
<path id="Imported Path"
   fill="#0D5AE5" stroke="none" stroke-width="0"
   d="M 12.00,15.50
      C 9.49,15.50 7.32,14.08 6.24,12.00
        6.24,12.00 12.00,12.00 12.00,12.00
        12.00,12.00 12.00,10.00 12.00,10.00
        12.00,10.00 5.58,10.00 5.58,10.00
        5.53,9.67 5.50,9.34 5.50,9.00
        5.50,8.66 5.53,8.33 5.58,8.00
        5.58,8.00 12.00,8.00 12.00,8.00
        12.00,8.00 12.00,6.00 12.00,6.00
        12.00,6.00 6.24,6.00 6.24,6.00
        7.32,3.92 9.50,2.50 12.00,2.50
        13.61,2.50 15.09,3.09 16.23,4.07
        16.23,4.07 18.00,2.30 18.00,2.30
        16.41,0.87 14.30,0.00 12.00,0.00
        8.08,0.00 4.76,2.51 3.52,6.00
        3.52,6.00 0.00,6.00 0.00,6.00
        0.00,6.00 0.00,8.00 0.00,8.00
        0.00,8.00 3.06,8.00 3.06,8.00
        3.02,8.33 3.00,8.66 3.00,9.00
        3.00,9.34 3.02,9.67 3.06,10.00
        3.06,10.00 0.00,10.00 0.00,10.00
        0.00,10.00 0.00,12.00 0.00,12.00
        0.00,12.00 3.52,12.00 3.52,12.00
        4.76,15.49 8.08,18.00 12.00,18.00
        14.31,18.00 16.41,17.13 18.00,15.70
        18.00,15.70 16.22,13.93 16.22,13.93
        15.09,14.91 13.62,15.50 12.00,15.50 Z" />
</svg>
`,y=`
<svg xmlns="http://www.w3.org/2000/svg"
     width="0.177778in" height="0.2in"
     viewBox="0 0 16 18">
  <path id="Imported Path"
        fill="#0D5AE5" stroke="none" stroke-width="0"
        d="M 0.94,3.79
           C 0.94,2.78 1.27,1.97 1.93,1.34
             2.59,0.72 3.47,0.41 4.58,0.41
             5.70,0.41 6.59,0.72 7.24,1.34
             7.89,1.96 8.22,2.79 8.22,3.85
             8.22,3.85 8.22,4.66 8.22,4.66
             8.22,5.67 7.89,6.48 7.24,7.09
             6.59,7.71 5.71,8.02 4.60,8.02
             3.50,8.02 2.61,7.71 1.94,7.11
             1.27,6.49 0.94,5.65 0.94,4.59
             0.94,4.59 0.94,3.79 0.94,3.79 Z
           M 3.38,4.66
           C 3.38,5.05 3.49,5.37 3.70,5.61
             3.92,5.85 4.22,5.97 4.60,5.97
             5.39,5.97 5.78,5.47 5.78,4.47
             5.78,4.47 5.78,3.79 5.78,3.79
             5.78,3.40 5.68,3.09 5.47,2.84
             5.26,2.58 4.96,2.46 4.58,2.46
             4.21,2.46 3.92,2.58 3.70,2.83
             3.49,3.07 3.38,3.40 3.38,3.82
             3.38,3.82 3.38,4.66 3.38,4.66 Z
           M 8.71,12.99
           C 8.71,11.97 9.04,11.16 9.70,10.54
             10.37,9.93 11.25,9.62 12.35,9.62
             13.47,9.62 14.35,9.92 15.01,10.53
             15.67,11.14 16.00,11.98 16.00,13.07
             16.00,13.07 16.00,13.86 16.00,13.86
             16.00,14.87 15.67,15.69 15.02,16.30
             14.37,16.92 13.49,17.22 12.37,17.22
             11.27,17.22 10.39,16.92 9.71,16.31
             9.05,15.70 8.71,14.86 8.71,13.80
             8.71,13.80 8.71,12.99 8.71,12.99 Z
           M 11.14,13.86
           C 11.14,14.21 11.26,14.52 11.50,14.79
             11.74,15.05 12.03,15.18 12.37,15.18
             13.10,15.18 13.49,14.84 13.55,14.15
             13.55,14.15 13.56,12.99 13.56,12.99
             13.56,12.59 13.45,12.28 13.24,12.04
             13.02,11.79 12.72,11.67 12.35,11.67
             11.99,11.67 11.70,11.78 11.49,12.01
             11.27,12.24 11.15,12.55 11.14,12.93
             11.14,12.93 11.14,13.86 11.14,13.86 Z
           M 5.32,15.78
           C 5.32,15.78 3.56,14.89 3.56,14.89
             3.56,14.89 11.54,2.11 11.54,2.11
             11.54,2.11 13.31,3.00 13.31,3.00
             13.31,3.00 5.32,15.78 5.32,15.78 Z" />
</svg>
`,x=`<svg xmlns="http://www.w3.org/2000/svg"
width="0.244444in" height="0.166667in"
viewBox="0 0 22 15">
<path id="Imported Path"
   fill="#fff" stroke="none" stroke-width="0"
   d="M 11.00,0.00
      C 6.00,0.00 1.73,3.11 0.00,7.50
        1.73,11.89 6.00,15.00 11.00,15.00
        16.00,15.00 20.27,11.89 22.00,7.50
        20.27,3.11 16.00,0.00 11.00,0.00 Z
      M 11.00,12.50
      C 8.24,12.50 6.00,10.26 6.00,7.50
        6.00,4.74 8.24,2.50 11.00,2.50
        13.76,2.50 16.00,4.74 16.00,7.50
        16.00,10.26 13.76,12.50 11.00,12.50 Z
      M 11.00,4.50
      C 9.34,4.50 8.00,5.84 8.00,7.50
        8.00,9.16 9.34,10.50 11.00,10.50
        12.66,10.50 14.00,9.16 14.00,7.50
        14.00,5.84 12.66,4.50 11.00,4.50 Z" />
</svg>
`,S=["cedric.hiely@billed.com","christian.saluzzo@billed.com","jean.limbert@billed.com","joanna.binet@billed.com"];class k{constructor({document:e,onNavigate:t,localStorage:a}){l(this,"handleClick",e=>{e.preventDefault(),this.localStorage.clear(),this.onNavigate(I.Login)}),this.document=e,this.localStorage=a,this.onNavigate=t,$("#layout-disconnect").click(this.handleClick)}}let C=(e,t)=>e&&e.length?e.filter(e=>{let a;if("u">typeof jest)a=e.status===t;else{let i=JSON.parse(localStorage.getItem("user")).email;a=e.status===t&&![...S,i].includes(e.email)}return a}):[],L=e=>{switch(e){case 1:return"pending";case 2:return"accepted";case 3:return"refused"}};class M{handleEditTicket(e,t,a){if((void 0===this.counter||this.id!==t.id)&&(this.counter=0),(void 0===this.id||this.id!==t.id)&&(this.id=t.id),this.counter%2==0)a.forEach(e=>{$(`#open-bill${e.id}`).css({background:"#0D5AE5"})}),$(`#open-bill${t.id}`).css({background:"#2A2B35"}),$(".dashboard-right-container div").html(`
    <div class="container dashboard-form" data-testid="dashboard-form">
      <div class="row">
        <div class="col-sm" id="dashboard-form-col1">
          <label for="expense-type" class="bold-label">Type de d\xe9pense</label>
          <div class='input-field'> ${t.type} </div>
          <label for="expense-name" class="bold-label">Nom de la d\xe9pense</label>
          <div class='input-field'> ${t.name} </div>
          <label for="datepicker" class="bold-label">Date</label>
          <div class='input-field input-flex'>
            <span>${u(t.date)}</span>
            <span> ${f} </span>
          </div>
        </div>
        <div class="col-sm" id="dashboard-form-col2">
          <label for="commentary" class="bold-label">Commentaire</label>
          <div class='textarea-field' style="height: 300px;"> ${t.commentary} </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <label for="amount" class="bold-label">Montant TTC </label>
          <div class='input-field input-flex'>
            <span data-testid="amount-d">${t.amount}</span>
            <span> ${w} </span>
          </div>
        </div>
        <div class="col-sm">
          <label for="vat" class="bold-label">TVA</label>
          <div id='vat-flex-container'>
            <div class='input-field input-flex vat-flex'>
              <span>${t.vat}</span>
              <span> ${w} </span>
            </div>
            <div class='input-field input-flex vat-flex'>
              <span>${t.pct}</span>
              <span> ${y} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <label for="file" class="bold-label">Justificatif</label>
            <div class='input-field input-flex file-flex'>
            <span id="file-name-admin">${t.fileName}</span>
            <div class='icons-container'>
              <span id="icon-eye-d" data-testid="icon-eye-d" data-bill-url="${t.fileUrl}"> ${x} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
       ${"pending"===t.status?`
        <div class="col-sm">
          <label for="commentary-admin" class="bold-label">Ajouter un commentaire</label>
          <textarea id="commentary2" class="form-control blue-border" data-testid="commentary2" rows="5"></textarea>
        </div>
       `:`
        <div class="col-sm">
          <label for="commentary-admin" class="bold-label">Votre commentaire</label>
          <div class='input-field'> ${t.commentAdmin} </div>
        </div>
       `}
      </div>
      <div class="row">
      ${"pending"===t.status?`
      <div class="col-sm buttons-flex" style="width: 300px;" >
        <button type="submit" id='btn-refuse-bill' data-testid='btn-refuse-bill-d' class="btn btn-primary">Refuser</button>
        <button type="submit" id='btn-accept-bill' data-testid='btn-accept-bill-d' class="btn btn-primary">Accepter</button>
      </div>
      `:""}
    </div>
    
  <div class="modal fade" id="modaleFileAdmin1" data-testid="modaleFileAdmin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Justificatif</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" data-toggle="modal">
        </div>
      </div>
    </div>
  </div>
  
    </div>
  `),$(".vertical-navbar").css({height:"150vh"}),this.counter++;else $(`#open-bill${t.id}`).css({background:"#0D5AE5"}),$(".dashboard-right-container div").html(`
        <div id="big-billed-icon" data-testid="big-billed-icon"> ${g} </div>
      `),$(".vertical-navbar").css({height:"120vh"}),this.counter++;$("#icon-eye-d").click(this.handleClickIconEye),$("#btn-accept-bill").click(e=>this.handleAcceptSubmit(e,t)),$("#btn-refuse-bill").click(e=>this.handleRefuseSubmit(e,t))}handleShowTickets(e,t,a){if((void 0===this.counter||this.index!==a)&&(this.counter=0),(void 0===this.index||this.index!==a)&&(this.index=a),this.counter%2==0){let e;$(`#arrow-icon${this.index}`).css({transform:"rotate(0deg)"}),$(`#status-bills-container${this.index}`).html((e=C(t,L(this.index)))&&e.length?e.map(e=>{let t,a,i;return a=(t=e.email.split("@")[0]).includes(".")?t.split(".")[0]:"",i=t.includes(".")?t.split(".")[1]:t,`
    <div class='bill-card' id='open-bill${e.id}' data-testid='open-bill${e.id}'>
      <div class='bill-card-name-container'>
        <div class='bill-card-name'> ${a} ${i} </div>
        <span class='bill-card-grey'> ... </span>
      </div>
      <div class='name-price-container'>
        <span> ${e.name} </span>
        <span> ${e.amount} € </span>
      </div>
      <div class='date-type-container'>
        <span> ${u(e.date)} </span>
        <span> ${e.type} </span>
      </div>
    </div>
  `}).join(""):""),this.counter++}else $(`#arrow-icon${this.index}`).css({transform:"rotate(90deg)"}),$(`#status-bills-container${this.index}`).html(""),this.counter++;return t.forEach(e=>{e.status===L(this.index)&&$(`#open-bill${e.id}`).click(a=>this.handleEditTicket(a,e,t))}),t}constructor({document:e,onNavigate:t,store:a,bills:i,localStorage:s}){l(this,"handleClickIconEye",()=>{let e=$("#icon-eye-d").attr("data-bill-url"),t=Math.floor(.8*$("#modaleFileAdmin1").width());$("#modaleFileAdmin1").find(".modal-body").html(`<div style='text-align: center;'><img width=${t} src=${e} alt="Bill"/></div>`),"function"==typeof $("#modaleFileAdmin1").modal&&$("#modaleFileAdmin1").modal("show")}),l(this,"handleAcceptSubmit",(e,t)=>{let a={...t,status:"accepted",commentAdmin:$("#commentary2").val()};this.updateBill(a),this.onNavigate(I.Dashboard)}),l(this,"handleRefuseSubmit",(e,t)=>{let a={...t,status:"refused",commentAdmin:$("#commentary2").val()};this.updateBill(a),this.onNavigate(I.Dashboard)}),l(this,"getBillsAllUsers",()=>{if(this.store)return this.store.bills().list().then(e=>e.map(e=>({id:e.id,...e,date:e.date,status:e.status}))).catch(e=>{throw e})}),l(this,"updateBill",e=>{if(this.store)return this.store.bills().update({data:JSON.stringify(e),selector:e.id}).then(e=>e).catch(console.log)}),this.document=e,this.onNavigate=t,this.store=a,$("#arrow-icon1").click(e=>this.handleShowTickets(e,i,1)),$("#arrow-icon2").click(e=>this.handleShowTickets(e,i,2)),$("#arrow-icon3").click(e=>this.handleShowTickets(e,i,3)),new k({localStorage:s,onNavigate:t})}}let N=`
  <svg xmlns="http://www.w3.org/2000/svg"
  width="0.18in" height="0.12in"
  viewBox="0 0 16 11">
    <path id="Imported Path"
      fill="#979797" stroke="none" stroke-width="0"
      d="M 14.12,0.45
          C 14.12,0.45 8.00,6.56 8.00,6.56
            8.00,6.56 1.88,0.45 1.88,0.45
            1.88,0.45 0.00,2.33 0.00,2.33
            0.00,2.33 8.00,10.33 8.00,10.33
            8.00,10.33 16.00,2.33 16.00,2.33
            16.00,2.33 14.12,0.45 14.12,0.45 Z" />
  </svg>
`,E=e=>{let{data:t,loading:a,error:i}=e;return a?m():i?c(i):`
    <div class='layout '>
      ${r(120)}
      <div class='dashboard-content' data-testid='dashboard-content'>
        <div class='bills-feed'>
          <div class='status-bills-header'>
            <h3> En attente (${C(t&&t.bills,"pending").length}) </h3>
            <span class='arrow-icon' id='arrow-icon1' data-testid='arrow-icon1'>${N}</span>
          </div>
          <div class='status-bills-container' id='status-bills-container1'>
          </div>
          
            <div class='status-bills-header' style='margin-top: 20px;'>
              <h3> Valid\xe9 (${C(t&&t.bills,"accepted").length}) </h3>
              <span class='arrow-icon' id='arrow-icon2' data-testid='arrow-icon2'>${N}</span>
            </div>
            <div class='status-bills-container' id='status-bills-container2'>
            </div>

            <div class='status-bills-header' style='margin-top: 20px;'>
              <h3> Refus\xe9 (${C(t&&t.bills,"refused").length}) </h3>
              <span class='arrow-icon' id='arrow-icon3' data-testid='arrow-icon3'>${N}</span>
            </div>
            <div class='status-bills-container' id='status-bills-container3'>
            </div>

        </div>
        <div class="dashboard-right-container">
          <h3> Validations </h3>
          <div><div id="big-billed-icon" data-testid="big-billed-icon"> ${g} </div></div>
      </div>
    </div>`},I={Login:"/",Bills:"#employee/bills",NewBill:"#employee/bill/new",Dashboard:"#admin/dashboard"},B=e=>{let{pathname:t,data:a,error:i,loading:l}=e;switch(t){case I.Login:return s({data:a,error:i,loading:l});case I.Bills:return b({data:a,error:i,loading:l});case I.NewBill:return`
    <div class='layout'>
      ${r(120)}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Envoyer une note de frais </div>
        </div>
        <div class="form-newbill-container content-inner">
          <form data-testid="form-new-bill">
            <div class="row">
                <div class="col-md-6">
                  <div class="col-half">
                    <label for="expense-type" class="bold-label">Type de d\xe9pense</label>
                      <select id='expense-type' required class="form-control blue-border" data-testid="expense-type">
                        <option>Transports</option>
                        <option>Restaurants et bars</option>
                        <option>H\xf4tel et logement</option>
                        <option>Services en ligne</option>
                        <option>IT et \xe9lectronique</option>
                        <option>Equipement et mat\xe9riel</option>
                        <option>Fournitures de bureau</option>
                      </select>
                  </div>
                  <div class="col-half">
                    <label for="expense-name" class="bold-label">Nom de la d\xe9pense</label>
                    <input id='expense-name' type="text" class="form-control blue-border" data-testid="expense-name" placeholder="Vol Paris Londres" />
                  </div>
                  <div class="col-half">
                    <label for="datepicker" class="bold-label">Date</label>
                    <input id='datepicker' required type="date" class="form-control blue-border" data-testid="datepicker" />
                  </div>
                  <div class="col-half">
                    <label for="amount" class="bold-label">Montant TTC </label>
                    <input id="amount" required type="number" class="form-control blue-border input-icon input-icon-right" data-testid="amount" placeholder="348"/>
                  </div>
                  <div class="col-half-row">
                    <div class="flex-col"> 
                      <label for="vat" class="bold-label">TVA</label>
                      <input id='vat' type="number" class="form-control blue-border" data-testid="vat" placeholder="70" />
                    </div>
                    <div class="flex-col">
                      <label for="pct" class="white-text">%</label>
                      <input id='pct' required type="number" class="form-control blue-border" data-testid="pct" placeholder="20" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="col-half">
                    <label for="commentary" class="bold-label">Commentaire</label>
                    <textarea id='commentary' class="form-control blue-border" data-testid="commentary" rows="3"></textarea>
                  </div>
                  <div class="col-half">
                    <label for="file" class="bold-label">Justificatif</label>
                    <input  id='file' accept='.jpeg, .jpg, .png, .gif' required type="file" class="form-control blue-border" data-testid="file" />
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="col-half">
                  <button  data-testid='btn-send-bill' type="submit" id='btn-send-bill' class="btn btn-primary">Envoyer</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;case I.Dashboard:return E({data:a,error:i,loading:l});default:return s({data:a,error:i,loading:l})}},T="";class A{constructor({document:e,localStorage:t,onNavigate:a,PREVIOUS_LOCATION:i,store:s}){l(this,"handleSubmitEmployee",e=>{e.preventDefault();let t={type:"Employee",email:e.target.querySelector('input[data-testid="employee-email-input"]').value,password:e.target.querySelector('input[data-testid="employee-password-input"]').value,status:"connected"};this.localStorage.setItem("user",JSON.stringify(t)),this.login(t).catch(e=>this.createUser(t)).then(()=>{this.onNavigate(I.Bills),this.PREVIOUS_LOCATION=I.Bills,T=this.PREVIOUS_LOCATION,this.document.body.style.backgroundColor="#fff"})}),l(this,"handleSubmitAdmin",e=>{e.preventDefault();let t={type:"Admin",email:e.target.querySelector('input[data-testid="admin-email-input"]').value,password:e.target.querySelector('input[data-testid="admin-password-input"]').value,status:"connected"};this.localStorage.setItem("user",JSON.stringify(t)),this.login(t).catch(e=>this.createUser(t)).then(()=>{this.onNavigate(I.Dashboard),this.PREVIOUS_LOCATION=I.Dashboard,T=this.PREVIOUS_LOCATION,document.body.style.backgroundColor="#fff"})}),l(this,"login",e=>this.store?this.store.login(JSON.stringify({email:e.email,password:e.password})).then(e=>{let{jwt:t}=e;localStorage.setItem("jwt",t)}):null),l(this,"createUser",e=>this.store?this.store.users().create({data:JSON.stringify({type:e.type,name:e.email.split("@")[0],email:e.email,password:e.password})}).then(()=>(console.log(`User with ${e.email} is created`),this.login(e))):null),this.document=e,this.localStorage=t,this.onNavigate=a,this.PREVIOUS_LOCATION=i,this.store=s,this.document.querySelector('form[data-testid="form-employee"]').addEventListener("submit",this.handleSubmitEmployee),this.document.querySelector('form[data-testid="form-admin"]').addEventListener("submit",this.handleSubmitAdmin)}}class D{constructor({document:e,onNavigate:t,store:a,localStorage:i}){l(this,"handleClickNewBill",()=>{this.onNavigate(I.NewBill)}),l(this,"handleClickIconEye",e=>{let t=e.getAttribute("data-bill-url"),a=Math.floor(.5*$("#modaleFile").width());$("#modaleFile").find(".modal-body").html(`<div style='text-align: center;' class="bill-proof-container"><img width=${a} src=${t} alt="Bill" /></div>`),$("#modaleFile").modal("show")}),l(this,"getBills",()=>{if(this.store)return this.store.bills().list().then(e=>e.map(e=>{try{return{...e,date:u(e.date),status:v(e.status)}}catch(t){return console.log(t,"for",e),{...e,date:e.date,status:v(e.status)}}}))}),this.document=e,this.onNavigate=t,this.store=a;const s=e.querySelector('button[data-testid="btn-new-bill"]');s&&s.addEventListener("click",this.handleClickNewBill);const o=e.querySelectorAll('div[data-testid="icon-eye"]');o&&o.forEach(e=>{e.addEventListener("click",()=>this.handleClickIconEye(e))}),new k({document:e,localStorage:i,onNavigate:t})}}class O{constructor({document:e,onNavigate:t,store:a,localStorage:i}){l(this,"handleChangeFile",e=>{e.preventDefault();let t=this.document.querySelector('input[data-testid="file"]'),a=t.files[0],i=a.name;if(!["image/png","image/jpg","image/jpeg","image/gif"].includes(a.type)){t.files=null,t.value=null,a=void 0,i=void 0,alert("Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont accept\xe9s");return}let l=new FormData;l.append("file",a),l.append("email",this.email),this.store.bills().create({data:l,headers:{noContentType:!0}}).then(e=>{let{filePath:t,id:a,key:l}=e;this.billId=a,this.key=l,this.path=t.replace("public\\","public/"),this.fileName=i}).catch(e=>console.error(e))}),l(this,"handleSubmit",e=>{e.preventDefault();let t=this.document.querySelector('form[data-testid="form-new-bill"]'),a=`${t.querySelector('select[data-testid="expense-type"]').value}`,i=`${t.querySelector('input[data-testid="expense-name"]').value}`,l=parseInt(t.querySelector('input[data-testid="amount"]').value)||0,s=t.querySelector('input[data-testid="datepicker"]').value.toString(),o=`${t.querySelector('input[data-testid="vat"]').value.toString()||"0"}`,d=parseInt(t.querySelector('input[data-testid="pct"]').value)||20,n=`${t.querySelector('textarea[data-testid="commentary"]').value}`,r={name:i,type:a,email:this.email,date:s,vat:o,pct:d,commentary:n,status:"pending",amount:l,fileName:this.fileName,fileUrl:this.path};this.updateBill(r)}),l(this,"updateBill",e=>{this.store&&this.store.bills().update({data:JSON.stringify(e),selector:this.key}).then(()=>{this.onNavigate(I.Bills)}).catch(e=>console.error(e))}),this.document=e,this.onNavigate=t,this.store=a,this.document.querySelector('form[data-testid="form-new-bill"]').addEventListener("submit",this.handleSubmit),this.document.querySelector('input[data-testid="file"]').addEventListener("change",this.handleChangeFile),this.path=null,this.user=JSON.parse(i.getItem("user")),this.email=this.user.email,new k({document:e,localStorage:i,onNavigate:t})}}!function a(i){var l=t[i];if(void 0!==l)return l.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}(884),(()=>{let e=()=>{let e=window.location.pathname,t="/Billed/";return e===t||e===t.slice(0,-1)?"/":e},t=document.getElementById("root");if(t.innerHTML=B({pathname:e()}),window.onNavigate=e=>{let a="/"===e?"/Billed/":e;if(window.history.pushState({},e,window.location.origin+a),e===I.Login)t.innerHTML=B({pathname:e}),document.body.style.backgroundColor="#0E5AE5",new A({document,localStorage,onNavigate,PREVIOUS_LOCATION:T,store:i});else if(e===I.Bills){t.innerHTML=B({pathname:e,loading:!0});let a=document.getElementById("layout-icon1"),l=document.getElementById("layout-icon2");a.classList.add("active-icon"),l.classList.remove("active-icon"),new D({document,onNavigate,store:i,localStorage}).getBills().then(e=>{t.innerHTML=b({data:e});let a=document.getElementById("layout-icon1"),l=document.getElementById("layout-icon2");a.classList.add("active-icon"),l.classList.remove("active-icon"),new D({document,onNavigate,store:i,localStorage})}).catch(a=>{t.innerHTML=B({pathname:e,error:a})})}else if(e===I.NewBill){t.innerHTML=B({pathname:e,loading:!0}),new O({document,onNavigate,store:i,localStorage});let a=document.getElementById("layout-icon1"),l=document.getElementById("layout-icon2");a.classList.remove("active-icon"),l.classList.add("active-icon")}else e===I.Dashboard&&(t.innerHTML=B({pathname:e,loading:!0}),new M({document,onNavigate,store:i,bills:[],localStorage}).getBillsAllUsers().then(e=>{t.innerHTML=E({data:{bills:e}}),new M({document,onNavigate,store:i,bills:e,localStorage})}).catch(a=>{t.innerHTML=B({pathname:e,error:a})}))},window.onpopstate=a=>{a.preventDefault();let i=JSON.parse(localStorage.getItem("user"));"/"!==e()||i?i&&onNavigate(T):(document.body.style.backgroundColor="#0E5AE5",t.innerHTML=B({pathname:e()}))},"/"===e()&&""===window.location.hash)new A({document,localStorage,onNavigate,PREVIOUS_LOCATION:T,store:i}),document.body.style.backgroundColor="#0E5AE5";else if(""!==window.location.hash)if(window.location.hash===I.Bills){t.innerHTML=B({pathname:window.location.hash,loading:!0});let e=document.getElementById("layout-icon1"),a=document.getElementById("layout-icon2");e.classList.add("active-icon"),a.classList.remove("active-icon"),new D({document,onNavigate,store:i,localStorage}).getBills().then(e=>{t.innerHTML=b({data:e});let a=document.getElementById("layout-icon1"),l=document.getElementById("layout-icon2");a.classList.add("active-icon"),l.classList.remove("active-icon"),new D({document,onNavigate,store:i,localStorage})}).catch(e=>{t.innerHTML=B({pathname:window.location.hash,error:e})})}else if(window.location.hash===I.NewBill){t.innerHTML=B({pathname:window.location.hash,loading:!0}),new O({document,onNavigate,store:i,localStorage});let e=document.getElementById("layout-icon1"),a=document.getElementById("layout-icon2");e.classList.remove("active-icon"),a.classList.add("active-icon")}else window.location.hash===I.Dashboard&&(t.innerHTML=B({pathname:window.location.hash,loading:!0}),new M({document,onNavigate,store:i,bills:[],localStorage}).getBillsAllUsers().then(e=>{t.innerHTML=E({data:{bills:e}}),new M({document,onNavigate,store:i,bills:e,localStorage})}).catch(e=>{t.innerHTML=B({pathname:window.location.hash,error:e})}))})()})()})();