let products = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 },
  ];
  products.push({ id: 4, name: "bimbim", count: 100 });
  console.log(products);
  
  let indexId2 = products.findIndex((element) => element.id == 2);
  products.splice(indexId2, 1);
  console.log(products);
  
  let indexId3 = products.findIndex((element) => element.id == 3);
  products[indexId3].count = 0;
  let check = false;
  for (let oj of products) {
    if (oj.name == "Butter") {
      check = true;
      console.log(oj);
      break;
    }
  }
  if (!check) {
    console.log("Không có dữ liệu bạn tìm kiếm");
  }