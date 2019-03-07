
class CareerPortalHeaderController {

    constructor(configuration, $location, SearchService, $window, $scope) {
        'ngInject';

        this.SearchService = SearchService;
        this.$location = $location;
        this.window = angular.element($window);
        this.currentWidth = $window.innerWidth;
        this.configuration = configuration;
        this.isMenuOpen = false;
        this.hover = '';

        this.window.bind('resize', () => {
            this.currentWidth = $window.innerWidth;
            $scope.$apply();
        });
    }

    toggleFilters() {
        let $portalCanvas = document.querySelector('.portal-canvas');
        let $mask = document.querySelector('#mask');

        if ($portalCanvas) {
            $portalCanvas.classList.toggle('show-nav');
        }

        if ($mask) {
            $mask.classList.toggle('active');
        }
    }

    goBack() {
        this.$location.path('/jobs');
    }
}

class CareerPortalHeader {
    constructor() {
        'ngInject';

        let directive = {
            restrict: 'E',
            templateUrl: 'app/header/header.html',
            scope: false,
            controller: CareerPortalHeaderController,
            controllerAs: 'header',
            bindToController: true,
            replace: true
        };

        return directive;
    }
}

export default CareerPortalHeader;
