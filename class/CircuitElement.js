class CircuitElement {
    constructor(row) {
        this.elementName = row[SHEET_ELEMENT.column.element_name - 1];
        this.gainOnMin1G = row[SHEET_ELEMENT.column.gain_on_min_1g - 1];
        this.gainOnTyp1G = row[SHEET_ELEMENT.column.gain_on_typ_1g - 1];
        this.gainOnMax1G = row[SHEET_ELEMENT.column.gain_on_max_1g - 1];
        this.gainOnMin20G = row[SHEET_ELEMENT.column.gain_on_min_20g - 1];
        this.gainOnTyp20G = row[SHEET_ELEMENT.column.gain_on_typ_20g - 1];
        this.gainOnMax20G = row[SHEET_ELEMENT.column.gain_on_max_20g - 1];
         
        this.gainOffMin1G = row[SHEET_ELEMENT.column.gain_off_min_1g - 1];
        this.gainOffTyp1G = row[SHEET_ELEMENT.column.gain_off_typ_1g - 1];
        this.gainOffMax1G = row[SHEET_ELEMENT.column.gain_off_max_1g - 1];
        this.gainOffMin20G = row[SHEET_ELEMENT.column.gain_off_min_20g - 1];
        this.gainOffTyp20G = row[SHEET_ELEMENT.column.gain_off_typ_20g - 1];
        this.gainOffMax20G = row[SHEET_ELEMENT.column.gain_off_max_20g - 1];
         
        this.nf1G = row[SHEET_ELEMENT.column.nf_1g - 1];
        this.nf20G = row[SHEET_ELEMENT.column.nf_20g - 1];
        this.cost = row[SHEET_ELEMENT.column.cost - 1];
        this.powerConsumption = row[SHEET_ELEMENT.column.power_consumption - 1];
        this.p1db = row[SHEET_ELEMENT.column.p1db - 1];
        this.maxAtt = row[SHEET_ELEMENT.column.max_att - 1];
        this.step = row[SHEET_ELEMENT.column.step - 1];
    }
}