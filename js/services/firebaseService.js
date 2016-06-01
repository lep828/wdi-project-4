angular
  .module("PairProgramming")
  .service("FirebaseService", FirebaseService);

function FirebaseService(){
  var self = this;

  self.addData = addData;
  self.updateNode = updateNode;

  function updateNode(node, data, user){
    $.ajax({
      url: "/update/" + user.login + "/" + node,
      method: "POST",
      data: data
    }).done(function(res){
      // console.log(atob(res.content));
      console.log("updated stuff");
    });
  }

  function addData(data){
    $.ajax({
      url: "/add",
      method: "POST",
      data: data
    }).done(function(res){
      console.log(res);
    });
  }
}
