
class Table {
  constructor(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
  }
}

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
    <style>
        .title {
            background-color:#d3d3d3;
            border-radius: 25px;
            padding-bottom: 64px;
        }

    </style>
</head>
<body>
    <div class="container title">
        <i class="fas fa-fire"></i>
        <h1 class="text-center">Hot Restaurant </h1>
        <hr></hr>
        <h2 class="text-center">Current Reservation and Waiting List</h2>
     <div class="text-center">
        
        <button type="button" class="btn btn-danger btn-lg">Make Reservation</button>
        <button type="button" class="btn btn-light btn-lg">Home</button>
     </div>
     </div>
        <div class="container row">
            <div class="col"></div>
            <div class="col-lg-6">
                <div class="card border-light mb-3 justify-center">
                    <div class="card-body">
                      <h5 class="card-title">${this.name}</h5>
                      <ul>
                        <li>${this.id}</li>
                        <li>${this.phone}</li>
                        <li>${this.email}</li>
                    </div>
                  </div>
            </div>
            <div class="col"></div>

        </div>

    
    <div class="footer">

        
    </div>
</body>
</html>`


module.exports = Table;

