
let loginController = ($scope, $state) => {

    $scope.loginUser = function() {
        $state.go('home');
    }

    $scope.notyetavailable = function() {
        alert('This feature is currently not available.');
    }
}

loginController.$inject = [ "$scope", "$state"];

export { loginController };