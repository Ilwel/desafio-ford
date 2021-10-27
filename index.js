const regions = {

  1: 'Norte',
  2: 'Nordeste',
  3: 'Centro-Oeste',
  4: 'Suldeste',
  5: 'Sul'

}

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

let output = 0;

let outputEntrys = defaultEntrys;

// outputEntrys.push({

//   in: 2,
//   out: 4

// })

function createRoutes(entrys, region) {

  //criar rotas enquanto não poder chegar em todos os lugares dada tal região

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

        // console.log(outputEntrys);
        output++;
        return;

      };
      outputEntrys.pop();


    }


  }

}

function canReachAllRegions(entrys, region) {

  //por cada região preciso verificar com as entradas disponíeveis se é possível chegar a todas regiões
  const canReach = [];

  for (entry of entrys) {

    if (entry.in === region) {
      if (!canReach.includes(entry.out) && entry.in !== entry.out) {
        canReach.push(entry.out);
      }
    }
    for (entry2 of entrys) {

      if (entry.out === entry2.in) {

        if (!canReach.includes(entry2.out) && entry.in !== entry2.out) {
          canReach.push(entry2.out);
        }

      }

    }

  }
  console.log(`${region} -> ${canReach}`);

  if (canReach.length < 4) {

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

  createRoutes(defaultEntrys, i);

}

console.log(output);

for (entry of outputEntrys) {

  console.log(`${regions[entry.in]} -> ${regions[entry.out]}`);

}

/*

considerações finais:

o código esta com bugs e ainda não faz o que o enunciado pede

faltou eu verificar se as ligações estão coerentes

além disso, está com a complexiadade muito alta, existem muitos laços dentro de laços

com um pouco mais de tempo eu resolveria esses problemas

*/