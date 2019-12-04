$(document).ready(function () {

    // stl_viewer
    if ($('#stl_cont').length) {
        switch ($('#stl_cont').attr('data-map')) {
            case 'house1-front':
                console.log('The map will display');
                console.log($('#stl_cont').attr('data-map'));
                var stl_viewer = new StlViewer(
                    $('#stl_cont')[0], {
                        models: {
                            id: 55,
                            filename: 'house1.stl',
                            display: 'smooth',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }
                    }
                );
                break;
            case 'house1-door':
                console.log('The map will display');
                console.log($('#stl_cont').attr('data-map'));
                var stl_viewer = new StlViewer(
                    $('#stl_cont')[0], {
                        models: {
                            id: 55,
                            filename: 'house1.stl',
                            x: 0,
                            y: 0,
                            z: 0,
                            display: 'smooth',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }
                    }
                );
                break;
            case 'house2-diag':
                console.log('The map will display');
                console.log($('#stl_cont').attr('data-map'));
                var stl_viewer = new StlViewer(
                    $('#stl_cont')[0], {
                        models: {
                            id: 55,
                            filename: 'house2.stl',
                            x: 0,
                            y: 0,
                            z: 0,
                            display: 'smooth',
                            rotationx: -0.5
                        }
                    }
                );
                break;
            case 'house4-door':
                console.log('The map will display');
                console.log($('#stl_cont').attr('data-map'));
                var stl_viewer = new StlViewer(
                    $('#stl_cont')[0], {
                        models: {
                            id: 55,
                            filename: 'house4.stl',
                            x: 0,
                            y: 0,
                            z: 0,
                            display: 'smooth',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }
                    }
                );
                break;
        }

        //stl_viewer.add_model({id: 55, filename: 'house1.stl'});
        //console.log(JSON.stringify(stl_viewer.get_model_info(55)));
    }

});
