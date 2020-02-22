class Table {
  constructor(name, phone, email, id){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
  }
  genericMethod(){
    console.log("Change this or delete this as needed.")
  }
}

module.exports = Table;