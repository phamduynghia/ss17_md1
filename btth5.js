
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

// C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1

// R – In ra toàn bộ các sản phẩm trong stores và carts

// U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts

// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 },
  ];
  let carts = [];
  
  function wathch() {
    console.log(stores);
    console.log(carts);
  }
  function buyProduct() {
    let choose = "";
    do {
      choose = prompt(`enter choose : 
          "c" : mua sản phẩm 
          "r" : xem sản phẩm và giỏ hàng
          "u" : cập nhật giỏ hàng
          "d" : xóa sản phẩm trong giỏ hàng
          "e" : thoát chương trình
          `).toLowerCase();
    } while (
      choose != "c" &&
      choose != "r" &&
      choose != "u" &&
      choose != "d" &&
      choose != "e"
    );
    switch (choose) {
      case "c": {
        let productName = prompt(
          "Please enter name product want buy !"
        ).toLocaleLowerCase();
        let indexProduct = stores.findIndex(
          (element) => element.name.toLowerCase() == productName
        );
        if (indexProduct == -1) {
          alert("Không tìm thấy sản phẩm !");
        } else {
          let quantity = +prompt("Enter quantity : ");
          while (quantity > stores[indexProduct].count) {
            alert("Số lượng bạn mua vượt quá số lượng tồn kho !");
            quantity = +prompt("Enter quantity : ");
          }
  
          let newProduct = { ...stores[indexProduct], count: quantity };
          if (carts.findIndex((element) => element.id == newProduct.id) != -1) {
            carts[
              carts.findIndex((element) => element.id == newProduct.id)
            ].count += quantity;
          } else {
            carts.push(newProduct);
          }
          stores[indexProduct].count -= quantity;
          wathch();
        }
        break;
      }
      case "r": {
        wathch();
        break;
      }
      case "u": {
        let indexProduct = +prompt(
          `Enter index want update from 1 to ${carts.length}`
        );
        while (indexProduct < 1 || indexProduct > carts.length) {
          indexProduct = +prompt(
            `Enter index want update from 1 to ${carts.length}`
          );
        }
        let quantity = +prompt("Enter quantity product want update :");
        while (quantity > stores[indexProduct].count || quantity <= 0) {
          alert("Số lượng bạn mua vượt quá số lượng tồn kho !");
          quantity = +prompt("Enter quantity : ");
        }
        carts[indexProduct - 1].count = quantity;
        wathch();
        break;
      }
      case "d": {
        let indexProduct = +prompt(
          `Enter index want delete from 1 to ${carts.length}`
        );
        while (indexProduct < 1 || indexProduct > carts.length) {
          indexProduct = +prompt(
            `Enter index want update from 1 to ${carts.length}`
          );
        }
        carts.splice(indexProduct - 1, 1);
        wathch();
        break;
      }
      case "e": {
        alert("Cảm ơn bạn đã đến với Rikkei Academy");
        return;
      }
    }
    buyProduct();
  }
  buyProduct();
  