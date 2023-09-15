//Assignment 23-03-23

var mobiles = [
    [1000, 'samsung', 'samsung f41', 15000, 'snapdragon', 'AMOLED', '4g'],
    [1001, 'samsung', 'samsung A51', 32000, 'snapdragon', 'AMOLED', '5g'],
    [1002, 'redmi', 'not 10 pro', 19000, 'snapdragon', 'LED', '4g'],
    [1003, 'redmi', 'mi 11 lite', 30000, 'mediatek', 'LED', '4g'],
    [1004, 'apple', '12 pro', 72000, 'snapdragon', 'AMOLED', '4g'],
    [1005, 'apple', '12 pro max', 100000, 'snapdragon', 'AMOLED', '5g'],
    [1006, 'one plus', 'nord 2', 29000, 'snapdragon', 'AMOLED', '4g'],
    [1007, 'one plus', 'nord 2', 15000, 'mediatek', 'LED', '4g'],
  ];
  
  //1. print all mobile names 
  let modelname = mobiles.map((ele) => ele[2]);
  console.log(modelname);
  
  //2. print all mobile prices 
  let mobilePrice = mobiles.map((ele) => ele[3]);
  console.log(mobilePrice);
  
  //3. print only mobiles with samsung brand 
  let brandModel = mobiles.filter((ele) => ele[1] == 'samsung');
  console.log(brandModel);
  
  //4. print all mobile phones below 25000
  let budgetRange = mobiles.filter((ele) => ele[3] <= 25000);
  console.log(budgetRange);
  
  //5. print all mobile details of available in price range of 25k to 35k 
  let midRange = mobiles.filter((ele) =>  ele[3] >= 25000 && ele[3] <= 30000 );
  console.log(midRange);

  //6. list all 5g mobile names 
  let FiveG = mobiles.filter((ele) => ele[6]==='5g'?
  console.log(ele[2]):"")
  
  //7. list all 5g mobiles under 35000 
  let highend = mobiles.filter((ele) =>
    ele[3] <= 35000 && ele[6] == '5g'
  );
  console.log(highend);
  
  //8. list all samsung mobile whose band is 4g and display type is AMOLED  
  let samsung4G = mobiles.filter((ele) =>
  ele[1] == 'samsung' && ele[6] == '4g' && ele[5] == 'AMOLED'
  );
  console.log(samsung4G);