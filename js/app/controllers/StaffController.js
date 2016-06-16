function StaffController() {
  var vm = this;
  vm.name = "Dan";
  vm.email = "dan@email.com";
  vm.phone = "111-111-1111"
 
}

angular
    .module('app')
    .controller('StaffController', StaffController);