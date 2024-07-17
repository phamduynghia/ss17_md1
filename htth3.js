// tạo 2 class
class User {
    constructor(id, name, email, address, phonenumber) {
      this.id = id;
      (this.name = name),
        (this.email = email),
        (this.address = address),
        (this.phonenumber = phonenumber),
        (this.role = 0);
    }
  }
  
  class Admin extends User {
    constructor(id, name, email, address, phonenumber) {
      super(id, name, email, address, phonenumber);
      this.role = 1;
    }
  }
  
  // khởi tạo 3 đối tượng từ class User và 1 đối tượng từ class Admin
  const users = [
    new User(1, "huong", "huongcaoha1994@gmail.com", "Hà Nội", "0367508795"),
    new User(2, "trang", "trang@gmail.com", "Hà Nội", "0367508796"),
    new User(3, "nhien", "nhien@gmail.com", "Hà Nội", "0367508797"),
    new Admin(4, "huong2", "huongcaoha1994@gmail.com", "Hà Nội", "0367508795"),
  ];
  console.log(users);
  
  // xóa 1 phần tử với tên bất kì nếu role == 1 (Admin) thì ko xóa đc
  let index = users.findIndex((element) => element.name == "huong2");
  if (index == -1) {
    console.log("Not found name");
  } else {
    if (users[index].role == 1) {
      console.log("Không xóa đc admin");
    } else {
      users.splice(index, 1);
    }
  }
  console.log(users);
  
  // sửa 1 phần tử thông qua id nếu role == 1 thì ko sửa đc
  let id = 1;
  let index1 = users.findIndex((element) => element.id == id);
  if (users[index1].role == 1) {
    console.log("Không thể sửa đối tượng admin");
  } else {
    users[index1].phonenumber = "0888888888";
  }
  console.log(users);
  
  //Thêm 1 nick admin vào mảng danh sách người dùng. Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
  users.push(new Admin(5, "admin2", "admin2@gmail.com", "Hà Tây", "0123456789"));
  let arrAdmin = users.filter((element) => element.role == 1);
  console.log(arrAdmin);