class CircuitDiagram {
    constructor(diagram) {
        this.input = diagram[0][0];
        this.diagram = diagram;
        this.diagramData = this.getDiagramData();
    }
    getDiagramData() {
        let elementList = getElementList();
        this.diagram[0].splice(0, 2);
        let diagramData = this.diagram[0].map(element => elementList.filter(row => row.elementName === element)[0]);
        return diagramData;
    }

    getOutList() {
        const onPower = this.getOnPower();
        const offPower = this.getOffPower();
        return [
            [this.getStates()],
            [this.getStates()],
            [this.getStates()],
            [this.getStates()],
            [onPower.max1g],
            [onPower.max20g],
            [onPower.min1g],
            [onPower.min20g],
            [this.getResolution()],
            ['noise'],
            ['noise'],
            [offPower.leakage1g],
            [offPower.leakage20g],
            ['noise'],
            ['noise'],
            [this.getPowerConsumption()],
            [this.getCost()],
            [this.getPartCount()]
        ]
    }

    getStates() {
        if (this.isStates()) {
            return 'available'
        } else {
            return 'unavailable'
        }
    }
    isStates() {
        return (this.diagram[0].some(element => element === 'PowerDriver'))
        // && this.diagram[0].some(element => element.match('SW') !== null)
    }

    getOnPower() {
        const maxAtt = this.diagramData.map(element => element.maxAtt).reduce((sum, n) => sum + n);
        const power = {
            max1g: this.input + this.diagramData.map(element => element.gainOnMin1G).reduce((sum, n) => sum + n),
            max20g: this.input + this.diagramData.map(element => element.gainOnMin20G).reduce((sum, n) => sum + n),
            min1g: this.input + this.diagramData.map(element => element.gainOnMax1G).reduce((sum, n) => sum + n) - maxAtt,
            min20g: this.input + this.diagramData.map(element => element.gainOnMax20G).reduce((sum, n) => sum + n) - maxAtt,
        }
        return power
    }

    getResolution() {
        const stepList = this.diagramData.map(element => element.step).filter(step => step)
        const resolution = stepList.reduce((a, b) => Math.min(a, b));
        return resolution
    }

    getOffPower() {
        const power = {
            leakage1g: this.input + this.diagramData.map(element => element.gainOffMax1G).reduce((sum, n) => sum + n),
            leakage20g: this.input + this.diagramData.map(element => element.gainOffMax20G).reduce((sum, n) => sum + n),
        }
        return power
    }

    getPowerConsumption() {
        const powerConsumption = this.diagramData.map(element => element.powerConsumption).reduce((sum, n) => sum + n);
        return powerConsumption
    }

    getCost() {
        const costList = this.diagramData.map(element => element.cost);
        const branch = this.diagram[0].indexOf('PowerDriver') + 1;
        const cost = costList.reduce((sum, n) => sum + n) + costList.slice(branch).reduce((sum, n) => sum + n);
        return cost
    }

    getPartCount() {
        const branch = this.diagram[0].indexOf('PowerDriver') + 1;
        const rowParts = this.diagram[0].length;
        const partCount = 2 * rowParts - branch;
        return partCount
    }

}