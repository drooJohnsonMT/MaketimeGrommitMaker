mtMaker.controller('GrommetMakerCtrl', function ($scope) {
            $scope.pageTitle = "Grommet Maker";
            $scope.materials = [{
                name: 'aluminum',
                value: 'aluminum',
                colors: ['#0000FF','#000099']
            }, {
                name: 'plastic',
                value: 'plastic',
                colors: ['#00FF00','#009900']
            }, {
                name: 'steel',
                value: 'steel',
                colors: ['#FF0000','#990000']
            }, {
                name: 'titanium',
                value: 'titanium',
                colors: ['#00FFFF','#009999']
            }, {
                name: 'wood',
                value: 'wood',
                colors: ['#FFFF00','#999900']
            }, {
                name: 'glass',
                value: 'glass',
                colors: ['#FF00FF','#990099']
            }];
            $scope.grommet = {};
            $scope.grommet.innerDimension = 10;
            $scope.grommet.outerDimension = 25;
            $scope.grommet.thickness = 1;
            $scope.grommet.material = $scope.materials[1];
});