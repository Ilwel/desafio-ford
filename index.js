const regions = {

  1: 'Norte',
  2: 'Nordeste',
  3: 'Centro-Oeste',
  4: 'Suldeste',
  5: 'Sul'

}

// const podeChegar = {

//   1: false,
//   2: false,
//   3: false,
//   4: false,
//   5: false

// }

const defaultEntrys = [

  {
    in: 1,
    out: 2
  },
  {
    in: 4,
    out: 3
  },
  {
    in: 4,
    out: 5
  }

]

let outputEntrys = defaultEntrys;

function createRoutes(entrys, region) {

  for (entry of entrys) {

    if (canReachAllRegions(entrys, region)) {

      return;

    }

    for (entry2 of entrys) {


      outputEntrys.push(
        {
          in: entry.out,
          out: entry2.in
        }
      )
      if (canReachAllRegions(outputEntrys, region)) {

        console.log(outputEntrys);
        return;

      };
      console.log(outputEntrys);
      outputEntrys.pop();


    }


  }

}

function canReachAllRegions(entrys, region) {

  //por cada região preciso verificar com as entradas disponíeveis se é possível chegar a todas regiões
  const canReach = [];

  for (entry of entrys) {

    if (entry.in === region) {
      canReach.push(entry.out);
    }
    for (entry2 of entrys) {

      if (entry.out === entry2.in) {

        canReach.push(entry2.out);

      }

    }

  }
  // console.log(`${region} -> ${canReach}`);

  if (canReach.length < 5) {

    return false

  }

  return true;

}


//regiões
for (let i = 1; i < 6; i++) {

  console.log(regions[i]);

}
console.log('--');

//saídas
for (entry of defaultEntrys) {

  console.log(`${regions[entry.in]} -> ${regions[entry.out]}`);

}

for (let i = 1; i < 6; i++) {

  let allRegions = false;
  createRoutes(defaultEntrys, i);

}