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
            case 'house3OR5':
                if (Cookies.get('6') == 'True') {
                    console.log('The map will display');
                    console.log('house5')
                    var stl_viewer = new StlViewer(
                        $('#stl_cont')[0], {
                            models: {
                                id: 55,
                                filename: 'house5.stl',
                                x: 0,
                                y: 0,
                                z: 0,
                                display: 'smooth',
                                rotationx: -1.5,
                                rotationy: -0.2
                            }
                        }
                    );
                } else {
                    console.log('The map will display');
                    console.log('house3')
                    var stl_viewer = new StlViewer(
                        $('#stl_cont')[0], {
                            models: {
                                id: 55,
                                filename: 'house3.stl',
                                x: 0,
                                y: 0,
                                z: 0,
                                display: 'smooth',
                                rotationx: -1.5,
                                rotationy: -0.2
                            }
                        }
                    );
                };
                break;
            case 'city':
                console.log('The map will display');
                console.log($('#stl_cont').attr('data-map'));
                var stl_viewer = new StlViewer(
                    $('#stl_cont')[0], {
                        models: [{
                            id: 22,
                            filename: 'sam_road.stl',
                            display: 'smooth',
                            color: '#909090',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }, {
                            id: 33,
                            filename: 'sam_rot.stl',
                            display: 'smooth',
                            color: '#333333',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }, {
                            id: 44,
                            filename: 'sam_res.stl',
                            display: 'smooth',
                            color: '#b84848',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }, {
                            id: 55,
                            filename: 'sam_daeg.stl',
                            display: 'smooth',
                            color: '#4860b8',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }, {
                            id: 66,
                            filename: 'sam_art.stl',
                            display: 'smooth',
                            color: '#489ab8',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }, {
                            id: 77,
                            filename: 'sam_fac.stl',
                            display: 'smooth',
                            color: '#b88b48',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }, {
                            id: 88,
                            filename: 'sam_man.stl',
                            display: 'smooth',
                            color: '#b848a7',
                            rotationx: -1.5,
                            rotationy: -0.2
                        }]
                    }
                );
                break;
        }

        //stl_viewer.add_model({id: 55, filename: 'house1.stl'});
        //console.log(JSON.stringify(stl_viewer.get_model_info(55)));
    }

});
