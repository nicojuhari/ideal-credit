import { formatDate, addMonths } from './date';

export const createGrafic = (
    suma_contract,
    termen_contract,
    dobinda,
    data_start,
    creditRateToPay = 0,
    rataCreditDorita = 0,
    rataTotalDorita = 0,
    startRata = 0,
    dataAchitaStart = ""
) => {
    let rata = {};
    let grafic = [];
    let termenCredit = 0;
    let totalInsertedRates = 0;
    let creditRata = 0;
    let totalRata = 0;
    rataCreditDorita = Number(rataCreditDorita);
    rataTotalDorita = Number(rataTotalDorita);
    // calc in cite luni se achita credit
    termenCredit = creditRateToPay || termen_contract;
    // calc credit rata
    if (rataCreditDorita > 0 && (rataTotalDorita == 0 || !rataTotalDorita)) {
        creditRata = rataCreditDorita;
    } else {
        creditRata = Math.round(suma_contract / termenCredit);
    }
    for (var i = 0; i < Number(termen_contract); i++) {
        rata = {
            nr_rata: 0,
            data_rata: "",
            credit_rata: 0,
            dobinda_rata: 0,
            total_rata: 0,
        };
        // nr rata - 0
        let nrRata = startRata + i + 1;
        //data rata - 1
        let dataRata = "";
        if (dataAchitaStart) {
            dataRata = formatDate(addMonths(i, dataAchitaStart));
        } else {
            dataRata = formatDate(addMonths(i + 1, data_start));
        }
        //dobinda din sold - 3
        let dobindaRata = Math.round(
            (Number(dobinda) * (Number(suma_contract) - totalInsertedRates)) / 100
        );
        // if custom date exist , on first month
        if (dataAchitaStart && dataAchitaStart != data_start && i == 0) {
            let diffDays = daysBetween(data_start, dataRata);
            // //check id custom date is bigger than original rata date
            if (diffDays > 0) {
                dobindaRata = Math.round((dobindaRata / 30.5) * diffDays);
            }
        }
        //calc the credit rata, based on total rata dorita
        if (rataTotalDorita > 0 && rataTotalDorita >= dobindaRata) {
            creditRata = rataTotalDorita - dobindaRata;
        }
        //calc last rata credit - 2
        if (Number(termen_contract) == i + 1)
            creditRata = Number(suma_contract) - totalInsertedRates;
        //total lunar - 4
        if (i >= Number(termen_contract) - termenCredit) {
            totalRata = creditRata + dobindaRata;
        } else {
            totalRata = dobindaRata;
        }
        //total Inserted Rates - for local only
        if (i >= Number(termen_contract) - termenCredit) {
            totalInsertedRates = totalInsertedRates + creditRata;
        }
        if (totalInsertedRates > Number(suma_contract)) {
            alert("Suma Total Lunară este prea mare, incercati o suma mai mica");
            return [];
        }
        //0
        rata.nr_rata = nrRata;
        //1
        rata.data_rata = dataRata;
        //2
        if (i >= termen_contract - termenCredit) rata.credit_rata = creditRata; // else is 0, by default
        //3
        rata.dobinda_rata = dobindaRata;
        //4
        rata.total_rata = totalRata;
        //add one rata to grafic array
        grafic.push(rata);
    } //for
    //return
    return grafic;
};

export const addGraficOnPage = (grafic, elementRef, sumaCredit = 0) => {
    let trHTML = "";
    let rataClass = "";
    let soldCredit = sumaCredit;
    //check if is not empty
    if (grafic.length == 0) return;
    elementRef.innerHTML = "";
    grafic.forEach((rata, idx) => {
        rataClass = "activ";
        if (rata.statut < 0) rataClass = "restant";
        if (rata.statut == 1) rataClass = "achitat";
        if (idx > 0) soldCredit = soldCredit - rata.credit_rata;
        trHTML += `<tr class="grid-table-row">
                      <td class="grid-cell status ${rataClass}">${rata.nr_rata}</td>
                      <td class="grid-cell">${formatDate(rata.data_rata, true)}</td>
                      ${sumaCredit > 0 ? `<td class="grid-cell">${soldCredit}</td>` : ""}
                      <td class="grid-cell">${rata.credit_rata}</td>
                      <td class="grid-cell">${rata.dobinda_rata}</td>
                      <td class="grid-cell">${rata.total_rata}</td>
                  </tr>`;
    });
    elementRef.innerHTML = trHTML;
};
