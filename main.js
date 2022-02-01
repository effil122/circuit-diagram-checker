function main() {
  const diagram = getDiagram();
  let data = new CircuitDiagram(diagram);
  const outList = data.getOutList();
  refreshEstimate(outList)
  // Logger.log(data.getOutList())
}

  // return [
  //     this.getStates(),
  //     this.getStates(),
  //     this.getStates(),
  //     this.getStates(),
  //     onPower.max1g,
  //     onPower.max20g,
  //     onPower.min1g,
  //     onPower.min20g,
  //     this.getResolution(),
  //     'noise',
  //     'noise',
  //     offPower.leakage1g,
  //     offPower.leakage20g,
  //     'noise',
  //     'noise',
  //     this.getPowerConsumption(),
  //     this.getCost(),
  //     this.getPartCount()
  // ]
