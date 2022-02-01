var SS_ID = '15t8D1wp6f6z0JgwrUsawrcV1QPu2z7CKLj3CjdLuZlM';

var SHEET_DIAGRAM = {
    name: '回路図',
    range: 'A1:O6',
    estimate: {
        row: 9,
        col: 6,
    }
};

var SHEET_ELEMENT = {
    name: '素子',
    row: 3,
    column: {
        element_name: 1,
        gain_on_min_1g: 2,
        gain_on_typ_1g: 3,
        gain_on_max_1g: 4,
        gain_on_min_20g: 5,
        gain_on_typ_20g: 6,
        gain_on_max_20g: 7,

        gain_off_min_1g: 8,
        gain_off_typ_1g: 9,
        gain_off_max_1g: 10,
        gain_off_min_20g: 11,
        gain_off_typ_20g: 12,
        gain_off_max_20g: 13,

        nf_1g: 14,
        nf_20g: 15,
        cost: 16,
        power_consumption: 17,
        p1db: 18,
        max_att: 19,
        step: 20,
    },
};


function getDiagram() {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(SHEET_DIAGRAM.name);
    let data = sheet.getRange(SHEET_DIAGRAM.range).getValues();
    data = data.filter(row => row.some(col => col !== ''));
    data = [data[0].filter(col => col)];
    return data;
}

function getElementList() {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(SHEET_ELEMENT.name);
    let data = sheet.getDataRange().getValues();
    [...Array(SHEET_ELEMENT.row)].forEach(_ => {
        data.shift();
    });
    data = data.map(row => new CircuitElement(row));
    return data;
}


function refreshEstimate(outList) {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(SHEET_DIAGRAM.name);
    sheet.getRange(SHEET_DIAGRAM.estimate.row, SHEET_DIAGRAM.estimate.col, outList.length, outList[0].length).setValues(outList);
}

// function refreshSheet(sheetName, outList, startColumn = 4, startRow = 8) {
//     const sheet = SpreadsheetApp.openById(SS_MONTHLY_ID).getSheetByName(sheetName);
//     sheet.getRange(startRow, startColumn, outList.length, outList[0].length).setValues(outList);
// }




